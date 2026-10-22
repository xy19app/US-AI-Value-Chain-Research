/* ============================================================
   Companies — research universe (67)
   Transcribed verbatim from:
   - US-AI-Industry-Research-DB-Aug-2026.md (universe, fields)
   - US-AI-Industry-Ranking-Aug-2026.md (tiers, trajectories)
   - US-AI-Top20-Investment-Profiles-Aug-2026.md (20 deep profiles)
   No content added or updated.
   ============================================================ */
window.AIDATA = window.AIDATA || {};

/* Category derivation: Top-20 companies keep their Top-20 category;
   all others map by DB layer (L1 infra, L2/L3 platform, L4 apps). */
const CAT = { 1: "infrastructure", 2: "platform", 3: "platform", 4: "applications" };

window.AIDATA.companies = [
/* ================= LAYER 1 — INFRASTRUCTURE ================= */
{
  slug: "nvidia", name: "NVIDIA", ticker: "NVDA", category: "infrastructure", layer: 1, tier: 1,
  status: "Public", hq: "Santa Clara CA", founded: 1993, marketCap: "~$5.42T",
  aiExposure: { level: "High", note: "~90% of revenue AI DC" },
  primaryFunction: "Merchant AI accelerators + rack systems",
  chainPosition: "Infra — Silicon (accelerators)",
  advantage: "CUDA moat + annual architecture cadence + rack integration",
  competitors: ["AMD", "Broadcom", "Marvell", "Google TPU", "Intel"],
  trajectory: "Stable",
  multiRole: { roles: ["AI accelerator silicon", "rack-scale systems", "networking/interconnect (NVLink, Spectrum-X)", "AI software (CUDA)"], primary: "AI accelerator silicon (the rest is defence of the core)" },
  scores: { importance: 5, quality: 5, growth: 4, moat: 5, attractiveness: 3 },
  profile: {
    overview: "Merchant AI accelerator + full-stack rack systems supplier; CUDA software ecosystem; the industry's compute layer. Largest S&P 500 company.",
    aiRole: "The bottleneck and the toll — every frontier lab and hyperscaler buys NVIDIA first; CUDA is the industry's programming standard.",
    chainPosition: "Layer 1 — accelerator silicon, rack integration, private interconnect (NVLink), AI software.",
    revenueExposure: {
      current: "~90% of revenue is AI data center (~$170B+ run-rate, est.).",
      future: "Rising — inference buildout + Vera Rubin ramp (Q3–Q4 2026) + NVLink Fusion expansion; risk from custom silicon (~28% of AI servers and rising)."
    },
    moat: {
      technology: "CUDA + near-annual architecture cadence (Blackwell→Rubin gap 6–8 months).",
      ecosystem: "15 years of installed software, libraries, talent — the deepest moat in technology, not just AI.",
      data: "Usage telemetry from the largest AI workload base.",
      distribution: "Rack-level integration; every lab adopts at launch.",
      switchingCosts: "Extreme — CUDA-native stacks."
    },
    growthDrivers: ["Rubin/Blackwell demand (~400K GB300 pre-orders)", "Inference buildout", "NVLink Fusion", "Software/rental annuity"],
    risks: {
      competition: "AMD MI400, custom silicon (Broadcom/Marvell/TPU) at ~28% of AI servers and rising.",
      commoditisation: "Merchant GPUs eroding at the margin; inference silicon commoditising faster than training.",
      regulation: "Export controls.",
      supplyChain: "HBM4 allocation, CoWoS capacity.",
      valuation: "~70x forward — priced for perfection."
    },
    monitor: ["DC revenue growth rate", "Custom-silicon share of AI servers", "HBM4 qualification", "Vera Rubin ramp", "Inference revenue mix", "Gross margin"],
    thesis: {
      bull: "Training + inference duopoly through 2028; CUDA gravity compounds.",
      bear: "Custom silicon + open Ethernet commoditise the compute layer; the ~70x multiple leaves no error margin."
    },
    competitors: ["AMD", "Broadcom", "Google TPU", "Cerebras", "Marvell"]
  }
},
{
  slug: "tsmc", name: "TSMC", ticker: "TSM", category: "infrastructure", layer: 1, tier: null,
  status: "Public", hq: "Hsinchu, Taiwan", founded: null, marketCap: "~$2.18T",
  aiExposure: { level: "High", note: "HPC segment >50% of revenue; AI-specific est. 25–30%" },
  primaryFunction: "Leading-edge foundry + CoWoS advanced packaging",
  chainPosition: "Layer 2 — Foundry + advanced packaging (non-US)",
  advantage: "N3/N2 process leadership + CoWoS scarcity; multi-billion-NRE lock-in",
  competitors: ["Samsung Foundry", "Intel (18A)"],
  trajectory: "Increasing",
  scores: { importance: 5, quality: 5, growth: 4, moat: 5, attractiveness: 4 },
  profile: {
    overview: "The world's leading-edge foundry — fabricates virtually all AI accelerators (NVIDIA, AMD, Broadcom XPUs, TPU, Trainium, Maia) plus dominant CoWoS advanced packaging.",
    aiRole: "The physical base of the entire AI stack; the #1 global bottleneck.",
    chainPosition: "Layer 2 — foundry + advanced packaging.",
    revenueExposure: {
      current: "HPC segment >50% of revenue; AI-specific est. 25–30%.",
      future: "Rising — CoWoS scarcity premium, N2 ramp, AI demand."
    },
    moat: {
      technology: "N3/N2 process leadership + CoWoS.",
      ecosystem: "Every design IP ported; multi-billion-NRE lock-in.",
      data: "Process know-how accumulated over decades.",
      distribution: "Capacity allocation power.",
      switchingCosts: "Extreme — designs are node-specific."
    },
    growthDrivers: ["AI accelerator volume", "CoWoS capacity", "Per-generation price increases", "2nm leadership"],
    risks: {
      competition: "Intel 18A, Samsung (long shot).",
      commoditisation: "None near-term.",
      regulation: "Export-control exposure.",
      supplyChain: "N/A (is the supplier).",
      valuation: "Re-rated but remains the quality anchor."
    },
    monitor: ["Monthly revenue", "CoWoS capacity additions", "N2 ramp", "Utilization", "AI-customer mix"],
    thesis: {
      bull: "Leading-edge monopoly deepens; pricing power each node.",
      bear: "Geopolitical shock (Taiwan concentration); price concessions as capacity normalises."
    },
    competitors: ["Samsung Foundry", "Intel (18A)"]
  }
},
{
  slug: "broadcom", name: "Broadcom", ticker: "AVGO", category: "infrastructure", layer: 1, tier: 1,
  status: "Public", hq: "Palo Alto CA", founded: 1961, marketCap: "~$2.0T",
  aiExposure: { level: "High", note: "AI 31% FY25 → ~54% FY26" },
  primaryFunction: "Custom AI ASIC co-design + Ethernet switching",
  chainPosition: "Infra — Silicon (custom ASIC) + networking",
  advantage: "~70% custom-ASIC design share; $128B binding multi-GW commitments",
  competitors: ["Marvell", "NVIDIA", "MediaTek"],
  trajectory: "Increasing",
  multiRole: { roles: ["Custom AI ASIC design (XPUs)", "Ethernet switch silicon"], primary: "Custom AI ASIC design" },
  scores: { importance: 5, quality: 5, growth: 5, moat: 5, attractiveness: 4 },
  profile: {
    overview: "Custom AI accelerator (XPU) co-designer for hyperscalers + the merchant Ethernet switching monopoly; the primary counterweight to NVIDIA.",
    aiRole: "The custom-silicon toll — Google TPU, Meta MTIA, OpenAI \"Jalapeño\", Anthropic programs all run through its design teams; Tomahawk switches connect every cluster.",
    chainPosition: "Layer 1 — custom ASIC design + networking silicon.",
    revenueExposure: {
      current: "AI revenue $10.8B/quarter (+143% YoY), ~31% of revenue guided toward ~54% by Q3 FY26.",
      future: "> $100B FY27 on $128B binding purchase commitments."
    },
    moat: {
      technology: "Co-design + packaging expertise.",
      ecosystem: "None of its own — the moat is customer lock-in: multi-year, multi-GW binding contracts.",
      data: "N/A.",
      distribution: "Design-services relationships with every hyperscaler.",
      switchingCosts: "Extreme — chip-to-workload co-design."
    },
    growthDrivers: ["Hyperscaler custom-silicon shift (TPU v8, MTIA v4, Jalapeño 2027)", "Tomahawk 6 / 1.6T cycle"],
    risks: {
      competition: "Marvell, MediaTek, NVIDIA merchant.",
      commoditisation: "ASIC design could commoditise as programs standardise.",
      regulation: "Export controls.",
      supplyChain: "TSMC capacity + HBM allocation.",
      valuation: "Rich but commitment-backed."
    },
    monitor: ["AI revenue guide", "Binding-commitment additions", "New XPU customers", "Tomahawk share", "Backlog"],
    thesis: {
      bull: "Custom silicon + switching capture the non-NVIDIA compute dollar through 2030.",
      bear: "Hyperscalers bring design in-house; a single capex pause breaks the narrative."
    },
    competitors: ["Marvell", "NVIDIA", "MediaTek"]
  }
},
{
  slug: "micron", name: "Micron", ticker: "MU", category: "infrastructure", layer: 1, tier: 1,
  status: "Public", hq: "Boise ID", founded: 1978, marketCap: "~$990B",
  aiExposure: { level: "High", note: "HBM + AI DRAM majority of profit" },
  primaryFunction: "HBM + AI DRAM/NAND — only Western HBM producer",
  chainPosition: "Infra — Memory (HBM/DRAM/NAND)",
  advantage: "HBM4 first-mover; Western supply-chain premium; 84.6% GM; sold out through 2027",
  competitors: ["SK Hynix", "Samsung", "CXMT"],
  trajectory: "Increasing",
  scores: { importance: 5, quality: 3, growth: 5, moat: 4, attractiveness: 5 },
  profile: {
    overview: "#1 US memory; HBM3E/HBM4 + AI DRAM/NAND — the only Western HBM producer, sold out through 2027.",
    aiRole: "The memory bottleneck — HBM allocation decides every 2027 accelerator program.",
    chainPosition: "Layer 1 — memory (HBM/DRAM/NAND).",
    revenueExposure: {
      current: "HBM + AI DRAM is the majority of profit; FQ3 2026 revenue +346% at 84.6% gross margin.",
      future: "HBM ~40% of DRAM market and +58% YoY in 2026; HBM4 volume 2027; the 2028 question is the cycle."
    },
    moat: {
      technology: "HBM4 first-mover, ahead of schedule.",
      ecosystem: "Qualified with NVIDIA (cleared as HBM4 supplier June 2026).",
      data: "N/A.",
      distribution: "Western supply-chain premium.",
      switchingCosts: "High — per-generation qualification cycles."
    },
    growthDrivers: ["HBM content per accelerator (doubling per generation)", "AI server DRAM", "Sold-out contracts", "Price environment"],
    risks: {
      competition: "SK Hynix (52–62% HBM share), Samsung, CXMT (China, ~$484B IPO).",
      commoditisation: "Commodity DRAM structurally deflationary.",
      regulation: "China export controls.",
      supplyChain: "N/A (is the supplier).",
      valuation: "Peak-cyclical discount."
    },
    monitor: ["HBM gross margin", "Sold-out status", "HBM4 qualification", "DRAM contract prices", "CXMT capacity"],
    thesis: {
      bull: "Contractually bound book through 2027 with peak pricing — the market keeps discounting a peak that contracts extend.",
      bear: "2028 HBM supply glut + commodity DRAM disruption; 84.6% GM is a peak, not a plateau."
    },
    competitors: ["SK Hynix", "Samsung", "CXMT"]
  }
},
{
  slug: "vertiv", name: "Vertiv", ticker: "VRT", category: "infrastructure", layer: 1, tier: 1,
  status: "Public", hq: "Westerville OH", founded: 2016, marketCap: "~$103.5B",
  aiExposure: { level: "High", note: "Very High — growth entirely AI/DC-driven" },
  primaryFunction: "Data centre power & liquid cooling — near-monopoly at high density",
  chainPosition: "Infra — Power & cooling",
  advantage: "High-density thermal/power ~monopoly; $15B backlog; NVIDIA Rubin DSX co-design",
  competitors: ["Schneider Electric", "Eaton", "nVent", "Siemens"],
  trajectory: "Increasing",
  scores: { importance: 4, quality: 4, growth: 4, moat: 4, attractiveness: 4 },
  profile: {
    overview: "The #1 pure-play power and cooling infrastructure vendor for AI data centres (UPS, liquid cooling, busway) — co-designed with NVIDIA for Vera Rubin racks.",
    aiRole: "Power is the industry's #1 binding constraint (307GW announced vs grid queues to 2030); Vertiv is the near-monopoly at the high-density end.",
    chainPosition: "Layer 1 — data centre power & cooling equipment.",
    revenueExposure: {
      current: "Very High — growth entirely AI/DC-driven; FY26 guide ~$14B (from $10.2B FY25, +37%).",
      future: "Rising with the buildout; $15B backlog (2.9x book-to-bill)."
    },
    moat: {
      technology: "High-density thermal/power leadership, liquid cooling.",
      ecosystem: "NVIDIA Rubin DSX co-design.",
      data: "N/A.",
      distribution: "Design-ins at every hyperscaler.",
      switchingCosts: "High — power architecture is built around the rack generation."
    },
    growthDrivers: ["Hyperscaler capex ($650–700B 2026)", "Liquid cooling attach rate", "800V DC architectures"],
    risks: {
      competition: "Schneider, Eaton, nVent.",
      commoditisation: "Equipment pricing power fades as supply catches up.",
      regulation: "Grid/permitting policy.",
      supplyChain: "Component lead times.",
      valuation: "~34x forward."
    },
    monitor: ["Book-to-bill", "Backlog", "US revenue growth", "Liquid-cooling attach", "Q2 miss follow-through"],
    thesis: {
      bull: "The true bottleneck of the buildout, priced like a supplier (34x) while GPU clouds trade at 55x.",
      bear: "Capacity catches up; margins normalise; hyperscaler self-supply."
    },
    competitors: ["Schneider Electric", "Eaton", "nVent", "Siemens"]
  }
},
{
  slug: "amd", name: "AMD", ticker: "AMD", category: "infrastructure", layer: 1, tier: 2,
  status: "Public", hq: "Santa Clara CA", founded: 1969, marketCap: "~$789B",
  aiExposure: { level: "High", note: "DC segment doubling" },
  primaryFunction: "Merchant AI accelerators (Instinct) + EPYC server CPUs",
  chainPosition: "Infra — Silicon (accelerators, #2)",
  advantage: "Open-Ethernet alternative + price/perf; OpenAI/Anthropic/Meta anchor deals",
  competitors: ["NVIDIA", "Broadcom", "Intel"],
  trajectory: "Increasing",
  multiRole: { roles: ["AI accelerators (Instinct)", "Server CPUs (EPYC)"], primary: "AI accelerators" }
},
{
  slug: "marvell", name: "Marvell", ticker: "MRVL", category: "infrastructure", layer: 1, tier: 2,
  status: "Public", hq: "Santa Clara CA", founded: 1995, marketCap: "~$192B",
  aiExposure: { level: "High", note: "Custom XPU + AI networking is the growth engine" },
  primaryFunction: "Custom AI ASIC co-design (#2) + interconnect/optical",
  chainPosition: "Infra — Silicon (custom ASIC, #2)",
  advantage: "Trainium + Maia multi-generation lock-in; NVIDIA photonics tie (Celestial AI)",
  competitors: ["Broadcom", "MediaTek", "AIchip"],
  trajectory: "Increasing",
  multiRole: { roles: ["Custom AI ASIC design (Trainium/Maia)", "Optical interconnect (Celestial AI)"], primary: "Custom AI ASIC design" }
},
{
  slug: "qualcomm", name: "Qualcomm", ticker: "QCOM", category: "infrastructure", layer: 1, tier: 2,
  status: "Public", hq: "San Diego CA", founded: 1985, marketCap: "~$170–179B",
  aiExposure: { level: "Medium", note: "AI embedded across Snapdragon, not a separate P&L" },
  primaryFunction: "On-device/edge AI silicon (NPU)",
  chainPosition: "Infra — Silicon (edge)",
  advantage: "Best NPU-per-watt at edge; IP licensing annuity",
  competitors: ["NVIDIA", "Apple Silicon", "MediaTek"],
  trajectory: "Stable",
  multiRole: { roles: ["On-device AI silicon (NPU)", "Data-centre inference accelerators"], primary: "On-device AI silicon" }
},
{
  slug: "intel", name: "Intel", ticker: "INTC", category: "infrastructure", layer: 1, tier: 2,
  status: "Public", hq: "Santa Clara CA", founded: 1968, marketCap: "~$513B",
  aiExposure: { level: "Medium", note: "Foundry AI is future option value, not current revenue" },
  primaryFunction: "Western leading-edge foundry (18A)",
  chainPosition: "Infra — Foundry",
  advantage: "Only Western high-volume leading-edge fab; NVIDIA $5B + Azure 18A anchors",
  competitors: ["TSMC", "Samsung"],
  trajectory: "Stable",
  multiRole: { roles: ["Foundry capacity (18A)", "AI-PC silicon", "Gaudi accelerators", "Xeon server CPUs"], primary: "Western foundry capacity" }
},
{
  slug: "cerebras", name: "Cerebras", ticker: "CBRS", category: "disruptors", layer: 1, tier: 2,
  status: "Public", hq: "Sunnyvale CA", founded: 2016, marketCap: "~$51B",
  aiExposure: { level: "High", note: "100% AI" },
  primaryFunction: "Wafer-scale AI compute (WSE-3)",
  chainPosition: "Infra — Silicon (challenger)",
  advantage: "Wafer-scale engineering; $24.6B OpenAI/AWS contracted backlog",
  competitors: ["NVIDIA", "Groq", "SambaNova"],
  trajectory: "Increasing",
  multiRole: { roles: ["Accelerator silicon", "Inference cloud"], primary: "Accelerator silicon (cloud is monetisation)" },
  scores: { importance: 3, quality: 2, growth: 5, moat: 3, attractiveness: 3 },
  profile: {
    overview: "Wafer-scale AI compute (WSE-3: single-wafer chip, ~900K cores); inference + training; listed May 2026 — biggest US tech IPO since Snowflake.",
    aiRole: "The most credible merchant challenger to NVIDIA's architecture — and the test of whether the challenger class converts backlog into a business.",
    chainPosition: "Layer 1 — accelerator silicon + inference cloud.",
    revenueExposure: {
      current: "100% AI; 2025 revenue $510M (+76%).",
      future: "Backlog conversion ($24.6B RPO ≈ 48x 2025 sales) anchored by OpenAI (>$10B) and AWS."
    },
    moat: {
      technology: "Wafer-scale engineering (claimed 15x inference speedup).",
      ecosystem: "OpenAI + AWS contracts.",
      data: "N/A.",
      distribution: "Contract-locked early customers.",
      switchingCosts: "Contract-locked."
    },
    growthDrivers: ["Inference demand", "OpenAI expansion", "AWS partnership", "Training ambitions"],
    risks: {
      competition: "NVIDIA (Rubin), Groq, SambaNova.",
      commoditisation: "Inference silicon price pressure.",
      regulation: "Export controls.",
      supplyChain: "TSMC wafer-scale capacity.",
      valuation: "~$51B on $510M revenue."
    },
    monitor: ["RPO conversion", "Revenue growth", "New customers beyond OpenAI", "Gross margin", "Inference pricing"],
    thesis: {
      bull: "Contracted visibility + wafer-scale differentiation in the inference era.",
      bear: "NVIDIA's response + single-customer reliance; revenue-quality questions."
    },
    competitors: ["NVIDIA", "Groq", "SambaNova", "Tenstorrent"]
  }
},
{
  slug: "groq", name: "Groq", ticker: null, category: "infrastructure", layer: 1, tier: 3,
  status: "Private", hq: "Mountain View CA", founded: 2016, marketCap: "~$6.9B",
  aiExposure: { level: "High", note: "100% AI" },
  primaryFunction: "Ultra-low-latency LPU inference",
  chainPosition: "Infra — Silicon (challenger)",
  advantage: "Deterministic low latency; LPU licensed into NVIDIA's roadmap",
  competitors: ["NVIDIA", "Cerebras", "SambaNova"],
  trajectory: "Stable",
  multiRole: { roles: ["Accelerator silicon (LPU)", "Inference cloud"], primary: "Accelerator silicon (cloud is monetisation)" }
},
{
  slug: "sambanova", name: "SambaNova", ticker: null, category: "infrastructure", layer: 1, tier: 3,
  status: "Private", hq: "Palo Alto CA", founded: 2017, marketCap: "~$11B",
  aiExposure: { level: "High", note: "100% AI" },
  primaryFunction: "Enterprise/sovereign inference (RDU)",
  chainPosition: "Infra — Silicon (challenger)",
  advantage: "On-prem bank distribution (JPMorgan); Intel backing",
  competitors: ["NVIDIA", "Cerebras", "Groq"],
  trajectory: "Increasing",
  multiRole: { roles: ["Accelerator silicon (RDU)", "Inference cloud"], primary: "Accelerator silicon (cloud is monetisation)" }
},
{
  slug: "arista", name: "Arista Networks", ticker: "ANET", category: "infrastructure", layer: 1, tier: 2,
  status: "Public", hq: "Santa Clara CA", founded: 2004, marketCap: "~$238B",
  aiExposure: { level: "High", note: "~28% of 2026 revenue from AI" },
  primaryFunction: "AI Ethernet fabric (scale-out networking)",
  chainPosition: "Infra — Networking",
  advantage: "Ethernet-vs-InfiniBand momentum; 48–49% op margins; $6.2B deferred backlog",
  competitors: ["Cisco", "NVIDIA Spectrum-X", "Broadcom"],
  trajectory: "Increasing"
},
{
  slug: "cisco", name: "Cisco", ticker: "CSCO", category: "infrastructure", layer: 1, tier: 2,
  status: "Public", hq: "San Jose CA", founded: 1984, marketCap: "~$450B",
  aiExposure: { level: "Medium", note: "~6–7% AI revenue; $9B AI orders target" },
  primaryFunction: "AI networking + optics (Silicon One, Acacia)",
  chainPosition: "Infra — Networking",
  advantage: "Incumbency + Silicon One cost structure + Acacia optics verticalization",
  competitors: ["Arista", "NVIDIA", "Juniper"],
  trajectory: "Increasing",
  multiRole: { roles: ["AI networking", "Optics (Acacia)", "Security"], primary: "AI networking" }
},
{
  slug: "astera-labs", name: "Astera Labs", ticker: "ALAB", category: "infrastructure", layer: 1, tier: 2,
  status: "Public", hq: "Santa Clara CA", founded: 2017, marketCap: "~$62B",
  aiExposure: { level: "High", note: "~100% AI-DC connectivity" },
  primaryFunction: "AI connectivity silicon (retimers, fabric switches, CXL)",
  chainPosition: "Infra — Interconnect",
  advantage: "Inside ~90% of AI servers; Scorpio fabric switches",
  competitors: ["Marvell", "Credo", "Broadcom"],
  trajectory: "Increasing"
},
{
  slug: "credo", name: "Credo Technology", ticker: "CRDO", category: "infrastructure", layer: 1, tier: 2,
  status: "Public", hq: "San Jose CA", founded: 2008, marketCap: "~$48B",
  aiExposure: { level: "High", note: "~100% AI connectivity" },
  primaryFunction: "SerDes + AECs (active electrical cables)",
  chainPosition: "Infra — Interconnect",
  advantage: "AEC leadership (half the power of optics); +206% FY26 revenue",
  competitors: ["Astera Labs", "Marvell", "Broadcom"],
  trajectory: "Increasing"
},
{
  slug: "coherent", name: "Coherent", ticker: "COHR", category: "infrastructure", layer: 1, tier: 2,
  status: "Public", hq: "Saxonburg PA", founded: 1966, marketCap: "~$66–83B",
  aiExposure: { level: "High", note: "~75% of revenue DC-linked" },
  primaryFunction: "Optical transceivers for AI clusters (800G/1.6T)",
  chainPosition: "Infra — Optical",
  advantage: "Sole vertically integrated Western transceiver vendor; NVIDIA $2B stake",
  competitors: ["Lumentum", "Innolight", "Eoptolink"],
  trajectory: "Increasing"
},
{
  slug: "lightmatter", name: "Lightmatter", ticker: null, category: "infrastructure", layer: 1, tier: 3,
  status: "Private", hq: "Boston MA", founded: 2017, marketCap: "~$4.4B",
  aiExposure: { level: "High", note: "All photonic interconnect (revenue minimal)" },
  primaryFunction: "Photonic interconnect (co-packaged optics)",
  chainPosition: "Infra — Optical (next-gen)",
  advantage: "Densest CPO roadmap; 3D packaging scale; S-1 filed",
  competitors: ["Broadcom", "Marvell", "Ayar Labs"],
  trajectory: "Increasing"
},
{
  slug: "applied-materials", name: "Applied Materials", ticker: "AMAT", category: "infrastructure", layer: 1, tier: 1,
  status: "Public", hq: "Santa Clara CA", founded: 1967, marketCap: "~$428B",
  aiExposure: { level: "High", note: "~40% of revenue AI-related" },
  primaryFunction: "Semi equipment — deposition, etch, CMP, advanced packaging",
  chainPosition: "Infra — Equipment",
  advantage: "Breadth + ~50% HBM packaging share; hybrid bonding",
  competitors: ["Lam Research", "Tokyo Electron", "Disco"],
  trajectory: "Increasing"
},
{
  slug: "lam-research", name: "Lam Research", ticker: "LRCX", category: "infrastructure", layer: 1, tier: 1,
  status: "Public", hq: "Fremont CA", founded: 1980, marketCap: "~$390B",
  aiExposure: { level: "High", note: "AI memory/logic/packaging drives majority of growth" },
  primaryFunction: "Etch/deposition — ~100% of HBM high-aspect-ratio etch",
  chainPosition: "Infra — Equipment",
  advantage: "HBM etch monopoly (100% share, 40K+ chambers); WFE raised to ~$140B",
  competitors: ["Applied Materials", "Tokyo Electron", "Hitachi"],
  trajectory: "Increasing"
},
{
  slug: "kla", name: "KLA", ticker: "KLAC", category: "infrastructure", layer: 1, tier: 1,
  status: "Public", hq: "Milpitas CA", founded: 1976, marketCap: "~$260B",
  aiExposure: { level: "Medium", note: "Rising — packaging/HBM ~$1.1B direct share" },
  primaryFunction: "Inspection/metrology (process control)",
  chainPosition: "Infra — Equipment",
  advantage: "~50–58% process-control share; 62% GM; recipe-locked fleets",
  competitors: ["Onto Innovation", "Camtek", "Nova"],
  trajectory: "Increasing"
},
{
  slug: "supermicro", name: "Super Micro", ticker: "SMCI", category: "infrastructure", layer: 1, tier: 2,
  status: "Public", hq: "San Jose CA", founded: 1993, marketCap: "~$20B",
  aiExposure: { level: "High", note: "AI servers most of revenue (+123% YoY)" },
  primaryFunction: "NVIDIA rack servers / liquid-cooled systems",
  chainPosition: "Infra — Systems",
  advantage: "Fastest to market per NVIDIA platform; liquid cooling",
  competitors: ["Dell", "HPE", "Foxconn/Quanta"],
  trajectory: "Stable",
  multiRole: { roles: ["AI servers", "Broader IT hardware"], primary: "AI servers" }
},
{
  slug: "dell", name: "Dell Technologies", ticker: "DELL", category: "infrastructure", layer: 1, tier: 2,
  status: "Public", hq: "Round Rock TX", founded: 1984, marketCap: "~$290B",
  aiExposure: { level: "High", note: "AI server revenue +757% YoY" },
  primaryFunction: "AI servers + storage",
  chainPosition: "Infra — Systems",
  advantage: "Global supply chain + hyperscaler sales muscle; $51.3B AI backlog",
  competitors: ["Supermicro", "HPE", "Lenovo"],
  trajectory: "Increasing",
  multiRole: { roles: ["AI servers", "Broader IT hardware"], primary: "AI servers" }
},
{
  slug: "eaton", name: "Eaton", ticker: "ETN", category: "infrastructure", layer: 1, tier: 2,
  status: "Public", hq: "Beachwood OH (Ireland-domiciled)", founded: 1911, marketCap: "~$174B",
  aiExposure: { level: "Medium-High", note: "DC ~65% of Electrical Americas growth" },
  primaryFunction: "Grid-to-chip DC power (switchgear, UPS, busway, liquid cooling)",
  chainPosition: "Infra — Power & cooling",
  advantage: "Grid-side scale; content-per-MW rising to $3.4M; Boyd cooling",
  competitors: ["Schneider Electric", "Vertiv", "ABB"],
  trajectory: "Increasing"
},
{
  slug: "equinix", name: "Equinix", ticker: "EQIX", category: "infrastructure", layer: 1, tier: 2,
  status: "Public", hq: "Redwood City CA", founded: 1998, marketCap: "~$103B",
  aiExposure: { level: "Medium-High", note: "AI bookings record; payoff at inference stage" },
  primaryFunction: "Colocation + interconnection (260+ DCs)",
  chainPosition: "Infra — Data centers",
  advantage: "Interconnection density; record $378M quarterly bookings",
  competitors: ["Digital Realty", "Vantage", "QTS"],
  trajectory: "Stable"
},
{
  slug: "digital-realty", name: "Digital Realty", ticker: "DLR", category: "infrastructure", layer: 1, tier: 2,
  status: "Public", hq: "Austin TX", founded: 2004, marketCap: "~$72B",
  aiExposure: { level: "High", note: "High in absolute terms — wholesale AI leasing" },
  primaryFunction: "Wholesale hyperscale data centre landlord",
  chainPosition: "Infra — Data centers",
  advantage: "Global scale + land/power pipeline; $1.8B backlog",
  competitors: ["Equinix", "Vantage", "QTS"],
  trajectory: "Declining"
},
{
  slug: "vantage", name: "Vantage Data Centers", ticker: null, category: "infrastructure", layer: 1, tier: 3,
  status: "Private", hq: "Denver CO", founded: 2010, marketCap: "n/d",
  aiExposure: { level: "High", note: "~100% AI/cloud build-out" },
  primaryFunction: "Hyperscale DC build-out (DigitalBridge-led)",
  chainPosition: "Infra — Data centers",
  advantage: "Private capital (10–15x equity leverage) + secured power; 2.6GW+ portfolio",
  competitors: ["QTS", "Stack", "Equinix"],
  trajectory: "Increasing"
},

/* ================= LAYER 2 — PLATFORM ================= */
{
  slug: "openai", name: "OpenAI", ticker: null, category: "platform", layer: 2, tier: 1,
  status: "Private", hq: "San Francisco CA", founded: 2015, marketCap: "$852B",
  aiExposure: { level: "High", note: "100% AI — entire business" },
  primaryFunction: "Frontier foundation models (GPT) + ChatGPT + Codex",
  chainPosition: "Platform — Frontier lab",
  advantage: "Brand + ChatGPT distribution + unmatched capital stack ($1.2T+ committed)",
  competitors: ["Anthropic", "Google", "Meta", "xAI"],
  trajectory: "Stable",
  multiRole: { roles: ["Frontier foundation models", "Consumer AI (ChatGPT)", "Dev tools (Codex)", "Compute purchaser (Stargate)"], primary: "Frontier foundation models" },
  scores: { importance: 5, quality: 1, growth: 5, moat: 4, attractiveness: 2 },
  profile: {
    overview: "Frontier lab (GPT), ChatGPT (largest consumer AI distribution), Codex agents; the industry's funding anchor (Stargate, $1.2T+ committed capital).",
    aiRole: "Ecosystem gravity — consumer distribution + enterprise API + the capital machinery the industry revolves around.",
    chainPosition: "Layer 2 (models) with Layer 4 (ChatGPT) attachments; largest compute purchaser.",
    revenueExposure: {
      current: "~$25B annualized run-rate, 100% AI; ~-122% op margin.",
      future: "> $50B by 2027 (est.) — consumer subs, API, agents."
    },
    moat: {
      technology: "Transient — GPT leadership rotates.",
      ecosystem: "ChatGPT distribution + developer mindshare.",
      data: "Consumer usage flywheel.",
      distribution: "The strongest consumer brand in AI.",
      switchingCosts: "Low for APIs (gateways); high for consumer habit."
    },
    growthDrivers: ["ChatGPT subs", "GPT-5.6 price aggressiveness", "Codex", "Stargate capacity", "Enterprise push"],
    risks: {
      competition: "Anthropic (enterprise), Google (distribution), open models.",
      commoditisation: "Weights are commoditising — the core risk.",
      regulation: "June 2026 EO gating releases; export controls.",
      supplyChain: "Compute dependency (Microsoft/Oracle/Stargate).",
      valuation: "~34x run-rate with negative FCF; $350B Amazon capital contingent on IPO/AGI."
    },
    monitor: ["Revenue run-rate", "Consumer subs", "API share", "Burn", "Stargate build-out", "IPO window"],
    thesis: {
      bull: "Distribution + capital make it the platform of the consumer AI era.",
      bear: "The model business is the most commoditisation-exposed in tech; valuation rests on contingent capital."
    },
    competitors: ["Anthropic", "Google", "Meta", "xAI", "DeepSeek"]
  }
},
{
  slug: "anthropic", name: "Anthropic", ticker: null, category: "platform", layer: 2, tier: 1,
  status: "Private", hq: "San Francisco CA", founded: 2021, marketCap: "$965B",
  aiExposure: { level: "High", note: "100% AI — ~80% enterprise" },
  primaryFunction: "Frontier foundation models (Claude) + Claude Code",
  chainPosition: "Platform — Frontier lab",
  advantage: "Enterprise preference (~40% of LLM spend); Claude Code ecosystem; safety brand",
  competitors: ["OpenAI", "Google", "Meta", "xAI"],
  trajectory: "Increasing",
  multiRole: { roles: ["Frontier foundation models", "Coding agents (Claude Code)", "Enterprise AI"], primary: "Frontier foundation models" },
  scores: { importance: 5, quality: 1, growth: 5, moat: 4, attractiveness: 3 },
  profile: {
    overview: "Enterprise-first frontier lab (Claude); Claude Code is the leading agentic coding product (~$2.5B ARR); ~40% of enterprise LLM spend; S-1 filed June 2026, IPO possible as early as Oct 2026.",
    aiRole: "The enterprise platform of the model layer — the lab whose distribution converts models into durable value.",
    chainPosition: "Layer 2 (models + coding agents + enterprise AI).",
    revenueExposure: {
      current: "~$47B annualized gross run-rate (inflated by cloud-reseller pass-through — quality flag); ~80% enterprise.",
      future: "Growing — enterprise spend share, Claude Code, IPO 2026."
    },
    moat: {
      technology: "Claude quality (Fable 5 led SWE-bench Pro at 80.3%).",
      ecosystem: "Claude Code ecosystem + agent workflows.",
      data: "Enterprise usage data.",
      distribution: "8 of Fortune 10; enterprise trust + safety brand.",
      switchingCosts: "High for embedded agents."
    },
    growthDrivers: ["Enterprise adoption", "Claude Code", "Amazon/Google compute deals (5GW Trainium; $200B Google Cloud)", "IPO"],
    risks: {
      competition: "OpenAI, Google, Meta.",
      commoditisation: "Model prices falling.",
      regulation: "Export controls (Claude Fable 5 suspended June 2026).",
      supplyChain: "Buys compute from rival xAI (~$1.25B/mo); gross run-rate inflation.",
      valuation: "~20.5x gross with negative FCF."
    },
    monitor: ["Revenue quality (net vs gross)", "Enterprise spend share", "Claude Code ARR", "Compute commitments", "IPO pricing"],
    thesis: {
      bull: "The enterprise platform of AI — coding agents + trust compound.",
      bear: "The 20.5x gross multiple compresses when the reseller pass-through is unwound in the S-1."
    },
    competitors: ["OpenAI", "Google", "Meta", "xAI", "Mistral"]
  }
},
{
  slug: "alphabet", name: "Alphabet (Google)", ticker: "GOOGL", category: "platform", layer: 2, tier: 1,
  status: "Public", hq: "Mountain View CA", founded: 1998, marketCap: "~$4.5T",
  aiExposure: { level: "High", note: "High for AI narrative (Cloud +82%); low-medium of total revenue" },
  primaryFunction: "Foundation models (Gemini) + AI research + TPU + Google Cloud",
  chainPosition: "Platform — Frontier lab (full-stack)",
  advantage: "DeepMind + 2B-device distribution + TPUs + Apple Siri deal",
  competitors: ["OpenAI", "Anthropic", "Microsoft", "Meta"],
  trajectory: "Increasing",
  multiRole: { roles: ["Foundation models (Gemini)", "AI cloud (Google Cloud + TPU)", "AI research (DeepMind)", "Consumer AI (Gemini app, Android, Siri licensing)"], primary: "Foundation models + AI research (the full-stack integrator)" },
  scores: { importance: 5, quality: 4, growth: 5, moat: 4, attractiveness: 4 },
  profile: {
    overview: "The only full-stack AI company: Gemini models, DeepMind research, TPU silicon, Google Cloud (+82% — fastest hyperscaler), ~1B-user Gemini app, Apple Siri licensing.",
    aiRole: "The vertically integrated platform — owns model, chip, cloud, and consumer surface simultaneously.",
    chainPosition: "Layers 2–4 simultaneously (models + TPU + cloud + consumer + on-device).",
    revenueExposure: {
      current: "Google Cloud $24.8B/quarter (+82%); GenAI product revenue +800% YoY; AI still a minority of Alphabet revenue (ad business funds it).",
      future: "Rising — AI Mode monetization, TPU external sales, Siri economics."
    },
    moat: {
      technology: "DeepMind + TPU cost structure.",
      ecosystem: "Android/Search/Workspace distribution.",
      data: "The largest behavioural dataset in AI.",
      distribution: "2B+ devices; ~950M MAU Gemini app.",
      switchingCosts: "High for Search/Android defaults."
    },
    growthDrivers: ["Cloud share gains", "Gemini agent adoption", "Apple Siri deal (up to $5B/yr)", "TPU third-party capacity (Blackstone JV)"],
    risks: {
      competition: "OpenAI/Anthropic at model layer.",
      commoditisation: "AI search could disrupt its own ad economics.",
      regulation: "Antitrust + AI policy.",
      supplyChain: "TPU on TSMC; compute concentration.",
      valuation: "FCF negative on capex ($195–205B 2026)."
    },
    monitor: ["Cloud growth/margins", "Gemini app MAU", "AI Mode ad monetization", "TPU external sales", "Siri ramp"],
    thesis: {
      bull: "Full-stack integration wins the agent era; Cloud is the growth engine.",
      bear: "AI search cannibalises the ad model faster than AI Mode replaces it."
    },
    competitors: ["OpenAI", "Anthropic", "Microsoft", "Amazon", "Meta"]
  }
},
{
  slug: "meta", name: "Meta", ticker: "META", category: "disruptors", layer: 2, tier: 2,
  status: "Public", hq: "Menlo Park CA", founded: null, marketCap: "n/d",
  aiExposure: { level: "Low-Medium", note: "AI is a feature/cost center; direct revenue nascent" },
  primaryFunction: "Foundation models (Llama open / Muse closed) + consumer AI apps",
  chainPosition: "Platform — Frontier lab (dual-track) + consumer apps",
  advantage: "Largest distribution on Earth (3B+ daily reach); ad cross-subsidy; 49% of Scale AI",
  competitors: ["OpenAI", "Google", "xAI", "Qwen/DeepSeek"],
  trajectory: "Stable",
  multiRole: { roles: ["Foundation models (Llama open / Muse closed)", "Consumer AI apps", "AI research (FAIR/MSL)"], primary: "Foundation models (dual-track open/closed)" },
  scores: { importance: 4, quality: 3, growth: 3, moat: 4, attractiveness: 3 },
  profile: {
    overview: "Consumer AI across FB/IG/WhatsApp (3B+ daily reach), open Llama + closed Muse Spark (Meta Superintelligence Labs), 49% of Scale AI, Ray-Ban glasses; 2026 capex $115–135B.",
    aiRole: "The distribution disruptor — the largest installed base on Earth monetising AI via ads; dual-track open/closed model strategy that reshapes both the open ecosystem and the frontier.",
    chainPosition: "Layer 2 (models) + Layer 4 (consumer apps) + Layer 1 (compute buyer).",
    revenueExposure: {
      current: "Low-Medium — AI is a feature/cost center; Muse API in private preview.",
      future: "Rising — Muse shopping-mode ads, AI subscriptions, enterprise API."
    },
    moat: {
      technology: "Muse (frontier-class health benchmarks) + Llama open ecosystem.",
      ecosystem: "The largest distribution network.",
      data: "The largest consumer behaviour dataset.",
      distribution: "3B+ daily reach.",
      switchingCosts: "High for users (network effects)."
    },
    growthDrivers: ["Muse adoption", "Ad AI monetization", "Enterprise API", "Scale AI integration (Wang as chief AI officer)"],
    risks: {
      competition: "Qwen (69% of open derivatives vs Llama 11%), OpenAI/Google.",
      commoditisation: "Open-model moat lost to China.",
      regulation: "EU/US AI rules.",
      supplyChain: "Compute dependency; $115–135B capex.",
      valuation: "Capex with no AI P&L."
    },
    monitor: ["Muse adoption + API GA", "AI-attributed ad revenue", "Capex efficiency", "Llama derivative share"],
    thesis: {
      bull: "Distribution converts into the consumer-AI default.",
      bear: "The largest AI capex in the industry with the least AI monetization — if Muse stalls, the capex is a write-off."
    },
    competitors: ["OpenAI", "Google", "xAI", "Qwen/DeepSeek"]
  }
},
{
  slug: "xai", name: "xAI", ticker: null, category: "disruptors", layer: 2, tier: 2,
  status: "Private", hq: "SF Bay Area CA", founded: 2023, marketCap: "~$250B",
  aiExposure: { level: "High", note: "~$26B+ run-rate (majority compute rentals); 2025 loss ~$6.4B" },
  primaryFunction: "Frontier models (Grok) + Colossus compute + X distribution",
  chainPosition: "Platform — Frontier lab + compute landlord",
  advantage: "Vertical integration (X/Tesla/SpaceX); the industry's most-sought excess compute",
  competitors: ["OpenAI", "Anthropic", "Google", "Meta"],
  trajectory: "Increasing",
  multiRole: { roles: ["Frontier models (Grok)", "AI compute landlord (Colossus rentals)", "Consumer assistant (X)"], primary: "Frontier models (compute rental is the revenue driver)" },
  scores: { importance: 4, quality: 2, growth: 5, moat: 3, attractiveness: 3 },
  profile: {
    overview: "Grok frontier models + Colossus compute (~1M+ H100-equivalents, ~2GW) + X distribution (~600M MAU) + Tesla; acquired by SpaceX Feb 2026 at ~$250B.",
    aiRole: "The vertical-integration disruptor — the only lab whose compute, not model, is its biggest revenue driver (rentals to Anthropic ~$1.25B/mo, Google ~$920M/mo).",
    chainPosition: "Layers 2–4 (models + compute landlord + consumer) with SpaceX capital.",
    revenueExposure: {
      current: "~$26B+ run-rate (majority compute rentals); 2025 loss ~$6.4B.",
      future: "Rising — Grok 5 (~6T params), Colossus II, subscriptions."
    },
    moat: {
      technology: "Colossus build-out speed.",
      ecosystem: "X + Tesla + SpaceX integration.",
      data: "X data.",
      distribution: "~600M MAU.",
      switchingCosts: "Contractual compute rentals."
    },
    growthDrivers: ["Compute rental contracts", "Grok 5", "SuperGrok subs", "Grok Build coding agent"],
    risks: {
      competition: "OpenAI, Anthropic, Google, Meta.",
      commoditisation: "Grok API pricing.",
      regulation: "X platform scrutiny.",
      supplyChain: "Power (5 × 380MW Doosan turbines) + NVIDIA Rubin.",
      valuation: "~$250B on loss-making operations."
    },
    monitor: ["Compute-rental contracts", "Colossus II milestones", "Grok 5 delivery", "X MAU monetization"],
    thesis: {
      bull: "The industry's compute landlord + vertically integrated challenger.",
      bear: "Execution chaos (\"being rebuilt\"); key-person dependence (Musk); pro-cyclical rental model."
    },
    competitors: ["OpenAI", "Anthropic", "Google", "Meta", "CoreWeave", "Oracle"]
  }
},
{
  slug: "together-ai", name: "Together AI", ticker: null, category: "platform", layer: 2, tier: 3,
  status: "Private", hq: "Menlo Park CA", founded: 2022, marketCap: "$8.3B",
  aiExposure: { level: "High", note: "AI infrastructure is the whole business" },
  primaryFunction: "Open-model training + serving (ATLAS engine)",
  chainPosition: "Platform — Open-model inference",
  advantage: "6–60x cost savings vs closed labs; $1.15B bookings annualized",
  competitors: ["Fireworks AI", "Baseten", "Groq"],
  trajectory: "Increasing"
},
{
  slug: "fireworks-ai", name: "Fireworks AI", ticker: null, category: "platform", layer: 2, tier: 3,
  status: "Private", hq: "Menlo Park CA", founded: 2022, marketCap: "$17.5B",
  aiExposure: { level: "High", note: "AI infrastructure is the whole business" },
  primaryFunction: "Enterprise inference on open models (>40T tokens/day)",
  chainPosition: "Platform — Open-model inference",
  advantage: ">40T tokens/day; 5–10x cheaper; Microsoft distribution deal",
  competitors: ["Together AI", "Baseten", "hyperscalers"],
  trajectory: "Increasing"
},
{
  slug: "hugging-face", name: "Hugging Face", ticker: null, category: "platform", layer: 2, tier: 3,
  status: "Private", hq: "New York NY", founded: 2016, marketCap: "$7–20B (conflicting)",
  aiExposure: { level: "Medium", note: "Hub is pre-revenue-scale infrastructure; inference is the bet" },
  primaryFunction: "Open-model hub + enterprise inference",
  chainPosition: "Platform — Model hub",
  advantage: "Neutral gravity well of the open-weights ecosystem",
  competitors: ["GitHub Models", "Together AI", "Bedrock"],
  trajectory: "Stable"
},
{
  slug: "scale-ai", name: "Scale AI", ticker: null, category: "platform", layer: 2, tier: 2,
  status: "Private", hq: "San Francisco CA", founded: 2016, marketCap: "$25–30B",
  aiExposure: { level: "High", note: "100% AI-adjacent; indirect (follows lab spend)" },
  primaryFunction: "AI data infrastructure (annotation, synthetic data, RLHF)",
  chainPosition: "Platform — Data infrastructure",
  advantage: "Embedded with every frontier lab + DoD franchise",
  competitors: ["Surge AI", "Labelbox", "Appen"],
  trajectory: "Increasing"
},

/* ================= LAYER 3 — AI CLOUD ================= */
{
  slug: "microsoft", name: "Microsoft", ticker: "MSFT", category: "platform", layer: 3, tier: 1,
  status: "Public", hq: "Redmond WA", founded: 1975, marketCap: "~$3.6T",
  aiExposure: { level: "High", note: "AI >11pts of Azure growth; OpenAI passthrough ~$24B FY26" },
  primaryFunction: "Hyperscale AI cloud (Azure AI) + Copilot + OpenAI channel",
  chainPosition: "AI Cloud — Hyperscaler (+ apps + silicon attachments)",
  advantage: "Largest OpenAI channel; $678B RPO; Maia silicon; enterprise workflow distribution",
  competitors: ["AWS", "Google Cloud", "Oracle", "ServiceNow"],
  trajectory: "Stable",
  multiRole: { roles: ["AI cloud (Azure AI)", "AI applications (Copilot, GitHub)", "OpenAI platform distribution", "Silicon (Maia)"], primary: "AI cloud (hyperscaler)" },
  scores: { importance: 5, quality: 5, growth: 4, moat: 5, attractiveness: 4 },
  profile: {
    overview: "Azure AI + Copilot everywhere + OpenAI distribution economics + Maia silicon; the largest AI-cloud tenant chokepoint.",
    aiRole: "Monetises AI both upstream (Azure compute, Maia, Stargate) and downstream (Copilot seats, GitHub, Dynamics).",
    chainPosition: "Layer 3 (cloud) with Layer 4 (Copilot apps) and Layer 2 (OpenAI channel) attachments.",
    revenueExposure: {
      current: "AI >11pts of Azure's +43%; OpenAI passthrough ~$24B FY26; Copilot 30M+ paid seats.",
      future: "Rising — commercial RPO $678B (+84%), seat adds doubling QoQ."
    },
    moat: {
      technology: "Maia silicon (18A).",
      ecosystem: "OpenAI exclusivity + enterprise workflow distribution.",
      data: "M365 enterprise telemetry.",
      distribution: "M365 base (400M seats).",
      switchingCosts: "Extreme — enterprise workflow embedding."
    },
    growthDrivers: ["Azure AI consumption", "Copilot monetization curve", "OpenAI growth passthrough", "Agents (Copilot Studio)"],
    risks: {
      competition: "AWS, Google, ServiceNow/Salesforce agents.",
      commoditisation: "Agent pricing pressure on seats.",
      regulation: "Antitrust scrutiny of AI partnerships.",
      supplyChain: "Capacity constraints; GPU allocation.",
      valuation: "OpenAI concentration (~$24B FY26 revenue)."
    },
    monitor: ["Azure AI growth %", "Copilot seat adds", "RPO growth", "Capex vs FCF", "OpenAI contribution"],
    thesis: {
      bull: "The deepest contracted backlog in software ($678B) + the Copilot land-grab.",
      bear: "OpenAI concentration + agents commoditise the seat economics the multiple assumes."
    },
    competitors: ["AWS", "Google Cloud", "Oracle", "ServiceNow", "Salesforce"]
  }
},
{
  slug: "amazon", name: "Amazon (AWS)", ticker: "AMZN", category: "platform", layer: 3, tier: 1,
  status: "Public", hq: "Seattle WA", founded: 1994, marketCap: "~$3.1T",
  aiExposure: { level: "High", note: "AI >$25B run-rate (~15% of AWS)" },
  primaryFunction: "Hyperscale AI cloud (AWS/Bedrock) + Trainium silicon",
  chainPosition: "AI Cloud — Hyperscaler (+ silicon)",
  advantage: "Trainium sold out through 2027; Anthropic channel; 39.4% op margin",
  competitors: ["Microsoft", "Google Cloud", "Oracle", "CoreWeave"],
  trajectory: "Increasing",
  multiRole: { roles: ["AI cloud (AWS/Bedrock)", "Custom silicon (Trainium)", "AI applications"], primary: "AI cloud (hyperscaler)" },
  scores: { importance: 5, quality: 5, growth: 4, moat: 4, attractiveness: 4 },
  profile: {
    overview: "AWS AI infrastructure (Bedrock, SageMaker) + Trainium custom silicon + the Anthropic channel — the second AI hyperscaler by silicon + distribution.",
    aiRole: "AI infrastructure-as-a-service: Trainium (sold out through 2027; Anthropic up to 5GW, OpenAI ~2GW) + Bedrock model gateway + Anthropic revenue share.",
    chainPosition: "Layer 3 (cloud) + Layer 1 (custom silicon) + Layer 2 (model distribution).",
    revenueExposure: {
      current: "AI >$25B annualized run-rate (~15% of AWS; triple-digit growth); AWS Q2 +37% at 39.4% op margin.",
      future: "Rising — Trainium ramp, Bedrock usage, Anthropic (~$25B by 2027 est.)."
    },
    moat: {
      technology: "Trainium + Inferentia vertical integration.",
      ecosystem: "Bedrock multi-model gateway + Anthropic exclusivity.",
      data: "Cloud enterprise base.",
      distribution: "AWS enterprise base.",
      switchingCosts: "High — cloud data gravity."
    },
    growthDrivers: ["AI consumption", "Trainium price/perf (30–40% per-gen gains)", "Anthropic growth", "Project Rainier (500K+ Trainium2)"],
    risks: {
      competition: "Azure, Google, Oracle.",
      commoditisation: "GPU rental pricing.",
      regulation: "Cloud/AI policy.",
      supplyChain: "Trainium on TSMC; HBM.",
      valuation: "Fair vs growth."
    },
    monitor: ["AWS AI run-rate", "Trainium shipments/utilization", "Bedrock spend", "Anthropic revenue share", "Op margin"],
    thesis: {
      bull: "Silicon-scale integration converts AI capex into margin (39.4% held).",
      bear: "Trainium software gap caps custom-silicon share; Anthropic concentration."
    },
    competitors: ["Microsoft", "Google", "Oracle", "CoreWeave"]
  }
},
{
  slug: "oracle", name: "Oracle", ticker: "ORCL", category: "platform", layer: 3, tier: 2,
  status: "Public", hq: "Austin TX", founded: 1977, marketCap: "~$423B",
  aiExposure: { level: "High", note: "The business IS AI infrastructure now" },
  primaryFunction: "AI GPU capacity (OCI) — Stargate contracts",
  chainPosition: "AI Cloud — Hyperscaler (GPU capacity)",
  advantage: "First-mover GPU contracts (Stargate); $638B backlog — and the credit risk",
  competitors: ["AWS", "Azure", "Google Cloud"],
  trajectory: "Declining",
  multiRole: { roles: ["AI GPU capacity (OCI)", "Enterprise applications with AI"], primary: "AI cloud (GPU capacity)" }
},
{
  slug: "ibm", name: "IBM", ticker: "IBM", category: "platform", layer: 3, tier: 2,
  status: "Public", hq: "Armonk NY", founded: 1911, marketCap: "~$224B",
  aiExposure: { level: "Medium", note: "Real but services-weighted (~75% consulting)" },
  primaryFunction: "Enterprise AI platform (watsonx) + agent governance",
  chainPosition: "AI Cloud/Apps — Regulated enterprise",
  advantage: "Vendor-neutral trust + agent governance (watsonx Orchestrate)",
  competitors: ["Microsoft", "Accenture", "Palantir"],
  trajectory: "Stable",
  multiRole: { roles: ["Enterprise AI platform (watsonx)", "AI consulting"], primary: "Enterprise AI platform" }
},
{
  slug: "coreweave", name: "CoreWeave", ticker: "CRWV", category: "disruptors", layer: 3, tier: 2,
  status: "Public", hq: "Roseland NJ", founded: 2017, marketCap: "~$49B",
  aiExposure: { level: "High", note: "~100% AI; MSFT 62% of revenue" },
  primaryFunction: "GPU cloud (pure play) — $99.4B backlog",
  chainPosition: "AI Cloud — GPU cloud",
  advantage: "First-mover capacity; OpenAI equity stake (10%); multi-year contracts",
  competitors: ["Nebius", "Lambda", "Crusoe", "hyperscalers"],
  trajectory: "Stable",
  scores: { importance: 4, quality: 2, growth: 5, moat: 3, attractiveness: 4 },
  profile: {
    overview: "The pure-play GPU cloud — multi-year contracted NVIDIA capacity for frontier labs and enterprises; $99.4B backlog; 10% OpenAI equity stake.",
    aiRole: "The independent compute challenger to hyperscalers — and the template for GPU-cloud public markets.",
    chainPosition: "Layer 3 — AI-native cloud.",
    revenueExposure: {
      current: "~100% AI; ~98% of revenue from Microsoft (62%), OpenAI, Meta, Anthropic.",
      future: "Rising with backlog conversion; Q2 earnings Aug 11, 2026 are the bellwether."
    },
    moat: {
      technology: "Kubernetes-first cloud.",
      ecosystem: "OpenAI relationship (equity + ~$22.4B commitments).",
      data: "N/A.",
      distribution: "Contracted hyperscaler-scale deals.",
      switchingCosts: "High — multi-year contracts."
    },
    growthDrivers: ["Backlog conversion", "OpenAI expansion", "Capacity build-out"],
    risks: {
      competition: "Hyperscaler internal clouds.",
      commoditisation: "GPU rental price war.",
      regulation: "Export controls on NVIDIA supply.",
      supplyChain: "NVIDIA allocation; debt-funded capex.",
      valuation: "Volatile — round-tripped $60→$153→$90."
    },
    monitor: ["Backlog", "Customer diversification", "Utilization", "Gross margin", "Financing costs", "Q2 print"],
    thesis: {
      bull: "The pure-play expression of AI compute demand at a discount after the drawdown.",
      bear: "Hyperscaler internalization + a single OpenAI/Microsoft pause breaks the model."
    },
    competitors: ["Nebius", "Lambda", "Crusoe", "AWS/Azure/Google"]
  }
},
{
  slug: "nebius", name: "Nebius", ticker: "NBIS", category: "platform", layer: 3, tier: 2,
  status: "Public", hq: "Amsterdam (Nasdaq-listed)", founded: 2023, marketCap: "~$55B",
  aiExposure: { level: "High", note: "Very High — +841% YoY AI Cloud revenue" },
  primaryFunction: "AI-native GPU cloud (owned power ~4GW)",
  chainPosition: "AI Cloud — GPU cloud",
  advantage: "Yandex engineering heritage + owned power",
  competitors: ["CoreWeave", "Lambda", "Crusoe"],
  trajectory: "Increasing"
},
{
  slug: "lambda", name: "Lambda", ticker: null, category: "platform", layer: 3, tier: 3,
  status: "Private", hq: "San Jose CA", founded: 2012, marketCap: "~$6–9B",
  aiExposure: { level: "High", note: "Very High — pure play" },
  primaryFunction: "GPU cloud + hardware (IPO H2 2026)",
  chainPosition: "AI Cloud — GPU cloud",
  advantage: "Strongest developer brand; Microsoft infrastructure deal",
  competitors: ["CoreWeave", "Nebius", "Crusoe"],
  trajectory: "Increasing"
},
{
  slug: "crusoe", name: "Crusoe Energy", ticker: null, category: "platform", layer: 3, tier: 3,
  status: "Private", hq: "Denver CO", founded: 2018, marketCap: "~$24B (secondary marks)",
  aiExposure: { level: "High", note: "Very High — ~100% AI" },
  primaryFunction: "GPU cloud + power self-supply (gas-to-compute)",
  chainPosition: "AI Cloud — GPU cloud (power-backed)",
  advantage: "Gas-to-compute energy moat; 4.9GW contracted",
  competitors: ["CoreWeave", "Nebius", "Vantage"],
  trajectory: "Increasing"
},
{
  slug: "baseten", name: "Baseten", ticker: null, category: "platform", layer: 3, tier: 3,
  status: "Private", hq: "San Francisco CA", founded: 2019, marketCap: "$13B",
  aiExposure: { level: "High", note: "Very High — ~20x YoY revenue" },
  primaryFunction: "Inference cloud (model routing)",
  chainPosition: "AI Cloud — Inference",
  advantage: "Multi-cloud arbitrage; open-model cost optimization",
  competitors: ["Together AI", "Fireworks AI", "Modal"],
  trajectory: "Increasing"
},
{
  slug: "modal", name: "Modal Labs", ticker: null, category: "platform", layer: 3, tier: 3,
  status: "Private", hq: "New York NY", founded: 2021, marketCap: "$4.65B",
  aiExposure: { level: "High", note: "Very High — pure-play serverless AI compute" },
  primaryFunction: "Serverless GPU compute",
  chainPosition: "AI Cloud — Inference",
  advantage: "Developer UX; rides AI coding agents (Claude Code)",
  competitors: ["Baseten", "RunPod", "Together AI"],
  trajectory: "Increasing"
},

/* ================= LAYER 4 — APPLICATIONS ================= */
{
  slug: "salesforce", name: "Salesforce", ticker: "CRM", category: "applications", layer: 4, tier: 2,
  status: "Public", hq: "San Francisco CA", founded: 1999, marketCap: "~$158B",
  aiExposure: { level: "Medium", note: "Agentforce ~3% of FY26 revenue" },
  primaryFunction: "Agentic CRM (Agentforce)",
  chainPosition: "Apps — Enterprise software",
  advantage: "CRM category ownership + Data Cloud; AWU consumption pricing",
  competitors: ["ServiceNow", "HubSpot", "Sierra"],
  trajectory: "Stable",
  multiRole: { roles: ["CRM SaaS", "Agentic AI (Agentforce)"], primary: "Agentic AI applications" }
},
{
  slug: "servicenow", name: "ServiceNow", ticker: "NOW", category: "applications", layer: 4, tier: 2,
  status: "Public", hq: "Santa Clara CA", founded: 2004, marketCap: "~$129B",
  aiExposure: { level: "High", note: "AI ACV >$1B (~6–7% of subs), growing 100%+" },
  primaryFunction: "Agentic workflow platform (Now Assist, AI Control Tower)",
  chainPosition: "Apps — Enterprise software (agent platform)",
  advantage: "Workflow system-of-record + agent governance; 25–40% Pro Plus premium",
  competitors: ["Salesforce", "Microsoft", "UiPath"],
  trajectory: "Increasing",
  scores: { importance: 4, quality: 5, growth: 5, moat: 4, attractiveness: 4 },
  profile: {
    overview: "Workflow platform (ITSM/CSM) + agentic AI: Now Assist, AI Control Tower, the \"Universal Agentic Network.\"",
    aiRole: "The benchmark for agentic-software monetization — AI ACV >$1B and doubling; governance is the differentiator.",
    chainPosition: "Layer 4 — enterprise AI applications (agent platform).",
    revenueExposure: {
      current: "AI ACV >$1B vs ~$15.8B subscription revenue (~6–7%), growing 100%+; revenue +24%.",
      future: "Consumption hockey-stick expected H2 2026."
    },
    moat: {
      technology: "AI Control Tower governance.",
      ecosystem: "Workflow system-of-record.",
      data: "Enterprise workflow data.",
      distribution: "Installed base (~3,000 Now Assist customers at 25–40% premium).",
      switchingCosts: "High — workflows embedded."
    },
    growthDrivers: ["Agent production deployments (up 9x in 9 months)", "Pro Plus premium", "Assist-pack consumption (+55x since May 2024)"],
    risks: {
      competition: "Salesforce Agentforce, Microsoft Copilot Studio.",
      commoditisation: "Agents commoditising basic workflows.",
      regulation: "AI governance rules.",
      supplyChain: "Model API dependency.",
      valuation: "Premium but growth-backed."
    },
    monitor: ["AI ACV", "Pro Plus attach %", "Agent production customers", "RPO ($29B)", "Consumption units"],
    thesis: {
      bull: "The cleanest large-cap agent monetisation + governance moat.",
      bear: "Hyperscaler-native agents erode the workflow layer."
    },
    competitors: ["Salesforce", "Microsoft", "UiPath"]
  }
},
{
  slug: "adobe", name: "Adobe", ticker: "ADBE", category: "applications", layer: 4, tier: 3,
  status: "Public", hq: "San Jose CA", founded: 1982, marketCap: "~$105B",
  aiExposure: { level: "Medium", note: "AI drives engagement; no clean AI revenue line" },
  primaryFunction: "Generative creative AI (Firefly)",
  chainPosition: "Apps — Enterprise software (creative)",
  advantage: "Creative-suite ubiquity + proprietary training data",
  competitors: ["Midjourney", "OpenAI", "Canva", "Google"],
  trajectory: "Declining"
},
{
  slug: "palantir", name: "Palantir", ticker: "PLTR", category: "applications", layer: 4, tier: 2,
  status: "Public", hq: "Denver CO", founded: 2003, marketCap: "~$413B",
  aiExposure: { level: "High", note: "AIP = 49% of US commercial revenue" },
  primaryFunction: "AI deployment platform (AIP) — sovereign AI",
  chainPosition: "Apps — Enterprise software (deployment)",
  advantage: "Ontology moat + defence relationships + sovereign-AI positioning",
  competitors: ["IBM", "Snowflake", "Accenture"],
  trajectory: "Increasing",
  scores: { importance: 4, quality: 4, growth: 5, moat: 4, attractiveness: 2 },
  profile: {
    overview: "AIP (AI Platform) + Foundry ontology for enterprise/government AI deployment; the \"sovereign AI\" champion.",
    aiRole: "The deployment platform for defence/government and regulated enterprises that distrust frontier labs.",
    chainPosition: "Layer 4 — enterprise AI deployment platform.",
    revenueExposure: {
      current: "AIP = 49% of US commercial revenue; total revenue +93% ($1.94B/quarter); FY26 guide $8.15B (+82%).",
      future: "Rising — sovereign-AI demand, TCV +153%."
    },
    moat: {
      technology: "Ontology data integration.",
      ecosystem: "Defence relationships.",
      data: "Mission-critical customer data.",
      distribution: "Bootcamp-led deployment.",
      switchingCosts: "Very high — mission-critical embedding."
    },
    growthDrivers: ["US government + sovereign AI", "AIP land-and-expand", "New-industry bootcamps"],
    risks: {
      competition: "IBM, Accenture, hyperscaler agents.",
      commoditisation: "Platform bundling.",
      regulation: "Government procurement cycles.",
      supplyChain: "Model-layer dependency.",
      valuation: "~50x forward — the biggest multiple risk in large-cap software."
    },
    monitor: ["US commercial growth", "AIP deal sizes", "TCV/RDV", "Bootcamp→production conversion", "Government budget cycles"],
    thesis: {
      bull: "The ontology moat + sovereign-AI tailwind compound for years.",
      bear: "50x forward prices permanence; hyperscalers bundle the same capability."
    },
    competitors: ["IBM", "Snowflake", "Accenture", "hyperscaler agent platforms"]
  }
},
{
  slug: "snowflake", name: "Snowflake", ticker: "SNOW", category: "applications", layer: 4, tier: 2,
  status: "Public", hq: "Bozeman MT", founded: 2012, marketCap: "~$97B",
  aiExposure: { level: "Medium", note: "AI drives guidance raises; no separate AI line" },
  primaryFunction: "Data cloud + AI layer (Cortex, CoCo coding agent)",
  chainPosition: "Apps — Data + AI platform",
  advantage: "Data gravity + governance; CoCo fastest adoption ever (7,100 accounts)",
  competitors: ["Databricks", "Microsoft Fabric", "AWS"],
  trajectory: "Increasing",
  multiRole: { roles: ["Data platform", "AI/agent layer"], primary: "Data + AI platform" }
},
{
  slug: "databricks", name: "Databricks", ticker: null, category: "applications", layer: 4, tier: 2,
  status: "Private", hq: "San Francisco CA", founded: 2013, marketCap: "$188B",
  aiExposure: { level: "High", note: "AI products >$1.4B annualized" },
  primaryFunction: "Data + AI platform (lakehouse, model serving)",
  chainPosition: "Apps — Data + AI platform",
  advantage: "Best-in-class data+AI engineering gravity; 20,000+ customers",
  competitors: ["Snowflake", "Microsoft Fabric", "BigQuery"],
  trajectory: "Increasing",
  multiRole: { roles: ["Data platform", "AI/agent layer"], primary: "Data + AI platform" }
},
{
  slug: "cursor", name: "Cursor (Anysphere)", ticker: null, category: "applications", layer: 4, tier: 2,
  status: "Private", hq: "San Francisco CA", founded: 2022, marketCap: "~$60B (SpaceX deal)",
  aiExposure: { level: "High", note: "100% AI — per-seat subs" },
  primaryFunction: "AI-native code editor (agentic coding)",
  chainPosition: "Apps — Developer tools",
  advantage: "Best-in-class coding UX + Fortune 500 penetration; ARR $2.6–4B+",
  competitors: ["GitHub Copilot", "Claude Code", "OpenAI Codex", "Cognition", "Replit"],
  trajectory: "Stable",
  scores: { importance: 4, quality: 4, growth: 5, moat: 3, attractiveness: 3 },
  profile: {
    overview: "The AI-native code editor — the fastest-growing dev tool in history (ARR $2.6–4B+, >half of Fortune 500, >1M DAU); SpaceX acquisition ~$60B (closing Q3 2026).",
    aiRole: "The leading edge of AI adoption in software development — where agentic coding becomes standard practice.",
    chainPosition: "Layer 4 — developer tools.",
    revenueExposure: {
      current: "100% AI (per-seat subs $20–200/mo).",
      future: "Rising — agent usage, enterprise expansion; integrated into SpaceX/xAI stack."
    },
    moat: {
      technology: "Code-intelligence UX.",
      ecosystem: "Dev mindshare.",
      data: "Coding-telemetry flywheel.",
      distribution: "Fortune 500 penetration.",
      switchingCosts: "High for teams (codebase embedding)."
    },
    growthDrivers: ["Agentic coding adoption", "Seat expansion", "Enterprise licensing"],
    risks: {
      competition: "Claude Code (share fell 41%→26%), GitHub Copilot, Codex.",
      commoditisation: "Thin layer over frontier APIs.",
      regulation: "N/A.",
      supplyChain: "Heavy model dependency (Anthropic).",
      valuation: "$60B deal — model-dependency priced lightly."
    },
    monitor: ["ARR", "Share vs Claude Code", "Seat adds", "Deal close", "Agent completion quality"],
    thesis: {
      bull: "The default surface of agentic coding; distribution at SpaceX scale.",
      bear: "Its own model suppliers (Anthropic/OpenAI) are its competitors — share is already flowing to Claude Code."
    },
    competitors: ["Claude Code", "GitHub Copilot", "OpenAI Codex", "Cognition", "Replit"]
  }
},
{
  slug: "cognition", name: "Cognition (Devin)", ticker: null, category: "applications", layer: 4, tier: 3,
  status: "Private", hq: "New York NY", founded: 2023, marketCap: "$26B",
  aiExposure: { level: "High", note: "100% AI labour" },
  primaryFunction: "Autonomous coding agent (Devin)",
  chainPosition: "Apps — Developer tools",
  advantage: "Autonomy-first; ARR 13x in a year ($492M); Goldman/NASA/US Army",
  competitors: ["Cursor", "Claude Code", "OpenAI Codex"],
  trajectory: "Increasing"
},
{
  slug: "replit", name: "Replit", ticker: null, category: "applications", layer: 4, tier: 3,
  status: "Private", hq: "San Francisco CA", founded: 2016, marketCap: "$9B",
  aiExposure: { level: "High", note: "100% AI — agent product" },
  primaryFunction: "AI app development (\"vibe coding\")",
  chainPosition: "Apps — Developer tools",
  advantage: "Largest browser-IDE community (50M users)",
  competitors: ["Cursor", "GitHub Copilot", "Lovable"],
  trajectory: "Increasing"
},
{
  slug: "perplexity", name: "Perplexity", ticker: null, category: "applications", layer: 4, tier: 3,
  status: "Private", hq: "San Francisco CA", founded: 2022, marketCap: "~$20–23B",
  aiExposure: { level: "High", note: "100% AI — model API is core COGS" },
  primaryFunction: "AI search/answer engine",
  chainPosition: "Apps — Consumer",
  advantage: "Cited answers + subscription-only trust model; >$450M run-rate",
  competitors: ["ChatGPT Search", "Google AI Overviews", "Gemini"],
  trajectory: "Increasing"
},
{
  slug: "elevenlabs", name: "ElevenLabs", ticker: null, category: "applications", layer: 4, tier: 2,
  status: "Private", hq: "New York NY", founded: 2022, marketCap: "$11B",
  aiExposure: { level: "High", note: "100% of revenue from AI voice" },
  primaryFunction: "AI voice platform (TTS, dubbing, agents)",
  chainPosition: "Apps — Consumer (voice infra)",
  advantage: "Frontier TTS quality + largest API developer base; ARR >$330M",
  competitors: ["OpenAI", "Google", "Hume"],
  trajectory: "Increasing"
},
{
  slug: "suno", name: "Suno", ticker: null, category: "applications", layer: 4, tier: 3,
  status: "Private", hq: "Cambridge MA", founded: 2023, marketCap: "$5.4B",
  aiExposure: { level: "High", note: "100% — music generation is the business" },
  primaryFunction: "AI music generation",
  chainPosition: "Apps — Consumer",
  advantage: "~90% share of commercial AI music; DistroKid distribution moat",
  competitors: ["Udio", "Google MusicFX", "BandLab"],
  trajectory: "Increasing"
},
{
  slug: "runway", name: "Runway", ticker: null, category: "applications", layer: 4, tier: 3,
  status: "Private", hq: "New York NY", founded: 2018, marketCap: "$5.3B",
  aiExposure: { level: "High", note: "100% AI media" },
  primaryFunction: "AI video generation + world models",
  chainPosition: "Apps — Consumer (pro video)",
  advantage: "Creative control + enterprise film (Lionsgate); world models",
  competitors: ["Google Veo", "Kling", "OpenAI"],
  trajectory: "Stable"
},
{
  slug: "harvey", name: "Harvey", ticker: null, category: "applications", layer: 4, tier: 2,
  status: "Private", hq: "San Francisco CA", founded: 2022, marketCap: "$11B ($15.5B round reported)",
  aiExposure: { level: "High", note: "100% AI — per-attorney SaaS" },
  primaryFunction: "Legal workflow AI (on frontier models)",
  chainPosition: "Apps — Vertical (legal)",
  advantage: "AmLaw 100 majority; workflow/trust moat; ARR ~$350M+",
  competitors: ["Thomson Reuters CoCounsel", "Spellbook", "frontier legal agents"],
  trajectory: "Increasing",
  scores: { importance: 3, quality: 4, growth: 5, moat: 4, attractiveness: 3 },
  profile: {
    overview: "Legal workflow AI on OpenAI/Anthropic models (builds no models); majority of AmLaw 100, 100K+ lawyers, PwC global partnership; ARR ~$350M+ annualized.",
    aiRole: "The proof that the vertical layer wins even as frontier models commoditise — moat is workflow, trust, and rollout.",
    chainPosition: "Layer 4 — vertical AI (legal).",
    revenueExposure: {
      current: "100% AI; ~$1.2–3K/attorney/month.",
      future: "Rising — 25,000 custom agents, adjacent legal workflows."
    },
    moat: {
      technology: "Domain agent orchestration.",
      ecosystem: "Law-firm distribution.",
      data: "50M contract terms/week.",
      distribution: "AmLaw 100 majority.",
      switchingCosts: "Very high — firm-wide rollouts."
    },
    growthDrivers: ["Legal spend on AI", "Agent expansion", "PwC channel", "International"],
    risks: {
      competition: "Frontier labs shipping legal agents; Thomson Reuters CoCounsel.",
      commoditisation: "Legal-specific capabilities in general models.",
      regulation: "Legal-ethics rules on AI.",
      supplyChain: "OpenAI/Anthropic model dependency.",
      valuation: "~44x ARR at $15.5B."
    },
    monitor: ["ARR", "Logo adds", "Expansion rate", "Model-layer legal moves", "Price per attorney"],
    thesis: {
      bull: "Category-defining distribution in a high-ASP profession.",
      bear: "GPT-6-class models with legal tooling bundle Harvey's value at API prices."
    },
    competitors: ["CoCounsel (Thomson Reuters)", "Spellbook", "frontier-model legal agents"]
  }
},
{
  slug: "sierra", name: "Sierra", ticker: null, category: "applications", layer: 4, tier: 2,
  status: "Private", hq: "San Francisco CA", founded: 2023, marketCap: "$15.8B",
  aiExposure: { level: "High", note: "100% AI agents" },
  primaryFunction: "CX agents (voice/chat) — agentic customer experience",
  chainPosition: "Apps — Vertical (workflow)",
  advantage: "Pre-built vertical workflows; 40%+ of Fortune 50",
  competitors: ["Decagon", "Salesforce Agentforce", "Intercom"],
  trajectory: "Increasing"
},
{
  slug: "glean", name: "Glean", ticker: null, category: "applications", layer: 4, tier: 3,
  status: "Private", hq: "Palo Alto CA", founded: 2019, marketCap: "$7.2B (~$12B reported)",
  aiExposure: { level: "High", note: "AI assistant/agents core" },
  primaryFunction: "Enterprise search + knowledge graph + AI agents",
  chainPosition: "Apps — Vertical (workflow)",
  advantage: "Permissions-aware knowledge graph; model-neutral (15+ LLMs)",
  competitors: ["Microsoft Copilot", "Gemini Enterprise"],
  trajectory: "Stable"
},
{
  slug: "notion", name: "Notion", ticker: null, category: "applications", layer: 4, tier: 2,
  status: "Private", hq: "San Francisco CA", founded: 2013, marketCap: "~$11B",
  aiExposure: { level: "High", note: ">50% of ARR from AI-enabled customers" },
  primaryFunction: "Productivity suite with AI (agents, Q&A)",
  chainPosition: "Apps — Consumer/productivity",
  advantage: "80M MAU habits + profitable since 2023; ~$600M ARR",
  competitors: ["Microsoft 365", "Google Workspace", "Coda"],
  trajectory: "Stable"
},
{
  slug: "tempus", name: "Tempus AI", ticker: "TEM", category: "applications", layer: 4, tier: 2,
  status: "Public", hq: "Chicago IL", founded: 2015, marketCap: "~$9.4B",
  aiExposure: { level: "High", note: "AI core to products; diagnostics is revenue base" },
  primaryFunction: "Precision-medicine AI (clinical-genomic data)",
  chainPosition: "Apps — Vertical (healthcare)",
  advantage: "Proprietary clinical-genomic dataset moat; ~$1.6B FY26 rev",
  competitors: ["Natera", "Foundation Medicine", "Guardant Health"],
  trajectory: "Increasing",
  multiRole: { roles: ["Genomic diagnostics", "AI data licensing"], primary: "Healthcare AI platform" },
  scores: { importance: 3, quality: 4, growth: 4, moat: 4, attractiveness: 4 },
  profile: {
    overview: "Precision-medicine platform — AI over a proprietary clinical-genomic data moat; diagnostics + data licensing + pharma partnerships; approaching EBITDA breakeven.",
    aiRole: "The public bellwether for healthcare AI — the \"Tesla of health data\" narrative.",
    chainPosition: "Layer 4 — vertical AI (healthcare).",
    revenueExposure: {
      current: "FY26 guide $1.59–1.60B (+~25%), Data & Insights growing 40%+; AI core to products though diagnostics is the revenue base.",
      future: "Rising — data licensing, pharma collaborations."
    },
    moat: {
      technology: "AI over multimodal clinical-genomic data.",
      ecosystem: "Health-system + pharma relationships.",
      data: "One of the largest longitudinal clinical-genomic datasets.",
      distribution: "Pharma partnerships (Merck, Gilead).",
      switchingCosts: "High for pharma partners."
    },
    growthDrivers: ["Data & Insights licensing", "Pharma deals", "Imaging AI", "EBITDA inflection"],
    risks: {
      competition: "Natera, Foundation Medicine, Guardant.",
      commoditisation: "Diagnostic commoditisation.",
      regulation: "Reimbursement and FDA posture.",
      supplyChain: "Sequencing supply chain.",
      valuation: "Growth priced in."
    },
    monitor: ["Revenue growth", "Data & Insights growth", "Adjusted EBITDA", "Pharma deal value", "Test volumes"],
    thesis: {
      bull: "The data moat compounds; first positive EBITDA guides FY26.",
      bear: "Reimbursement risk + diagnostics commoditisation cap the multiple."
    },
    competitors: ["Natera", "Foundation Medicine", "Guardant Health", "Caris"]
  }
},
{
  slug: "abridge", name: "Abridge", ticker: null, category: "applications", layer: 4, tier: 3,
  status: "Private", hq: "Pittsburgh PA", founded: 2018, marketCap: "$5.3B",
  aiExposure: { level: "High", note: "100% AI — ambient documentation" },
  primaryFunction: "Ambient AI clinical documentation",
  chainPosition: "Apps — Vertical (healthcare)",
  advantage: "Deepest Epic integration; 1.5M proprietary encounters; KLAS #1",
  competitors: ["Epic native scribe", "Nuance DAX", "Ambience Healthcare"],
  trajectory: "Declining"
},
{
  slug: "hippocratic-ai", name: "Hippocratic AI", ticker: null, category: "applications", layer: 4, tier: 3,
  status: "Private", hq: "Palo Alto CA", founded: 2023, marketCap: "~$3.5B",
  aiExposure: { level: "High", note: "100% — agentic AI offering" },
  primaryFunction: "Patient-facing healthcare voice agents",
  chainPosition: "Apps — Vertical (healthcare)",
  advantage: "Safety-first architecture (Polaris); top-10 payor footprint",
  competitors: ["Abridge", "Nuance", "internal builds"],
  trajectory: "Increasing"
},
{
  slug: "deepseek", name: "DeepSeek", ticker: null, category: "disruptors", layer: 2, tier: null,
  status: "Private", hq: "Hangzhou, China", founded: null, marketCap: "n/d",
  aiExposure: { level: "High", note: "Strategic leverage via open weights (minimal commercial)" },
  primaryFunction: "Open-weights frontier models (price disruptor)",
  chainPosition: "Platform — Open-source models (non-US)",
  advantage: "Training-efficiency research; open-weight virality",
  competitors: ["Qwen", "Llama (Meta)", "Mistral", "frontier labs"],
  trajectory: "Increasing",
  scores: { importance: 4, quality: 3, growth: 5, moat: 3, attractiveness: 2 },
  profile: {
    overview: "Chinese open-weights frontier lab whose low-cost training breakthroughs re-priced the entire model layer (GPT-5.6 Terra at half price is a direct response).",
    aiRole: "The open-source price disruptor — the structural force compressing closed-lab pricing power, and the reason the model layer's economics are negative.",
    chainPosition: "Layer 2 — open-source models.",
    revenueExposure: {
      current: "Minimal commercial (open weights); its value is strategic leverage, not revenue.",
      future: "Derivative adoption + API at commodity prices."
    },
    moat: {
      technology: "Training-efficiency research (R1/V3-class breakthroughs).",
      ecosystem: "The largest open-model derivative base after Qwen.",
      data: "N/A.",
      distribution: "Open-weight virality.",
      switchingCosts: "Zero — portability is the point."
    },
    growthDrivers: ["Open-model adoption", "Price pressure on frontier labs", "China compute access"],
    risks: {
      competition: "Qwen, Llama, Mistral.",
      commoditisation: "The model layer it disrupts is its own category.",
      regulation: "US export controls + China policy.",
      supplyChain: "Compute access (HBM/advanced nodes restricted).",
      valuation: "Cannot monetise open weights."
    },
    monitor: ["Model benchmark gaps vs frontier", "Derivative adoption", "Token-price pressure on OpenAI/Anthropic", "Export-control actions"],
    thesis: {
      bull: "The open frontier keeps closing the gap; closed-lab pricing power keeps falling.",
      bear: "Can't monetise, control risk, and its disruptiveness is priced into the sector's structure already."
    },
    competitors: ["Qwen", "Llama (Meta)", "Mistral", "frontier labs"]
  }
}
];

/* ---- Derived lookups (built at load; no external data) ---- */
window.AIDATA.bySlug = Object.create(null);
window.AIDATA.companies.forEach(function (c) {
  window.AIDATA.bySlug[c.slug] = c;
});
window.AIDATA.categories = {
  infrastructure: "AI Infrastructure Winners",
  platform: "AI Platform Winners",
  applications: "AI Application Winners",
  disruptors: "AI Disruptors / Threats"
};
window.AIDATA.categoryColor = {
  infrastructure: "#4DA3FF",
  platform: "#D4A94E",
  applications: "#34C77B",
  disruptors: "#E5484D"
};
