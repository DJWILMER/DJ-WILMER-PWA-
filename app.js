/* ============================================
   DJ WILMER — PODER QUE SE SIENTE
   PWA App v3.0 · Player Pro
   Cumbia · Techno · Bachata
   ============================================ */

'use strict';

/* ================= CONFIGURACION ================= */
const CONFIG = {
    radioName: 'DJ WILMER',
    frequency: 'Online',
    location: 'LUYA - AMAZONAS - CAMPORREDONDO - Perú',
    djName: 'DJ WILMER',
    project: 'NUEVO PROYECTO DJ WILMER',
    djImage: 'https://i.ibb.co/Y77fDWHK/DJ-WILMER.jpg',
    groupImage: 'https://i.ibb.co/1f51gYvD/Chat-GPT-Image-20-jul-2026-14-12-57.png',
    wallpaper: 'https://i.ibb.co/6RcrxmX4/Wallpaper.jpg',
    cumbiaLogo: 'https://i.ibb.co/Zpsvkz36/cumbia.png',
    streamUrl: 'https://stream.zeno.fm/zzrxpmz2mv8uv',
    apiUrl: 'https://api.zeno.fm/mounts/metadata/subscribe/zzrxpmz2mv8uv',
    tvUrl: 'https://iptv-pe-x-7-g3s-video.egostreaming.pe/karibenatv_685a-pe-a5676-584412/index.fmp4.m3u8',
    social: {
        whatsapp: 'https://wa.link/op92a8',
        whatsappGroup: 'https://chat.whatsapp.com/HjONHx6yKRDJsT6LiTwKjF',
        facebook: 'https://www.facebook.com/DJCHOCHOBARWILMER',
        instagram: 'https://www.instagram.com/wilmerdelgadocieza',
        tiktok: 'https://www.tiktok.com/@djchochobarwilmer',
        twitter: 'https://wilmerdelgadocieza.blogspot.com/',
        youtube: 'https://www.youtube.com/channel/UCmJFc5f20PHmTwvvX5sONGQ'
    },
    installGuides: {
        android: { label: 'Android', img: 'https://i.ibb.co/7DFtVK3/img-instalar-app-android.png' },
        iphone:  { label: 'iPhone',  img: 'https://i.ibb.co/fzP9Lznf/img-instalar-app-iphone.png' },
        windows: { label: 'Windows', img: 'https://i.ibb.co/7t70b40q/img-instalar-app-windows.png' }
    }
};

const THEMES = {
    dark:    { name: 'Azul Pro',    swatch: 'linear-gradient(135deg,#1565c0 0%,#0a1128 100%)' },
    light:   { name: 'Claro',       swatch: 'linear-gradient(135deg,#f5f7fa 0%,#ffffff 100%)' },
    midnight:{ name: 'Medianoche',  swatch: 'linear-gradient(135deg,#4527a0 0%,#08080f 100%)' },
    gold:    { name: 'Oro',         swatch: 'linear-gradient(135deg,#ffca28 0%,#241a0e 100%)' },
    forest:  { name: 'Bosque',      swatch: 'linear-gradient(135deg,#35e08a 0%,#07130c 100%)' },
    sunset:  { name: 'Atardecer',   swatch: 'linear-gradient(135deg,#ff6b9d 0%,#1a0d18 100%)' }
};

/* ================= ICONOS SVG ================= */
const ICONS = {
    music:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
    mic:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"/></svg>',
    book:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    sunrise:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 18a5 5 0 0 0-10 0M12 2v7M4.22 10.22l1.42 1.42M1 18h2M21 18h2M18.36 11.64l1.42-1.42M23 22H1M16 5l-4 4-4-4"/></svg>',
    sun:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>',
    moon:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    dove:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2c-2 3-5 4-8 4 0 6 3 10 8 12 5-2 8-6 8-12-3 0-6-1-8-4z"/><path d="M12 14v6"/></svg>',
    church: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v6M9 5h6M6 22V12l6-4 6 4v10z"/><path d="M10 22v-6h4v6"/></svg>',
    heart:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    star:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    users:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    guitar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 3l-3 3M14 9l-6 6-4 1 1-4 6-6z"/><circle cx="15" cy="8" r="4"/></svg>',
    radio2: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/></svg>',
    kids:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M6 21v-2a6 6 0 0 1 12 0v2M9 8h.01M15 8h.01"/></svg>',
    pray:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2s-4 5-4 9a4 4 0 0 0 8 0c0-4-4-9-4-9z"/><path d="M8 18h8M12 15v7"/></svg>',
    globe:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/></svg>',
    crown:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 8l5 4 5-7 5 7 5-4-2 12H4z"/></svg>',
    disc:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4"/></svg>',
    zap:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    fire:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2s4 4 4 8a4 4 0 0 1-8 0c0-1 .5-2 1-3-2 1-3 3-3 5a6 6 0 0 0 12 0c0-5-6-10-6-10z"/></svg>'
};

/* ================= CATEGORIAS DJ WILMER ================= */
const CAT = {
    cumbia:  { label: 'CUMBIA',  color: '#ff6f00', icon: 'guitar', img: 'https://i.ibb.co/Zpsvkz36/cumbia.png' },
    techno:  { label: 'TECHNO',  color: '#7c4dff', icon: 'zap',    img: '' },
    bachata: { label: 'BACHATA', color: '#e91e63', icon: 'heart',  img: '' },
    mix:     { label: 'MIX PRO', color: '#1565c0', icon: 'disc',   img: '' }
};

const DJ_PROGRAMS = {
    cumbia:  ['Cumbia Pro DJ Wilmer', 'Cumbiambera Total', 'Cumbia Andina', 'Fiesta Cumbiambera', 'Cumbia de Oro', 'Ritmo Cumbiambero', 'Cumbia Súper Pro', 'Toque Cumbiambero'],
    techno:  ['Techno Mix DJ Wilmer', 'Techno Session', 'Techno Night', 'Electro Pro', 'Techno Zone', 'Rave Mix Pro', 'Techno Digital', 'Bass Techno'],
    bachata: ['Bachata de Oro DJ Wilmer', 'Bachata Romántica', 'Bachateros Mix', 'Bachata Sensual', 'Bachata Hits', 'Noche de Bachata', 'Bachata Pro', 'Corazón Bachatero'],
    mix:     ['Mix Pro DJ Wilmer', 'Éxitos Mix', 'Cumbia Techno & Bachata', 'Mix Total Pro', 'Fiesta Mix', 'Súper Mix DJ Wilmer', 'Mix de la Semana', 'Mix Andino Pro']
};

const SLOTS = ['05:00 - 07:00', '07:00 - 09:00', '09:00 - 11:00', '11:00 - 13:00', '13:00 - 15:00', '15:00 - 17:00', '17:00 - 19:00', '19:00 - 21:00', '21:00 - 23:00'];
const CAT_ORDER = ['cumbia', 'techno', 'bachata', 'cumbia', 'techno', 'bachata', 'cumbia', 'techno', 'mix'];

function buildDay(offset) {
    return SLOTS.map((time, i) => {
        const cat = CAT_ORDER[(i + offset) % CAT_ORDER.length];
        const names = DJ_PROGRAMS[cat];
        return {
            time,
            name: names[(i + offset) % names.length],
            host: 'DJ WILMER',
            cat,
            catLabel: CAT[cat].label,
            icon: CAT[cat].icon,
            color: CAT[cat].color,
            img: CAT[cat].img
        };
    });
}

const SCHEDULE = {
    'Lunes': buildDay(0),
    'Martes': buildDay(1),
    'Miércoles': buildDay(2),
    'Jueves': buildDay(3),
    'Viernes': buildDay(4),
    'Sábado': buildDay(5),
    'Domingo': buildDay(6)
};

const DAY_ORDER = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

/* ================= ESTADO ================= */
const state = {
    isPlaying: false,
    theme: localStorage.getItem('kyrios-theme') || 'dark',
    volume: parseInt(localStorage.getItem('kyrios-volume') || '80', 10),
    audio: null,
    metaTimer: null,
    station: null,
    selectedDay: null,
    likes: parseInt(localStorage.getItem('kyrios-likes') || '1248', 10),
    liked: localStorage.getItem('kyrios-liked') === '1',
    saved: localStorage.getItem('kyrios-saved') === '1',
    deferredPrompt: null,
    liveMeta: null
};

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const el = {};

/* ================= ESTACION VIRTUAL (fallback) ================= */
class VirtualStation {
    constructor() {
        this.tracks = [
            { artist: 'DJ WILMER', title: 'Cumbia Pro Mix' },
            { artist: 'DJ WILMER', title: 'Techno Session Live' },
            { artist: 'DJ WILMER', title: 'Bachata de Oro' },
            { artist: 'DJ WILMER', title: 'Cumbiambera Total' },
            { artist: 'DJ WILMER', title: 'Mix Cumbia & Bachata' },
            { artist: 'DJ WILMER', title: 'Techno Night Remix' }
        ];
        this.current = { artist: 'DJ WILMER', title: 'Transmisión en vivo' };
        this.timer = null;
    }
    pick() { this.current = this.tracks[(Math.random() * this.tracks.length) | 0]; return this.current; }
    start() { this.pick(); this.timer = setInterval(() => { this.pick(); renderNowPlaying(); }, 20000); return this; }
    stop() { if (this.timer) { clearInterval(this.timer); this.timer = null; } }
}

/* ================= AUDIO ================= */
function createAudio() {
    if (state.audio) return state.audio;
    const audio = new Audio();
    audio.preload = 'none';
    audio.volume = state.volume / 100;
    audio.addEventListener('playing', () => setPlayingState(true));
    audio.addEventListener('pause', () => setPlayingState(false));
    audio.addEventListener('waiting', () => { if (state.audio && state.audio.src) showToast('Cargando transmisión...'); });
    audio.addEventListener('error', () => { if (state.audio && state.audio.src) showToast('Reintentando conexión...'); });
    state.audio = audio;
    return audio;
}

function playRadio() {
    const audio = createAudio();
    audio.src = CONFIG.streamUrl + '?t=' + Date.now();
    audio.volume = state.volume / 100;
    const p = audio.play();
    if (p && p.catch) p.then(() => setPlayingState(true)).catch(() => startVirtual());
    else setPlayingState(true);
    startMetaPolling();
}

function startVirtual() {
    if (state.station) state.station.stop();
    state.station = new VirtualStation().start();
    setPlayingState(true);
    showToast('Reproduciendo dj wilmer');
}

function pauseRadio() {
    if (state.audio) state.audio.pause();
    if (state.station) state.station.stop();
    setPlayingState(false);
}

function stopRadio() {
    if (state.audio) { state.audio.pause(); try { state.audio.currentTime = 0; } catch (e) {} }
    if (state.station) state.station.stop();
    setPlayingState(false);
    showToast('Transmisión detenida');
}

function setPlayingState(playing) {
    state.isPlaying = playing;
    document.body.dataset.playing = playing;
    [el.playBtnMain, el.playPauseBtn, el.miniPlayBtn].forEach(btn => { if (btn) btn.classList.toggle('is-playing', playing); });
    if (el.vinyl) el.vinyl.classList.toggle('playing', playing);
    updateStatus(playing);
    updateMiniPlayer();
    if (playing) startMetaPolling(); else stopMetaPolling();
}

function updateStatus(playing) {
    if (!el.streamStatus) return;
    const dot = el.streamStatus.querySelector('.status-dot');
    const text = el.streamStatus.querySelector('.status-text');
    if (playing) {
        el.streamStatus.classList.remove('offline');
        dot.style.background = 'var(--success)';
        text.textContent = 'En Vivo';
    } else {
        el.streamStatus.classList.add('offline');
        dot.style.background = 'var(--error)';
        text.textContent = 'Detenido';
    }
}

function updateMiniPlayer() {
    if (el.miniPlayer) el.miniPlayer.classList.toggle('visible', state.isPlaying || window.scrollY > 400);
}

/* ================= API METADATOS ================= */
async function fetchMeta() {
    const endpoints = [
        CONFIG.apiUrl,
        'https://api.allorigins.win/raw?url=' + encodeURIComponent(CONFIG.apiUrl)
    ];
    for (const url of endpoints) {
        try {
            const res = await fetch(url, { cache: 'no-store' });
            if (!res.ok) continue;
            const data = await res.json();
            if (data && (data.title || data.history)) return data;
        } catch (e) { /* siguiente */ }
    }
    return null;
}

function parseTrack(str) {
    if (!str) return { artist: '', title: '' };
    let s = String(str).trim().replace(/\s+/g, ' ');
    s = s.replace(/^\d+\.\)\s*/, '').replace(/^\d+\.\s*/, '');
    const idx = s.indexOf(' - ');
    if (idx > -1) return { artist: s.slice(0, idx).trim(), title: s.slice(idx + 3).trim() };
    return { artist: CONFIG.radioName, title: s };
}

async function updateMetadata() {
    const data = await fetchMeta();
    if (!data) { if (!state.liveMeta) renderNowPlaying(); return; }
    const cur = parseTrack(data.title);
    state.liveMeta = { current: cur, art: data.art };

    if (el.playerTitle) el.playerTitle.textContent = cur.title || CONFIG.radioName;
    if (el.playerArtist) el.playerArtist.textContent = cur.artist || CONFIG.radioName;
    if (el.currentSong) el.currentSong.textContent = cur.title || 'Transmisión en vivo';
    if (el.miniTitle) el.miniTitle.textContent = cur.title || CONFIG.radioName;
    if (cur.title) document.title = cur.title + ' — DJ WILMER FM';

    if (data.art) {
        [el.vinylArt, el.postImage, el.miniArt].forEach(img => { if (img) img.src = data.art; });
    }
    const listeners = data.listeners || data.ulistener || '--';
    if (el.listenersCount) el.listenersCount.textContent = listeners;
    if (el.statusListeners) el.statusListeners.textContent = listeners;
    if (el.bitrateVal) el.bitrateVal.textContent = data.bitrate || '--';
    if (el.postNowTitle) el.postNowTitle.textContent = cur.artist ? (cur.artist + ' — ' + cur.title) : cur.title;

    if (Array.isArray(data.history)) {
        renderHistory(data.history);
        if (el.historyUpdated) el.historyUpdated.textContent = 'Actualizado ' + new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' });
    }
    markCurrentProgram();
}

function startMetaPolling() { stopMetaPolling(); updateMetadata(); state.metaTimer = setInterval(updateMetadata, 15000); }
function stopMetaPolling() { if (state.metaTimer) { clearInterval(state.metaTimer); state.metaTimer = null; } }

function renderNowPlaying() {
    if (state.liveMeta) return;
    const cur = state.station ? state.station.current : { artist: 'DJ WILMER', title: 'Transmisión en vivo' };
    if (el.currentSong) el.currentSong.textContent = cur.title;
    if (el.playerTitle) el.playerTitle.textContent = cur.title;
    if (el.playerArtist) el.playerArtist.textContent = cur.artist;
    if (el.miniTitle) el.miniTitle.textContent = cur.title;
}

/* ================= HISTORIAL ================= */
function renderHistory(history) {
    if (!el.historyList) return;
    const items = history.map((raw, i) => ({ ...parseTrack(raw), index: i + 1, raw: String(raw).trim() }));
    el.historyList.innerHTML = items.map((t, i) => `
        <div class="history-row" style="animation-delay:${Math.min(i * 40, 400)}ms">
            <div class="history-index">${t.index}</div>
            <div class="history-song">
                <div class="song-title">${escapeHtml(t.title || t.raw)}</div>
                <div class="song-artist">${escapeHtml(t.artist || CONFIG.radioName)}</div>
            </div>
            <div class="history-actions">
                <button class="hist-act ${state.liked ? 'liked' : ''}" data-like="${i}" title="Me gusta">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </button>
                <button class="hist-act" data-copy="${escapeAttr(t.artist + ' - ' + t.title)}" title="Copiar">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                </button>
                <button class="hist-act" data-search="${escapeAttr(t.artist + ' ' + t.title)}" title="Buscar en YouTube">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                </button>
            </div>
        </div>`).join('');
    el.historyList.querySelectorAll('[data-like]').forEach(b => b.addEventListener('click', () => b.classList.toggle('liked')));
    el.historyList.querySelectorAll('[data-copy]').forEach(b => b.addEventListener('click', () => copyText(b.dataset.copy, 'Canción copiada')));
    el.historyList.querySelectorAll('[data-search]').forEach(b => b.addEventListener('click', () => window.open('https://www.youtube.com/results?search_query=' + encodeURIComponent(b.dataset.search), '_blank')));
}

/* ================= PROGRAMACION ================= */
function iconSvg(name) { return ICONS[name] || ICONS.music; }

function renderSchedule(day) {
    const list = SCHEDULE[day];
    if (!list || !el.scheduleGrid) return;
    el.scheduleGrid.innerHTML = list.map((p, i) => `
        <div class="program-card" style="--prog-color:${p.color}; animation: fadeUp .4s ease both; animation-delay:${Math.min(i * 50, 450)}ms" data-start="${p.time.slice(0, 5)}" data-end="${p.time.slice(8, 13)}">
            <div class="program-logo ${p.img ? 'has-img' : ''}" style="background:linear-gradient(135deg, ${p.color}, ${shade(p.color, -30)})">
                ${p.img ? `<img src="${p.img}" alt="${escapeAttr(p.name)}" loading="lazy">` : iconSvg(p.icon)}
                <span class="logo-ring"></span>
            </div>
            <div class="program-meta">
                <span class="time">${p.time}</span>
                <div class="name">${escapeHtml(p.name)}</div>
                <div class="host">${escapeHtml(p.host)} <span class="cat-badge" style="background:${p.color}">${p.catLabel}</span></div>
            </div>
            <span class="live-tag" style="display:none">EN VIVO</span>
        </div>`).join('');
    markCurrentProgram();
}

function markCurrentProgram() {
    const now = new Date();
    const todayName = DAY_ORDER[now.getDay()];
    const hhmm = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
    $$('.program-card').forEach(card => {
        card.classList.remove('current');
        const tag = card.querySelector('.live-tag');
        if (tag) tag.style.display = 'none';
        if (state.selectedDay !== todayName) return;
        if (hhmm >= card.dataset.start && hhmm < card.dataset.end) {
            card.classList.add('current');
            if (tag) tag.style.display = 'block';
            if (el.playerProgram) el.playerProgram.textContent = card.querySelector('.name').textContent;
        }
    });
}

function renderDayPills() {
    if (!el.scheduleDays) return;
    const today = DAY_ORDER[new Date().getDay()];
    state.selectedDay = today;
    el.scheduleDays.innerHTML = DAY_ORDER.map(d =>
        `<button class="day-pill ${d === today ? 'active' : ''}" data-day="${d}">${d}${d === today ? ' • HOY' : ''}</button>`
    ).join('');
    el.scheduleDays.querySelectorAll('.day-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            el.scheduleDays.querySelectorAll('.day-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            state.selectedDay = pill.dataset.day;
            renderSchedule(state.selectedDay);
        });
    });
    renderSchedule(today);
}

/* ================= COMPARTIR ================= */
function getShareUrl() { return window.location.href; }
function shareWhatsApp() {
    const text = encodeURIComponent('🎶🔊 Escucha a DJ WILMER en Vivo — Cumbia, Techno & Bachata\n' + getShareUrl());
    window.open('https://wa.me/?text=' + text, '_blank');
}
function shareFacebook() { window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(getShareUrl()), '_blank'); }
function shareTwitter() {
    const text = encodeURIComponent('🎶 DJ WILMER  en vivo — Cumbia, Techno & Bachata');
    window.open('https://twitter.com/intent/tweet?text=' + text + '&url=' + encodeURIComponent(getShareUrl()), '_blank');
}
async function copyLink() { copyText(getShareUrl(), 'Enlace copiado al portapapeles'); }
async function copyText(text, msg) {
    try { await navigator.clipboard.writeText(text); showToast(msg); }
    catch (e) {
        const t = document.createElement('textarea'); t.value = text; document.body.appendChild(t); t.select();
        try { document.execCommand('copy'); showToast(msg); } catch (err) { showToast('No se pudo copiar'); }
        document.body.removeChild(t);
    }
}

/* ================= VOLUMEN ================= */
function setVolume(v) {
    state.volume = v;
    localStorage.setItem('kyrios-volume', v);
    if (el.volumeSlider) el.volumeSlider.value = v;
    if (el.volumeValue) el.volumeValue.textContent = v + '%';
    if (state.audio) state.audio.volume = v / 100;
}

/* ================= TEMAS ================= */
function applyTheme(theme) {
    if (!THEMES[theme]) theme = 'dark';
    document.documentElement.dataset.theme = theme;
    state.theme = theme;
    localStorage.setItem('kyrios-theme', theme);
    const colors = { dark: '#0d47a1', light: '#eef2fb', midnight: '#08080f', gold: '#17110a', forest: '#07130c', sunset: '#1a0d18' };
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = colors[theme] || '#0d47a1';
    updateThemeUI();
}
function updateThemeUI() {
    $$('.theme-dot').forEach(d => d.classList.toggle('active', d.dataset.theme === state.theme));
    $$('.theme-option').forEach(o => o.classList.toggle('active', o.dataset.theme === state.theme));
}
function initThemeSelector() {
    const actions = document.querySelector('.header-actions');
    const selector = document.createElement('div');
    selector.className = 'theme-selector';
    Object.entries(THEMES).forEach(([key, t]) => {
        const dot = document.createElement('button');
        dot.className = 'theme-dot' + (key === state.theme ? ' active' : '');
        dot.dataset.theme = key; dot.title = t.name; dot.style.background = t.swatch;
        dot.addEventListener('click', () => { applyTheme(key); showToast('Tema: ' + t.name); });
        selector.appendChild(dot);
    });
    if (actions) actions.appendChild(selector);

    const fab = document.createElement('button');
    fab.className = 'icon-btn'; fab.id = 'themeFab'; fab.setAttribute('aria-label', 'Temas');
    fab.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="14.5" r="2.5"/><circle cx="8.5" cy="9.5" r="2.5"/><path d="M12 22a10 10 0 1 1 0-20"/></svg>';
    if (actions) actions.insertBefore(fab, actions.lastElementChild);

    const picker = document.createElement('div');
    picker.className = 'theme-picker';
    Object.entries(THEMES).forEach(([key, t]) => {
        const b = document.createElement('button');
        b.className = 'theme-option' + (key === state.theme ? ' active' : '');
        b.dataset.theme = key;
        b.innerHTML = `<span class="theme-swatch" style="background:${t.swatch}"></span><span>${t.name}</span>`;
        b.addEventListener('click', () => { applyTheme(key); picker.classList.remove('open'); showToast('Tema: ' + t.name); });
        picker.appendChild(b);
    });
    document.body.appendChild(picker);
    fab.addEventListener('click', (e) => { e.stopPropagation(); picker.classList.toggle('open'); });
    document.addEventListener('click', (e) => { if (!picker.contains(e.target) && !fab.contains(e.target)) picker.classList.remove('open'); });
}

/* ================= NAVEGACION ================= */
function switchSection(id) {
    $$('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.section === id));
    $$('.section').forEach(s => s.classList.toggle('active', s.id === id));
    if (el.navMenu) el.navMenu.classList.remove('open');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ================= ESTRELLAS ================= */
function createStars() {
    if (!el.starsContainer) return;
    const count = window.innerWidth < 768 ? 32 : 64;
    let html = '';
    for (let i = 0; i < count; i++) {
        const size = (1 + Math.random() * 2).toFixed(1);
        html += `<div class="star" style="left:${(Math.random()*100).toFixed(1)}%;top:${(Math.random()*62).toFixed(1)}%;width:${size}px;height:${size}px;animation-delay:${(Math.random()*3).toFixed(1)}s;animation-duration:${(2+Math.random()*2).toFixed(1)}s"></div>`;
    }
    el.starsContainer.innerHTML = html;
}

/* ================= SONG SCROLLER ================= */
const TOP_SONGS = [
    { t: 'Cumbia Pro Mix', a: 'DJ WILMER', c: '#ff6f00', i: 'guitar' },
    { t: 'Techno Session', a: 'DJ WILMER', c: '#7c4dff', i: 'zap' },
    { t: 'Bachata de Oro', a: 'DJ WILMER', c: '#e91e63', i: 'heart' },
    { t: 'Cumbiambera Total', a: 'DJ WILMER', c: '#ff6f00', i: 'fire' },
    { t: 'Techno Night', a: 'DJ WILMER', c: '#7c4dff', i: 'disc' },
    { t: 'Mix Cumbia & Bachata', a: 'DJ WILMER', c: '#1565c0', i: 'music' }
];
function renderSongScroller() {
    if (!el.songScroller) return;
    el.songScroller.innerHTML = TOP_SONGS.map(s => `
        <div class="song-chip" data-search="${escapeAttr(s.t + ' ' + s.a)}">
            <div class="song-chip-art" style="background:linear-gradient(135deg,${s.c},${shade(s.c, -30)})">
                ${iconSvg(s.i)}
            </div>
            <div class="song-chip-title">${escapeHtml(s.t)}</div>
            <div class="song-chip-sub">${escapeHtml(s.a)}</div>
        </div>`).join('');
    el.songScroller.querySelectorAll('.song-chip').forEach(c => c.addEventListener('click', () =>
        window.open('https://www.youtube.com/results?search_query=' + encodeURIComponent(c.dataset.search), '_blank')));
}

/* ================= COMENTARIOS ================= */
const SEED_COMMENTS = [
    { name: 'María Quispe', text: '¡Qué bien suena DJ Wilmer con la cumbia! Saludos desde Chincheros 🙌', time: '2 h', likes: 12, color: '#ff6f00' },
    { name: 'Juan Pérez', text: 'El set de techno estuvo brutal anoche 🔥🔥', time: '3 h', likes: 8, color: '#7c4dff' },
    { name: 'Rosa Huamán', text: 'La bachata romántica me encanta, gracias DJ Wilmer ❤️', time: '5 h', likes: 15, color: '#e91e63' },
    { name: 'Carlos Ayala', text: 'La mejor radio , ¡puro cumbión! 🎶', time: '8 h', likes: 6, color: '#1565c0' }
];
function getComments() {
    try { const c = JSON.parse(localStorage.getItem('kyrios-comments2')); if (Array.isArray(c)) return c; } catch (e) {}
    return SEED_COMMENTS.slice();
}
function saveComments(list) { localStorage.setItem('kyrios-comments2', JSON.stringify(list)); }
function renderComments() {
    if (!el.commentsList) return;
    const list = getComments();
    el.commentsCount.textContent = list.length;
    el.commentsList.innerHTML = list.map((c, i) => `
        <div class="comment" style="animation-delay:${Math.min(i * 40, 320)}ms">
            <div class="comment-avatar" style="background:linear-gradient(135deg,${c.color || '#1565c0'},${shade(c.color || '#1565c0', -30)})">${escapeHtml((c.name || '?').charAt(0).toUpperCase())}</div>
            <div class="comment-body">
                <div class="comment-author">${escapeHtml(c.name)}</div>
                <div class="comment-text">${escapeHtml(c.text)}</div>
                <div class="comment-meta">
                    <span>${escapeHtml(c.time || 'ahora')}</span>
                    <button class="comment-like" data-ci="${i}">${c.likes || 0} Me gusta</button>
                    <span>Responder</span>
                </div>
            </div>
        </div>`).join('');
    el.commentsList.querySelectorAll('[data-ci]').forEach(b => b.addEventListener('click', () => {
        const list2 = getComments();
        const idx = +b.dataset.ci;
        list2[idx].likes = (list2[idx].likes || 0) + 1;
        saveComments(list2);
        b.textContent = list2[idx].likes + ' Me gusta';
    }));
}
function addComment(text) {
    const list = getComments();
    list.unshift({ name: 'Tú', text, time: 'ahora', likes: 0, color: '#8b3dff' });
    saveComments(list);
    renderComments();
}

/* ================= POST INSTAGRAM ================= */
function initPost() {
    if (el.likeBtn) {
        el.likeBtn.classList.toggle('liked', state.liked);
        el.likesCount.textContent = state.likes.toLocaleString('es-PE');
        el.likeBtn.addEventListener('click', () => {
            state.liked = !state.liked;
            state.likes += state.liked ? 1 : -1;
            localStorage.setItem('kyrios-liked', state.liked ? '1' : '0');
            localStorage.setItem('kyrios-likes', state.likes);
            el.likeBtn.classList.toggle('liked', state.liked);
            el.likesCount.textContent = state.likes.toLocaleString('es-PE');
        });
    }
    if (el.saveBtn) {
        el.saveBtn.classList.toggle('liked', state.saved);
        el.saveBtn.addEventListener('click', () => {
            state.saved = !state.saved;
            localStorage.setItem('kyrios-saved', state.saved ? '1' : '0');
            el.saveBtn.classList.toggle('liked', state.saved);
            showToast(state.saved ? 'Publicación guardada' : 'Eliminado de guardados');
        });
    }
    if (el.commentFocus) el.commentFocus.addEventListener('click', () => el.commentInput && el.commentInput.focus());
}

/* ================= INSTALL PWA (Android / iPhone / Windows) ================= */
function detectPlatform() {
    const ua = navigator.userAgent || '';
    if (/iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) return 'iphone';
    if (/Android/i.test(ua)) return 'android';
    if (/Windows|Macintosh|Linux|CrOS/i.test(ua)) return 'windows';
    return 'android';
}

function initInstall() {
    const fab = $('#installFab');
    const modal = $('#androidModal');
    const headerBtn = $('#installHeaderBtn');
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;

    function showModal() {
        if (!modal) return;
        const platform = detectPlatform();
        selectPlatform(platform);
        modal.classList.add('show');
    }
    function hideModal() { if (modal) modal.classList.remove('show'); }
    function hideAllInstall() { if (fab) fab.classList.add('hidden'); if (headerBtn) headerBtn.style.display = 'none'; }

    function selectPlatform(platform) {
        $$('.install-tab').forEach(t => t.classList.toggle('active', t.dataset.platform === platform));
        $$('.install-pane').forEach(p => p.classList.toggle('active', p.dataset.pane === platform));
    }

    $$('.install-tab').forEach(tab => tab.addEventListener('click', () => selectPlatform(tab.dataset.platform)));

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        state.deferredPrompt = e;
        if (!isStandalone) { if (fab) fab.classList.remove('hidden'); if (headerBtn) headerBtn.style.display = ''; }
    });

    async function doInstall() {
        if (state.deferredPrompt) {
            state.deferredPrompt.prompt();
            try { await state.deferredPrompt.userChoice; } catch (e) {}
            state.deferredPrompt = null;
            hideModal();
        } else {
            showToast('Sigue los pasos de la guía para instalar en tu dispositivo');
        }
    }

    if (fab) fab.addEventListener('click', showModal);
    if (headerBtn) headerBtn.addEventListener('click', showModal);
    const installBtn = $('#androidInstall'); if (installBtn) installBtn.addEventListener('click', doInstall);
    const cancelBtn = $('#androidCancel'); if (cancelBtn) cancelBtn.addEventListener('click', hideModal);
    if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) hideModal(); });

    window.addEventListener('appinstalled', () => { hideAllInstall(); hideModal(); showToast('¡App instalada correctamente! 🎉'); });

    if (isStandalone) hideAllInstall();
    else if (!state.deferredPrompt && fab) fab.classList.remove('hidden');
}

/* ================= TOAST ================= */
let toastTimer = null;
function showToast(msg) {
    if (!el.toast) return;
    el.toast.textContent = msg;
    el.toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.toast.classList.remove('show'), 3200);
}

/* ================= MEDIA SESSION ================= */
function initMediaSession() {
    if (!('mediaSession' in navigator)) return;
    navigator.mediaSession.metadata = new MediaMetadata({
        title: CONFIG.radioName + ' · ' + CONFIG.frequency,
        artist: CONFIG.djName + ' — Cumbia · Techno · Bachata',
        album: CONFIG.project,
        artwork: [{ src: CONFIG.djImage, sizes: '512x512', type: 'image/jpeg' }]
    });
    navigator.mediaSession.setActionHandler('play', playRadio);
    navigator.mediaSession.setActionHandler('pause', pauseRadio);
    navigator.mediaSession.setActionHandler('stop', stopRadio);
}

/* ================= UTILIDADES ================= */
function escapeHtml(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m])); }
function escapeAttr(s) { return escapeHtml(s); }
function shade(hex, pct) {
    const c = hex.replace('#', '');
    const num = parseInt(c.length === 3 ? c.split('').map(x => x + x).join('') : c, 16);
    let r = (num >> 16) + Math.round(255 * pct / 100);
    let g = ((num >> 8) & 255) + Math.round(255 * pct / 100);
    let b = (num & 255) + Math.round(255 * pct / 100);
    r = Math.max(0, Math.min(255, r)); g = Math.max(0, Math.min(255, g)); b = Math.max(0, Math.min(255, b));
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

/* ================= EVENTOS ================= */
function initEvents() {
    $('#themeToggle').addEventListener('click', () => {
        const keys = Object.keys(THEMES);
        const next = keys[(keys.indexOf(state.theme) + 1) % keys.length];
        applyTheme(next); showToast('Tema: ' + THEMES[next].name);
    });
    $('#menuToggle').addEventListener('click', () => el.navMenu.classList.toggle('open'));
    $$('.nav-link').forEach(l => l.addEventListener('click', (e) => { e.preventDefault(); switchSection(l.dataset.section); }));
    document.querySelector('.logo-section').addEventListener('click', () => switchSection('inicio'));

    [el.playBtnMain, el.playPauseBtn, el.miniPlayBtn].forEach(b => { if (b) b.addEventListener('click', () => state.isPlaying ? pauseRadio() : playRadio()); });
    el.stopBtn.addEventListener('click', stopRadio);
    el.prevBtn.addEventListener('click', () => { updateMetadata(); showToast('Actualizando canción...'); });
    el.volumeSlider.addEventListener('input', (e) => setVolume(+e.target.value));

    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT') return;
        if (e.code === 'Space') { e.preventDefault(); state.isPlaying ? pauseRadio() : playRadio(); }
        if (e.key === 'ArrowUp') setVolume(Math.min(100, state.volume + 5));
        if (e.key === 'ArrowDown') setVolume(Math.max(0, state.volume - 5));
    });

    window.addEventListener('scroll', updateMiniPlayer);
    $('#refreshHistory').addEventListener('click', () => { updateMetadata(); showToast('Actualizando historial...'); });
    $$('.history-toolbar .pill[data-filter]').forEach(p => p.addEventListener('click', () => {
        $$('.history-toolbar .pill[data-filter]').forEach(x => x.classList.remove('active'));
        p.classList.add('active');
    }));

    const form = $('#commentForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const v = el.commentInput.value.trim();
        if (!v) return;
        addComment(v);
        el.commentInput.value = '';
        showToast('Comentario publicado');
        el.commentsList.scrollTop = 0;
    });

    const waBtn = $('#waGroupBtn');
    if (waBtn) waBtn.href = CONFIG.social.whatsappGroup;
    const waImg = $('#waGroupImage');
    if (waImg) waImg.src = CONFIG.groupImage;
    const headerGroupImg = $('#headerGroupImage');
    if (headerGroupImg) headerGroupImg.src = CONFIG.groupImage;
    $$('[data-social]').forEach(a => {
        const key = a.dataset.social;
        if (CONFIG.social[key]) a.href = CONFIG.social[key];
        a.target = '_blank'; a.rel = 'noopener';
    });

    window.addEventListener('online', () => showToast('Conexión restablecida'));
    window.addEventListener('offline', () => showToast('Sin conexión — modo offline'));
}

/* ================= TV EN VIVO ================= */
function initTv() {
    const video = $('#tvVideo');
    if (!video) return;
    const overlay = $('#tvOverlay');
    const streamUrl = CONFIG.tvUrl;
    let started = false;

    function setOverlay(show) { if (overlay) overlay.classList.toggle('hidden', !show); }

    video.addEventListener('play', () => { if (!started) start(); else setOverlay(false); });
    video.addEventListener('playing', () => { started = true; setOverlay(false); });
    video.addEventListener('pause', () => setOverlay(true));
    video.addEventListener('error', () => { if (!video.src && !window.__tvHls) setOverlay(true); });

    function start() {
        if (started) return;
        started = true;
        if (window.Hls && Hls.isSupported()) {
            const hls = new Hls({ enableWorker: true, lowLatencyMode: true });
            window.__tvHls = hls;
            hls.on(Hls.Events.ERROR, (e, data) => {
                if (!data.fatal) return;
                if (data.type === Hls.ErrorTypes.NETWORK_ERROR) hls.startLoad();
                else if (data.type === Hls.ErrorTypes.MEDIA_ERROR) hls.recoverMediaError();
                else {
                    hls.destroy(); window.__tvHls = null; started = false;
                    showToast('No se pudo conectar a la TV');
                }
            });
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                if (started) video.play().catch(() => {});
            });
            hls.loadSource(streamUrl);
            hls.attachMedia(video);
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = streamUrl;
            video.play().catch(() => {});
        } else {
            started = false;
            showToast('Tu navegador no soporta TV en vivo');
        }
    }

    function toggle() {
        if (!started && video.paused) { start(); return; }
        if (video.paused) {
            if (!started) start();
            else video.play().catch(() => start());
        } else {
            video.pause();
        }
    }

    const playBtn = $('#tvPlayBtn');
    if (playBtn) playBtn.addEventListener('click', toggle);
    if (overlay) overlay.addEventListener('click', toggle);
    const playBtn2 = $('#tvPlayBtn2');
    if (playBtn2) playBtn2.addEventListener('click', toggle);
    const fsBtn = $('#tvFullscreenBtn');
    if (fsBtn) fsBtn.addEventListener('click', () => {
        const card = $('#tvCard');
        if (!card) return;
        if (document.fullscreenElement) { if (document.exitFullscreen) document.exitFullscreen(); }
        else if (card.requestFullscreen) card.requestFullscreen();
        else if (card.webkitRequestFullscreen) card.webkitRequestFullscreen();
    });
}

/* ================= SERVICE WORKER ================= */
function registerSW() {
    if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}

/* ================= INIT ================= */
document.addEventListener('DOMContentLoaded', () => {
    Object.assign(el, {
        themeToggle: $('#themeToggle'), menuToggle: $('#menuToggle'), navMenu: $('#navMenu'),
        playBtnMain: $('#playBtnMain'), playPauseBtn: $('#playPauseBtn'), stopBtn: $('#stopBtn'), prevBtn: $('#prevBtn'),
        miniPlayBtn: $('#miniPlayBtn'), vinyl: $('#vinyl'), vinylArt: $('#vinylArt'), volumeSlider: $('#volumeSlider'),
        volumeValue: $('#volumeValue'), streamStatus: $('#streamStatus'), currentSong: $('#currentSong'),
        playerTitle: $('#playerTitle'), playerArtist: $('#playerArtist'), playerProgram: $('#playerProgram'),
        miniPlayer: $('#miniPlayer'), miniTitle: $('#miniTitle'), miniArt: $('#miniArt'), toast: $('#toast'),
        starsContainer: $('#starsContainer'), scheduleDays: $('#scheduleDays'), scheduleGrid: $('#scheduleGrid'),
        historyList: $('#historyList'), historyUpdated: $('#historyUpdated'), songScroller: $('#songScroller'),
        commentsList: $('#commentsList'), commentsCount: $('#commentsCount'), commentForm: $('#commentForm'),
        commentInput: $('#commentInput'), likeBtn: $('#likeBtn'), likesCount: $('#likesCount'), saveBtn: $('#saveBtn'),
        commentFocus: $('#commentFocus'), postImage: $('#postImage'), postNowTitle: $('#postNowTitle'),
        listenersCount: $('#listenersCount'), statusListeners: $('#statusListeners'), bitrateVal: $('#bitrateVal')
    });

    applyTheme(state.theme);
    setVolume(state.volume);
    createStars();
    initThemeSelector();
    renderDayPills();
    renderSongScroller();
    renderComments();
    initPost();
    initEvents();
    initInstall();
    initTv();
    initMediaSession();
    registerSW();
    updateStatus(false);
    updateMetadata();

    setInterval(() => { if (state.isPlaying) updateMetadata(); }, 30000);
    setInterval(markCurrentProgram, 60000);

    console.log('%c🎧 DJ WILMER — LUYA AMAZONAS CAMPORREDONDO', 'background:linear-gradient(135deg,#ff6f00,#7c4dff,#e91e63);color:#fff;font-size:16px;font-weight:bold;padding:10px 16px;border-radius:8px;');
    console.log('%cPlayer Pro v3.0 · Cumbia · Techno · Bachata', 'color:#ff6f00;font-size:12px;font-weight:bold;');
});
