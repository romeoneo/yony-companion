import coverAngel from "@/assets/cover-angel.jpg";
import coverGuard from "@/assets/cover-guard.jpg";
import coverLight from "@/assets/cover-light.jpg";
import coverStar from "@/assets/cover-star.jpg";
import coverSeed from "@/assets/cover-seed.jpg";
import coverPlace from "@/assets/cover-place.jpg";
import coverMedia from "@/assets/cover-wind.jpg";
import coverBrand from "@/assets/cover-brand.jpg";
import avatarAngel from "@/assets/avatar-angel.jpg";
import avatarGuard from "@/assets/avatar-guard.jpg";
import avatarLight from "@/assets/avatar-light.jpg";
import avatarStar from "@/assets/avatar-star.jpg";
import avatarSeed from "@/assets/avatar-seed.jpg";
import avatarPlace from "@/assets/avatar-place.jpg";
import avatarMedia from "@/assets/avatar-wind.jpg";
import avatarBrand from "@/assets/avatar-brand.jpg";

export type ArchetypeKey = "light" | "star" | "place" | "seed" | "media" | "brand" | "angel" | "guard";

export interface QuizQuestion {
  question: string;
  answers: string[];
  correctIndex: number;
  explanation: string;
}

export interface Archetype {
  key: ArchetypeKey;
  label: string;
  role: string;
  element: string;
  themeClass: string;
  coverImage: string;
  avatarImage: string;
  mission: string;
  profileName: string;
  location: string;
  quote: string;
  followers: string;
  community: string;
  spins: string;
  challenges: string;
  streak: string;
  philosophy: string;
  values: { title: string; description: string }[];
  missionLong: string[];
  teamName: string;
  teamBio: string;
  teamFounded: string;
  offers: { name: string; description: string; price?: string }[];
  explorer: QuizQuestion[];
  lifeNews: { title: string; date: string; description: string }[];
  communityPolls: { question: string; options: string[] }[];
  challengePrompt: string;
  impactLinks: { label: string; archetype: string }[];
  tabs: string[];
}

export const archetypes: Archetype[] = [
  {
    key: "light",
    label: "Light",
    role: "Yony Light",
    element: "Feu",
    themeClass: "theme-light",
    coverImage: coverLight,
    avatarImage: avatarLight,
    mission: "Amplifier les voix qui changent le monde et illuminer les causes oubliées.",
    profileName: "Maya Solis",
    location: "Cusco, Peru",
    quote: "Sharing moments of light with the world.",
    followers: "124K",
    community: "8,420",
    spins: "124",
    challenges: "96",
    streak: "12 days",
    philosophy: "Partager des moments de lumière.",
    values: [
      { title: "Authenticité", description: "Nous croyons aux histoires vraies, partagées avec vulnérabilité et courage." },
      { title: "Connexion Humaine", description: "Chaque rencontre, chaque question posée porte une intention de connexion." },
      { title: "Impact Mesuré", description: "Chaque action est suivie, chaque résultat est partagé avec transparence." },
      { title: "Culture Fondatrice", description: "La diversité culturelle est notre force créative et notre inspiration." },
    ],
    missionLong: [
      "Maya connecte les humains à travers des histoires, des rencontres et des questions simples qui révèlent la beauté cachée du quotidien et transforment chaque moment en lumière partagée.",
      "Imaginée par une exploratrice qui rêve d'un monde où chaque conversation compte, cette mission est née de la conviction que chaque question posée à un inconnu porte une culture, chaque réponse crée un lien, et chaque moment de lumière peut changer une vie.",
    ],
    teamName: "Maya Solis",
    teamBio: "Exploratrice sociale et créatrice de contenu engagée. Fondatrice du mouvement 'Light Moments' qui documente les micro-connexions humaines à travers le monde.",
    teamFounded: "2022",
    offers: [
      { name: "Light Moment Workshop", description: "Apprenez l'art de la connexion instantanée", price: "49€" },
      { name: "Pack Storytelling", description: "16 templates de récits visuels engagés", price: "29€" },
      { name: "Bloom Elevation Program", description: "Programme de 8 semaines pour amplifier votre voix", price: "199€" },
    ],
    explorer: [
      { question: "Quelle a été la toute première communauté mise en lumière par Maya Solis lors de son expédition en 2024 ?", answers: ["Les tisseurs du désert", "Les gardiens des récifs", "Les nomades des steppes"], correctIndex: 1, explanation: "Maya a commencé par documenter les gardiens des récifs coralliens au large de Bali." },
      { question: "Quel est l'objectif principal du fragment 'Bloom Elevation' ?", answers: ["Construire des puits", "Documenter 16 cultures via le storytelling", "Planter 1 million d'arbres"], correctIndex: 1, explanation: "Bloom Elevation vise à documenter et amplifier 16 cultures menacées." },
    ],
    lifeNews: [
      { title: "Expédition Lumière #7", date: "Mars 2026", description: "Nouvelle série documentaire sur les artisans du sel au Pérou." },
      { title: "TED Talk confirmé", date: "Juin 2026", description: "Intervention sur le pouvoir des micro-connexions humaines." },
    ],
    communityPolls: [
      { question: "Si tu devais envoyer de la Lumière aujourd'hui, vers quel projet irait-elle ?", options: ["Éducation rurale", "Préservation marine", "Art communautaire", "Agriculture durable"] },
    ],
    challengePrompt: "Posez une question sincère à un inconnu aujourd'hui et partagez ce moment de lumière.",
    impactLinks: [{ label: "Celeste Aqua", archetype: "angel" }, { label: "L'Oracle d'Émeraude", archetype: "star" }],
    tabs: ["Philosophy", "Team", "Offers", "Explorer", "Life", "Community", "Challenges", "Impact"],
  },
  {
    key: "star",
    label: "Star",
    role: "Yony Star",
    element: "Feu",
    themeClass: "theme-star",
    coverImage: coverStar,
    avatarImage: avatarStar,
    mission: "Incarner la puissance créatrice et guider l'éveil du féminin sacré.",
    profileName: "L'Oracle d'Émeraude",
    location: "Marrakech, Morocco",
    quote: "Every soul is a star waiting to shine.",
    followers: "89K",
    community: "5,100",
    spins: "98",
    challenges: "72",
    streak: "8 days",
    philosophy: "Chaque geste est une œuvre d'art.",
    values: [
      { title: "Expression de Soi", description: "Chaque être humain possède un don unique qui mérite d'être vu." },
      { title: "Intuition", description: "L'art ne connaît ni murs ni passeports." },
      { title: "Beauté Spirituelle", description: "Le succès d'un seul illumine la communauté entière." },
      { title: "Leadership Féminin", description: "Transmettre son art est le plus beau des héritages." },
    ],
    missionLong: [
      "L'Oracle révèle les talents invisibles à travers des performances, des scènes ouvertes et des célébrations artistiques qui transcendent les frontières.",
      "Chaque étoile mérite sa constellation. Notre mission est de créer les conditions pour que chaque artiste, chaque rêveur puisse briller de sa propre lumière.",
    ],
    teamName: "L'Oracle d'Émeraude",
    teamBio: "Collectif d'artistes et coaches en développement personnel. Spécialisé dans l'éveil créatif et les cérémonies artistiques transformatrices.",
    teamFounded: "2019",
    offers: [
      { name: "Cercle d'Émeraude", description: "Retraite créative de 5 jours en immersion", price: "890€" },
      { name: "Oracle Session", description: "Coaching individuel d'éveil artistique", price: "120€" },
    ],
    explorer: [
      { question: "Quel rituel sacré ouvre chaque cercle d'Émeraude ?", answers: ["Méditation sonore", "Danse du feu", "Peinture aveugle"], correctIndex: 2, explanation: "La peinture aveugle permet de se connecter à son intuition profonde sans jugement visuel." },
    ],
    lifeNews: [
      { title: "Festival Étoile Sacrée", date: "Avril 2026", description: "3 jours de performances artistiques dans le désert marocain." },
    ],
    communityPolls: [
      { question: "Quelle forme d'art vous connecte le plus à votre essence ?", options: ["Danse", "Peinture", "Musique", "Écriture"] },
    ],
    challengePrompt: "Créez une œuvre d'art en 10 minutes sans lever votre crayon du papier.",
    impactLinks: [{ label: "Maya Solis", archetype: "light" }],
    tabs: ["Philosophy", "Team", "Offers", "Explorer", "Life", "Community", "Challenges", "Impact"],
  },
  {
    key: "place",
    label: "Place",
    role: "Yony Place",
    element: "Terre",
    themeClass: "theme-place",
    coverImage: coverPlace,
    avatarImage: avatarPlace,
    mission: "Créer des sanctuaires physiques où la culture et l'échange s'incarnent.",
    profileName: "Terra Nova",
    location: "Lofoten, Norway",
    quote: "Every place holds a story waiting to be lived.",
    followers: "156K",
    community: "11,200",
    spins: "201",
    challenges: "134",
    streak: "21 days",
    philosophy: "Le lieu définit le lien.",
    values: [
      { title: "Hospitalité Éco-responsable", description: "Chaque lieu possède un esprit unique que nous cherchons à révéler." },
      { title: "Cuisine Narrative", description: "Voyager c'est honorer, pas consommer." },
      { title: "Découverte Locale", description: "Les communautés locales sont les gardiennes du sens." },
      { title: "Accessibilité", description: "Les plus beaux paysages sont ceux qu'on vit pleinement." },
    ],
    missionLong: [
      "Terra transforme les lieux ordinaires en expériences extraordinaires, connectant les voyageurs aux âmes des territoires qu'ils traversent.",
      "Chaque lieu sur Terre possède une mémoire, une énergie, une histoire. Notre mission est de les révéler et de les partager.",
    ],
    teamName: "Terra Nova",
    teamBio: "Réseau de sanctuaires et lieux d'expériences immersives. Chaque espace est conçu comme un portail vers la culture locale authentique.",
    teamFounded: "2020",
    offers: [
      { name: "Menu Découverte", description: "Expérience culinaire narrative complète (-20% avec QR Code)", price: "65€" },
      { name: "Boutique Artisanale", description: "Objets scannables avec histoires intégrées", price: "15-120€" },
      { name: "Nuit au Sanctuaire", description: "Hébergement immersif avec programme culturel", price: "180€" },
    ],
    explorer: [
      { question: "Saurez-vous deviner l'ingrédient secret de notre plat signature 'L'Éclat de Terre' ?", answers: ["Curcuma sauvage", "Poudre de Baobab", "Sel de mer fumé"], correctIndex: 0, explanation: "Le curcuma sauvage des Lofoten donne cette couleur dorée unique au plat." },
    ],
    lifeNews: [
      { title: "Ouverture du 3ème sanctuaire", date: "Mai 2026", description: "Nouveau lieu en Patagonie, entre glaciers et forêts millénaires." },
    ],
    communityPolls: [
      { question: "Quel type d'expérience souhaitez-vous au prochain sanctuaire ?", options: ["Cuisine immersive", "Artisanat local", "Randonnée narrative", "Cérémonie culturelle"] },
    ],
    challengePrompt: "Photographiez un lieu ordinaire et racontez son histoire cachée en 3 phrases.",
    impactLinks: [{ label: "Alma Tierra", archetype: "seed" }],
    tabs: ["Philosophy", "Team", "Offers", "Explorer", "Life", "Community", "Challenges", "Impact"],
  },
  {
    key: "seed",
    label: "Seed",
    role: "Yony Seed",
    element: "Terre",
    themeClass: "theme-seed",
    coverImage: coverSeed,
    avatarImage: avatarSeed,
    mission: "Germer en collectif pour restaurer l'harmonie des écosystèmes.",
    profileName: "Alma Tierra",
    location: "Medellín, Colombia",
    quote: "Plant knowledge, harvest wisdom.",
    followers: "201K",
    community: "15,800",
    spins: "312",
    challenges: "198",
    streak: "45 days",
    philosophy: "L'union fait la floraison.",
    values: [
      { title: "Co-création", description: "Apprendre par l'expérience, pas par la contrainte." },
      { title: "Régénération", description: "Les plus belles récoltes demandent du temps." },
      { title: "Patience", description: "Chaque culture porte une sagesse unique." },
      { title: "Intelligence Collective", description: "Les anciens et les jeunes apprennent ensemble." },
    ],
    missionLong: [
      "Alma cultive les esprits à travers l'éducation créative, les bibliothèques vivantes et les jardins de savoirs partagés.",
      "Chaque graine de connaissance plantée aujourd'hui deviendra la forêt de demain. Notre mission est de démocratiser l'accès au savoir.",
    ],
    teamName: "Alma Tierra",
    teamBio: "Réseau mondial de jardins de savoirs et bibliothèques vivantes. Chaque graine plantée nourrit un écosystème de connaissance partagée.",
    teamFounded: "2018",
    offers: [
      { name: "Jardin de Savoirs", description: "Kit de démarrage pour créer votre bibliothèque vivante", price: "35€" },
      { name: "Programme Racines", description: "Formation de 12 semaines en intelligence collective", price: "249€" },
    ],
    explorer: [
      { question: "Combien de jardins de savoirs Alma Tierra a-t-elle créés dans le monde ?", answers: ["42", "88", "156"], correctIndex: 1, explanation: "88 jardins actifs sur 4 continents, chacun adapté à sa culture locale." },
    ],
    lifeNews: [
      { title: "Projet Forêt de Demain", date: "Février 2026", description: "1000 bibliothèques vivantes d'ici 2028." },
    ],
    communityPolls: [
      { question: "Quel savoir ancestral aimeriez-vous apprendre ?", options: ["Herboristerie", "Astronomie traditionnelle", "Construction naturelle", "Cuisine fermentée"] },
    ],
    challengePrompt: "Plantez une graine (réelle ou métaphorique) et documentez sa croissance pendant 7 jours.",
    impactLinks: [{ label: "Terra Nova", archetype: "place" }],
    tabs: ["Philosophy", "Team", "Offers", "Explorer", "Life", "Community", "Challenges", "Impact"],
  },
  {
    key: "media",
    label: "Media",
    role: "Yony Media",
    element: "Air",
    themeClass: "theme-wind",
    coverImage: coverMedia,
    avatarImage: avatarMedia,
    mission: "Faire voyager les récits par-delà les frontières via des médias indépendants.",
    profileName: "Zephyr Kaine",
    location: "Marrakech, Morocco",
    quote: "Be the wind that carries voices across the world.",
    followers: "67K",
    community: "4,300",
    spins: "87",
    challenges: "56",
    streak: "6 days",
    philosophy: "Le souffle de l'information libre.",
    values: [
      { title: "Transparence", description: "Chaque voix mérite d'être entendue, sans filtre." },
      { title: "Fluidité", description: "L'immobilité est l'ennemi du changement." },
      { title: "Liberté d'Expression", description: "Les meilleures idées naissent du mélange." },
      { title: "Curiosité Globale", description: "La gravité des messages n'exclut pas la grâce." },
    ],
    missionLong: [
      "Zephyr amplifie les voix marginalisées et les histoires oubliées à travers le mouvement, la musique et les ondes.",
      "Comme le vent qui traverse les frontières sans visa, notre mission est de faire circuler les idées librement.",
    ],
    teamName: "Podcast 'Echoes'",
    teamBio: "Journal Digital Indépendant et réseau de podcasts engagés. Spécialisé dans les récits de ceux qu'on n'entend jamais.",
    teamFounded: "2021",
    offers: [
      { name: "Abonnement Echoes", description: "Accès illimité au journal digital et podcasts", price: "5€/mois" },
      { name: "Studio Nomade", description: "Kit de production podcast mobile", price: "89€" },
    ],
    explorer: [
      { question: "Combien de langues sont représentées dans le podcast Echoes ?", answers: ["12", "24", "36"], correctIndex: 1, explanation: "24 langues pour 24 fuseaux horaires — une voix par heure du globe." },
    ],
    lifeNews: [
      { title: "Echoes Saison 4", date: "Avril 2026", description: "Nouvelle saison dédiée aux langues en voie de disparition." },
    ],
    communityPolls: [
      { question: "Quel sujet devrait être couvert dans le prochain épisode ?", options: ["Musique underground", "Activisme digital", "Langues en danger", "Street art politique"] },
    ],
    challengePrompt: "Enregistrez 60 secondes du son de votre quartier et partagez-le avec une description poétique.",
    impactLinks: [{ label: "Taro & Gaïa", archetype: "brand" }],
    tabs: ["Philosophy", "Team", "Offers", "Explorer", "Life", "Community", "Challenges", "Impact"],
  },
  {
    key: "brand",
    label: "Brand",
    role: "Yony Brand",
    element: "Air",
    themeClass: "theme-brand",
    coverImage: coverBrand,
    avatarImage: avatarBrand,
    mission: "Transformer la consommation en un acte de soutien culturel et éthique.",
    profileName: "Taro & Gaïa",
    location: "Paris, France",
    quote: "Build brands that breathe with purpose.",
    followers: "45K",
    community: "2,800",
    spins: "56",
    challenges: "38",
    streak: "15 days",
    philosophy: "Porter une histoire, pas seulement un produit.",
    values: [
      { title: "Artisanat avant Industrie", description: "Chaque marque doit avoir une raison d'être au-delà du profit." },
      { title: "Durabilité", description: "La beauté et la conscience ne sont pas incompatibles." },
      { title: "Transparence", description: "Les consommateurs méritent la vérité." },
      { title: "Impact Social", description: "Construire pour les générations, pas les trimestres." },
    ],
    missionLong: [
      "Taro & Gaïa façonne des marques conscientes qui alignent profit et purpose, beauté et éthique.",
      "Dans un monde saturé de bruit, notre mission est de créer des marques qui parlent à l'âme autant qu'au marché.",
    ],
    teamName: "Taro & Gaïa",
    teamBio: "Marque de mode durable et éthique. Chaque pièce raconte l'histoire de l'artisan qui l'a créée et de la terre qui l'a nourrie.",
    teamFounded: "2020",
    offers: [
      { name: "Collection Racines", description: "Vêtements artisanaux en fibres naturelles", price: "80-250€" },
      { name: "Brand Blueprint", description: "Accompagnement pour créer votre marque éthique", price: "1,500€" },
    ],
    explorer: [
      { question: "Quel pourcentage du prix d'un vêtement Taro & Gaïa revient directement à l'artisan ?", answers: ["30%", "50%", "70%"], correctIndex: 2, explanation: "70% — parce que l'artisan est le cœur de chaque création." },
    ],
    lifeNews: [
      { title: "Pop-up Tokyo", date: "Mai 2026", description: "Première boutique éphémère en Asie avec des artisans locaux." },
    ],
    communityPolls: [
      { question: "Quel matériau naturel aimeriez-vous voir dans la prochaine collection ?", options: ["Lin japonais", "Coton bio péruvien", "Soie de paix", "Laine de yak"] },
    ],
    challengePrompt: "Retournez un de vos vêtements et lisez son étiquette. Partagez l'histoire de son origine.",
    impactLinks: [{ label: "Zephyr Kaine", archetype: "media" }],
    tabs: ["Philosophy", "Team", "Offers", "Explorer", "Life", "Community", "Challenges", "Impact"],
  },
  {
    key: "angel",
    label: "Angel",
    role: "Yony Angel",
    element: "Eau",
    themeClass: "theme-angel",
    coverImage: coverAngel,
    avatarImage: avatarAngel,
    mission: "Propulser les idées visionnaires vers des entreprises à impact mondial.",
    profileName: "Celeste Aqua",
    location: "Bali, Indonesia",
    quote: "Heal through the waters of compassion.",
    followers: "112K",
    community: "9,100",
    spins: "156",
    challenges: "112",
    streak: "30 days",
    philosophy: "L'abondance au service du sens.",
    values: [
      { title: "Investissement Éthique", description: "La guérison commence par l'écoute profonde." },
      { title: "Vision Long Terme", description: "Laisser couler les émotions pour mieux se reconstruire." },
      { title: "Soutien aux Fondateurs", description: "Veiller sur les autres sans les étouffer." },
      { title: "Innovation Radicale", description: "Chaque jour est une bénédiction à célébrer." },
    ],
    missionLong: [
      "Celeste canalise l'énergie de guérison à travers des rituels aquatiques, des cercles de parole et des actes de bonté pure.",
      "Comme l'eau qui purifie et nourrit, notre mission est d'apporter douceur et résilience aux âmes en quête de paix.",
    ],
    teamName: "Daniel Carter",
    teamBio: "Ex-VC chez Impact Capital, fondateur de 'Angel Waves'. Investisseur visionnaire qui croit que le capital peut être un vecteur de guérison sociale.",
    teamFounded: "2017",
    offers: [
      { name: "Angel Waves Fund", description: "Investissement dans des startups à impact social", price: "À partir de 10K€" },
      { name: "Mentor Circle", description: "Programme de mentorat pour entrepreneurs sociaux", price: "Gratuit" },
    ],
    explorer: [
      { question: "Combien de startups ont été financées par Angel Waves depuis sa création ?", answers: ["23", "47", "89"], correctIndex: 1, explanation: "47 startups financées dans 18 pays, avec un focus sur l'eau et l'éducation." },
    ],
    lifeNews: [
      { title: "Angel Waves Fund III", date: "Janvier 2026", description: "Nouveau fonds de 50M€ dédié aux technologies de l'eau." },
    ],
    communityPolls: [
      { question: "Quel secteur d'impact devrait être prioritaire en 2026 ?", options: ["Technologies de l'eau", "Éducation inclusive", "Santé mentale", "Agriculture régénérative"] },
    ],
    challengePrompt: "Faites un acte de bonté anonyme aujourd'hui et observez l'effet papillon qu'il crée.",
    impactLinks: [{ label: "Atlas Depth", archetype: "guard" }],
    tabs: ["Philosophy", "Team", "Offers", "Explorer", "Life", "Community", "Challenges", "Impact"],
  },
  {
    key: "guard",
    label: "Guard",
    role: "Yony Guard",
    element: "Eau",
    themeClass: "theme-guard",
    coverImage: coverGuard,
    avatarImage: avatarGuard,
    mission: "Préserver et transmettre les savoirs ancestraux pour éclairer le futur.",
    profileName: "Atlas Depth",
    location: "Reykjavik, Iceland",
    quote: "Guard the truth, protect the future.",
    followers: "78K",
    community: "6,500",
    spins: "134",
    challenges: "89",
    streak: "18 days",
    philosophy: "La mémoire est l'eau du devenir.",
    values: [
      { title: "Rigueur Scientifique", description: "Les faits sont sacrés, les opinions sont libres." },
      { title: "Respect des Traditions", description: "Protéger demande une attention de chaque instant." },
      { title: "Transmission Intergénérationnelle", description: "Dire la vérité même quand elle dérange." },
      { title: "Archivage Vivant", description: "La nature n'est pas une ressource, c'est notre maison." },
    ],
    missionLong: [
      "Atlas défend les vérités scientifiques et protège les écosystèmes fragiles à travers la recherche, l'investigation et la vigilance citoyenne.",
      "Dans un océan de désinformation, notre mission est d'être le phare qui guide vers la vérité.",
    ],
    teamName: "Dr. Elena Moretti",
    teamBio: "Anthropologue, Directrice du Centre d'Études des Sagesses. Spécialisée dans la documentation des savoirs ancestraux menacés de disparition.",
    teamFounded: "2015",
    offers: [
      { name: "Archives Vivantes", description: "Accès à la bibliothèque numérique des savoirs ancestraux", price: "12€/mois" },
      { name: "Expédition Terrain", description: "Participez à une mission de documentation", price: "450€" },
    ],
    explorer: [
      { question: "Selon la tradition orale locale, quel élément servait de premier calendrier aux anciens ?", answers: ["Le mouvement des vagues", "La floraison du Baobab", "La position des nuages"], correctIndex: 1, explanation: "La floraison du Baobab marquait le début de la saison des récoltes dans de nombreuses cultures africaines." },
    ],
    lifeNews: [
      { title: "Expédition Arctique", date: "Mars 2026", description: "Documentation des savoirs inuits face au changement climatique." },
    ],
    communityPolls: [
      { question: "Quel savoir ancestral est le plus menacé aujourd'hui ?", options: ["Navigation stellaire", "Médecine par les plantes", "Techniques agricoles anciennes", "Langues orales"] },
    ],
    challengePrompt: "Documentez une histoire de votre quartier que personne n'a encore racontée.",
    impactLinks: [{ label: "Celeste Aqua", archetype: "angel" }],
    tabs: ["Philosophy", "Team", "Offers", "Explorer", "Life", "Community", "Challenges", "Impact"],
  },
];
