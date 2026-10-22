/* ============================================================
   Supply chain — 9 layers + value capture
   Sources: US-AI-Supply-Chain-Map-Aug-2026.md,
            US-AI-Value-Capture-Analysis-Aug-2026.md
   ============================================================ */
window.AIDATA = window.AIDATA || {};

window.AIDATA.chainLayers = [
  {
    id: 1, name: "Semiconductor equipment",
    sub: "Lithography · Etching · Deposition · Metrology · Packaging",
    segments: [
      { name: "Lithography", companies: "ASML (NL), TEL (JP), Canon (JP)", leaders: "ASML: EUV ~100% monopoly; ~80–90% of merchant DUV (est.)", bottlenecks: "EUV capacity + export-control regime; EUV output gates every leading-edge node", switching: "Extreme — node-specific, years of qualification, ~12–18 month tool lead times", value: "ASML (~$663–671B; premium margins, ~50% GM on a monopoly)" },
      { name: "Etching", companies: "Lam, TEL, AMAT, Hitachi", leaders: "Lam: #1 in etch, 100% of HBM high-aspect-ratio etch; TEL #2", bottlenecks: "HBM etch capacity — nothing to make HBM stacks without it", switching: "Very high — 40K+ installed chambers; process recipes locked per chamber", value: "Lam (~$390B); the sharpest single equipment bottleneck in the US" },
      { name: "Deposition", companies: "AMAT, TEL, Lam", leaders: "AMAT #1 overall (deposition + CMP + packaging)", bottlenecks: "ALD/CVD capacity for HBM and 3D structures", switching: "High — tool qualification cycles", value: "AMAT (~$428B; ~40% of revenue AI-related)" },
      { name: "Metrology", companies: "KLA, Onto, Camtek, Nova, Lasertec (JP)", leaders: "KLA: ~50–58% process-control share, ~7x nearest rival", bottlenecks: "Inspection intensity rises with every HBM layer, chiplet, GAA step", switching: "Very high — recipes calibrated to tool fleets; 80% contracted services", value: "KLA (~$260B; 62% GM — highest-margin of the big three)" },
      { name: "Packaging", companies: "AMAT, Disco (JP), BESI (NL), ASMPT (HK)", leaders: "AMAT ~50% of HBM packaging equipment + hybrid bonding; Disco dominates dicing", bottlenecks: "CoWoS-class equipment lead times; hybrid bonding is the next-gen gate", switching: "High — co-developed with TSMC fab processes", value: "AMAT; TSMC (as the packaging customer)" }
    ],
    economics: { growth: "15–25% CAGR; 2026 WFE raised to ~$140B; AI content per wafer rising (HBM 3–4x wafer starts per bit; packaging >50% growth at AMAT)", pricing: "High — tollbooths; ASML monopoly; Lam 100%-share; KLA recipe-locked", gm: "45–62%: KLA 62%, ASML ~50%, Lam ~48–50%, AMAT ~46%", intensity: "Moderate — 2–4 player oligopolies; long-term threat from Chinese domestic suppliers (AMEC/Naura) behind export-control walls", commoditisation: "Less commoditised — each node generation adds tool content (GAA, HBM layers, chiplets, hybrid bonding)", winners: "ASML, Lam, KLA, AMAT — the AI-content-per-wafer compounders", losers: "Non-AI-exposed second-tier tools (Canon litho), mature-node equipment; Chinese tools win domestically but stay fenced out of the West" }
  },
  {
    id: 2, name: "Foundry & manufacturing",
    sub: "Foundry · Advanced packaging",
    segments: [
      { name: "Foundry", companies: "TSMC (TW), Samsung (KR), Intel (US)", leaders: "TSMC: ~90%+ of leading-edge AI silicon (est.); merchant foundry ~60%+ overall; Samsung #2 but trailing at 2nm; Intel 18A emerging (NVIDIA $5B + Azure anchors)", bottlenecks: "N3/N2 capacity + CoWoS — the single biggest physical bottleneck in global AI", switching: "Extreme — designs are node-specific; multi-billion NRE; multi-year cycles", value: "TSMC (~$2.18T; premium pricing, 40%+ GM) — still earns less per wafer than NVIDIA earns per GPU" },
      { name: "Advanced packaging", companies: "TSMC CoWoS, Intel EMIB/Foveros, Samsung", leaders: "TSMC dominates AI advanced packaging (~60%+ of CoWoS-class capacity, est.); supply-constrained through 2027", bottlenecks: "CoWoS is the binding constraint on every accelerator program — HBM-in-package yield and capacity", switching: "Extreme — packaging co-designed with chip + process", value: "TSMC; the equipment layer (AMAT/Disco/BESI) upstream" }
    ],
    economics: { growth: "15–30%; TSMC AI-premium pricing each generation; CoWoS revenue growing 50%+", pricing: "Very high — capacity allocation is the pricing mechanism; CoWoS scarcity premium", gm: "TSMC 40%+ (targeting ~50%+ long-term on leading edge); Intel foundry negative; Samsung foundry weak", intensity: "Low at leading edge — effectively TSMC plus two trailers; the least contested layer in the chain", commoditisation: "Less commoditised — consolidation into a near-monopoly; advanced packaging (CoWoS) is a differentiated bottleneck, not a commodity", winners: "TSMC (the toll on everything), Intel (call option on 18A), CoWoS supply chain", losers: "Samsung foundry (trailing node roadmap), GlobalFoundries (stuck at mature nodes, zero AI leverage)" }
  },
  {
    id: 3, name: "AI compute hardware",
    sub: "GPUs · AI accelerators · Custom ASICs · CPUs",
    segments: [
      { name: "GPUs", companies: "NVIDIA, AMD", leaders: "NVIDIA: est. 85–90% of merchant AI accelerators; ~60–70% of all AI accelerators (custom silicon ~28% of AI servers, TrendForce); AMD ~10–15% merchant", bottlenecks: "GPU supply (GB300 pre-orders ~400K); HBM allocation; CoWoS", switching: "Very high — CUDA software moat: 15 years of installed code, libraries, tooling", value: "NVIDIA — the single largest value capture in the entire chain (~$5.4T cap; ~70%+ GM; ~90% of revenue AI)" },
      { name: "AI accelerators (challengers)", companies: "Cerebras, Groq, SambaNova", leaders: "Cerebras (wafer-scale, public ~$51B); Groq LPU (now licensed into NVIDIA's roadmap); SambaNova (enterprise on-prem)", bottlenecks: "None at scale yet — all sub-5% of compute", switching: "Low-medium — no ecosystem lock-in; adoption is contract-based", value: "Cerebras ($24.6B contracted backlog); challengers capture little yet" },
      { name: "Custom ASICs", companies: "Broadcom, Marvell (design); Google, Amazon, Meta, Microsoft, OpenAI, Anthropic (customers)", leaders: "Broadcom ~70% of custom-ASIC design services; Marvell ~20–25% — a duopoly over TPU/Trainium/MTIA/Maia/Jalapeño", bottlenecks: "Design-team capacity — only a handful of programs can be run at once; HBM + CoWoS allocations", switching: "Extreme — multi-year binding commitments ($128B at Broadcom); chip-to-workload co-design", value: "Broadcom (~$2.0T; AI rev $10.8B/qtr, guiding >$100B FY27); customers capture efficiency vs merchant GPUs" },
      { name: "CPUs", companies: "AMD, Intel, Arm (IP)", leaders: "AMD EPYC ~35%+ of server CPUs (rising); Intel Xeon re-accelerating; Arm Neoverse behind every custom XPU host", bottlenecks: "None AI-specific", switching: "High for x86 workloads; low-medium for Arm", value: "AMD/Intel (modest); Arm collects IP royalties (~$302B)" }
    ],
    economics: { growth: "40–60%; NVIDIA DC the fastest ramp in its history; custom silicon the fastest segment (~26% CAGR to 2031)", pricing: "NVIDIA extreme (~70%+ GM); custom ASIC = cost-down pressure but design services scarce; AMD moderate", gm: "NVIDIA ~70–75%; Broadcom AI ~60–65%; Marvell ~60–70%; AMD ~50–55%", intensity: "High and rising — custom silicon at ~28% of AI servers, AMD inference wins, open-Ethernet ecosystems", commoditisation: "Slowly more commoditised at the margin — inference silicon commoditising faster than training; training + CUDA still differentiated", winners: "NVIDIA (training + ecosystem), Broadcom/Marvell (custom-silicon toll), AMD (inference share), Cerebras (wafer-scale niche)", losers: "Intel Gaudi (no share, no ecosystem), Groq (tech transferred to NVIDIA), capital-poor challengers" }
  },
  {
    id: 4, name: "Memory & HBM",
    sub: "HBM · DRAM · NAND",
    segments: [
      { name: "HBM", companies: "SK Hynix (KR), Samsung (KR), Micron (US)", leaders: "SK Hynix ~52–62% (NVIDIA's lead supplier); Samsung ~25–39%; Micron ~8–25% (only Western; HBM4 first-mover)", bottlenecks: "All HBM capacity sold out through 2027; HBM4 qualification gates every 2027 accelerator program; HBM market ~$54.6B in 2026 (+58% YoY, ~40% of DRAM)", switching: "High — qualification cycles with each GPU generation; but 3 suppliers = partial substitutability", value: "Cyclically enormous — Micron printing 84.6% gross margin; SK Hynix the structural leader" },
      { name: "DRAM", companies: "Samsung, SK Hynix, Micron, CXMT (CN)", leaders: "Samsung ~40%+; SK Hynix ~30%+; Micron ~20–25% (est.)", bottlenecks: "Contract prices >2x since late 2025; CXMT (China, IPO ~$484B) is the first credible challenger", switching: "Medium — commodity market, long-term contracts", value: "Same cycle as HBM (diluted by commodity dynamics)" },
      { name: "NAND", companies: "Samsung, SK Hynix (Solidigm), Kioxia (JP), Micron, WD/SanDisk", leaders: "Samsung ~30%+; consolidation ongoing", bottlenecks: "AI storage pools (QLC) rising but secondary to HBM/DRAM", switching: "Medium", value: "Moderate; less AI-driven than HBM" }
    ],
    economics: { growth: "HBM +58% YoY to ~$54.6B (2026), ~40% of DRAM; DRAM contract prices >2x since late 2025", pricing: "Extreme today — sold out through 2027, Micron printing 84.6% GM; historically cyclic — the highest-peak, most-violent-mean-reverting pricing in the chain", gm: "30–85% depending on cycle phase; peak-phase margins exceed every other layer", intensity: "Low — 3-player HBM qualification game; CXMT threatens commodity DRAM, not (yet) HBM", commoditisation: "Split — HBM less commoditised near-term (capacity + qualification); commodity DRAM structurally commoditised; CXMT is the 5-year deflationary force; HBM4E/5 could re-commoditise by 2029–30", winners: "SK Hynix (structural HBM leader), Micron (Western premium + HBM4 timing), Samsung (scale, if execution holds)", losers: "Commodity-DRAM-only players; Samsung/Micron commodity margins under CXMT pressure; investors who buy the 84.6% GM as permanent" }
  },
  {
    id: 5, name: "AI networking",
    sub: "Ethernet switches · Optical interconnect · Cables · Networking chips",
    segments: [
      { name: "Ethernet switches", companies: "Broadcom (silicon), Arista (systems), Cisco, NVIDIA (Spectrum-X)", leaders: "Broadcom ~70–80% of high-end merchant AI switching (est.); Arista the systems leader (100+ AI customers, ~$3.5B AI sales target); NVIDIA's Spectrum-X is the proprietary counterweight", bottlenecks: "1.6T switching cycle; supply (not demand) constrained through 2028", switching: "High — fabric design-ins, backplane compatibility, management stack", value: "Arista (48–49% op margin) + Broadcom (silicon toll)" },
      { name: "Optical interconnect", companies: "Coherent, Lumentum, Innolight (CN), Eoptolink (CN), Fabrinet (TH assembly)", leaders: "Coherent the sole vertically integrated Western vendor (800G volume, 1.6T mass production H2 2026; NVIDIA $2B strategic stake)", bottlenecks: "1.6T ramp — Coherent book-to-bill >4x with orders into 2028; Chinese vendors undercut on price", switching: "Medium — design-ins but multi-vendor qualification", value: "Coherent (~75% of revenue DC-linked) during the 1.6T supercycle" },
      { name: "Cables / connectivity silicon", companies: "Credo (AECs), Astera (retimers), Amphenol/TE (copper), Marvell (DSPs)", leaders: "Credo the AEC pioneer (5 hyperscalers; +206% FY26 revenue); Astera in ~90% of AI servers", bottlenecks: "Copper hits its limit at rack scale; the copper→optics transition decides the next cycle", switching: "Medium — rack cabling is design-in but replaceable", value: "Credo + Astera (near-100% AI revenue, extreme concentration)" },
      { name: "Networking chips", companies: "Broadcom, NVIDIA (ConnectX/NVLink), Marvell, Astera (Scorpio)", leaders: "NVIDIA privatizes scale-up (NVLink/NVLink Fusion); Broadcom dominates merchant scale-out", bottlenecks: "NVLink Fusion is a virtual bottleneck — proprietary interconnect forces NVIDIA-to-NVIDIA topologies; CPO (2027–28) is the next gate", switching: "Very high for NVLink-integrated racks", value: "NVIDIA (interconnect premium) + Broadcom (merchant)" }
    ],
    economics: { growth: "25–50%; Arista +40% (FY26 guide), Coherent DC +41%, Credo +206%, Astera +104%", pricing: "Moderate-high — Arista 48–49% op margin in a 'commodity' market (brand + design-ins); optical/transceiver pricing eroding under Chinese competition; NVIDIA's NVLink premium is contractual", gm: "Arista ~60–65% GM; Credo ~68%; Astera ~75%; Coherent ~35–40%; Broadcom switching ~60%+", intensity: "High and rising — optics is the most contested layer (Innolight/Eoptolink undercutting), Ethernet vs NVLink bifurcation, multiple AEC/retimer vendors", commoditisation: "More commoditised — transceivers commoditise each generation (800G→1.6T); retimers/AECs follow; exceptions: merchant switching silicon (Broadcom) and private interconnect (NVLink Fusion)", winners: "Broadcom (silicon toll), Arista (fabric franchise), NVIDIA (interconnect premium), Credo (AEC near-term), Lightmatter if CPO lands (2027–28 re-differentiation)", losers: "Western optical vendors vs Chinese price competition (Lumentum class), InfiniBand as a standard, second-tier retimer/optical players" }
  },
  {
    id: 6, name: "Data centres & power",
    sub: "Power · Cooling · Servers · Data centre operators",
    segments: [
      { name: "Power", companies: "Vertiv, Eaton, Schneider (FR), GE Vernova, Caterpillar, Doosan", leaders: "Vertiv: near-monopoly in high-density DC power/thermal ($15B backlog, 2.9x book-to-bill); Eaton grid-side leader ($14.5B Electrical Americas backlog)", bottlenecks: "Grid is the #1 industry constraint — 307GW announced vs queues to 2030; <5% powered shell left in NoVA; gas turbines (Doosan units at Colossus) are months-long lead items", switching: "Low for equipment (installed); very high for secured sites/contracts", value: "Vertiv (pricing power in shortage; shares +90% YTD) + Eaton" },
      { name: "Cooling", companies: "Vertiv, Boyd (→Eaton), Modine, nVent", leaders: "Vertiv leads liquid cooling for >100kW racks (NVIDIA Rubin DSX co-design)", bottlenecks: ">100kW/rack air cooling impossible; liquid cooling becomes mandatory at Rubin densities", switching: "High — co-designed with rack architecture", value: "Vertiv" },
      { name: "Servers", companies: "Supermicro, Dell, HPE, Foxconn (TW), Quanta (TW), Lenovo", leaders: "Dell + Supermicro lead US AI servers (Dell $51B AI backlog); Foxconn/Quanta the volume giants", bottlenecks: "None of their own — servers are captive to GPU supply and HBM", switching: "Medium — rack standards, but hyperscalers multi-source", value: "Thin margins — value stays with NVIDIA/GPU owners, not server OEMs" },
      { name: "Data centre operators", companies: "Equinix, Digital Realty, Vantage, QTS, Stack, CoreWeave, Nebius, Crusoe; hyperscalers self-build", leaders: "Hyperscalers self-build the majority of AI MWs; private capital (Vantage/QTS/Stack) wins the rest; listed REITs losing share", bottlenecks: "Power-secured sites; permitting; 15-year leases signed pre-groundbreaking", switching: "Very high — lease duration + power contracts", value: "Private capital captures via 10–15x equity leverage; Equinix collects interconnection annuity" }
    ],
    economics: { growth: "20–30%; Vertiv FY26 guide ~$14B from $10.2B (+37%); Dell AI servers +757% YoY; Eaton DC orders +85%", pricing: "Vertiv strong in shortage (2.9x book-to-bill, $15B backlog); servers none (thin margins); DC sites scarcity rents (power-secured land)", gm: "Vertiv ~40%+; Eaton ~38–40%; Equinix ~50%+ (interconnection premium); Dell ~20% overall with AI servers at low-single-digit contribution; SMCI ~11–15%", intensity: "Moderate-high — power/cooling oligopoly; servers cut-throat; DC real estate contestable (private capital vs REITs)", commoditisation: "Split — servers permanently commoditised (value flows to GPU owners); power/cooling equipment semi-commoditised but scarcity-protected near-term; power-secured sites less commoditised (the scarcest asset in AI)", winners: "Vertiv, Eaton, Crusoe/Nebius (powered compute), private DC capital (Vantage-class), Equinix (inference-era interconnection)", losers: "Server OEMs (volume, no margin), listed REITs losing the buildout (DLR class), power vendors without high-density products" }
  },
  {
    id: 7, name: "Cloud platforms",
    sub: "Hyperscalers · GPU clouds",
    segments: [
      { name: "Hyperscalers", companies: "AWS, Microsoft Azure, Google Cloud, Oracle OCI", leaders: "AWS ~30%+ cloud share (AI >$25B run-rate); Azure ~22–25% (AI >11pts of +43% growth; $678B RPO); Google Cloud ~12–14% and fastest-growing (+82%); Oracle OCI +93% on a $638B backlog", bottlenecks: "All capacity-constrained — demand exceeds supply; power, GPU allocation, Oracle's credit profile", switching: "High — data gravity, enterprise contracts, agent/workflow embedding", value: "Hyperscalers capture the durable AI annuity; AWS holding 39.4% op margin while absorbing AI buildout" },
      { name: "GPU clouds", companies: "CoreWeave, Nebius, Lambda, Crusoe; inference: Baseten, Modal, Together, Fireworks", leaders: "CoreWeave the pure-play leader ($99.4B backlog; MSFT 62% of revenue); Nebius fastest (+841% YoY); Baseten fastest-growing inference (~20x YoY)", bottlenecks: "Capital intensity (~$20–25B/yr capex at Nebius); NVIDIA allocation; inference price war compressing margins", switching: "Medium — multi-year contracts bind capacity, but customers are few", value: "Revenue scale with thin margins; the price war redistributes value to model buyers" }
    ],
    economics: { growth: "AI-specific triple digits; overall cloud 20–40% (all hyperscalers capacity-constrained)", pricing: "Moderate — consumption pricing, discounting culture; capacity scarcity supports near-term pricing, custom silicon + competition erode it long-term; GPU rental pricing power falling (inference price war)", gm: "Services 55–70% GM; AWS op margin 39.4% held during buildout (the quality benchmark); GPU clouds thin", intensity: "High — 4 hyperscalers + GPU clouds + inference clouds; but the constraint is supply, so intensity is deferred", commoditisation: "Bifurcating — commodity GPU rental commoditising now (hyperscaler internal clouds, price war); integrated cloud (data + agents + governance) less commoditised — value is migrating up the stack", winners: "AWS, Azure, Google (durable annuities with expanding op margins), Oracle (near-term, credit-adjusted), CoreWeave (if concentration resolves)", losers: "Arbitrage GPU clouds without power or capital (Baseten/Modal margin squeeze), Nebius if hyperscaler internalization accelerates (Meta datapoint), second-tier GPU clouds" }
  },
  {
    id: 8, name: "Foundation models",
    sub: "Frontier labs · Open-source models",
    segments: [
      { name: "Frontier labs", companies: "OpenAI ($852B), Anthropic ($965B), Google DeepMind, xAI, Meta (Muse)", leaders: "Enterprise LLM spend: Anthropic ~40%, OpenAI ~27% (est.); Gemini app ~950M MAU (consumer)", bottlenecks: "Compute, not model quality — power contracts (Stargate 9+GW, Colossus ~2GW) and capital circularity (labs are each other's customers); June 2026 EO gates releases", switching: "Low for models themselves (Bedrock/Vertex multi-model gateways); high for embedded agents (Claude Code) and enterprise trust", value: "Negative economics — the intellectual heart of AI captures negative value while the physical layers take the profit; distribution (Anthropic's enterprise, OpenAI's consumer) is where durable value may form" },
      { name: "Open-source models", companies: "Meta Llama, Qwen (Alibaba), DeepSeek (CN), Mistral (FR)", leaders: "Qwen derivatives ~69% of open-model usage vs Llama ~11% — the open frontier has migrated to China", bottlenecks: "Open-model quality gap vs frontier (closing); serving cost", switching: "Low — open weights are portable", value: "Accrues to the serving layer (Together/Fireworks/HF) and to enterprises that self-host" }
    ],
    economics: { growth: "API market 80–120% by volume — but token prices falling ~50%/yr, so revenue growth is volume-led, value growth far smaller", pricing: "Low and falling — GPT-5.6 Terra at half price; open models at 5–10x lower; multi-model gateways (Bedrock/Vertex) commoditise switching; the only pricing power is consumer subscriptions (ChatGPT) and enterprise distribution", gm: "Negative at the lab level (OpenAI ~-122% op margin; Anthropic ~20.5x gross run-rate on ~$47B); API gross margins positive but compute-dominated", intensity: "Extreme — the most contested layer in the chain; benchmarks rotate leadership quarterly; open models compress pricing from below", commoditisation: "Rapidly more commoditised — weights are the commodity; durable value is migrating to distribution, agents/workflows (Claude Code $2.5B ARR), and compute ownership", winners: "Anthropic (enterprise platform), OpenAI (consumer platform), Google (distribution), xAI (compute + distribution) — as platforms, not model sellers", losers: "Model-only labs without distribution (Cohere-class), pure open-weight serving (commodity margins), frontier labs that fail to convert model leadership into workflow distribution" }
  },
  {
    id: 9, name: "AI applications",
    sub: "Enterprise software · Developer tools · Vertical AI",
    segments: [
      { name: "Enterprise software", companies: "Microsoft (Copilot 30M seats), Salesforce (Agentforce $1.2B ARR), ServiceNow (>$1B AI ACV), Palantir, Snowflake, Databricks", leaders: "Microsoft the seat leader; ServiceNow the agentic-monetization quality leader; Palantir the sovereign-AI leader", bottlenecks: "None physical — distribution and data are the moats; bundling (Copilot/Agentforce/Epic) squeezes independents", switching: "High — workflow embedding, data, admin inertia", value: "Subscription + consumption pricing (AWUs, Assist packs); but the model tax flows upstream" },
      { name: "Developer tools", companies: "Cursor ($2.6–4B+ ARR), Claude Code ($2.5B), GitHub Copilot, Cognition ($492M ARR), Replit", leaders: "Cursor + Claude Code the leaders (~26%/~40% of AI-coding share, est.); the category is 2–3 players wide", bottlenecks: "Model capability and pricing — app value is a thin layer over frontier APIs", switching: "High for teams — codebase embedding and muscle memory", value: "Highest ARPU per user in software history ($60–200/mo per seat); captured by Cursor/Anthropic" },
      { name: "Vertical AI", companies: "Harvey (legal), Sierra (CX), Tempus/Abridge (healthcare), Glean, Notion", leaders: "Harvey: legal category leader (majority of AmLaw 100); Sierra: CX leader (40%+ of Fortune 50); Tempus: healthcare data moat", bottlenecks: "None physical — platform capture (Epic native scribe, Copilot bundling) is the existential risk", switching: "Very high — vertical data + workflow + trust", value: "The strongest per-seat economics in AI software (Harvey $1.2–3K/attorney/mo; Notion $600M ARR, profitable) — but structurally dependent on model-layer pricing" }
    ],
    economics: { growth: "Agentic software 100%+ (Agentforce +205%, ServiceNow AI ACV doubling, Cursor's ARR explosion); enterprise software overall 10–20%", pricing: "High per seat — $60–200/mo dev seats; Harvey $1.2–3K/attorney/month; workflow + data + trust moats — but platform bundling (Copilot/Agentforce/Epic) is the structural threat", gm: "75–85% software margins — the best in the chain after NVIDIA; the question is COGS (model API) share, not margin", intensity: "High and rising — platform bundling, model labs shipping vertical agents, thin-layer commoditisation", commoditisation: "Bifurcating — feature-level AI in SaaS commoditises (bundled free); workflow/data-embedded applications resist", winners: "Microsoft, ServiceNow, Palantir, Cursor (via SpaceX), Harvey, Sierra, Tempus, Notion — the workflow/data holders", losers: "Feature-level AI in commodity SaaS, platform-captured verticals (Abridge-class if Epic wins), thin consumer apps without distribution (Midjourney-class)" }
  }
];

/* "$1 of AI spending" waterfall (stylised, 2026) */
window.AIDATA.waterfall = [
  { label: "NVIDIA silicon + systems", share: "~$0.30", profit: "~$0.21 (70%+ GM) — the largest single capture in the chain", neg: false },
  { label: "HBM / memory", share: "~$0.10", profit: "~$0.07 at peak pricing (84.6% GM) — cyclic extreme", neg: false },
  { label: "TSMC + CoWoS", share: "~$0.08", profit: "~$0.04 (45%+ GM)", neg: false },
  { label: "Equipment (amortised per wafer)", share: "~$0.05", profit: "~$0.025 (50%+ GM)", neg: false },
  { label: "Networking / interconnect", share: "~$0.06", profit: "~$0.03 (40–75% GM by vendor)", neg: false },
  { label: "Power, cooling, data centre", share: "~$0.12", profit: "~$0.05 (40%+ GM)", neg: false },
  { label: "Server assembly", share: "~$0.08", profit: "~$0.01 (<15% GM) — captures almost nothing", neg: false },
  { label: "Cloud ops, software, model layer", share: "~$0.21", profit: "negative-to-positive; the model layer contributes negative", neg: true }
];
window.AIDATA.waterfallNote = "Stylised illustration, not an accounting statement. Directionally robust: NVIDIA + memory + TSMC capture the profit; assembly and the model layer capture the least; cloud converts capex into an annuity over time.";

/* Q1 — 10 most critical AI bottlenecks globally */
window.AIDATA.bottlenecks = [
  { rank: 1, name: "TSMC leading-edge capacity + CoWoS", where: "Taiwan", why: "~90%+ of leading-edge AI silicon + dominant advanced packaging; a single-company dependency for NVIDIA, AMD, Broadcom, Trainium, TPU, Maia" },
  { rank: 2, name: "ASML EUV", where: "Netherlands", why: "Monopoly on the lithography that gates every leading-edge node; output caps the entire industry's roadmap" },
  { rank: 3, name: "Grid power & interconnection", where: "US (globally)", why: "307GW announced vs queues to 2030; <5% powered shell in NoVA; power, not silicon, is the binding constraint of the buildout" },
  { rank: 4, name: "HBM supply", where: "Korea/US", why: "Sold out through 2027; HBM4 allocation decides every 2027 accelerator program; ~40% of DRAM market" },
  { rank: 5, name: "NVIDIA GPU supply + CUDA", where: "US", why: "~400K GB300 pre-orders; near-term capacity (not demand) is the constraint; CUDA makes it sticky" },
  { rank: 6, name: "HBM etch + packaging equipment", where: "US (Lam/AMAT)", why: "100% share of HBM high-AR etch; ~50% of HBM packaging equipment — the US-controlled leg of the memory bottleneck" },
  { rank: 7, name: "Rack-scale interconnect", where: "US", why: "1.6T optical ramp (book-to-bill >4x); NVLink Fusion privatizes scale-up; CPO transition (2027–28) is the next gate" },
  { rank: 8, name: "Custom-ASIC design capacity", where: "US (Broadcom/Marvell)", why: "A duopoly with finite team bandwidth — only a few new programs per year; every hyperscaler queues for their services" },
  { rank: 9, name: "Frontier-lab capital circularity", where: "US", why: "The financial bottleneck: ~$1.4T funding gap vs $650–700B annual spend; labs are each other's largest customers — one broken leg reprices everything" },
  { rank: 10, name: "Export-control & policy regime", where: "US/global", why: "Gates China's access to leading-edge silicon AND the US's own model releases (June 2026 EO; Claude Fable 5 suspension)" }
];

/* Q2 — strongest pricing power */
window.AIDATA.pricingPower = [
  { rank: 1, company: "NVIDIA", source: "CUDA + supply scarcity; the only merchant supplier at scale", evidence: "~70%+ gross margin; racks sold out a year ahead" },
  { rank: 2, company: "ASML", source: "EUV monopoly", evidence: "~50% GM on a product with zero substitutes" },
  { rank: 3, company: "TSMC", source: "Leading-edge monopoly + CoWoS scarcity", evidence: "40%+ GM; pricing power through capacity allocation" },
  { rank: 4, company: "SK Hynix / Samsung / Micron", source: "HBM shortage", evidence: "Micron 84.6% GM; DRAM contracts >2x since late 2025" },
  { rank: 5, company: "Broadcom", source: "Custom-silicon duopoly + merchant switching", evidence: "$128B binding commitments; >$100B FY27 AI guide" },
  { rank: 6, company: "Vertiv", source: "Near-monopoly in high-density power/cooling", evidence: "$15B backlog, 2.9x book-to-bill; +90% YTD shares" },
  { rank: 7, company: "Lam Research", source: "100% share of HBM etch", evidence: "Fabs cannot qualify around it" },
  { rank: 8, company: "KLA", source: "Process-control tollbooth", evidence: "62% GM; ~7x nearest rival" },
  { rank: 9, company: "Arista", source: "AI-fabric premium with supply-constrained demand", evidence: "48–49% op margins" },
  { rank: 10, company: "Equinix", source: "Interconnection density — a network-of-networks annuity", evidence: "Recurring interconnection revenue at premium rates" }
];
window.AIDATA.pricingPowerNote = "Caveat: frontier labs (OpenAI/Anthropic) have nominal API pricing power but are actively cutting prices (GPT-5.6 Terra at half price) under open-model pressure — their pricing power is the most contested of any layer.";

/* Q3 — difficult to replace */
window.AIDATA.irreplaceable = [
  { rank: 1, company: "NVIDIA", why: "CUDA: 15 years of installed software, libraries, and engineering talent; every lab's stack is built on it", timeline: "2–4 years for a credible merchant alternative (AMD/TPU can't cover training demand); custom silicon 3–5 years" },
  { rank: 2, company: "TSMC", why: "Process + CoWoS: no merchant alternative at leading edge; Intel 18A is years from scale", timeline: "3–5+ years, and only partial" },
  { rank: 3, company: "ASML", why: "EUV monopoly; no competing design", timeline: "Never (no substitute exists)" },
  { rank: 4, company: "SK Hynix", why: "HBM #1 (52–62% share) + NVIDIA's certified lead supplier", timeline: "12–18 months for Micron/Samsung to fill the gap" },
  { rank: 5, company: "Broadcom", why: "Design relationships + Tomahawk switching: TPU/MTIA/Jalapeño roadmaps run through it", timeline: "2–4 years to recreate program capacity" },
  { rank: 6, company: "Lam Research", why: "100% HBM high-AR etch", timeline: "12–24 months for TEL/AMAT to qualify" },
  { rank: 7, company: "KLA", why: "Process-control standard (50–58%) with recipe-locked fleets", timeline: "2+ years to requalify" },
  { rank: 8, company: "Vertiv", why: "High-density power/cooling co-designed into NVIDIA racks", timeline: "12–24 months for Schneider/Eaton/nVent to absorb" },
  { rank: 9, company: "OpenAI", why: "ChatGPT brand + distribution gravity + Stargate capital machinery", timeline: "6–12 months — Anthropic/Google absorb demand, but the ecosystem rewires" },
  { rank: 10, company: "Anthropic", why: "Enterprise preference (~40% of spend) + Claude Code installed base", timeline: "12–18 months — OpenAI/Google fight over the enterprise base" }
];

/* Q4 — disappearance scenario */
window.AIDATA.disappearance = {
  answer: "TSMC — globally. NVIDIA — if restricted to US-headquartered companies. Both disappearances would be felt simultaneously in every layer of the chain.",
  scenarios: [
    { company: "TSMC (~$2.18T, Taiwan)", breaks: "Everything — NVIDIA, AMD, Broadcom/Marvell custom XPUs, Google TPU, Amazon Trainium, Microsoft Maia, and their CoWoS packaging all stop. No merchant alternative at leading edge (Intel 18A years from scale; Samsung trails at 2nm).", recovery: "3–5+ years to partial recovery — and even then only a fraction of capacity.", felt: "Every layer, simultaneously, downstream of the fab (HBM stacks have nowhere to land; every cloud's capacity plan dies)." },
    { company: "NVIDIA (US)", breaks: "Training and inference capacity halts for ~all labs and GPU clouds (GB300 racks, NVLink topologies, CUDA-stack software). AMD MI-series, TPU, and Trainium cannot absorb demand near-term — HBM was allocated for NVIDIA programs and software stacks are CUDA-native.", recovery: "12–24 months at the hardware level; 2–4 years for the software ecosystem to rebuild.", felt: "Why it outranks Broadcom/Microsoft/OpenAI: Broadcom's loss is survivable (multi-year roadmaps in flight); Microsoft's is contractual (AWS/Google can host OpenAI); OpenAI's is absorbable. Only NVIDIA and TSMC have no absorber." }
  ],
  runners: "Runner-up list: ASML (no new nodes, ever) → SK Hynix (HBM #1 gone; 12–18-month starvation) → Lam Research (HBM etch halts → all memory programs stall) → Broadcom (custom-silicon roadmaps die + switching supply disrupted) → Vertiv (new DC buildouts slow for 12–24 months) → OpenAI (largest distribution; disruptive but recoverable).",
  conclusion: "The disappearance exercise confirms the ranking's core insight — the AI industry's true fragility is upstream (Taiwan lithography + packaging, HBM, power, and the US equipment/etch tollbooths), not in the model layer that receives all the attention."
};
