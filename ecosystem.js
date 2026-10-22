/* ============================================================
   Ecosystem graph — 20 nodes + typed edges
   Source: US-AI-Top20-Investment-Profiles-Aug-2026.md
   (ASCII map + relationship table). No new relationships.
   ============================================================ */
window.AIDATA = window.AIDATA || {};

window.AIDATA.ecosystem = {
  /* layer: 1=physical infra, 2=cloud/compute, 3=platform, 4=applications (top) */
  nodes: [
    { id: "nvidia", label: "NVIDIA", layer: 1, category: "infrastructure", sub: "Compute + CUDA", note: "Universal compute supplier — every layer depends on it (universal supply)" },
    { id: "tsmc", label: "TSMC", layer: 1, category: "infrastructure", sub: "Foundry + CoWoS", note: "Fabricates NVIDIA, Broadcom XPUs, Cerebras, Trainium, TPU, Maia — the single-point dependency" },
    { id: "broadcom", label: "Broadcom", layer: 1, category: "infrastructure", sub: "Custom ASIC + switching", note: "Custom silicon → Alphabet TPU, Meta MTIA, OpenAI Jalapeño; switching → everyone" },
    { id: "micron", label: "Micron", layer: 1, category: "infrastructure", sub: "HBM (only Western)", note: "HBM allocation gates every accelerator program" },
    { id: "vertiv", label: "Vertiv", layer: 1, category: "infrastructure", sub: "Power + cooling", note: "Power/cooling → every data centre above (the buildout's binding constraint)" },
    { id: "cerebras", label: "Cerebras", layer: 1, category: "disruptors", sub: "Wafer-scale", note: "Wafer-scale inference contracts → OpenAI, AWS" },
    { id: "coreweave", label: "CoreWeave", layer: 2, category: "disruptors", sub: "GPU cloud", note: "GPU capacity → OpenAI, Microsoft, Meta; 10% OpenAI equity; 62% of revenue from Microsoft" },
    { id: "xai", label: "xAI", layer: 2, category: "disruptors", sub: "Grok + Colossus", note: "Compute landlord: rentals → Anthropic ~$1.25B/mo, Google ~$920M/mo" },
    { id: "microsoft", label: "Microsoft", layer: 2, category: "platform", sub: "Azure + Copilot", note: "Capital + cloud + distribution ↔ OpenAI" },
    { id: "amazon", label: "Amazon", layer: 2, category: "platform", sub: "AWS + Trainium", note: "Capital + cloud + Trainium ↔ Anthropic" },
    { id: "alphabet", label: "Alphabet", layer: 2, category: "platform", sub: "Gemini + TPU + Cloud", note: "Capital + cloud → Anthropic ($200B commitment); TPU on Broadcom; Siri deal; xAI rentals" },
    { id: "openai", label: "OpenAI", layer: 3, category: "platform", sub: "GPT + ChatGPT", note: "Capital ↔ Microsoft; compute from CoreWeave/Oracle; custom silicon (Jalapeño) via Broadcom; price pressure from DeepSeek" },
    { id: "anthropic", label: "Anthropic", layer: 3, category: "platform", sub: "Claude + Claude Code", note: "Capital ↔ Amazon; cloud from Alphabet; compute rentals → xAI; model dependency for Cursor/Harvey" },
    { id: "deepseek", label: "DeepSeek", layer: 3, category: "disruptors", sub: "Open weights", note: "Open weights: price pressure on OpenAI, Anthropic, Google" },
    { id: "meta", label: "Meta", layer: 3, category: "disruptors", sub: "Llama + Muse", note: "Dual-track competition + open distribution vs all labs; MTIA custom silicon via Broadcom" },
    { id: "servicenow", label: "ServiceNow", layer: 4, category: "applications", sub: "Agentic platform", note: "Platform dependency: hyperscalers + models (model & cloud dependency group)" },
    { id: "palantir", label: "Palantir", layer: 4, category: "applications", sub: "AIP", note: "Platform dependency: hyperscalers + models (model & cloud dependency group)" },
    { id: "cursor", label: "Cursor", layer: 4, category: "applications", sub: "AI code editor", note: "Model dependency → Anthropic / OpenAI" },
    { id: "harvey", label: "Harvey", layer: 4, category: "applications", sub: "Legal AI", note: "Model dependency → OpenAI / Anthropic" },
    { id: "tempus", label: "Tempus", layer: 4, category: "applications", sub: "Healthcare AI", note: "Healthcare AI on NVIDIA compute" }
  ],
  /* edge types: supply | capital | computeRental | pricePressure | competition | modelDependency | customSilicon | compute */
  edges: [
    { from: "tsmc", to: "nvidia", type: "supply", label: "Fabrication + CoWoS" },
    { from: "tsmc", to: "broadcom", type: "supply", label: "Fabrication + CoWoS" },
    { from: "tsmc", to: "cerebras", type: "supply", label: "Fabrication" },
    { from: "micron", to: "nvidia", type: "supply", label: "HBM supply" },
    { from: "broadcom", to: "alphabet", type: "customSilicon", label: "TPU" },
    { from: "broadcom", to: "meta", type: "customSilicon", label: "MTIA" },
    { from: "broadcom", to: "openai", type: "customSilicon", label: "Jalapeño" },
    { from: "microsoft", to: "openai", type: "capital", label: "Capital + cloud + distribution" },
    { from: "amazon", to: "anthropic", type: "capital", label: "Capital + cloud + Trainium" },
    { from: "alphabet", to: "anthropic", type: "capital", label: "Capital + cloud ($200B commitment)" },
    { from: "anthropic", to: "xai", type: "computeRental", label: "~$1.25B/mo compute" },
    { from: "alphabet", to: "xai", type: "computeRental", label: "~$920M/mo compute" },
    { from: "deepseek", to: "openai", type: "pricePressure", label: "Price pressure" },
    { from: "deepseek", to: "anthropic", type: "pricePressure", label: "Price pressure" },
    { from: "deepseek", to: "alphabet", type: "pricePressure", label: "Price pressure" },
    { from: "meta", to: "openai", type: "competition", label: "Dual-track competition" },
    { from: "meta", to: "anthropic", type: "competition", label: "Dual-track competition" },
    { from: "meta", to: "alphabet", type: "competition", label: "Dual-track competition" },
    { from: "coreweave", to: "openai", type: "compute", label: "GPU capacity + 10% equity" },
    { from: "coreweave", to: "microsoft", type: "compute", label: "62% of revenue" },
    { from: "cerebras", to: "openai", type: "compute", label: "Wafer-scale inference contracts" },
    { from: "cerebras", to: "amazon", type: "compute", label: "AWS partnership" },
    { from: "cursor", to: "anthropic", type: "modelDependency", label: "Model dependency" },
    { from: "cursor", to: "openai", type: "modelDependency", label: "Model dependency" },
    { from: "harvey", to: "openai", type: "modelDependency", label: "Model dependency" },
    { from: "harvey", to: "anthropic", type: "modelDependency", label: "Model dependency" },
    { from: "tempus", to: "nvidia", type: "compute", label: "Compute" }
  ],
  edgeTypes: {
    supply: { label: "Supply", color: "#4DA3FF", dash: null },
    capital: { label: "Capital + cloud", color: "#D4A94E", dash: "6 4" },
    computeRental: { label: "Compute rental", color: "#E8A33D", dash: "2 4" },
    pricePressure: { label: "Price pressure", color: "#E5484D", dash: null },
    competition: { label: "Competition / open distribution", color: "#E5484D", dash: "6 4" },
    modelDependency: { label: "Model dependency", color: "#8A93A6", dash: "2 4" },
    customSilicon: { label: "Custom silicon", color: "#9FB4CC", dash: null },
    compute: { label: "Compute", color: "#34C77B", dash: null }
  },
  takeaways: [
    "All roads lead to TSMC/NVIDIA/Vertiv at the base.",
    "The platform layer is held together by capital and compute deals among direct competitors — the circularity is systemic.",
    "The app layer sits on a dependency it doesn't control (models).",
    "The disruptors attack from above (DeepSeek pricing), beside (CoreWeave/Cerebras compute), and inside (xAI/Meta integration)."
  ]
};
