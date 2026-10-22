/* ============================================================
   Data registry — lookups over AIDATA (no content of its own)
   ============================================================ */
"use strict";

const DB = {
  companies: window.AIDATA.companies,
  bySlug: window.AIDATA.bySlug,

  /* ---- Filtering ---- */
  byCategory(cat) {
    return this.companies.filter(c => c.category === cat);
  },
  byLayer(layer) {
    return this.companies.filter(c => c.layer === layer);
  },
  byTier(tier) {
    return this.companies.filter(c => c.tier === tier);
  },
  byStatus(status) {
    return this.companies.filter(c => c.status === status);
  },
  byExposure(level) {
    return this.companies.filter(c => c.aiExposure && c.aiExposure.level === level);
  },
  withProfiles() {
    return this.companies.filter(c => c.profile);
  },
  scored() {
    return this.companies.filter(c => c.scores);
  },

  /* ---- Search across companies + themes ---- */
  search(q) {
    q = q.toLowerCase().trim();
    if (!q) return { companies: [], themes: [] };
    const companies = this.companies.filter(c => {
      const hay = [
        c.name, c.ticker || "", c.primaryFunction || "", c.chainPosition || "",
        c.advantage || "", (c.category || ""), (c.trajectory || ""),
        (c.profile && c.profile.overview) || "",
        (c.competitors || []).join(" ")
      ].join(" ").toLowerCase();
      return hay.includes(q);
    });
    const themes = [];
    const themeIndex = window.AIDATA.themesIndex || [];
    themeIndex.forEach(t => {
      if (t.title.toLowerCase().includes(q) || t.text.toLowerCase().includes(q)) themes.push(t);
    });
    return { companies: companies.slice(0, 12), themes: themes.slice(0, 6) };
  },

  /* ---- Theme index (for search) ---- */
  buildThemeIndex() {
    const idx = [];
    const push = (title, text) => idx.push({ title, text, type: "theme" });
    (window.AIDATA.trends || []).forEach(t => push("Structural trend", t));
    (window.AIDATA.bottomLine || []).forEach(t => push("Key conclusion", t));
    (window.AIDATA.moats || []).forEach(m => push("Moat — " + m.company, m.why));
    (window.AIDATA.pricingPower || []).forEach(p => push("Pricing power — " + p.company, p.source + " — " + p.evidence));
    (window.AIDATA.bottlenecks || []).forEach(b => push("Bottleneck — " + b.name, b.why));
    (window.AIDATA.riskRegister || []).forEach(r => push("Risk", r));
    (window.AIDATA.thematicLists || []).forEach(l => l.items.forEach(i => push(l.title, i)));
    window.AIDATA.themesIndex = idx;
    return idx;
  },

  /* ============================================================
     Derived fields (Phase 3) — reorganisation of existing
     classification, not new facts. Computed once at boot.
     ============================================================ */

  /* AI Layer segment (7 values): Infrastructure · Compute · Memory ·
     Networking · Cloud · Models · Applications */
  segmentFor(c) {
    const s = (c.chainPosition || "") + " " + (c.primaryFunction || "");
    if (/Memory/.test(s)) return "Memory";
    if (/Networking|Interconnect|Optical/.test(s)) return "Networking";
    if (/Regulated enterprise/.test(s)) return "Applications";   // IBM
    if (/AI Cloud|Hyperscaler/.test(s)) return "Cloud";
    if (/Frontier lab|Open-model|Model hub|Open-source models|Data infrastructure/.test(s)) return "Models";
    if (/Apps/.test(s)) return "Applications";
    if (/Silicon/.test(s)) return "Compute";
    if (/Foundry|Equipment|Power|Data centers|Systems/.test(s)) return "Infrastructure";
    return "Compute";
  },

  /* Company type (5 values): Semiconductor · Cloud · Data Center ·
     Software · AI Lab */
  typeFor(c) {
    const s = (c.chainPosition || "") + " " + (c.primaryFunction || "");
    if (/Regulated enterprise/.test(s)) return "Software"; // IBM — enterprise platform
    if (/AI Cloud|Hyperscaler/.test(s)) return "Cloud";
    if (/Silicon|Foundry|Equipment|Optical|Networking|Interconnect|Memory|Compute/.test(s)) return "Semiconductor";
    if (/Power|Data centers|Systems/.test(s)) return "Data Center";
    if (/Frontier lab|Open-model|Model hub|Open-source|Data infrastructure/.test(s)) return "AI Lab";
    return "Software";
  },

  deriveMeta() {
    this.companies.forEach(c => {
      c.segment = this.segmentFor(c);
      c.type = this.typeFor(c);
    });
    /* name/ticker → slug index (used by ecosystem competitor edges) */
    this.nameIndex = {};
    this.companies.forEach(c => {
      this.nameIndex[c.name.toLowerCase()] = c.slug;
      if (c.ticker) this.nameIndex[c.ticker.toLowerCase()] = c.slug;
    });
    this.segments = ["Infrastructure", "Compute", "Memory", "Networking", "Cloud", "Models", "Applications"];
    this.types = ["Semiconductor", "Cloud", "Data Center", "Software", "AI Lab"];
    return true;
  },

  slugByName(name) {
    if (!name) return null;
    return this.nameIndex[name.toLowerCase()] || null;
  }
};

/* ---- Explicit global (browser classic scripts share top-level const,
       but exposing on window keeps this robust to module bundling) ---- */
window.DB = DB;
