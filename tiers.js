/* ============================================================
   Tiers & rankings — page content
   Source: US-AI-Industry-Ranking-Aug-2026.md
   (per-company tier fields live in companies.js)
   ============================================================ */
window.AIDATA = window.AIDATA || {};

window.AIDATA.tierDefs = [
  { tier: 1, name: "Critical AI infrastructure/platform", desc: "Essential bottlenecks or foundational layers of AI development." },
  { tier: 2, name: "Major AI winners", desc: "Strong competitive advantages, significant AI exposure, strong market positions — but substitutable or facing intense competition." },
  { tier: 3, name: "Emerging AI leaders", desc: "Strong growth potential with higher uncertainty, weaker moats, or earlier business stages." }
];

/* Classification disagreements (verbatim from the Ranking file) */
window.AIDATA.disagreements = [
  { company: "NVIDIA", call: "Tier 1", text: "The disagreement is not about tier but about what it means. NVIDIA is the industry's bottleneck today; custom silicon (28% of AI servers and rising) + inference commoditisation erode that status by 2028. Tier 1 reflects today's structural necessity; the erosion risk belongs in the risk column. Technology importance ≠ investment attractiveness: at ~70x forward, NVIDIA prices in continued dominance." },
  { company: "Microsoft", call: "Tier 1 (debatable)", text: "For Tier 1: chokepoint logic — Azure is the largest AI cloud, and the OpenAI relationship makes Microsoft structurally essential to the frontier-lab ecosystem (compute, distribution, ~$24B revenue passthrough, Stargate co-owner). For Tier 2: hyperscalers are substitutes. Call: Tier 1 — judge bottlenecks by what breaks if the company stops; a Microsoft pause breaks OpenAI's compute plan, which breaks the model layer." },
  { company: "Alphabet", call: "Tier 1 (debatable)", text: "Counterview: Google Cloud is only ~15% of revenue; models are a cost centre. Call: Tier 1 — the only company that owns model + silicon + cloud + consumer surface; the Apple Siri deal made it structurally essential to the industry's largest device base; also the fastest-growing hyperscaler (+82%)." },
  { company: "Oracle", call: "Tier 2 (debatable)", text: "Pro-Tier-1: $638B of contracted AI capacity (half from OpenAI's Stargate) — if Oracle wobbles, OpenAI's compute plan wobbles. Call: Tier 2 — capacity is a commodity (AWS/Azure/CoreWeave can absorb it); the edge is contracts and energy, not technology; BBB-/negative FCF makes it the segment's fragility point. Strategic importance is declining while the backlog grows." },
  { company: "Meta", call: "Tier 2 (debatable)", text: "Tier 1 argument: open Llama models were foundational to the open ecosystem; 3B+ daily reach is the largest AI distribution. Call: Tier 2 — strategic necessity requires monetization or unique supply; Meta's AI revenue is nascent, Muse trails the frontier, enterprise API unproven." },
  { company: "Marvell", call: "Tier 2 (borderline Tier 1)", text: "Trainium and Maia are structurally essential to AWS and Microsoft AI. Kept at Tier 2 because it holds ~20–25% of custom-ASIC design vs Broadcom's ~70%, and its two anchor customers define its ceiling. The train can't run without it — but it runs for two customers." },
  { company: "CoreWeave", call: "Tier 2 (borderline Tier 1)", text: "The only scale independent GPU cloud ($99.4B backlog) — a genuine chokepoint for lab capacity. Counter: 62% of revenue is one customer (Microsoft) that could internalize. Tier 2 with the closest-to-Tier-1 note." },
  { company: "KLA", call: "Tier 1 (not a 'bottleneck')", text: "KLA doesn't constrain capacity — it polices quality. But Tier 1 includes foundational layers, and process control at 50–58% share with 62% margins is as foundational as it gets: no HBM stack, chiplet, or 2nm step ships without KLA inspection." },
  { company: "Adobe", call: "Tier 3 despite ~$105B cap", text: "The tier is about AI strategic importance, not company size. Adobe's AI position is being consumed by generative substitution (Stock cannibalization) while its own AI (Firefly) lacks standalone monetization. One of the clearest tech-importance/company-size inversions in the database." },
  { company: "Palantir", call: "Tier 2 tech, poor investment attractiveness", text: "AIP is arguably the most important AI deployment platform for defence/government — but at ~50x forward revenue with a 40% drawdown behind it, the investment case is a multiple bet, not a fundamentals bet. The cleanest example of the tech/attractiveness separation." },
  { company: "Lam vs AMAT vs KLA", call: "All Tier 1", text: "Some would rank only Lam (100% HBM etch = true bottleneck) at Tier 1. All three kept at Tier 1: the equipment layer is a system — etch, deposition, packaging, and inspection are all non-bypassable steps in the same supply chain." }
];

/* Top 10 most strategically important US AI companies */
window.AIDATA.topStrategic = [
  { rank: 1, company: "NVIDIA", why: "The compute + CUDA bottleneck: the entire industry's training and inference runs on it" },
  { rank: 2, company: "Microsoft", why: "Azure AI + OpenAI distribution: a pause here breaks the frontier-lab compute plan" },
  { rank: 3, company: "Alphabet", why: "The only full-stack: models + TPU + cloud + 1B-user consumer surface + Apple Siri" },
  { rank: 4, company: "Anthropic", why: "The enterprise frontier lab: ~40% of enterprise LLM spend + Claude Code category leadership" },
  { rank: 5, company: "OpenAI", why: "Ecosystem gravity: ChatGPT distribution + the industry's funding anchor (Stargate)" },
  { rank: 6, company: "Amazon", why: "Trainium (sold out through 2027) + Bedrock + the Anthropic channel" },
  { rank: 7, company: "Broadcom", why: "The custom-silicon duopoly lead: TPU/MTIA/Trainium-class programs + Ethernet switching" },
  { rank: 8, company: "Micron", why: "HBM: the only Western supplier; capacity sold out through 2027" },
  { rank: 9, company: "Lam Research", why: "100% of HBM high-aspect-ratio etch — the sharpest single bottleneck in the US" },
  { rank: 10, company: "Vertiv", why: "Power is the #1 binding constraint; near-monopoly in high-density thermal+power" }
];
window.AIDATA.topStrategicNote = "Global ranking note: a non-US-inclusive list would place TSMC #1 (fabricates virtually all accelerators), ASML top-5 (EUV), and SK Hynix top-5 (HBM #1) — the US industry's three most critical dependencies sit outside the US.";

/* Top 10 strongest AI investment potential (risk-adjusted) */
window.AIDATA.topInvestment = [
  { rank: 1, company: "Micron", thesis: "HBM pricing power (84.6% GM), sold out through 2027, only Western supplier", risk: "HBM cyclicality; CXMT; valuation after huge run" },
  { rank: 2, company: "Arista", thesis: "AI networking compounder: supply-constrained demand, 48–49% margins, AI mix rising", risk: "NVIDIA Spectrum-X; customer concentration" },
  { rank: 3, company: "Broadcom", thesis: "Custom-silicon secular shift + switching duopoly; $100B FY27 AI guide on binding commitments", risk: "Google concentration; ASIC commoditization" },
  { rank: 4, company: "ServiceNow", thesis: "Highest-quality agentic monetization: AI ACV >$1B and doubling; governance moat", risk: "Consumption pacing; hyperscaler agents" },
  { rank: 5, company: "AMD", thesis: "MI400/HBM4 inflection at a fraction of NVIDIA's multiple; equity-warrant anchors", risk: "HBM4 allocation; ROCm gap; deal dependency" },
  { rank: 6, company: "Microsoft", thesis: "The quality compounder: $678B RPO, Copilot seat adds, OpenAI optionality", risk: "Capex/margin pressure; OpenAI concentration" },
  { rank: 7, company: "Cerebras", thesis: "Public pure-play challenger with $24.6B contracted backlog — rare revenue visibility", risk: "Backlog delivery; OpenAI concentration" },
  { rank: 8, company: "CoreWeave", thesis: "Pure-play GPU cloud at a discount after drawdown; $99.4B backlog + OpenAI equity", risk: "Microsoft 62% of revenue; financing costs" },
  { rank: 9, company: "Lam Research", thesis: "100% HBM etch share + WFE raised to $140B; sells regardless of which accelerator wins", risk: "China export controls; cycle timing" },
  { rank: 10, company: "Snowflake", thesis: "Data gravity + Cortex inflection (fastest product adoption ever) at a reasonable multiple", risk: "Databricks; consumption volatility" }
];
window.AIDATA.topInvestmentNote = "Pre-IPO note: the highest-upside exposure is the private queue — Anthropic, OpenAI, Scale AI, Lambda, Databricks, xAI — via the 2026–27 float wave. That upside carries IPO-window and pricing risk (Databricks needs >$188B; Anthropic needs to justify ~20.5x gross run-rate).";

/* Notable omissions from the Top-20 selection */
window.AIDATA.notableOmissions = [
  { company: "AMD / Arista", why: "Category leaders, but their themes — merchant #2, Ethernet systems — are captured by NVIDIA/Broadcom." },
  { company: "ASML / SK Hynix / Lam", why: "Critical bottlenecks, but non-US or represented by Micron." },
  { company: "Oracle", why: "Must-watch credit story, not a 'winner'." },
  { company: "Snowflake / Databricks", why: "Enterprise data platforms — track, but ServiceNow/Palantir carry the app-layer thesis." },
  { company: "Salesforce", why: "Agentforce real, but ServiceNow is the higher-quality agentic expression." }
];

/* Removed from the research universe (18) — with reasons (DB file) */
window.AIDATA.exclusions = [
  { company: "Tenstorrent", reason: "Early-stage revenue (~$150M orders), no anchor hyperscaler customer; value is M&A optionality (Qualcomm bid denied), not strategic position" },
  { company: "HPE", reason: "#3 AI server OEM behind Dell/Supermicro; AI systems still a minority of mix; Juniper networking angle is real but not AI-first" },
  { company: "Vercel", reason: "Deployment platform with AI features (v0), not an AI company" },
  { company: "Windsurf", reason: "No longer exists as a company — carved up between Google (~$2.4B license) and Cognition (~$250M) in July 2025; a consolidation datapoint, not a holding" },
  { company: "Celestial AI", reason: "Acquired by Marvell (Feb 2026, up to $5.5B) — folded into Marvell's interconnect franchise" },
  { company: "AI21 Labs", reason: "Israeli HQ, ~$50M ARR; relevant only as an M&A target (Nvidia talks)" },
  { company: "Cohere", reason: "Canadian HQ; a legit enterprise model company but outside 'US AI industry' scope — moved to context notes" },
  { company: "Midjourney", reason: "Bootstrapped, no capital raised — not investable; premium image niche being squeezed by GPT-image/Gemini bundling" },
  { company: "Luma AI", reason: "Consumer video follower behind Runway; the Saudi-compute angle is real but the company is not a value-chain chokepoint" },
  { company: "Character.AI", reason: "Strategic value (talent/license) already transferred to Google; monetization experiments don't change its declining position" },
  { company: "RunPod", reason: "~$240M ARR but redundant with Baseten/Modal in the inference-cloud set" },
  { company: "C3.ai", reason: "FY26 revenue -36% on 'unspeakably horrible' sales execution; no longer strategically relevant — a cautionary tale, not a holding" },
  { company: "UiPath", reason: "Legacy RPA compression; the agent-orchestration thesis is better represented by ServiceNow" },
  { company: "Decagon", reason: "Redundant with Sierra in the CX-agent set (~1/3.5 the scale)" },
  { company: "Writer", reason: "Full-stack enterprise genAI with own models, but redundant with the platform players (Snowflake/Databricks/IBM)" },
  { company: "Ambience Healthcare", reason: "Redundant with Abridge in ambient clinical AI (~1/3 the scale)" },
  { company: "Recursion", reason: "AI-biotech cautionary example; not a strategic chokepoint — Tempus covers the healthcare-AI holding" },
  { company: "Vast.ai / long-tail GPU marketplaces", reason: "Never material for institutional research" }
];

/* Non-US context companies (DB file) */
window.AIDATA.contextCompanies = [
  { company: "TSMC", cap: "~$2.18T", note: "Fabricates virtually all US AI accelerators (N3/N2 + CoWoS); the physical base of the stack" },
  { company: "ASML", cap: "~$663–671B", note: "EUV monopoly; gates leading-edge supply" },
  { company: "Arm", cap: "~$302B", note: "Every custom XPU (TPU, Trainium, MTIA, Maia) is Arm-based" },
  { company: "SK Hynix", cap: "~$735–845B", note: "HBM #1 (~52–62% share); $26.5B US ADR IPO (July 2026); -50% from peak — the AI-sentiment canary" },
  { company: "Samsung", cap: "~$1.0–1.15T", note: "HBM #2, first HBM4E samples" },
  { company: "Mistral", cap: "~€20B (~$23B)", note: "Europe's nearest frontier competitor" },
  { company: "Cohere", cap: "~$7B", note: "Canadian; enterprise model alternative, US-facing" },
  { company: "AI21 Labs", cap: "~$1.4B", note: "Israeli; relevant only as an M&A target" },
  { company: "Nebius", cap: "~$55B (Nasdaq)", note: "Dutch HQ, US-listed AI cloud (in universe)" },
  { company: "Eaton", cap: "~$174B", note: "Ireland-domiciled plc (in universe)" }
];

/* Per-company tier rationale (Ranking file tier tables) */
window.AIDATA.tierMeta = {
  /* Tier 1 */
  nvidia: { why: "The compute layer of the entire ecosystem; CUDA is the industry's programming standard", risks: "Custom silicon ~28% of AI servers; HBM allocation; ~70x fwd" },
  broadcom: { why: "The custom-silicon duopoly lead: TPU/Trainium/MTIA/Jalapeño all need its design; switches connect every cluster", risks: "Google concentration; ASIC commoditization" },
  micron: { why: "HBM is every accelerator's memory bottleneck; only Western supplier; sold out through 2027", risks: "HBM cyclicality; CXMT" },
  "lam-research": { why: "100% share of HBM high-aspect-ratio etch — no HBM stack ships without Lam tools", risks: "China 26–34%; WFE cycle" },
  "applied-materials": { why: "~50% of HBM packaging equipment + hybrid bonding — the advanced-packaging layer every accelerator requires", risks: "Packaging shifts; China" },
  kla: { why: "Foundational quality layer: ~50–58% share; every HBM layer and chiplet adds inspection steps", risks: "China 26–30%; cycle" },
  vertiv: { why: "Power is the #1 binding constraint (307GW vs queues to 2030); near-monopoly at high density", risks: "Execution; Q2 miss; 34x fwd" },
  openai: { why: "Ecosystem gravity: largest consumer distribution, enterprise API share, the industry's funding anchor (Stargate)", risks: "Apple→Gemini; -122% op margin; IPO" },
  anthropic: { why: "The enterprise frontier lab: ~40% of enterprise LLM spend; Claude Code category leader", risks: "Gross run-rate inflation; xAI compute dependency; IPO" },
  alphabet: { why: "The only full-stack AI company: Gemini + TPU + Cloud (+82%) + ~1B-user surface + Apple Siri", risks: "Gemini 3.5 Pro delay; FCF negative" },
  microsoft: { why: "The largest AI-cloud tenant chokepoint: Azure + OpenAI distribution + 30M Copilot seats + $678B RPO", risks: "OpenAI concentration; FCF -23%" },
  amazon: { why: "Trainium sold out through 2027 + Bedrock + the Anthropic channel — the second AI hyperscaler", risks: "Trainium execution; capex" },
  /* Tier 2 */
  amd: { why: "Strong #2 with OpenAI/Anthropic/Meta anchors; ROCm trails CUDA, custom silicon squeezes the middle", risks: "HBM4 allocation; ecosystem gap" },
  marvell: { why: "Duopoly partner (Trainium/Maia lock-in) — borderline Tier 1, but ~20–25% vs Broadcom's ~70%", risks: "Two-customer concentration" },
  qualcomm: { why: "On-device AI leader — important, not a bottleneck (Apple self-designs)", risks: "Handset cycle; DC niche" },
  intel: { why: "Strategically critical Western-foundry option (18A; NVIDIA $5B, Azure anchors) — unproven at scale", risks: "18A ramp; foundry losses; Gaudi marginal" },
  cerebras: { why: "Public challenger with $24.6B contracted backlog — real position, heavy delivery burden", risks: "Backlog execution; cash burn" },
  arista: { why: "Merchant Ethernet AI-fabric leader — strong winner, contestable layer", risks: "Spectrum-X; MSFT+Meta ~16–20%" },
  cisco: { why: "Major incumbent converting ($9B AI orders) — AI still ~6–7% of revenue", risks: "Slower share gains; small AI mix" },
  "astera-labs": { why: "Winner inside ~90% of AI servers — essential component, contestable niche", risks: "~245x trailing P/E" },
  credo: { why: "AEC category leader (+206% rev)", risks: "Top-3 customers = 88–90%" },
  coherent: { why: "Vertically integrated transceiver leader with NVIDIA's $2B backing", risks: "NVIDIA concentration; ~48x P/E" },
  supermicro: { why: "Fastest-to-market rack integrator — major winner with governance discount", risks: "DOJ China case; thin margins" },
  dell: { why: "#1/#2 AI server OEM, $51B backlog (+757% AI rev)", risks: "Thin margins; memory squeeze" },
  eaton: { why: "Major power beneficiary — but diversified, DC is minority of group revenue", risks: "~30x fwd premium" },
  equinix: { why: "Interconnection platform for AI — payoff deferred to inference era (2027+)", risks: "Hyperscale MWs bypassing colos" },
  "digital-realty": { why: "Largest wholesale landlord — structurally losing the buildout to private capital", risks: "BofA downgrade; REIT leverage caps" },
  meta: { why: "Distribution giant; Llama shaped the open ecosystem — but AI monetization nascent, Muse trails", risks: "Muse gap; $115–135B capex" },
  xai: { why: "Vertical integration + Colossus rentals (~$26B+ run-rate) — high potential, high execution risk", risks: "Execution; $6.4B loss; key person" },
  "scale-ai": { why: "The data-flywheel toll bridge; embedded with every lab + DoD; IPO-bound", risks: "Meta owns 49%; customer concentration" },
  oracle: { why: "Largest contracted AI-capacity builder (Stargate, $638B backlog) — essential to OpenAI's plan, but capacity is replaceable", risks: "OpenAI counterparty; BBB-; negative FCF" },
  ibm: { why: "Trusted enterprise-AI glue (watsonx + governance) — services-weighted", risks: "Consulting-weighted; slow growth" },
  coreweave: { why: "The pure-play GPU cloud: $99.4B backlog + OpenAI equity — closest to Tier 1 of any GPU cloud", risks: "Microsoft 62% of revenue" },
  nebius: { why: "AI-native cloud (+841% YoY) with owned power — hyperscaler internalization is the live threat", risks: "~55x trailing revenue" },
  salesforce: { why: "Agentforce $1.2B ARR (+205%) — but ~3% of revenue; seat-repricing risk", risks: "Agent cannibalization of seats" },
  servicenow: { why: "Highest-quality agentic monetization (>$1B AI ACV, doubling) + governance", risks: "Consumption pacing" },
  palantir: { why: "Sovereign-AI champion (AIP = 49% of US commercial, +149%) — high tech importance, extreme valuation", risks: "~50x fwd revenue; US-gov concentration" },
  snowflake: { why: "Data gravity + Cortex inflection (CoCo: fastest adoption in company history)", risks: "Databricks competition" },
  databricks: { why: "Largest private enterprise-AI franchise ($188B; AI >$1.4B annualized)", risks: "2027 IPO < $188B = down round" },
  cursor: { why: "Fastest-growing dev tool ever ($2.6–4B+ ARR); SpaceX acquisition — leader but model-dependent, losing share", risks: "Anthropic dependency; share 41→26%" },
  elevenlabs: { why: "Voice-infrastructure leader (>$500M annualized, largest API base)", risks: "TTS bundling; $11B→$22B talk" },
  harvey: { why: "Legal category leader (majority of AmLaw 100; ~$350M+ ARR) — strongest vertical moat", risks: "Frontier labs shipping legal agents; 44x ARR" },
  sierra: { why: "CX-agent category leader (40%+ of Fortune 50) — platform bundling overhead", risks: "~105x ARR; Agentforce bundling" },
  notion: { why: "Major, profitable consumer winner; >50% of ARR AI-enabled", risks: "Microsoft/Google bundling" },
  tempus: { why: "Public healthcare-AI bellwether (~$1.6B FY26 guide; near EBITDA breakeven)", risks: "Reimbursement; growth concentration" },
  /* Tier 3 */
  groq: { why: "Core tech licensed to NVIDIA; remaining cloud business unproven", risks: "Tech transferred; revenue scale" },
  sambanova: { why: "Emerging challenger with bank wins (JPMorgan) + 2027 IPO path", risks: "Scale; Intel relationship" },
  lightmatter: { why: "Pre-revenue next-gen interconnect — the CPO cycle (2027–28) decides", risks: "Tech risk; S-1 execution" },
  vantage: { why: "Private capital's flagship DC developer — strategic to buildout, non-investable", risks: "Leverage; rates; permitting" },
  lambda: { why: "IPO-bound (H2 2026) with strongest developer brand — stage risk is the issue", risks: "IPO pricing; GPU oversupply" },
  crusoe: { why: "Power-backed GPU cloud riding the energy constraint; pre-IPO at aggressive marks", risks: "Marks vs fundamentals" },
  baseten: { why: "Fastest-growing inference layer (~20x YoY) — price war attacks its margins directly", risks: "Inference price war" },
  modal: { why: "Serverless compute abstraction riding coding agents — strong UX, thin moat", risks: "Commoditization" },
  "together-ai": { why: "Strong bookings ($1.15B) in the open-model shift — margins compress as closed labs cut prices", risks: "Margin compression (Terra price cut)" },
  "fireworks-ai": { why: ">$1B revenue, >40T tokens/day — scale, thin moat on commodity hardware", risks: "Commoditization; open-share dependence" },
  "hugging-face": { why: "Strategically central to open ecosystem — monetization unproven, valuation contested ($7–20B)", risks: "Business-model uncertainty" },
  adobe: { why: "Major company, declining AI importance: generative substitution cannibalizes its core (Stock); Firefly lacks standalone monetization", risks: "Generative substitution; self-cannibalization" },
  perplexity: { why: "Leading AI-search challenger with post-ads revenue inflection — Google is the endgame opponent", risks: "Google/ChatGPT bundling; 45–50x rev" },
  suno: { why: "Category dominator (~90% of commercial AI music) with existential litigation risk", risks: "UMG/Sony/GEMA suits (61K songs)" },
  runway: { why: "Western video leader post-Sora — brutal competition, heavy burn", risks: "Veo bundling; Chinese price competition" },
  cognition: { why: "Fastest ARR growth in software (13x) — unproven at scale, ~50x revenue", risks: "Multiple; autonomy ceiling" },
  replit: { why: "Vibe-coding leader (50M users) — monetization backlash history", risks: "$1B ARR target credibility" },
  glean: { why: "Strong enterprise-agent position — Microsoft Copilot is an existential bundling threat", risks: "Copilot bundling; $12B round" },
  abridge: { why: "Category leader (KLAS #1) — Epic's native scribe is platform capture in motion", risks: "Epic native scribe rollout" },
  "hippocratic-ai": { why: "Emerging patient-facing leader — safety-first niche with ASP caps", risks: "Non-diagnostic ASP caps" }
};

/* Multi-role map (DB file) — group rows attached to each constituent company */
window.AIDATA.multiRoleGroups = [
  { label: "Cerebras / Groq / SambaNova", roles: ["Accelerator silicon", "Inference cloud"], primary: "Accelerator silicon (cloud is monetization channel)" },
  { label: "Snowflake / Databricks", roles: ["Data platform", "AI/agent layer"], primary: "Data + AI platform" },
  { label: "Dell / Supermicro", roles: ["AI servers", "Broader IT hardware"], primary: "AI servers" }
];
