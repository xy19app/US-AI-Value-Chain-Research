/* ============================================================
   Components — cards, badges, profile, tables, comparison
   (presentation only; all data comes from AIDATA)
   ============================================================ */
"use strict";

const UI = (() => {
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- Badges ---------- */
  const tierBadge = t => t ? '<span class="badge badge--tier' + t + '">Tier ' + t + '</span>' : "";
  const catBadge = c => '<span class="badge badge--cat-' + c + '">' + esc(window.AIDATA.categories[c] || c) + "</span>";
  const expBadge = e => {
    const norm = (e || "").toLowerCase();
    const cls = norm.includes("low") && norm.includes("medium") ? "low" : norm.includes("high") && norm.includes("medium") ? "med" : norm;
    return '<span class="badge badge--exp-' + (cls || "low") + '">' + esc(e) + " exposure</span>";
  };
  const statusBadge = s => s === "Private" ? '<span class="badge badge--pvt">Private</span>' : '<span class="badge badge--pub">Public</span>';
  const trajBadge = t => {
    const map = { Increasing: ["up", "▲ Increasing"], Stable: ["flat", "— Stable"], Declining: ["down", "▼ Declining"] };
    const m = map[t] || ["flat", t || ""];
    return '<span class="badge badge--' + m[0] + '">' + m[1] + "</span>";
  };
  /* Volatile-field freshness badge: Estimate if the source marks the figure
     with ~ or a range; Snapshot otherwise. Static research — never live. */
  const volBadge = cap => {
    if (!cap || cap === "n/d") return '<span class="badge badge--pvt">n/d</span>';
    const isEst = /[~–—]/.test(cap);
    return '<span class="badge ' + (isEst ? "badge--exp-med" : "badge--exp-low") + '" title="As recorded at the snapshot date (2026-08-09); not live">🕒 ' + (isEst ? "Estimate" : "Snapshot") + "</span>";
  };
  const freshnessChip = '<span class="badge badge--pvt" title="Static research snapshot; updated periodically through the research process, not live">🕒 Data as of: 2026-08-09</span>';

  const scoreDots = (n, total) => {
    let s = "";
    for (let i = 1; i <= (total || 5); i++) s += "<i class='" + (i <= n ? "on" : "") + "'></i>";
    return '<span class="score-dots">' + s + "</span>";
  };

  /* ---------- Company database table ---------- */
  const LAYER_LABEL = { 1: "1 · Infrastructure", 2: "2 · Platform", 3: "3 · AI Cloud", 4: "4 · Applications" };

  const companyTable = (rows, sort) => {
    const th = (key, label, cls) =>
      '<th class="sortable' + (cls ? " " + cls : "") + '" data-key="' + key + '">' + label +
      (sort && sort.key === key ? '<span class="sort-arrow">' + (sort.dir === "asc" ? "▲" : "▼") + "</span>" : "") + "</th>";
    const tierCell = c => c.tier ? tierBadge(c.tier) : '<span class="ct-na">unranked</span>';
    const attCell = c => c.scores
      ? '<span class="score-cell score-' + c.scores.attractiveness + '">' + c.scores.attractiveness + "</span> /5"
      : '<span class="ct-na">—</span>';
    return (
      '<div class="table-wrap"><table class="rt ct">' +
      "<thead><tr>" +
      th("name", "Company") +
      th("layer", "Chain layer") +
      th("tier", "Tier") +
      th("attractiveness", "Attract.", "center") +
      th("status", "Status", "hide-sm") +
      th("exposure", "AI exposure", "hide-sm") +
      th("mcap", "Market cap", "hide-sm") +
      th("segment", "AI layer", "hide-sm") +
      th("type", "Type", "hide-sm") +
      "</tr></thead><tbody>" +
      rows.map(c =>
        '<tr class="company-row" data-slug="' + esc(c.slug) + '">' +
        '<td class="ct-name"><a href="#/companies/' + esc(c.slug) + '">' + esc(c.name) + "</a>" +
        (c.ticker ? ' <span class="ct-ticker">' + esc(c.ticker) + "</span>" : "") + "</td>" +
        "<td>" + (LAYER_LABEL[c.layer] ? esc(LAYER_LABEL[c.layer]) : '<span class="ct-na">—</span>') + "</td>" +
        "<td>" + tierCell(c) + "</td>" +
        '<td class="center">' + attCell(c) + "</td>" +
        '<td class="hide-sm">' + statusBadge(c.status) + "</td>" +
        '<td class="hide-sm">' + expBadge(c.aiExposure.level) + "</td>" +
        '<td class="num hide-sm">' + esc(c.marketCap || "—") + "</td>" +
        '<td class="hide-sm">' + esc(c.segment || "—") + "</td>" +
        '<td class="hide-sm">' + esc(c.type || "—") + "</td>" +
        "</tr>"
      ).join("") +
      "</tbody></table></div>"
    );
  };

  /* ---------- Profile cross-links — contextual, preserve the reader's path ---------- */
  const profileNav = c => {
    const A = window.AIDATA;
    const inEco = (A.ecosystem.nodes || []).some(n => n.id === c.slug);
    let chainLayerId = null;
    (A.chainLayers || []).forEach(L => {
      if (!chainLayerId && L.segments.some(s => s.companies.toLowerCase().includes(c.name.toLowerCase()))) chainLayerId = L.id;
    });
    return '<div class="profile-links"><span class="profile-links__label">Related analysis</span>' +
      (inEco
        ? '<a class="chip" href="#/ecosystem/' + esc(c.slug) + '">03 · Ecosystem — dependencies &amp; competitors</a>'
        : '<a class="chip" href="#/ecosystem">03 · Ecosystem Map</a>') +
      '<a class="chip" href="#/ranking">04 · Ranking — scores &amp; tier</a>' +
      (chainLayerId
        ? '<a class="chip" href="#/supply-chain/l' + chainLayerId + '">05 · Supply Chain — Layer ' + chainLayerId + "</a>"
        : '<a class="chip" href="#/supply-chain">05 · Supply Chain</a>') +
      "</div>";
  };

  /* ---------- Profile view (full 10-section for Top-20; summary for rest) ---------- */
  const fieldRow = (label, value) => '<div class="field-row"><div class="field-row__label">' + label + '</div><div class="field-row__value">' + value + "</div></div>";

  /* Objective/subjective labelling (Phase 6.5):
     FACT = what we know · DATA = figures as recorded · ESTIMATE = analyst estimate
     VIEW = interpretation/judgement · RISK = risk assessment */
  const labelChip = l => {
    const map = { FACT: "fact", DATA: "data", ESTIMATE: "estimate", VIEW: "view", RISK: "risk" };
    return '<span class="badge badge--lbl badge--' + (map[l] || "view") + '">[' + l + "]</span>";
  };

  const panel = (title, body, open, label) =>
    '<section class="section-panel' + (open ? "" : " closed") + '" data-label="' + (label || "") + '"><div class="section-panel__head"><span>' + title + "</span>" + (label ? labelChip(label) : "") + '<span class="chev">▼</span></div><div class="section-panel__body">' + body + "</div></section>";

  /* ---- Phase 6 enhancements: moat category + layer cross-references ---- */
  const moatCategory = c => {
    const src = c.profile
      ? [c.profile.moat.technology, c.profile.moat.ecosystem, c.profile.moat.data, c.profile.moat.distribution, c.profile.moat.switchingCosts].join(" ")
      : (c.advantage || "");
    const s = src.toLowerCase();
    if (/contract|backlog|design-in|qualification|lock-in|binding|exclusiv/.test(s)) return "Switching costs / contracts";
    if (/cuda|software|gateway|workflow|governance|ontology|code|research|efficiency|platform/.test(s)) return "Software ecosystem";
    if (/data|dataset/.test(s)) return "Data advantage";
    if (/distribution|channel|installed base|reach|devices|rollout/.test(s)) return "Distribution advantage";
    if (/manufactur|fab|process|etch|packag|wafer|foundry|hbm|silicon|capacity/.test(s)) return "Hardware / manufacturing advantage";
    return "Hardware advantage";
  };

  const crossRefs = c => {
    const refs = ["Company database (Layer " + c.layer + ")"];
    /* supply-chain membership: substring match on the layer segment company lists */
    (window.AIDATA.chainLayers || []).forEach(L => {
      const hit = L.segments.some(s => s.companies.toLowerCase().includes(c.name.toLowerCase()));
      if (hit) refs.push("Supply chain — Layer " + L.id);
    });
    if (c.tier) refs.push("Tier " + c.tier + " ranking");
    if (c.profile) refs.push("Investment profile (Top-20)");
    if ((window.AIDATA.ecosystem.nodes || []).some(n => n.id === c.slug)) refs.push("Ecosystem graph");
    return refs;
  };

  const trendHtml = c => {
    const t = window.AIDATA.revenueTrend && window.AIDATA.revenueTrend[c.slug];
    if (!t) return '<span style="color:var(--faint)">n/a — no trend data in source</span>';
    const col = t.trend === "↑" ? "var(--pos)" : t.trend === "↓" ? "var(--neg)" : "var(--muted)";
    return '<span style="font-size:15px;font-weight:700;color:' + col + '">' + t.trend + "</span> " +
      '<span style="color:var(--text-2)">' + esc(t.evidence) + "</span>";
  };

  const geoHtml = c => {
    const g = window.AIDATA.geoExposure && window.AIDATA.geoExposure[c.slug];
    if (!g) return '<span style="color:var(--faint)">n/d — not discussed in source</span>';
    const cls = g.label === "High" ? "high" : g.label === "Medium" ? "med" : "low";
    return expBadge(g.label) + " <span style='color:var(--text-2)'>" + esc(g.note) + "</span>";
  };

  const enhancementsPanel = c =>
    fieldRow("Revenue trend (2024 → 2025 → 2026)", trendHtml(c)) +
    fieldRow("Geographic exposure (China)", geoHtml(c)) +
    fieldRow("Moat category", esc(moatCategory(c)) + ' <span style="color:var(--faint);font-size:11px">[derived from the source moat analysis]</span>') +
    fieldRow("Layer cross-references", crossRefs(c).map(r => '<span class="chip">' + esc(r) + "</span>").join(" "));

  const listHtml = arr => "<ul>" + arr.map(i => "<li>" + esc(i) + "</li>").join("") + "</ul>";

  const profileView = (c, mode) => {
    mode = mode || "all";
    const p = c.profile;
    if (!p) {
      // Summary profile — only fields present in the source DB/Ranking
      return (
        '<div class="page-head"><div class="profile-head">' +
          '<h1 class="profile-head__name">' + esc(c.name) + "</h1>" +
          (c.ticker ? '<span class="profile-head__ticker">' + esc(c.ticker) + "</span>" : "") +
          '<div style="margin-left:auto">' + tierBadge(c.tier) + catBadge(c.category) + "</div>" +
        "</div>" +
        '<div class="page-sub">Full deep-dive profile available for the Top-20 selection only. This company appears in the research universe with the fields below (as recorded in the source files).</div>' +
        '<div class="page-source">Source: US-AI-Industry-Research-DB / US-AI-Industry-Ranking (Aug 2026)</div></div>' +
        profileNav(c) +
        panel("Company overview & AI role",
          fieldRow("Primary AI function", esc(c.primaryFunction || "—")) +
          fieldRow("Value chain position", esc(c.chainPosition || "—")) +
          fieldRow("Headquarters", esc(c.hq || "—")) +
          fieldRow("Founded", c.founded || "n/s") +
          fieldRow("Status", esc(c.status)) +
          fieldRow("Market capitalisation", esc(c.marketCap || "—") + " " + volBadge(c.marketCap)) +
          fieldRow("AI revenue exposure", expBadge(c.aiExposure.level) + "<br>" + esc(c.aiExposure.note || "")) +
          fieldRow("Competitive advantage", esc(c.advantage || "—")) +
          fieldRow("Strategic trajectory", trajBadge(c.trajectory)), true, "FACT") +
        panel("Multi-role breakdown", c.multiRole
          ? fieldRow("Distinct AI roles", listHtml(c.multiRole.roles)) + fieldRow("Primary role", esc(c.multiRole.primary))
          : "<div>No multi-role breakdown recorded for this company in the source files.</div>", true, "FACT") +
        panel("Main competitors", c.competitors && c.competitors.length ? listHtml(c.competitors) : "—", true, "FACT") +
        panel("Research enhancements", enhancementsPanel(c), true, "DATA")
      );
    }
    /* Full profile — labelled sections; mode filters objective vs subjective */
    const hasEst = (p.revenueExposure.current + " " + p.revenueExposure.future).indexOf("est.") !== -1;
    const sections = [
      { label: "FACT", title: "1 · Company overview", body: "<p>" + esc(p.overview) + "</p>", open: true },
      { label: "VIEW", title: "2 · AI strategic role", body: "<p>" + esc(p.aiRole) + "</p>", open: true },
      { label: "FACT", title: "3 · Value chain position", body: "<p>" + esc(p.chainPosition) + "</p>", open: true },
      { label: hasEst ? "ESTIMATE" : "DATA", title: "4 · AI revenue exposure", body: fieldRow("Current", esc(p.revenueExposure.current)) + fieldRow("Expected future", esc(p.revenueExposure.future)), open: true },
      { label: "VIEW", title: "5 · Moat analysis", body:
        fieldRow("Technology moat", esc(p.moat.technology)) +
        fieldRow("Ecosystem moat", esc(p.moat.ecosystem)) +
        fieldRow("Data advantage", esc(p.moat.data)) +
        fieldRow("Distribution advantage", esc(p.moat.distribution)) +
        fieldRow("Switching costs", esc(p.moat.switchingCosts)), open: true },
      { label: "VIEW", title: "6 · Growth drivers", body: listHtml(p.growthDrivers), open: true },
      { label: "RISK", title: "7 · Key risks", body:
        fieldRow("Competition", esc(p.risks.competition)) +
        fieldRow("Commoditisation risk", esc(p.risks.commoditisation)) +
        fieldRow("Regulation", esc(p.risks.regulation)) +
        fieldRow("Supply chain", esc(p.risks.supplyChain)) +
        fieldRow("Valuation risk", esc(p.risks.valuation)), open: true },
      { label: "VIEW", title: "8 · Monitoring indicators", body: listHtml(p.monitor), open: true },
      { label: "VIEW", title: "9 · Investment thesis", body:
        '<div class="bull-bear"><div class="bull"><h4>BULL CASE</h4><p>' + esc(p.thesis.bull) + "</p></div>" +
        '<div class="bear"><h4>BEAR CASE</h4><p>' + esc(p.thesis.bear) + "</p></div></div>", open: true },
      { label: "FACT", title: "10 · Main competitors", body: c.competitors && c.competitors.length ? listHtml(c.competitors) : "—", open: true },
      { label: "DATA", title: "11 · Research enhancements", body: enhancementsPanel(c), open: true }
    ];
    const show = s => mode === "all" ||
      (mode === "research" ? s.label === "FACT" || s.label === "DATA" || s.label === "ESTIMATE" : s.label === "VIEW" || s.label === "RISK");
    return (
      '<div class="page-head"><div class="profile-head">' +
        '<h1 class="profile-head__name">' + esc(c.name) + "</h1>" +
        (c.ticker ? '<span class="profile-head__ticker">' + esc(c.ticker) + "</span>" : "") +
        '<div style="margin-left:auto">' + freshnessChip + tierBadge(c.tier) + catBadge(c.category) + "</div>" +
      "</div>" +
      '<div class="profile-meta-line"><b>' + esc(c.hq || "—") + "</b> · " + (c.founded ? "founded " + c.founded : "founded n/s") + " · " + esc(c.status) + (c.marketCap ? " · " + esc(c.marketCap) + " " + volBadge(c.marketCap) : "") + "</div>" +
      '<div class="page-source">Source: US-AI-Top20-Investment-Profiles-Aug-2026.md — Category "' + esc(window.AIDATA.categories[c.category]) + '"</div></div>' +

      profileNav(c) +

      '<div class="mode-toggle">' +
        '<span class="mode-toggle__label">View:</span>' +
        '<button class="btn' + (mode === "all" ? " active" : "") + '" data-mode="all">All</button>' +
        '<button class="btn' + (mode === "research" ? " active" : "") + '" data-mode="research" title="Facts, data and estimates">Research</button>' +
        '<button class="btn' + (mode === "investor" ? " active" : "") + '" data-mode="investor" title="Thesis, risks and judgement">Investor</button>' +
        '<span class="mode-toggle__hint">Research = what we know · Investor = what we believe</span>' +
      "</div>" +

      sections.filter(show).map(s => panel(s.title, s.body, s.open !== false, s.label)).join("")
    );
  };

  /* ---------- Research card ---------- */
  const researchCard = (title, sub, body, source) =>
    '<div class="card"><div class="card__title">' + esc(title) + "</div>" +
    (sub ? '<div class="card__sub">' + esc(sub) + "</div>" : "") +
    '<div class="card__body">' + body + "</div>" +
    (source ? '<div class="card__src">Source: ' + esc(source) + "</div>" : "") +
    "</div>";

  /* ---------- Sortable ranking table ---------- */
  const rankingTable = (rows, cols, opts) => {
    /* cols: [{key,label,type:'score'|'text'|'badge',render}] */
    const sortKey = (opts && opts.sortKey) || cols[0].key;
    const sortDir = (opts && opts.sortDir) || "desc";
    const sorted = rows.slice().sort((a, b) => {
      const va = a[sortKey], vb = b[sortKey];
      const d = typeof va === "number" && typeof vb === "number" ? va - vb : String(va).localeCompare(String(vb));
      return sortDir === "asc" ? d : -d;
    });
    return (
      '<div class="table-wrap"><table class="rt" data-sortkey="' + sortKey + '" data-sortdir="' + sortDir + '">' +
      "<thead><tr>" + cols.map(c =>
        '<th class="' + (c.sortable === false ? "" : "sortable") + '" data-key="' + c.key + '">' + c.label +
        (c.key === sortKey ? '<span class="sort-arrow">' + (sortDir === "desc" ? "▼" : "▲") + "</span>" : "") + "</th>"
      ).join("") + "</tr></thead><tbody>" +
      sorted.map(r => "<tr>" + cols.map(c => "<td" + (c.cls ? ' class="' + c.cls + '"' : "") + ">" + c.render(r) + "</td>").join("") + "</tr>").join("") +
      "</tbody></table></div>"
    );
  };

  /* ---------- Comparison panel ---------- */
  const comparePanel = items => {
    const dims = ["importance", "quality", "growth", "moat", "attractiveness"];
    const dimLabels = { importance: "AI Importance", quality: "Business Quality", growth: "AI Growth Exposure", moat: "Moat Strength", attractiveness: "Investment Attractiveness" };
    const rows = dims.map(d =>
      '<div class="cg-head">' + dimLabels[d] + "</div>" +
      items.map(it => '<div class="cg-cell center"><span class="score-cell score-' + it.scores[d] + '">' + it.scores[d] + "</span>/5</div>").join("")
    ).join("");
    const head = '<div class="cg-head">Company</div>' + items.map(it => '<div class="cg-cell cg-company"><a href="#/companies/' + it.slug + '">' + esc(it.name) + "</a></div>").join("");
    const moat = '<div class="cg-head">Moat (key)</div>' + items.map(it => '<div class="cg-cell">' + esc(it.advantage || "") + "</div>").join("");
    const risk = '<div class="cg-head">Top risk</div>' + items.map(it => '<div class="cg-cell">' + esc(it.profile ? it.profile.risks.competition : it.primaryFunction) + "</div>").join("");
    const thesis = '<div class="cg-head">Thesis (bull)</div>' + items.map(it => '<div class="cg-cell">' + esc(it.profile ? it.profile.thesis.bull : (it.advantage || "")) + "</div>").join("");
    return (
      '<div class="compare-panel"><div class="section-title">Comparison — ' + items.length + " companies</div>" +
      '<div class="compare-grid">' + head + rows + moat + risk + thesis + "</div></div>"
    );
  };

  /* ---------- CSV export (offline; Blob download works from file://) ---------- */
  const csvCell = v => {
    v = String(v == null ? "" : v);
    return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v;
  };
  const toCSV = (header, rows) =>
    "﻿" + [header.map(csvCell).join(",")].concat(rows.map(r => r.map(csvCell).join(","))).join("\n");
  const downloadCSV = (filename, csv) => {
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  };

  /* ---------- Accordion ---------- */
  const accordion = items => items.map(it =>
    '<div class="accordion-item"><div class="accordion-item__head"><span class="chev">▶</span><span>' + esc(it.title) + '</span></div><div class="accordion-item__body">' + it.body + "</div></div>"
  ).join("");

  return { esc, tierBadge, catBadge, expBadge, statusBadge, trajBadge, scoreDots, volBadge, freshnessChip, companyTable, profileView, researchCard, rankingTable, comparePanel, accordion, panel, fieldRow, listHtml, toCSV, downloadCSV };
})();
window.UI = UI;
