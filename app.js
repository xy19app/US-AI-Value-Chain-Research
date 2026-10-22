/* ============================================================
   App — hash router + page renderers + search
   ============================================================ */
"use strict";

/* NOTE: UI, VIZ, DB are top-level const globals from components.js,
   visualization.js and data.js — in classic <script> tags they share
   the global lexical scope, so they must NOT be redeclared here.
   Only esc needs a local alias (it is private to UI's closure). */
const esc = UI.esc;

const App = (() => {
  const $ = sel => document.querySelector(sel);
  const main = $("#main");

  /* ---------- Helpers ---------- */
  function pageHead(title, sub, source) {
    return '<div class="page-head"><h1 class="page-title">' + esc(title) + "</h1>" +
      (sub ? '<div class="page-sub">' + esc(sub) + "</div>" : "") +
      (source ? '<div class="page-source">Source: ' + esc(source) + "</div>" : "") + "</div>";
  }
  function sec(title, body, count) {
    const id = String(title).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    return '<div class="section" id="' + id + '"><div class="section-title">' + esc(title) + (count ? '<span class="sec-count">' + esc(String(count)) + "</span>" : "") + '</div><div class="section-body">' + body + "</div></div>";
  }
  function bindScrollLinks() {
    main.querySelectorAll("[data-jump]").forEach(a => {
      a.addEventListener("click", ev => {
        ev.preventDefault();
        const el = document.getElementById(a.dataset.jump);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }
  function scrolledTop() { main.scrollTop = 0; window.scrollTo(0, 0); }

  /* ---------- Shared editorial blocks ----------
     Moved out of the old single-page summary; each now lives on the view
     where it serves as evidence rather than on the entry page. */
  const overviewCard =
    '<div class="card"><div class="card__title">Overview</div><div class="card__body">' +
    "<p>US AI Industry Research maps the structure, economics, and investment landscape of the US AI ecosystem.</p>" +
    "<p>This research covers 67 companies across the full AI value chain, from semiconductor equipment and AI chips to cloud infrastructure, foundation models, and applications.</p>" +
    "</div></div>";
  const scopeCards =
    '<div class="card"><div class="card__title">Scope</div><div class="card__body">' +
    '<div style="display:flex;gap:8px;flex-wrap:wrap;margin:0 0 10px">' +
    '<span class="badge badge--data">Coverage · 67 companies</span>' +
    '<span class="badge badge--data">Snapshot · August 2026</span>' +
    '<span class="badge badge--data">Value chain · 4 layers</span>' +
    "</div>" +
    '<p style="color:var(--muted);font-size:12px;margin:0">The value chain is structured across four layers:</p>' +
    "</div></div>" +
    '<div class="grid grid-4">' +
    '<div class="card"><div class="card__title">1 · AI Infrastructure</div><div class="card__body">Semiconductor equipment · Chips · Memory · Networking · Data centres</div></div>' +
    '<div class="card"><div class="card__title">2 · Compute &amp; Cloud</div><div class="card__body">GPUs · Cloud platforms · AI infrastructure providers</div></div>' +
    '<div class="card"><div class="card__title">3 · Foundation Models</div><div class="card__body">AI labs · Model providers</div></div>' +
    '<div class="card"><div class="card__title">4 · Applications</div><div class="card__body">Enterprise AI · Consumer AI products</div></div>' +
    "</div>";
  const lensCards =
    '<div class="grid grid-3">' +
    '<div class="card"><div class="card__title">Technology Importance</div><div class="card__body">Which technologies and companies are strategically important?</div></div>' +
    '<div class="card"><div class="card__title">Economic Value Capture</div><div class="card__body">Which parts of the AI ecosystem capture the most profit?</div></div>' +
    '<div class="card"><div class="card__title">Investment Attractiveness</div><div class="card__body">Which companies have the strongest long-term investment potential?</div></div>' +
    "</div>";
  const insightCallout =
    '<div class="callout"><h4>Central insight</h4>' +
    "<p><b>AI's biggest paradox:</b> the model layer drives the AI revolution but currently captures less economic value than the physical infrastructure layers that enable it.</p>" +
    '<ul style="margin:8px 0 0;padding-left:18px">' +
    "<li>AI models require enormous compute investment</li>" +
    "<li>Semiconductor, infrastructure, and cloud layers currently have stronger pricing power</li>" +
    "<li>Long-term value capture remains the key strategic question</li>" +
    "</ul></div>";
  const methodologyCard =
    '<div class="card"><div class="card__title">Methodology</div><div class="card__body">' +
    "<p style='margin:0'><b>Technology importance ≠ business quality ≠ investment attractiveness.</b></p>" +
    '<p style="margin:8px 0 0"><span class="badge badge--fact">Fact</span> <span class="badge badge--estimate">Estimate</span> <span class="badge badge--view">View</span> — facts, estimates, and analyst views are separated throughout the dashboard.</p>' +
    "<p style='margin:8px 0 0'><b>Research universe:</b> 67 companies — 65 in the cleaned database plus TSMC and DeepSeek from the Top-20 selection. The tier classification covers the 65; the Top-20 are the five-per-category deep-dive selection (criteria above).</p>" +
    "<p style='margin:8px 0 0'><b>Scope:</b> the research covers the US AI ecosystem but includes essential non-US dependencies (TSMC, ASML and others) where they determine the economics of the chain.</p>" +
    "<p style='margin:8px 0 0'>Data snapshot: August 9, 2026.</p>" +
    "</div></div>";
  const chainNodes = [
    { label: "Infrastructure", sub: "Silicon · power · memory" },
    { label: "Semiconductors", sub: "GPUs · custom ASICs · HBM" },
    { label: "Compute", sub: "Accelerators · systems" },
    { label: "Cloud Platforms", sub: "Hyperscalers · GPU clouds" },
    { label: "Models", sub: "Frontier · open weights" },
    { label: "Applications", sub: "Enterprise · agents · verticals" }
  ];
  const funnelBox =
    '<div class="chart-box" style="margin-top:16px"><div class="chart-box__title">The four-layer funnel</div><div class="chart-box__sub">Every dollar of AI revenue flows from applications down through models, cloud and into infrastructure</div><div id="chainFlow"></div><div class="chart-box__src">Source: US-AI-Industry-Map-Aug-2026.md — How to read this map</div></div>';

  /* ---------- Pages ---------- */
  function renderHome() {
    const A = window.AIDATA;

    /* Hero — the featured-project introduction: question → approach → finding */
    const hero =
      '<div class="hero-card">' +
      '<div class="hero-card__sub">Featured Project · Aug 2026</div>' +
      "<h2>US AI Value-Chain Research</h2>" +
      '<p class="hero-card__intro">An independent investment research dashboard examining where economic value accrues across the AI supply chain, which competitive advantages endure, and where investment risks may be mispriced.</p>' +
      '<div class="hero-stats">' +
      '<span class="hero-stat"><b>67</b><span>Companies</span></span>' +
      '<span class="hero-stat"><b>~110</b><span>Sources</span></span>' +
      '<span class="hero-stat"><b>9</b><span>Layers</span></span>' +
      '<span class="hero-stat"><b>3</b><span>Tiers</span></span>' +
      '<span class="hero-stat"><b>20</b><span>Deep dives</span></span>' +
      "</div>" +
      '<div class="hero-blocks">' +
      '<div class="hero-block"><b>The Investment Question</b> — Where does economic value accrue, and which strategically important companies are actually attractive investments?</div>' +
      '<div class="hero-block"><b>The Approach</b> — Map 67 companies across the supply chain, analyse 20 in depth, and assess bottlenecks, pricing power, competitive moats and investment risks.</div>' +
      '<div class="hero-block"><b>The Central Finding</b> — Structural importance ≠ business quality ≠ investment attractiveness. An essential company can still be overpriced; a less visible supplier can offer a more attractive risk-adjusted opportunity.</div>' +
      "</div>" +
      "</div>";

    /* Three analytical lenses — the core framework */
    const lenses =
      '<div class="guide" style="margin-bottom:14px"><p><b>Three analytical lenses.</b> Every assessment in this research separates <b>technology importance</b>, <b>business quality</b> and <b>investment attractiveness</b>. A company can score high on one and low on another — the divergences are the analysis.</p></div>' +
      lensCards +
      '<p class="pager-note" style="margin-top:10px">Full three-lens comparison table and worked divergences → <a href="#/themes" style="color:var(--accent)">06 · Investment Themes</a></p>';

    /* Key findings — research conclusions with evidence links and caveats */
    const findings = [
      { text: A.bottomLine[0], to: "#/supply-chain", label: "05 · Supply Chain" },
      { text: A.bottomLine[1], to: "#/themes", label: "06 · Investment Themes" },
      { text: A.bottomLine[2], to: "#/themes", label: "06 · Investment Themes" },
      { text: A.bottomLine[3], to: "#/ranking", label: "04 · Ranking Dashboard" }
    ];
    const findingsHtml =
      '<div class="findings">' +
      findings.map((f, i) =>
        '<div class="finding"><div class="finding__num">' + (i + 1) + "</div>" +
        '<div class="finding__body"><span class="badge badge--view">Analyst view</span>' +
        '<p style="margin:8px 0 0">' + esc(f.text) + "</p>" +
        '<div class="finding__src">Source: US-AI-Value-Capture-Analysis-Aug-2026.md — Bottom line · as of 9 August 2026</div>' +
        '<a class="finding__link" href="' + f.to + '">Read the evidence → ' + esc(f.label) + "</a></div></div>"
      ).join("") +
      "</div>" +
      '<p class="pager-note" style="margin-top:10px">The four conclusions above are <b>research conclusions</b> — analyst judgments drawn from the source evidence, not established facts. Sourced facts <span class="badge badge--fact">Fact</span>, estimates <span class="badge badge--estimate">Estimate</span> and analyst views <span class="badge badge--view">View</span> are labelled separately throughout; full methodology on <a href="#/themes" style="color:var(--accent)">06 · Investment Themes</a>.</p>';

    /* Explore the research — the six-section index */
    const whereNext =
      '<div class="view-links">' +
      '<a class="view-link" href="#/home"><b>01 · Executive Summary</b><span>The argument — the thesis in thirty seconds.</span><em>You are here</em></a>' +
      '<a class="view-link" href="#/companies"><b>02 · Company Profiles</b><span>The database — find and investigate 67 companies.</span><em>Explore →</em></a>' +
      '<a class="view-link" href="#/ecosystem"><b>03 · Ecosystem Map</b><span>The relationships — dependencies, competition, financing.</span><em>Explore →</em></a>' +
      '<a class="view-link" href="#/ranking"><b>04 · Ranking Dashboard</b><span>The comparison — scores, tiers and trade-offs.</span><em>Explore →</em></a>' +
      '<a class="view-link" href="#/supply-chain"><b>05 · Supply Chain</b><span>The economics — bottlenecks, pricing power, profits.</span><em>Explore →</em></a>' +
      '<a class="view-link" href="#/themes"><b>06 · Investment Themes</b><span>The conclusions — moats, valuation lenses, risks.</span><em>Explore →</em></a>' +
      "</div>";

    const html =
      pageHead("01 · Executive Summary", "The argument — the research question, approach, central finding and four key conclusions in one page.", "US-AI-Industry-Map / Ranking / Value-Capture (Aug 2026)") +
      hero +
      sec("Three analytical lenses", lenses) +
      sec("Key findings", findingsHtml, "4") +
      sec("Explore the research", whereNext);
    main.innerHTML = html;
  }

  /* ---------- Companies ---------- */
  let companyFilters = { category: "all", tier: "all", layer: "all", segment: "all", type: "all", status: "all", exposure: "all", q: "" };

  function companyList() {
    const f = companyFilters;
    let list = DB.companies.slice();
    if (f.category !== "all") list = list.filter(c => c.category === f.category);
    if (f.tier !== "all") list = list.filter(c => String(c.tier) === f.tier);
    if (f.layer !== "all") list = list.filter(c => String(c.layer) === f.layer);
    if (f.segment !== "all") list = list.filter(c => c.segment === f.segment);
    if (f.type !== "all") list = list.filter(c => c.type === f.type);
    if (f.status !== "all") list = list.filter(c => c.status === f.status);
    if (f.exposure !== "all") list = list.filter(c => c.aiExposure.level === f.exposure);
    if (f.q) list = list.filter(c => (c.name + " " + (c.primaryFunction || "") + " " + (c.ticker || "")).toLowerCase().includes(f.q.toLowerCase()));
    return list;
  }

  let companySort = { key: "name", dir: "asc" };

  function sortCompanies(list) {
    const { key, dir } = companySort;
    const val = c => {
      if (key === "name") return c.name.toLowerCase();
      if (key === "layer") return c.layer || 0;
      if (key === "tier") return c.tier || 0;
      if (key === "attractiveness") return (c.scores && c.scores.attractiveness) || 0;
      return "";
    };
    return list.slice().sort((a, b) => {
      const va = val(a), vb = val(b);
      const d = typeof va === "number" && typeof vb === "number" ? va - vb : String(va).localeCompare(String(vb));
      return dir === "asc" ? d : -d;
    });
  }

  function bindCompanyTable() {
    main.querySelectorAll("#companyTable th.sortable").forEach(th => {
      th.addEventListener("click", () => {
        const k = th.dataset.key;
        if (companySort.key === k) companySort.dir = companySort.dir === "asc" ? "desc" : "asc";
        else {
          companySort.key = k;
          /* attractiveness starts high-to-low; everything else low-to-high */
          companySort.dir = (k === "attractiveness") ? "desc" : "asc";
        }
        renderCompanies();
      });
    });
    main.querySelectorAll(".company-row").forEach(tr => {
      tr.addEventListener("click", ev => {
        if (ev.target.closest("a")) return;
        location.hash = "#/companies/" + tr.dataset.slug;
      });
    });
  }

  function renderCompanies() {
    const f = companyFilters;
    const list = sortCompanies(companyList());
    const sel = (name, current, opts) =>
      '<select class="fsel" data-filter="' + name + '">' +
      opts.map(o => '<option value="' + o.v + '"' + (current === o.v ? " selected" : "") + ">" + o.l + "</option>").join("") + "</select>";
    const html =
      pageHead("02 · Company Profiles", "The database — find and investigate companies across the 67-company universe; click a row for the detail, including full 10-section deep dives for the Top-20.", "US-AI-Industry-Research-DB + US-AI-Industry-Ranking + US-AI-Top20 (Aug 2026)") +
      '<div class="filterbar">' +
        '<div class="filter-group"><label>Category</label>' + sel("category", f.category, [{ v: "all", l: "All" }, { v: "infrastructure", l: "Infrastructure" }, { v: "platform", l: "Platform" }, { v: "applications", l: "Applications" }, { v: "disruptors", l: "Disruptors" }]) + "</div>" +
        '<div class="filter-group"><label>Tier</label>' + sel("tier", f.tier, [{ v: "all", l: "All" }, { v: "1", l: "Tier 1" }, { v: "2", l: "Tier 2" }, { v: "3", l: "Tier 3" }]) + "</div>" +
        '<div class="filter-group"><label>Layer</label>' + sel("layer", f.layer, [{ v: "all", l: "All" }, { v: "1", l: "Layer 1 · Infra" }, { v: "2", l: "Layer 2 · Platform" }, { v: "3", l: "Layer 3 · Cloud" }, { v: "4", l: "Layer 4 · Apps" }]) + "</div>" +
        '<div class="filter-group"><label>AI Layer</label>' + sel("segment", f.segment, [{ v: "all", l: "All" }].concat(DB.segments.map(s => ({ v: s, l: s })))) + "</div>" +
        '<div class="filter-group"><label>Type</label>' + sel("type", f.type, [{ v: "all", l: "All" }].concat(DB.types.map(t => ({ v: t, l: t })))) + "</div>" +
        '<div class="filter-group"><label>Status</label>' + sel("status", f.status, [{ v: "all", l: "All" }, { v: "Public", l: "Public" }, { v: "Private", l: "Private" }]) + "</div>" +
        '<div class="filter-group"><label>AI exposure</label>' + sel("exposure", f.exposure, [{ v: "all", l: "All" }, { v: "High", l: "High" }, { v: "Medium", l: "Medium" }, { v: "Low-Medium", l: "Low-Medium" }, { v: "Medium-High", l: "Medium-High" }]) + "</div>" +
        '<div class="spacer"></div><input class="search-mini" id="companyQ" placeholder="Filter by name…" value="' + esc(f.q) + '" style="width:180px">' +
      "</div>" +
      '<div class="pager-note">' + list.length + " companies shown · click a header to sort · click a row to open the profile</div>" +
      '<div id="companyTable">' + UI.companyTable(list, companySort) + "</div>" +
      sec("The research universe", overviewCard + scopeCards) +
      sec("Multi-role companies — roles separated",
        '<div class="card"><div class="card__body">' +
        '<p style="color:var(--muted);font-size:12px">Companies that play multiple roles across the value chain, with the primary strategic role identified.</p>' +
        '<table class="rt"><thead><tr><th>Company</th><th>Distinct AI roles</th><th>Primary role</th></tr></thead><tbody>' +
        DB.companies.filter(c => c.multiRole).map(c =>
          "<tr><td><a href='#/companies/" + c.slug + "'>" + esc(c.name) + "</a></td><td class='cell-wide'>" + UI.listHtml(c.multiRole.roles) + "</td><td>" + esc(c.multiRole.primary) + "</td></tr>"
        ).join("") +
        window.AIDATA.multiRoleGroups.map(g =>
          "<tr><td>" + esc(g.label) + "</td><td class='cell-wide'>" + UI.listHtml(g.roles) + "</td><td>" + esc(g.primary) + "</td></tr>"
        ).join("") +
        "</tbody></table></div><div class='card__src'>Source: US-AI-Industry-Research-DB-Aug-2026.md — Multi-role table</div></div>") +
      sec("Excluded from the research universe",
        '<div class="card"><div class="card__body"><table class="rt"><thead><tr><th>Company</th><th>Reason for removal</th></tr></thead><tbody>' +
        window.AIDATA.exclusions.map(e => "<tr><td><b>" + esc(e.company) + "</b></td><td>" + esc(e.reason) + "</td></tr>").join("") +
        "</tbody></table></div><div class='card__src'>Source: US-AI-Industry-Research-DB-Aug-2026.md — Removed companies (18)</div></div>") +
      sec("Non-US context",
        '<div class="card"><div class="card__body"><table class="rt"><thead><tr><th>Company</th><th>Market cap</th><th>Note</th></tr></thead><tbody>' +
        window.AIDATA.contextCompanies.map(c => "<tr><td><b>" + esc(c.company) + "</b></td><td class='num'>" + esc(c.cap) + "</td><td>" + esc(c.note) + "</td></tr>").join("") +
        "</tbody></table></div><div class='card__src'>Source: US-AI-Industry-Research-DB-Aug-2026.md — Non-US context</div></div>");
    main.innerHTML = html;
    bindFilterBar();
    bindCompanyTable();
  }

  let profileMode = "all";
  let currentProfileSlug = null;

  function renderProfile(slug) {
    currentProfileSlug = slug;
    const c = DB.bySlug[slug];
    if (!c) { main.innerHTML = pageHead("Company not found", "No such company in the research universe."); return; }
    main.innerHTML = UI.profileView(c, profileMode);
    bindPanels();
    main.querySelectorAll("[data-mode]").forEach(b => {
      b.addEventListener("click", () => {
        profileMode = b.dataset.mode;
        if (currentProfileSlug) renderProfile(currentProfileSlug);
      });
    });
  }

  /* ---------- Ecosystem ---------- */
  let ecoSel = null;
  let ecoUniverse = false; /* default: Top-20 curated research view */

  function buildCompetitorEdges() {
    /* Derived from the "Main competitors" field in the source DB —
       links drawn only between companies present in the universe. */
    const seen = new Set(), edges = [];
    DB.companies.forEach(c => (c.competitors || []).forEach(nm => {
      const s = DB.slugByName(nm);
      if (s && s !== c.slug) {
        const key = [c.slug, s].sort().join("|");
        if (!seen.has(key)) { seen.add(key); edges.push({ from: c.slug, to: s }); }
      }
    }));
    return edges;
  }

  function drawEcoGraph() {
    const A = window.AIDATA;
    VIZ.drawEcosystemAll($("#ecoGraph"), {
      companies: DB.companies,
      explicitEdges: A.ecosystem.edges,
      edgeTypes: A.ecosystem.edgeTypes,
      competitorEdges: buildCompetitorEdges(),
      top20: A.ecosystem.nodes.map(n => n.id),
      categoryColor: A.categoryColor,
      universe: ecoUniverse,
      selected: ecoSel,
      onSelect: slug => { ecoSel = slug; renderEcoDetail(); drawEcoGraph(); },
      onUniverse: u => { ecoUniverse = u; renderEcoDetail(); drawEcoGraph(); }
    });
  }

  function renderEcoDetail() {
    const box = $("#ecoDetail");
    if (!box) return;
    const A = window.AIDATA;
    if (!ecoSel) {
      /* no selection: show the company list so names are clickable
         without hunting for nodes */
      const list = DB.companies
        .filter(c => ecoUniverse || A.ecosystem.nodes.some(n => n.id === c.slug))
        .sort((a, b) => a.name.localeCompare(b.name));
      box.innerHTML =
        '<div class="eco-panel__title">' + (ecoUniverse ? "All 67 companies" : "Top 20 companies — curated research view") + "</div>" +
        '<p class="eco-panel__hint">Select a company to see its connections and detail. Click the canvas to clear.</p>' +
        '<div class="eco-list">' +
        list.map(c =>
          '<button class="eco-list__row" data-eco-select="' + esc(c.slug) + '"><span>' + esc(c.name) + "</span>" +
          (c.ticker ? "<em>" + esc(c.ticker) + "</em>" : "") + "</button>"
        ).join("") +
        "</div>";
      box.querySelectorAll("[data-eco-select]").forEach(b => {
        b.addEventListener("click", () => { ecoSel = b.dataset.ecoSelect; drawEcoGraph(); renderEcoDetail(); });
      });
      return;
    }
    const c = DB.bySlug[ecoSel];
    if (!c) { box.innerHTML = ""; return; }
    const explicit = A.ecosystem.edges.filter(e => e.from === ecoSel || e.to === ecoSel);
    const comps = (c.competitors || [])
      .map(nm => DB.slugByName(nm)).filter(Boolean)
      .map(s => DB.bySlug[s]);
    const sameSeg = DB.companies.filter(x => x.slug !== ecoSel && x.segment === c.segment && (ecoUniverse || A.ecosystem.nodes.some(n => n.id === x.slug)));
    const link = s => '<a class="chip" href="#/companies/' + s + '">' + esc(DB.bySlug[s].name) + "</a>";
    const rows =
      '<div class="field-row"><div class="field-row__label">Position</div><div class="field-row__value">' + esc(c.chainPosition || c.primaryFunction) + "</div></div>" +
      '<div class="field-row"><div class="field-row__label">Segment / Type</div><div class="field-row__value">' + esc(c.segment) + " · " + esc(c.type) + "</div></div>" +
      '<div class="field-row"><div class="field-row__label">Tier</div><div class="field-row__value">' + (c.tier ? "Tier " + c.tier : "unranked (non-US context)") + "</div></div>" +
      '<div class="field-row"><div class="field-row__label">AI exposure</div><div class="field-row__value">' + UI.expBadge(c.aiExposure.level) + " — " + esc(c.aiExposure.note || "") + "</div></div>" +
      (explicit.length ? '<div class="field-row"><div class="field-row__label">Relationships</div><div class="field-row__value">' + explicit.map(e => {
        const t = A.ecosystem.edgeTypes[e.type] || { label: e.type };
        const other = e.from === ecoSel ? e.to : e.from;
        return '<span style="color:' + (A.ecosystem.edgeTypes[e.type] || {}).color + '">' + esc(t.label) + "</span> → " + link(other) + " (" + esc(e.label) + ")";
      }).join("<br>") + "</div></div>" : "") +
      (comps.length ? '<div class="field-row"><div class="field-row__label">Competitors</div><div class="field-row__value">' + comps.map(x => link(x.slug)).join(" ") + "</div></div>" : "") +
      (sameSeg.length ? '<div class="field-row"><div class="field-row__label">Same segment</div><div class="field-row__value">' + sameSeg.slice(0, 12).map(x => link(x.slug)).join(" ") + (sameSeg.length > 12 ? " …" : "") + "</div></div>" : "");
    box.innerHTML =
      '<div class="eco-panel__title">' + esc(c.name) + "</div>" +
      '<p class="eco-panel__hint">' + (c.ticker ? esc(c.ticker) + " · " : "") + esc(c.primaryFunction || c.chainPosition || "") + "</p>" +
      rows +
      '<div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap">' +
      '<a class="btn" href="#/companies/' + c.slug + '">Open full profile →</a>' +
      '<button class="eco-clear" id="ecoClear" style="margin-top:0">Clear selection</button>' +
      "</div>";
    const clearBtn = box.querySelector("#ecoClear");
    if (clearBtn) clearBtn.addEventListener("click", () => { ecoSel = null; drawEcoGraph(); renderEcoDetail(); });
  }

  function renderEcosystem() {
    const A = window.AIDATA;
    const legend = Object.keys(A.ecosystem.edgeTypes).map(k => {
      const t = A.ecosystem.edgeTypes[k];
      return '<span class="legend-item"><span class="ln" style="border-color:' + t.color + (t.dash ? ";border-top-style:dashed" : "") + '"></span>' + t.label + "</span>";
    }).join("");
    const catLegend = Object.keys(A.categoryColor).map(k =>
      '<span><i style="background:' + A.categoryColor[k] + '"></i>' + esc(A.categories[k]) + "</span>"
    ).join("");
    const html =
      pageHead("03 · Ecosystem Map", "The relationships — how companies depend on, compete with and finance one another.", "US-AI-Top20-Investment-Profiles + US-AI-Industry-Research-DB (Aug 2026)") +
      sec("Interactive graph",
        '<div class="eco-split">' +
        '<div class="chart-box"><div class="chart-box__title">Research universe relationships</div><div class="chart-box__sub">Click a node → connections highlight · scroll = zoom · drag = pan · toggle “All 67 companies” above the canvas for the full universe</div><div id="ecoGraph"></div>' +
        '<div class="legend">' + catLegend + "</div><div class='legend'>" + legend + '<span class="legend-item"><span class="ln" style="border-color:var(--warn);border-top-style:dashed"></span>Competitor (derived from source)</span></div>' +
        '<div class="chart-box__src">Explicit edges source: US-AI-Top20-Investment-Profiles-Aug-2026.md — A. AI ecosystem map (ASCII map + relationship table). Competitor edges: US-AI-Industry-Research-DB-Aug-2026.md — competitors field.</div></div>' +
        '<div class="eco-detail" id="ecoDetail"></div>' +
        "</div>") +
      sec("How the Top 20 were selected",
        '<div class="callout"><p>' + esc(A.selectionMethod) + "</p></div>" +
        '<p class="pager-note">Source: US-AI-Top20-Investment-Profiles-Aug-2026.md — selection methodology</p>') +
      sec("Structural takeaways", '<div class="card"><div class="card__body"><ul>' + A.ecosystem.takeaways.map(t => "<li>" + esc(t) + "</li>").join("") + "</ul></div></div>", "4") +
      sec("Disappearance scenario — biggest disruption if one company vanished",
        '<div class="callout callout--danger"><h4>' + esc(A.disappearance.answer) + "</h4></div>" +
        A.disappearance.scenarios.map(s =>
          '<div class="card" style="margin-bottom:10px"><div class="card__title">' + esc(s.company) + "</div><div class='card__body'>" +
          "<p><b>What breaks:</b> " + esc(s.breaks) + "</p><p><b>Recovery:</b> " + esc(s.recovery) + "</p><p><b>Felt in:</b> " + esc(s.felt) + "</p></div></div>"
        ).join("") +
        '<div class="callout"><p>' + esc(A.disappearance.runners) + "</p><p><b>Analyst conclusion:</b> " + esc(A.disappearance.conclusion) + "</p></div>",
        null, "US-AI-Supply-Chain-Map-Aug-2026.md — Q4");
    main.innerHTML = html;
    drawEcoGraph();
    renderEcoDetail();
  }

  /* ---------- Ranking ---------- */
  let rankState = { key: "importance", dir: "desc" };
  let compareSel = [];
  let rankFilters = { segment: "all", type: "all" };
  const matchRankFilter = c =>
    (rankFilters.segment === "all" || c.segment === rankFilters.segment) &&
    (rankFilters.type === "all" || c.type === rankFilters.type);

  function renderRanking() {
    const A = window.AIDATA;
    const catBadgeSmall = c => '<span class="badge badge--cat-' + c + '">' + esc(c) + "</span>";
    const cols = [
      { key: "name", label: "Company", render: r => '<a href="#/companies/' + r.slug + '">' + esc(r.name) + "</a>" + (r.ticker ? ' <span style="color:var(--faint)">' + esc(r.ticker) + "</span>" : "") },
      { key: "importance", label: "AI Importance", cls: "center", render: r => '<span class="score-cell score-' + r.scores.importance + '">' + r.scores.importance + "</span>" },
      { key: "quality", label: "Business Quality", cls: "center", render: r => '<span class="score-cell score-' + r.scores.quality + '">' + r.scores.quality + "</span>" },
      { key: "growth", label: "AI Growth Exposure", cls: "center", render: r => '<span class="score-cell score-' + r.scores.growth + '">' + r.scores.growth + "</span>" },
      { key: "moat", label: "Moat Strength", cls: "center", render: r => '<span class="score-cell score-' + r.scores.moat + '">' + r.scores.moat + "</span>" },
      { key: "attractiveness", label: "Investment Attractiveness", cls: "center", render: r => '<span class="score-cell score-' + r.scores.attractiveness + '">' + r.scores.attractiveness + "</span>" },
      { key: "cat", label: "Category", render: r => catBadgeSmall(r.category) },
      { key: "sel", label: "Compare", cls: "center", sortable: false, render: r =>
        '<label class="cmp"><input type="checkbox" data-cmp="' + r.slug + '"' + (compareSel.includes(r.slug) ? " checked" : "") + "> select</label>" }
    ];
    const scoredList = DB.scored().filter(matchRankFilter);
    const selOpts = (cur, list) => [{ v: "all", l: "All" }].concat(list.map(s => ({ v: s, l: s })));
    const rfSel = (key, list) => '<select class="fsel" data-rf="' + key + '">' +
      selOpts(rankFilters[key], list).map(o => '<option value="' + o.v + '"' + (rankFilters[key] === o.v ? " selected" : "") + ">" + o.l + "</option>").join("") +
      "</select>";
    const html =
      pageHead("04 · Ranking Dashboard", "The comparison — which companies rank highly on explicit criteria, and why.", "US-AI-Top20-Investment-Profiles + US-AI-Industry-Ranking (Aug 2026)") +
      '<div class="filterbar">' +
        '<div class="filter-group"><label>AI Layer</label>' + rfSel("segment", DB.segments) + "</div>" +
        '<div class="filter-group"><label>Type</label>' + rfSel("type", DB.types) + "</div>" +
        '<div class="spacer"></div>' +
        '<button class="btn" id="exportRankBtn" title="Export the current filtered table as CSV">Export CSV</button>' +
        '<button class="btn" id="printRankBtn">Print</button>' +
      "</div>" +
      sec("How to read these scores",
        '<div class="guide">' +
        "<p>The Top-20 are scored <b>1–5 by analyst judgment</b> (August 2026) on five dimensions. Scores are analytical assessments relative to one another, not objective measurements — a high score on one dimension does not imply a high score on another.</p>" +
        "<ul>" +
        "<li><b>AI Importance</b> — how structurally necessary the company is to the AI ecosystem today.</li>" +
        "<li><b>Business Quality</b> — the durability of the company's economics, moat and pricing power.</li>" +
        "<li><b>AI Growth Exposure</b> — how much of the business benefits from AI demand growth.</li>" +
        "<li><b>Moat Strength</b> — how hard the company's advantage is to replicate.</li>" +
        "<li><b>Investment Attractiveness</b> — risk-adjusted return potential at the recorded valuation; the dimension most likely to diverge from importance.</li>" +
        "</ul>" +
        '<p><b>Technology importance ≠ business quality ≠ investment attractiveness.</b> A company can be irreplaceable and still be unattractive at its current price. The three-lens analysis on <a href="#/themes" style="color:var(--accent)">06 · Investment Themes</a> works through the divergences, and the classification disagreements below record where the calls were hardest.</p>' +
        "</div>") +
      sec("Top-20 score matrix", '<div id="scoreTable">' + UI.rankingTable(scoredList, cols, { sortKey: rankState.key, sortDir: rankState.dir }) + "</div>" +
        '<div class="pager-note">' + scoredList.length + " of 20 scored companies shown. Click any column header to sort. Tick “compare” on 2–4 companies for the comparison panel.</div>") +
      '<div id="compareZone"></div>' +
      sec("Tier classification — all 65 companies",
        window.AIDATA.tierDefs.map(t => {
          const tierRows = DB.byTier(t.tier).filter(matchRankFilter);
          return '<details class="tier-group"' + (t.tier === 1 ? " open" : "") + ">" +
            '<summary><span class="badge badge--tier' + t.tier + '">Tier ' + t.tier + "</span>" +
            '<span class="tier-group__name">' + esc(t.name) + "</span>" +
            '<span class="tier-group__count">' + tierRows.length + " companies</span></summary>" +
            '<div class="tier-group__body">' +
            '<div class="card__sub" style="margin-top:2px">' + esc(t.desc) + "</div>" +
            '<div class="filter-group" style="margin:8px 0"><label>Layer</label><select class="fsel" data-tierlayer="' + t.tier + '">' +
            '<option value="all">All layers</option><option value="1">Layer 1</option><option value="2">Layer 2</option><option value="3">Layer 3</option><option value="4">Layer 4</option></select></div>' +
            '<table class="rt"><thead><tr><th>Company</th><th>Position</th><th>Why this tier</th><th>Moat</th><th>Competitors</th><th>Main risks</th><th>Trajectory</th></tr></thead><tbody data-tierbody="' + t.tier + '">' +
            tierRows.map(c => '<tr data-layer="' + c.layer + '">' + tierRow(c) + "</tr>").join("") +
            "</tbody></table>" +
            "</div></details>";
        }).join("") +
        '<div class="pager-note">Tier definitions: Tier 1 = critical infrastructure/platform (essential bottlenecks or foundational layers) · Tier 2 = major AI winners · Tier 3 = emerging AI leaders. Source: US-AI-Industry-Ranking-Aug-2026.md.</div>') +
      sec("Top-10 lists",
        UI.researchCard("Top 10 — most strategically important US AI companies", null, "<ol>" + A.topStrategic.map(r => "<li><b>" + esc(r.company) + "</b> — " + esc(r.why) + "</li>").join("") + "</ol><p class='pager-note'>" + esc(A.topStrategicNote) + "</p>", "US-AI-Industry-Ranking-Aug-2026.md — Section A") +
        UI.researchCard("Top 10 — strongest AI investment potential", null, "<ol>" + A.topInvestment.map(r => "<li><b>" + esc(r.company) + "</b> — " + esc(r.thesis) + "</li>").join("") + "</ol><p class='pager-note'>" + esc(A.topInvestmentNote) + "</p>", "US-AI-Industry-Ranking-Aug-2026.md — Section B")) +
      sec("Classification disagreements — explained", UI.accordion(A.disagreements.map(d => ({
        title: d.company + " — " + d.call, body: "<p>" + esc(d.text) + "</p>"
      }))), "11");
    main.innerHTML = html;
    bindRanking();
    updateCompareZone();
    bindTierFilters();
  }

  function tierRow(c) {
    const t = window.AIDATA.tierMeta && window.AIDATA.tierMeta[c.slug];
    return [
      '<td><a href="#/companies/' + c.slug + '">' + esc(c.name) + "</a></td>",
      "<td>" + esc(c.chainPosition || c.primaryFunction) + "</td>",
      "<td>" + esc(t ? t.why : c.primaryFunction) + "</td>",
      "<td>" + esc(c.advantage) + "</td>",
      "<td>" + (c.competitors || []).map(x => esc(x)).join(", ") + "</td>",
      "<td>" + esc(t ? t.risks : "") + "</td>",
      "<td>" + UI.trajBadge(c.trajectory) + "</td>"
    ].join("");
  }

  /* ---------- Supply chain ---------- */
  let selectedLayer = null;

  function renderSupplyChain() {
    const A = window.AIDATA;
    const L = A.chainLayers;
    const html =
      pageHead("05 · Supply Chain", "The economics — where scarcity, pricing power and profits emerge across nine layers, from semiconductor equipment to applications.", "US-AI-Supply-Chain-Map + US-AI-Value-Capture-Analysis (Aug 2026)") +
      sec("At a glance",
        '<div class="glance">' +
        '<div class="glance-card"><span class="glance-card__label">The chain</span><p>Nine layers from <b>semiconductor equipment</b> to <b>applications</b> — click any layer below for its companies, bottlenecks and economics.</p><a href="#" data-jump="the-chain-click-a-layer">Explore the layers ↓</a></div>' +
        '<div class="glance-card"><span class="glance-card__label">Critical bottlenecks</span><p>' + A.bottlenecks.length + " ranked globally, led by <b>" + esc(A.bottlenecks[0].name) + "</b>.</p><a href=\"#\" data-jump=\"the-10-most-critical-ai-bottlenecks-globally\">See the full list ↓</a></div>" +
        '<div class="glance-card"><span class="glance-card__label">Strongest pricing power</span><p>' + A.pricingPower.length + " companies ranked, led by <b>" + esc(A.pricingPower[0].company) + "</b>.</p><a href=\"#\" data-jump=\"strongest-pricing-power\">See the rankings ↓</a></div>" +
        "</div>") +
      sec("The chain — click a layer", '<div class="chart-box"><div id="chainDiagram"></div><div class="chart-box__src">Source: US-AI-Supply-Chain-Map-Aug-2026.md — Layers 1–9</div></div>') +
      '<div id="layerDetail"></div>' +
      sec("Economic value capture — the funnel in one view",
        insightCallout +
        funnelBox +
        '<div class="chart-box"><div class="chart-box__title">"$1 of AI spending" waterfall <span class="badge badge--estimate">Stylised illustration</span></div><div class="chart-box__sub">' + esc(A.waterfallNote) + "</div><div id='wfChart'></div></div>" +
        '<div class="card"><div class="card__body"><table class="rt"><thead><tr><th>Where value accrues</th><th>Captured by</th><th>Mechanism</th></tr></thead><tbody>' +
        A.valueFunnel.map(f => "<tr><td><b>" + esc(f.pool) + "</b></td><td>" + esc(f.captured) + "</td><td>" + esc(f.mechanism) + "</td></tr>").join("") +
        "</tbody></table></div><div class='card__src'>" + esc(A.valueFunnelNote) + "</div></div>") +
      sec("The 10 most critical AI bottlenecks globally", '<div class="card"><div class="card__body"><table class="rt"><thead><tr><th>#</th><th>Bottleneck</th><th>Where</th><th>Why it binds</th></tr></thead><tbody>' +
        A.bottlenecks.map(b => "<tr><td class='num'>" + b.rank + "</td><td><b>" + esc(b.name) + "</b></td><td>" + esc(b.where) + "</td><td>" + esc(b.why) + "</td></tr>").join("") +
        "</tbody></table></div><div class='card__src'>Source: US-AI-Supply-Chain-Map-Aug-2026.md — Q1</div></div>") +
      sec("Strongest pricing power", '<div class="card"><div class="card__body"><table class="rt"><thead><tr><th>#</th><th>Company</th><th>Source of pricing power</th><th>Evidence</th></tr></thead><tbody>' +
        A.pricingPower.map(p => "<tr><td class='num'>" + p.rank + "</td><td><b>" + esc(p.company) + "</b></td><td>" + esc(p.source) + "</td><td>" + esc(p.evidence) + "</td></tr>").join("") +
        "</tbody></table></div><div class='card__src'>" + esc(A.pricingPowerNote) + "</div></div>");
    main.innerHTML = html;
    bindScrollLinks();
    VIZ.drawChainDiagram($("#chainDiagram"), L, layer => {
      selectedLayer = layer;
      renderLayerDetail(layer);
      const box = $("#layerDetail");
      box.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    VIZ.drawWaterfall($("#wfChart"), A.waterfall);
    VIZ.drawValueChain($("#chainFlow"), chainNodes);
    if (selectedLayer) renderLayerDetail(selectedLayer);
  }

  function renderLayerDetail(L) {
    const e = L.economics;
    const rows = [
      ["Expected AI-driven revenue growth", e.growth],
      ["Pricing power", e.pricing],
      ["Gross margin potential", e.gm],
      ["Competitive intensity", e.intensity],
      ["Commoditisation trend", e.commoditisation],
      ["Long-term winners", e.winners],
      ["Long-term losers", e.losers]
    ];
    $("#layerDetail").innerHTML =
      sec("Layer " + L.id + " — " + L.name, "") +
      '<div class="card" style="margin-bottom:12px"><div class="card__title">Layer economics</div><div class="card__body"><table class="rt"><tbody>' +
      rows.map(r => "<tr><td style='width:220px'><b>" + esc(r[0]) + "</b></td><td>" + esc(r[1]) + "</td></tr>").join("") +
      "</tbody></table></div><div class='card__src'>Source: US-AI-Value-Capture-Analysis-Aug-2026.md — Layer " + L.id + "</div></div>" +
      '<div class="grid grid-2">' + L.segments.map(s =>
        '<div class="card"><div class="card__title">' + esc(s.name) + "</div><div class='card__body'>" +
        "<table class='rt'><tbody>" +
        [["Key companies", s.companies], ["Market leaders (share)", s.leaders], ["Bottlenecks", s.bottlenecks], ["Switching costs", s.switching], ["Value capture", s.value]]
          .map(r => "<tr><td style='width:150px'><b>" + esc(r[0]) + "</b></td><td>" + esc(r[1]) + "</td></tr>").join("") +
        "</tbody></table></div></div>"
      ).join("") + "</div>" +
      '<div class="pager-note">Source: US-AI-Supply-Chain-Map-Aug-2026.md — Layer ' + L.id + "</div>";
  }

  /* ---------- Themes ---------- */
  function renderThemes() {
    const A = window.AIDATA;
    const rankCard = (title, arr, source, fields) => {
      const body = '<table class="rt"><thead><tr><th>#</th>' + fields.map(f => "<th>" + f.h + "</th>").join("") + "</tr></thead><tbody>" +
        arr.map(r => "<tr><td class='num'>" + r.rank + "</td>" + fields.map(f => "<td><b>" + esc(r[f.k]) + "</b>" + (r[f.s] ? "<br><span style='color:var(--muted);font-size:11.5px'>" + esc(r[f.s]) + "</span>" : "") + "</td>").join("") + "</tr>").join("") +
        "</tbody></table>";
      return UI.researchCard(title, null, body, source);
    };
    const index =
      '<div class="index-card"><div class="index-card__label">On this page</div><div class="index-card__grid">' +
      '<div class="index-card__group"><b>Competitive advantage</b>' +
      '<a class="index-card__link" href="#" data-jump="top-20-thematic-lists">Top-20 thematic lists</a>' +
      '<a class="index-card__link" href="#" data-jump="strongest-ai-moats-10">Strongest AI moats</a>' +
      '<a class="index-card__link" href="#" data-jump="pricing-power-10">Pricing power</a>' +
      "</div>" +
      '<div class="index-card__group"><b>Value distribution</b>' +
      '<a class="index-card__link" href="#" data-jump="value-captured-per-dollar-of-ai-spending-10">Value per $1 of AI spending</a>' +
      '<a class="index-card__link" href="#" data-jump="where-the-value-chain-will-commoditise">Commoditisation</a>' +
      "</div>" +
      '<div class="index-card__group"><b>Valuation lens</b>' +
      '<a class="index-card__link" href="#" data-jump="overestimated-vs-underestimated-value">Overestimated vs underestimated</a>' +
      '<a class="index-card__link" href="#" data-jump="three-lenses-technology-importance-business-quality-investment-attractiveness">Three lenses</a>' +
      "</div>" +
      '<div class="index-card__group"><b>Trends &amp; risks</b>' +
      '<a class="index-card__link" href="#" data-jump="major-structural-trends">Structural trends</a>' +
      '<a class="index-card__link" href="#" data-jump="watchlist-calendar">Watchlist / calendar</a>' +
      '<a class="index-card__link" href="#" data-jump="risk-register">Risk register</a>' +
      "</div>" +
      "</div></div>";
    const part = (t, sub) => '<div class="part"><div class="part__title">' + esc(t) + "</div>" + (sub ? '<p class="part__intro">' + esc(sub) + "</p>" : "") + "</div>";
    const html =
      pageHead("06 · Investment Themes", "The conclusions — what the evidence implies for investment analysis. Everything below is taken verbatim from the source files.", "US-AI-Value-Capture + US-AI-Top20 + US-AI-Industry-Map (Aug 2026)") +
      index +
      sec("Selection methodology", '<div class="callout"><p>' + esc(A.selectionMethod) + "</p></div>") +
      part("I · Competitive advantage", "Where the chain's durable economic rent sits — moats, pricing power and the thematic lists behind them.") +
      sec("Top-20 thematic lists", A.thematicLists.map(l =>
        UI.researchCard(l.title, null, UI.listHtml(l.items), "US-AI-Top20-Investment-Profiles-Aug-2026.md — Section C")
      ).join("")) +
      sec("Strongest AI moats (10)", rankCard("The 10 strongest AI-related economic moats", A.moats, "US-AI-Value-Capture-Analysis-Aug-2026.md — Q1", [{ k: "company", h: "Company" }, { k: "type", h: "Moat type" }, { k: "why", h: "Why it's a moat" }]) +
        '<p class="pager-note">' + esc(A.moatsNote) + "</p>") +
      sec("Pricing power (10)", rankCard("Companies with the strongest pricing power", A.pricingPower, "US-AI-Supply-Chain-Map-Aug-2026.md — Q2", [{ k: "company", h: "Company" }, { k: "source", h: "Source" }, { k: "evidence", h: "Evidence" }]) +
        '<p class="pager-note">' + esc(A.pricingPowerNote) + "</p>") +
      part("II · Value distribution", "How value spreads across each dollar of AI spending — and where the chain commoditises next.") +
      sec("Value captured per dollar of AI spending (10)", rankCard("Most value per $1 of AI spend", A.valuePerDollar, "US-AI-Value-Capture-Analysis-Aug-2026.md — Q3", [{ k: "company", h: "Company" }, { k: "basis", h: "Basis" }])) +
      sec("Where the value chain will commoditise",
        '<div class="grid grid-3">' +
        UI.researchCard("Commoditising now (fast)", null, UI.listHtml(A.commoditisation.now), "US-AI-Value-Capture-Analysis-Aug-2026.md — Q4") +
        UI.researchCard("Commoditising in 2–4 years", null, UI.listHtml(A.commoditisation.later), null) +
        UI.researchCard("Resists commoditisation", null, UI.listHtml(A.commoditisation.resists), null) +
        "</div><p class='pager-note'>" + esc(A.commoditisationNote) + "</p>") +
      part("III · Valuation lens", "Why structural importance and investment attractiveness diverge — and where the market may be wrong.") +
      sec("Overestimated vs underestimated value",
        '<div class="grid grid-2">' +
        UI.researchCard("Overestimated", null, "<ul>" + A.overUnder.over.map(o => "<li><b>" + esc(o.name) + "</b> — " + esc(o.why) + "</li>").join("") + "</ul>", "US-AI-Value-Capture-Analysis-Aug-2026.md — Q5") +
        UI.researchCard("Underestimated", null, "<ul>" + A.overUnder.under.map(o => "<li><b>" + esc(o.name) + "</b> — " + esc(o.why) + "</li>").join("") + "</ul>", null) +
        "</div>") +
      sec("Three lenses — technology importance · business quality · investment attractiveness",
        '<div class="card"><div class="card__body"><table class="rt"><thead><tr><th>Company</th><th>Technology importance</th><th>Business quality</th><th>Investment attractiveness</th><th>Why they diverge</th></tr></thead><tbody>' +
        A.threeLenses.map(r => "<tr><td><b>" + esc(r.company) + "</b></td><td>" + esc(r.tech) + "</td><td>" + esc(r.quality) + "</td><td>" + esc(r.attract) + "</td><td>" + esc(r.why) + "</td></tr>").join("") +
        "</tbody></table></div><div class='card__src'>Source: US-AI-Value-Capture-Analysis-Aug-2026.md — The three lenses, resolved</div></div>") +
      part("IV · Trends & risks", "What to monitor, what could break, and the research's risk register.") +
      sec("Major structural trends", A.trends.map((t, i) =>
        UI.researchCard("Trend " + (i + 1), null, "<p>" + esc(t) + "</p>", "US-AI-Industry-Map-Aug-2026.md — Cross-layer investment themes")
      ).join(""), "8") +
      sec("Watchlist / calendar", '<div class="card"><div class="card__body"><table class="rt"><thead><tr><th>Date</th><th>Item</th></tr></thead><tbody>' +
        A.watchlist.map(w => "<tr><td class='num'>" + esc(w.date) + "</td><td>" + esc(w.item) + "</td></tr>").join("") + "</tbody></table></div>" +
        '<div class="card__src">Source: US-AI-Industry-Map-Aug-2026.md — Watchlist / calendar</div></div>') +
      sec("Risk register", '<div class="card"><div class="card__body"><ul>' + A.riskRegister.map(r => "<li>" + esc(r) + "</li>").join("") + "</ul></div><div class='card__src'>Source: US-AI-Industry-Map-Aug-2026.md — Risk register</div></div>") +
      sec("Methodology & notes", methodologyCard);
    main.innerHTML = html;
    bindScrollLinks();
  }

  /* ---------- Binding ---------- */
  function bindPanels() {
    main.querySelectorAll(".section-panel__head").forEach(h => {
      h.addEventListener("click", () => h.closest(".section-panel").classList.toggle("closed"));
    });
  }
  function bindFilterBar() {
    main.querySelectorAll(".fsel").forEach(s => {
      s.addEventListener("change", () => {
        companyFilters[s.dataset.filter] = s.value;
        renderCompanies();
      });
    });
    const q = $("#companyQ");
    if (q) q.addEventListener("input", () => {
      companyFilters.q = q.value;
      const wrap = $("#companyTable");
      if (wrap) {
        wrap.innerHTML = UI.companyTable(sortCompanies(companyList()), companySort);
        bindCompanyTable();
      }
      const note = main.querySelector(".pager-note");
      if (note) note.textContent = companyList().length + " companies shown · click a header to sort · click a row to open the profile";
    });
    main.querySelectorAll(".accordion-item__head").forEach(h => h.addEventListener("click", () => h.parentElement.classList.toggle("open")));
  }
  function bindTierFilters() {
    main.querySelectorAll(".fsel[data-tierlayer]").forEach(s => {
      s.addEventListener("change", () => {
        const v = s.value;
        main.querySelectorAll('tbody[data-tierbody="' + s.dataset.tierlayer + '"] tr').forEach(tr => {
          tr.style.display = (v === "all" || tr.dataset.layer === v) ? "" : "none";
        });
      });
    });
  }
  function exportRankingCSV() {
    const dims = [["importance", "AI Importance"], ["quality", "Business Quality"], ["growth", "AI Growth Exposure"], ["moat", "Moat Strength"], ["attractiveness", "Investment Attractiveness"]];
    const rows = DB.scored().filter(matchRankFilter).slice().sort((a, b) => {
      const va = a.scores[rankState.key], vb = b.scores[rankState.key];
      const d = va - vb;
      return rankState.dir === "asc" ? d : -d;
    });
    const header = ["Company", "Ticker", "Category", "Segment", "Type"].concat(dims.map(d => d[1]));
    const data = rows.map(c => [c.name, c.ticker || "—", window.AIDATA.categories[c.category] || c.category, c.segment || "—", c.type || "—"].concat(dims.map(d => String(c.scores[d]))));
    UI.downloadCSV("ai-ranking-top20.csv", UI.toCSV(header, data));
  }

  function exportComparisonCSV(items) {
    const header = ["Field"].concat(items.map(c => c.name));
    const rows = [
      ["Ticker"].concat(items.map(c => c.ticker || "—")),
      ["Category"].concat(items.map(c => window.AIDATA.categories[c.category] || c.category)),
      ["Segment"].concat(items.map(c => c.segment || "—")),
      ["Type"].concat(items.map(c => c.type || "—")),
      ["AI Importance"].concat(items.map(c => String(c.scores.importance))),
      ["Business Quality"].concat(items.map(c => String(c.scores.quality))),
      ["AI Growth Exposure"].concat(items.map(c => String(c.scores.growth))),
      ["Moat Strength"].concat(items.map(c => String(c.scores.moat))),
      ["Investment Attractiveness"].concat(items.map(c => String(c.scores.attractiveness))),
      ["Competitive advantage"].concat(items.map(c => c.advantage || "—")),
      ["Bull thesis"].concat(items.map(c => (c.profile && c.profile.thesis.bull) || "—")),
      ["Bear thesis"].concat(items.map(c => (c.profile && c.profile.thesis.bear) || "—"))
    ];
    UI.downloadCSV("ai-comparison.csv", UI.toCSV(header, rows));
  }

  function bindRanking() {
    main.querySelectorAll(".fsel[data-rf]").forEach(s => {
      s.addEventListener("change", () => { rankFilters[s.dataset.rf] = s.value; renderRanking(); });
    });
    const expBtn = $("#exportRankBtn");
    if (expBtn) expBtn.addEventListener("click", exportRankingCSV);
    const prtBtn = $("#printRankBtn");
    if (prtBtn) prtBtn.addEventListener("click", () => window.print());
    main.querySelectorAll(".rt th.sortable").forEach(th => {
      th.addEventListener("click", () => {
        const k = th.dataset.key;
        if (rankState.key === k) rankState.dir = rankState.dir === "desc" ? "asc" : "desc";
        else { rankState.key = k; rankState.dir = "desc"; }
        renderRanking();
        scrolledTop();
      });
    });
    main.querySelectorAll('input[data-cmp]').forEach(cb => {
      cb.addEventListener("change", () => {
        const slug = cb.dataset.cmp;
        if (cb.checked) { if (!compareSel.includes(slug)) compareSel.push(slug); }
        else compareSel = compareSel.filter(s => s !== slug);
        if (compareSel.length > 4) { cb.checked = false; compareSel = compareSel.filter(s => s !== slug); }
        updateCompareZone();
      });
    });
    main.querySelectorAll(".accordion-item__head").forEach(h => h.addEventListener("click", () => h.parentElement.classList.toggle("open")));
  }
  function updateCompareZone() {
    const zone = $("#compareZone");
    if (!zone) return;
    if (compareSel.length < 2) { zone.innerHTML = ""; return; }
    const items = compareSel.map(s => DB.bySlug[s]).filter(Boolean);
    zone.innerHTML = UI.comparePanel(items);
    const btnRow = document.createElement("div");
    btnRow.style.marginTop = "10px";
    btnRow.innerHTML = '<button class="btn" id="exportCompareBtn">Export comparison → CSV</button>';
    zone.appendChild(btnRow);
    zone.querySelector("#exportCompareBtn").addEventListener("click", () => exportComparisonCSV(items));
    const radarBox = document.createElement("div");
    radarBox.className = "chart-box";
    radarBox.innerHTML = '<div class="chart-box__title">Score radar — 5 dimensions</div><div id="radarChart"></div>';
    zone.appendChild(radarBox);
    VIZ.drawRadar(radarBox.querySelector("#radarChart"), items.map(it => ({ name: it.name, scores: it.scores })), ["importance", "quality", "growth", "moat", "attractiveness"]);
  }

  /* ---------- Search ---------- */
  function bindSearch() {
    const input = $("#searchInput"), box = $("#searchResults");
    input.addEventListener("input", () => {
      const q = input.value;
      if (!q) { box.hidden = true; return; }
      const res = DB.search(q);
      let html = "";
      if (res.companies.length) {
        html += '<div class="search__group">Companies (' + res.companies.length + ")</div>";
        html += res.companies.map(c =>
          '<a class="search__row" href="#/companies/' + c.slug + '"><span class="s-tick">' + esc(c.ticker || "pvt") + "</span> " + esc(c.name) +
          '<span class="s-func"> — ' + esc(c.primaryFunction || "") + "</span></a>"
        ).join("");
      }
      if (res.themes.length) {
        html += '<div class="search__group">Themes</div>';
        html += res.themes.map(t =>
          '<a class="search__row" href="#/themes"><span class="s-tick">theme</span> ' + esc(t.title) + '<span class="s-func"> — ' + esc(t.text).slice(0, 90) + "…</span></a>"
        ).join("");
      }
      if (!html) html = '<div class="search__empty">No matches in companies or themes.</div>';
      box.innerHTML = html;
      box.hidden = false;
    });
    input.addEventListener("keydown", e => {
      if (e.key === "Escape") { box.hidden = true; input.blur(); }
    });
    document.addEventListener("click", e => {
      if (!e.target.closest("#searchBox")) box.hidden = true;
    });
    document.addEventListener("keydown", e => {
      if (e.key === "/" && !e.target.closest("input")) { e.preventDefault(); input.focus(); }
    });
  }

  /* ---------- Router ---------- */
  function route() {
    const hash = location.hash.replace(/^#\/?/, "");
    const parts = hash.split("/");
    const page = parts[0] || "home";
    const crumbs = $("#breadcrumbs");
    const setCrumb = items => {
      crumbs.innerHTML = items.map((it, i) => {
        const last = i === items.length - 1;
        return (last ? '<span class="crumb-current">' + esc(it.label) + "</span>" : '<a href="#/' + (it.route || "") + '">' + esc(it.label) + "</a> <span class='sep'>/</span>");
      }).join("");
    };
    document.querySelectorAll(".nav-item").forEach(a => a.classList.toggle("active", a.dataset.route === page));
    $("#sidebar").classList.remove("open");
    $("#sidebarBackdrop").classList.add("hidden");
    switch (page) {
      case "companies":
        if (parts[1]) { renderProfile(parts[1]); setCrumb([{ label: "Home", route: "home" }, { label: "Companies", route: "companies" }, { label: DB.bySlug[parts[1]] ? DB.bySlug[parts[1]].name : parts[1] }]); }
        else { renderCompanies(); setCrumb([{ label: "Home", route: "home" }, { label: "Company Profiles" }]); }
        break;
      case "ecosystem":
        /* deep link: #/ecosystem/<slug> selects the company */
        if (parts[1] && DB.bySlug[parts[1]]) ecoSel = parts[1];
        renderEcosystem(); setCrumb([{ label: "Home", route: "home" }, { label: "Ecosystem Map" }]); break;
      case "ranking": renderRanking(); setCrumb([{ label: "Home", route: "home" }, { label: "Ranking Dashboard" }]); break;
      case "supply-chain":
        /* deep link: #/supply-chain/l<id> opens the layer detail */
        if (parts[1]) {
          const id = parseInt(parts[1].replace(/\D/g, ""), 10);
          const L = window.AIDATA.chainLayers.find(l => l.id === id);
          if (L) selectedLayer = L;
        }
        renderSupplyChain(); setCrumb([{ label: "Home", route: "home" }, { label: "Supply Chain" }]);
        if (parts[1] && selectedLayer) setTimeout(() => { const el = $("#layerDetail"); if (el) el.scrollIntoView({ block: "start" }); }, 60);
        break;
      case "themes": renderThemes(); setCrumb([{ label: "Home", route: "home" }, { label: "Investment Themes" }]); break;
      default: renderHome(); setCrumb([{ label: "Executive Summary" }]);
    }
    scrolledTop();
  }

  /* ---------- Boot ---------- */
  function init() {
    DB.deriveMeta();
    DB.buildThemeIndex();
    bindSearch();
    window.addEventListener("hashchange", route);
    /* theme toggle — pitchbook (light) ⇄ terminal (dark); re-render so charts pick up the new tokens */
    const rootEl = document.documentElement;
    const themeBtn = $("#themeToggle");
    if (themeBtn) {
      const syncToggle = () => {
        const dark = rootEl.getAttribute("data-theme") === "dark";
        themeBtn.setAttribute("aria-checked", dark ? "true" : "false");
        themeBtn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
      };
      syncToggle();
      themeBtn.addEventListener("click", () => {
        const next = rootEl.getAttribute("data-theme") === "dark" ? "light" : "dark";
        rootEl.setAttribute("data-theme", next);
        try { localStorage.setItem("ai1-theme", next); } catch (e) { /* private mode */ }
        syncToggle();
        route();
      });
    }
    $("#printBtn").addEventListener("click", () => window.print());
    $("#menuBtn").addEventListener("click", () => {
      $("#sidebar").classList.toggle("open");
      $("#sidebarBackdrop").classList.toggle("hidden");
    });
    $("#sidebarBackdrop").addEventListener("click", () => {
      $("#sidebar").classList.remove("open");
      $("#sidebarBackdrop").classList.add("hidden");
    });
    route();
  }

  return { init };
})();

document.addEventListener("DOMContentLoaded", App.init);
