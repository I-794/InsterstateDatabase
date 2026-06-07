// Editorial copy for the non-route pages (home, guide, history, map, faq,
// glossary, sources) and the shared navigation. Kept apart from routes.mjs so
// route data and prose can be edited independently. No em-dashes anywhere.

// Primary navigation. `match` is compared against the page key the generator
// assigns, to mark the active link.
export const nav = [
  { label: "Database", href: "/database", match: "database" },
  { label: "Decoder", href: "/decoder", match: "decoder" },
  { label: "Routes", href: "/routes", match: "routes" },
  { label: "Guide", href: "/guide", match: "guide" },
  { label: "Map", href: "/map", match: "map" },
  { label: "History", href: "/history", match: "history" },
  { label: "FAQ", href: "/faq", match: "faq" },
];

export const footerNav = [
  {
    title: "Explore",
    links: [
      { label: "Route database", href: "/database" },
      { label: "Number decoder", href: "/decoder" },
      { label: "Route directory", href: "/routes" },
      { label: "Browse by state", href: "/states" },
      { label: "National map", href: "/map" },
      { label: "Superlatives", href: "/superlatives" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Numbering guide", href: "/guide" },
      { label: "System history", href: "/history" },
      { label: "Glossary", href: "/glossary" },
      { label: "FAQ", href: "/faq" },
      { label: "Sources", href: "/sources" },
    ],
  },
];

// Postal code to full name for states and territories that appear in route data.
export const stateNames = {
  AL: "Alabama", AK: "Alaska", AZ: "Arizona", AR: "Arkansas", CA: "California",
  CO: "Colorado", CT: "Connecticut", DE: "Delaware", FL: "Florida", GA: "Georgia",
  HI: "Hawaii", ID: "Idaho", IL: "Illinois", IN: "Indiana", IA: "Iowa",
  KS: "Kansas", KY: "Kentucky", LA: "Louisiana", ME: "Maine", MD: "Maryland",
  MA: "Massachusetts", MI: "Michigan", MN: "Minnesota", MS: "Mississippi", MO: "Missouri",
  MT: "Montana", NE: "Nebraska", NV: "Nevada", NH: "New Hampshire", NJ: "New Jersey",
  NM: "New Mexico", NY: "New York", NC: "North Carolina", ND: "North Dakota", OH: "Ohio",
  OK: "Oklahoma", OR: "Oregon", PA: "Pennsylvania", RI: "Rhode Island", SC: "South Carolina",
  SD: "South Dakota", TN: "Tennessee", TX: "Texas", UT: "Utah", VT: "Vermont",
  VA: "Virginia", WA: "Washington", WV: "West Virginia", WI: "Wisconsin", WY: "Wyoming",
  DC: "District of Columbia", PR: "Puerto Rico",
};

// Route ids featured on the home page (must exist in routes.mjs).
export const featuredRouteIds = ["I-90", "I-95", "I-10", "I-5", "I-70", "I-97"];

export const home = {
  metaTitle: "Interstate Index | A reference atlas for U.S. Interstate numbering",
  metaDescription:
    "Browse every active Interstate Highway, decode any route number, and explore the logic behind the U.S. Interstate numbering system.",
  heroLead:
    "A reference atlas for the U.S. Interstate Highway System. Search active mainlines, read the logic behind every route number, and explore each corridor in detail.",
  explore: [
    {
      title: "Search the database",
      body: "Every active route plus every theoretical number slot from I-1 to I-999, filterable by type, status, and corridor.",
      href: "/database",
      cta: "Open the database",
    },
    {
      title: "Decode a number",
      body: "Enter any designation and read what it means: direction, parent route, and whether it is a loop or a spur.",
      href: "/decoder",
      cta: "Try the decoder",
    },
    {
      title: "Read the numbering guide",
      body: "How the grid works, why odd and even numbers point in fixed directions, and the exceptions that break the rules.",
      href: "/guide",
      cta: "Learn the system",
    },
  ],
};

export const guide = {
  metaTitle: "How Interstate numbering works | Interstate Index",
  metaDescription:
    "A deep guide to the U.S. Interstate numbering grid: odd and even mainlines, three-digit loops and spurs, suffixes, and the routes that break the rules.",
  intro:
    "The Interstate numbering system is a grid. Once you know a handful of rules, almost any route number tells you where it runs and what job it does. Here is the full pattern, including the exceptions.",
  sections: [
    {
      h: "One and two-digit mainlines",
      p: [
        "Primary Interstates use one or two digits. Odd numbers run roughly north to south; even numbers run roughly east to west.",
        "The numbers also climb across the map. Low odd numbers sit in the west (I-5 on the Pacific coast) and high odd numbers in the east (I-95 on the Atlantic). Low even numbers sit in the south (I-10 along the Gulf) and high even numbers in the north (I-90 near the Canadian border).",
        "Major cross-country routes tend to end in 0 or 5. I-10, I-20, I-40, I-70, I-80, and I-90 are long east-west routes; I-5, I-15, I-35, I-75, and I-95 are long north-south routes.",
      ],
    },
    {
      h: "Three-digit auxiliary routes",
      p: [
        "A three-digit Interstate borrows its last two digits from a parent route. I-495 is tied to I-95; I-275 is tied to I-75.",
        "The first digit tells you the job. An even first digit usually means a loop or a bypass that rejoins its parent at both ends. An odd first digit usually means a spur that connects to its parent at one end only.",
        "Because the same two-digit parent passes through many cities, the same three-digit number is reused all over the country. There are many separate I-295 and I-495 routes.",
      ],
    },
    {
      h: "Suffixes and split routes",
      p: [
        "A few mainlines split into lettered pairs through a metro area, such as I-35E and I-35W through Dallas-Fort Worth and the Twin Cities, or I-69C, I-69E, and I-69W in south Texas.",
        "Older suffixed routes like I-35E in those metros were kept because both branches serve large populations and renumbering would confuse millions of drivers.",
      ],
    },
    {
      h: "The routes that break the rules",
      p: [
        "I-99 sits far east of many lower-numbered routes, breaking the west-to-east order, because its number was written directly into federal law.",
        "I-238 in California has no two-digit parent at all, since there is no I-38. The number was the only one available when it was designated.",
        "Duplicate two-digit numbers exist too. There are two separate I-76, I-84, I-86, I-87, and I-88 routes in different parts of the country.",
      ],
    },
    {
      h: "Non-contiguous programs",
      p: [
        "Hawaii, Alaska, and Puerto Rico have federally recognized Interstate routes that are funded like the mainland system but use their own labels: H-1, H-2, and H-3 in Hawaii, A-1 through A-4 in Alaska, and PRI-1 through PRI-3 in Puerto Rico.",
        "Alaska's routes are eligible for Interstate funding but are not signed with the familiar red, white, and blue shields.",
      ],
    },
  ],
};

export const history = {
  metaTitle: "History of the Interstate Highway System | Interstate Index",
  metaDescription:
    "From the 1956 Federal-Aid Highway Act to today: how the U.S. Interstate Highway System was funded, built, and numbered.",
  intro:
    "The Interstate Highway System is one of the largest public works projects in history. It reshaped how the country moves, where people live, and how goods reach markets. Here is the short version of how it came together.",
  timeline: [
    {
      year: "1919",
      h: "A young officer crosses the country",
      p: "Dwight Eisenhower joins an Army convoy that takes two months to drive coast to coast on poor roads, an experience he later credits for his interest in a national highway network.",
    },
    {
      year: "1944",
      h: "The idea is authorized",
      p: "The Federal-Aid Highway Act of 1944 authorizes a National System of Interstate Highways but provides no dedicated money to build it.",
    },
    {
      year: "1956",
      h: "The system is funded",
      p: "President Eisenhower signs the Federal-Aid Highway Act of 1956, creating the Highway Trust Fund and committing the federal government to pay 90 percent of construction costs. This is the true start of the modern system.",
    },
    {
      year: "1957",
      h: "The numbering plan is set",
      p: "AASHO, the predecessor of today's AASHTO, adopts the numbering grid and the red, white, and blue shield. Odd numbers run north-south, even numbers east-west, and the route map begins to take shape.",
    },
    {
      year: "1974",
      h: "A national speed limit",
      p: "In response to the oil crisis, Congress sets a national maximum speed limit of 55 miles per hour, tied to federal highway funding. It is fully repealed in 1995.",
    },
    {
      year: "1991",
      h: "The original plan is declared complete",
      p: "I-70 through Glenwood Canyon in Colorado is often cited as the completion of the original Interstate plan, decades after construction began.",
    },
    {
      year: "Today",
      h: "Still growing",
      p: "New corridors such as I-11, I-14, I-42, I-49, and parts of I-69 are still being designated and built, more than 65 years after the system began.",
    },
  ],
  standards: [
    "Controlled access, with traffic entering and leaving only at interchanges.",
    "At least two lanes in each direction, separated by a median.",
    "Design speeds high enough for safe long-distance travel.",
    "Standardized signs, including the numbered shield and the green guide signs.",
  ],
};

export const map = {
  metaTitle: "Interstate corridor map | Interstate Index",
  metaDescription:
    "A schematic map of the major U.S. Interstate corridors, showing how the long east-west and north-south routes form a national grid.",
  intro:
    "This schematic shows the longest mainline corridors as a grid, the way the numbering system imagines them. It is a diagram of the network's logic, not a survey-accurate map. Use the database for exact states and termini.",
  // Major corridors drawn on the schematic. axis controls orientation.
  corridors: [
    { id: "I-5", axis: "ns", pos: 8, label: "I-5" },
    { id: "I-15", axis: "ns", pos: 22, label: "I-15" },
    { id: "I-35", axis: "ns", pos: 48, label: "I-35" },
    { id: "I-75", axis: "ns", pos: 74, label: "I-75" },
    { id: "I-95", axis: "ns", pos: 90, label: "I-95" },
    { id: "I-10", axis: "ew", pos: 86, label: "I-10" },
    { id: "I-40", axis: "ew", pos: 64, label: "I-40" },
    { id: "I-70", axis: "ew", pos: 46, label: "I-70" },
    { id: "I-80", axis: "ew", pos: 30, label: "I-80" },
    { id: "I-90", axis: "ew", pos: 14, label: "I-90" },
  ],
};

export const faq = {
  metaTitle: "Interstate Highway FAQ | Interstate Index",
  metaDescription:
    "Common questions about the U.S. Interstate Highway System: numbering, the longest and shortest routes, shields, and more.",
  items: [
    {
      q: "Why do some Interstate numbers repeat in different states?",
      a: "Three-digit auxiliary numbers are tied to a two-digit parent that passes through many cities, so the same number is reused near each city. There are also a handful of duplicate two-digit routes, such as two separate I-76 and I-84 routes, that exist for historical reasons.",
    },
    {
      q: "What is the longest Interstate?",
      a: "I-90 is the longest, running about 3,020 miles from Seattle to Boston. I-80 is the second longest at roughly 2,899 miles.",
    },
    {
      q: "What is the shortest two-digit Interstate?",
      a: "I-97 in Maryland, at about 18 miles between Annapolis and Baltimore, is usually given this title, and it is the only two-digit Interstate contained entirely within a single county. Newer routes that are still being built, such as the signed segment of I-87 in North Carolina, are shorter for now.",
    },
    {
      q: "How do I read a three-digit number?",
      a: "The last two digits name the parent route. The first digit tells you the job: an even first digit usually means a loop or bypass, while an odd first digit usually means a spur or connector.",
    },
    {
      q: "Why does I-99 sit in the wrong place?",
      a: "Interstate numbers usually rise from west to east, but I-99 in Pennsylvania sits far east of many lower-numbered routes. Its number was written directly into federal law rather than assigned through the normal process.",
    },
    {
      q: "Are Hawaii and Alaska really on the Interstate system?",
      a: "Yes. Hawaii's H-1, H-2, and H-3 are signed Interstates funded by the federal program. Alaska and Puerto Rico also have federally recognized Interstate routes, though Alaska's are not signed with shields.",
    },
    {
      q: "Why is I-19 signed in kilometers?",
      a: "I-19 in Arizona runs from the Mexican border to Tucson and was signed in metric units during a period when the United States considered a wider switch to the metric system. The signs were kept.",
    },
  ],
};

export const glossary = {
  metaTitle: "Glossary of Interstate and highway terms | Interstate Index",
  metaDescription:
    "Definitions of the terms used across the Interstate Index, from auxiliary route to controlled access.",
  terms: [
    { t: "Mainline (primary) route", d: "A one or two-digit Interstate that forms part of the core national grid." },
    { t: "Auxiliary route", d: "A three-digit Interstate that branches from a two-digit parent as a loop, bypass, or spur." },
    { t: "Parent route", d: "The two-digit Interstate named by the last two digits of a three-digit auxiliary route." },
    { t: "Loop or beltway", d: "An auxiliary route that leaves its parent and rejoins it at both ends, usually circling a city. Typically an even first digit." },
    { t: "Spur", d: "An auxiliary route that connects to its parent at one end only, usually reaching into a downtown or a port. Typically an odd first digit." },
    { t: "Axis", d: "The general direction a mainline runs: north-south for odd numbers, east-west for even numbers." },
    { t: "Controlled access", d: "A highway that traffic can enter or leave only at designed interchanges, with no driveways or cross streets." },
    { t: "Terminus", d: "The point where a route begins or ends, often at a junction with another highway or an international border." },
    { t: "Concurrency", d: "A stretch where two route numbers share the same physical roadway, such as I-20 and I-59 across Alabama." },
    { t: "Non-contiguous route", d: "A federally recognized Interstate outside the connected lower-48 network, in Hawaii, Alaska, or Puerto Rico." },
    { t: "Shield", d: "The red, white, and blue marker that identifies an Interstate route on signs." },
    { t: "Suffix route", d: "A mainline split into lettered branches through a metro area, such as I-35E and I-35W." },
  ],
};

export const sources = {
  metaTitle: "Sources and method | Interstate Index",
  metaDescription:
    "How the Interstate Index is sourced and the limits of its data.",
  intro:
    "The Interstate Index is built for public reference and curiosity. Route records combine seeded data for active and federally recognized routes with generated records for every possible number slot.",
  body: [
    "Mileage and year figures are rounded reference values organized from public route logs and encyclopedic route lists. They are not survey measurements.",
    "Planning, engineering, or legal work should be verified against current records from the Federal Highway Administration, AASHTO, and the relevant state departments of transportation.",
  ],
  links: [
    { label: "FHWA Interstate route numbering", href: "https://www.fhwa.dot.gov/programadmin/interstate.cfm" },
    { label: "List of primary Interstate Highways", href: "https://en.wikipedia.org/wiki/List_of_primary_Interstate_Highways" },
    { label: "List of auxiliary Interstate Highways", href: "https://en.wikipedia.org/wiki/List_of_auxiliary_Interstate_Highways" },
    { label: "Interstate Highway System overview", href: "https://en.wikipedia.org/wiki/Interstate_Highway_System" },
  ],
};
