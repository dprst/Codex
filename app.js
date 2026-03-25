const state = { lang: 'uk', issues: [], activeIssue: null, deferredInstallPrompt: null };
const state = {
  lang: 'uk',
  issues: [],
  activeIssue: null,
  deferredInstallPrompt: null
};

const el = {
  dateLine: document.getElementById('dateLine'),
  langSelect: document.getElementById('langSelect'),
  installBtn: document.getElementById('installBtn'),
  globalFilter: document.getElementById('globalFilter'),
  ukraineFilter: document.getElementById('ukraineFilter'),
  globalList: document.getElementById('globalList'),
  ukraineList: document.getElementById('ukraineList'),
  archiveList: document.getElementById('archiveList'),
  archiveSearch: document.getElementById('archiveSearch')
};

const t = {
  uk: {
    today: 'Сьогодні', archive: 'Архів', method: 'Методологія', topSignals: '3 ключові сигнали', executive: 'Executive summary (1 хв)',
    global: '🌍 World Digest', ukraine: '🇺🇦 Україна', pro: '📣 Communications Strategy',
    research: '📚 Рекомендовано', metrics: '📊 Метрики', sourceTitle: 'Джерела', methodTitle: 'Методологія', toc: 'Навігація',
    all: 'Усі теми', why: 'Чому важливо', implication: 'Імплікації', sources: 'Першоджерела',
    open: 'Відкрити', updated: 'Оновлено', datePrefix: 'Випуск', details: 'Детальніше',
    methodBullets: [
      'Кожна новина має гіперпосилання на першоджерело.',
      'Випуск ділиться на: World, Ukraine, Communications Strategy, Metrics, Research.',
      'Контент подається як short summary + deeper context у розгортанні.',
      'Список джерел дублюється окремим блоком внизу випуску.'
    ]
  },
  en: {
    today: 'Today', archive: 'Archive', method: 'Method', topSignals: 'Top 3 signals', executive: 'Executive summary (1 min)',
    global: '🌍 World Digest', ukraine: '🇺🇦 Ukraine', pro: '📣 Communications Strategy',
    research: '📚 Recommended', metrics: '📊 Metrics', sourceTitle: 'Sources', methodTitle: 'Methodology', toc: 'Jump to',
    all: 'All categories', why: 'Why it matters', implication: 'Comms implication', sources: 'Primary sources',
    open: 'Open', updated: 'Updated', datePrefix: 'Issue', details: 'Read more',
    methodBullets: [
      'Every story includes direct hyperlinks to primary sources.',
      'Each issue is split into: World, Ukraine, Communications Strategy, Metrics, Research.',
      'Content uses short summaries with expandable deeper context.',
      'All sources are also listed in a dedicated source section.'
    ]
  }
};

function text(k) { return t[state.lang][k]; }
function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
    today: 'Сьогодні',
    archive: 'Архів',
    method: 'Методологія',
    topSignals: '3 ключові сигнали',
    global: 'Світовий дайджест',
    ukraine: 'Український дайджест',
    pro: 'Блок для комунікаційного стратега',
    research: 'Research Radar',
    methodTitle: 'Методологія',
    all: 'Усі теми',
    why: 'Чому важливо',
    implication: 'Імплікації для комунікацій',
    sources: 'Першоджерела',
    open: 'Відкрити',
    updated: 'Оновлено',
    datePrefix: 'Випуск',
    methodBullets: [
      'Кожна ключова новина має посилання на першоджерело.',
      'Для дайджесту використовується scoring за впливом, терміновістю, релевантністю для комунікацій.',
      'Формат: quick-read + detail-on-demand через розгортання.',
      'Блок Pro Intelligence сфокусований на наративах, репутаційних ризиках і практичних діях.'
    ]
  },
  en: {
    today: 'Today',
    archive: 'Archive',
    method: 'Method',
    topSignals: 'Top 3 signals',
    global: 'Global Brief',
    ukraine: 'Ukraine Brief',
    pro: 'Comms Strategist Intelligence',
    research: 'Research Radar',
    methodTitle: 'Methodology',
    all: 'All categories',
    why: 'Why it matters',
    implication: 'Comms implication',
    sources: 'Primary sources',
    open: 'Open',
    updated: 'Updated',
    datePrefix: 'Issue',
    methodBullets: [
      'Each key story includes a direct primary source link.',
      'Story scoring combines impact, urgency, and strategic relevance for communications.',
      'Format: quick-read with detail-on-demand via expandable sections.',
      'Pro Intelligence focuses on narrative shifts, reputation risk, and practical actions.'
    ]
  }
};

function text(key) {
  return t[state.lang][key];
}

function setActiveView(view) {
  document.querySelectorAll('.tab').forEach((tab) => tab.classList.toggle('active', tab.dataset.view === view));
  document.querySelectorAll('.view').forEach((v) => v.classList.toggle('active', v.id === `view${capitalize(view)}`));
}

function renderLabels() {
  tabToday.textContent = text('today');
  tabArchive.textContent = text('archive');
  tabMethod.textContent = text('method');
  executiveTitle.textContent = text('executive');
  signalsTitle.textContent = text('topSignals');
  globalTitle.textContent = text('global');
  globalTitleInner.textContent = text('global');
  ukraineTitle.textContent = text('ukraine');
  ukraineTitleInner.textContent = text('ukraine');
  proTitle.textContent = text('pro');
  metricsTitle.textContent = text('metrics');
  researchTitle.textContent = text('research');
  sourceTitle.textContent = text('sourceTitle');
  archiveTitle.textContent = text('archive');
  methodTitle.textContent = text('methodTitle');
  tocTitle.textContent = text('toc');
function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function fmtDate(dateStr) {
  const date = new Date(`${dateStr}T08:30:00+02:00`);
  return new Intl.DateTimeFormat(state.lang === 'uk' ? 'uk-UA' : 'en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  }).format(date);
}

function renderStaticLabels() {
  document.getElementById('tabToday').textContent = text('today');
  document.getElementById('tabArchive').textContent = text('archive');
  document.getElementById('tabMethod').textContent = text('method');
  document.getElementById('signalsTitle').textContent = text('topSignals');
  document.getElementById('globalTitle').textContent = text('global');
  document.getElementById('ukraineTitle').textContent = text('ukraine');
  document.getElementById('proTitle').textContent = text('pro');
  document.getElementById('researchTitle').textContent = text('research');
  document.getElementById('archiveTitle').textContent = text('archive');
  document.getElementById('methodTitle').textContent = text('methodTitle');
  el.archiveSearch.placeholder = state.lang === 'uk' ? 'Пошук в архіві' : 'Search archive';
}

function fillFilter(select, items) {
  const prev = select.value || 'all';
  const categories = [...new Set(items.map((s) => s.category))];
  select.innerHTML = `<option value="all">${text('all')}</option>` + categories.map((c) => `<option value="${c}">${c}</option>`).join('');
  if ([...select.options].some((o) => o.value === prev)) select.value = prev;
}

function sourceLinks(sources = []) { return sources.map((s) => `<a href="${s.url}" target="_blank" rel="noopener">${s.name}</a>`).join(''); }

function storyCard(story) {
  return `<article class="story"><h3>${story.headline[state.lang]} <span class="tag ${story.importance}">${story.importance}</span></h3><div class="meta">${story.category} • ${story.score}/100 • ${story.published_at}</div><p>${story.summary[state.lang]}</p><details><summary>${text('details')}</summary><p><span class="label">${text('why')}:</span> ${story.why_it_matters[state.lang]}</p><p><span class="label">${text('implication')}:</span> ${story.comms_implication[state.lang]}</p></details><div class="sources"><span class="label">${text('sources')}:</span> ${sourceLinks(story.sources)}</div></article>`;
}

function renderStories(bucket, filterEl, listEl) {
  const items = state.activeIssue.briefs[bucket];
  fillFilter(filterEl, items);
  const filtered = filterEl.value === 'all' ? items : items.filter((i) => i.category === filterEl.value);
  listEl.innerHTML = filtered.map(storyCard).join('');
}

function renderPro(issue) {
  proLead.textContent = issue.pro_block.lead[state.lang];
  proList.innerHTML = issue.pro_block.items.map((p) => `<article class="pro-item"><h3>${p.title[state.lang]}</h3><p>${p.insight[state.lang]}</p><p><span class="label">${text('implication')}:</span> ${p.application[state.lang]}</p><div class="sources"><span class="label">${text('sources')}:</span> ${sourceLinks(p.sources)}</div></article>`).join('');
}

function renderMetrics(issue) {
  const items = issue.comms_metrics || [];
  metricsList.innerHTML = items.map((m) => `<article class="metric-item"><h3>${m.title[state.lang]}</h3><p>${m.description[state.lang]}</p><p><span class="label">Formula:</span> <code>${m.formula}</code></p><ul>${(m.tools || []).map((tool) => `<li><a href="${tool.url}" target="_blank" rel="noopener">${tool.name}</a></li>`).join('')}</ul></article>`).join('');
}

function renderResearch(issue) {
  researchList.innerHTML = issue.research_radar.map((r) => `<article class="research-item"><h3>${r.title}</h3><p>${r.why_read[state.lang]}</p><div class="sources"><a href="${r.url}" target="_blank" rel="noopener">${text('open')}</a></div></article>`).join('');
}

function renderSourceCloud(issue) {
  const all = [];
  const pushSources = (arr) => arr.forEach((item) => (item.sources || []).forEach((s) => all.push(s)));
  pushSources(issue.briefs.global); pushSources(issue.briefs.ukraine); pushSources(issue.pro_block.items);
  issue.research_radar.forEach((r) => all.push({ name: r.title, url: r.url }));
  const uniq = [...new Map(all.map((s) => [s.url, s])).values()];
  sourceCloud.innerHTML = uniq.map((s) => `<a href="${s.url}" target="_blank" rel="noopener">${s.name}</a>`).join('');
}

function renderExecutive(issue) {
  const items = issue.executive_summary?.[state.lang] || issue.top_signals.map((s) => s[state.lang]);
  executiveList.innerHTML = items.map((i) => `<li>${i}</li>`).join('');
}

function renderToc() {
  const entries = [
    ['#executive', text('executive')], ['#signalsSection', text('topSignals')], ['#globalSection', text('global')],
    ['#ukraineSection', text('ukraine')], ['#proSection', text('pro')], ['#metricsSection', text('metrics')],
    ['#researchSection', text('research')], ['#sourceSection', text('sourceTitle')]
  ];
  tocNav.innerHTML = entries.map(([href, label]) => `<a href="${href}">${label}</a>`).join('');
}

function renderArchive() {
  const q = el.archiveSearch.value.trim().toLowerCase();
  const filtered = state.issues.filter((i) => `${i.meta.date} ${i.editorial_intro.uk} ${i.editorial_intro.en}`.toLowerCase().includes(q));
  el.archiveList.innerHTML = filtered.map((i) => `<li><div><strong>${i.meta.date}</strong><br><small>${i.editorial_intro[state.lang].slice(0, 110)}…</small></div><button class="open-issue" data-date="${i.meta.date}">${text('open')}</button></li>`).join('');
}

function renderIssue() {
  const issue = state.activeIssue;
  if (!issue) return;
  renderLabels();
  renderToc();
  el.dateLine.textContent = `${text('datePrefix')}: ${issue.meta.date} • ${text('updated')}: ${issue.meta.updated_at} (${issue.meta.timezone})`;
  hero.innerHTML = `<h2>${issue.header[state.lang]}</h2><p>${issue.editorial_intro[state.lang]}</p>`;
  renderExecutive(issue);
  signals.innerHTML = issue.top_signals.map((s) => `<article class="signal ${s.importance}"><strong>${s[state.lang]}</strong><div>${s.score}/100</div></article>`).join('');
  renderStories('global', el.globalFilter, el.globalList);
  renderStories('ukraine', el.ukraineFilter, el.ukraineList);
  renderPro(issue);
  renderMetrics(issue);
  renderResearch(issue);
  renderSourceCloud(issue);
  methodList.innerHTML = text('methodBullets').map((b) => `<li>${b}</li>`).join('');
  renderArchive();
}

async function loadIssues() {
  const idx = await fetch('data/issues/index.json').then((r) => r.json());
  const issues = await Promise.all(idx.issues.map((p) => fetch(p).then((r) => r.json())));
  const categories = [...new Set(items.map((s) => s.category))];
  const prevValue = select.value || 'all';
  select.innerHTML = `<option value="all">${text('all')}</option>${categories.map((c) => `<option value="${c}">${c}</option>`).join('')}`;
  if ([...select.options].some((o) => o.value === prevValue)) {
    select.value = prevValue;
  }
}

function storyCard(story) {
  const sourceLinks = story.sources.map((s) => `<a href="${s.url}" target="_blank" rel="noopener">${s.name}</a>`).join('');
  return `
    <article class="story">
      <h3>${story.headline[state.lang]} <span class="tag ${story.importance}">${story.importance}</span></h3>
      <div class="meta">${story.category} • ${story.score}/100 • ${story.published_at}</div>
      <p>${story.summary[state.lang]}</p>
      <details>
        <summary>${state.lang === 'uk' ? 'Детальніше' : 'Read more'}</summary>
        <p><span class="label">${text('why')}:</span> ${story.why_it_matters[state.lang]}</p>
        <p><span class="label">${text('implication')}:</span> ${story.comms_implication[state.lang]}</p>
      </details>
      <div class="sources"><span class="label">${text('sources')}:</span> ${sourceLinks}</div>
    </article>`;
}

function renderStories(key, selectEl, listEl) {
  const items = state.activeIssue.briefs[key];
  fillFilter(selectEl, items);
  const filtered = selectEl.value === 'all' ? items : items.filter((i) => i.category === selectEl.value);
  listEl.innerHTML = filtered.map(storyCard).join('');
}

function renderIssue() {
  const issue = state.activeIssue;
  if (!issue) return;

  renderStaticLabels();
  el.dateLine.textContent = `${text('datePrefix')}: ${fmtDate(issue.meta.date)} • ${text('updated')}: ${issue.meta.updated_at}`;

  document.getElementById('hero').innerHTML = `
    <h2>${state.lang === 'uk' ? 'Огляд дня' : 'Daily overview'} — ${issue.meta.date}</h2>
    <p>${issue.editorial_intro[state.lang]}</p>
  `;

  document.getElementById('signals').innerHTML = issue.top_signals.map((s) => `
    <article class="signal ${s.importance}">
      <strong>${s[state.lang]}</strong>
      <div>${s.score}/100</div>
    </article>
  `).join('');

  renderStories('global', el.globalFilter, el.globalList);
  renderStories('ukraine', el.ukraineFilter, el.ukraineList);

  document.getElementById('proList').innerHTML = issue.pro_block.items.map((p) => `
    <article class="pro-item">
      <h3>${p.title[state.lang]}</h3>
      <p>${p.insight[state.lang]}</p>
      <p><span class="label">${text('implication')}:</span> ${p.application[state.lang]}</p>
      <div class="sources">${p.sources.map((s) => `<a href="${s.url}" target="_blank" rel="noopener">${s.name}</a>`).join('')}</div>
    </article>
  `).join('');

  document.getElementById('researchList').innerHTML = issue.research_radar.map((r) => `
    <article class="research-item">
      <h3>${r.title}</h3>
      <p>${r.why_read[state.lang]}</p>
      <a href="${r.url}" target="_blank" rel="noopener">${text('open')}</a>
    </article>
  `).join('');

  const methodList = document.getElementById('methodList');
  methodList.innerHTML = text('methodBullets').map((b) => `<li>${b}</li>`).join('');

  renderArchiveList();
}

function renderArchiveList() {
  const q = el.archiveSearch.value.trim().toLowerCase();
  const filtered = state.issues.filter((i) => {
    const textBlob = `${i.meta.date} ${i.editorial_intro.uk} ${i.editorial_intro.en}`.toLowerCase();
    return !q || textBlob.includes(q);
  });

  el.archiveList.innerHTML = filtered.map((i) => `
    <li>
      <div>
        <strong>${i.meta.date}</strong><br />
        <small>${i.editorial_intro[state.lang].slice(0, 95)}…</small>
      </div>
      <button data-date="${i.meta.date}" class="open-issue">${text('open')}</button>
    </li>
  `).join('');
}

async function loadIssues() {
  const index = await fetch('data/issues/index.json').then((r) => r.json());
  const issues = await Promise.all(index.issues.map((path) => fetch(path).then((r) => r.json())));
  issues.sort((a, b) => b.meta.date.localeCompare(a.meta.date));
  state.issues = issues;
  state.activeIssue = issues[0];
  renderIssue();
}

function setupEvents() {
  document.querySelectorAll('.tab').forEach((tab) => tab.addEventListener('click', () => setActiveView(tab.dataset.view)));
  el.langSelect.addEventListener('change', (e) => { state.lang = e.target.value; localStorage.setItem('dn-lang', state.lang); renderIssue(); });
  el.globalFilter.addEventListener('change', () => renderStories('global', el.globalFilter, el.globalList));
  el.ukraineFilter.addEventListener('change', () => renderStories('ukraine', el.ukraineFilter, el.ukraineList));
  el.archiveSearch.addEventListener('input', renderArchive);
  el.archiveList.addEventListener('click', (e) => {
    const b = e.target.closest('.open-issue');
    if (!b) return;
    const issue = state.issues.find((i) => i.meta.date === b.dataset.date);
    if (!issue) return;
    state.activeIssue = issue; renderIssue(); setActiveView('today');
  });
  window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); state.deferredInstallPrompt = e; el.installBtn.hidden = false; });
  document.querySelectorAll('.tab').forEach((tab) => {
    tab.addEventListener('click', () => setActiveView(tab.dataset.view));
  });

  el.langSelect.addEventListener('change', (e) => {
    state.lang = e.target.value;
    localStorage.setItem('dn-lang', state.lang);
    renderIssue();
  });

  el.globalFilter.addEventListener('change', () => renderStories('global', el.globalFilter, el.globalList));
  el.ukraineFilter.addEventListener('change', () => renderStories('ukraine', el.ukraineFilter, el.ukraineList));
  el.archiveSearch.addEventListener('input', renderArchiveList);

  el.archiveList.addEventListener('click', (e) => {
    const btn = e.target.closest('.open-issue');
    if (!btn) return;
    const issue = state.issues.find((i) => i.meta.date === btn.dataset.date);
    if (!issue) return;
    state.activeIssue = issue;
    renderIssue();
    setActiveView('today');
  });

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    state.deferredInstallPrompt = e;
    el.installBtn.hidden = false;
  });

  el.installBtn.addEventListener('click', async () => {
    if (!state.deferredInstallPrompt) return;
    state.deferredInstallPrompt.prompt();
    await state.deferredInstallPrompt.userChoice;
    state.deferredInstallPrompt = null;
    el.installBtn.hidden = true;
  });
}

if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');
function initPWA() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
  }
}

(async function init() {
  state.lang = localStorage.getItem('dn-lang') || 'uk';
  el.langSelect.value = state.lang;
  setupEvents();
  initPWA();
  await loadIssues();
})();
