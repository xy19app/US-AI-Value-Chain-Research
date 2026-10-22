# Top 20 AI Companies — Investment Profiles
**Senior TMT equity research · August 9, 2026 · Capstone of the AI research stack (Map → DB → Ranking → Supply Chain → Value Capture)**

> **Data as of: August 9, 2026** — static research snapshot. Updated periodically through the research process; not live.

## Selection methodology

20 companies, five per category. Selection criteria (in order): (1) strategic importance to the AI ecosystem, (2) economic value capture potential, (3) competitive moat, (4) exposure to AI growth, (5) ability to disrupt other industries, (6) long-term investment relevance — **not market capitalisation**. Two picks are non-US (TSMC, DeepSeek) because an investor cannot analyse the global AI industry without them.

**Notable omissions (and why):** AMD/Arista (category leaders, but their themes — merchant #2, Ethernet systems — are captured by NVIDIA/Broadcom); ASML/SK Hynix/Lam (critical bottlenecks, but non-US or represented by Micron; see honorable mentions in the ecosystem map); Oracle (must-watch credit story, not a "winner"); Snowflake/Databricks (enterprise data platforms — track, but ServiceNow/Palantir carry the app-layer thesis); Salesforce (Agentforce real, but ServiceNow is the higher-quality agentic expression); xAI vs CoreWeave both included as disruptors.

---

# CATEGORY 1 — AI INFRASTRUCTURE WINNERS

### 1. NVIDIA (NVDA) — Santa Clara, CA · Public ~$5.42T
- **Overview:** Merchant AI accelerator + full-stack rack systems supplier; CUDA software ecosystem; the industry's compute layer.
- **AI strategic role:** The bottleneck and the toll — every frontier lab and hyperscaler buys NVIDIA first; CUDA is the industry's programming standard.
- **Value chain position:** Layer 1 — accelerator silicon, rack integration, private interconnect (NVLink), AI software.
- **AI revenue exposure:** *Current:* ~90% of revenue is AI data center (~$170B+ run-rate, est.). *Future:* rising — inference buildout + Vera Rubin ramp (Q3–Q4 2026) + NVLink Fusion expansion; risk from custom silicon (~28% of AI servers and rising).
- **Moat:** *Technology:* CUDA + annual architecture cadence. *Ecosystem:* 15 years of installed software, libraries, talent. *Data:* usage telemetry from the largest AI workload base. *Distribution:* rack-level integration; every lab adopts at launch. *Switching costs:* extreme — CUDA-native stacks.
- **Growth drivers:** Rubin/Blackwell demand (400K GB300 pre-orders), inference buildout, NVLink Fusion, software/rental annuity.
- **Key risks:** *Competition:* AMD MI400, custom silicon (Broadcom/Marvell/TPU). *Commoditisation:* merchant GPUs eroding at the margin. *Regulation:* export controls. *Supply chain:* HBM4 allocation, CoWoS. *Valuation:* ~70x forward — priced for perfection.
- **Monitor:** DC revenue growth rate, custom-silicon share of AI servers, HBM4 qualification, Rubin ramp, inference revenue mix, gross margin.
- **Thesis — Bull:** Training + inference duopoly through 2028; CUDA gravity compounds. **Bear:** Custom silicon + open Ethernet commoditise the compute layer; the ~70x multiple leaves no error margin.
- **Competitors:** AMD, Broadcom, Google TPU, Cerebras, Marvell.

### 2. TSMC (TSM) — Hsinchu, Taiwan · Public ~$2.18T
- **Overview:** The world's leading-edge foundry — fabricates virtually all AI accelerators (NVIDIA, AMD, Broadcom XPUs, TPU, Trainium, Maia) plus dominant CoWoS advanced packaging.
- **AI strategic role:** The physical base of the entire AI stack; the #1 global bottleneck.
- **Value chain position:** Layer 2 — foundry + advanced packaging.
- **AI revenue exposure:** *Current:* HPC segment >50% of revenue, AI-specific est. 25–30%. *Future:* rising — CoWoS scarcity premium, N2 ramp, AI demand.
- **Moat:** *Technology:* N3/N2 process leadership + CoWoS. *Ecosystem:* every design IP ported; multi-billion-NRE lock-in. *Data:* process know-how accumulated over decades. *Distribution:* capacity allocation power. *Switching costs:* extreme — designs are node-specific.
- **Growth drivers:** AI accelerator volume, CoWoS capacity, price increases per generation, 2nm leadership.
- **Key risks:** *Geopolitics:* Taiwan concentration is the industry's single-point risk. *Competition:* Intel 18A, Samsung (long shot). *Commoditisation:* none near-term. *Regulation:* export-control exposure. *Valuation:* re-rated but still the quality anchor.
- **Monitor:** Monthly revenue, CoWoS capacity additions, N2 ramp, utilization, AI-customer mix.
- **Thesis — Bull:** Leading-edge monopoly deepens; pricing power each node. **Bear:** Geopolitical shock; customers demand price concessions as capacity normalises.
- **Competitors:** Samsung Foundry, Intel (18A).

### 3. Broadcom (AVGO) — Palo Alto, CA · Public ~$2.0T
- **Overview:** Custom AI accelerator (XPU) co-designer for hyperscalers + the merchant Ethernet switching monopoly; the primary counterweight to NVIDIA.
- **AI strategic role:** The custom-silicon toll — Google TPU, Meta MTIA, OpenAI "Jalapeño", Anthropic programs all run through its design teams; Tomahawk switches connect every cluster.
- **Value chain position:** Layer 1 — custom ASIC design + networking silicon.
- **AI revenue exposure:** *Current:* AI revenue $10.8B/quarter (+143% YoY), ~31% of revenue guided toward ~54% by Q3 FY26. *Future:* >$100B FY27 on $128B binding purchase commitments.
- **Moat:** *Technology:* co-design + packaging expertise. *Ecosystem:* none of its own — the moat is *customer lock-in*: multi-year, multi-GW binding contracts. *Switching costs:* extreme — chip-to-workload co-design.
- **Growth drivers:** Hyperscaler custom-silicon shift (TPU v8, MTIA v4, Jalapeño 2027), Tomahawk 6/1.6T cycle.
- **Key risks:** *Competition:* Marvell, MediaTek, NVIDIA merchant. *Commoditisation:* ASIC design could commoditise as programs standardise. *Regulation:* export controls. *Concentration:* Google/Alphabet dependence. *Valuation:* rich but commitment-backed.
- **Monitor:** AI revenue guide, binding-commitment additions, new XPU customers, Tomahawk share, backlog.
- **Thesis — Bull:** Custom silicon + switching capture the non-NVIDIA compute dollar through 2030. **Bear:** Hyperscalers bring design in-house; a single capex pause breaks the narrative.
- **Competitors:** Marvell, NVIDIA, MediaTek, emerging design startups.

### 4. Micron (MU) — Boise, ID · Public ~$990B
- **Overview:** #1 US memory; HBM3E/HBM4 + AI DRAM/NAND — the only Western HBM producer, sold out through 2027.
- **AI strategic role:** The memory bottleneck — HBM allocation decides every 2027 accelerator program.
- **Value chain position:** Layer 1 — memory (HBM/DRAM/NAND).
- **AI revenue exposure:** *Current:* HBM + AI DRAM is the majority of profit; FQ3 2026 revenue +346% at 84.6% gross margin. *Future:* HBM ~40% of DRAM market and +58% YoY in 2026; HBM4 volume 2027; the 2028 question is the cycle.
- **Moat:** *Technology:* HBM4 first-mover, ahead of schedule. *Ecosystem:* qualified with NVIDIA. *Data:* N/A. *Distribution:* Western supply-chain premium. *Switching costs:* high — per-generation qualification cycles.
- **Growth drivers:** HBM content per accelerator (doubling per generation), AI server DRAM, sold-out contracts, price environment.
- **Key risks:** *Competition:* SK Hynix (52–62% share), Samsung, CXMT (China, ~$484B IPO). *Commoditisation:* commodity DRAM structurally deflationary. *Regulation:* China export controls. *Valuation:* peak-cyclical discount.
- **Monitor:** HBM gross margin, sold-out status, HBM4 qualification, DRAM contract prices, CXMT capacity.
- **Thesis — Bull:** Contractually bound book through 2027 with peak pricing — the market keeps discounting a peak that contracts extend. **Bear:** 2028 HBM supply glut + commodity DRAM disruption; 84.6% GM is a peak, not a plateau.
- **Competitors:** SK Hynix, Samsung, CXMT.

### 5. Vertiv (VRT) — Westerville, OH · Public ~$103.5B
- **Overview:** The #1 pure-play power and cooling infrastructure vendor for AI data centres (UPS, liquid cooling, busway) — co-designed with NVIDIA for Vera Rubin racks.
- **AI strategic role:** Power is the industry's #1 binding constraint (307GW announced vs grid queues to 2030); Vertiv is the near-monopoly at the high-density end.
- **Value chain position:** Layer 1 — data centre power & cooling equipment.
- **AI revenue exposure:** *Current:* Very High — growth entirely AI/DC-driven; FY26 guide ~$14B (from $10.2B FY25, +37%). *Future:* rising with the buildout; $15B backlog (2.9x book-to-bill).
- **Moat:** *Technology:* high-density thermal/power leadership, liquid cooling. *Ecosystem:* NVIDIA Rubin DSX co-design. *Distribution:* design-ins at every hyperscaler. *Switching costs:* high — power architecture is built around the rack generation.
- **Growth drivers:** Hyperscaler capex ($650–700B 2026), liquid cooling attach rate, 800V DC architectures.
- **Key risks:** *Competition:* Schneider, Eaton, nVent. *Commoditisation:* equipment pricing power fades as supply catches up. *Execution:* Q2 sales miss was the first crack. *Valuation:* ~34x forward.
- **Monitor:** Book-to-bill, backlog, US revenue growth, liquid-cooling attach, Q2 miss follow-through.
- **Thesis — Bull:** The true bottleneck of the buildout, priced like a supplier (34x) while GPU clouds trade at 55x. **Bear:** Capacity catches up; margins normalise; hyperscaler self-supply.
- **Competitors:** Schneider Electric, Eaton, nVent, Siemens.

---

# CATEGORY 2 — AI PLATFORM WINNERS

### 6. Microsoft (MSFT) — Redmond, WA · Public ~$3.6T
- **Overview:** Azure AI + Copilot everywhere + OpenAI distribution economics + Maia silicon; the largest AI-cloud tenant chokepoint.
- **AI strategic role:** Monetises AI both upstream (Azure compute, Maia, Stargate) and downstream (Copilot seats, GitHub, Dynamics).
- **Value chain position:** Layer 3 (cloud) with Layer 4 (Copilot apps) and Layer 2 (OpenAI channel) attachments.
- **AI revenue exposure:** *Current:* AI >11pts of Azure's +43%; OpenAI passthrough ~$24B FY26; Copilot 30M+ paid seats. *Future:* rising — commercial RPO $678B (+84%), seat adds doubling QoQ.
- **Moat:** *Technology:* Maia silicon (18A). *Ecosystem:* OpenAI exclusivity + enterprise workflow distribution. *Distribution:* M365 base (400M seats). *Switching costs:* extreme — enterprise workflow embedding.
- **Growth drivers:** Azure AI consumption, Copilot monetization curve, OpenAI growth passthrough, agents (Copilot Studio).
- **Key risks:** *Competition:* AWS, Google, ServiceNow/Salesforce agents. *Commoditisation:* agent pricing pressure on seats. *Concentration:* OpenAI dependency. *Valuation:* the AI optionality may be nearly free, or may be priced noise.
- **Monitor:** Azure AI growth %, Copilot seat adds, RPO growth, capex vs FCF, OpenAI contribution.
- **Thesis — Bull:** The deepest contracted backlog in software ($678B) + the Copilot land-grab. **Bear:** OpenAI concentration + agents commoditise the seat economics the multiple assumes.
- **Competitors:** AWS, Google Cloud, Oracle, ServiceNow, Salesforce.

### 7. Alphabet / Google (GOOGL) — Mountain View, CA · Public ~$4.5T
- **Overview:** The only full-stack AI company: Gemini models, DeepMind research, TPU silicon, Google Cloud (+82% — fastest hyperscaler), ~1B-user Gemini app, Apple Siri licensing.
- **AI strategic role:** The vertically integrated platform — owns model, chip, cloud, and consumer surface simultaneously.
- **Value chain position:** Layers 2–4 simultaneously (models + TPU + cloud + consumer + on-device).
- **AI revenue exposure:** *Current:* Google Cloud $24.8B/quarter (+82%); GenAI product revenue +800% YoY; AI still a minority of Alphabet revenue (ad business funds it). *Future:* rising — AI Mode monetization, TPU external sales, Siri economics.
- **Moat:** *Technology:* DeepMind + TPU cost structure. *Ecosystem:* Android/Search/Workspace distribution. *Data:* the largest behavioural dataset in AI. *Distribution:* 2B+ devices. *Switching costs:* high for Search/Android defaults.
- **Growth drivers:** Cloud share gains, Gemini agent adoption, Apple Siri deal (up to $5B/yr), TPU third-party capacity (Blackstone JV).
- **Key risks:** *Competition:* OpenAI/Anthropic at model layer. *Disruption:* AI search could disrupt its own ad economics. *Execution:* Gemini 3.5 Pro delay. *Regulation:* antitrust + AI policy. *Valuation:* FCF negative on capex ($195–205B 2026).
- **Monitor:** Cloud growth/margins, Gemini app MAU, AI Mode ad monetization, TPU external sales, Siri ramp.
- **Thesis — Bull:** Full-stack integration wins the agent era; Cloud is the growth engine. **Bear:** AI search cannibalises the ad model faster than AI Mode replaces it.
- **Competitors:** OpenAI, Anthropic, Microsoft, Amazon, Meta.

### 8. OpenAI — San Francisco, CA · Private $852B (Mar 2026)
- **Overview:** Frontier lab (GPT), ChatGPT (largest consumer AI distribution), Codex agents; the industry's funding anchor (Stargate, $1.2T+ committed capital).
- **AI strategic role:** Ecosystem gravity — consumer distribution + enterprise API + the capital machinery the industry revolves around.
- **Value chain position:** Layer 2 (models) with Layer 4 (ChatGPT) attachments; largest compute purchaser.
- **AI revenue exposure:** *Current:* ~$25B annualized run-rate, 100% AI. *Future:* >$50B by 2027 (est.) — consumer subs, API, agents.
- **Moat:** *Technology:* transient (GPT leadership rotates). *Ecosystem:* ChatGPT distribution + developer mindshare. *Data:* consumer usage flywheel. *Distribution:* the strongest consumer brand in AI. *Switching costs:* low for APIs (gateways), high for consumer habit.
- **Growth drivers:** ChatGPT subs, GPT-5.6 price aggressiveness, Codex, Stargate capacity, enterprise push.
- **Key risks:** *Competition:* Anthropic (enterprise), Google (distribution), open models. *Commoditisation:* weights are commoditising — the core risk. *Economics:* ~-122% op margin on ~$25B. *Dependencies:* Apple→Gemini loss; Amazon's $350B contingent on IPO/AGI. *Valuation:* ~34x run-rate with negative FCF.
- **Monitor:** Revenue run-rate, consumer subs, API share, burn, Stargate build-out, IPO window.
- **Thesis — Bull:** Distribution + capital make it the platform of the consumer AI era. **Bear:** The model business is the most commoditisation-exposed in tech; valuation rests on contingent capital.
- **Competitors:** Anthropic, Google, Meta, xAI, DeepSeek.

### 9. Anthropic — San Francisco, CA · Private $965B (May 2026), S-1 filed, IPO ≥Oct 2026
- **Overview:** Enterprise-first frontier lab (Claude); Claude Code is the leading agentic coding product (~$2.5B ARR); ~40% of enterprise LLM spend.
- **AI strategic role:** The enterprise platform of the model layer — the lab whose distribution converts models into durable value.
- **Value chain position:** Layer 2 (models + coding agents + enterprise AI).
- **AI revenue exposure:** *Current:* ~$47B annualized gross run-rate (inflated by cloud-reseller pass-through — quality flag); ~80% enterprise. *Future:* growing — enterprise spend share, Claude Code, IPO 2026.
- **Moat:** *Technology:* Claude quality (Fable 5 led SWE-bench Pro). *Ecosystem:* Claude Code ecosystem + agent workflows. *Data:* enterprise usage data. *Distribution:* 8 of Fortune 10; enterprise trust + safety brand. *Switching costs:* high for embedded agents.
- **Growth drivers:** Enterprise adoption, Claude Code, Amazon/Google compute deals (5GW Trainium; $200B Google Cloud), IPO.
- **Key risks:** *Competition:* OpenAI, Google, Meta. *Commoditisation:* model prices falling. *Dependencies:* buys compute from rival xAI (~$1.25B/mo); gross run-rate inflation. *Valuation:* ~20.5x gross with negative FCF.
- **Monitor:** Revenue quality (net vs gross), enterprise spend share, Claude Code ARR, compute commitments, IPO pricing.
- **Thesis — Bull:** The enterprise platform of AI — coding agents + trust compound. **Bear:** The 20.5x gross multiple compresses when the reseller pass-through is unwound in the S-1.
- **Competitors:** OpenAI, Google, Meta, xAI, Mistral.

### 10. Amazon / AWS (AMZN) — Seattle, WA · Public ~$3.1T
- **Overview:** AWS AI infrastructure (Bedrock, SageMaker) + Trainium custom silicon + the Anthropic channel — the second AI hyperscaler by silicon + distribution.
- **AI strategic role:** AI infrastructure-as-a-service: Trainium (sold out through 2027, Anthropic up to 5GW, OpenAI ~2GW) + Bedrock model gateway + Anthropic revenue share.
- **Value chain position:** Layer 3 (cloud) + Layer 1 (custom silicon) + Layer 2 (model distribution).
- **AI revenue exposure:** *Current:* AI >$25B annualized run-rate (~15% of AWS; triple-digit growth); AWS Q2 +37% at 39.4% op margin. *Future:* rising — Trainium ramp, Bedrock usage, Anthropic (~$25B by 2027 est.).
- **Moat:** *Technology:* Trainium + Inferentia vertical integration. *Ecosystem:* Bedrock multi-model gateway + Anthropic exclusivity. *Distribution:* AWS enterprise base. *Switching costs:* high — cloud data gravity.
- **Growth drivers:** AI consumption, Trainium price/perf (30–40% per-gen gains), Anthropic growth, Project Rainier (500K+ Trainium2).
- **Key risks:** *Competition:* Azure, Google. *Technology:* Trainium software gap vs CUDA. *Concentration:* Anthropic dependency. *Valuation:* fair vs growth.
- **Monitor:** AWS AI run-rate, Trainium shipments/utilization, Bedrock spend, Anthropic revenue share, op margin.
- **Thesis — Bull:** Silicon-scale integration converts AI capex into margin (39.4% held). **Bear:** Trainium software gap caps custom-silicon share; Anthropic concentration.
- **Competitors:** Microsoft, Google, Oracle, CoreWeave.

---

# CATEGORY 3 — AI APPLICATION WINNERS

### 11. ServiceNow (NOW) — Santa Clara, CA · Public ~$129B
- **Overview:** Workflow platform (ITSM/CSM) + agentic AI: Now Assist, AI Control Tower, the "Universal Agentic Network."
- **AI strategic role:** The benchmark for agentic-software monetization — AI ACV >$1B and doubling; governance is the differentiator.
- **Value chain position:** Layer 4 — enterprise AI applications (agent platform).
- **AI revenue exposure:** *Current:* AI ACV >$1B vs ~$15.8B subscription revenue (~6–7%), growing 100%+; revenue +24%. *Future:* consumption hockey-stick expected H2 2026.
- **Moat:** *Technology:* AI Control Tower governance. *Ecosystem:* workflow system-of-record. *Data:* enterprise workflow data. *Distribution:* installed base (~3,000 Now Assist customers at 25–40% premium). *Switching costs:* high — workflows embedded.
- **Growth drivers:** Agent production deployments (up 9x in 9 months), Pro Plus premium, Assist-pack consumption (+55x since May 2024).
- **Key risks:** *Competition:* Salesforce Agentforce, Microsoft Copilot Studio. *Commoditisation:* agents commoditising basic workflows. *Valuation:* premium but growth-backed.
- **Monitor:** AI ACV, Pro Plus attach %, agent production customers, RPO ($29B), consumption units.
- **Thesis — Bull:** The cleanest large-cap agent monetisation + governance moat. **Bear:** Hyperscaler-native agents erode the workflow layer.
- **Competitors:** Salesforce, Microsoft, UiPath.

### 12. Palantir (PLTR) — Denver, CO · Public ~$413B
- **Overview:** AIP (AI Platform) + Foundry ontology for enterprise/government AI deployment; the "sovereign AI" champion.
- **AI strategic role:** The deployment platform for defence/government and regulated enterprises that distrust frontier labs.
- **Value chain position:** Layer 4 — enterprise AI deployment platform.
- **AI revenue exposure:** *Current:* AIP = 49% of US commercial revenue; total revenue +93% ($1.94B/quarter); FY26 guide $8.15B (+82%). *Future:* rising — sovereign-AI demand, TCV +153%.
- **Moat:** *Technology:* ontology data integration. *Ecosystem:* defence relationships. *Data:* mission-critical customer data. *Distribution:* bootcamp-led deployment. *Switching costs:* very high — mission-critical embedding.
- **Growth drivers:** US government + sovereign AI, AIP land-and-expand, new-industry bootcamps.
- **Key risks:** *Competition:* IBM, Accenture, hyperscaler agents, C3-class. *Concentration:* US government. *Valuation:* ~50x forward — the biggest multiple risk in large-cap software.
- **Monitor:** US commercial growth, AIP deal sizes, TCV/RDV, bootcamp→production conversion, government budget cycles.
- **Thesis — Bull:** The ontology moat + sovereign-AI tailwind compound for years. **Bear:** 50x forward prices permanence; hyperscalers bundle the same capability.
- **Competitors:** IBM, Snowflake, Accenture, hyperscaler agent platforms.

### 13. Cursor / Anysphere — San Francisco, CA · Private (SpaceX acquisition ~$60B, closing Q3 2026)
- **Overview:** The AI-native code editor — the fastest-growing dev tool in history (ARR $2.6–4B+, >half of Fortune 500, >1M DAU).
- **AI strategic role:** The leading edge of AI adoption in software development — where agentic coding becomes standard practice.
- **Value chain position:** Layer 4 — developer tools.
- **AI revenue exposure:** *Current:* 100% AI (per-seat subs $20–200/mo). *Future:* rising — agent usage, enterprise expansion; integrated into SpaceX/xAI stack.
- **Moat:** *Technology:* code-intelligence UX. *Ecosystem:* dev mindshare. *Data:* coding-telemetry flywheel. *Distribution:* Fortune 500 penetration. *Switching costs:* high for teams (codebase embedding). *Caveat:* heavy model dependency (Anthropic).
- **Growth drivers:** Agentic coding adoption, seat expansion, enterprise licensing.
- **Key risks:** *Competition:* Claude Code (share fell 41%→26%), GitHub Copilot, Codex. *Commoditisation:* thin layer over frontier APIs. *Integration:* SpaceX deal execution. *Valuation:* $60B deal — model-dependency priced lightly.
- **Monitor:** ARR, share vs Claude Code, seat adds, deal close, agent completion quality.
- **Thesis — Bull:** The default surface of agentic coding; distribution at SpaceX scale. **Bear:** Its own model suppliers (Anthropic/OpenAI) are its competitors — share is already flowing to Claude Code.
- **Competitors:** Claude Code, GitHub Copilot, OpenAI Codex, Cognition, Replit.

### 14. Harvey — San Francisco, CA · Private $11B (March 2026; $15.5B round reported)
- **Overview:** Legal workflow AI on OpenAI/Anthropic models (builds no models); majority of AmLaw 100, 100K+ lawyers, PwC global partnership; ARR ~$350M+ annualized.
- **AI strategic role:** The proof that the vertical layer wins even as frontier models commoditise — moat is workflow, trust, and rollout.
- **Value chain position:** Layer 4 — vertical AI (legal).
- **AI revenue exposure:** *Current:* 100% AI; ~$1.2–3K/attorney/month. *Future:* rising — 25,000 custom agents, adjacent legal workflows.
- **Moat:** *Technology:* domain agent orchestration. *Ecosystem:* law-firm distribution. *Data:* 50M contract terms/week. *Distribution:* AmLaw 100 majority. *Switching costs:* very high — firm-wide rollouts.
- **Growth drivers:** Legal spend on AI, agent expansion, PwC channel, international.
- **Key risks:** *Competition:* frontier labs shipping legal agents; Thomson Reuters CoCounsel. *Commoditisation:* legal-specific capabilities in general models. *Valuation:* ~44x ARR at $15.5B.
- **Monitor:** ARR, logo adds, expansion rate, model-layer legal moves, price per attorney.
- **Thesis — Bull:** Category-defining distribution in a high-ASP profession. **Bear:** GPT-6-class models with legal tooling bundle Harvey's value at API prices.
- **Competitors:** CoCounsel (Thomson Reuters), Spellbook, frontier-model legal agents.

### 15. Tempus AI (TEM) — Chicago, IL · Public ~$9.4B
- **Overview:** Precision-medicine platform — AI over a proprietary clinical-genomic data moat; diagnostics + data licensing + pharma partnerships; approaching EBITDA breakeven.
- **AI strategic role:** The public bellwether for healthcare AI — the "Tesla of health data" narrative.
- **Value chain position:** Layer 4 — vertical AI (healthcare).
- **AI revenue exposure:** *Current:* FY26 guide $1.59–1.60B (+~25%), Data & Insights growing 40%+; AI core to products though diagnostics is the revenue base. *Future:* rising — data licensing, pharma collaborations.
- **Moat:** *Technology:* AI over multimodal clinical-genomic data. *Data:* one of the largest longitudinal clinical-genomic datasets. *Distribution:* health-system + pharma relationships. *Switching costs:* high for pharma partners.
- **Growth drivers:** Data & Insights licensing, pharma deals (Merck, Gilead), imaging AI, EBITDA inflection.
- **Key risks:** *Competition:* Natera, Foundation Medicine, Guardant. *Regulation:* reimbursement and FDA posture. *Commoditisation:* diagnostic commoditisation. *Valuation:* growth priced in.
- **Monitor:** Revenue growth, Data & Insights growth, adjusted EBITDA, pharma deal value, test volumes.
- **Thesis — Bull:** The data moat compounds; first positive EBITDA guides FY26. **Bear:** Reimbursement risk + diagnostics commoditisation cap the multiple.
- **Competitors:** Natera, Foundation Medicine, Guardant Health, Caris.

---

# CATEGORY 4 — AI DISRUPTORS / THREATS

### 16. xAI — San Francisco Bay Area · Private ~$250B (acquired by SpaceX, Feb 2026)
- **Overview:** Grok frontier models + Colossus compute (~1M+ H100-equivalents, ~2GW) + X distribution (~600M MAU) + Tesla.
- **AI strategic role:** The vertical-integration disruptor — the only lab whose compute, not model, is its biggest revenue driver (rentals to Anthropic ~$1.25B/mo, Google ~$920M/mo; ~$26B+ run-rate).
- **Value chain position:** Layers 2–4 (models + compute landlord + consumer) with SpaceX capital.
- **AI revenue exposure:** *Current:* ~$26B+ run-rate (majority compute rentals); 2025 loss ~$6.4B. *Future:* rising — Grok 5 (~6T params), Colossus II, subscriptions.
- **Moat:** *Technology:* Colossus build-out speed. *Ecosystem:* X + Tesla + SpaceX integration. *Data:* X data. *Distribution:* ~600M MAU. *Switching costs:* contractual compute rentals.
- **Growth drivers:** Compute rental contracts, Grok 5, superGrok subs, Grok Build coding agent.
- **Key risks:** *Execution:* Musk admits it's "being rebuilt"; 50+ researcher departures. *Key-person:* Musk concentration. *Regulation:* X platform scrutiny. *Valuation:* ~$250B on loss-making operations.
- **Monitor:** Compute-rental contracts, Colossus II milestones, Grok 5 delivery, X MAU monetization.
- **Thesis — Bull:** The industry's compute landlord + vertically integrated challenger. **Bear:** Execution chaos; the compute-rental model is pro-cyclical and key-person-dependent.
- **Competitors:** OpenAI, Anthropic, Google, Meta; infrastructure: CoreWeave, Oracle.

### 17. Meta (META) — Menlo Park, CA · Public (capex $115–135B 2026)
- **Overview:** Consumer AI across FB/IG/WhatsApp (3B+ daily reach), open Llama + closed Muse Spark (Meta Superintelligence Labs), 49% of Scale AI, Ray-Ban glasses.
- **AI strategic role:** The distribution disruptor — the largest installed base on Earth monetising AI via ads; dual-track open/closed model strategy that reshapes both the open ecosystem and the frontier.
- **Value chain position:** Layer 2 (models) + Layer 4 (consumer apps) + Layer 1 (compute buyer).
- **AI revenue exposure:** *Current:* Low-Medium — AI is a feature/cost center; direct AI revenue nascent (Muse API private preview). *Future:* rising — Muse shopping-mode ads, AI subscriptions, enterprise API.
- **Moat:** *Technology:* Muse (frontier-class health benchmarks) + Llama open ecosystem. *Ecosystem:* the largest distribution network. *Data:* the largest consumer behaviour dataset. *Distribution:* 3B+ daily reach. *Switching costs:* high for users (network effects).
- **Growth drivers:** Muse adoption, ad AI monetization, enterprise API, Scale AI integration (Wang as chief AI officer).
- **Key risks:** *Competition:* Qwen (69% of open derivatives vs Llama 11%), OpenAI/Google. *Commoditisation:* open-model moat lost to China. *Economics:* $115–135B capex with no AI P&L. *Regulation:* EU/US AI rules.
- **Monitor:** Muse adoption + API GA, AI-attributed ad revenue, capex efficiency, Llama derivative share.
- **Thesis — Bull:** Distribution converts into the consumer AI default. **Bear:** The largest AI capex in the industry with the least AI monetization — if Muse stalls, the capex is a write-off.
- **Competitors:** OpenAI, Google, xAI, Qwen/DeepSeek.

### 18. CoreWeave (CRWV) — Roseland, NJ · Public ~$49B
- **Overview:** The pure-play GPU cloud — multi-year contracted NVIDIA capacity for frontier labs and enterprises; $99.4B backlog; 10% OpenAI equity stake.
- **AI strategic role:** The independent compute challenger to hyperscalers — and the template for GPU-cloud public markets.
- **Value chain position:** Layer 3 — AI-native cloud.
- **AI revenue exposure:** *Current:* ~100% AI; ~98% of revenue from Microsoft (62%), OpenAI, Meta, Anthropic. *Future:* rising with backlog conversion; Q2 earnings Aug 11, 2026 are the bellwether.
- **Moat:** *Technology:* Kubernetes-first cloud. *Ecosystem:* OpenAI relationship (equity + ~$22.4B commitments). *Distribution:* contracted hyperscaler-scale deals. *Switching costs:* high — multi-year contracts.
- **Growth drivers:** Backlog conversion, OpenAI expansion, capacity build-out.
- **Key risks:** *Concentration:* Microsoft 62% of revenue. *Competition:* hyperscaler internal clouds. *Financing:* debt-funded capex; rate environment. *Valuation:* volatile — round-tripped $60→$153→$90.
- **Monitor:** Backlog, customer diversification, utilization, gross margin, financing costs, Q2 print.
- **Thesis — Bull:** The pure-play expression of AI compute demand at a discount after the drawdown. **Bear:** Hyperscaler internalization + a single OpenAI/Microsoft pause breaks the model.
- **Competitors:** Nebius, Lambda, Crusoe, AWS/Azure/Google.

### 19. Cerebras (CBRS) — Sunnyvale, CA · Public ~$51B (IPO May 2026)
- **Overview:** Wafer-scale AI compute (WSE-3: single-wafer chip, ~900K cores); inference + training; $24.6B contracted backlog anchored by OpenAI (>$10B) and AWS.
- **AI strategic role:** The most credible merchant challenger to NVIDIA's architecture — and the test of whether the challenger class can convert backlog into a business.
- **Value chain position:** Layer 1 — accelerator silicon + inference cloud.
- **AI revenue exposure:** *Current:* 100% AI; 2025 revenue $510M (+76%). *Future:* backlog conversion ($24.6B RPO ≈ 48x 2025 sales).
- **Moat:** *Technology:* wafer-scale engineering (claimed 15x inference speedup). *Ecosystem:* OpenAI + AWS contracts. *Switching costs:* contract-locked early customers.
- **Growth drivers:** Inference demand, OpenAI expansion, AWS partnership, training ambitions.
- **Key risks:** *Concentration:* OpenAI-centric backlog. *Competition:* NVIDIA (Rubin), Groq, SambaNova. *Execution:* delivering 48x-revenue backlog. *Valuation:* ~$51B on $510M revenue.
- **Monitor:** RPO conversion, revenue growth, new customers beyond OpenAI, gross margin, inference pricing.
- **Thesis — Bull:** Contracted visibility + wafer-scale differentiation in the inference era. **Bear:** NVIDIA's response + single-customer reliance; revenue-quality questions.
- **Competitors:** NVIDIA, Groq, SambaNova, Tenstorrent.

### 20. DeepSeek — Hangzhou, China · Private
- **Overview:** Chinese open-weights frontier lab whose low-cost training breakthroughs re-priced the entire model layer (GPT-5.6 Terra at half price is a direct response).
- **AI strategic role:** The open-source price disruptor — the structural force compressing closed-lab pricing power, and the reason the model layer's economics are negative.
- **Value chain position:** Layer 2 — open-source models.
- **AI revenue exposure:** *Current:* minimal commercial (open weights); its value is strategic leverage, not revenue. *Future:* derivative adoption + API at commodity prices.
- **Moat:** *Technology:* training-efficiency research (R1/V3-class breakthroughs). *Ecosystem:* the largest open-model derivative base after Qwen. *Data:* N/A. *Distribution:* open-weight virality. *Switching costs:* zero — portability is the point.
- **Growth drivers:** Open-model adoption, price pressure on frontier labs, China compute access.
- **Key risks:** *Regulation:* US export controls + China policy. *Commoditisation:* the model layer it disrupts is its own category. *Monetization:* cannot capture value from open weights.
- **Monitor:** Model benchmark gaps vs frontier, derivative adoption, token-price pressure on OpenAI/Anthropic, export-control actions.
- **Thesis — Bull:** The open frontier keeps closing the gap; closed-lab pricing power keeps falling. **Bear:** Can't monetise, control risk, and its disruptiveness is priced into the sector's structure already.
- **Competitors:** Qwen, Llama (Meta), Mistral, and the frontier labs it pressures.

---

# A. AI ECOSYSTEM MAP — relationships between the 20

```
  LAYER 4 — APPLICATIONS
   ServiceNow   Palantir   Cursor   Harvey   Tempus
      ▲            ▲         ▲        ▲        ▲
      └──────── model & cloud dependency ───────┘

  LAYER 3 — PLATFORM
   Microsoft ◄──capital/cloud/distribution──► OpenAI
   Amazon   ◄──capital/cloud/Trainium──────► Anthropic
   Alphabet ◄──capital/cloud (Siri deal)────┘
      ▲         ▲            ▲
      │         │            └── DeepSeek (open weights: price pressure on all labs)
      │         └── Meta (dual-track: open Llama / closed Muse; distribution threat to all)
      └── xAI (Colossus compute rentals → Anthropic ~$1.25B/mo, Google ~$920M/mo)

  LAYER 2 — AI CLOUD (disruptors)
   CoreWeave (GPU capacity → OpenAI, Microsoft, Meta)
   Cerebras (wafer-scale inference → OpenAI, AWS)

  LAYER 1 — PHYSICAL INFRASTRUCTURE
   NVIDIA ◄── HBM ── Micron
      │        │
      │        └── TSMC (fabricates: NVIDIA, Broadcom XPUs, Cerebras, Trainium, TPU, Maia)
      │
      ├── Broadcom (custom silicon → Alphabet TPU, Meta MTIA, OpenAI Jalapeño; switching → everyone)
      └── Vertiv (power/cooling → every data centre above)
```

**Key relationship types (edges):**

| Edge | Type | Meaning |
|---|---|---|
| TSMC → NVIDIA/Broadcom/Cerebras | Supply | Fabrication + CoWoS — the single-point dependency |
| Micron → NVIDIA | Supply | HBM allocation gates every accelerator program |
| Broadcom → Alphabet, Meta, OpenAI | Custom silicon | TPU/MTIA/Jalapeño roadmaps run through Broadcom |
| NVIDIA → everyone | Compute | The universal dependency |
| Vertiv → all DCs | Power | The buildout's binding constraint |
| Microsoft ↔ OpenAI | Capital + cloud + distribution | Exclusive-ish channel; $130B+ invested |
| Amazon ↔ Anthropic | Capital + Trainium + distribution | 5GW commitment, $100B+ guaranteed revenue |
| Alphabet → Anthropic | Capital + cloud | $200B cloud commitment vs up to $40B investment |
| Anthropic → xAI; Google → xAI | Compute rental | ~$1.25B/mo + ~$920B/mo — circular funding |
| DeepSeek → OpenAI/Anthropic/Google | Price pressure | Open weights reprice the model layer |
| Meta → all labs | Competition + open distribution | Dual-track threat |
| CoreWeave → OpenAI/Microsoft | Compute + equity | 10% OpenAI stake; 62% of revenue from Microsoft |
| Cursor → Anthropic/OpenAI | Model dependency | The app layer's exposure to supplier competition |
| Harvey → OpenAI/Anthropic | Model dependency | Same pattern in vertical AI |
| ServiceNow/Palantir → hyperscalers + models | Platform dependency | Consumption + model pricing flow upstream |
| Tempus → NVIDIA | Compute | Healthcare AI on NVIDIA infrastructure |

**Structural takeaways:** (1) all roads lead to TSMC/NVIDIA/Vertiv at the base; (2) the platform layer is held together by capital and compute deals among direct competitors — the circularity is systemic; (3) the app layer sits on a dependency it doesn't control (models); (4) the disruptors attack from above (DeepSeek pricing), beside (CoreWeave/Cerebras compute), and inside (xAI/Meta integration).

# B. RANKING TABLE

*(1–5 scores; analyst judgment as of Aug 2026)*

| Company | AI Importance | Business Quality | AI Growth Exposure | Moat Strength | Investment Attractiveness |
|---|---|---|---|---|---|
| NVIDIA | 5 | 5 | 4 | 5 | 3 |
| TSMC | 5 | 5 | 4 | 5 | 4 |
| Broadcom | 5 | 5 | 5 | 5 | 4 |
| Micron | 5 | 3 | 5 | 4 | 5 |
| Vertiv | 4 | 4 | 4 | 4 | 4 |
| Microsoft | 5 | 5 | 4 | 5 | 4 |
| Alphabet | 5 | 4 | 5 | 4 | 4 |
| OpenAI | 5 | 1 | 5 | 4 | 2 |
| Anthropic | 5 | 1 | 5 | 4 | 3 |
| Amazon | 5 | 5 | 4 | 4 | 4 |
| ServiceNow | 4 | 5 | 5 | 4 | 4 |
| Palantir | 4 | 4 | 5 | 4 | 2 |
| Cursor | 4 | 4 | 5 | 3 | 3 |
| Harvey | 3 | 4 | 5 | 4 | 3 |
| Tempus | 3 | 4 | 4 | 4 | 4 |
| xAI | 4 | 2 | 5 | 3 | 3 |
| Meta | 4 | 3 | 3 | 4 | 3 |
| CoreWeave | 4 | 2 | 5 | 3 | 4 |
| Cerebras | 3 | 2 | 5 | 3 | 3 |
| DeepSeek | 4 | 3 | 5 | 3 | 2 |

*Quality scores embed economics (OpenAI/Anthropic negative; Micron cyclic; Palantir margins good but multiple poor). Attractiveness is risk-adjusted, not growth-ranked.*

# C. THE LISTS

**5 strongest AI moats:** NVIDIA (CUDA — the deepest in technology), TSMC (process + CoWoS), Broadcom (binding contracts + switching), Microsoft (OpenAI exclusivity + distribution), Micron (HBM certification + Western premium).

**5 most exposed to AI growth:** NVIDIA (~90% of revenue AI), Micron (HBM = majority of profit), OpenAI (100% AI), Anthropic (100% AI), CoreWeave (100% AI — the purest public expression).

**5 most misunderstood by investors:** Vertiv (priced like a supplier, is the bottleneck), Micron (cyclical discount applied to a contractually bound book), Microsoft (the AI option nearly free — $678B RPO priced as noise), CoreWeave (drawdown overshoot vs $99.4B backlog — and the concentration both sides misprice), Palantir (bears ignore the moat, bulls ignore the multiple).

**5 most at risk from AI disruption:** Alphabet (AI search may disrupt its own ad model), Meta (open-model share lost to Qwen; Muse gap), OpenAI (the model business is the most commoditisation-exposed in tech), Anthropic (same risk + gross run-rate unwind at IPO), Cursor (its own model suppliers became its competitors — share fell 41%→26%).

---

*Capstone of: US-AI-Industry-Map / Research-DB / Ranking / Supply-Chain-Map / Value-Capture-Analysis (Aug 2026). Profiles compress those analyses; figures as verified in the research phase. Information, not investment advice.*
