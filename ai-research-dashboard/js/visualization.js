/* ============================================================
   Visualization — dependency-free SVG
   Exposed: VIZ.drawValueChain, drawChainDiagram, drawEcosystem,
            drawWaterfall, drawRadar
   ============================================================ */
"use strict";

const VIZ = (() => {
  const NS = "http://www.w3.org/2000/svg";
  /* theme-aware colors — read the CSS tokens at draw time so charts
     follow the pitchbook (light) / terminal (dark) switch */
  function v(token, fallback) {
    const s = getComputedStyle(document.documentElement).getPropertyValue(token).trim();
    return s || fallback;
  }
  const C = () => ({
    muted: v("--muted", "#8A93A6"),
    faint: v("--faint", "#5B6474"),
    text: v("--text", "#E6E9EF"),
    panel: v("--panel", "#111722"),
    border: v("--border", "#1F2937"),
    borderSoft: v("--border-soft", "#182130"),
    accent: v("--accent", "#D4A94E"),
    accentDim: v("--accent-dim", "rgba(212,169,78,.14)"),
    warn: v("--warn", "#E8A33D"),
    tier1: v("--tier-1", "#D4A94E")
  });
  const ARROW = () => '<marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="' + C().muted + '"/></marker>';

  function el(tag, attrs, parent) {
    const n = document.createElementNS(NS, tag);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }

  function tooltip(text, x, y, host) {
    let tip = host.querySelector(".viz-tip");
    if (!tip) { tip = document.createElement("div"); tip.className = "viz-tip"; host.appendChild(tip); }
    tip.innerHTML = text;
    tip.style.left = x + "px";
    tip.style.top = (y - 8) + "px";
    tip.style.display = "block";
    return tip;
  }
  function hideTooltip(host) {
    const tip = host.querySelector(".viz-tip");
    if (tip) tip.style.display = "none";
  }

  /* ---- Home: 6-node value chain flow (top-to-bottom) ---- */
  function drawValueChain(host, nodes) {
    const W = 560, H = nodes.length * 78 + 20;
    host.innerHTML = '<svg class="chart chain-flow" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="AI industry value chain">' + ARROW() + "</svg>";
    const svg = host.querySelector("svg");
    const x = 90, w = W - 180, h = 52;
    nodes.forEach((n, i) => {
      const y = 20 + i * 78;
      el("rect", { x, y, width: w, height: h, class: "node-box" + (n.hl ? " hl" : "") }, svg);
      el("text", { x: x + w / 2, y: y + h / 2 - 1, class: "node-text" }, svg).textContent = n.label;
      if (n.sub) el("text", { x: x + w / 2, y: y + h - 8, class: "node-sub" }, svg).textContent = n.sub;
      if (i < nodes.length - 1) el("line", { x1: x + w / 2, y1: y + h, x2: x + w / 2, y2: y + 78, class: "edge-arrow" }, svg);
    });
  }

  /* ---- Supply chain: 9-layer vertical diagram with click-through ---- */
  function drawChainDiagram(host, layers, onSelect) {
    const W = 640, h = 40, gap = 14;
    const H = layers.length * (h + gap) + 20;
    host.innerHTML = '<svg class="chart chain-flow" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="AI supply chain, 9 layers">' + ARROW() + "</svg>";
    const svg = host.querySelector("svg");
    const x = 20, w = W - 40;
    layers.forEach((L, i) => {
      const y = 10 + i * (h + gap);
      const g = el("g", { class: "chain-node" }, svg);
      el("rect", { x, y, width: w, height: h, class: "node-box", rx: 6 }, g);
      el("text", { x: x + 14, y: y + h / 2 + 4, class: "node-text", "font-size": "12px" }, g).textContent = "L" + L.id + " · " + L.name;
      el("text", { x: x + w - 14, y: y + h / 2 + 4, class: "node-sub", "text-anchor": "end" }, g).textContent = L.sub;
      g.style.cursor = "pointer";
      g.addEventListener("click", () => onSelect(L));
      g.addEventListener("mouseenter", () => { g.querySelector("rect").setAttribute("class", "node-box hl"); });
      g.addEventListener("mouseleave", () => { g.querySelector("rect").setAttribute("class", "node-box"); });
      if (i < layers.length - 1) el("line", { x1: x + w / 2, y1: y + h, x2: x + w / 2, y2: y + h + gap, class: "edge-arrow" }, svg);
    });
  }

  /* ---- Ecosystem graph: layered nodes + typed edges ---- */
  function drawEcosystem(host, ec, onNodeClick) {
    const W = 980, H = 700;
    const layerY = { 1: H - 90, 2: H - 250, 3: H - 420, 4: 40 };
    const layerNames = { 1: "PHYSICAL INFRASTRUCTURE", 2: "CLOUD / COMPUTE", 3: "PLATFORM (MODELS)", 4: "APPLICATIONS" };
    host.innerHTML = '<svg class="chart ecosystem-graph" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="AI ecosystem relationships among the top 20 companies">' + ARROW() + "</svg>";
    const svg = host.querySelector("svg");

    // layer bands + labels
    [1, 2, 3, 4].forEach(l => {
      el("line", { x1: 10, y1: layerY[l], x2: W - 10, y2: layerY[l], stroke: C().borderSoft, "stroke-width": 1 }, svg);
      el("text", { x: 14, y: layerY[l] - 8, class: "label-faint", "font-size": "9px", "letter-spacing": "1.5px" }, svg).textContent = layerNames[l];
    });

    // layout: x positions per node within its layer
    const byLayer = {};
    ec.nodes.forEach(n => { (byLayer[n.layer] = byLayer[n.layer] || []).push(n); });
    Object.keys(byLayer).forEach(l => {
      const arr = byLayer[l];
      arr.forEach((n, i) => {
        n.x = (W - 120) * (arr.length === 1 ? 0.5 : i / (arr.length - 1)) + 60;
        n.y = layerY[l] + 42;
      });
    });

    // edges
    ec.edges.forEach(e => {
      const a = ec.nodes.find(n => n.id === e.from), b = ec.nodes.find(n => n.id === e.to);
      if (!a || !b) return;
      const t = ec.edgeTypes[e.type] || { color: C().muted, dash: null };
      const line = el("line", {
        x1: a.x, y1: a.y + 14, x2: b.x, y2: b.y - 14,
        stroke: t.color, "stroke-width": 1.3, "stroke-dasharray": t.dash || "",
        class: "edge"
      }, svg);
      const label = el("text", { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 - 4, class: "edge-label", "text-anchor": "middle" }, svg);
      label.textContent = e.label;
      line.addEventListener("mouseenter", (ev) => {
        tooltip("<b>" + a.label + " → " + b.label + "</b>" + t.label + "<br><span class='tt-sub'>" + e.label + "</span>", ev.clientX - host.getBoundingClientRect().left, ev.clientY - host.getBoundingClientRect().top, host);
      });
      line.addEventListener("mouseleave", () => hideTooltip(host));
    });

    // nodes
    ec.nodes.forEach(n => {
      const col = window.AIDATA.categoryColor[n.category] || C().muted;
      const w = Math.max(96, n.label.length * 6.4 + 18), h = 30;
      const g = el("g", { class: "node", transform: "translate(" + (n.x - w / 2) + "," + n.y + ")" }, svg);
      el("rect", { width: w, height: h, fill: C().panel, stroke: col, "stroke-width": 1.4 }, g);
      el("text", { x: w / 2, y: 18, "text-anchor": "middle" }, g).textContent = n.label;
      g.style.cursor = "pointer";
      g.addEventListener("mouseenter", (ev) => {
        tooltip("<b>" + n.label + "</b><span class='tt-sub'>" + n.sub + "</span><br>" + n.note, ev.clientX - host.getBoundingClientRect().left, ev.clientY - host.getBoundingClientRect().top, host);
      });
      g.addEventListener("mouseleave", () => hideTooltip(host));
      g.addEventListener("click", () => onNodeClick(n.id));
    });
  }

  /* ---- Ecosystem graph v2: full universe (67) with zoom/pan/search ---- */
  function drawEcosystemAll(host, opts) {
    const W = 1200, H = 860;
    const view = host._ecoView || (host._ecoView = { scale: 1, tx: 0, ty: 0 });
    host.innerHTML =
      '<div class="eco-toolbar">' +
        '<input type="text" class="search-mini eco-search" placeholder="Find company (name or ticker)…">' +
        '<button class="btn" data-eco="in" title="Zoom in">+</button>' +
        '<button class="btn" data-eco="out" title="Zoom out">−</button>' +
        '<button class="btn" data-eco="reset" title="Reset view">Reset</button>' +
        '<label class="eco-toggle"><input type="checkbox" data-eco="universe"' + (opts.universe ? " checked" : "") + "> All 67 companies</label>" +
        '<span class="eco-hint">scroll to zoom · drag to pan · click a node</span>' +
      "</div>" +
      '<div class="eco-canvas"><svg class="chart ecosystem-graph" viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="AI ecosystem relationships — full research universe">' + ARROW() + '<g class="vp"></g></svg></div>';
    const svg = host.querySelector("svg");
    const vp = svg.querySelector(".vp");
    const apply = () => vp.setAttribute("transform", "translate(" + view.tx + "," + view.ty + ") scale(" + view.scale + ")");

    const comps = opts.universe
      ? opts.companies
      : opts.companies.filter(c => opts.top20.includes(c.slug));

    /* layout: rows by DB layer (1 bottom → 4 top), x by segment groups */
    const layerY = { 1: 700, 2: 520, 3: 340, 4: 160 };
    const segOrder = ["Infrastructure", "Compute", "Memory", "Networking", "Cloud", "Models", "Applications"];
    const byLayer = {};
    comps.forEach(c => { (byLayer[c.layer] = byLayer[c.layer] || []).push(c); });
    [1, 2, 3, 4].forEach(l => {
      const arr = byLayer[l] || [];
      const segs = {};
      arr.forEach(c => { (segs[c.segment] = segs[c.segment] || []).push(c); });
      const keys = Object.keys(segs).sort((a, b) => segOrder.indexOf(a) - segOrder.indexOf(b));
      const slot = (W - 80) / Math.max(arr.length, 1);
      let i = 0;
      keys.forEach(k => segs[k].forEach(c => { c._x = 40 + (i + 0.5) * slot; c._y = layerY[l] + 30; i++; }));
    });

    /* selection state */
    const sel = opts.selected;
    const selComp = sel ? comps.find(c => c.slug === sel) : null;
    const connected = new Set();
    if (selComp) {
      connected.add(sel);
      opts.explicitEdges.forEach(e => { if (e.from === sel) connected.add(e.to); if (e.to === sel) connected.add(e.from); });
      opts.competitorEdges.forEach(e => { if (e.from === sel) connected.add(e.to); if (e.to === sel) connected.add(e.from); });
      comps.forEach(c => { if (c.segment === selComp.segment) connected.add(c.slug); });
    }
    const dim = c => sel && !connected.has(c.slug);

    /* layer band labels */
    [1, 2, 3, 4].forEach(l => {
      el("text", { x: 14, y: layerY[l] - 4, class: "label-faint", "font-size": "9px", "letter-spacing": "2px" }, vp)
        .textContent = "LAYER " + l + " · " + ({ 1: "INFRASTRUCTURE", 2: "PLATFORM", 3: "AI CLOUD", 4: "APPLICATIONS" }[l]);
    });

    /* competitor edges (derived from the competitors field in the source DB) */
    if (opts.universe) {
      opts.competitorEdges.forEach(e => {
        const a = comps.find(c => c.slug === e.from), b = comps.find(c => c.slug === e.to);
        if (!a || !b) return;
        const adj = sel && (e.from === sel || e.to === sel);
        el("line", { x1: a._x, y1: a._y + 11, x2: b._x, y2: b._y + 11, stroke: adj ? C().warn : C().borderSoft, "stroke-width": adj ? 1.3 : 0.7, "stroke-dasharray": "3 3" }, vp);
      });
    }

    /* explicit typed edges (Top-20 relationship table) */
    opts.explicitEdges.forEach(e => {
      const a = comps.find(c => c.slug === e.from), b = comps.find(c => c.slug === e.to);
      if (!a || !b) return;
      const t = opts.edgeTypes[e.type] || { color: C().muted, dash: null };
      const adj = sel && (e.from === sel || e.to === sel);
      el("line", {
        x1: a._x, y1: a._y + 11, x2: b._x, y2: b._y + 11,
        stroke: t.color, "stroke-width": adj ? 2 : 1.1, "stroke-dasharray": t.dash || "",
        opacity: sel && !adj ? 0.2 : 1
      }, vp);
      if (adj) el("text", { x: (a._x + b._x) / 2, y: (a._y + b._y) / 2 - 6, class: "edge-label", "text-anchor": "middle", fill: t.color }, vp).textContent = e.label;
    });

    /* nodes */
    comps.forEach(c => {
      const col = opts.categoryColor[c.category] || C().muted;
      const w = 98, h = 22;
      const g = el("g", { class: "node", transform: "translate(" + (c._x - w / 2) + "," + c._y + ")", opacity: dim(c) ? 0.2 : 1 }, vp);
      const hl = connected.has(c.slug);
      el("rect", {
        width: w, height: h,
        fill: sel === c.slug ? C().accentDim : C().panel,
        stroke: sel === c.slug ? C().accent : hl && sel ? col : (c.tier === 1 ? C().tier1 : C().border),
        "stroke-width": sel === c.slug ? 2 : c.tier === 1 ? 1.4 : 1
      }, g);
      el("text", {
        x: w / 2, y: 14.5, "text-anchor": "middle", "font-size": 10.5,
        "font-weight": c.tier === 1 ? 700 : 500,
        fill: dim(c) ? C().faint : C().text
      }, g).textContent = c.ticker || c.name;
      g.setAttribute("title", c.name);
      g.style.cursor = "pointer";
      g.addEventListener("click", ev => { ev.stopPropagation(); opts.onSelect(c.slug); });
    });

    /* canvas click clears selection */
    svg.addEventListener("click", () => opts.onSelect(null));

    /* zoom (wheel) + pan (drag) — dependency-free */
    svg.addEventListener("wheel", ev => {
      ev.preventDefault();
      view.scale = Math.min(3.5, Math.max(0.25, view.scale * (ev.deltaY < 0 ? 1.12 : 0.89)));
      apply();
    }, { passive: false });
    let drag = null;
    svg.addEventListener("pointerdown", ev => { drag = { x: ev.clientX, y: ev.clientY, tx: view.tx, ty: view.ty }; });
    svg.addEventListener("pointermove", ev => { if (drag) { view.tx = drag.tx + (ev.clientX - drag.x); view.ty = drag.ty + (ev.clientY - drag.y); apply(); } });
    svg.addEventListener("pointerup", () => { drag = null; });
    svg.addEventListener("pointerleave", () => { drag = null; });

    /* toolbar */
    host.querySelector('[data-eco="in"]').addEventListener("click", () => { view.scale = Math.min(3.5, view.scale * 1.25); apply(); });
    host.querySelector('[data-eco="out"]').addEventListener("click", () => { view.scale = Math.max(0.25, view.scale * 0.8); apply(); });
    host.querySelector('[data-eco="reset"]').addEventListener("click", () => { view.scale = 1; view.tx = 0; view.ty = 0; apply(); });
    host.querySelector('[data-eco="universe"]').addEventListener("change", ev => opts.onUniverse(ev.target.checked));

    /* search → center + select */
    const sq = host.querySelector(".eco-search");
    sq.addEventListener("input", () => {
      const q = sq.value.trim().toLowerCase();
      if (!q) return;
      const hit = comps.find(c => c.name.toLowerCase().includes(q) || (c.ticker || "").toLowerCase() === q);
      if (hit) {
        view.scale = Math.max(view.scale, 1.8);
        view.tx = W / 2 - hit._x * view.scale;
        view.ty = H / 2 - (hit._y + 11) * view.scale;
        apply();
        opts.onSelect(hit.slug);
      }
    });

    apply();
  }

  /* ---- Waterfall: $1 of AI spending ---- */
  function drawWaterfall(host, rows) {
    const W = 720, H = 300, padL = 220, padR = 30, padT = 20, padB = 40;
    const barW = (W - padL - padR - 20) / rows.length;
    host.innerHTML = '<svg class="chart" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Share of each dollar of AI infrastructure spend">' + ARROW() + "</svg>";
    const svg = host.querySelector("svg");
    const max = 0.32;
    rows.forEach((r, i) => {
      const val = parseFloat(r.share.replace(/[~$]/g, ""));
      const x = padL + i * barW + 4;
      const bh = (val / max) * (H - padT - padB);
      const y = H - padB - bh;
      const cls = r.neg ? "wf-bar wf-bar--neg" : "wf-bar" + (r.dim ? " wf-bar--dim" : "");
      const rect = el("rect", { x, y, width: barW - 8, height: bh, class: cls }, svg);
      el("text", { x: x + (barW - 8) / 2, y: y - 4, class: "wf-label", "text-anchor": "middle" }, svg).textContent = r.share;
      el("text", { x: padL - 8, y: H - padB + 14, class: "wf-label", "text-anchor": "end" }, svg).textContent = r.label;
      rect.addEventListener("mouseenter", (ev) => {
        tooltip("<b>" + r.label + "</b>" + r.share + " of each $1<br><span class='tt-sub'>" + r.profit + "</span>", ev.clientX - host.getBoundingClientRect().left, ev.clientY - host.getBoundingClientRect().top, host);
      });
      rect.addEventListener("mouseleave", () => hideTooltip(host));
    });
    el("text", { x: padL, y: 16, class: "label-faint" }, svg).textContent = "Share of each $1.00 of AI infrastructure spend → profit captured";
  }

  /* ---- Radar: 5-dimension comparison ---- */
  function drawRadar(host, items, dims) {
    const S = 260, cx = S / 2, cy = S / 2 + 6, R = 92;
    host.innerHTML = '<svg class="chart" viewBox="0 0 ' + S + ' ' + S + '" role="img" aria-label="Company score radar">' + ARROW() + "</svg>";
    const svg = host.querySelector("svg");
    const n = dims.length;
    const ang = i => (Math.PI * 2 * i) / n - Math.PI / 2;
    const px = (r, i) => cx + r * Math.cos(ang(i));
    const py = (r, i) => cy + r * Math.sin(ang(i));
    // grid
    [0.25, 0.5, 0.75, 1].forEach(f => {
      const pts = dims.map((_, i) => px(R * f, i) + "," + py(R * f, i)).join(" ");
      el("polygon", { points: pts, class: "radar-grid" }, svg);
    });
    dims.forEach((_, i) => el("line", { x1: cx, y1: cy, x2: px(R, i), y2: py(R, i), class: "radar-grid" }, svg));
    dims.forEach((d, i) => {
      el("text", { x: px(R + 18, i), y: py(R + 18, i) + 3, class: "radar-axis", "text-anchor": "middle" }, svg).textContent = d;
    });
    const colors = ["#4DA3FF", "#D4A94E", "#34C77B", "#E5484D"];
    items.forEach((it, idx) => {
      const col = colors[idx % colors.length];
      const pts = dims.map((d, i) => {
        const v = (it.scores[d] / 5) * R;
        return px(v, i) + "," + py(v, i);
      }).join(" ");
      el("polygon", { points: pts, fill: col, stroke: col, class: "radar-area" }, svg);
      dims.forEach((d, i) => {
        const v = (it.scores[d] / 5) * R;
        el("circle", { cx: px(v, i), cy: py(v, i), fill: col, class: "radar-dot" }, svg);
      });
      el("text", { x: 8, y: 14 + idx * 14, fill: col, "font-size": "11px", "font-weight": "600" }, svg).textContent = it.name;
    });
  }

  return { drawValueChain, drawChainDiagram, drawEcosystem, drawEcosystemAll, drawWaterfall, drawRadar };
})();
window.VIZ = VIZ;
