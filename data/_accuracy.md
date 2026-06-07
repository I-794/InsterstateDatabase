# Interstate Index - Numeric Accuracy Review

Scope: verified `lengthMi` and `year` for active primary (two-digit) routes and the
non-contiguous (H / A / PRI) routes in `data/routes.mjs`. Sources are the Wikipedia
route articles (infobox length and "Existed" year), cross-checked with FHWA / AARoads
where useful. Length tolerance: ~3% or ~15 mi. Year: exact designation/commission year.

## Summary

- Routes checked: 52 (49 primary entries + H-1, H-3; A-x and PRI-x reviewed, see notes).
- Fields verified: ~100 (length + year per route).
- OK (no change needed): 40 routes.
- Flagged to fix: 12 routes (mostly `year` errors where the stored value is a
  construction/opening era rather than the designation year).

### Highest-confidence corrections (year unless noted)

- I-4 year: 1965 -> 1957
- I-17 year: 1961 -> 1957
- I-43 year: 1962 -> 1988
- I-82 year: 1965 -> 1957
- I-79 year: 1962 -> 1958
- I-12 year: 1960 -> 1957
- I-49 year: 1996 -> 1977
- I-69 lengthMi: 1075 -> 910
- I-26 lengthMi: 305 -> 328

## Detail

| Route | Field | Current value | Source value | Verdict | Suggested fix |
|-------|-------|---------------|--------------|---------|---------------|
| I-5  | lengthMi | 1381 | 1381 | OK | - |
| I-5  | year | 1957 | 1957 | OK | - |
| I-95 | lengthMi | 1908 | 1906 | OK | - |
| I-95 | year | 1957 | 1957 | OK | - |
| I-90 | lengthMi | 3020 | 3020.54 | OK | - |
| I-90 | year | 1957 | 1957 | OK | - |
| I-80 | lengthMi | 2899 | 2900.76 | OK | - |
| I-80 | year | 1956 | 1956 | OK | - |
| I-10 | lengthMi | 2460 | 2460.34 | OK | - |
| I-10 | year | 1957 | 1957 | OK | - |
| I-40 | lengthMi | 2556 | 2556.61 | OK | - |
| I-40 | year | 1957 | 1957 | OK | - |
| I-35 | lengthMi | 1568 | 1568 | OK | - |
| I-35 | year | 1957 | 1957 | OK | - |
| I-75 | lengthMi | 1786 | 1786.47 | OK | - |
| I-75 | year | 1957 | 1957 | OK | - |
| I-70 | lengthMi | 2151 | 2151 | OK | - |
| I-70 | year | 1956 | 1956 | OK | - |
| I-94 | lengthMi | 1585 | 1585 | OK | - |
| I-94 | year | 1957 | 1957 | OK | - |
| I-20 | lengthMi | 1535 | 1535-1539 | OK | - |
| I-20 | year | 1957 | 1957 | OK | - |
| I-15 | lengthMi | 1433 | 1433 | OK | - |
| I-15 | year | 1957 | 1957 | OK | - |
| I-55 | lengthMi | 964 | 964 | OK | - |
| I-55 | year | 1957 | 1957 | OK | - |
| I-25 | lengthMi | 1063 | 1060.97 | OK | - |
| I-25 | year | 1957 | 1957 | OK | - |
| I-29 | lengthMi | 752 | 750.58 | OK | - |
| I-29 | year | 1957 | 1957 | OK | - |
| I-65 | lengthMi | 887 | 887.30 | OK | - |
| I-65 | year | 1957 | 1957 | OK | - |
| I-64 | lengthMi | 951 | 953.74 | OK | - |
| I-64 | year | 1958 | 1958 | OK | - |
| I-44 | lengthMi | 633 | 633.79 | OK | - |
| I-44 | year | 1958 | 1958 | OK | - |
| I-69 | lengthMi | 1075 | 910.1 (infobox) | CONFLICT | 910 (sum of signed segments; 1075 overstates by ~18%) |
| I-69 | year | 1957 | 1957 | OK | - |
| I-85 | lengthMi | 666 | 666.05 | OK | - |
| I-85 | year | 1957 | 1957 | OK | - |
| I-24 | lengthMi | 316 | 316 | OK | - |
| I-24 | year | 1958 | 1958 | OK | - |
| I-30 | lengthMi | 367 | 366.76 | OK | - |
| I-30 | year | 1957 | 1957 | OK | - |
| I-45 | lengthMi | 285 | 285 | OK | - |
| I-45 | year | 1957 | 1957 | OK | - |
| I-26 | lengthMi | 305 | ~328 | CONFLICT | 328 (current 305 is ~7% short) |
| I-26 | year | 1958 | 1957 | MINOR | 1957 (AASHO approved Oct 1957) |
| I-77 | lengthMi | 614 | 611-614 | OK | - |
| I-77 | year | 1958 | 1958 | OK | - |
| I-37 | lengthMi | 143 | 143 | OK | - |
| I-37 | year | 1959 | 1959 | OK | - |
| I-16 | lengthMi | 167 | 166.81 | OK | - |
| I-16 | year | 1962 | ~1961 | OK | - |
| I-71 | lengthMi | 345 | 344-345.6 | OK | - |
| I-71 | year | 1959 | 1959 | OK | - |
| I-57 | lengthMi | 386 | 386 (with terminal jct) | OK | - |
| I-57 | year | 1961 | 1961 | OK | - |
| I-49 | lengthMi | 314 | 547.52 (full route) | MINOR | description is the core corridor; full I-49 is much longer. Optional |
| I-49 | year | 1996 | 1977 | CONFLICT | 1977 (AASHTO designation; 1996 was LA completion) |
| I-59 | lengthMi | 445 | 445.23 | OK | - |
| I-59 | year | 1957 | 1957 | OK | - |
| I-81 | lengthMi | 855 | 855 | OK | - |
| I-81 | year | 1957 | 1957 | OK | - |
| I-39 | lengthMi | 304 | 306.14 | OK | - |
| I-39 | year | 1986 | 1986 (infobox) | OK | - |
| I-43 | lengthMi | 192 | 191.55 | OK | - |
| I-43 | year | 1962 | 1981 (infobox) / signed 1988 | CONFLICT | 1988 (1962 is far too early) |
| I-79 | lengthMi | 343 | 343.46 | OK | - |
| I-79 | year | 1962 | 1958 (infobox) | CONFLICT | 1958 |
| I-4  | lengthMi | 132 | 132.30 | OK | - |
| I-4  | year | 1965 | 1957 (infobox) | CONFLICT | 1957 |
| I-17 | lengthMi | 146 | 146 | OK | - |
| I-17 | year | 1961 | 1957 (infobox) | CONFLICT | 1957 |
| I-66 | lengthMi | 76 | 76.32 | OK | - |
| I-66 | year | 1959 | late 1950s | OK | - |
| I-78 | lengthMi | 145 | 144 | OK | - |
| I-78 | year | 1958 | 1957 | OK | - |
| I-96 | lengthMi | 192 | 192.03 | OK | - |
| I-96 | year | 1957 | 1957 | OK | - |
| I-27 | lengthMi | 124 | 124 | OK | - |
| I-27 | year | 1968 | 1968 (authorized) / 1969 designated | OK | - |
| I-19 | lengthMi | 63 | 63 | OK | - |
| I-19 | year | 1961 | ~1961-1963 | OK | - |
| I-87 (NY) | lengthMi | 333 | 333.49 | OK | - |
| I-87 (NY) | year | 1957 | 1957 | OK | - |
| I-8  | lengthMi | 348 | 348 | OK | - |
| I-8  | year | 1957 | 1957 | OK | - |
| I-12 | lengthMi | 85 | 85.59 | OK | - |
| I-12 | year | 1960 | 1957 added / 1967 infobox | CONFLICT | 1957 (designation; 1960 matches neither) |
| I-22 | lengthMi | 211 | 202.22 | MINOR | ~202 (current 211 is ~4% high) |
| I-22 | year | 2016 | 2016 (fully signed) | OK | - |
| I-91 | lengthMi | 290 | 290 | OK | - |
| I-91 | year | 1958 | 1958 | OK | - |
| I-89 | lengthMi | 191 | 191.12 | OK | - |
| I-89 | year | 1957 | 1957 | OK | - |
| I-93 | lengthMi | 190 | 189.95 | OK | - |
| I-93 | year | 1957 | 1957 | OK | - |
| I-2  | lengthMi | 47 | 47 | OK | - |
| I-2  | year | 2013 | 2013 | OK | - |
| I-41 | lengthMi | 175 | 175.00 | OK | - |
| I-41 | year | 2015 | 2015 | OK | - |
| I-82 | lengthMi | 144 | 143.6 | OK | - |
| I-82 | year | 1965 | 1957 (designated Oct 1957) | CONFLICT | 1957 |
| I-83 | lengthMi | 85 | 85.3 | OK | - |
| I-83 | year | 1959 | 1957 (designation) | MINOR | 1957 |
| I-11 | lengthMi | 23 | 54.19 (NV total) | MINOR | 23 reflects only the new Boulder City build; NV I-11 incl. former I-515 is ~54. Optional |
| I-11 | year | 2017 | 2017 | OK | - |
| I-72 | lengthMi | 180 | 179.29 | OK | - |
| I-72 | year | 1990 | 1970s built / 1995 extended | MINOR | original I-72 predates 1990; defensible but soft |
| I-99 | lengthMi | 100 | ~85 PA + NY segment (~93 total) | OK | - |
| I-99 | year | 1995 | 1995 (written into law) | OK | - |
| I-68 | lengthMi | 113 | 113.15 | OK | - |
| I-68 | year | 1991 | 1991 | OK | - |
| I-84 (OR-UT) | lengthMi | 770 | ~770 | OK | - |
| I-84 (OR-UT) | year | 1957 | 1957 (as I-80N) | OK | - |
| I-88 (IL) | lengthMi | 140 | 140.60 | OK | - |
| I-88 (IL) | year | 1987 | 1987 | OK | - |
| I-86 (PA-NY) | lengthMi | 220 | ~221 NY / 254 PA+NY | OK | - |
| I-86 (PA-NY) | year | 1999 | 1999 | OK | - |
| H-1 | lengthMi | 27 | 27.16 | OK | - |
| H-1 | year | 1960 | 1960 (designated) | OK | - |
| H-3 | lengthMi | 15 | 15.32 | OK | - |
| H-3 | year | 1997 | 1960 designated (opened 1997) | MINOR | per "designated not completed" rule, 1960; author appears to use opening years for H-2/H-3 consistently |

## Notes and caveats

- Year errors dominate. Several primaries store a construction/opening-era year instead
  of the original designation year. The clearest are I-4 (1957), I-17 (1957),
  I-82 (1957), I-79 (1958), I-43 (1988), I-12 (1957), and I-49 (1977).
- I-69 length (1075) is the largest length discrepancy: Wikipedia's infobox totals the
  eight signed segments at 910.1 mi. The route is non-continuous, so any total is
  approximate, but 1075 overstates current signed mileage by roughly 18%.
- I-26 length (305) is about 7% short of the ~328 mi route; recommend 328.
- I-49 (314) and I-11 (23) lengths describe a specific corridor subset rather than the
  full numbered route; flagged MINOR/optional because the site's `from`/`to` fields scope
  them to those segments.
- Hawaii H-2/H-3 and the A-x / PRI-x program routes: the stored `year` values for H-2
  (1977) and H-3 (1997) are opening years, not the 1960 federal designation. This is an
  internally consistent editorial choice; only flagged for H-3 as the rule in the task
  ("first designated, not completed") would favor 1960. A-1..A-4 (year 1976, length null)
  and PRI-1..PRI-3 (year 1965) are unsigned federal-program corridors with no authoritative
  single mileage; left as-is (no reliable contradicting source).
