/* ============================================================
   Investment themes — page content
   Sources: US-AI-Value-Capture-Analysis-Aug-2026.md,
            US-AI-Top20-Investment-Profiles-Aug-2026.md,
            US-AI-Industry-Map-Aug-2026.md,
            US-AI-Industry-Ranking-Aug-2026.md
   ============================================================ */
window.AIDATA = window.AIDATA || {};

/* Q1 — 10 strongest AI-related economic moats */
window.AIDATA.moats = [
  { rank: 1, company: "NVIDIA", type: "Ecosystem + switching cost", why: "CUDA: 15 years of installed software, libraries, and talent — the deepest moat in technology, not just AI" },
  { rank: 2, company: "TSMC", type: "Scale + process differentiation", why: "Leading-edge monopoly with multi-billion-NRE customer lock-in; CoWoS scarcity" },
  { rank: 3, company: "ASML", type: "Policy-backed monopoly", why: "EUV has no substitute and no entrant path" },
  { rank: 4, company: "Broadcom", type: "Contract + switching silicon", why: "$128B binding commitments; customers' multi-year roadmaps run through its design teams" },
  { rank: 5, company: "SK Hynix", type: "Certification + capacity", why: "NVIDIA-qualified HBM leadership; qualification cycles are years long" },
  { rank: 6, company: "Microsoft", type: "Distribution + exclusivity", why: "The OpenAI channel is exclusive and structural; $678B RPO" },
  { rank: 7, company: "KLA", type: "Installed-base lock-in", why: "Recipe-locked fleets, 80% contracted services, ~7x nearest rival" },
  { rank: 8, company: "Lam Research", type: "Category-share monopoly", why: "100% of HBM high-aspect-ratio etch — a monopoly within a memory oligopoly" },
  { rank: 9, company: "Anthropic", type: "Enterprise preference (emerging)", why: "~40% of enterprise LLM spend + Claude Code ecosystem; trust compounds" },
  { rank: 10, company: "Arista", type: "Switching costs in a 'commodity' market", why: "Fabric design-ins + management stack + 48–49% op margins prove the moat" }
];
window.AIDATA.moatsNote = "Honourable mentions: Vertiv (integration with NVIDIA reference designs), Equinix (interconnection), Micron (Western HBM + HBM4 timing), Palantir (ontology + defence), OpenAI (brand).";

/* Q3 — most value captured per dollar of AI spending */
window.AIDATA.valuePerDollar = [
  { rank: 1, company: "NVIDIA", basis: "Highest in the chain — ~$0.30 of every infrastructure dollar at ~70%+ GM — and it also charges the downstream (inference, NVLink)" },
  { rank: 2, company: "SK Hynix / Micron / Samsung", basis: "Peak-cyclically the highest GM in the chain — 84.6% GM at Micron; sold-out capacity through 2027" },
  { rank: 3, company: "ASML", basis: "Highest margin per tool dollar — ~50% GM on a monopoly; every wafer needs it" },
  { rank: 4, company: "TSMC", basis: "~$0.04–0.06 of every infra dollar — 45%+ GM, but a smaller share of the dollar than NVIDIA" },
  { rank: 5, company: "Broadcom", basis: "~60%+ GM on design services + switching — captures the custom-silicon toll regardless of who wins" },
  { rank: 6, company: "KLA / Lam", basis: "62%/50% GM tollbooths — process control + etch content scales with every AI node" },
  { rank: 7, company: "Vertiv", basis: "High-margin per MW deployed — power is the binding constraint; scarcity pricing" },
  { rank: 8, company: "Hyperscalers (AWS/Azure/Google)", basis: "Annuity converters — turn capex into 30–40% op-margin recurring revenue over 5+ years" },
  { rank: 9, company: "ServiceNow / Palantir / Cursor", basis: "Highest per-seat dollar — 75–85% GM software on AI-led pricing" },
  { rank: 10, company: "Frontier labs", basis: "Negative — the intellectual core of AI captures negative economics; the paradox of the chain" }
];

/* Q4 — where the value chain will commoditise */
window.AIDATA.commoditisation = {
  now: ["Model weights (open models at 5–10x lower price)", "Token/API pricing (~50%/yr deflation)", "Commodity GPU rental", "Server assembly (already)", "Feature-level AI in SaaS (bundled free)"],
  later: ["Inference serving (price war underway)", "Optical transceivers (1.6T → like 800G)", "AECs/retimers", "Commodity DRAM (CXMT entry)", "Second-tier AI PCs/edge silicon"],
  resists: ["CUDA ecosystem (NVIDIA)", "Custom-ASIC design services (capacity-constrained duopoly)", "HBM (qualification + allocation)", "CoWoS advanced packaging", "Power-secured DC sites", "Switching silicon (Broadcom)", "Agent/workflow embedding (Claude Code, ServiceNow, Harvey)", "Frontier-scale training (capital + data advantage)"]
};
window.AIDATA.commoditisationNote = "The pattern: commoditisation flows from the model layer outward. What resists is where scarcity, certification, or ecosystem lock-in lives.";

/* Q5 — overestimated / underestimated */
window.AIDATA.overUnder = {
  over: [
    { name: "Commodity GPU/inference clouds at premium multiples", why: "Nebius ~55x trailing revenue, Baseten 6x valuation in a year: the inference price war attacks exactly their margins." },
    { name: "Frontier lab marks as model-sellers", why: "Anthropic ~20.5x gross run-rate (negative FCF), OpenAI ~34x: weights are commoditising; the platform value (Claude Code, enterprise distribution) is real but a fraction of the 'model lab' label." },
    { name: "Oracle's backlog-as-asset", why: "Market prices $638B of backlog as an asset; concentration (~half on OpenAI) + BBB-/negative FCF say it's partly a liability. The -64% repricing says the market knows; the multiple still doesn't fully adjust for credit." },
    { name: "Palantir at ~50x forward", why: "Priced for sovereign-AI permanence, not for what happens if US government spending normalises." },
    { name: "NVIDIA's multiple", why: "The moat is real; the price is not the moat. Priced for perfection with custom silicon at ~28% of AI servers and rising." },
    { name: "50–100x ARR private app rounds", why: "Sierra ~105x, Cognition ~50x: model-layer price cuts land directly on these." }
  ],
  under: [
    { name: "The equipment tollbooths — the 'hidden AI'", why: "Lam/AMAT/KLA at ~20–25x earnings with 40–62% GM and rising AI content per wafer, while the market pays 50–70x for software 'AI names.' The least-popular seat at the table that every AI chip must pass." },
    { name: "Vertiv", why: "34x forward vs 55x+ for GPU clouds that depend on its hardware; power is the real constraint and its $15B backlog proves it." },
    { name: "Arista", why: "A 48–49% op-margin compounder with supply-constrained demand; priced as a hardware name, earning software economics." },
    { name: "Microsoft", why: "$678B RPO (+84%), Copilot seat adds doubling QoQ, OpenAI optionality: the market still prices the AI transition as noise inside a legacy behemoth." },
    { name: "Memory peak economics", why: "Micron at 84.6% GM sold out through 2027: the market keeps applying 'cyclical peak' discounts to a book that is contractually bound — the question is 2028, not 2026." },
    { name: "CoreWeave post-drawdown", why: "~$49B cap vs $99.4B contracted backlog (concentration-adjusted) after the market round-tripped it on capex jitters." }
  ]
};

/* Three lenses framework */
window.AIDATA.threeLenses = [
  { company: "NVIDIA", tech: "#1", quality: "Excellent (70%+ GM)", attract: "Strong but priced for perfection", why: "The moat and the price are both real; custom silicon is the 2028 question" },
  { company: "Anthropic / OpenAI", tech: "#1 (frontier)", quality: "Negative (combined ~$20B+/yr burn)", attract: "Depends on IPO pricing", why: "Best technology, worst current economics — the industry's central inversion" },
  { company: "Micron", tech: "High (HBM)", quality: "Cyclic (84.6% GM is a peak)", attract: "#1 risk-adjusted", why: "Market can't decide if 84.6% is real; contracts say it is — until 2028" },
  { company: "TSMC / ASML", tech: "#1 (non-US)", quality: "Excellent", attract: "Good (gateway constraints)", why: "Everyone agrees — and the price mostly reflects it" },
  { company: "Lam / AMAT / KLA", tech: "High (tollbooths)", quality: "Very good (45–62% GM)", attract: "Undervalued", why: "'Boring' hardware multiples on 'exciting' AI content — the classic hidden-AI discount" },
  { company: "Microsoft", tech: "High (chokepoint)", quality: "Excellent ($678B RPO)", attract: "Attractive", why: "Transition priced as noise; the AI option is nearly free" },
  { company: "Vertiv", tech: "High (power)", quality: "Good (40%+ GM, 2.9x B2B)", attract: "Attractive", why: "Power is more binding than compute, but priced like a supplier, not a bottleneck" },
  { company: "ServiceNow", tech: "Medium (agentic leader)", quality: "Excellent (AI ACV doubling)", attract: "Attractive", why: "The cleanest large-cap expression of the agent monetisation shift" },
  { company: "Oracle", tech: "High (capacity)", quality: "Deteriorating (BBB-, negative FCF)", attract: "Poor risk/reward", why: "Backlog is not equity value; concentration + credit are the real story" },
  { company: "Palantir", tech: "High (sovereign AI)", quality: "Good (80% GM, +93%)", attract: "Poor (50x forward)", why: "Tech importance and price have fully separated" }
];

/* Top-20 thematic lists */
window.AIDATA.thematicLists = [
  { title: "5 companies with the strongest AI moats", items: ["NVIDIA (CUDA — the deepest in technology)", "TSMC (process + CoWoS)", "Broadcom (binding contracts + switching)", "Microsoft (OpenAI exclusivity + distribution)", "Micron (HBM certification + Western premium)"] },
  { title: "5 companies most exposed to AI growth", items: ["NVIDIA (~90% of revenue AI)", "Micron (HBM = majority of profit)", "OpenAI (100% AI)", "Anthropic (100% AI)", "CoreWeave (100% AI — the purest public expression)"] },
  { title: "5 companies most misunderstood by investors", items: ["Vertiv (priced like a supplier, is the bottleneck)", "Micron (cyclical discount applied to a contractually bound book)", "Microsoft (the AI option nearly free — $678B RPO priced as noise)", "CoreWeave (drawdown overshoot vs $99.4B backlog — and the concentration both sides misprice)", "Palantir (bears ignore the moat, bulls ignore the multiple)"] },
  { title: "5 companies most at risk from AI disruption", items: ["Alphabet (AI search may disrupt its own ad model)", "Meta (open-model share lost to Qwen; Muse gap)", "OpenAI (the model business is the most commoditisation-exposed in tech)", "Anthropic (same risk + gross run-rate unwind at IPO)", "Cursor (its own model suppliers became its competitors — share fell 41%→26%)"] }
];

/* Bottom line (Value-Capture file) */
window.AIDATA.bottomLine = [
  "Profits accumulate upstream: NVIDIA, TSMC, ASML, HBM, equipment, and power capture the economic profits of AI; the model layer — the reason the industry exists — currently burns capital. This inversion is the defining feature of the 2026 value chain.",
  "The moat economy is concentrated: 10 companies (five US: NVIDIA, Broadcom, Microsoft, Lam, KLA) hold most of the chain's durable economic rent; everything downstream is a toll on them.",
  "Commoditisation is directional: it starts at model weights and works outward; what resists it — CUDA, HBM certification, CoWoS, custom-ASIC design capacity, power-secured land, workflow embedding — is where the next decade of value capture will concentrate.",
  "The best risk-adjusted value sits in the 'hidden AI': equipment tollbooths, power, and fabric switches earn monopoly economics at hardware multiples, while the market pays platform multiples for businesses the model layer can reprieve at will."
];

/* Cross-layer structural trends (Map file) */
window.AIDATA.trends = [
  "Capex supercycle: ~$650–700B of combined 2026 hyperscaler capex (Microsoft ~$190B guided, Alphabet $195–205B, Amazon $200B+), plus Stargate ($500B), Colossus (~2GW), and GPU clouds. Power — not silicon — is the binding constraint (307GW of announced DC capacity behind grid queues to 2030).",
  "Custom silicon is a real third path: Broadcom + Marvell hold ~90–95% of hyperscaler custom-ASIC design, reaching ~28% of AI servers. NVIDIA fights back with NVLink Fusion co-opetition and by licensing Groq's LPU IP.",
  "Circular funding is systemic: Anthropic pays xAI ~$1.25B/month for Colossus; Google pays xAI ~$920M/month; Anthropic committed $200B to Google Cloud; Amazon committed $500B to OpenAI ($350B contingent on IPO/AGI). The labs are each other's largest customers.",
  "Inference is now the demand engine (est. 2/3 of AI compute by end-2026), driving an inference price war that compresses GPU-cloud margins — and favoring low-latency accelerators and open-model platforms.",
  "A record IPO wave is building: Cerebras (May 2026) and CoreWeave (2025) already listed; Scale AI (Q3–Q4 2026), Lambda (H2 2026), Anthropic (possibly Oct 2026), OpenAI (2026–27), Crusoe (H1 2027), Databricks (2027) are queued.",
  "Consolidation: SpaceX–Cursor ($60B), Marvell–Celestial AI (up to $5.5B), Google–Windsurf ($2.4B), Nvidia–Groq license, plus a web of cross-investments.",
  "Agentic software is the second act: monetization is shifting from seats to consumption (Salesforce AWUs, ServiceNow Assist packs) — Agentforce $1.2B ARR (+205%), ServiceNow AI ACV >$1B, Snowflake CoCo 7,100 accounts/quarter — while seat-based SaaS gets repriced (Salesforce -30% YTD, Adobe -43% YoY).",
  "Power is the moat: 307GW announced, grid queues to 2030, <5% powered shell left in Northern Virginia — favoring power-secured players (Crusoe, Nebius, Vantage, Vertiv, Eaton)."
];

/* Risk register (Map file) */
window.AIDATA.riskRegister = [
  "Concentration: Broadcom's $100B FY27 target rests on Google/OpenAI/Meta; Credo top-3 = ~90% of revenue; CoreWeave 62% Microsoft; Oracle ~half of backlog on OpenAI; Scale's dependence on a few labs (Meta owns 49%)",
  "Valuation excess: Palantir ~50x forward; Nebius ~55x trailing; Astera ~245x trailing; Sierra ~105x ARR; Cognition ~50x revenue; Anthropic ~20.5x gross run-rate on unprofitable cash flows",
  "Capex cyclicality: ~$1.4T funding gap vs $650–700B annual spend; SK Hynix -50% from peak and Oracle -64% show how violently sentiment reprices; Meta building its own cloud is a live deflationary datapoint for GPU rental",
  "Regulatory/export control: June 2026 US EO gating frontier releases; Claude Fable 5 briefly suspended under export controls; SMCI DOJ case; equipment China exposure (Lam 26–34%, KLA 26–30%)",
  "Platform capture of the app layer: Epic native scribe vs Abridge/Ambience; Microsoft Copilot vs Glean; Agentforce vs Sierra/Decagon; Google/OpenAI bundling image/video/voice (Midjourney, Runway, ElevenLabs all directly substituted)",
  "Litigation: AI music (UMG/Sony/GEMA vs Suno); Character.AI teen-safety settlements",
  "Power/physical constraints: permitting moratoria, water, gas turbines, interconnection queues to 2030"
];

/* Watchlist / calendar (Map file) */
window.AIDATA.watchlist = [
  { date: "Aug 11, 2026", item: "CoreWeave Q2 earnings (GPU-cloud sentiment bellwether)" },
  { date: "H2 2026", item: "Scale AI IPO (Q3–Q4); Lambda IPO; SpaceX–Cursor close (Q3)" },
  { date: "Oct 2026", item: "Earliest Anthropic IPO window (S-1 filed June 2026)" },
  { date: "2026–27", item: "OpenAI IPO window; Lightmatter S-1; SambaNova 2027; Sierra IPO flagged 2027; Databricks earliest 2027" },
  { date: "Q3 2026", item: "AMD MI400 revenue ramp; NVIDIA Vera Rubin first shipments; Stargate capacity milestones" },
  { date: "Continuous", item: "HBM4 qualification status (binding constraint on every 2027 accelerator); Epic native-scribe rollout vs Abridge; Microsoft Copilot seat adds; the inference price war (Fireworks/Together/Baseten pricing)" }
];

/* Value capture funnel (Supply Chain file) */
window.AIDATA.valueFunnel = [
  { pool: "Profit pool #1", captured: "NVIDIA", mechanism: "GPU + CUDA toll: ~70%+ GM on the compute every layer depends on" },
  { pool: "Profit pool #2", captured: "TSMC, ASML", mechanism: "Fabrication + lithography monopoly rents" },
  { pool: "Profit pool #3 (cyclical)", captured: "SK Hynix, Samsung, Micron", mechanism: "HBM shortage pricing (Micron 84.6% GM)" },
  { pool: "Profit pool #4", captured: "Broadcom, Lam, KLA, AMAT, Vertiv, Arista", mechanism: "Tollbooths: design services, 100%-share etch, process control, power, fabric switching" },
  { pool: "Profit pool #5", captured: "Hyperscalers", mechanism: "Durable consumption annuity (AWS 39.4% op margin)" },
  { pool: "Negative economics", captured: "Frontier labs (OpenAI/Anthropic/xAI)", mechanism: "The intellectual core of AI burns ~$20B+/yr combined" },
  { pool: "Thin economics", captured: "Server OEMs, GPU clouds", mechanism: "Volume with low margins; price war at the inference layer" }
];
window.AIDATA.valueFunnelNote = "The paradox: every layer downstream of silicon is, economically, a toll on NVIDIA/TSMC/HBM. The model layer — the reason the entire industry exists — currently has the worst economics in the chain.";

/* Selection methodology (Top-20 file) */
window.AIDATA.selectionMethod = "20 companies, five per category. Selection criteria (in order): (1) strategic importance to the AI ecosystem, (2) economic value capture potential, (3) competitive moat, (4) exposure to AI growth, (5) ability to disrupt other industries, (6) long-term investment relevance — not market capitalisation. Two picks are non-US (TSMC, DeepSeek) because an investor cannot analyse the global AI industry without them.";
