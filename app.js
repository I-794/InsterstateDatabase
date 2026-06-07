const activePrimaryRoutes = [
  route("I-2", "Primary", "Active", "TX", "Lower Rio Grande Valley", "Short east-west corridor serving the McAllen, Harlingen, and Brownsville region."),
  route("I-4", "Primary", "Active", "FL", "Tampa Bay to Daytona Beach", "Central Florida route through Tampa, Lakeland, Orlando, and Daytona Beach."),
  route("I-5", "Primary", "Active", "CA, OR, WA", "San Diego to the Canadian border", "West Coast spine connecting Southern California, the Bay Area access corridor, Portland, Seattle, and Canada."),
  route("I-8", "Primary", "Active", "CA, AZ", "San Diego to Casa Grande", "Southern east-west route across San Diego, Imperial Valley, Yuma, and south-central Arizona."),
  route("I-10", "Primary", "Active", "CA, AZ, NM, TX, LA, MS, AL, FL", "Santa Monica to Jacksonville", "Major southern transcontinental corridor from the Pacific Coast to the Atlantic Coast."),
  route("I-11", "Primary", "Active", "NV, AZ", "Las Vegas region to northwestern Arizona", "Emerging north-south corridor anchored by the Las Vegas and Phoenix connection."),
  route("I-12", "Primary", "Active", "LA", "Baton Rouge to Slidell", "East-west Louisiana bypass of the New Orleans area between I-10 junctions."),
  route("I-14", "Primary", "Active", "TX", "Central Texas corridor", "Signed segment of the planned Gulf Coast Strategic Highway corridor near Killeen and Temple."),
  route("I-15", "Primary", "Active", "CA, NV, AZ, UT, ID, MT", "San Diego to the Canadian border", "Inland western route through Las Vegas, Salt Lake City, Idaho Falls, and Great Falls."),
  route("I-16", "Primary", "Active", "GA", "Macon to Savannah", "Georgia east-west route connecting central Georgia with the Port of Savannah."),
  route("I-17", "Primary", "Active", "AZ", "Phoenix to Flagstaff", "Arizona north-south route climbing from the Valley of the Sun to the high country."),
  route("I-19", "Primary", "Active", "AZ", "Nogales to Tucson", "Border-to-Tucson route notable for metric distance signage."),
  route("I-20", "Primary", "Active", "TX, LA, MS, AL, GA, SC", "West Texas to South Carolina", "Southern east-west freight corridor through Dallas-Fort Worth, Shreveport, Jackson, Birmingham, Atlanta, and Columbia."),
  route("I-22", "Primary", "Active", "MS, AL", "Memphis region to Birmingham", "Appalachian Development Highway corridor linking north Mississippi and Alabama."),
  route("I-24", "Primary", "Active", "IL, KY, TN, GA", "Southern Illinois to Chattanooga", "Diagonal route through Paducah, Nashville, and Chattanooga."),
  route("I-25", "Primary", "Active", "NM, CO, WY", "Las Cruces to Buffalo", "Rocky Mountain Front Range route through Albuquerque, Denver, Colorado Springs, and Cheyenne."),
  route("I-26", "Primary", "Active", "TN, NC, SC", "Tri-Cities to Charleston", "Appalachian-to-Atlantic route through Asheville, Spartanburg, Columbia, and Charleston."),
  route("I-27", "Primary", "Active", "TX", "Lubbock to Amarillo", "Texas Panhandle route now central to broader Ports-to-Plains corridor planning."),
  route("I-29", "Primary", "Active", "MO, IA, SD, ND", "Kansas City to the Canadian border", "Missouri River corridor through Omaha-Council Bluffs, Sioux City, Sioux Falls, and Fargo access."),
  route("I-30", "Primary", "Active", "TX, AR", "Fort Worth to North Little Rock", "Short southern mainline linking the Dallas-Fort Worth metroplex with Arkansas."),
  route("I-35", "Primary", "Active", "TX, OK, KS, MO, IA, MN", "Laredo to Duluth", "Central U.S. trade corridor through San Antonio, Austin, Dallas-Fort Worth, Oklahoma City, Kansas City, Des Moines, and Minneapolis-St. Paul."),
  route("I-37", "Primary", "Active", "TX", "Corpus Christi to San Antonio", "South Texas north-south route connecting the Gulf Coast with San Antonio."),
  route("I-39", "Primary", "Active", "IL, WI", "Bloomington-Normal to Wausau", "Upper Midwest route pairing with parts of I-90 and I-94 in Wisconsin."),
  route("I-40", "Primary", "Active", "CA, AZ, NM, TX, OK, AR, TN, NC", "Barstow to Wilmington", "Major east-west route paralleling much of historic Route 66 in the west and crossing the Mid-South to North Carolina."),
  route("I-41", "Primary", "Active", "WI, IL", "Milwaukee region to Green Bay", "Eastern Wisconsin corridor connecting Milwaukee, the Fox Cities, and Green Bay."),
  route("I-42", "Primary", "Active", "NC", "Eastern North Carolina segments", "Partially completed corridor along the US 70 route toward the Port of Morehead City."),
  route("I-43", "Primary", "Active", "WI", "Beloit to Green Bay", "Wisconsin route through Milwaukee, Sheboygan, Manitowoc, and Green Bay."),
  route("I-44", "Primary", "Active", "TX, OK, MO", "Wichita Falls to St. Louis", "Southwest-to-Missouri corridor through Oklahoma City, Tulsa, and Springfield."),
  route("I-45", "Primary", "Active", "TX", "Galveston to Dallas", "Texas-only route connecting the Gulf Coast, Houston, and Dallas."),
  route("I-49", "Primary", "Active", "LA, AR, MO", "Gulf Coast corridor toward Kansas City", "Multi-state corridor with completed and developing sections through Louisiana, Arkansas, and Missouri."),
  route("I-55", "Primary", "Active", "LA, MS, TN, AR, MO, IL", "New Orleans to Chicago", "Mississippi River corridor through Jackson, Memphis, St. Louis, and Springfield."),
  route("I-57", "Primary", "Active", "MO, IL", "Sikeston to Chicago", "Illinois north-south route and future extension corridor toward the lower Mississippi Valley."),
  route("I-59", "Primary", "Active", "LA, MS, AL, GA", "New Orleans area to Wildwood", "Southeastern diagonal route through Hattiesburg, Meridian, Birmingham, and Gadsden."),
  route("I-64", "Primary", "Active", "MO, IL, IN, KY, WV, VA", "St. Louis to Hampton Roads", "East-west route through Louisville, Lexington, Charleston, Richmond, and Norfolk."),
  route("I-65", "Primary", "Active", "AL, TN, KY, IN", "Mobile to Gary", "North-south corridor through Montgomery, Birmingham, Nashville, Louisville, and Indianapolis."),
  route("I-66", "Primary", "Active", "VA, DC", "Middletown to Washington", "Northern Virginia commuter and regional route into the District of Columbia."),
  route("I-68", "Primary", "Active", "WV, MD", "Morgantown to Hancock", "Appalachian east-west route connecting I-79 and I-70."),
  route("I-69", "Primary", "Active", "TX, LA, MS, TN, KY, IN, MI", "Segmented Canada-to-Mexico corridor", "Multi-state corridor with active and developing segments from Texas and the Mid-South to Michigan."),
  route("I-70", "Primary", "Active", "UT, CO, KS, MO, IL, IN, OH, WV, PA, MD", "Cove Fort to Baltimore", "Mountain-to-Mid-Atlantic route through Denver, Kansas City, St. Louis, Indianapolis, Columbus, and western Maryland."),
  route("I-71", "Primary", "Active", "KY, OH", "Louisville to Cleveland", "Ohio Valley route through Cincinnati and Columbus to Cleveland."),
  route("I-72", "Primary", "Active", "MO, IL", "Hannibal to Champaign", "Central Illinois east-west route paired with the Chicago-Kansas City Expressway concept."),
  route("I-73", "Primary", "Active", "NC", "North Carolina Piedmont corridor", "Developing north-south corridor with signed segments in North Carolina."),
  route("I-74", "Primary", "Active", "IA, IL, IN, OH, WV, VA, NC, SC", "Midwest and Carolinas segments", "Segmented corridor from the Quad Cities and Peoria through Indianapolis and toward the Carolinas."),
  route("I-75", "Primary", "Active", "FL, GA, TN, KY, OH, MI", "Miami Lakes to Sault Ste. Marie", "Major north-south route through Florida, Atlanta, Knoxville, Cincinnati, Detroit, and northern Michigan."),
  route("I-76", "Primary", "Active", "CO, NE", "Denver to western Nebraska", "Western I-76 connector from Denver toward I-80 in Nebraska."),
  route("I-76 (PA-NJ)", "Primary", "Active", "OH, PA, NJ", "Ohio Turnpike to Camden", "Eastern I-76 route via the Pennsylvania Turnpike and Schuylkill Expressway."),
  route("I-77", "Primary", "Active", "SC, NC, VA, WV, OH", "Columbia to Cleveland", "Appalachian north-south route through Charlotte, Bluefield, Charleston, and Akron."),
  route("I-78", "Primary", "Active", "PA, NJ, NY", "Lebanon County to New York City", "Northeastern route serving the Lehigh Valley, northern New Jersey, and New York Harbor access."),
  route("I-79", "Primary", "Active", "WV, PA", "Charleston to Erie", "Western Appalachian route through Morgantown, Washington, and Pittsburgh access."),
  route("I-80", "Primary", "Active", "CA, NV, UT, WY, NE, IA, IL, IN, OH, PA, NJ", "San Francisco to Teaneck", "Second-longest Interstate, spanning the Sierra Nevada, Great Plains, Midwest, and Northeast."),
  route("I-81", "Primary", "Active", "TN, VA, WV, MD, PA, NY", "Dandridge to the Canadian border", "Appalachian valley freight corridor through Virginia, Pennsylvania, and upstate New York."),
  route("I-82", "Primary", "Active", "WA, OR", "Ellensburg to Hermiston", "Pacific Northwest route connecting central Washington to northeastern Oregon."),
  route("I-83", "Primary", "Active", "MD, PA", "Baltimore to Harrisburg", "Short Mid-Atlantic route connecting Baltimore and south-central Pennsylvania."),
  route("I-84", "Primary", "Active", "OR, ID, UT", "Portland to Echo", "Western I-84 route along the Columbia River, Snake River Plain, and northern Utah approach."),
  route("I-84 (PA-MA)", "Primary", "Active", "PA, NY, CT, MA", "Dunmore to Sturbridge", "Eastern I-84 route through the Hudson Valley, Connecticut, and western Massachusetts."),
  route("I-85", "Primary", "Active", "AL, GA, SC, NC, VA", "Montgomery to Petersburg", "Southeastern Piedmont route through Atlanta, Greenville-Spartanburg, Charlotte, Greensboro, and Durham."),
  route("I-86", "Primary", "Active", "ID", "Heyburn to Chubbuck", "Western I-86 route in southern Idaho."),
  route("I-86 (PA-NY)", "Primary", "Active", "PA, NY", "Erie region to the Southern Tier", "Eastern I-86 route across western and southern New York with Pennsylvania access."),
  route("I-87", "Primary", "Active", "NC", "Raleigh area", "Signed North Carolina corridor on the Raleigh beltway and future route toward Norfolk."),
  route("I-87 (NY)", "Primary", "Active", "NY", "New York City to the Canadian border", "New York Thruway and Northway route through Albany to the Quebec border."),
  route("I-88", "Primary", "Active", "IL", "Quad Cities to Chicago region", "Illinois tollway route across northern Illinois."),
  route("I-88 (NY)", "Primary", "Active", "NY", "Binghamton to Schenectady", "Upstate New York route through Oneonta and the Mohawk Valley approach."),
  route("I-89", "Primary", "Active", "NH, VT", "Concord to the Canadian border", "Northern New England route through Vermont to Quebec."),
  route("I-90", "Primary", "Active", "WA, ID, MT, WY, SD, MN, WI, IL, IN, OH, PA, NY, MA", "Seattle to Boston", "Longest Interstate, crossing the northern tier from Puget Sound to the Atlantic."),
  route("I-91", "Primary", "Active", "CT, MA, VT", "New Haven to the Canadian border", "Connecticut River valley route through Hartford, Springfield, and Vermont."),
  route("I-93", "Primary", "Active", "MA, NH, VT", "Boston to St. Johnsbury", "New England route through Boston, Manchester, Concord, and the White Mountains."),
  route("I-94", "Primary", "Active", "MT, ND, MN, WI, IL, IN, MI", "Billings to Port Huron", "Northern Plains and Great Lakes route through Fargo, Minneapolis-St. Paul, Milwaukee, Chicago, and Detroit."),
  route("I-95", "Primary", "Active", "FL, GA, SC, NC, VA, DC, MD, DE, PA, NJ, NY, CT, RI, MA, NH, ME", "Miami to Houlton", "Atlantic Seaboard spine serving major East Coast metropolitan regions."),
  route("I-96", "Primary", "Active", "MI", "Muskegon to Detroit", "Michigan east-west route connecting the Lake Michigan shore, Grand Rapids, Lansing, and Detroit."),
  route("I-97", "Primary", "Active", "MD", "Annapolis to Baltimore", "Short Maryland route and the only two-digit Interstate entirely within one county."),
  route("I-99", "Primary", "Active", "PA, NY", "Central Pennsylvania toward the Southern Tier", "Appalachian corridor with completed segments in Pennsylvania and New York."),
];

const nonContiguousRoutes = [
  route("H-1", "Non-contiguous", "Active", "HI", "Kapolei to Honolulu", "Primary Oahu freeway serving Honolulu, Pearl Harbor, and west Oahu."),
  route("H-2", "Non-contiguous", "Active", "HI", "Pearl City to Wahiawa", "Oahu north-south freeway connecting H-1 with central Oahu."),
  route("H-3", "Non-contiguous", "Active", "HI", "Halawa to Kaneohe", "Windward Oahu route through the Ko'olau Range."),
  route("A-1", "Non-contiguous", "Federal program", "AK", "Alaska Interstate program", "Unsigned Alaska Interstate corridor recognized for federal funding."),
  route("A-2", "Non-contiguous", "Federal program", "AK", "Alaska Interstate program", "Unsigned Alaska Interstate corridor recognized for federal funding."),
  route("A-3", "Non-contiguous", "Federal program", "AK", "Alaska Interstate program", "Unsigned Alaska Interstate corridor recognized for federal funding."),
  route("A-4", "Non-contiguous", "Federal program", "AK", "Alaska Interstate program", "Unsigned Alaska Interstate corridor recognized for federal funding."),
  route("PRI-1", "Non-contiguous", "Federal program", "PR", "San Juan to Ponce corridor", "Puerto Rico Interstate program route recognized for federal funding."),
  route("PRI-2", "Non-contiguous", "Federal program", "PR", "Western and southern Puerto Rico", "Puerto Rico Interstate program route recognized for federal funding."),
  route("PRI-3", "Non-contiguous", "Federal program", "PR", "Eastern Puerto Rico", "Puerto Rico Interstate program route recognized for federal funding."),
];

const notableAuxRoutes = [
  aux("I-105", "I-5", "CA", "Los Angeles region", "Century Freeway connector serving LAX-area travel."),
  aux("I-110", "I-10", "CA, TX", "Los Angeles and El Paso", "Two signed auxiliary examples sharing the same designation in different states."),
  aux("I-190", "I-90", "IL, MA, NY", "Chicago, Worcester, Buffalo/Niagara", "Repeated auxiliary number used for airport, city, and border access corridors."),
  aux("I-195", "I-95", "FL, ME, MD, MA/RI, NJ, VA", "Multiple East Coast connectors", "Common spur designation tied to the I-95 corridor family."),
  aux("I-205", "I-5", "CA, OR/WA", "Tracy and Portland-Vancouver", "Bypass-style routes around major I-5 corridors."),
  aux("I-215", "I-15", "CA, NV, UT", "Inland Empire, Las Vegas, Salt Lake City", "Urban loop and connector routes tied to I-15."),
  aux("I-238", "I-880", "CA", "Castro Valley to San Lorenzo", "Rare active auxiliary route whose number does not match the usual parent-route convention."),
  aux("I-235", "I-35", "IA, KS, OK", "Des Moines, Wichita, Oklahoma City", "Central city connectors in the I-35 family."),
  aux("I-240", "I-40", "NC, OK, TN", "Asheville, Oklahoma City, Memphis", "Even-prefix routes around or through I-40 metro areas."),
  aux("I-270", "I-70", "CO, IL/MO, MD, OH", "Denver, St. Louis, Washington, Columbus", "Widely reused I-70 family designation for metropolitan bypasses and connectors."),
  aux("I-275", "I-75", "FL, KY/IN/OH, MI", "Tampa Bay, Cincinnati, Detroit", "Loop and bypass designation tied to I-75."),
  aux("I-280", "I-80", "CA, IA/IL, NJ", "Bay Area, Quad Cities, New Jersey", "I-80 family connector and bypass routes."),
  aux("I-287", "I-87", "NJ, NY", "Outer New York metropolitan belt", "Major beltway-style auxiliary route around the New York City region."),
  aux("I-290", "I-90", "IL, MA, NY", "Chicago, Worcester, Buffalo", "Urban auxiliary routes in the I-90 family."),
  aux("I-295", "I-95", "DC, DE/NJ, FL, ME, NC, NY, RI/MA, VA", "Multiple I-95 bypasses", "One of the most reused auxiliary designations in the system."),
  aux("I-395", "I-95", "CT, DC/VA, FL, MD, ME", "Urban I-95 connectors", "Odd-prefix auxiliary routes connecting downtown or port districts."),
  aux("I-495", "I-95", "DE, MA, NY, VA/DC/MD", "Capital Beltway and other loops", "Famous I-95 family beltway designation, including Washington, D.C.'s Capital Beltway."),
  aux("I-610", "I-10", "LA, TX", "New Orleans and Houston", "Inner-loop routes tied to I-10."),
  aux("I-635", "I-35", "KS/MO, TX", "Kansas City and Dallas", "Even-prefix bypass loops in the I-35 family."),
  aux("I-695", "I-95", "DC, MD, NY", "Baltimore Beltway and urban connectors", "I-95 family auxiliary routes, including Baltimore's beltway."),
  aux("I-805", "I-5", "CA", "San Diego", "Bypass route through the San Diego region."),
  aux("I-880", "I-80", "CA, IA/NE", "Bay Area and Council Bluffs", "I-80 family auxiliary designation used in separate regions."),
  aux("I-895", "I-95", "MD, NY", "Baltimore and Bronx", "Urban bypass and connector routes tied to I-95."),
];

const activePrimaryByBase = new Map();
for (const item of activePrimaryRoutes) {
  const base = normalizeBaseId(item.id);
  if (!activePrimaryByBase.has(base)) activePrimaryByBase.set(base, []);
  activePrimaryByBase.get(base).push(item);
}

const notableAuxById = new Map(notableAuxRoutes.map((item) => [item.id, item]));
const allRoutes = buildAllRoutes();
let currentFilter = "all";
let currentQuery = "";
let selectedId = "I-95";

const routeList = document.querySelector("#route-list");
const detailPanel = document.querySelector("#route-detail");
const routeSearch = document.querySelector("#route-search");
const heroRouteSearch = document.querySelector("#hero-route-search");
const decoderInput = document.querySelector("#decoder-input");
const decoderOutput = document.querySelector("#decoder-output");
const resultCount = document.querySelector("#result-count");
const resultContext = document.querySelector("#result-context");

document.querySelector("#active-mainline-count").textContent = activePrimaryRoutes.length;
document.querySelector("#possible-count").textContent = allRoutes.filter((routeItem) => routeItem.generated).length;
document.querySelector("#non-contiguous-count").textContent = nonContiguousRoutes.length;
document.querySelector("#notable-aux-count").textContent = notableAuxRoutes.length;
document.querySelector("#hero-system-count").textContent = `${allRoutes.length} route records generated`;

routeSearch.addEventListener("input", (event) => {
  currentQuery = event.target.value;
  renderRoutes();
});

heroRouteSearch.addEventListener("input", (event) => {
  currentQuery = event.target.value;
  routeSearch.value = currentQuery;
  renderRoutes();
  document.querySelector("#database").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    currentFilter = button.dataset.filter;
    renderRoutes();
  });
});

decoderInput.addEventListener("input", () => {
  renderDecoder(decoderInput.value);
});

renderRoutes();
renderDetail(findRoute(selectedId) || allRoutes[0]);
renderDecoder("I-270");

function route(id, category, status, states, corridor, summary) {
  const numeric = numericFromId(id);
  return {
    id,
    baseId: normalizeBaseId(id),
    number: numeric,
    category,
    status,
    states,
    corridor,
    summary,
    axis: inferAxis(numeric),
    parent: numeric && numeric >= 100 ? `I-${numeric % 100}` : "",
    generated: false,
  };
}

function aux(id, parent, states, corridor, summary) {
  const numeric = numericFromId(id);
  return {
    id,
    baseId: id,
    number: numeric,
    category: "Auxiliary",
    status: "Notable",
    states,
    corridor,
    summary,
    axis: "Auxiliary",
    parent,
    generated: false,
  };
}

function buildAllRoutes() {
  const records = [];

  for (let number = 1; number <= 99; number += 1) {
    const id = `I-${number}`;
    const active = activePrimaryByBase.get(id);
    if (active) {
      records.push(...active);
    } else {
      records.push(generatedMainline(number));
    }
  }

  for (let number = 100; number <= 999; number += 1) {
    if (number % 100 === 0) continue;
    const id = `I-${number}`;
    const notable = notableAuxById.get(id);
    if (notable) {
      records.push(notable);
    } else {
      records.push(generatedAuxiliary(number));
    }
  }

  records.push(...nonContiguousRoutes);
  return records;
}

function generatedMainline(number) {
  const id = `I-${number}`;
  const axis = inferAxis(number);
  const gridNote = number % 2 === 0
    ? "Even primary numbers usually identify east-west corridors."
    : "Odd primary numbers usually identify north-south corridors.";

  return {
    id,
    baseId: id,
    number,
    category: "Primary",
    status: "Unassigned",
    states: "Unassigned",
    corridor: `${axis} mainline slot`,
    summary: `${id} is a valid one- or two-digit Interstate numbering slot, but it is not in this active-route seed list. ${gridNote}`,
    axis,
    parent: "",
    generated: true,
  };
}

function generatedAuxiliary(number) {
  const parentNumber = number % 100;
  const parentId = `I-${parentNumber}`;
  const firstDigit = Math.floor(number / 100);
  const parentActive = activePrimaryByBase.has(parentId);
  const role = firstDigit % 2 === 0 ? "Loop or bypass convention" : "Spur or connector convention";
  const status = parentActive ? "Possible" : "Theoretical";
  const summary = parentActive
    ? `I-${number} follows the conventional auxiliary pattern for parent ${parentId}. ${role}: an even first digit usually suggests a loop or bypass, while odd first digits usually suggest a spur.`
    : `I-${number} has a valid three-digit shape, but its parent slot ${parentId} is not active in this seed list. That makes it theoretical unless a parent corridor is assigned.`;

  return {
    id: `I-${number}`,
    baseId: `I-${number}`,
    number,
    category: "Auxiliary",
    status,
    states: parentActive ? "Possible" : "Unassigned parent",
    corridor: `${role} for ${parentId}`,
    summary,
    axis: "Auxiliary",
    parent: parentId,
    generated: true,
  };
}

function renderRoutes() {
  const filtered = getFilteredRoutes();
  const limited = prioritizeRoutes(filtered).slice(0, 160);
  const selected = findRoute(selectedId) || limited[0] || allRoutes[0];

  resultCount.textContent = `${filtered.length.toLocaleString()} result${filtered.length === 1 ? "" : "s"}`;
  resultContext.textContent = currentQuery
    ? `Matching "${currentQuery.trim()}"`
    : currentFilter === "all"
      ? "Showing the full index"
      : `Filtered by ${currentFilter}`;

  if (!limited.length) {
    routeList.innerHTML = `<div class="empty-state">No route records match that search.</div>`;
    renderDetail(null);
    return;
  }

  routeList.innerHTML = limited.map((item) => routeRowTemplate(item, selected?.id)).join("");
  routeList.querySelectorAll(".route-row").forEach((button) => {
    button.addEventListener("click", () => {
      selectedId = button.dataset.id;
      renderRoutes();
      renderDetail(findRoute(selectedId));
    });
  });

  if (selected) renderDetail(selected);
}

function getFilteredRoutes() {
  const query = currentQuery.trim().toLowerCase();

  return allRoutes.filter((item) => {
    const filterMatch =
      currentFilter === "all" ||
      (currentFilter === "primary" && item.category === "Primary" && item.status !== "Unassigned") ||
      (currentFilter === "auxiliary" && item.category === "Auxiliary" && item.status === "Notable") ||
      (currentFilter === "possible" && item.generated) ||
      (currentFilter === "noncontiguous" && item.category === "Non-contiguous");

    if (!filterMatch) return false;
    if (!query) return true;

    const normalizedQuery = normalizeSearch(query);
    const haystack = [
      item.id,
      item.baseId,
      String(item.number || ""),
      item.category,
      item.status,
      item.states,
      item.corridor,
      item.summary,
      item.parent,
      item.axis,
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(query) || normalizeSearch(item.id) === normalizedQuery || String(item.number) === normalizedQuery;
  });
}

function prioritizeRoutes(items) {
  return [...items].sort((a, b) => {
    const rankA = statusRank(a);
    const rankB = statusRank(b);
    if (rankA !== rankB) return rankA - rankB;
    return sortNumber(a) - sortNumber(b) || a.id.localeCompare(b.id);
  });
}

function statusRank(item) {
  if (item.status === "Active") return 0;
  if (item.status === "Federal program") return 1;
  if (item.status === "Notable") return 2;
  if (item.status === "Possible") return 3;
  return 4;
}

function sortNumber(item) {
  if (Number.isFinite(item.number)) return item.number;
  if (item.id.startsWith("H-")) return 1000 + Number(item.id.split("-")[1]);
  if (item.id.startsWith("A-")) return 1100 + Number(item.id.split("-")[1]);
  if (item.id.startsWith("PRI-")) return 1200 + Number(item.id.split("-")[1]);
  return 9999;
}

function routeRowTemplate(item, selected) {
  const statusClass = item.status === "Active" || item.status === "Federal program" || item.status === "Notable"
    ? "status-active"
    : item.status === "Possible"
      ? "status-possible"
      : "status-theoretical";

  return `
    <button class="route-row ${item.id === selected ? "is-selected" : ""}" type="button" data-id="${escapeHtml(item.id)}">
      <span class="shield">${shieldText(item.id)}</span>
      <span>
        <span class="route-kicker">${escapeHtml(item.category)} / ${escapeHtml(item.axis)}</span>
        <h3>${escapeHtml(item.id)} - ${escapeHtml(item.corridor)}</h3>
        <p>${escapeHtml(item.summary)}</p>
      </span>
      <span class="status-chip ${statusClass}">${escapeHtml(item.status)}</span>
    </button>
  `;
}

function renderDetail(item) {
  if (!item) {
    detailPanel.innerHTML = `
      <div class="detail-empty">
        <span class="shield detail-shield">II</span>
        <h3>No route found</h3>
        <p>Try another number or filter.</p>
      </div>
    `;
    return;
  }

  const statusClass = item.status === "Active" || item.status === "Federal program" || item.status === "Notable"
    ? "status-active"
    : item.status === "Possible"
      ? "status-possible"
      : "status-theoretical";

  detailPanel.innerHTML = `
    <div class="detail-content">
      <div class="detail-title">
        <span class="shield detail-shield">${escapeHtml(shieldText(item.id))}</span>
        <span class="status-chip ${statusClass}">${escapeHtml(item.status)}</span>
      </div>
      <div>
        <h3>${escapeHtml(item.id)}</h3>
        <p>${escapeHtml(item.summary)}</p>
      </div>
      <ul class="detail-list">
        <li><span>Type</span>${escapeHtml(item.category)}</li>
        <li><span>Axis</span>${escapeHtml(item.axis)}</li>
        <li><span>States</span>${escapeHtml(item.states)}</li>
        <li><span>Corridor</span>${escapeHtml(item.corridor)}</li>
        <li><span>Parent</span>${escapeHtml(item.parent || "None")}</li>
        <li><span>Record</span>${item.generated ? "Generated designation logic" : "Seeded route entry"}</li>
      </ul>
    </div>
  `;
}

function renderDecoder(value) {
  const normalized = normalizeRouteInput(value);
  const item = normalized ? findRoute(normalized) : null;
  const numeric = numericFromId(normalized || "");

  if (!normalized || !numeric) {
    decoderOutput.innerHTML = `
      <h3>Enter a route number</h3>
      <p>Examples: I-95, 95, I-495, 495, H-3, or PRI-1.</p>
    `;
    return;
  }

  if (item) {
    const parentLine = item.parent ? ` Parent route: ${item.parent}.` : "";
    decoderOutput.innerHTML = `
      <h3>${escapeHtml(item.id)} is ${escapeHtml(item.status.toLowerCase())}.</h3>
      <p>${escapeHtml(item.summary)}${escapeHtml(parentLine)}</p>
    `;
    return;
  }

  decoderOutput.innerHTML = `
    <h3>${escapeHtml(normalized)} is outside the generated index.</h3>
    <p>Numeric Interstate patterns run from I-1 through I-999, excluding three-digit numbers ending in 00 because they have no parent route.</p>
  `;
}

function findRoute(id) {
  if (!id) return null;
  const normalized = normalizeRouteInput(id);
  return allRoutes.find((item) => item.id === normalized || item.baseId === normalized) || null;
}

function normalizeRouteInput(value) {
  if (!value) return "";
  const cleaned = value.trim().toUpperCase().replace(/\s+/g, "");
  if (/^I-?\d{1,3}$/.test(cleaned)) {
    const number = cleaned.replace(/^I-?/, "");
    return `I-${Number(number)}`;
  }
  if (/^\d{1,3}$/.test(cleaned)) return `I-${Number(cleaned)}`;
  if (/^H-?\d$/.test(cleaned)) return `H-${cleaned.replace(/^H-?/, "")}`;
  if (/^A-?\d$/.test(cleaned)) return `A-${cleaned.replace(/^A-?/, "")}`;
  if (/^PRI-?\d$/.test(cleaned)) return `PRI-${cleaned.replace(/^PRI-?/, "")}`;
  return cleaned;
}

function normalizeSearch(value) {
  return value.toLowerCase().replace(/^i-?/, "").replace(/[^0-9a-z]/g, "");
}

function normalizeBaseId(id) {
  const match = id.match(/^I-(\d{1,3})/);
  return match ? `I-${Number(match[1])}` : id;
}

function numericFromId(id) {
  const match = id.match(/^I-(\d{1,3})/);
  return match ? Number(match[1]) : null;
}

function inferAxis(number) {
  if (!number || number >= 100) return "Auxiliary";
  return number % 2 === 0 ? "East-west" : "North-south";
}

function shieldText(id) {
  if (id.startsWith("PRI-")) return `P${id.split("-")[1]}`;
  if (id.startsWith("H-") || id.startsWith("A-")) return id;
  const match = id.match(/^I-(\d{1,3})/);
  return match ? match[1] : id;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
