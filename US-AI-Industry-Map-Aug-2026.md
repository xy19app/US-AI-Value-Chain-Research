# The US AI Industry Map — Investment Research Briefing
**As of August 9, 2026 · Compiled via live web research (market caps, valuations, and product developments verified against current sources)**

> **Data as of: August 9, 2026** — static research snapshot. Updated periodically through the research process; not live.

---

## How to read this map

The US AI economy is a four-layer funnel. Every dollar of AI revenue at the application layer flows down through model-layer API fees, cloud-layer compute rent, and into the infrastructure layer (accelerators, HBM memory, networking, power). Key structural facts as of mid-2026:

- **Capex supercycle**: ~$650–700B of combined 2026 hyperscaler capex (Microsoft ~$190B guided, Alphabet $195–205B, Amazon $200B+), plus Stargate ($500B program), Colossus (~2GW), and GPU clouds. Power — not silicon — is the binding constraint: 307GW of announced US data-center capacity sits behind grid queues extending to 2030.
- **Custom silicon is a real third path**: Broadcom + Marvell hold ~90–95% of hyperscaler custom-ASIC design (Google TPU, Meta MTIA, Amazon Trainium, Microsoft Maia, OpenAI "Jalapeño"), reaching ~28% of AI servers. NVIDIA is fighting back with NVLink Fusion co-opetition and by licensing Groq's LPU IP.
- **Circular funding is systemic**: Anthropic pays xAI ~$1.25B/month for Colossus compute; Google pays xAI ~$920M/month; Anthropic committed $200B to Google Cloud; Amazon committed $500B to OpenAI ($350B contingent on IPO/AGI). The labs are each other's largest customers — a systemic concentration feature, not an anomaly.
- **Inference is now the demand engine** (est. 2/3 of AI compute by end-2026), which favors open-model inference platforms (Fireworks, Together, Baseten) and low-latency accelerators (Groq, Cerebras) — and is driving an inference price war that compresses GPU-cloud margins.
- **A record IPO wave is building**: Cerebras (May 2026) and CoreWeave (March 2025) already listed; Scale AI (Q3–Q4 2026), Lambda (H2 2026), Anthropic (as early as Oct 2026), OpenAI (2026–27), Crusoe (H1 2027), Databricks (2027) are queued behind a ~$200B+ SpaceX/Anthropic/OpenAI float wave.
- **Consolidation**: SpaceX–Cursor ($60B), Marvell–Celestial AI (up to $5.5B), Google–Windsurf ($2.4B license + talent), Cognition–Windsurf remnant, Nvidia–Groq license, OpenAI–xAI/AWS/AMD cross-investments.

---

# LAYER 1 — AI INFRASTRUCTURE

### 1.1 AI accelerators & merchant silicon

**NVIDIA (NVDA)** — Santa Clara CA · 1993 · **Public, ~$5.42T** (largest S&P 500 company)
- **AI function**: Merchant AI accelerator + full-stack rack/systems supplier; the industry's dominant silicon franchise
- **Business model**: Sells data-center GPUs and rack-scale systems (GPU+CPU+NVLink+networking) plus CUDA/NVLink software ecosystem; ~90% of revenue is AI data center-linked
- **Key products**: Blackwell Ultra GB300 NVL72 (fastest ramp in company history, ~400K pre-orders); Vera Rubin platform (launched CES 2026 — VR NVL72 shipping Q3 2026, volume Q4 2026; HBM4 ~22TB/s/GPU, NVLink 6, 3.6 exaflops/rack); Spectrum-X networking
- **Moat**: CUDA software ecosystem + near-annual architecture cadence (Blackwell→Rubin gap of 6–8 months, shortest ever) + rack-level vertical integration; every frontier lab adopts at launch
- **Competitors**: AMD, Broadcom/Marvell custom XPUs, Google TPU, Intel Gaudi
- **AI exposure**: **High** — AI DC is the overwhelming majority of revenue
- **Ecosystem position**: The value-funnel's tax collector — sells to hyperscalers and OEMs (Supermicro, Dell), is the largest HBM4 buyer (60%+ of end demand; SK Hynix/Samsung/Micron), fabless on TSMC, and cross-invested $5B in Intel (18A) and $2B in Marvell (photonics/NVLink Fusion)

**AMD (AMD)** — Santa Clara CA · 1969 · **Public, ~$789B**
- **AI function**: The merchant-GPU challenger (Instinct) plus EPYC server-CPU incumbent
- **Business model**: Sells GPUs + CPUs to hyperscalers, enterprises, and labs; Q2 2026 revenue $11.54B (+50% YoY), data-center segment doubling
- **Key products**: Instinct MI400 series (MI450X/MI430X, 432GB HBM4/chip, sampling now, revenue Q3 2026); Helios rack (2.9 exaflops FP4, all-Ethernet, claims up to 30% more tokens/$ vs Rubin NVL72); EPYC server CPUs
- **Moat**: Price/perf + open-Ethernet networking as a CUDA alternative; anchor deals with OpenAI (up to 6GW + warrants for 10% of AMD stock), Anthropic (2GW + up to $5B equity), Meta (6GW)
- **Competitors**: NVIDIA, Broadcom custom XPUs, Intel
- **AI exposure**: **High** — data center is the growth engine, though ROCm still trails CUDA; inference-heavy mix
- **Ecosystem position**: Merchant silicon, fabless on TSMC; biggest constraint is HBM4 allocation (DRAM contract prices >2x since late 2025, 2026 HBM output fully contracted)

**Intel (INTC)** — Santa Clara CA · 1968 · **Public, ~$513B** (18A re-rating)
- **AI function**: The Western-foundry bet (18A/14A) + AI-PC CPUs; marginal in accelerators
- **Business model**: Foundry-first under CEO Lip-Bu Tan; monetizes 18A to external customers while selling Xeon, Core Ultra, Gaudi
- **Key products**: 18A node in HVM (RibbonFET + PowerVia; 18A-P risk production), Panther Lake AI-PC chips; Gaudi 3/Jaguar Shores (pivoted to enterprise inference, <10% DC share); Xeon with AI-server share re-accelerating (+59% YoY DCAI)
- **Moat**: Only Western high-volume leading-edge foundry; anchors: Microsoft Azure 18A (Maia successor, volume Q4 2026–Q1 2027) and NVIDIA's $5B strategic investment
- **Competitors**: TSMC (foundry), NVIDIA/AMD (accelerators)
- **AI exposure**: **Medium** — AI PC attach and server CPUs rising; foundry AI is future option value, not current revenue
- **Ecosystem position**: Capacity/infrastructure play more than accelerator leadership — the credible TSMC alternative the West is betting on

**Qualcomm (QCOM)** — San Diego CA · 1985 · **Public, ~$170–179B**
- **AI function**: On-device/edge AI leader (NPUs in phones, PCs, XR, auto) + low-power data-center inference push
- **Business model**: Snapdragon SoCs + cellular IP licensing annuity; NPU TOPS as an "agentic AI" differentiator
- **Key products**: Snapdragon X2 Elite (80–85 TOPS NPU, on-device agents); Snapdragon Reality Elite XR; Cloud AI 100 Ultra / AI200–AI250 inference accelerators targeting NVIDIA's inference economics (deployed with Humain — Saudi PIF — 200MW plan)
- **Moat**: Best NPU-per-watt at the edge; licensing cash funds AI R&D
- **Competitors**: NVIDIA (inference/Jetson), Apple Silicon, MediaTek
- **AI exposure**: **Medium** — AI is embedded across Snapdragon, not a separate P&L
- **Ecosystem position**: Sits below device OEMs; AI is a feature layer on the largest installed base of personal compute

### 1.2 Custom silicon design (the ASIC duopoly)

**Broadcom (AVGO)** — Palo Alto CA · 1961 (Avago heritage) · **Public, ~$2.0T**
- **AI function**: The primary counterweight to NVIDIA — custom XPU co-designer for hyperscalers + Ethernet interconnect monopoly
- **Business model**: Co-designs custom chips under long-term supply contracts; AI semiconductor revenue $10.8B in Q2 FY2026 (+143% YoY), guiding ~$56B FY2026 and >$100B FY2027 on $128B+ binding purchase commitments
- **Key products**: Google TPU v7 "Ironwood"/v8 (through 2031); Meta MTIA v2–v4 "Santa Barbara" (4 generations through 2029); OpenAI "Jalapeño" inference chip (2027, 1+GW); Anthropic (1→3GW); Tomahawk 6 Ethernet switch (102.4 Tbps) enabling open 1.6T/1M-XPU clusters
- **Moat**: ~70% share of custom-ASIC design services; hyperscaler trust; binds customers via multi-GW commitments that insulate capex cycles
- **Competitors**: NVIDIA (merchant), Marvell (~20–25% share), MediaTek (TPU v8 dual-source)
- **AI exposure**: **High** — AI ~31% of FY2025 revenue, guided toward ~54% by Q3 FY2026
- **Ecosystem position**: Sits between hyperscalers and TSMC; every cluster buys its Tomahawk switches regardless of GPU vendor — key risk is Google/Alphabet concentration

**Marvell (MRVL)** — Santa Clara CA · 1995 · **Public, ~$192B**
- **AI function**: #2 custom-ASIC designer + AI interconnect/optical silicon; NVIDIA partner on photonics
- **Business model**: Co-designs custom XPUs and sells Ethernet switches, optical DSPs, retimers; custom chips guided toward ~$10B revenue by FY29
- **Key products**: AWS Trainium 2/3/4 (5-year agreement; AWS custom-chip business >$10B annual run-rate; reported ~$225B in multi-year Trainium commitments); Microsoft Maia 100/200 (Maia 200 serves OpenAI GPT-5.2 and M365 Copilot); Celestial AI optical interconnect (acquired Feb 2026, up to $5.5B)
- **Moat**: Duopoly position in hyperscaler custom silicon with proven multi-generation lock-in; NVIDIA's $2B investment ties its optics into NVLink Fusion so Trainium and NVIDIA GPUs interoperate — unusual co-opetition
- **Competitors**: Broadcom (head-to-head on new ASIC programs), MediaTek, AIchip (Taiwan)
- **AI exposure**: **High** — custom XPU + AI networking is the growth engine
- **Ecosystem position**: Feeds AWS and Microsoft (and indirectly OpenAI via Maia); note Meta's MTIA is a Broadcom program, not Marvell

### 1.3 Accelerator challengers (private / newly public)

**Cerebras (CBRS)** — Sunnyvale CA · 2016 · **Public (IPO May 2026), ~$51B**
- **AI function**: Wafer-scale AI compute — the only merchant wafer-scale silicon (WSE-3: single-wafer chip, ~900K cores)
- **Business model**: System sales + inference cloud; $24.6B remaining performance obligation (~48x 2025 sales) anchored by OpenAI (>$10B at signing) and AWS partnership; 2025 revenue $510M (+76%)
- **Moat**: 15x claimed inference speedup; first-mover hyperscaler lock-in; rejected a late Arm/SoftBank approach pre-IPO
- **Competitors**: NVIDIA, Groq, SambaNova, Tenstorrent
- **AI exposure**: **High** (100% AI)
- **Ecosystem position**: The most successful Nvidia-alternative public market story of 2026 — biggest US tech IPO since Snowflake

**Groq** — Mountain View CA · 2016 · **Private, ~$6.9B (Sept 2025)**
- **AI function**: Ultra-low-latency inference via LPU chips (no HBM) + GroqCloud
- **Business model**: Inference-as-a-service (trillions of tokens/week); 13 data centers scaling to 200MW; also licenses LPU tech to NVIDIA (Dec 2025, ~$20B reported deal that hired CEO Jonathan Ross into NVIDIA)
- **Moat**: Deterministic near-zero-latency inference; the only startup whose architecture is inside NVIDIA's roadmap
- **Competitors**: NVIDIA, Cerebras, SambaNova
- **AI exposure**: **High**; remaining business is the cloud unit (Meta reported as main client)
- **Ecosystem position**: Split into "technology → NVIDIA, cloud stays independent" — a template for accelerator M&A

**SambaNova** — Palo Alto CA · 2017 · **Private, $11B (Series F, July 2026, General Atlantic)**
- **AI function**: Enterprise/sovereign inference (RDU dataflow architecture)
- **Business model**: Full-stack chips+systems+software+cloud to banks, enterprises, sovereign programs; 2027 IPO under consideration
- **Key products**: SN40/SN50 RDUs, DataScale systems (256-chip clusters); JPMorgan named it an inference partner (July 2026, on-prem)
- **Moat**: 5–10x decode speedup claims; strongest bank/enterprise distribution of the challengers; Intel is a backer
- **Competitors**: NVIDIA, Cerebras, Groq, Tenstorrent
- **AI exposure**: **High**
- **Ecosystem position**: On-prem/private inference where data residency matters — not hyperscaler training

**Tenstorrent** — Santa Clara CA (orig. Toronto) · 2016 · **Private, ~$2.6–3.2B**
- **AI function**: Low-cost accelerators + RISC-V IP licensing (Jim Keller)
- **Business model**: Sells Galaxy systems (~$110K/32-accelerator box) + licenses RISC-V/AI IP (Samsung manufacturing deal, Hyundai, LG); reportedly denied an $8–10B Qualcomm bid, building toward IPO
- **Moat**: Keller pedigree; anti-NVIDIA/anti-HBM architecture (GDDR6 + standard Ethernet)
- **Competitors**: NVIDIA, Intel Gaudi, SambaNova
- **AI exposure**: **High** (revenue still early)
- **Ecosystem position**: The "ARM of AI" possibility if IP licensing scales; visibly in play for acquirers

### 1.4 Networking, interconnect & optical

**Arista (ANET)** — Santa Clara CA · 2004 · **Public, ~$238B**
- **AI function**: Ethernet-based AI fabric networking (scale-out vs InfiniBand)
- **Business model**: High-margin DC switching (48–49% op margin); FY26 guide raised 3x to ~$12.6B (+40%); AI sales target ≥$3.5B for 2026 (doubled)
- **Key products**: Etherlink AI fabric (100+ AI customers vs ~5 in 2024); 1.6T 7060XE7 platform (liquid-cooled, production 2027); XPO liquid-cooled optics
- **Moat**: Ethernet-vs-InfiniBand momentum (Meta/Microsoft/OpenAI alignment); $6.2B deferred backlog; supply, not demand, is the constraint through 2028
- **Competitors**: Cisco, NVIDIA Spectrum-X, Broadcom
- **AI exposure**: **High** — ~28% of 2026 revenue from AI; Microsoft+Meta ~16–20% of total
- **Ecosystem position**: The default alternative to NVIDIA's private interconnect in AI clusters

**Cisco (CSCO)** — San Jose CA · 1984 · **Public, ~$450B**
- **AI function**: AI networking (switching, optics) + DC infrastructure
- **Business model**: Enterprise + hyperscaler networking; FY26 AI order target raised to ~$9B (~4.5x FY25); AI revenue ~$4B of ~$63B (~6–7%)
- **Key products**: Silicon One routing silicon (new hyperscaler wins); Acacia 400G/800G optics (orders >$1B/quarter, growth >200%)
- **Moat**: Incumbency + silicon cost structure + optics verticalization
- **Competitors**: Arista, NVIDIA, Juniper/HPE
- **AI exposure**: **Medium**, rising fast
- **Ecosystem position**: Legacy networking giant converting into a hyperscaler AI-infrastructure supplier; the #2 to Arista

**Astera Labs (ALAB)** — Santa Clara CA · 2017 · **Public, ~$62B**
- **AI function**: Connectivity silicon — retimers, fabric switches, CXL for AI rack systems
- **Business model**: Fabless merchant; Q2 2026 revenue $392M (+104% YoY); ~90% of the world's AI compute servers embed Astera technology
- **Key products**: Aries PCIe retimers (Gen 6 >1/3 of revenue); Scorpio X-Series 320-lane AI fabric switches (ramping H2 2026, targeting a $10B+ switching market)
- **Moat**: Deepest hyperscaler design-ins across the connectivity layer
- **Competitors**: Marvell (Teralynx), Credo, Broadcom
- **AI exposure**: **High** — effectively 100% AI-DC connectivity; rich valuation (~245x trailing P/E)
- **Ecosystem position**: The glue inside every GB-series-style rack — a pure play on scale-up/scale-out connectivity rather than compute

**Credo (CRDO)** — San Jose CA · 2008 · **Public, ~$48B**
- **AI function**: High-speed SerDes, AECs (active electrical cables), optical DSPs
- **Business model**: Fabless; FY2026 revenue $1.335B (+206% YoY); ~68% gross margin; zero debt
- **Key products**: HiWire AECs (half the power of optics for short reach); retimers; ZeroFlap optics (>$600M expected FY27)
- **Moat**: AEC pioneer with 5 hyperscaler customers
- **Competitors**: Astera, Marvell, Broadcom
- **AI exposure**: **High** — top-3 customers are 88–90% of revenue (key risk)
- **Ecosystem position**: Central to the copper-vs-optics debate — copper wins short reach today, optics wins rack scale

**Coherent (COHR)** — Saxonburg PA · 1966 (II-VI combo 2022) · **Public, ~$66–83B**
- **AI function**: Optical transceivers, lasers, InP components for AI networks
- **Business model**: Vertically integrated (InP wafers → transceivers); DC & Comms ~75% of revenue, +41% YoY; book-to-bill >4x into 2028
- **Key products**: 800G in volume; 1.6T mass production H2 2026; InP capacity quadrupling by end-2027
- **Moat**: Sole vertically integrated Western transceiver vendor; $2B NVIDIA strategic stake + multi-year supply agreement
- **Competitors**: Lumentum, Innolight, Eoptolink
- **AI exposure**: **High** (~75% tied to AI DC capex; Nvidia concentration risk)
- **Ecosystem position**: The optical engine of the 1.6T AI supercycle — de facto NVIDIA partner

**Lightmatter** — Boston MA · 2017 · **Private, ~$4.4B**
- **AI function**: Photonic interconnect (chip-to-chip, rack-scale; co-packaged optics)
- **Key products**: Passage L200 (256 Tbps/package 3D CPO), L20 (record 1.6 Tbps/fiber), Guide lasers; UALink member
- **Moat**: Densest CPO roadmap; early hyperscaler engagements; fabless with GlobalFoundries/ASE
- **Competitors**: Broadcom, Marvell/Celestial AI, Ayar Labs
- **AI exposure**: **High** (revenue minimal)
- **Ecosystem position**: The leading independent bet that photonics replaces copper at rack scale — S-1 filing reported April 2026; the CPO cycle lands 2027–28

**Celestial AI** — Santa Clara CA · 2020 · **Acquired by Marvell (closed Feb 2026), up to $5.5B** — Photonic Fabric optical interconnect pooling up to 32TB HBM over 50m at 2.4 pJ/bit (vs ~50 copper). The marquee consolidation datapoint proving photonics is the post-copper answer to the memory wall.

### 1.5 Memory

**Micron (MU)** — Boise ID · 1978 · **Public, ~$990B**
- **AI function**: #1 US memory; HBM3E/HBM4 + DRAM/NAND for AI data centers — the only Western HBM producer
- **Business model**: Merchant memory; FQ3 2026 revenue +346% YoY at 84.6% gross margin; capacity sold out through 2027 under binding contracts
- **Key products**: HBM3E (mature mass production); HBM4 36GB 12-high in volume production a quarter ahead of schedule (built for Vera Rubin; NVIDIA cleared all three suppliers June 2026)
- **Moat**: First-mover HBM4 qualification + Western supply-chain premium; overtook Samsung on some allocations
- **Competitors**: SK Hynix (~52–62% HBM share, NVIDIA's lead partner), Samsung, and China's CXMT (IPO ~$484B valuation July 2026 — first credible non-Korean DRAM challenger, triggered a 22% Micron selloff)
- **AI exposure**: **High** — HBM + AI DRAM is the majority of profit; every accelerator consumes its output
- **Ecosystem position**: Directly upstream of TSMC CoWoS in the AI silicon stack — HBM is the binding constraint on every 2027 accelerator program

### 1.6 Foundry & semiconductor equipment

**Applied Materials (AMAT)** — Santa Clara CA · 1967 · **Public, ~$428B** — Deposition/etch/CMP/advanced packaging for HBM and accelerators; ~40% of revenue AI-related; ~50% share of HBM packaging equipment; Kinex hybrid bonding for CoWoS/3D-IC; eBeam inspection revenue doubling to >$1B. *AI exposure: High. Position: the largest beneficiary of AI memory capex among equipment makers.*

**Lam Research (LRCX)** — Fremont CA · 1980 · **Public, ~$390B** — #1 in etch; FY2026 record revenue $23.2B (+26%); 100% share of HBM high-aspect-ratio etch (40K+ chambers); raised 2026 WFE outlook to ~$140B. *AI exposure: High — AI memory/logic/packaging drives the majority of growth. Risk: China is 26–34% of revenue.*

**KLA (KLAC)** — Milpitas CA · 1976 · **Public, ~$260B** — Process control (inspection/metrology) tollbooth with ~50–58% share (7x nearest rival); advanced-packaging process control ~$1.1B in 2026, doubling; 62% gross margin. *AI exposure: Medium — the most defensive, highest-margin of the big three; every extra HBM layer adds inspection steps. China ~26–30% of revenue.*

**Context (non-US, public):** **TSMC ~$2.18T** — fabricates virtually all AI accelerators on N3/N2 + CoWoS; **ASML ~$663–671B** — EUV monopoly gating leading-edge supply; **Arm ~$302B** — ISA licensing, every custom XPU is Arm-based; **Samsung ~$1.0–1.15T** — HBM #2, first HBM4E samples; **SK Hynix ~$735–845B** — HBM #1 (~52–62% share), completed a $26.5B Nasdaq ADR IPO (July 2026) but fell >50% from its May peak on margin disappointment — a warning shot for AI-memory sentiment.

### 1.7 Servers, data centers, power & cooling

**Super Micro (SMCI)** — San Jose CA · 1993 · **Public, ~$20B** — NVIDIA GPU rack-server integrator, first to market on each new platform; Q2 FY26 revenue $12.7B (+123% YoY); accounting issues resolved (10-K filed May 2026) but a March 2026 DOJ indictment of three SMCI-linked individuals over ~$2.5B of servers allegedly routed to China erased ~$6B in a day. Trades at ~16x earnings vs 45x+ peers — governance/export-control discount. *AI exposure: High. Position: chassis-and-rack layer between NVIDIA silicon and every GPU cloud.*

**Dell (DELL)** — Round Rock TX · 1984 · **Public, ~$290B** — #1/#2 AI server OEM; AI backlog ~$51.3B; Q1 FY27 AI server revenue $16.1B (+757% YoY), FY27 guide raised to ~$60B; 5,000+ AI customers incl. xAI and CoreWeave. *AI exposure: High — but AI-server margins are thin and memory prices squeeze gross margin.*

**HPE (HPE)** — Spring TX · 2015 · **Public, ~$62–65B** — AI servers + Juniper networking (the only US OEM with in-house high-end networking); data-center networking revenue +233% YoY; record $5.9B AI systems backlog; trades ~13x forward — the cheap way to own AI systems.

**Vertiv (VRT)** — Westerville OH · 2016 (Emerson spin-off) · **Public, ~$103.5B** — The #1 pure-play power & cooling vendor for AI DCs (UPS, liquid cooling, busway); record $15B backlog (2.9x book-to-bill); shares +90% YTD 2026; co-designed with NVIDIA for Vera Rubin DSX. First Q2 sales miss (+24%, below consensus) was a warning crack; trades ~34x forward. *AI exposure: Very High. Position: supplies the power/cooling every hyperscaler data center needs — the direct leveraged play on the 2026 capex wave.*

**Eaton (ETN)** — Beachwood OH (Ireland-domiciled plc) · 1911 · **Public, ~$174B** — "Grid-to-chip" power (switchgear, UPS, busways, 800V DC architectures) + Boyd liquid cooling (~$9.5B deal); content-per-MW rising from $2.9M to $3.4M; Electrical Americas backlog $14.5B (+44%); data-center orders +85% YoY. *AI exposure: Medium-High — DC drove ~65% of Electrical Americas growth but is a smaller share of the group.*

**Equinix (EQIX)** — Redwood City CA · 1998 · **Public, ~$103B** — Global colocation + interconnection (260+ DCs); record $378M quarterly bookings; the AI payoff is expected at the inference stage (2027+), since hyperscale AI MWs went to private developers; stock lagged the S&P (-13% YoY). *AI exposure: Medium-High.*

**Digital Realty (DLR)** — Austin TX · 2004 · **Public, ~$72B** — Largest wholesale hyperscale DC landlord; $1.8B backlog; BofA downgraded on development-pipeline fit, though BTIG/DB call it a multi-decade supercycle. *Position: the listed proxy for hyperscale AI real estate that is losing the buildout to private capital (REIT payout/leverage rules cap it at ~5x equity vs 10–15x for private).*

**Vantage Data Centers** — Denver CO · 2010 · **Private** — Owned by a DigitalBridge-led consortium; ~$9.2B equity raise (2024); 2.6+GW portfolio, 35+ campuses; flagship $25B/1.4GW "Frontier" Texas campus (racks >250kW) with a $22B JPMorgan/MUFG loan; secured power in prime markets. *Position: the archetype of private capital winning the AI DC buildout — a likely IPO candidate if debt markets tighten.*

---

# LAYER 2 — AI PLATFORM (FOUNDATION MODELS)

### 2.1 Frontier labs

**OpenAI** — San Francisco CA · 2015 · **Private, $852B (March 2026; $122B round — largest private financing in history)**
- **AI function**: Frontier model lab (GPT family), ChatGPT, Codex agents, AGI research
- **Business model**: Consumer subscriptions + API tokens + compute-credit mega-deals (Microsoft ~$130B+, Stargate $500B, Amazon $500B incl. $350B contingent on IPO/AGI, NVIDIA $300B, SoftBank $300B); ~$25B annualized revenue run-rate but still deeply unprofitable (~-122% op margin)
- **Key products**: GPT-5.6 family (Sol/Terra/Luna, June–July 2026 — Terra at half of 5.5 pricing, a deliberate price war move); GPT-5.5 (first full retrain since 4.5, 1M-token context, agent-oriented); ChatGPT + Codex
- **Moat**: Brand, largest consumer distribution, enterprise API share, unmatched capital stack
- **Competitors**: Anthropic, Google DeepMind, Meta, xAI, DeepSeek (open)
- **AI exposure**: **High** — AI is the entire business
- **Ecosystem position**: The archetypal frontier lab; key 2026 setback — Apple moved Siri's core AI to Google Gemini (Jan 2026); Stargate spans 7 US sites, 9+GW planned; IPO window reported late 2026–2027

**Anthropic** — San Francisco CA · 2021 · **Private, $965B (Series H, May 2026) — world's most valuable private company; S-1 filed June 2026, IPO possible as early as Oct 2026**
- **AI function**: Frontier lab (Claude) focused on enterprise, coding agents, safety
- **Business model**: API + enterprise licensing + Claude Code; ~$47B annualized revenue run-rate (gross, cloud-reseller-inflated — quality flag); ~80% of revenue from enterprise; 8 of Fortune 10 are customers
- **Key products**: Claude Fable 5 / Mythos 5 (June 2026, led SWE-bench Pro at 80.3%); Opus 4.8, Sonnet 4.6, Haiku 4.5; **Claude Code ~$2.5B annualized — the leading agentic coding product** (took ~15 points of AI-coding share from Cursor in a year)
- **Moat**: Enterprise/developer preference (~40% of enterprise LLM spend vs OpenAI ~27%), coding-agent ecosystem, safety brand, and a compute war-chest: Amazon (up to $25B, 5GW Trainium, $100B+ guaranteed revenue over a decade), Google Cloud ($200B commitment), xAI (~$40–45B for Colossus capacity)
- **Competitors**: OpenAI, Google DeepMind, Meta Muse, xAI
- **AI exposure**: **High**
- **Ecosystem position**: Enterprise-first frontier lab on a forced march to IPO; buys compute from direct rivals — the industry's clearest example of circular funding

**Google DeepMind** — Mountain View CA (orig. London) · 2010 (acquired 2014) · **Parent: Alphabet, ~$4.5T**
- **AI function**: Frontier models (Gemini) + research, feeding Alphabet's distribution
- **Business model**: Monetized through Alphabet: Search AI Mode, Gemini app, Google Cloud, Android/Workspace, Apple Siri licensing (reported ~$1B/yr, up to $5B)
- **Key products**: Gemini 3.5 Flash (agentic, 4x token speed, <half cost of rivals); Gemini 3 Pro (white-labeled as the new Siri brain, running on Apple silicon); Gemini 3.5 Pro delayed — a competitive flag; Gemini 4 pre-training begun
- **Moat**: DeepMind research + 2B+ device distribution + TPU compute + the Apple deal (a major OpenAI setback)
- **Competitors**: OpenAI, Anthropic, Meta, xAI
- **AI exposure**: **High for Alphabet's narrative** (Cloud +80%+ YoY growth); low-medium as share of total Alphabet revenue
- **Ecosystem position**: The hyperscaler-owned frontier lab with the deepest distribution moat; Gemini app ~950M MAU

**Meta AI (incl. FAIR)** — Menlo Park CA · parent **Meta Platforms (public; 2026 capex guidance $115–135B)**
- **AI function**: Consumer AI assistant across FB/IG/WhatsApp + frontier research + open models (Llama) + enterprise pivot
- **Business model**: Loss-leader AI embedded in social products, monetized via ads (Muse Spark's shopping mode) and new AI subscriptions; Muse API in private preview; AI revenue otherwise nascent
- **Key products**: **Muse Spark** (April 2026 — first closed-weight frontier model from Meta Superintelligence Labs, run by Alexandr Wang; strong at health benchmarks, weak at coding); Llama 4 + open Llama 5 (April 2026) — a dual-track reversal; Ray-Ban Meta glasses assistant
- **Moat**: The largest distribution on Earth (3B+ daily reach), ad cross-subsidy no rival lab has, and a 49% stake in Scale AI ($14.3B, June 2025)
- **Competitors**: OpenAI, Google, Anthropic, xAI; Qwen/DeepSeek in open weights
- **AI exposure**: **Low-Medium** — AI is a feature/cost center; the enterprise API is the swing factor
- **Ecosystem position**: Open-weights champion turned dual-track — a reversal driven by Llama 4's stumble and Chinese open models (Qwen derivatives ~69% share vs Llama ~11%)

**xAI** — SF Bay Area · 2023 · **Acquired by SpaceX (Feb 2026), valued ~$250B**
- **AI function**: Frontier models (Grok) + vertical compute (Colossus) + assistant inside X (~600M MAU)
- **Business model**: SuperGrok subscriptions, Grok API, Grok Build coding agent — and distinctively, **selling surplus compute to rivals**: Anthropic pays ~$1.25B/month through May 2029, Google ~$920M/month — roughly doubling SpaceX revenue run-rate to >$26B/yr
- **Key products**: Grok 4.5 (July 2026, 1.5T params); Grok 5 (~6T) training on Colossus II (1M+ H100-equivalents, ~2GW, 5 Doosan gas turbines, NVIDIA Rubin); Grok Build (Claude Code/Codex competitor)
- **Moat**: Vertical integration (SpaceX capital + X distribution + Tesla) and ownership of the industry's most-sought excess compute
- **Competitors**: OpenAI, Anthropic, Google, Meta — plus infrastructure rivals
- **AI exposure**: **High** — but now half model lab, half compute landlord
- **Ecosystem position**: The only lab whose compute, not model, is its biggest revenue driver; 2025 operating loss ~$6.4B; Musk admits it is "being rebuilt"

### 2.2 Model & inference platform companies

**Cohere** — Toronto, Canada (US ops) · 2019 · **Private, ~$7B (Aug 2025); reported ~$20B merger with Germany's Aleph Alpha (April 2026, unverified)** — Enterprise LLMs (Command A+, open-weights Apache 2.0) + RAG retrieval; ~85% of revenue from on-prem/private deployments for regulated industries; ~$240M ARR 2025; Oracle is customer+investor. *AI exposure: High. Position: the pragmatic enterprise alternative to US frontier labs; trails on general reasoning, wins on regulated workflows and control.*

**Together AI** — Menlo Park CA · 2022 · **Private, $8.3B (July 2026, Aramco Ventures-led)** — AI-native cloud for training + serving open models (DeepSeek, Kimi, etc.) at 6–60x cost savings vs closed labs; bookings crossed $1.15B annualized; ATLAS inference engine (up to 400% speedup); "headed toward public markets." *AI exposure: High. Risk: inference commoditization.*

**Fireworks AI** — Menlo Park CA · 2022 · **Private, $17.5B (July 2026 — 4.5x in 9 months)** — Enterprise inference + "specialized intelligence" (fine-tuned open models); crossed $1B annualized revenue (5x YoY); >40T tokens/day served (vs Google ~27T, OpenAI ~22T); 95% of tokens from customer-customized models; Microsoft partnership brings Fireworks to Azure. *AI exposure: High. Position: the "TSMC of AI factories" (Jensen Huang) — fastest-scaling private inference layer.*

**Hugging Face** — New York NY · 2016 · **Private, $7–20B (conflicting sources; $15B single-source Series F June 2026 unverified)** — The open-model hub (hundreds of thousands of models/datasets) + enterprise inference; the de facto standard for open-weights distribution; monetization remains the open question. *AI exposure: Medium. Position: the "Linux of AI" play.*

**Scale AI** — San Francisco CA · 2016 · **Private, $25–30B; S-1 filed March 2026, IPO expected Q3–Q4 2026** — AI data infrastructure: annotation, synthetic data, RLHF, evaluation for every major lab + the US DoD; most capital-efficient of the picks-and-shovels layer. Flags for IPO: customer concentration (a handful of labs), lab-internal data pipelines, and Meta's 49% stake with founder Alexandr Wang now also Meta's chief AI officer. *AI exposure: High — the toll bridge on AI's data flywheel.*

**AI21 Labs** — Tel Aviv, Israel · 2017 · **Private, ~$1.4B** — Enterprise LLMs (Jurassic/Jamba — first production Mamba hybrid); ~$50M ARR; reported Nvidia acquisition talks ($2–3B) that did not close, then a reported pivot to Nebius talks (status conflicting). Relevance is architectural/IP, not frontier scale.

**Mistral AI (context, non-US)** — Paris, France · 2023 — reported raising ~€3B at ~€20B (~$23B) valuation (June 2026); Europe's nearest frontier competitor at a fraction of US-lab scale.

---

# LAYER 3 — AI CLOUD

### 3.1 Hyperscalers

**Microsoft (MSFT)** — Redmond WA · 1975 · **Public, ~$3.6T**
- **AI function**: Hyperscale AI infrastructure (Azure AI) + Copilot across Windows/M365/GitHub/Dynamics + OpenAI distribution economics + Maia silicon
- **Key numbers**: Azure +43% YoY (AI contributed >11pts; Azure crossed $100B annual revenue); M365 Copilot 30M+ paid seats; commercial RPO $678B (+84%) — the deepest software backlog in the industry; FY26 capex ~$116B, ~$190B guided CY2026; OpenAI contributed ~$24B of FY26 revenue
- **Moat**: Distribution + enterprise workflow + the largest OpenAI commercial channel; capacity-constrained (demand > supply)
- **Competitors**: AWS, Google Cloud, Oracle
- **AI exposure**: **High** — the growth engine; OpenAI concentration declining as share of incremental growth
- **Ecosystem position**: The largest AI-cloud tenant chokepoint — monetizes both upstream (compute, Maia, Stargate) and downstream (Copilot seats)

**Amazon (AMZN)** — Seattle WA · 1994 · **Public, ~$3.1T (crossed $3T Aug 2026)**
- **AI function**: AI infrastructure-as-a-service (Bedrock model gateway, SageMaker, Trainium/Inferentia) + Anthropic's compute/distribution partner
- **Key numbers**: AWS Q2 2026 $42.2B (+37% YoY, fastest in 18 quarters); AI business >$25B annualized run-rate (triple digits YoY); Bedrock Q2 spend exceeded all prior quarters combined; Trainium sold out through 2027 (Anthropic committed up to 5GW, OpenAI ~2GW); Project Rainier 500K+ Trainium2 chips for Claude; AWS op margin held at 39.4% despite buildout; capex ~$200B+ guided 2026
- **Moat**: Silicon-scale vertical integration + the Anthropic relationship (additional $5B, 2026)
- **Competitors**: Azure, Google Cloud, Oracle
- **AI exposure**: **High** — AI ~15% of AWS revenue and growing triple digits
- **Ecosystem position**: The second AI hyperscaler by virtue of Trainium + being Anthropic's channel

**Alphabet (GOOGL)** — Mountain View CA · 1998 · **Public, ~$4.5T (world #2)**
- **AI function**: Full-stack AI — Gemini, DeepMind, TPUs, Google Cloud, Gemini app
- **Key numbers**: Google Cloud Q2 2026 $24.8B (+82% YoY — fastest hyperscaler — at 35.6% op margin); Gemini Enterprise used by ~90% of Fortune 100; Gemini app ~950M MAU; APIs ~22B tokens/min; third-party TPU capacity (Blackstone JV ~500MW) ramping; capex raised to $195–205B for 2026; FCF negative (-$5.9B) on capacity growth
- **Moat**: Owns the model, the chip, and the consumer surface — the only hyperscaler with a ~1B-user AI assistant; TPU cost structure
- **Competitors**: Microsoft, Amazon, Meta (open), Anthropic/OpenAI at model layer
- **AI exposure**: **High** — Cloud is the fastest-growing hyperscaler; GenAI product revenue grew ~800% YoY Q1 2026

**Oracle (ORCL)** — Austin TX · 1977 · **Public, ~$423B (down 64% from Sept 2025 peak)**
- **AI function**: GPU-cloud AI infrastructure for OpenAI (Stargate), xAI, Meta — the "AI data-center pure play among software giants"
- **Key numbers**: OCI +93% YoY ($5.8B/quarter); RPO backlog $638B (+363% YoY, ~1.5x market cap, roughly half from OpenAI's ~$300B 5-yr Stargate commitment); S&P downgrade to BBB- (July 2026); $130–167B debt; negative FCF ~-$24B; OpenAI (its anchor tenant) lost $21B on $13B revenue
- **Moat**: First-mover GPU-capacity contracts and the energy/DC pipeline with OpenAI — and the segment's most visible counterparty/credit risk
- **Competitors**: AWS, Azure, Google Cloud
- **AI exposure**: **High** — the business IS AI infrastructure now
- **Ecosystem position**: "Selling shovels to the model labs" on extreme leverage; the blowup candidate if OpenAI pays late or Stargate is re-scoped

**IBM** — Armonk NY · 1911 · **Public, ~$224B** — Enterprise AI orchestration: watsonx platform + open Granite models + watsonx Orchestrate (cross-vendor agent supervisor launched at Think 2026); AI book of business >$2B bookings (~75–80% consulting-weighted); acquired Confluent; deliberately doesn't race frontier labs. *AI exposure: Medium — real but services-weighted. Position: the "AI glue" player for regulated enterprises.*

### 3.2 AI-native clouds / GPU clouds

**CoreWeave (CRWV)** — Roseland NJ · 2017 · **Public (IPO March 2025), ~$49B**
- **AI function**: The pure-play GPU cloud — rents NVIDIA clusters to frontier labs and enterprises
- **Business model**: Multi-year contracted GPU-as-a-service; Q1 2026 backlog $99.4B (~98% from Microsoft, OpenAI, Meta, Anthropic — **Microsoft alone ~62% of revenue**); owns 60+ DCs; holds a 10% equity stake in OpenAI (July 2025)
- **Moat**: First-mover capacity + the OpenAI relationship (~$22.4B of backlog)
- **Competitors**: Nebius, Lambda, Crusoe, hyperscalers
- **AI exposure**: **Very High** — and extremely concentrated; stock round-tripped from $136 to low-$90s on AI-capex jitters
- **Ecosystem position**: The template for GPU-cloud public markets — everything hinges on continued lab capex

**Lambda** — San Jose CA · 2012 · **Private, $5.9B Series E (Nov 2025); Forge secondary implies ~$9B; IPO targeted H2 2026** — GPU cloud + hardware retail; Microsoft AI-infrastructure deal (Nov 2025); ~$1B cloud revenue target 2026; strongest developer brand among AI clouds.

**Crusoe** — Denver CO · 2018 · **Private, ~$23.6B secondary marks; pre-IPO round reported at $30–40B (H1 2027 window)** — "Digital energy": gas- and renewable-powered DCs + GPU cloud; ~4.9GW contracted AI infrastructure (OpenAI/Oracle Stargate, Microsoft 900MW, Meta); revenue guided ~$500M (2025) → ~$2B (2026); NVIDIA/Fidelity/Founders Fund backed. *Position: the Stargate-era build-out partner; the highest-flying private GPU cloud.*

**Nebius (NBIS)** — Amsterdam (Nasdaq-listed, Yandex successor) · 2023 · **Public, ~$55B (up 230% in H1 2026)** — AI-native cloud; Q1 2026 AI Cloud revenue $390M (**+841% YoY**), ARR ~$1.9B; FY26 capex $20–25B; owns ~4GW+ contracted power; NVIDIA is a strategic investor; fell 18% in a week when Meta announced building its own cloud. *AI exposure: Very High — trades ~55x trailing revenue; the high-beta proxy for AI-compute capex.*

**Baseten** — San Francisco CA · 2019 · **Private, $13B (June 2026 — 6x in under a year)** — Pure inference cloud: routes prompts to the cheapest open/closed model across ~18-20 GPU providers; ~$600M annualized revenue (20x YoY), 1B+ inference calls/day; customers: Cursor, Notion, Abridge. *Position: multi-cloud arbitrage; margin-squeeze risk in the inference price war.*

**Modal** — New York NY · 2021 · **Private, $4.65B (May 2026)** — Serverless GPU compute (scale 0→1,000 GPUs in minutes); ~$300M annualized revenue (5x in 8 months) driven by AI coding agents (Claude Code) and agentic workloads; the abstraction layer on top of everyone else's GPUs — profits without owning a DC.

**RunPod** — Philadelphia PA · 2022 · **Private, $1.0B (June 2026)** — Developer-first GPU cloud on NVIDIA *and* AMD; ~$240M ARR (2x in 5 months), 1M+ developers; the long-tail GPU cloud monetizing the developers hyperscalers ignore; rejected >$500M buyout offers.

---

# LAYER 4 — AI APPLICATIONS

### 4.1 Enterprise AI software

**Salesforce (CRM)** — San Francisco CA · 1999 · **Public, ~$158B (-30% YTD)** — Agentforce agentic CRM: ARR $1.2B (+205% YoY), 29,000+ deals, 3.8B Agentic Work Units processed; combined AI+Data ARR ~$3.4B (incl. Informatica); consumption pricing is the industry test of whether agents expand or cannibalize seats. *AI exposure: Medium (Agentforce ~3% of FY26 revenue $41.5B — trajectory is the story).*

**ServiceNow (NOW)** — Santa Clara CA · 2004 · **Public, ~$129B (best 3-month performer in group, +37%)** — The "agentic software" purest large-cap: AI ACV >$1B in Q2 2026 (doubling its prior goal); AI Control Tower governance with 500+ customers in 6 months; Now Assist ~3,000 customers at 25–40% premium; L1 agents close 80–85% of service requests unaided; revenue +24% to $3.99B/quarter. *AI exposure: High (relative) — sets the industry template for agents + governance + gain-share pricing.*

**Adobe (ADBE)** — San Jose CA · 1982 · **Public, ~$105B (-43% YoY, ~10x fwd P/E)** — Firefly generative AI embedded across Creative Cloud; Q2 FY26 revenue $6.62B (+13%) with AI driving engagement but no clean AI revenue line; Adobe Stock being cannibalized faster than expected by generative creation; Semrush acquisition (~$480M ARR). *AI exposure: Medium — the creative-AI disruption case study; the market prices in the worst case.*

**Palantir (PLTR)** — Denver CO · 2003 · **Public, ~$413B (~50x forward revenue)** — AIP (AI Platform) + Foundry ontology: Q2 2026 revenue $1.94B (+93%, fastest ever), US commercial +149% (AIP 49% of revenue); US government +90%; FY26 guide $8.15B (+82%); "sovereign AI" positioning (customers distrust frontier labs); stock swung from $207 ATH to ~$123 then +30% post-earnings — the segment's most extended multiple. *AI exposure: High — nearly all growth is AI-platform-driven.*

**C3.ai (AI)** — Redwood City CA · 2009 · **Public, ~$1.4–1.6B (-50% YoY)** — Enterprise AI applications; FY26 revenue $250M (**-36%**) blamed on "unspeakably horrible" sales execution; ~35% workforce cut, consumption pricing restructure; the cautionary tale — the picks-and-shovels app layer got bypassed by hyperscaler-native AI platforms.

**Snowflake (SNOW)** — Bozeman MT · 2012 · **Public, ~$97B (+40% in a week post-Q1)** — Data cloud + AI layer: Cortex Code ("CoCo") AI coding agent — 7,100+ accounts in a quarter (fastest adoption in company history, largest driver of the FY guide raise); product revenue $1.33B (+34%); NRR 126%; $6B 5-yr AWS infrastructure deal + OpenAI $200M expansion; GAAP-profit target FY28. *AI exposure: Medium — no separate AI line, but AI products now drive guidance raises. Position: "data gravity" + AI gateway, countering Databricks.*

**Databricks** — San Francisco CA · 2013 · **Private, $188B (July 2026; $134B Feb 2026; $62B Dec 2024)** — Data + AI engineering platform (lakehouse, model serving, AI Gateway); AI products >$1.4B annualized; total ARR $5.4B+ (+65%); 20,000+ customers; **no 2026 IPO** (CEO calls 2026 "terrible" for IPOs; earliest window 2027, behind the SpaceX/OpenAI/Anthropic float wave); raised citing GPU shortage. *Position: the largest private enterprise-AI franchise; IPO below $188B would read as a down round.*

**UiPath (PATH)** — New York NY · 2005 · **Public, ~$7.8B** — Agentic automation: Maestro orchestration + AI agents + IDP; first-ever AI ARR disclosure ~$200M (~10% of ARR, "pilot to production"); FY26 revenue $1.61B (+12.7%); ~2.3x revenue multiple = "legacy RPA compression." *Position: must prove its orchestration layer wins as hyperscaler-native agents commoditize basic automation.*

### 4.2 Developer tools

**Anysphere / Cursor** — San Francisco CA · 2022 · **Being acquired by SpaceX (announced June 16, 2026, all-stock ~$60B — the largest startup acquisition ever; expected close Q3 2026)**
- **AI function**: AI-native code editor (tab completion → Composer → autonomous agent)
- **Business model**: Per-seat subscriptions (Pro ~$20, Business $40–60, Ultra ~$200/mo); ARR ~$100M (Jan 2025) → ~$1B (Nov 2025) → ~$2B (Feb 2026) → $2.6–4B+ (June 2026); >1M DAU, >half of Fortune 500
- **Moat**: Best-in-class code-intelligence UX and dev mindshare; runs heavily on Anthropic models
- **Competitors**: GitHub Copilot, Claude Code, OpenAI Codex, Replit, Cognition
- **AI exposure**: **High**
- **Ecosystem position**: The app-layer crown jewel of Musk's stack — but AI-coding share slipped from ~41% (June 2025) to ~26% (May 2026) as Claude Code won developers

**Windsurf (ex-Codeium)** — Mountain View CA · 2021 · **Carved up, July 2025** — Google signed a ~$2.4B license + talent deal (not an acquisition; co-founders joined DeepMind); Cognition bought the remnant (brand, IDE, ~$82M ARR) for ~$250M. The textbook "reverse acquihire" (like Character.AI/Inflection) — ~$3B of value distributed across Google/OpenAI (collapsed)/Cognition.

**Replit** — San Francisco CA · 2016 · **Private, $9B (Series D, March 2026; 3x in 6 months)** — Browser IDE + autonomous software agent ("vibe coding" — natural language to deployed app); 50M+ users, ~$150M ARR (from $2.8M in under a year), targeting $1B by end-2026; effort-based pricing sparked 2025 backlash; Agent 4 adds design + coding canvas.

**Cognition (Devin)** — New York NY · 2023 · **Private, $26B (Series D, May 2026)** — Autonomous AI software engineer; ARR $37M (May 2025) → $492M (May 2026, ~13x); ~90% of its own code written by Devin; enterprise clients incl. Goldman Sachs, NASA, US Army; acquired Windsurf for distribution; ~50x revenue — the most aggressive multiple in the segment.

**Vercel** — San Francisco CA · 2015 · **Private, $9.3B (Series F, Sept 2025)** — Frontend cloud + v0 AI app builder; ~30% (rising toward 50%) of platform apps now built by AI agents; ~$340M ARR run-rate (+84% YoY); "AI Cloud" infrastructure (AI SDK, Gateway, Agent); CEO says IPO-ready. *Position: the deployment layer AI-generated code lands on.*

### 4.3 Consumer AI

**Perplexity** — San Francisco CA · 2022 · **Private, ~$20–23B (Jan–June 2026)** — AI answer engine with citations; annualized revenue crossed $450M (March 2026); **dropped its ad business entirely (Feb 2026)** in a subscription-only trust bet (revenue jumped ~50% m/m after); Comet AI browser + Comet Plus (pays publishers 80% of subscription revenue); ~45–50x revenue. *Position: the leading AI-search challenger to Google, and a live experiment in AI-search unit economics.*

**Midjourney** — San Francisco CA · 2021 · **Private, bootstrapped — no VC ever raised; ~$500–600M revenue run-rate, ~40 employees** — Best-in-class image generation (V7, web editor); profitable within 6 months of launch; declined VC and reportedly Apple; the premium niche is being squeezed as GPT-image and Gemini bundle image gen into chat and Creative Cloud.

**Runway** — New York NY · 2018 · **Private, $5.3B (Series E, Feb 2026)** — AI video + world models; Gen-4.5, Director Mode, first world model (Dec 2025); ~$90–100M+ ARR; Lionsgate partnership; Western leader after OpenAI shut down Sora (~$15M/day compute vs ~$2.1M lifetime revenue) — but faces cheap Chinese models (Kling ~44% cheaper) and Google Veo bundling.

**Luma AI** — San Francisco CA · 2021 · **Private, ~$4B (Nov 2025)** — Dream Machine video (25–30M+ users) + a 2GW Saudi Arabia supercomputing cluster (Project Halo with Humain/PIF) — a two-track bet: consumer app now, world-model/AGI infrastructure later; profitability unproven.

**ElevenLabs** — New York NY · 2022 · **Private, $11B (Series D, Feb 2026; ~$22B tender talks reported)** — Voice AI: TTS, cloning, dubbing, voice agents; ARR >$330M (end-2025), >$500M annualized by early 2026; v3 multilingual (32+ languages), Music Marketplace (March 2026, licensed via Kobalt/Merlin); enterprise clients: Deutsche Telekom, Revolut, Square. *Position: the infrastructure layer of the AI voice stack.*

**Suno** — Cambridge MA · 2023 · **Private, $5.4B (June 2026)** — AI music generation; ~90.4% of commercial AI music (SIQA Q1 2026); ~7M tracks/day; ARR ~$300M run-rate; Warner Music licensing deal; DistroKid direct-distribution moat; existential risk: active UMG/Sony/GEMA suits (61,000+ songs) — Udio's collapse shows strategic missteps are fatal.

**Character.AI** — Menlo Park CA · 2021 · **Private, ~$1B (down from $2.5B peak)** — Consumer companions; Google's ~$2.7B license + talent deal (Aug 2024) hired Noam Shazeer — who then left Google for OpenAI (June 2026), the very talent the deal was structured to keep; now monetizing via microtransactions and mid-chat ads; settled teen-suicide lawsuits in principle (Jan 2026). *Position: the cautionary case in app-layer AI.*

### 4.4 Vertical AI

**Healthcare:**

**Abridge** — Pittsburgh PA · 2018 · **Private, $5.3B (June 2025)** — Ambient AI clinical documentation; crossed $100M annual revenue (~$117M contracted ARR); 300+ health systems, 100M+ patient conversations/yr; KLAS #1 ambient AI two years running (~30% category share); trained on 1.5M+ proprietary encounters. **The existential threat: Epic launched its native ambient scribe (Aug 2025), sold its Abridge stake, and ended co-development** — the platform-capture risk made flesh; Abridge is diversifying to prior-auth and clinical decision support.

**Ambience Healthcare** — San Francisco CA · 2020 · **Private, ~$1.25B (July 2025)** — Ambient scribe + "AI operating system" for clinical workflows; ~$30M ARR (+58% in 5 months); ~13% category share; inpatient-focused niche; Cleveland Clinic, UCSF, Houston Methodist customers; faces the same Epic-native threat with lower scale.

**Tempus AI (TEM)** — Chicago IL · 2015 · **Public, ~$9.4B** — Precision medicine: AI over a proprietary clinical-genomic data moat (exomes, RNA, imaging, real-world EHR); FY2025 revenue $1.27B (+83%), FY26 guided $1.59–1.60B with first positive adjusted EBITDA; hybrid diagnostics + data licensing + pharma partnerships (Merck, Gilead). *Position: the public bellwether for healthcare AI — closest to a "Tesla of health data" narrative.*

**Recursion (RXRX)** — Salt Lake City UT · 2013 · **Public, ~$1.7B (from >$20 peak)** — AI drug discovery via phenomics; FY2025 revenue $74.7M (+27%); Exscientia merger closed; ~5 clinical + 15 discovery programs; CEO change early 2026. *Position: the largest public AI-native biotech — a cautionary public-reset example for the whole vertical.*

**Hippocratic AI** — Palo Alto CA · 2023 · **Private, ~$3.5B (Nov 2025)** — Safety-first, non-diagnostic patient-facing voice agents; 150–180M+ clinical interactions across 31 coordinated LLMs ("Polaris" safety validated by 7,500+ clinicians); nearly all top-10 US payors; Grove AI acquisition adds pharma trial agents; platform-wide WellSpan expansion (160K calls/month). *Position: did NOT exit — repositioned upward from "LLM for healthcare" to scale deployment; non-diagnostic stance avoids FDA risk but caps ASP.*

**Legal:**

**Harvey** — San Francisco CA · 2022 · **Private, $11B (March 2026); ~$15.5B round reported (mid-2026, unverified)** — Legal workflow AI on OpenAI/Anthropic foundation models (**builds no models**); ARR ~$190M (Jan 2026) → ~$350M+ annualized; 100,000+ lawyers, majority of AmLaw 100, PwC global partnership (4,000+ professionals); ~$1,200–3,000/attorney/month; ~44x ARR. *Position: poster child for "the vertical layer wins even as frontier models commoditize" — moat is workflow, trust, and enterprise rollout.*

**Business workflow / agents:**

**Sierra** — San Francisco CA · 2023 · **Private, $15.8B (May 2026; ~105x ARR)** — Agentic customer experience (voice/chat/email CX agents; expanding into claims, mortgage, healthcare revenue cycle); ARR >$150M, 8 consecutive growth quarters; 40%+ of Fortune 50 and 1 in 3 largest global banks; multi-model "constellation" (OpenAI/Anthropic + proprietary layers + failover); Bret Taylor (OpenAI chairman) founding CEO; IPO flagged as early as 2027.

**Decagon** — San Francisco CA · 2023 · **Private, $4.5B (Jan 2026)** — AI support agents with ~70–80% deflection; ~$35M ARR (80–110x forward at round); customers: Avis, Block, Duolingo, Rippling, Notion; the product-led, lower-ASP counterweight to Sierra.

**Writer** — San Francisco CA · 2020 · **Private, ~$4.5B (2026, unverified)** — Full-stack enterprise genAI platform with **own Palmyra models** (rare among app-layer cos) — control over cost/privacy/customization vs reseller peers; 250+ enterprise customers (PwC, L'Oréal, Uber, Intuit).

**Glean** — Palo Alto CA · 2019 · **Private, $7.2B (June 2025); ~$12B round reported (April 2026, unverified)** — Enterprise search + knowledge graph + AI work assistant; ARR ~$100M (early 2025) → ~$300M (May 2026); 100M+ agent actions/yr; model-neutral across 15+ LLMs; pivoting to a "neutral intelligence layer" (middleware between LLMs and corporate data). Core risk: Microsoft Copilot bundling at near-zero marginal cost.

**Notion** — San Francisco CA · 2013 · **Private, ~$11B (Jan 2026 secondary tender; secondary shares down ~38%)** — Productivity suite with AI built in; ~$600M ARR (+50% YoY), profitable since 2023 on ~$330–633M total funding — the most capital-efficient name in the cohort; >50% of ARR from AI-enabled customers; 1M+ custom agents built on the Developer Platform; 17x trailing revenue is the relative-value anchor of the private app layer.

---

## Non-US context (one-liners)

- **TSMC** ~$2.18T — fabricates virtually all AI accelerators (N3/N2 + CoWoS); the physical base of the stack
- **ASML** ~$663–671B — EUV monopoly; gates leading-edge supply
- **Arm** ~$302B — every custom XPU (TPU, Trainium, MTIA, Maia) is Arm-based
- **SK Hynix** ~$735–845B — HBM #1 (~52–62% share); $26.5B US ADR IPO (July 2026); -50% from peak after Q2 — the AI-sentiment canary
- **Samsung** ~$1.0–1.15T — HBM #2, first HBM4E samples
- **Mistral** — ~€20B (~$23B) talks — Europe's nearest frontier competitor
- **Cohere** — Canadian; **AI21** — Israeli; **Nebius** — Dutch (Nasdaq-listed); **Eaton** — Ireland-domiciled

---

## Cross-layer investment themes

1. **The value funnel**: ~$650–700B of 2026 hyperscaler capex ultimately flows to NVIDIA/TSMC/HBM/equipment/power. NVIDIA (~$5.4T) sits at the base; the equipment trio (AMAT ~$428B, Lam ~$390B, KLA ~$260B) and power/cooling (Vertiv ~$103B, Eaton ~$174B) are the cleanest "picks-and-shovels" beneficiaries regardless of which accelerator wins.
2. **Merchant vs custom silicon inflection**: Broadcom/Marvell custom ASICs (~28% of AI servers) + Cerebras/Groq/SambaNova challengers are eroding the merchant duopoly; NVIDIA is responding with IP licensing (Groq), cross-investments (Intel $5B, Marvell $2B), and Rubin-level integration. The bet: whether NVIDIA's NVLink/CUDA gravity holds against open-Ethernet + custom silicon.
3. **Inference overtakes training**: est. 2/3 of AI compute by end-2026 — favoring low-latency inference (Groq, Cerebras), open-model serving (Fireworks $17.5B, Together $8.3B, Baseten $13B), on-device (Qualcomm), and driving an inference price war that compresses GPU-cloud margins (Baseten/Modal/RunPod).
4. **Agentic software is the second act**: monetization is shifting from seats to consumption (Salesforce AWUs, ServiceNow Assist packs, C3 vCPU-hours) — Agentforce $1.2B ARR (+205%), ServiceNow AI ACV >$1B, Snowflake's CoCo 7,100 accounts/quarter. Meanwhile seat-based SaaS is being repriced (Salesforce -30% YTD, Adobe -43% YoY).
5. **Power is the moat**: 307GW announced, grid queues to 2030, <5% powered shell left in NoVA — favoring power-secured players (Crusoe, Nebius, Vantage, Vertiv, Eaton) and gas-to-compute models.
6. **Circularity and counterparty risk**: labs are each other's largest customers (Anthropic↔xAI↔Google; OpenAI↔Amazon/Microsoft/Oracle/NVIDIA). Great while capex grows; a single lab's pause propagates through Oracle ($638B backlog), CoreWeave ($99B backlog, 62% Microsoft), and every GPU cloud.
7. **The IPO wave prices the froth**: Cerebras (done), Scale (Q3–Q4 2026), Lambda (H2 2026), Anthropic (possibly Oct 2026), OpenAI, Crusoe, Databricks (2027), Sierra (2027?) — private marks (Anthropic $965B, OpenAI $852B, Databricks $188B, Cognition $26B) face public-market scrutiny on revenue quality (gross run-rates inflated by cloud reseller pass-through).
8. **Where value accrues**: infrastructure + frontier labs with distribution + verticals with proprietary data/workflows (Tempus, Abridge, Harvey) — vs the thin application layer that depends on model pricing it doesn't control.

## Risk register (consolidated)

- **Concentration**: Broadcom's $100B FY27 target rests on Google/OpenAI/Meta; Credo's top-3 = ~90% of revenue; CoreWeave 62% Microsoft; Oracle ~half of backlog on OpenAI; Scale's dependence on a few labs (Meta owns 49%)
- **Valuation excess**: Palantir ~50x forward; Nebius ~55x trailing; Astera ~245x trailing; Sierra ~105x ARR; Cognition ~50x revenue; Anthropic ~20.5x gross run-rate on unprofitable cash flows
- **Capex cyclicality**: ~$1.4T funding gap vs $650–700B annual spend; SK Hynix's -50% drawdown from peak and Oracle's -64% show how violently sentiment reprices; Meta building its own cloud is a live deflationary datapoint for GPU rental
- **Regulatory/export control**: June 2026 US EO gating frontier model releases; Claude Fable 5 briefly suspended under export controls; SMCI DOJ case; China exposure in equipment (Lam 26–34%, KLA 26–30%)
- **Platform capture of the app layer**: Epic native scribe vs Abridge/Ambience; Microsoft Copilot vs Glean; Salesforce Agentforce vs Sierra/Decagon; Google/OpenAI bundling image/video/voice into flagship products (Midjourney, Runway, ElevenLabs all directly substituted)
- **Litigation**: AI music (UMG/Sony/GEMA vs Suno, 61K+ songs); Character.AI teen-safety settlements; frontier-model copyright exposure
- **Power/physical constraints**: permitting moratoria, water, gas turbines (Colossus uses 5 × 380MW Doosan turbines), interconnection queues to 2030

## Watchlist / calendar

- **Aug 11, 2026** — CoreWeave Q2 earnings (the GPU-cloud sentiment bellwether)
- **H2 2026** — Scale AI IPO (Q3–Q4); Lambda IPO; Perplexity's next round; SpaceX–Cursor close (Q3)
- **Oct 2026** — earliest Anthropic IPO window (S-1 filed June 2026)
- **2026–27** — OpenAI IPO window; Lightmatter S-1; SambaNova 2027 IPO talk; Sierra IPO flagged 2027; Databricks earliest 2027
- **Q3 2026** — AMD MI400 revenue ramp; NVIDIA Vera Rubin first shipments; Stargate capacity milestones
- **Continuous** — HBM4 qualification status (binding constraint on every 2027 accelerator); Epic native-scribe rollout vs Abridge; Microsoft Copilot seat adds; the inference price war (Fireworks/Together/Baseten pricing)

---

*Methodology note: compiled August 9, 2026 from live web research across ~110 sources (market data, filings, earnings transcripts, funding announcements). Market caps and valuations are as of the dates cited and move daily; items marked "unverified" reflect conflicting or single-source reports. This document is information, not investment advice.*
