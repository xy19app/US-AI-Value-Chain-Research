# US AI Industry — Cleaned Investment Research Database
**Revision of US-AI-Industry-Map-Aug-2026.md · August 9, 2026**

> **Data as of: August 9, 2026** — static research snapshot. Updated periodically through the research process; not live.

**Review methodology:** every company from the original 83-company map was screened against three tests — (1) Does it hold structural leverage on the AI value chain (a chokepoint, a moat, or category leadership)? (2) Is it a meaningful holder of AI value (scale of AI revenue/backlog)? (3) Does its presence change how the industry should be understood? Companies failing all three were removed. Multi-role companies had their roles separated, then a PRIMARY role assigned by where AI value and monetization concentrate and where the company's structural leverage sits. 65 companies remain, organized by primary role across the four layers.

---

## 1. Removed companies (18) — and why

| Company | Reason for removal |
|---|---|
| **Tenstorrent** | Early-stage revenue (~$150M orders), no anchor hyperscaler customer; value is M&A optionality (Qualcomm bid denied), not strategic position |
| **HPE** | #3 AI server OEM behind Dell/Supermicro; AI systems still a minority of mix; Juniper networking angle is real but not AI-first |
| **Vercel** | Deployment platform with AI features (v0), not an AI company; covered by the coding-tool names that matter more |
| **Windsurf** | No longer exists as a company — carved up between Google (~$2.4B license) and Cognition (~$250M) in July 2025; a consolidation datapoint, not a holding |
| **Celestial AI** | Acquired by Marvell (Feb 2026, up to $5.5B) — folded into Marvell's interconnect franchise |
| **AI21 Labs** | Israeli HQ, ~$50M ARR; relevant only as an M&A target (Nvidia talks) |
| **Cohere** | Canadian HQ; a legit enterprise model company but outside "US AI industry" scope — moved to context notes |
| **Midjourney** | Bootstrapped, no capital raised — not investable; premium image niche being squeezed by GPT-image/Gemini bundling |
| **Luma AI** | Consumer video follower behind Runway; the Saudi-compute angle is real but the company is not a value-chain chokepoint |
| **Character.AI** | Strategic value (talent/license) already transferred to Google; monetization experiments don't change its declining position |
| **RunPod** | ~$240M ARR but redundant with Baseten/Modal in the inference-cloud set |
| **C3.ai** | FY26 revenue -36% on "unspeakably horrible" sales execution; no longer strategically relevant — a cautionary tale, not a holding |
| **UiPath** | Legacy RPA compression; the agent-orchestration thesis is better represented by ServiceNow |
| **Decagon** | Redundant with Sierra in the CX-agent set (~1/3.5 the scale) |
| **Writer** | Full-stack enterprise genAI with own models, but redundant with the platform players (Snowflake/Databricks/IBM) |
| **Ambience Healthcare** | Redundant with Abridge in ambient clinical AI (~1/3 the scale) |
| **Recursion** | AI-biotech cautionary example; not a strategic chokepoint — Tempus covers the healthcare-AI holding |
| **Vast.ai / long-tail GPU marketplaces** | Never material for institutional research |

*Also noted:* **SK Hynix, Samsung, TSMC, ASML, Arm, Mistral** remain non-US context (see §5) — they matter enormously but sit outside the US-only scope.

---

## 2. Multi-role companies — roles separated (Task 2) & primary identified (Task 3)

| Company | Distinct AI roles in the ecosystem | **PRIMARY strategic role** |
|---|---|---|
| **NVIDIA** | (1) AI accelerator silicon; (2) rack-scale systems; (3) networking/interconnect (NVLink, Spectrum-X); (4) AI software (CUDA) | **AI accelerator silicon** (the rest is defense of the core) |
| **AMD** | (1) AI accelerators (Instinct); (2) server CPUs (EPYC) | **AI accelerators** |
| **Broadcom** | (1) custom AI ASIC design (XPUs); (2) Ethernet switch silicon | **Custom AI ASIC design** |
| **Marvell** | (1) custom AI ASIC design (Trainium/Maia); (2) optical interconnect (Celestial AI) | **Custom AI ASIC design** |
| **Qualcomm** | (1) on-device/edge AI silicon (NPU); (2) data-center inference accelerators | **On-device AI silicon** |
| **Intel** | (1) foundry capacity (18A); (2) AI-PC silicon; (3) Gaudi accelerators; (4) Xeon server CPUs | **Western foundry capacity** |
| **Cerebras / Groq / SambaNova** | (1) accelerator silicon; (2) inference cloud | **Accelerator silicon** (cloud is monetization channel) |
| **Cisco** | (1) AI networking; (2) optics (Acacia); (3) security | **AI networking** |
| **OpenAI** | (1) frontier foundation models; (2) consumer AI (ChatGPT); (3) dev tools (Codex); (4) compute purchaser (Stargate) | **Frontier foundation models** |
| **Anthropic** | (1) frontier foundation models; (2) coding agents (Claude Code); (3) enterprise AI | **Frontier foundation models** |
| **Alphabet (Google)** | (1) foundation models (Gemini); (2) AI cloud (Google Cloud + TPU); (3) AI research (DeepMind); (4) consumer AI (Gemini app, Android, Siri licensing) | **Foundation models + AI research** (the full-stack integrator) |
| **Meta** | (1) foundation models (Llama open / Muse closed); (2) consumer AI apps; (3) AI research (FAIR/MSL) | **Foundation models** (dual-track open/closed) |
| **xAI** | (1) frontier models (Grok); (2) AI compute landlord (Colossus rentals); (3) consumer assistant (X) | **Frontier models** (compute rental is the revenue driver) |
| **Microsoft** | (1) AI cloud (Azure AI); (2) AI applications (Copilot, GitHub); (3) OpenAI platform distribution; (4) silicon (Maia) | **AI cloud (hyperscaler)** |
| **Amazon** | (1) AI cloud (AWS/Bedrock); (2) custom silicon (Trainium); (3) AI applications | **AI cloud (hyperscaler)** |
| **Oracle** | (1) AI GPU capacity (OCI); (2) enterprise applications with AI | **AI cloud (GPU capacity)** |
| **IBM** | (1) enterprise AI platform (watsonx); (2) AI consulting | **Enterprise AI platform** |
| **Snowflake / Databricks** | (1) data platform; (2) AI/agent layer | **Data + AI platform** |
| **Salesforce** | (1) CRM SaaS; (2) agentic AI (Agentforce) | **Agentic AI applications** |
| **Dell / Supermicro** | (1) AI servers; (2) broader IT hardware | **AI servers** |
| **Tempus** | (1) genomic diagnostics; (2) AI data licensing | **Healthcare AI platform** |

**Primary-role rule applied:** where a company monetizes multiple layers, primary = the layer where (a) the largest share of AI value and revenue concentrates, and (b) its structural leverage (moat) is highest. Thus Microsoft → cloud (Azure is the AI engine; Copilot/OpenAI are channels), NVIDIA → silicon (CUDA + rack systems defend the chip franchise), Alphabet → models (DeepMind/Gemini is the company's AI identity; Cloud/TPU are the monetization).

---

## 3. The database (Task 4)

### LAYER 1 — AI INFRASTRUCTURE (26)

| Company | Primary AI Function | Value Chain Position | Pub/Pvt | Ticker | Market Cap (Aug 2026) | AI Rev Exposure | Main Competitive Advantage | Main Competitors |
|---|---|---|---|---|---|---|---|---|
| NVIDIA | Merchant AI accelerators + rack systems | Infra — Silicon (accelerators) | Public | NVDA | ~$5.42T | **High** — ~90% of revenue AI DC | CUDA moat + annual architecture cadence + rack integration | AMD; Broadcom; Marvell; Google TPU |
| AMD | Merchant AI accelerators (Instinct) | Infra — Silicon (accelerators) | Public | AMD | ~$789B | **High** — DC segment doubling | Open-Ethernet alternative; price/perf; OpenAI/Anthropic/Meta anchor deals | NVIDIA; Broadcom; Intel |
| Broadcom | Custom AI ASIC co-design (XPUs) | Infra — Silicon (custom) | Public | AVGO | ~$2.0T | **High** — AI 31% FY25 → ~54% FY26 | ~70% custom-ASIC design share; multi-GW binding contracts | Marvell; NVIDIA; MediaTek |
| Marvell | Custom AI ASIC co-design | Infra — Silicon (custom) | Public | MRVL | ~$192B | **High** | Trainium + Maia lock-in; NVIDIA photonics tie (Celestial AI) | Broadcom; MediaTek; AIchip |
| Qualcomm | On-device/edge AI silicon | Infra — Silicon (edge) | Public | QCOM | ~$170–179B | **Medium** — feature layer on Snapdragon | Best NPU-per-watt at edge; IP licensing annuity | NVIDIA; Apple Silicon; MediaTek |
| Intel | Western leading-edge foundry | Infra — Foundry | Public | INTC | ~$513B | **Medium** — future option value | Only Western high-volume leading-edge fab; NVIDIA $5B + Azure 18A anchors | TSMC; Samsung |
| Micron | HBM + AI DRAM/NAND | Infra — Memory | Public | MU | ~$990B | **High** — HBM majority of profit | Only Western HBM producer; HBM4 first-mover; sold out through 2027 | SK Hynix; Samsung; CXMT |
| Cerebras | Wafer-scale AI compute | Infra — Silicon (challenger) | Public | CBRS | ~$51B | **High** — 100% AI | Wafer-scale engineering; $24.6B OpenAI/AWS contracted backlog | NVIDIA; Groq; SambaNova |
| Groq | Low-latency inference (LPU) | Infra — Silicon (challenger) | Private | — | ~$6.9B | **High** | Deterministic low latency; LPU licensed into NVIDIA roadmap | NVIDIA; Cerebras; SambaNova |
| SambaNova | Enterprise/sovereign inference | Infra — Silicon (challenger) | Private | — | ~$11B | **High** | On-prem bank distribution (JPMorgan); Intel backing | NVIDIA; Cerebras; Groq |
| Arista | AI Ethernet fabric | Infra — Networking | Public | ANET | ~$238B | **High** — ~28% of 2026 revenue AI | Ethernet-vs-InfiniBand momentum; 48–49% margins; $6.2B backlog | Cisco; NVIDIA Spectrum-X; Broadcom |
| Cisco | AI networking + optics | Infra — Networking | Public | CSCO | ~$450B | **Medium** — ~6–7% AI rev; $9B orders | Incumbency + Silicon One + Acacia optics verticalization | Arista; NVIDIA; Juniper |
| Astera Labs | AI connectivity silicon (retimers/switches) | Infra — Interconnect | Public | ALAB | ~$62B | **High** — ~100% AI DC | Inside ~90% of AI servers; Scorpio fabric switches | Marvell; Credo; Broadcom |
| Credo | SerDes + AECs for AI scale-out | Infra — Interconnect | Public | CRDO | ~$48B | **High** — ~100% AI | AEC leadership (half the power of optics); +206% FY26 revenue | Astera; Marvell; Broadcom |
| Coherent | Optical transceivers for AI clusters | Infra — Optical | Public | COHR | ~$66–83B | **High** — ~75% of revenue DC | Sole vertically integrated Western transceiver vendor; NVIDIA $2B stake | Lumentum; Innolight; Eoptolink |
| Lightmatter | Photonic interconnect (CPO) | Infra — Optical (next-gen) | Private | — | ~$4.4B | **High** (early) | Densest CPO roadmap; 3D packaging scale; S-1 filed | Broadcom; Marvell; Ayar Labs |
| Applied Materials | Semi equipment (deposition/packaging) | Infra — Equipment | Public | AMAT | ~$428B | **High** — ~40% AI-related | Breadth + ~50% HBM packaging share | Lam; TEL; Disco |
| Lam Research | Etch/deposition for HBM | Infra — Equipment | Public | LRCX | ~$390B | **High** — majority of growth | ~100% share of HBM high-aspect-ratio etch | AMAT; TEL; Hitachi |
| KLA | Inspection/metrology (process control) | Infra — Equipment | Public | KLAC | ~$260B | **Medium** — rising | ~50–58% process-control share; 62% GM | Onto Innovation; Camtek; Nova |
| Supermicro | NVIDIA rack servers | Infra — Systems | Public | SMCI | ~$20B | **High** — AI servers most of revenue | Fastest to market per NVIDIA platform; liquid cooling | Dell; HPE; Foxconn/Quanta |
| Dell | AI servers + storage | Infra — Systems | Public | DELL | ~$290B | **High** — AI rev +757% YoY | Global supply chain; $51.3B AI backlog | Supermicro; HPE; Lenovo |
| Vertiv | DC power & liquid cooling | Infra — Power/cooling | Public | VRT | ~$103.5B | **Very High** | ~Monopoly in high-density thermal+power; $15B backlog | Schneider; Eaton; nVent |
| Eaton | Grid-to-chip DC power | Infra — Power/cooling | Public | ETN | ~$174B | **Medium-High** | Grid-side scale; content-per-MW $2.9M→$3.4M | Schneider; Vertiv; ABB |
| Equinix | Colocation + interconnection | Infra — Data centers | Public | EQIX | ~$103B | **Medium-High** | Interconnection density; inference-stage payoff (2027+) | Digital Realty; Vantage; QTS |
| Digital Realty | Wholesale hyperscale DC | Infra — Data centers | Public | DLR | ~$72B | **High** (absolute) | Global scale + land/power pipeline | Equinix; Vantage; QTS |
| Vantage | Hyperscale DC build-out | Infra — Data centers | Private | — | n/d | **Very High** — ~100% AI/cloud | Private capital (10–15x equity leverage) + secured power | QTS; Stack; Equinix |

### LAYER 2 — AI PLATFORM (9)

| Company | Primary AI Function | Value Chain Position | Pub/Pvt | Ticker | Market Cap (Aug 2026) | AI Rev Exposure | Main Competitive Advantage | Main Competitors |
|---|---|---|---|---|---|---|---|---|
| OpenAI | Frontier foundation models (GPT) | Platform — Frontier lab | Private (IPO 2026–27) | — | $852B | **High** — entire business | Brand + ChatGPT distribution + unmatched capital stack ($1.2T+ committed) | Anthropic; Google; Meta; xAI |
| Anthropic | Frontier foundation models (Claude) | Platform — Frontier lab | Private (IPO ≥Oct 2026) | — | $965B | **High** | Enterprise preference (~40% of spend); Claude Code leadership | OpenAI; Google; Meta; xAI |
| Alphabet | Foundation models (Gemini) + AI research | Platform — Frontier lab (full-stack) | Public | GOOGL | ~$4.5T | **High for AI narrative** (Cloud +82%) | DeepMind + 2B-device distribution + TPUs + Apple Siri deal | OpenAI; Anthropic; Meta |
| Meta | Foundation models (Llama open / Muse closed) | Platform — Frontier lab | Public | META | n/d | **Low-Medium** — feature/cost center | Largest distribution on Earth; ad cross-subsidy; 49% of Scale AI | OpenAI; Google; xAI; Qwen/DeepSeek |
| xAI | Frontier models (Grok) + Colossus compute | Platform — Frontier lab | Private (SpaceX) | — | ~$250B | **High** | Vertical integration (X/Tesla/SpaceX); industry's most-sought excess compute | OpenAI; Anthropic; Google; Meta |
| Together AI | Open-model training + serving | Platform — Open-model inference | Private | — | $8.3B | **High** | 6–60x cost savings vs closed labs; ATLAS engine; $1.15B bookings | Fireworks; Baseten; Groq |
| Fireworks AI | Enterprise inference on open models | Platform — Open-model inference | Private | — | $17.5B | **High** | >40T tokens/day; 5–10x cheaper; Microsoft distribution deal | Together; Baseten; hyperscalers |
| Hugging Face | Open-model hub + enterprise inference | Platform — Model hub | Private | — | $7–20B (conflicting) | **Medium** | Neutral gravity well of the open-weights ecosystem | GitHub Models; Together; Bedrock |
| Scale AI | AI data infrastructure (annotation/RLHF) | Platform — Data infrastructure | Private (IPO Q3–Q4 2026) | — | $25–30B | **High** — indirect (follows lab spend) | Embedded with every frontier lab + DoD franchise | Surge; Labelbox; Appen |

### LAYER 3 — AI CLOUD (10)

| Company | Primary AI Function | Value Chain Position | Pub/Pvt | Ticker | Market Cap (Aug 2026) | AI Rev Exposure | Main Competitive Advantage | Main Competitors |
|---|---|---|---|---|---|---|---|---|
| Microsoft | Hyperscale AI cloud (Azure AI) | AI Cloud — Hyperscaler | Public | MSFT | ~$3.6T | **High** — AI >11pts of Azure growth | Largest OpenAI channel; $678B RPO; Maia silicon | AWS; Google Cloud; Oracle |
| Amazon | Hyperscale AI cloud (AWS/Bedrock) | AI Cloud — Hyperscaler | Public | AMZN | ~$3.1T | **High** — AI >$25B run-rate (~15% of AWS) | Trainium sold out to 2027; Anthropic channel; 39.4% op margin | Azure; Google Cloud; Oracle |
| Oracle | AI GPU capacity (OCI) | AI Cloud — Hyperscaler (GPU) | Public | ORCL | ~$423B | **High** — the business IS AI infra | First-mover GPU contracts (Stargate); $638B backlog — and the credit risk | AWS; Azure; Google Cloud |
| IBM | Enterprise AI platform (watsonx) | AI Cloud/Apps — Regulated enterprise | Public | IBM | ~$224B | **Medium** — services-weighted | Vendor-neutral trust + agent governance (Orchestrate) | Microsoft; Accenture; Palantir |
| CoreWeave | GPU cloud (pure play) | AI Cloud — GPU cloud | Public | CRWV | ~$49B | **Very High** | First-mover capacity; OpenAI equity stake; $99.4B backlog | Nebius; Lambda; Crusoe; hyperscalers |
| Nebius | GPU cloud (AI-native) | AI Cloud — GPU cloud | Public | NBIS | ~$55B | **Very High** — +841% YoY | Yandex engineering heritage; ~4GW owned power | CoreWeave; Lambda; Crusoe |
| Lambda | GPU cloud + hardware | AI Cloud — GPU cloud | Private (IPO H2 2026) | — | ~$6–9B | **Very High** | Strongest developer brand; Microsoft infrastructure deal | CoreWeave; Nebius; Crusoe |
| Crusoe | GPU cloud + power self-supply | AI Cloud — GPU cloud (power-backed) | Private (IPO H1 2027) | — | ~$24B (secondary marks) | **Very High** | Gas-to-compute energy moat; 4.9GW contracted | CoreWeave; Nebius; Vantage |
| Baseten | Inference cloud (model routing) | AI Cloud — Inference | Private | — | $13B | **Very High** — ~20x YoY | Multi-cloud arbitrage; open-model cost optimization | Together; Fireworks; Modal |
| Modal | Serverless GPU compute | AI Cloud — Inference | Private | — | $4.65B | **Very High** | Developer UX; rides AI coding agents (Claude Code) | Baseten; RunPod; Together |

### LAYER 4 — AI APPLICATIONS (20)

| Company | Primary AI Function | Value Chain Position | Pub/Pvt | Ticker | Market Cap (Aug 2026) | AI Rev Exposure | Main Competitive Advantage | Main Competitors |
|---|---|---|---|---|---|---|---|---|
| Salesforce | Agentic CRM (Agentforce) | Apps — Enterprise software | Public | CRM | ~$158B | **Medium** — Agentforce ~3% of FY26 rev | CRM category ownership + Data Cloud; AWU consumption pricing | ServiceNow; HubSpot; Sierra |
| ServiceNow | Agentic workflow platform | Apps — Enterprise software | Public | NOW | ~$129B | **High (relative)** — AI ACV >$1B | Workflow system-of-record + agent governance (Control Tower) | Salesforce; Microsoft; UiPath |
| Adobe | Generative creative AI (Firefly) | Apps — Enterprise software | Public | ADBE | ~$105B | **Medium** | Creative suite ubiquity + proprietary training data | Midjourney; OpenAI; Canva |
| Palantir | AI deployment platform (AIP) | Apps — Enterprise software | Public | PLTR | ~$413B | **High** — AIP = 49% of US commercial rev | Ontology moat + defense + "sovereign AI" | IBM; Snowflake; Accenture |
| Snowflake | Data cloud + AI layer (Cortex) | Apps — Data + AI platform | Public | SNOW | ~$97B | **Medium** — AI drives guidance raises | Data gravity + governance; CoCo fastest adoption ever | Databricks; Microsoft Fabric; AWS |
| Databricks | Data + AI platform (lakehouse) | Apps — Data + AI platform | Private (IPO 2027) | — | $188B | **High** — AI >$1.4B annualized | Best-in-class data+AI engineering gravity; 20K customers | Snowflake; Fabric; BigQuery |
| Anysphere (Cursor) | AI-native code editor | Apps — Developer tools | Private (SpaceX deal) | — | ~$60B (deal value) | **High** | Best coding UX + dev mindshare; >half of Fortune 500 | GitHub Copilot; Claude Code; OpenAI Codex |
| Cognition (Devin) | Autonomous coding agent | Apps — Developer tools | Private | — | $26B | **High** — 100% AI labor | Autonomy-first; ARR 13x in a year; Goldman/NASA/US Army | Cursor; Claude Code; Codex |
| Replit | AI app development ("vibe coding") | Apps — Developer tools | Private | — | $9B | **High** | Largest browser-IDE community (50M users) | Cursor; Copilot; Lovable |
| Perplexity | AI search/answer engine | Apps — Consumer | Private | — | ~$20–23B | **High** | Cited answers + subscription-only trust model; >$450M run-rate | ChatGPT Search; Google AI Overviews; Gemini |
| ElevenLabs | AI voice platform | Apps — Consumer (voice infra) | Private | — | $11B | **High** | Frontier TTS quality + largest API developer base | OpenAI; Google; Hume |
| Suno | AI music generation | Apps — Consumer | Private | — | $5.4B | **High** | ~90% share of commercial AI music; DistroKid distribution moat | Udio; Google MusicFX; BandLab |
| Runway | AI video + world models | Apps — Consumer (pro video) | Private | — | $5.3B | **High** | Creative control + enterprise film (Lionsgate); world models | Google Veo; Kling; OpenAI |
| Harvey | Legal workflow AI | Apps — Vertical (legal) | Private | — | ~$11B ($15.5B round reported) | **High** | AmLaw 100 distribution; workflow/trust moat (no own models) | Thomson Reuters CoCounsel; Spellbook |
| Sierra | CX agents (voice/chat) | Apps — Vertical (workflow) | Private | — | $15.8B | **High** — 100% agents | Pre-built vertical workflows; 40%+ of Fortune 50 | Decagon; Agentforce; Intercom |
| Glean | Enterprise search + agents | Apps — Vertical (workflow) | Private | — | $7.2B (~$12B reported) | **High** | Permissions-aware knowledge graph; model-neutral (15+ LLMs) | Microsoft Copilot; Gemini Enterprise |
| Notion | Productivity suite with AI | Apps — Consumer/productivity | Private | — | ~$11B | **High** — >50% of ARR AI-enabled | 80M MAU habits + profitable since 2023 | Microsoft 365; Google Workspace; Coda |
| Tempus | Precision-medicine AI | Apps — Vertical (healthcare) | Public | TEM | ~$9.4B | **High** | Proprietary clinical-genomic dataset moat; ~$1.6B FY26 rev | Natera; Foundation Medicine; Guardant |
| Abridge | Ambient clinical documentation | Apps — Vertical (healthcare) | Private | — | $5.3B | **High** — 100% AI | Deepest Epic integration; 1.5M proprietary encounters; KLAS #1 | Epic native; Nuance DAX; Ambience |
| Hippocratic AI | Patient-facing healthcare agents | Apps — Vertical (healthcare) | Private | — | ~$3.5B | **High** | Safety-first architecture (Polaris); top-10 payor footprint | Abridge; Nuance; internal builds |

---

## 4. What the cleaned database makes visible

- **Layer value concentration:** 26 of 65 companies sit in infrastructure — where the industry's value actually accrues. The funnel logic: every application-layer dollar ultimately lands in NVIDIA (~$5.4T), TSMC (~$2.2T), Broadcom (~$2.0T), Micron (~$990B), and the equipment/power layer.
- **The cleanest pure plays per layer:** Accelerators — NVIDIA; Custom silicon — Broadcom; Memory — Micron; Networking — Arista; Interconnect — Astera/Credo; Equipment — Lam; GPU cloud — CoreWeave; Inference cloud — Baseten; Frontier lab — Anthropic (IPO imminent); Data+AI — Databricks; Coding — Cursor/Anysphere; Search — Perplexity; Legal — Harvey; Healthcare — Tempus/Abridge.
- **Multi-role companies resolved:** the five true multi-role names (NVIDIA, Microsoft, Alphabet, Amazon, Meta, xAI, Oracle) are now classified by their primary monetization layer, with secondary roles explicitly tracked.
- **Private-market concentration:** 28 of 65 are private; ~$3.1T of private AI value (Anthropic $965B + OpenAI $852B + xAI $250B + Databricks $188B + Cursor $60B + ...) is heading for public markets 2026–27 — the largest private-to-public value transfer in history.

## 5. Non-US context (still required to understand the US industry)

- **TSMC** (~$2.18T, Taiwan) — fabricates virtually all US AI accelerators (N3/N2 + CoWoS); **ASML** (~$663–671B, NL) — EUV monopoly; **Arm** (~$302B, UK/Nasdaq) — ISA behind every custom XPU; **SK Hynix** (~$735–845B, KR) — HBM #1, NVIDIA's lead partner; **Samsung** (~$1.0–1.15T, KR) — HBM #2; **Mistral** (~$23B, FR) — Europe's nearest frontier lab; **Cohere** (~$7B, CA) — enterprise model alternative, US-facing.

*Data caveats: valuations as of dates cited in the source research (Aug 2026); items marked "(reported)" / "conflicting" are single-source or disputed. Database revision of the full map; see US-AI-Industry-Map-Aug-2026.md for full dossiers. Information, not investment advice.*
