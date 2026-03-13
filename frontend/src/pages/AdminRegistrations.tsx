import { useState, useEffect, useMemo } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, Search, ArrowUpDown, Loader } from "lucide-react";

interface Registration {
  id: string;
  name: string;
  email: string;
  country: string | null;
  contribution_types: string[];
  interest_areas: string[];
  role: string;
  message: string;
  created_at: string;
}

const AdminRegistrations = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchEmail, setSearchEmail] = useState("");
  const [filterCountry, setFilterCountry] = useState("all");
  const [filterRole, setFilterRole] = useState("all");
  const [sortAsc, setSortAsc] = useState(false);

  useEffect(() => {
    const fetchRegistrations = async () => {
      const { data, error } = await supabase
        .from("registrations")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) setRegistrations(data as unknown as Registration[]);
      setLoading(false);
    };
    fetchRegistrations();
  }, []);

  const countries = useMemo(() => [...new Set(registrations.map(r => r.country).filter(Boolean))], [registrations]);
  const roles = useMemo(() => [...new Set(registrations.map(r => r.role))], [registrations]);

  const filtered = useMemo(() => {
    let result = [...registrations];
    if (searchEmail) result = result.filter(r => r.email.toLowerCase().includes(searchEmail.toLowerCase()));
    if (filterCountry !== "all") result = result.filter(r => r.country === filterCountry);
    if (filterRole !== "all") result = result.filter(r => r.role === filterRole);
    result.sort((a, b) => {
      const diff = new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
      return sortAsc ? diff : -diff;
    });
    return result;
  }, [registrations, searchEmail, filterCountry, filterRole, sortAsc]);

  const exportCSV = () => {
    const headers = ["name", "email", "country", "role", "contribution_types", "interest_areas", "message", "created_at"];
    const rows = filtered.map(r => [
      r.name, r.email, r.country || "", r.role,
      (r.contribution_types || []).join("; "),
      (r.interest_areas || []).join("; "),
      r.message || "", r.created_at
    ]);
    const csv = [headers.join(","), ...rows.map(row => row.map(v => `"${String(v).replace(/"/g, '""')}"`).join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `registrations-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-serif font-bold">Admin — Registrations</h1>
          <Button onClick={exportCSV} variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export CSV
          </Button>
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search by email..."
              value={searchEmail}
              onChange={(e) => setSearchEmail(e.target.value)}
              className="pl-9"
            />
          </div>
          <Select value={filterCountry} onValueChange={setFilterCountry}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All countries</SelectItem>
              {countries.map(c => <SelectItem key={c} value={c!}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={filterRole} onValueChange={setFilterRole}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All roles</SelectItem>
              {roles.map(r => <SelectItem key={r} value={r}>{r}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <p className="text-sm text-muted-foreground">{filtered.length} registration(s)</p>

        <div className="border rounded-lg overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Contributions</TableHead>
                <TableHead>Interests</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>
                  <button onClick={() => setSortAsc(!sortAsc)} className="flex items-center gap-1">
                    Date <ArrowUpDown className="w-3 h-3" />
                  </button>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map(r => (
                <TableRow key={r.id}>
                  <TableCell className="font-medium">{r.name}</TableCell>
                  <TableCell>{r.email}</TableCell>
                  <TableCell>{r.country || "—"}</TableCell>
                  <TableCell>{r.role}</TableCell>
                  <TableCell className="max-w-[200px] truncate">{(r.contribution_types || []).join(", ")}</TableCell>
                  <TableCell className="max-w-[200px] truncate">{(r.interest_areas || []).join(", ")}</TableCell>
                  <TableCell className="max-w-[200px] truncate">{r.message || "—"}</TableCell>
                  <TableCell className="whitespace-nowrap">{new Date(r.created_at).toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
              {filtered.length === 0 && (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">No registrations found</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AdminRegistrations;
