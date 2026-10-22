# US AI Industry — Supply Chain Dependency Map
**Senior semiconductor & technology industry analysis · August 9, 2026 · Built on the strategic ranking (US-AI-Industry-Ranking-Aug-2026.md)**

> **Data as of: August 9, 2026** — static research snapshot. Updated periodically through the research process; not live.

The map runs upstream → downstream across 9 layers. Share figures are from the research phase where cited; items marked "est." are industry-standard estimates. A recurring theme: **the physical layers (silicon, equipment, power, memory) capture the profit while the intellectual layer (models) captures negative economics** — the central paradox of the 2026 AI value chain.

---

## LAYER 1 — SEMICONDUCTOR EQUIPMENT

| Sub-layer | Key companies | Market leaders (share) | Bottlenecks | Switching costs | Who captures the most economic value |
|---|---|---|---|---|---|
| **Lithography** | ASML (NL), TEL (JP), Canon (JP) | ASML: EUV ~100% monopoly; ~80–90% of merchant DUV (est.) | EUV capacity + export-control regime; EUV output gates every leading-edge node | **Extreme** — node-specific, years of qualification, ~12–18 month tool lead times | ASML (~$663–671B; premium margins, ~50% GM on a monopoly) |
| **Etching** | Lam, TEL, AMAT, Hitachi | Lam: #1 in etch, **100% of HBM high-aspect-ratio etch**; TEL #2 | HBM etch capacity — nothing to make HBM stacks without it | **Very high** — 40K+ installed chambers; process recipes locked per chamber | Lam (~$390B); the sharpest single equipment bottleneck in the US |
| **Deposition** | AMAT, TEL, Lam | AMAT #1 overall (deposition + CMP + packaging) | ALD/CVD capacity for HBM and 3D structures | **High** — tool qualification cycles | AMAT (~$428B; ~40% of revenue AI-related) |
| **Metrology** | KLA, Onto, Camtek, Nova, Lasertec (JP) | KLA: ~50–58% process-control share, ~7x nearest rival | Inspection intensity rises with every HBM layer, chiplet, GAA step | **Very high** — recipes calibrated to tool fleets; 80% contracted services | KLA (~$260B; 62% GM — highest-margin of the big three) |
| **Packaging** | AMAT, Disco (JP), BESI (NL), ASMPT (HK) | AMAT ~50% of HBM packaging equipment + hybrid bonding; Disco dominates dicing | CoWoS-class equipment lead times; hybrid bonding is the next-gen gate | **High** — co-developed with TSMC fab processes | AMAT; TSMC (as the packaging customer) |

---

## LAYER 2 — SEMICONDUCTOR MANUFACTURING

| Sub-layer | Key companies | Market leaders (share) | Bottlenecks | Switching costs | Who captures the most economic value |
|---|---|---|---|---|---|
| **Foundry** | TSMC (TW), Samsung (KR), Intel (US) | TSMC: **~90%+ of leading-edge AI silicon** (est.); merchant foundry ~60%+ overall; Samsung #2 but trailing at 2nm; Intel 18A emerging (NVIDIA $5B + Azure anchors) | N3/N2 capacity + CoWoS — the single biggest physical bottleneck in global AI | **Extreme** — designs are node-specific; multi-billion NRE; multi-year cycles | TSMC (~$2.18T; premium pricing, 40%+ GM) — still earns less per wafer than NVIDIA earns per GPU |
| **Advanced packaging** | TSMC CoWoS, Intel EMIB/Foveros, Samsung | TSMC dominates AI advanced packaging (~60%+ of CoWoS-class capacity, est.); supply-constrained through 2027 | **CoWoS is the binding constraint on every accelerator program** — HBM-in-package yield and capacity | **Extreme** — packaging co-designed with chip + process | TSMC; the equipment layer (AMAT/Disco/BESI) upstream |

---

## LAYER 3 — AI COMPUTE HARDWARE

| Sub-layer | Key companies | Market leaders (share) | Bottlenecks | Switching costs | Who captures the most economic value |
|---|---|---|---|---|---|
| **GPUs** | NVIDIA, AMD | NVIDIA: **est. 85–90% of merchant AI accelerators; ~60–70% of all AI accelerators** (custom silicon reached ~28% of AI servers, TrendForce); AMD ~10–15% merchant | GPU supply (GB300 pre-orders ~400K); HBM allocation; CoWoS | **Very high** — CUDA software moat: 15 years of installed code, libraries, tooling | **NVIDIA — the single largest value capture in the entire chain** (~$5.4T cap; ~70%+ GM; ~90% of revenue AI) |
| **AI accelerators (challengers)** | Cerebras, Groq, SambaNova | Cerebras (wafer-scale, public ~$51B); Groq LPU (now licensed into NVIDIA's roadmap); SambaNova (enterprise on-prem) | None at scale yet — all sub-5% of compute | Low-medium — no ecosystem lock-in; adoption is contract-based | Cerebras ($24.6B contracted backlog); challengers capture little yet |
| **Custom ASICs** | Broadcom, Marvell (design); Google, Amazon, Meta, Microsoft, OpenAI, Anthropic (customers) | **Broadcom ~70% of custom-ASIC design services; Marvell ~20–25%** — a duopoly over TPU/Trainium/MTIA/Maia/Jalapeño | **Design-team capacity** — only a handful of programs can be run at once; HBM + CoWoS allocations | **Extreme** — multi-year binding commitments ($128B at Broadcom); chip-to-workload co-design | Broadcom (~$2.0T; AI rev $10.8B/qtr, guiding >$100B FY27); customers (Google/Meta/Amazon) capture efficiency vs merchant GPUs |
| **CPUs** | AMD, Intel, Arm (IP) | AMD EPYC ~35%+ of server CPUs (rising); Intel Xeon re-accelerating; Arm Neoverse behind every custom XPU host | None AI-specific | High for x86 workloads; low-medium for Arm | AMD/Intel (modest); Arm collects IP royalties (~$302B) |

---

## LAYER 4 — MEMORY

| Sub-layer | Key companies | Market leaders (share) | Bottlenecks | Switching costs | Who captures the most economic value |
|---|---|---|---|---|---|
| **HBM** | SK Hynix (KR), Samsung (KR), Micron (US) | SK Hynix ~52–62% (NVIDIA's lead supplier); Samsung ~25–39%; Micron ~8–25% (only Western; HBM4 first-mover) | **All HBM capacity sold out through 2027**; HBM4 qualification gates every 2027 accelerator program; HBM market ~$54.6B in 2026 (+58% YoY, ~40% of DRAM) | **High** — qualification cycles with each GPU generation; but 3 suppliers = partial substitutability | **Cyclically enormous** — Micron printing 84.6% gross margin; SK Hynix the structural leader |
| **DRAM** | Samsung, SK Hynix, Micron, CXMT (CN) | Samsung ~40%+; SK Hynix ~30%+; Micron ~20–25% (est.) | Contract prices >2x since late 2025; CXMT (China, IPO ~$484B) is the first credible challenger | Medium — commodity market, long-term contracts | Same cycle as HBM (diluted by commodity dynamics) |
| **NAND** | Samsung, SK Hynix (Solidigm), Kioxia (JP), Micron, WD/SanDisk | Samsung ~30%+; consolidation ongoing | AI storage pools (QLC) rising but secondary to HBM/DRAM | Medium | Moderate; less AI-driven than HBM |

---

## LAYER 5 — AI NETWORKING

| Sub-layer | Key companies | Market leaders (share) | Bottlenecks | Switching costs | Who captures the most economic value |
|---|---|---|---|---|---|
| **Ethernet switches** | Broadcom (silicon), Arista (systems), Cisco, NVIDIA (Spectrum-X) | Broadcom ~70–80% of high-end merchant AI switching (est.); Arista the systems leader (100+ AI customers, ~$3.5B AI sales target); NVIDIA's Spectrum-X is the proprietary counterweight | 1.6T switching cycle; supply (not demand) constrained through 2028 | **High** — fabric design-ins, backplane compatibility, management stack | Arista (48–49% op margin) + Broadcom (silicon toll) |
| **Optical interconnect** | Coherent, Lumentum, Innolight (CN), Eoptolink (CN), Fabrinet (TH assembly) | Coherent the sole vertically integrated Western vendor (800G volume, 1.6T mass production H2 2026; NVIDIA $2B strategic stake) | **1.6T ramp** — Coherent book-to-bill >4x with orders into 2028; Chinese vendors undercut on price | Medium — design-ins but multi-vendor qualification | Coherent (~75% of revenue DC-linked) during the 1.6T supercycle |
| **Cables / connectivity silicon** | Credo (AECs), Astera (retimers), Amphenol/TE (copper), Marvell (DSPs) | Credo the AEC pioneer (5 hyperscalers; +206% FY26 revenue); Astera in ~90% of AI servers | Copper hits its limit at rack scale; the copper→optics transition decides the next cycle | Medium — rack cabling is design-in but replaceable | Credo + Astera (near-100% AI revenue, extreme concentration) |
| **Networking chips** | Broadcom, NVIDIA (ConnectX/NVLink), Marvell, Astera (Scorpio) | NVIDIA privatizes scale-up (NVLink/NVLink Fusion); Broadcom dominates merchant scale-out | **NVLink Fusion is a virtual bottleneck** — proprietary interconnect forces NVIDIA-to-NVIDIA topologies; CPO (2027–28) is the next gate | **Very high** for NVLink-integrated racks | NVIDIA (interconnect premium) + Broadcom (merchant) |

---

## LAYER 6 — DATA CENTRES

| Sub-layer | Key companies | Market leaders (share) | Bottlenecks | Switching costs | Who captures the most economic value |
|---|---|---|---|---|---|
| **Power** | Vertiv, Eaton, Schneider (FR), GE Vernova, Caterpillar, Doosan | Vertiv: near-monopoly in high-density DC power/thermal ($15B backlog, 2.9x book-to-bill); Eaton grid-side leader ($14.5B Electrical Americas backlog) | **Grid is the #1 industry constraint** — 307GW announced vs queues to 2030; <5% powered shell left in NoVA; gas turbines (Doosan units at Colossus) are months-long lead items | Low for equipment (installed); **very high** for secured sites/contracts | Vertiv (pricing power in shortage; shares +90% YTD) + Eaton |
| **Cooling** | Vertiv, Boyd (→Eaton), Modine, nVent | Vertiv leads liquid cooling for >100kW racks (NVIDIA Rubin DSX co-design) | >100kW/rack air cooling impossible; liquid cooling becomes mandatory at Rubin densities | High — co-designed with rack architecture | Vertiv |
| **Servers** | Supermicro, Dell, HPE, Foxconn (TW), Quanta (TW), Lenovo | Dell + Supermicro lead US AI servers (Dell $51B AI backlog); Foxconn/Quanta the volume giants | None of their own — **servers are captive to GPU supply and HBM** | Medium — rack standards, but hyperscalers multi-source | **Thin margins — value stays with NVIDIA/GPU owners, not server OEMs** |
| **Data centre operators** | Equinix, Digital Realty, Vantage, QTS, Stack, CoreWeave, Nebius, Crusoe; hyperscalers self-build | Hyperscalers self-build the majority of AI MWs; private capital (Vantage/QTS/Stack) wins the rest; listed REITs losing share | Power-secured sites; permitting; 15-year leases signed pre-groundbreaking | **Very high** — lease duration + power contracts | **Private capital captures via 10–15x equity leverage**; Equinix collects interconnection annuity |

---

## LAYER 7 — CLOUD INFRASTRUCTURE

| Sub-layer | Key companies | Market leaders (share) | Bottlenecks | Switching costs | Who captures the most economic value |
|---|---|---|---|---|---|
| **Hyperscalers** | AWS, Microsoft Azure, Google Cloud, Oracle OCI | AWS ~30%+ cloud share (AI >$25B run-rate); Azure ~22–25% (AI >11pts of +43% growth; $678B RPO); Google Cloud ~12–14% and **fastest-growing (+82%)**; Oracle OCI +93% on a $638B backlog | **All capacity-constrained** — demand exceeds supply; power, GPU allocation, Oracle's credit profile | **High** — data gravity, enterprise contracts, agent/workflow embedding | Hyperscalers capture the durable AI annuity; AWS holding 39.4% op margin while absorbing AI buildout |
| **GPU clouds** | CoreWeave, Nebius, Lambda, Crusoe; inference: Baseten, Modal, Together, Fireworks | CoreWeave the pure-play leader ($99.4B backlog; MSFT 62% of revenue); Nebius fastest (+841% YoY); Baseten fastest-growing inference (~20x YoY) | Capital intensity (~$20–25B/yr capex at Nebius); NVIDIA allocation; **inference price war** compressing margins | Medium — multi-year contracts bind capacity, but customers are few | Revenue scale with thin margins; the price war redistributes value to model buyers |

---

## LAYER 8 — FOUNDATION MODELS

| Sub-layer | Key companies | Market leaders (share) | Bottlenecks | Switching costs | Who captures the most economic value |
|---|---|---|---|---|---|
| **Frontier labs** | OpenAI ($852B), Anthropic ($965B), Google DeepMind, xAI, Meta (Muse) | Enterprise LLM spend: Anthropic ~40%, OpenAI ~27% (est.); Gemini app ~950M MAU (consumer) | **Compute, not model quality** — power contracts (Stargate 9+GW, Colossus ~2GW) and capital circularity (labs are each other's customers); June 2026 EO gates releases | Low for models themselves (Bedrock/Vertex multi-model gateways); **high for embedded agents** (Claude Code) and enterprise trust | **Negative economics** — the intellectual heart of AI captures negative value while the physical layers take the profit; distribution (Anthropic's enterprise, OpenAI's consumer) is where durable value may form |
| **Open-source models** | Meta Llama, Qwen (Alibaba), DeepSeek (CN), Mistral (FR) | **Qwen derivatives ~69% of open-model usage vs Llama ~11%** — the open frontier has migrated to China | Open-model quality gap vs frontier (closing); serving cost | Low — open weights are portable | Accrues to the serving layer (Together/Fireworks/HF) and to enterprises that self-host |

---

## LAYER 9 — AI APPLICATIONS

| Sub-layer | Key companies | Market leaders (share) | Bottlenecks | Switching costs | Who captures the most economic value |
|---|---|---|---|---|---|
| **Enterprise software** | Microsoft (Copilot 30M seats), Salesforce (Agentforce $1.2B ARR), ServiceNow (>$1B AI ACV), Palantir, Snowflake, Databricks | Microsoft the seat leader; ServiceNow the agentic-monetization quality leader; Palantir the sovereign-AI leader | None physical — **distribution and data are the moats**; bundling (Copilot/Agentforce/Epic) squeezes independents | **High** — workflow embedding, data, admin inertia | Subscription + consumption pricing (AWUs, Assist packs); but the model tax flows upstream |
| **Developer tools** | Cursor ($2.6–4B+ ARR), Claude Code ($2.5B), GitHub Copilot, Cognition ($492M ARR), Replit | Cursor + Claude Code the leaders (~26%/~40% of AI-coding share, est.); the category is 2–3 players wide | Model capability and pricing — app value is a thin layer over frontier APIs | **High for teams** — codebase embedding and muscle memory | Highest ARPU per user in software history ($60–200/mo per seat); captured by Cursor/Anthropic |
| **Vertical AI** | Harvey (legal), Sierra (CX), Tempus/Abridge (healthcare), Glean, Notion | Harvey: legal category leader (majority of AmLaw 100); Sierra: CX leader (40%+ of Fortune 50); Tempus: healthcare data moat | None physical — **platform capture** (Epic native scribe, Copilot bundling) is the existential risk | **Very high** — vertical data + workflow + trust | The strongest per-seat economics in AI software (Harvey $1.2–3K/attorney/mo; Notion $600M ARR, profitable) — but structurally dependent on model-layer pricing |

---

## Economic value capture — the funnel in one view

| Where value accrues | Captured by | Mechanism |
|---|---|---|
| **Profit pool #1** | NVIDIA | GPU + CUDA toll: ~70%+ GM on the compute every layer depends on |
| **Profit pool #2** | TSMC, ASML | Fabrication + lithography monopoly rents |
| **Profit pool #3 (cyclical)** | SK Hynix, Samsung, Micron | HBM shortage pricing (Micron 84.6% GM) |
| **Profit pool #4** | Broadcom, Lam, KLA, AMAT, Vertiv, Arista | Tollbooths: design services, 100%-share etch, process control, power, fabric switching |
| **Profit pool #5** | Hyperscalers | Durable consumption annuity (AWS 39.4% op margin) |
| **Negative economics** | Frontier labs (OpenAI/Anthropic/xAI) | The intellectual core of AI burns ~$20B+/yr combined |
| **Thin economics** | Server OEMs, GPU clouds | Volume with low margins; price war at the inference layer |

**The paradox:** every layer downstream of silicon is, economically, a toll on NVIDIA/TSMC/HBM. The model layer — the reason the entire industry exists — currently has the worst economics in the chain.

---

## Q1. The 10 most critical AI bottlenecks globally

| # | Bottleneck | Where | Why it binds |
|---|---|---|---|
| 1 | **TSMC leading-edge capacity + CoWoS** | Taiwan | ~90%+ of leading-edge AI silicon + dominant advanced packaging; a single-company dependency for NVIDIA, AMD, Broadcom, Trainium, TPU, Maia |
| 2 | **ASML EUV** | Netherlands | Monopoly on the lithography that gates every leading-edge node; output caps the entire industry's roadmap |
| 3 | **Grid power & interconnection** | US (globally) | 307GW announced vs queues to 2030; <5% powered shell in NoVA; power, not silicon, is the binding constraint of the buildout |
| 4 | **HBM supply** | Korea/US | Sold out through 2027; HBM4 allocation decides every 2027 accelerator program; ~40% of DRAM market |
| 5 | **NVIDIA GPU supply + CUDA** | US | ~400K GB300 pre-orders; near-term capacity (not demand) is the constraint; CUDA makes it sticky |
| 6 | **HBM etch + packaging equipment** | US (Lam/AMAT) | 100% share of HBM high-AR etch; ~50% of HBM packaging equipment — the US-controlled leg of the memory bottleneck |
| 7 | **Rack-scale interconnect** | US | 1.6T optical ramp (book-to-bill >4x); NVLink Fusion privatizes scale-up; CPO transition (2027–28) is the next gate |
| 8 | **Custom-ASIC design capacity** | US (Broadcom/Marvell) | A duopoly with finite team bandwidth — only a few new programs per year; every hyperscaler queues for their services |
| 9 | **Frontier-lab capital circularity** | US | The financial bottleneck: ~$1.4T funding gap vs $650–700B annual spend; labs are each other's largest customers — one broken leg reprices everything |
| 10 | **Export-control & policy regime** | US/global | Gates China's access to leading-edge silicon AND the US's own model releases (June 2026 EO; Claude Fable 5 suspension) |

## Q2. Companies with the strongest pricing power

| Rank | Company | Source of pricing power | Evidence |
|---|---|---|---|
| 1 | **NVIDIA** | CUDA + supply scarcity; the only merchant supplier at scale | ~70%+ gross margin; racks sold out a year ahead |
| 2 | **ASML** | EUV monopoly | ~50% GM on a product with zero substitutes |
| 3 | **TSMC** | Leading-edge monopoly + CoWoS scarcity | 40%+ GM; pricing power through capacity allocation |
| 4 | **SK Hynix / Samsung / Micron** | HBM shortage | Micron 84.6% GM; DRAM contracts >2x since late 2025 |
| 5 | **Broadcom** | Custom-silicon duopoly + merchant switching | $128B binding commitments; >$100B FY27 AI guide |
| 6 | **Vertiv** | Near-monopoly in high-density power/cooling | $15B backlog, 2.9x book-to-bill; +90% YTD shares |
| 7 | **Lam Research** | 100% share of HBM etch | Fabs cannot qualify around it |
| 8 | **KLA** | Process-control tollbooth | 62% GM; ~7x nearest rival |
| 9 | **Arista** | AI-fabric premium with supply-constrained demand | 48–49% op margins |
| 10 | **Equinix** | Interconnection density — a network-of-networks annuity | Recurring interconnection revenue at premium rates |

*Caveat: frontier labs (OpenAI/Anthropic) have nominal API pricing power but are actively cutting prices (GPT-5.6 Terra at half price) under open-model pressure — their pricing power is the most contested of any layer.*

## Q3. Companies that are difficult to replace

| Rank | Company | Why irreplaceable | Replacement timeline if lost |
|---|---|---|---|
| 1 | **NVIDIA** | CUDA: 15 years of installed software, libraries, and engineering talent; every lab's stack is built on it | 2–4 years for a credible merchant alternative (AMD/TPU can't cover training demand); custom silicon 3–5 years |
| 2 | **TSMC** | Process + CoWoS: no merchant alternative at leading edge; Intel 18A is years from scale | 3–5+ years, and only partial |
| 3 | **ASML** | EUV monopoly; no competing design | Never (no substitute exists) |
| 4 | **SK Hynix** | HBM #1 (52–62% share) + NVIDIA's certified lead supplier | 12–18 months for Micron/Samsung to fill the gap |
| 5 | **Broadcom** | Design relationships + Tomahawk switching: TPU/MTIA/Jalapeño roadmaps run through it | 2–4 years to recreate program capacity |
| 6 | **Lam Research** | 100% HBM high-AR etch | 12–24 months for TEL/AMAT to qualify |
| 7 | **KLA** | Process-control standard (50–58%) with recipe-locked fleets | 2+ years to requalify |
| 8 | **Vertiv** | High-density power/cooling co-designed into NVIDIA racks | 12–24 months for Schneider/Eaton/nVent to absorb |
| 9 | **OpenAI** | ChatGPT brand + distribution gravity + Stargate capital machinery | 6–12 months — Anthropic/Google absorb demand, but the ecosystem rewires |
| 10 | **Anthropic** | Enterprise preference (~40% of spend) + Claude Code installed base | 12–18 months — OpenAI/Google fight over the enterprise base |

## Q4. If one company disappeared — the biggest disruption

**Answer: TSMC — globally. NVIDIA — if restricted to US-headquartered companies.** Both disappearances would be felt simultaneously in every layer of the chain.

**TSMC (~$2.18T, Taiwan):** the single point of failure of the global AI system.
- What breaks: *everything* — NVIDIA, AMD, Broadcom/Marvell custom XPUs, Google TPU, Amazon Trainium, Microsoft Maia, and their CoWoS packaging all stop. There is no merchant alternative at leading edge (Intel 18A is years from scale; Samsung trails at 2nm).
- Time to partial recovery: 3–5+ years — and even then only a fraction of capacity.
- Felt in: every layer, simultaneously, downstream of the fab (HBM stacks have nowhere to land; every cloud's capacity plan dies).

**NVIDIA (US):** the biggest single-name disruption in the US industry.
- What breaks: training and inference capacity halts for ~all labs and GPU clouds (GB300 racks, NVLink topologies, CUDA-stack software). AMD MI-series, TPU, and Trainium cannot absorb demand in the near term — HBM was allocated for NVIDIA programs, and the software stacks are CUDA-native.
- Time to partial recovery: 12–24 months at the hardware level; 2–4 years for the software ecosystem to rebuild.
- Why it outranks Broadcom/Microsoft/OpenAI: Broadcom's loss is survivable (Google/Meta have multi-year roadmaps in flight); Microsoft's is contractual (AWS/Google can host OpenAI); OpenAI's is absorbable (Anthropic/Google take share). Only NVIDIA and TSMC have no absorber.

**Runner-up list:** ASML (no new nodes, ever) → SK Hynix (HBM #1 gone; 12–18-month starvation) → Lam Research (HBM etch halts → all memory programs stall) → Broadcom (custom-silicon roadmaps die + switching supply disrupted) → Vertiv (new DC buildouts slow for 12–24 months) → OpenAI (largest distribution; disruptive but recoverable).

**Analyst conclusion:** the disappearance exercise confirms the ranking's core insight — the AI industry's true fragility is upstream (Taiwan lithography + packaging, HBM, power, and the US equipment/etch tollbooths), not in the model layer that receives all the attention.

---

*Compiled from US-AI-Industry-Ranking-Aug-2026.md and the research database. Share figures marked "est." are industry estimates; others as cited in the August 2026 research. Information, not investment advice.*
