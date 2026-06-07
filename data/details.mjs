// Long-form route detail, merged from per-batch fragments under data/details/.
// Loaded ONLY by the generator (build time) so the in-browser database stays
// lean. Keyed by route id; merged over the base record in generate.mjs.

import g1 from "./details/g1.mjs";
import g2 from "./details/g2.mjs";
import g3 from "./details/g3.mjs";
import g4 from "./details/g4.mjs";
import g5 from "./details/g5.mjs";
import g6 from "./details/g6.mjs";
import ncon from "./details/ncon.mjs";
import aux1 from "./details/aux1.mjs";
import aux2 from "./details/aux2.mjs";

const details = { ...g1, ...g2, ...g3, ...g4, ...g5, ...g6, ...ncon, ...aux1, ...aux2 };

export default details;
