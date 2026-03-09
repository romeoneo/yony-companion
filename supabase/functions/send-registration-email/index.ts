import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
  if (!RESEND_API_KEY) {
    return new Response(JSON.stringify({ error: "RESEND_API_KEY not configured" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const ADMIN_EMAIL = Deno.env.get("ADMIN_EMAIL") || "admin@yonyverse.com";

  try {
    const { name, email, country, role, contribution_types, interest_areas, message } = await req.json();

    // Send confirmation email to user
    const userEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "Yonyverse Community <community@yonyverse.com>",
        to: [email],
        subject: "Welcome to the Yonyverse",
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <h1 style="color: #1a1a1a; font-size: 28px;">Welcome to the Yonyverse, ${name}!</h1>
            <p style="color: #555; font-size: 16px; line-height: 1.6;">
              Thank you for joining the Yonyverse community. Here's a summary of your registration:
            </p>
            <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Role:</strong> ${role}</p>
              <p><strong>Contribution types:</strong> ${(contribution_types || []).join(", ") || "—"}</p>
              <p><strong>Areas of interest:</strong> ${(interest_areas || []).join(", ") || "—"}</p>
            </div>
            <p style="color: #555; font-size: 16px; line-height: 1.6;">
              Our team will review your profile and contact you with the next steps.
            </p>
            <p style="color: #555; font-size: 16px;">We Are Born To Impact.</p>
            <p style="color: #e4592f; font-weight: bold;">— The Yonyverse Team</p>
          </div>
        `,
      }),
    });

    if (!userEmailRes.ok) {
      const errBody = await userEmailRes.text();
      console.error("User email failed:", errBody);
    }

    // Send admin notification email
    const adminEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "Yonyverse <noreply@yonyverse.com>",
        to: [ADMIN_EMAIL],
        subject: `New Registration: ${name} — ${role}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px;">
            <h2>New Yonyverse Registration</h2>
            <table style="width:100%; border-collapse: collapse;">
              <tr><td style="padding:8px; border-bottom:1px solid #eee;"><strong>Name</strong></td><td style="padding:8px; border-bottom:1px solid #eee;">${name}</td></tr>
              <tr><td style="padding:8px; border-bottom:1px solid #eee;"><strong>Email</strong></td><td style="padding:8px; border-bottom:1px solid #eee;">${email}</td></tr>
              <tr><td style="padding:8px; border-bottom:1px solid #eee;"><strong>Country</strong></td><td style="padding:8px; border-bottom:1px solid #eee;">${country || "—"}</td></tr>
              <tr><td style="padding:8px; border-bottom:1px solid #eee;"><strong>Role</strong></td><td style="padding:8px; border-bottom:1px solid #eee;">${role}</td></tr>
              <tr><td style="padding:8px; border-bottom:1px solid #eee;"><strong>Contributions</strong></td><td style="padding:8px; border-bottom:1px solid #eee;">${(contribution_types || []).join(", ")}</td></tr>
              <tr><td style="padding:8px; border-bottom:1px solid #eee;"><strong>Interests</strong></td><td style="padding:8px; border-bottom:1px solid #eee;">${(interest_areas || []).join(", ")}</td></tr>
              <tr><td style="padding:8px; border-bottom:1px solid #eee;"><strong>Message</strong></td><td style="padding:8px; border-bottom:1px solid #eee;">${message || "—"}</td></tr>
            </table>
          </div>
        `,
      }),
    });

    if (!adminEmailRes.ok) {
      const errBody = await adminEmailRes.text();
      console.error("Admin email failed:", errBody);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Unknown error";
    console.error("Error:", msg);
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
