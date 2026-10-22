/* ============================================================
   Research enhancements (Phase 6)
   Revenue trends + geographic (China) exposure.
   ONLY entries with explicit source data are included — every
   trend/level is quoted from the research files. Companies not
   listed here display "n/a — not stated in source".
   Sources: the six Markdown research files (August 2026).
   ============================================================ */
window.AIDATA = window.AIDATA || {};

window.AIDATA.revenueTrend = {
  /* trend: ↑ growing / → flat / ↓ declining — derived strictly from
     the quoted evidence below (source statements only). */
  nvidia: { trend: "↑", evidence: "AI data centre = 'overwhelming majority of revenue and growth'; ~400K GB300 pre-orders (source statement, no YoY figure)" },
  amd: { trend: "↑", evidence: "Q2 2026 revenue $11.54B (+50% YoY)" },
  broadcom: { trend: "↑", evidence: "AI revenue $10.8B/quarter (+143% YoY); ~$56B FY26 guide" },
  micron: { trend: "↑", evidence: "FQ3 2026 revenue +346% YoY at 84.6% GM" },
  cerebras: { trend: "↑", evidence: "2025 revenue $510M (+76%)" },
  arista: { trend: "↑", evidence: "FY26 guide raised 3x to ~$12.6B (+40% YoY); Q2 2026 +37.7%" },
  cisco: { trend: "↑", evidence: "Q3 FY26 revenue $15.8B (+12% YoY); FY26 guide $62.8–63.0B (+~11%)" },
  "astera-labs": { trend: "↑", evidence: "Q2 2026 revenue $392.4M (+104% YoY)" },
  credo: { trend: "↑", evidence: "FY2026 revenue $1.335B (+206% YoY)" },
  coherent: { trend: "↑", evidence: "Q3 FY26 revenue $1.8–1.81B (+21% YoY); DC & Comms +41%" },
  "applied-materials": { trend: "↑", evidence: "AI chip revenue +40% YoY; ~40% of revenue AI-related" },
  "lam-research": { trend: "↑", evidence: "FY2026 record revenue $23.23B (+26%); Q4 +30% YoY" },
  kla: { trend: "↑", evidence: "Q4 FY26 revenue $3.66B (+15.2% YoY)" },
  supermicro: { trend: "↑", evidence: "Q2 FY26 revenue $12.68B (+123% YoY)" },
  dell: { trend: "↑", evidence: "AI server revenue $16.1B (+757% YoY); FY27 guide raised to $165–169B from FY26 $113.5B" },
  vertiv: { trend: "↑", evidence: "FY25 revenue $10.23B (+27.7%); FY26 guide ~$14B" },
  eaton: { trend: "↑", evidence: "Q2 revenue $8.53B (+21%); DC orders +85% YoY" },
  equinix: { trend: "↑", evidence: "Q1 2026 revenue $2.44B (+10%)" },
  "digital-realty": { trend: "↑", evidence: "16% sales growth; $1.8B backlog" },
  openai: { trend: "↑", evidence: "~$25B annualized run-rate (mid-2026) [est.] — no YoY figure stated" },
  alphabet: { trend: "↑", evidence: "Google Cloud Q2 2026 $24.8B (+82% YoY)" },
  xai: { trend: "↑", evidence: "~$26B+ run-rate via compute rentals + subscriptions [est.] — no YoY figure stated" },
  "together-ai": { trend: "↑", evidence: "Bookings ~$30M (early 2024) → $1.15B annualized" },
  "fireworks-ai": { trend: "↑", evidence: "Crossed $1B annualized revenue (5x YoY)" },
  microsoft: { trend: "↑", evidence: "Azure +43% YoY; Azure crossed $100B annual revenue" },
  amazon: { trend: "↑", evidence: "AWS Q2 2026 $42.2B (+37% YoY, fastest in 18 quarters)" },
  oracle: { trend: "↑", evidence: "Total revenue +21% ($19.2B); OCI +93% YoY" },
  ibm: { trend: "→", evidence: "Q2 2026 revenue +2% ($15.8B); software +7%, consulting guide cut" },
  coreweave: { trend: "↑", evidence: "Q1 2026 backlog $99.4B vs ~$2.55B expected Q2 revenue [est. growth from backlog]" },
  nebius: { trend: "↑", evidence: "Q1 2026 AI Cloud revenue $390M (+841% YoY)" },
  lambda: { trend: "↑", evidence: "Q3 2025 sales +80% YoY; ~$1B cloud revenue target 2026" },
  crusoe: { trend: "↑", evidence: "Revenue guided ~$500M (2025E) → ~$2B (2026E)" },
  baseten: { trend: "↑", evidence: "~$600M annualized revenue (~20x YoY, Q1 2026)" },
  modal: { trend: "↑", evidence: "~$300M annualized (from ~$60M in Sep 2025)" },
  salesforce: { trend: "↑", evidence: "FY26 revenue $41.5B; FY27 guide raised to $45.9–46.2B" },
  servicenow: { trend: "↑", evidence: "Q2 2026 revenue $3.99B (+24%); FY26 sub guide raised to $15.76–15.78B" },
  adobe: { trend: "↑", evidence: "Q2 FY26 revenue $6.62B (+13%); ARR growth decelerating" },
  palantir: { trend: "↑", evidence: "Q2 2026 revenue $1.94B (+93%, fastest ever); FY26 guide $8.15B (+82%)" },
  snowflake: { trend: "↑", evidence: "Q1 FY27 product revenue $1.33B (+34%); FY27 product guide raised to $5.84B" },
  databricks: { trend: "↑", evidence: "Total ARR $5.4B+ (+65% YoY)" },
  cursor: { trend: "↑", evidence: "ARR ~$100M (Jan 2025) → ~$1B (Nov 2025) → ~$2B (Feb 2026) → $2.6–4B+ (June 2026)" },
  cognition: { trend: "↑", evidence: "ARR $37M (May 2025) → $492M (May 2026, ~13x)" },
  replit: { trend: "↑", evidence: "ARR ~$2.8M → ~$150M in under a year" },
  perplexity: { trend: "↑", evidence: "Annualized revenue $100M (Mar 2025) → $200M (Sep 2025) → $450M+ (Mar 2026)" },
  elevenlabs: { trend: "↑", evidence: "ARR >$330M (end-2025) → >$500M annualized (early 2026)" },
  suno: { trend: "↑", evidence: "ARR $50M (early 2025) → $140M (Sep 2025) → ~$300M run-rate (2026)" },
  harvey: { trend: "↑", evidence: "ARR ~$190M (Jan 2026) → ~$350M+ annualized (mid-2026)" },
  sierra: { trend: "↑", evidence: "ARR >$150M (Feb 2026); 8 consecutive growth quarters" },
  glean: { trend: "↑", evidence: "ARR ~$100M (early 2025) → ~$300M (May 2026)" },
  notion: { trend: "↑", evidence: "~$600M ARR (+50% YoY)" },
  tempus: { trend: "↑", evidence: "FY2025 revenue $1.27B (+83%); FY26 guided $1.59–1.60B" },
  abridge: { trend: "↑", evidence: "Crossed $100M annual revenue; ARR ~$117M contracted" }
};

window.AIDATA.geoExposure = {
  /* China exposure — levels quoted from the risk discussions in the
     source files; companies without a China discussion are not listed. */
  nvidia: { label: "Medium", note: "Export controls on AI silicon (risk register)" },
  micron: { label: "Medium", note: "CXMT (China) commodity-DRAM threat; export-control exposure" },
  tsmc: { label: "High", note: "Taiwan concentration is the industry's single-point geopolitical risk; export-control regime" },
  "lam-research": { label: "High", note: "China is 26–34% of revenue (export-control risk)" },
  kla: { label: "High", note: "China is 26–30% of revenue" },
  "applied-materials": { label: "High", note: "China exposure flagged in equipment-layer risks" },
  supermicro: { label: "High", note: "DOJ China-export case: ~$2.5B of servers allegedly routed to China" },
  deepseek: { label: "High", note: "China-based lab; US export controls + China policy exposure" },
  broadcom: { label: "Medium", note: "Export-control exposure on custom silicon (risk register)" },
  intel: { label: "Medium", note: "Export-control exposure as leading-edge foundry (risk register)" },
  coherent: { label: "Medium", note: "Chinese optical vendors (Innolight/Eoptolink) undercut pricing — competitive exposure" }
};
