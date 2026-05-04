/* ═══════════════════════════════════════════════════════════════
   ORG MODEL — Mô hình doanh nghiệp tinh gọn Human × Agent Teams
   Dữ liệu + Render SVG 2D có pan/zoom
═══════════════════════════════════════════════════════════════ */

const ORG_DATA = {
  meta: {
    title: 'Mô hình Doanh nghiệp Tinh gọn',
    subtitle: 'Human × Agent Teams',
    pitch:
      'Mô hình 5 tầng mô tả cách một doanh nghiệp tinh gọn vận hành ' +
      'với sự cộng sinh giữa con người và đội ngũ AI Agent. Mỗi đơn vị ' +
      'là một "squad lai" gọn nhẹ, tự trị, được khuếch đại bởi các agent chuyên biệt ' +
      'và đứng trên một nền tảng tri thức – dữ liệu – quản trị thống nhất.'
  },

  layers: [
    {
      id: 'strategy',
      label: 'Chiến lược & Tầm nhìn',
      en: 'Strategy & Vision',
      role: 'Con người dẫn dắt — định hướng dài hạn'
    },
    {
      id: 'orchestration',
      label: 'Điều phối',
      en: 'Orchestration · Human × Co-pilot',
      role: 'Người chỉ huy, AI là co-pilot — đồng bộ và ưu tiên'
    },
    {
      id: 'execution',
      label: 'Vận hành lai',
      en: 'Hybrid Squads · Human × Agent Teams',
      role: 'Mỗi squad là 1 đơn vị end-to-end gồm người + agent'
    },
    {
      id: 'agents',
      label: 'Đội ngũ Agent chuyên biệt',
      en: 'Specialized Agent Fleet',
      role: 'AI agents tái sử dụng xuyên squad — khuếch đại năng lực'
    },
    {
      id: 'foundation',
      label: 'Nền tảng',
      en: 'Knowledge · Data · Governance',
      role: 'Lớp nền: tri thức, dữ liệu, hành lang an toàn'
    }
  ],

  nodes: [
    // ── L1: STRATEGY ──────────────────────────────
    {
      id: 'ceo', layer: 'strategy', type: 'human',
      icon: '👤', label: 'CEO / Founder',
      desc: 'Sở hữu tầm nhìn, OKR công ty, ra quyết định chiến lược, phân bổ vốn.',
      members: ['1 Founder']
    },
    {
      id: 'council', layer: 'strategy', type: 'human',
      icon: '🎯', label: 'Hội đồng Chiến lược',
      desc: 'Cố vấn, định hướng thị trường, đánh giá rủi ro & ưu tiên đầu tư.',
      members: ['Advisors', 'Domain Experts']
    },

    // ── L2: ORCHESTRATION ────────────────────────
    {
      id: 'cos', layer: 'orchestration', type: 'hybrid',
      icon: '🧭', label: 'Chief of Staff',
      desc: 'Điều phối ngang giữa các squad, biến chiến lược thành ưu tiên tuần/quý.',
      members: ['1 Human Lead', 'Co-pilot AI']
    },
    {
      id: 'po', layer: 'orchestration', type: 'hybrid',
      icon: '📋', label: 'Product Owner',
      desc: 'Sở hữu lộ trình sản phẩm, ưu tiên backlog với phân tích AI.',
      members: ['1 PO', 'Discovery Co-pilot']
    },
    {
      id: 'ops-lead', layer: 'orchestration', type: 'hybrid',
      icon: '⚙️', label: 'Operations Lead',
      desc: 'Giám sát quy trình, hiệu suất Human × Agent, SLA & chi phí.',
      members: ['1 Ops Lead', 'Ops Co-pilot']
    },

    // ── L3: HYBRID SQUADS ────────────────────────
    {
      id: 'sales', layer: 'execution', type: 'hybrid',
      icon: '💼', label: 'Sales Squad',
      desc: 'Tìm – nuôi – chốt khách hàng. Human chốt deal, Agent xử lý phần lặp.',
      members: ['2 AE', '1 SDR', 'Lead Qualifier Agent', 'Email Agent', 'CRM Agent']
    },
    {
      id: 'marketing', layer: 'execution', type: 'hybrid',
      icon: '📣', label: 'Marketing Squad',
      desc: 'Brand, content, growth. 1 marketer điều phối "đội agent nội dung".',
      members: ['1 Marketing Lead', 'Content Agent', 'SEO Agent', 'Ads Agent', 'Analytics Agent']
    },
    {
      id: 'product', layer: 'execution', type: 'hybrid',
      icon: '🛠️', label: 'Engineering Squad',
      desc: 'Xây sản phẩm. Engineer thiết kế – review, Agent code/test/document.',
      members: ['3 Engineers', 'Code Agent', 'QA Agent', 'Doc Agent']
    },
    {
      id: 'cs', layer: 'execution', type: 'hybrid',
      icon: '💬', label: 'Customer Success',
      desc: 'Onboarding, hỗ trợ, giữ khách. Agent trả lời L1, người xử lý L2/L3.',
      members: ['1 CSM', 'Support Agent', 'Onboarding Agent', 'Insight Agent']
    },
    {
      id: 'finops', layer: 'execution', type: 'hybrid',
      icon: '💰', label: 'Finance & Ops',
      desc: 'Sổ sách, dòng tiền, tuân thủ, mua sắm. Agent xử lý số liệu lặp.',
      members: ['1 Finance', 'Bookkeeping Agent', 'Compliance Agent', 'Procurement Agent']
    },

    // ── L4: AGENT FLEET ──────────────────────────
    { id: 'research', layer: 'agents', type: 'agent', icon: '🔍', label: 'Research Agent',
      desc: 'Tổng hợp thông tin thị trường, đối thủ, khách hàng tiềm năng.' },
    { id: 'content',  layer: 'agents', type: 'agent', icon: '✍️', label: 'Content Agent',
      desc: 'Sản xuất bài viết, email, mô tả sản phẩm, social post.' },
    { id: 'code',     layer: 'agents', type: 'agent', icon: '💻', label: 'Code Agent',
      desc: 'Sinh code, refactor, sửa bug, review pull request.' },
    { id: 'data',     layer: 'agents', type: 'agent', icon: '📊', label: 'Data Agent',
      desc: 'Truy vấn dữ liệu, dựng báo cáo, phát hiện bất thường.' },
    { id: 'support',  layer: 'agents', type: 'agent', icon: '🤝', label: 'Support Agent',
      desc: 'Trả lời khách hàng tier-1, định tuyến ticket, gợi ý giải pháp.' },
    { id: 'qa',       layer: 'agents', type: 'agent', icon: '🧪', label: 'QA Agent',
      desc: 'Sinh test case, kiểm thử hồi quy, kiểm tra chất lượng đầu ra.' },

    // ── L5: FOUNDATION ───────────────────────────
    { id: 'kb',         layer: 'foundation', type: 'foundation', icon: '📚', label: 'Knowledge Base',
      desc: 'Wiki, tài liệu nội bộ, FAQ — nguồn tri thức chung mọi agent đều truy cập.' },
    { id: 'sop',        layer: 'foundation', type: 'foundation', icon: '📝', label: 'SOP & Playbooks',
      desc: 'Quy trình chuẩn, runbook, kịch bản xử lý — định hình hành vi agent.' },
    { id: 'data-lake',  layer: 'foundation', type: 'foundation', icon: '🗄️', label: 'Data Lake',
      desc: 'Kho dữ liệu thống nhất: CRM, sản phẩm, tài chính, hành vi người dùng.' },
    { id: 'governance', layer: 'foundation', type: 'foundation', icon: '🛡️', label: 'AI Guardrails',
      desc: 'Chính sách, kiểm soát truy cập, audit log, ranh giới đạo đức của agent.' }
  ],

  edges: [
    // Strategy → Orchestration
    ['ceo', 'cos'], ['ceo', 'po'], ['ceo', 'ops-lead'],
    ['council', 'cos'], ['council', 'po'],

    // Orchestration → Execution
    ['cos', 'sales'], ['cos', 'marketing'], ['cos', 'product'],
    ['cos', 'cs'], ['cos', 'finops'],
    ['po', 'product'], ['po', 'marketing'],
    ['ops-lead', 'sales'], ['ops-lead', 'cs'], ['ops-lead', 'finops'],

    // Execution → Agents
    ['sales', 'research'], ['sales', 'content'], ['sales', 'data'],
    ['marketing', 'content'], ['marketing', 'research'], ['marketing', 'data'],
    ['product', 'code'], ['product', 'qa'], ['product', 'data'],
    ['cs', 'support'], ['cs', 'content'],
    ['finops', 'data'], ['finops', 'qa'],

    // Agents → Foundation
    ['research', 'kb'], ['content', 'kb'],
    ['code', 'sop'], ['qa', 'sop'],
    ['data', 'data-lake'], ['support', 'sop'],

    // Foundation cross-link (governance áp dụng cho mọi agent)
    ['governance', 'research'], ['governance', 'content'],
    ['governance', 'code'], ['governance', 'data'],
    ['governance', 'support'], ['governance', 'qa']
  ]
};

/* ═══════════════════════════════════════════════════════════════
   LAYOUT
═══════════════════════════════════════════════════════════════ */

const LAYOUT = {
  width: 1600,
  height: 1080,
  layerHeight: 200,
  marginTop: 70,
  marginX: 60,
  nodeW: 168,
  nodeH: 86
};

function computePositions() {
  const byLayer = {};
  ORG_DATA.nodes.forEach(n => { (byLayer[n.layer] ||= []).push(n); });

  ORG_DATA.layers.forEach((layer, layerIdx) => {
    const list = byLayer[layer.id] || [];
    const usable = LAYOUT.width - LAYOUT.marginX * 2;
    const step = usable / list.length;
    list.forEach((n, i) => {
      n._cx = LAYOUT.marginX + step * (i + 0.5);
      n._cy = LAYOUT.marginTop + layerIdx * LAYOUT.layerHeight + LAYOUT.nodeH / 2 + 40;
      n._x = n._cx - LAYOUT.nodeW / 2;
      n._y = n._cy - LAYOUT.nodeH / 2;
    });
    layer._y = LAYOUT.marginTop + layerIdx * LAYOUT.layerHeight;
  });
}

/* ═══════════════════════════════════════════════════════════════
   RENDER
═══════════════════════════════════════════════════════════════ */

const TYPE_STYLE = {
  human:      { fill: 'rgba(79,142,247,0.18)',  stroke: '#4F8EF7', glow: 'rgba(79,142,247,0.35)',  pill: 'Human' },
  hybrid:     { fill: 'url(#gradHybrid)',       stroke: '#9d69ff', glow: 'rgba(124,58,237,0.35)',  pill: 'Hybrid' },
  agent:      { fill: 'rgba(124,58,237,0.18)',  stroke: '#9d69ff', glow: 'rgba(124,58,237,0.35)',  pill: 'Agent' },
  foundation: { fill: 'rgba(16,185,129,0.18)',  stroke: '#10b981', glow: 'rgba(16,185,129,0.30)',  pill: 'Foundation' }
};

function renderSVG() {
  computePositions();
  const svgEl = document.getElementById('orgSvg');
  svgEl.setAttribute('viewBox', `0 0 ${LAYOUT.width} ${LAYOUT.height}`);

  const defs = `
    <defs>
      <linearGradient id="gradHybrid" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%"  stop-color="rgba(79,142,247,0.28)"/>
        <stop offset="100%" stop-color="rgba(124,58,237,0.28)"/>
      </linearGradient>
      <linearGradient id="gradLayer" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%"   stop-color="rgba(79,142,247,0.04)"/>
        <stop offset="50%"  stop-color="rgba(79,142,247,0.10)"/>
        <stop offset="100%" stop-color="rgba(124,58,237,0.04)"/>
      </linearGradient>
      <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
  `;

  // Layer bands
  const bands = ORG_DATA.layers.map((layer, i) => {
    const y = layer._y - 8;
    const h = LAYOUT.layerHeight - 12;
    return `
      <g class="layer-band" data-layer="${layer.id}">
        <rect x="20" y="${y}" width="${LAYOUT.width - 40}" height="${h}"
          fill="url(#gradLayer)" stroke="rgba(79,142,247,0.10)" stroke-dasharray="3 6"
          rx="18" ry="18"/>
        <text x="40" y="${y + 26}" class="layer-label">
          <tspan class="layer-num">L${i + 1}</tspan>
          <tspan dx="10">${layer.label}</tspan>
          <tspan dx="10" class="layer-en">· ${layer.en}</tspan>
        </text>
        <text x="40" y="${y + 46}" class="layer-role">${layer.role}</text>
      </g>
    `;
  }).join('');

  // Edges
  const edges = ORG_DATA.edges.map(([a, b]) => {
    const na = ORG_DATA.nodes.find(n => n.id === a);
    const nb = ORG_DATA.nodes.find(n => n.id === b);
    if (!na || !nb) return '';
    const x1 = na._cx, y1 = na._cy + (nb._cy > na._cy ? LAYOUT.nodeH / 2 : -LAYOUT.nodeH / 2);
    const x2 = nb._cx, y2 = nb._cy + (na._cy > nb._cy ? LAYOUT.nodeH / 2 : -LAYOUT.nodeH / 2);
    const midY = (y1 + y2) / 2;
    return `<path class="edge" data-from="${a}" data-to="${b}"
      d="M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}"
      fill="none" stroke="rgba(139,163,199,0.25)" stroke-width="1.4"/>`;
  }).join('');

  // Nodes
  const nodes = ORG_DATA.nodes.map(n => {
    const s = TYPE_STYLE[n.type];
    return `
      <g class="node" data-id="${n.id}" data-type="${n.type}"
         transform="translate(${n._x}, ${n._y})">
        <rect class="node-glow" x="-2" y="-2" width="${LAYOUT.nodeW + 4}" height="${LAYOUT.nodeH + 4}"
          rx="14" ry="14" fill="${s.glow}" filter="url(#softGlow)" opacity="0"/>
        <rect class="node-bg" width="${LAYOUT.nodeW}" height="${LAYOUT.nodeH}"
          rx="12" ry="12" fill="${s.fill}" stroke="${s.stroke}" stroke-width="1.2"/>
        <text class="node-icon" x="18" y="34" font-size="22">${n.icon}</text>
        <text class="node-title" x="48" y="32">${n.label}</text>
        <text class="node-pill" x="48" y="54">${s.pill.toUpperCase()}</text>
        <text class="node-sub" x="14" y="74">${(n.members || []).slice(0, 2).join(' · ')}</text>
      </g>
    `;
  }).join('');

  svgEl.innerHTML = defs + `
    <g id="viewport">
      ${bands}
      <g class="edges">${edges}</g>
      <g class="nodes">${nodes}</g>
    </g>
  `;

  attachNodeEvents();
}

/* ═══════════════════════════════════════════════════════════════
   INTERACTION — Pan, Zoom, Click
═══════════════════════════════════════════════════════════════ */

const view = { scale: 1, tx: 0, ty: 0, dragging: false, lastX: 0, lastY: 0 };

function applyTransform() {
  const vp = document.getElementById('viewport');
  if (vp) vp.setAttribute('transform', `translate(${view.tx} ${view.ty}) scale(${view.scale})`);
  const el = document.getElementById('zoomLevel');
  if (el) el.textContent = `${Math.round(view.scale * 100)}%`;
}

function setupPanZoom() {
  const svg = document.getElementById('orgSvg');

  svg.addEventListener('wheel', e => {
    e.preventDefault();
    const rect = svg.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width * LAYOUT.width;
    const py = (e.clientY - rect.top) / rect.height * LAYOUT.height;
    const delta = e.deltaY < 0 ? 1.1 : 1 / 1.1;
    const newScale = Math.max(0.3, Math.min(2.5, view.scale * delta));
    view.tx = px - (px - view.tx) * (newScale / view.scale);
    view.ty = py - (py - view.ty) * (newScale / view.scale);
    view.scale = newScale;
    applyTransform();
  }, { passive: false });

  svg.addEventListener('mousedown', e => {
    if (e.target.closest('.node')) return;
    view.dragging = true;
    view.lastX = e.clientX; view.lastY = e.clientY;
    svg.style.cursor = 'grabbing';
  });
  window.addEventListener('mousemove', e => {
    if (!view.dragging) return;
    const rect = svg.getBoundingClientRect();
    const sx = LAYOUT.width / rect.width;
    const sy = LAYOUT.height / rect.height;
    view.tx += (e.clientX - view.lastX) * sx;
    view.ty += (e.clientY - view.lastY) * sy;
    view.lastX = e.clientX; view.lastY = e.clientY;
    applyTransform();
  });
  window.addEventListener('mouseup', () => {
    view.dragging = false;
    svg.style.cursor = 'grab';
  });

  // Touch (basic single-finger pan)
  svg.addEventListener('touchstart', e => {
    if (e.touches.length !== 1) return;
    if (e.target.closest('.node')) return;
    view.dragging = true;
    view.lastX = e.touches[0].clientX;
    view.lastY = e.touches[0].clientY;
  }, { passive: true });
  svg.addEventListener('touchmove', e => {
    if (!view.dragging || e.touches.length !== 1) return;
    const rect = svg.getBoundingClientRect();
    view.tx += (e.touches[0].clientX - view.lastX) * (LAYOUT.width / rect.width);
    view.ty += (e.touches[0].clientY - view.lastY) * (LAYOUT.height / rect.height);
    view.lastX = e.touches[0].clientX;
    view.lastY = e.touches[0].clientY;
    applyTransform();
  }, { passive: true });
  svg.addEventListener('touchend', () => { view.dragging = false; });
}

function zoom(factor) {
  view.scale = Math.max(0.3, Math.min(2.5, view.scale * factor));
  applyTransform();
}
function resetView() {
  view.scale = 1; view.tx = 0; view.ty = 0;
  applyTransform();
}
function fitToScreen() {
  const svg = document.getElementById('orgSvg');
  const rect = svg.getBoundingClientRect();
  const sx = rect.width  / LAYOUT.width;
  const sy = rect.height / LAYOUT.height;
  view.scale = Math.min(sx, sy) * 0.95;
  view.tx = (LAYOUT.width  - LAYOUT.width  * view.scale) / 2;
  view.ty = (LAYOUT.height - LAYOUT.height * view.scale) / 2;
  applyTransform();
}

/* ═══════════════════════════════════════════════════════════════
   NODE INTERACTION
═══════════════════════════════════════════════════════════════ */

function attachNodeEvents() {
  document.querySelectorAll('.node').forEach(g => {
    g.addEventListener('mouseenter', () => highlightConnections(g.dataset.id, true));
    g.addEventListener('mouseleave', () => highlightConnections(g.dataset.id, false));
    g.addEventListener('click', () => openDetail(g.dataset.id));
  });
}

function highlightConnections(id, on) {
  const related = new Set([id]);
  ORG_DATA.edges.forEach(([a, b]) => {
    if (a === id) related.add(b);
    if (b === id) related.add(a);
  });
  document.querySelectorAll('.node').forEach(g => {
    g.classList.toggle('dim', on && !related.has(g.dataset.id));
    g.classList.toggle('hot', on && g.dataset.id === id);
  });
  document.querySelectorAll('.edge').forEach(e => {
    const isRelated = e.dataset.from === id || e.dataset.to === id;
    e.classList.toggle('hot', on && isRelated);
    e.classList.toggle('dim', on && !isRelated);
  });
}

function openDetail(id) {
  const n = ORG_DATA.nodes.find(x => x.id === id);
  if (!n) return;
  const layer = ORG_DATA.layers.find(l => l.id === n.layer);
  const s = TYPE_STYLE[n.type];

  const upstream = ORG_DATA.edges
    .filter(([a, b]) => b === id)
    .map(([a]) => ORG_DATA.nodes.find(x => x.id === a))
    .filter(Boolean);
  const downstream = ORG_DATA.edges
    .filter(([a, b]) => a === id)
    .map(([, b]) => ORG_DATA.nodes.find(x => x.id === b))
    .filter(Boolean);

  const list = arr => arr.length
    ? arr.map(x => `<span class="org-chip">${x.icon} ${x.label}</span>`).join('')
    : '<span class="org-muted">—</span>';

  const members = (n.members && n.members.length)
    ? `<div class="org-section-title">Thành phần</div>
       <div class="org-chips">${n.members.map(m => `<span class="org-chip">${m}</span>`).join('')}</div>`
    : '';

  document.getElementById('detailContent').innerHTML = `
    <div class="org-detail-header">
      <div class="org-detail-icon" style="background:${s.fill};border:1px solid ${s.stroke}">${n.icon}</div>
      <div>
        <div class="org-detail-title">${n.label}</div>
        <div class="org-detail-meta">
          <span class="org-pill" style="color:${s.stroke};border-color:${s.stroke}">${s.pill}</span>
          <span class="org-muted">${layer.label}</span>
        </div>
      </div>
    </div>
    <p class="org-detail-desc">${n.desc || ''}</p>
    ${members}
    <div class="org-section-title">Đầu vào · Upstream</div>
    <div class="org-chips">${list(upstream)}</div>
    <div class="org-section-title">Đầu ra · Downstream</div>
    <div class="org-chips">${list(downstream)}</div>
  `;

  document.getElementById('detailPanel').classList.add('open');
  highlightConnections(id, true);
}

function closeDetail() {
  document.getElementById('detailPanel').classList.remove('open');
  document.querySelectorAll('.node, .edge').forEach(el => {
    el.classList.remove('dim', 'hot');
  });
}

/* ═══════════════════════════════════════════════════════════════
   EXPORT
═══════════════════════════════════════════════════════════════ */

function exportPNG() {
  const svg = document.getElementById('orgSvg');
  const clone = svg.cloneNode(true);
  clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  // Reset viewport transform for export
  const vp = clone.querySelector('#viewport');
  if (vp) vp.removeAttribute('transform');

  const xml = new XMLSerializer().serializeToString(clone);
  const blob = new Blob([xml], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  const img = new Image();
  img.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = LAYOUT.width * 2;
    canvas.height = LAYOUT.height * 2;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#070c1a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    URL.revokeObjectURL(url);
    canvas.toBlob(blob => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'org-model-human-x-agent.png';
      a.click();
      URL.revokeObjectURL(a.href);
    });
  };
  img.src = url;
}

/* ═══════════════════════════════════════════════════════════════
   FILTER
═══════════════════════════════════════════════════════════════ */

function filterByType(type) {
  document.querySelectorAll('.org-chip-filter').forEach(b => {
    b.classList.toggle('active', b.dataset.type === type);
  });
  document.querySelectorAll('.node').forEach(g => {
    if (type === 'all') g.classList.remove('hidden');
    else g.classList.toggle('hidden', g.dataset.type !== type);
  });
  document.querySelectorAll('.edge').forEach(e => {
    if (type === 'all') { e.classList.remove('hidden'); return; }
    const a = ORG_DATA.nodes.find(n => n.id === e.dataset.from);
    const b = ORG_DATA.nodes.find(n => n.id === e.dataset.to);
    e.classList.toggle('hidden', !(a?.type === type || b?.type === type));
  });
}

/* ═══════════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('orgTitle').textContent = ORG_DATA.meta.title;
  document.getElementById('orgSubtitle').textContent = ORG_DATA.meta.subtitle;
  document.getElementById('orgPitch').textContent = ORG_DATA.meta.pitch;

  // Layer summary cards
  const summaryEl = document.getElementById('layerSummary');
  if (summaryEl) {
    summaryEl.innerHTML = ORG_DATA.layers.map((l, i) => `
      <div class="org-layer-card">
        <div class="org-layer-num">L${i + 1}</div>
        <div>
          <div class="org-layer-title">${l.label}</div>
          <div class="org-layer-en">${l.en}</div>
          <div class="org-layer-role">${l.role}</div>
        </div>
      </div>
    `).join('');
  }

  renderSVG();
  setupPanZoom();
  applyTransform();

  document.getElementById('orgSvg').addEventListener('click', e => {
    if (!e.target.closest('.node')) closeDetail();
  });
});
