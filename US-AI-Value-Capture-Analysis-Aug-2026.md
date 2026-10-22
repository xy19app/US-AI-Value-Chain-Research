# AI Value Chain — Economic Value Capture Analysis
**Senior TMT equity research · August 9, 2026 · Builds on US-AI-Supply-Chain-Map-Aug-2026.md and US-AI-Industry-Ranking-Aug-2026.md**

> **Data as of: August 9, 2026** — static research snapshot. Updated periodically through the research process; not live.

## Framework: three separate lenses

| Lens | What it measures | Leaders today |
|---|---|---|
| **Technology importance** | Structural necessity — what breaks without it | NVIDIA, TSMC, ASML, Broadcom, SK Hynix, Lam, KLA, Anthropic, OpenAI, Vertiv |
| **Business quality** | Durable economics — moat + margins + capital discipline | NVIDIA, TSMC, ASML, Broadcom, KLA, Arista, Vertiv, Equinix, ServiceNow, Microsoft |
| **Investment attractiveness** | Risk-adjusted value — growth + economics vs price | Micron, Arista, Broadcom, ServiceNow, AMD, Microsoft, Cerebras, CoreWeave, Lam, Snowflake |

The three lists barely overlap. Anthropic and OpenAI are #1 in technology importance, *negative* in business quality (combined ~$20B+/yr burn), and valuation-dependent in attractiveness. Micron is mid-tier in importance, cyclic in quality, and #1 in risk-adjusted attractiveness. This separation drives everything below.

---

## LAYER-BY-LAYER ECONOMICS

### 1. Semiconductor equipment

| Attribute | Assessment |
|---|---|
| Market leaders | ASML (litho ~100% EUV), Lam (etch, 100% of HBM high-AR), AMAT (deposition + ~50% HBM packaging), KLA (metrology ~50–58%) |
| AI-driven revenue growth | 15–25% CAGR; 2026 WFE raised to ~$140B; AI content per wafer rising (HBM 3–4x wafer starts per bit; packaging >50% growth at AMAT) |
| Pricing power | **High** — tollbooths; ASML monopoly; Lam 100%-share; KLA recipe-locked |
| Gross margin potential | 45–62%: KLA 62%, ASML ~50%, Lam ~48–50%, AMAT ~46% |
| Competitive intensity | **Moderate** — 2–4 player oligopolies; technology moats; long-term threat from Chinese domestic suppliers (AMEC/Naura) behind export-control walls |
| Commoditisation trend | **Less commoditised** — each node generation adds tool content (GAA, HBM layers, chiplets, hybrid bonding); the AI cycle makes tools more, not less, valuable per wafer |
| Long-term winners | ASML, Lam, KLA, AMAT — the AI-content-per-wafer compounders |
| Long-term losers | Non-AI-exposed second-tier tools (Canon litho), mature-node equipment; Chinese tools win domestically but stay fenced out of the West |

### 2. Foundry & manufacturing

| Attribute | Assessment |
|---|---|
| Market leaders | TSMC (~90%+ of leading-edge AI silicon + dominant CoWoS), Samsung (trailing), Intel (18A emerging) |
| AI-driven revenue growth | 15–30%; TSMC AI-premium pricing each generation; CoWoS revenue growing 50%+ |
| Pricing power | **Very high** — capacity allocation is the pricing mechanism; CoWoS scarcity premium |
| Gross margin potential | TSMC 40%+ (targeting ~50%+ long-term on leading edge); Intel foundry negative; Samsung foundry weak |
| Competitive intensity | **Low** at leading edge — effectively TSMC plus two trailers; the least contested layer in the chain |
| Commoditisation trend | **Less commoditised** — consolidation into a near-monopoly; advanced packaging (CoWoS) is a differentiated bottleneck, not a commodity |
| Long-term winners | TSMC (the toll on everything), Intel (call option on 18A), CoWoS supply chain |
| Long-term losers | Samsung foundry (trailing node roadmap), GlobalFoundries (stuck at mature nodes, zero AI leverage) |

### 3. AI accelerators

| Attribute | Assessment |
|---|---|
| Market leaders | NVIDIA (est. 85–90% merchant; ~60–70% of all AI accelerators incl. custom), AMD (~10–15%), Broadcom/Marvell custom-ASIC duopoly (~70%/~20–25% design share), challengers (Cerebras, Groq, SambaNova) |
| AI-driven revenue growth | 40–60%; NVIDIA DC the fastest ramp in its history; custom silicon the fastest segment (~26% CAGR to 2031) |
| Pricing power | NVIDIA **extreme** (~70%+ GM); custom ASIC = cost-down pressure (hyperscalers own the economics) but design services are scarce; AMD moderate |
| Gross margin potential | NVIDIA ~70–75%; Broadcom AI ~60–65%; Marvell ~60–70%; AMD ~50–55% |
| Competitive intensity | **High and rising** — custom silicon at ~28% of AI servers, AMD inference wins, open-Ethernet ecosystems; the frontier of the NVIDIA contest |
| Commoditisation trend | **Slowly more commoditised** at the margin — inference silicon commoditising faster than training; training + CUDA still differentiated; custom silicon is the structural commoditiser |
| Long-term winners | NVIDIA (training + ecosystem), Broadcom/Marvell (the custom-silicon toll), AMD (inference share), Cerebras (wafer-scale niche) |
| Long-term losers | Intel Gaudi (no share, no ecosystem), Groq (tech transferred to NVIDIA), capital-poor challengers |

### 4. Memory & HBM

| Attribute | Assessment |
|---|---|
| Market leaders | SK Hynix (HBM ~52–62%, NVIDIA's lead), Samsung (~25–39%), Micron (~8–25%, only Western, HBM4 first-mover); CXMT (China) in commodity DRAM |
| AI-driven revenue growth | HBM +58% YoY to ~$54.6B (2026), ~40% of DRAM; DRAM contract prices >2x since late 2025 |
| Pricing power | **Extreme today** — sold out through 2027, Micron printing 84.6% GM; historically cyclic — the highest-peak, most-violent-mean-reverting pricing in the chain |
| Gross margin potential | 30–85% depending on cycle phase; peak-phase margins exceed every other layer |
| Competitive intensity | **Low** — 3-player HBM qualification game; CXMT threatens commodity DRAM, not (yet) HBM |
| Commoditisation trend | **Split** — HBM *less* commoditised near-term (capacity + qualification), commodity DRAM structurally commoditised; CXMT is the 5-year deflationary force; HBM4E/5 could re-commoditise by 2029–30 |
| Long-term winners | SK Hynix (structural HBM leader), Micron (Western premium + HBM4 timing), Samsung (scale, if execution holds) |
| Long-term losers | Commodity-DRAM-only players; Samsung/Micron commodity margins under CXMT pressure; investors who buy the 84.6% GM as permanent |

### 5. Networking & optical infrastructure

| Attribute | Assessment |
|---|---|
| Market leaders | Broadcom (merchant switching ~70–80% of high-end), Arista (systems, 100+ AI customers), NVIDIA (NVLink/Spectrum-X), Coherent (optical, NVIDIA-backed), Credo (AECs), Astera (retimers) |
| AI-driven revenue growth | 25–50%; Arista +40% (FY26 guide), Coherent DC +41%, Credo +206%, Astera +104% |
| Pricing power | **Moderate-high** — Arista 48–49% op margin in a "commodity" market (brand + design-ins); optical/transceiver pricing eroding under Chinese competition; NVIDIA's NVLink premium is contractual |
| Gross margin potential | Arista ~60–65% GM; Credo ~68%; Astera ~75%; Coherent ~35–40%; Broadcom switching ~60%+ |
| Competitive intensity | **High and rising** — optics is the most contested layer (Innolight/Eoptolink undercutting), Ethernet vs NVLink bifurcation, multiple AEC/retimer vendors |
| Commoditisation trend | **More commoditised** — transceivers commoditise each generation (800G→1.6T); retimers/AECs follow; the exceptions: merchant switching silicon (Broadcom) and private interconnect (NVLink Fusion) |
| Long-term winners | Broadcom (silicon toll), Arista (fabric franchise), NVIDIA (interconnect premium), Credo (AEC near-term), Lightmatter if CPO lands (2027–28 re-differentiation) |
| Long-term losers | Western optical vendors vs Chinese price competition (Lumentum class), InfiniBand as a standard, second-tier retimer/optical players |

### 6. Data centres & power infrastructure

| Attribute | Assessment |
|---|---|
| Market leaders | Power/cooling: Vertiv (near-monopoly high-density), Eaton (grid-side), Schneider; Servers: Dell, Supermicro, Foxconn/Quanta; Operators: Equinix, DLR, Vantage, hyperscaler self-build |
| AI-driven revenue growth | 20–30%; Vertiv FY26 guide ~$14B from $10.2B (+37%); Dell AI servers +757% YoY; Eaton DC orders +85% |
| Pricing power | Vertiv **strong in shortage** (2.9x book-to-bill, $15B backlog); servers **none** (thin margins); DC sites **scarcity rents** (power-secured land) |
| Gross margin potential | Vertiv ~40%+; Eaton ~38–40%; Equinix ~50%+ (interconnection premium); Dell ~20% overall with AI servers at low single-digit contribution; SMCI ~11–15% |
| Competitive intensity | Moderate-high — power/cooling oligopoly; servers cut-throat; DC real estate contestable (private capital vs REITs) |
| Commoditisation trend | **Split** — servers permanently commoditised (value flows to GPU owners); power/cooling equipment semi-commoditised but scarcity-protected near-term; power-secured sites *less* commoditised (the scarcest asset in AI) |
| Long-term winners | Vertiv, Eaton, Crusoe/Nebius (powered compute), private DC capital (Vantage-class), Equinix (inference-era interconnection) |
| Long-term losers | Server OEMs (volume, no margin), listed REITs losing the buildout (DLR class), power vendors without high-density products |

### 7. Cloud platforms

| Attribute | Assessment |
|---|---|
| Market leaders | AWS (AI >$25B run-rate, 39.4% op margin), Azure (+43%, $678B RPO), Google Cloud (+82%, 35.6% op margin), Oracle (OCI +93%, $638B backlog); GPU clouds: CoreWeave ($99.4B backlog), Nebius (+841%), Lambda, Crusoe |
| AI-driven revenue growth | AI-specific triple digits; overall cloud 20–40% (all hyperscalers capacity-constrained) |
| Pricing power | **Moderate** — consumption pricing, discounting culture; capacity scarcity supports near-term pricing, custom silicon + competition erode it long-term; GPU rental pricing power *falling* (inference price war) |
| Gross margin potential | Services 55–70% GM; AWS op margin 39.4% held during buildout (the quality benchmark); GPU clouds thin |
| Competitive intensity | **High** — 4 hyperscalers + GPU clouds + inference clouds; but the constraint is supply, so intensity is deferred |
| Commoditisation trend | **Bifurcating** — commodity GPU rental commoditising now (hyperscaler internal clouds, price war); integrated cloud (data + agents + governance) less commoditised — value is migrating up the stack |
| Long-term winners | AWS, Azure, Google (durable annuities with expanding op margins), Oracle (near-term, credit-adjusted), CoreWeave (if concentration resolves) |
| Long-term losers | Arbitrage GPU clouds without power or capital (Baseten/Modal margin squeeze), Nebius if hyperscaler internalization accelerates (Meta datapoint), second-tier GPU clouds |

### 8. Foundation models

| Attribute | Assessment |
|---|---|
| Market leaders | OpenAI (~27% enterprise spend), Anthropic (~40%), Google DeepMind, xAI, Meta (Muse); open: Qwen (~69% of derivatives), Llama (~11%) |
| AI-driven revenue growth | API market 80–120% by volume — but token prices falling ~50%/yr, so revenue growth is volume-led, value growth far smaller |
| Pricing power | **Low and falling** — GPT-5.6 Terra at half price; open models at 5–10x lower; multi-model gateways (Bedrock/Vertex) commoditise switching; the only pricing power is consumer subscriptions (ChatGPT) and enterprise distribution |
| Gross margin potential | Negative at the lab level (OpenAI ~-122% op margin; Anthropic ~20.5x gross run-rate on ~$47B); API gross margins positive but compute-dominated; enterprise/agent margins improving |
| Competitive intensity | **Extreme** — the most contested layer in the chain; benchmarks rotate leadership quarterly; open models compress pricing from below |
| Commoditisation trend | **Rapidly more commoditised** — weights are the commodity; the durable value is migrating to distribution, agents/workflows (Claude Code $2.5B ARR), and compute ownership |
| Long-term winners | Anthropic (enterprise platform), OpenAI (consumer platform), Google (distribution), xAI (compute + distribution) — as platforms, not model sellers |
| Long-term losers | Model-only labs without distribution (Cohere-class), pure open-weight serving (commodity margins), frontier labs that fail to convert model leadership into workflow distribution |

### 9. AI applications

| Attribute | Assessment |
|---|---|
| Market leaders | Enterprise: Microsoft Copilot (30M seats), Salesforce Agentforce ($1.2B ARR), ServiceNow (>$1B AI ACV), Palantir (+93%), Snowflake/Databricks; Dev tools: Cursor ($2.6–4B+ ARR), Claude Code, Cognition; Verticals: Harvey, Sierra, Tempus, Notion |
| AI-driven revenue growth | Agentic software 100%+ (Agentforce +205%, ServiceNow AI ACV doubling, Cursor's ARR explosion); enterprise software overall 10–20% |
| Pricing power | **High per seat** — $60–200/mo dev seats; Harvey $1.2–3K/attorney/month; workflow + data + trust moats — but platform bundling (Copilot/Agentforce/Epic) is the structural threat |
| Gross margin potential | 75–85% software margins — the best in the chain after NVIDIA; the question is COGS (model API) share, not margin |
| Competitive intensity | **High and rising** — platform bundling, model labs shipping vertical agents, thin-layer commoditisation |
| Commoditisation trend | **Bifurcating** — feature-level AI in SaaS commoditises (bundled free); workflow/data-embedded applications resist; the layer splits into commodity AI features vs proprietary workflows |
| Long-term winners | Microsoft, ServiceNow, Palantir, Cursor (via SpaceX), Harvey, Sierra, Tempus, Notion — the workflow/data holders |
| Long-term losers | Feature-level AI in commodity SaaS, platform-captured verticals (Abridge-class if Epic wins), thin consumer apps without distribution (Midjourney-class) |

---

## The "$1 of AI spending" waterfall (stylised, 2026)

Of every **$1.00** of AI infrastructure spend:

| Share of the dollar | Where it goes | Approx. profit captured per $1.00 |
|---|---|---|
| ~$0.30 | NVIDIA silicon + systems | ~$0.21 (70%+ GM) — **the largest single capture in the chain** |
| ~$0.10 | HBM/memory | ~$0.07 at peak pricing (84.6% GM) — cyclic extreme |
| ~$0.08 | TSMC + CoWoS | ~$0.04 (45%+ GM) |
| ~$0.05 | Equipment (amortised per wafer) | ~$0.025 (50%+ GM) |
| ~$0.06 | Networking/interconnect | ~$0.03 (40–75% GM by vendor) |
| ~$0.12 | Power, cooling, data centre | ~$0.05 (40%+ GM) |
| ~$0.08 | Server assembly | ~$0.01 (<15% GM) — **captures almost nothing** |
| ~$0.21 | Cloud ops, software, model layer | negative-to-positive; **the model layer contributes negative** |

*Stylised illustration, not an accounting statement. Directionally robust: NVIDIA + memory + TSMC capture the profit; assembly and the model layer capture the least; cloud converts capex into an annuity over time.*

---

## Q1. The 10 strongest AI-related economic moats

| Rank | Company | Moat type | Why it's a moat |
|---|---|---|---|
| 1 | **NVIDIA** | Ecosystem + switching cost | CUDA: 15 years of installed software, libraries, and talent — the deepest moat in technology, not just AI |
| 2 | **TSMC** | Scale + process differentiation | Leading-edge monopoly with multi-billion-NRE customer lock-in; CoWoS scarcity |
| 3 | **ASML** | Policy-backed monopoly | EUV has no substitute and no entrant path |
| 4 | **Broadcom** | Contract + switching silicon | $128B binding commitments; customers' multi-year roadmaps run through its design teams |
| 5 | **SK Hynix** | Certification + capacity | NVIDIA-qualified HBM leadership; qualification cycles are years long |
| 6 | **Microsoft** | Distribution + exclusivity | The OpenAI channel is exclusive and structural; $678B RPO |
| 7 | **KLA** | Installed-base lock-in | Recipe-locked fleets, 80% contracted services, ~7x nearest rival |
| 8 | **Lam Research** | Category-share monopoly | 100% of HBM high-aspect-ratio etch — a monopoly within a memory oligopoly |
| 9 | **Anthropic** | Enterprise preference (emerging) | ~40% of enterprise LLM spend + Claude Code ecosystem; trust compounds |
| 10 | **Arista** | Switching costs in a "commodity" market | Fabric design-ins + management stack + 48–49% op margins prove the moat |

*Honourable mentions: Vertiv (integration with NVIDIA reference designs), Equinix (interconnection), Micron (Western HBM + HBM4 timing), Palantir (ontology + defence), OpenAI (brand).*

## Q2. Companies that are AI infrastructure bottlenecks

**Physical bottlenecks** (capacity or technology scarcity):
- **TSMC** — leading-edge fabrication + CoWoS: ~90%+ of accelerators, sold out
- **ASML** — EUV: no new leading-edge nodes without it
- **SK Hynix / Samsung / Micron** — HBM: sold out through 2027; allocation decides 2027 programs
- **Lam / AMAT** — HBM etch (100%) + packaging equipment (~50%): the US-controlled leg
- **Vertiv / Eaton** — power and cooling: 307GW vs queues to 2030; NoVA powered shell <5%
- **Coherent / Lightmatter** — rack-scale interconnect: 1.6T ramp (book-to-bill >4x), CPO 2027–28

**Virtual bottlenecks** (ecosystem or contractual):
- **NVIDIA** — GPU supply (~400K GB300 pre-orders) + CUDA software gravity
- **Broadcom / Marvell** — custom-ASIC design capacity: a duopoly with finite program slots
- **Frontier-lab capital circularity** — the financial bottleneck: labs are each other's largest customers
- **The export-control regime** — the policy bottleneck: gates China's silicon access and US model releases

## Q3. Companies that capture the most value per dollar of AI spending

| Rank | Company | Value capture per $1 of AI spend | Basis |
|---|---|---|---|
| 1 | **NVIDIA** | Highest in the chain | ~$0.30 of every infrastructure dollar at ~70%+ GM — and it also charges the downstream (inference, NVLink) |
| 2 | **SK Hynix / Micron / Samsung** | Peak-cyclically the highest GM in the chain | 84.6% GM at Micron; sold-out capacity through 2027 |
| 3 | **ASML** | Highest margin per tool dollar | ~50% GM on a monopoly; every wafer needs it |
| 4 | **TSMC** | ~$0.04–0.06 of every infra dollar | 45%+ GM, but a smaller share of the dollar than NVIDIA |
| 5 | **Broadcom** | ~60%+ GM on design services + switching | Captures the custom-silicon toll regardless of who wins |
| 6 | **KLA / Lam** | 62%/50% GM tollbooths | Process control + etch content scales with every AI node |
| 7 | **Vertiv** | High-margin per MW deployed | Power is the binding constraint; scarcity pricing |
| 8 | **Hyperscalers (AWS/Azure/Google)** | Annuity converters | Turn capex into 30–40% op-margin recurring revenue over 5+ years |
| 9 | **ServiceNow / Palantir / Cursor** | Highest per-seat dollar | 75–85% GM software on AI-led pricing |
| 10 | **Frontier labs** | **Negative** | The intellectual core of AI captures negative economics — the paradox of the chain |

## Q4. Where the value chain will commoditise

| Commoditising now (fast) | Commoditising over 2–4 years | Resists commoditisation |
|---|---|---|
| Model weights (open models at 5–10x lower price) | Inference serving (price war underway) | CUDA ecosystem (NVIDIA) |
| Token/API pricing (~50%/yr deflation) | Optical transceivers (1.6T → like 800G) | Custom-ASIC design services (capacity-constrained duopoly) |
| Commodity GPU rental | AECs/retimers | HBM (qualification + allocation) |
| Server assembly (already) | Commodity DRAM (CXMT entry) | CoWoS advanced packaging |
| Feature-level AI in SaaS (bundled free) | Second-tier AI PCs/edge silicon | Power-secured DC sites |
| | | Switching silicon (Broadcom) |
| | | Agent/workflow embedding (Claude Code, ServiceNow, Harvey) |
| | | Frontier-scale training (capital + data advantage) |

**The pattern:** commoditisation flows from the model layer outward. What resists is where scarcity, certification, or ecosystem lock-in lives.

## Q5. Where investors are overestimating / underestimating value

**Overestimated:**
1. **Commodity GPU/inference clouds at premium multiples** — Nebius ~55x trailing revenue, Baseten 6x valuation in a year: the inference price war attacks exactly their margins.
2. **Frontier lab marks as model-sellers** — Anthropic ~20.5x gross run-rate (negative FCF), OpenAI ~34x: weights are commoditising; the platform value (Claude Code, enterprise distribution) is real but a fraction of the "model lab" label.
3. **Oracle's backlog-as-asset** — market prices $638B of backlog as an asset; concentration (~half on OpenAI) + BBB-/negative FCF say it's partly a liability. The -64% repricing says the market knows; the multiple still doesn't fully adjust for credit.
4. **Palantir at ~50x forward** — priced for sovereign-AI permanence, not for what happens if US government spending normalises.
5. **NVIDIA's multiple** — the moat is real; the price is not the moat. Priced for perfection with custom silicon at ~28% of AI servers and rising.
6. **50–100x ARR private app rounds** — Sierra ~105x, Cognition ~50x: model-layer price cuts land directly on these.

**Underestimated:**
1. **The equipment tollbooths — the "hidden AI"** — Lam/AMAT/KLA at ~20–25x earnings with 40–62% GM and rising AI content per wafer, while the market pays 50–70x for software "AI names." The least-popular seat at the table that every AI chip must pass.
2. **Vertiv** — 34x forward vs 55x+ for GPU clouds that depend on its hardware; power is the *real* constraint and its $15B backlog proves it.
3. **Arista** — a 48–49% op-margin compounder with supply-constrained demand; priced as a hardware name, earning software economics.
4. **Microsoft** — $678B RPO (+84%), Copilot seat adds doubling QoQ, OpenAI optionality: the market still prices the AI transition as noise inside a legacy behemoth.
5. **Memory peak economics** — Micron at 84.6% GM sold out through 2027: the market keeps applying "cyclical peak" discounts to a book that is contractually bound — the question is 2028, not 2026.
6. **CoreWeave post-drawdown** — ~$49B cap vs $99.4B contracted backlog (concentration-adjusted) after the market round-tripped it on capex jitters.

---

## The three lenses, resolved

| Company | Technology importance | Business quality | Investment attractiveness | Why they diverge |
|---|---|---|---|---|
| **NVIDIA** | #1 | Excellent (70%+ GM) | Strong but priced for perfection | The moat and the price are both real; custom silicon is the 2028 question |
| **Anthropic / OpenAI** | #1 (frontier) | **Negative** (combined ~$20B+/yr burn) | Depends on IPO pricing | Best technology, worst current economics — the industry's central inversion |
| **Micron** | High (HBM) | Cyclic (84.6% GM is a peak) | #1 risk-adjusted | Market can't decide if 84.6% is real; contracts say it is — until 2028 |
| **TSMC / ASML** | #1 (non-US) | Excellent | Good (gateway constraints) | Everyone agrees — and the price mostly reflects it |
| **Lam / AMAT / KLA** | High (tollbooths) | Very good (45–62% GM) | **Undervalued** | "Boring" hardware multiples on "exciting" AI content — the classic hidden-AI discount |
| **Microsoft** | High (chokepoint) | Excellent ($678B RPO) | Attractive | Transition priced as noise; the AI option is nearly free |
| **Vertiv** | High (power) | Good (40%+ GM, 2.9x B2B) | Attractive | Power is more binding than compute, but priced like a supplier, not a bottleneck |
| **ServiceNow** | Medium (agentic leader) | Excellent (AI ACV doubling) | Attractive | The cleanest large-cap expression of the agent monetisation shift |
| **Oracle** | High (capacity) | **Deteriorating** (BBB-, negative FCF) | Poor risk/reward | Backlog is not equity value; concentration + credit are the real story |
| **Palantir** | High (sovereign AI) | Good (80% GM, +93%) | Poor (50x forward) | Tech importance and price have fully separated |

---

## Bottom line

1. **Profits accumulate upstream**: NVIDIA, TSMC, ASML, HBM, equipment, and power capture the economic profits of AI; the model layer — the reason the industry exists — currently burns capital. This inversion is the defining feature of the 2026 value chain.
2. **The moat economy is concentrated**: 10 companies (five US: NVIDIA, Broadcom, Microsoft, Lam, KLA) hold most of the chain's durable economic rent; everything downstream is a toll on them.
3. **Commoditisation is directional**: it starts at model weights and works outward; what resists it — CUDA, HBM certification, CoWoS, custom-ASIC design capacity, power-secured land, workflow embedding — is where the next decade of value capture will concentrate.
4. **The best risk-adjusted value sits in the "hidden AI"**: equipment tollbooths, power, and fabric switches earn monopoly economics at hardware multiples, while the market pays platform multiples for businesses the model layer can reprieve at will.

---

*Builds on US-AI-Supply-Chain-Map-Aug-2026.md (layer data, shares, bottlenecks) and US-AI-Industry-Ranking-Aug-2026.md (tier classification). Growth rates and the $1-spend waterfall are analyst estimates; gross margins are company-reported or consensus approximations. Information, not investment advice.*
