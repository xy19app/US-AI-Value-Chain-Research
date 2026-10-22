# US AI Industry Research Dashboard

## Purpose

A comprehensive map of the US AI industry for investment research. The dashboard is built entirely from a six-part Markdown research series (August 2026) that classifies the AI value chain — infrastructure, platform, cloud, and applications — identifies strategic bottlenecks, and assesses where the economic profits of AI will accumulate.

**Scope:** ~67 companies across the four AI value-chain layers, 20 with full investment profiles, a 9-layer supply chain analysis, tier rankings, and a Top-20 ecosystem map.

**Content principle:** this is a static research snapshot. Everything displayed is transcribed from the six source Markdown files — no new companies, no updated figures, no invented numbers. Every section carries a "Source:" attribution to its file.

## Reading order

1. **Industry Map** (`US-AI-Industry-Map-Aug-2026.md` → *Executive Summary*)
   Understand the 4-layer AI value chain — Infrastructure → Platform → Cloud → Applications — and how money flows through it.

2. **Research Database** (`US-AI-Industry-Research-DB-Aug-2026.md` → *Company Profiles*)
   Understand the 65-company universe (67 with TSMC and DeepSeek): primary AI function, value-chain position, AI revenue exposure, competitive advantage, competitors. Includes the multi-role breakdown and the 18 companies excluded from the universe.

3. **Ranking** (`US-AI-Industry-Ranking-Aug-2026.md` → *Ranking Dashboard*)
   Understand Tier 1/2/3 strategic importance — critical bottlenecks vs. major winners vs. emerging leaders — plus the Top-10 strategic-importance and investment-potential lists and the classification disagreements.

4. **Supply Chain Map** (`US-AI-Supply-Chain-Map-Aug-2026.md` → *Supply Chain*)
   Understand bottlenecks and pricing power across 9 layers: equipment → manufacturing → compute → memory → networking → data centres → cloud → models → applications.

5. **Value Capture Analysis** (`US-AI-Value-Capture-Analysis-Aug-2026.md` → *Investment Themes* + *Supply Chain*)
   Understand where AI economics accrue — the "$1 of AI spend" waterfall, moats, pricing power, commoditisation, and over/underestimated value.

6. **Top20 Investment Profiles** (`US-AI-Top20-Investment-Profiles-Aug-2026.md` → *Company Profiles* + *Ecosystem Map*)
   Deep company analysis: overview, strategic role, moat, growth drivers, risks, monitoring indicators, bull/bear thesis, competitors.

## Methodology

- **Technology importance ≠ investment attractiveness.** The ranking separates structural necessity (what breaks without a company) from business quality and from risk-adjusted value. The three lenses are shown side by side in *Investment Themes*.
- **Facts are separated from analyst judgement.** Content is labelled `[FACT]` / `[DATA]` / `[ESTIMATE]` / `[VIEW]` / `[RISK]` wherever the distinction matters. Company profiles have a **Research Mode** (facts, data, moat, monitoring) and **Investor Mode** (thesis, risks, growth drivers, scores) toggle. The principle: always distinguish *what we know* from *what we believe*.
- **Estimates are marked.** Analyst estimates carry `(est.)` or `~` (e.g., market caps, share estimates). Figures marked `(reported)` or flagged "conflicting" are single-source or disputed.
- **Data as of: August 9, 2026.** This is a static snapshot — refreshed periodically by re-running the research process, **not live**. Volatile fields (market cap, valuation, share estimates) carry 🕒 Snapshot / Estimate badges rather than pretending to be current.

## Data freshness policy

| Field type | Label | Meaning |
|---|---|---|
| Market cap / valuation (e.g., `~$5.42T`) | 🕒 **Estimate** | Analyst estimate at snapshot date (Aug 9, 2026) |
| Market cap / valuation (no `~`) | 🕒 **Snapshot** | Figure as recorded at snapshot date |
| Revenue / growth figures | `[DATA]` | As stated in the source files |
| Anything not in the sources | `n/a — not in source` | Never filled in |

## Run locally

**Option 1 — double-click:** open `index.html` in any modern browser. No server, no build step, no network access required — all content ships inside the one file. (First visit asks for the access code set in `gate.html`.)

**Option 2 — local server (optional):**
```bash
cd ai-research-dashboard
python3 -m http.server 8080
# then open http://localhost:8080
```

## Structure

```
ai-research-dashboard/
├── index.html   # the entire dashboard — styles, data, logic and views in one file
├── gate.html    # access-code page (soft gate; unlocks index.html for the session)
└── README.md
```

`index.html` is a single-file build: the five stylesheets, six data modules and four
logic modules are inlined (see the marked `/* ==== … ==== */` sections inside the file).
Everything is dependency-free — no server, no build step, no network access required.

## Routes

`#/home` · `#/companies` · `#/companies/<slug>` · `#/ecosystem` · `#/ranking` · `#/supply-chain` · `#/themes`

## Updating content

All data now lives in the inlined `data/…` sections of `index.html` (each begins with a
`/* ==== data/… ==== */` marker). Edit the relevant section — no code changes needed.
To add a full company profile, add an entry with a `profile` block to the `companies.js`
section. The site must remain offline-capable and dependency-free.

## Source files

The six Markdown files this dashboard is built from live in `../` (the parent directory):

1. `US-AI-Industry-Map-Aug-2026.md`
2. `US-AI-Industry-Research-DB-Aug-2026.md`
3. `US-AI-Industry-Ranking-Aug-2026.md`
4. `US-AI-Supply-Chain-Map-Aug-2026.md`
5. `US-AI-Value-Capture-Analysis-Aug-2026.md`
6. `US-AI-Top20-Investment-Profiles-Aug-2026.md`

*For research reference only — not investment advice.*
