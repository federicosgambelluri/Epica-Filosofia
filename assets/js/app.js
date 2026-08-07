/* ============================================================
   APP — funzioni condivise (tema, progressi, card, utilità)
   ============================================================ */

/* ---------- Memoria sicura ----------
   Alcuni browser bloccano localStorage con i file aperti da disco (file://)
   o in navigazione privata: qui non deve mai rompersi il sito. */
const Memoria = {
  disponibile: (() => {
    try { const k = "__test__"; localStorage.setItem(k, "1"); localStorage.removeItem(k); return true; }
    catch { return false; }
  })(),
  _fallback: new Map(),
  get(k) {
    try { return this.disponibile ? localStorage.getItem(k) : (this._fallback.get(k) ?? null); }
    catch { return null; }
  },
  set(k, v) {
    try { this.disponibile ? localStorage.setItem(k, v) : this._fallback.set(k, v); } catch { /* ignora */ }
  },
  del(k) {
    try { this.disponibile ? localStorage.removeItem(k) : this._fallback.delete(k); } catch { /* ignora */ }
  }
};

/* ---------- Tema chiaro/scuro ---------- */
const Tema = {
  key: "ripasso:tema",
  init() {
    // Il tema chiaro ("pagina di libro") è quello predefinito:
    // si passa allo scuro solo se lo si è scelto esplicitamente.
    this.set(Memoria.get(this.key) || "light", false);
    document.addEventListener("click", (e) => {
      if (e.target.closest("[data-toggle-tema]")) this.toggle();
    });
  },
  set(valore, salva = true) {
    document.documentElement.setAttribute("data-theme", valore);
    if (salva) Memoria.set(this.key, valore);
  },
  toggle() {
    const attuale = document.documentElement.getAttribute("data-theme");
    this.set(attuale === "dark" ? "light" : "dark");
  }
};

/* ---------- Progressi di ripasso (localStorage) ---------- */
const Progressi = {
  chiave: (operaId) => `ripasso:progresso:${operaId}`,
  leggi(operaId) {
    try { return new Set(JSON.parse(Memoria.get(this.chiave(operaId)) || "[]")); }
    catch { return new Set(); }
  },
  salva(operaId, set) {
    Memoria.set(this.chiave(operaId), JSON.stringify([...set]));
  },
  toggle(operaId, n) {
    const set = this.leggi(operaId);
    set.has(n) ? set.delete(n) : set.add(n);
    this.salva(operaId, set);
    return set;
  },
  azzera(operaId) { Memoria.del(this.chiave(operaId)); },
  percentuale(opera) {
    const totale = Utils.totaleCanti(opera);
    if (!totale) return 0;
    return Math.round((this.leggi(opera.id).size / totale) * 100);
  }
};

/* ---------- Utilità ---------- */
const Utils = {
  totaleCanti: (opera) => (opera.parti || []).reduce((s, p) => s + p.canti.length, 0),
  tuttiICanti: (opera) => (opera.parti || []).flatMap((p) => p.canti),
  esc(s = "") {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  },
  /* rimuove accenti e mette in minuscolo, per la ricerca */
  norm(s = "") {
    return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  },
  /* evidenzia il termine cercato in un testo già "escapato" */
  evidenzia(html, query) {
    if (!query) return html;
    const q = query.trim();
    if (q.length < 2) return html;
    const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    return html.replace(re, "<mark>$1</mark>");
  },
  opera(id) { return (typeof EPICA !== "undefined" && EPICA[id]) || (typeof FILOSOFIA !== "undefined" && FILOSOFIA[id]) || null; },
  sezioneDi(id) { return (typeof EPICA !== "undefined" && EPICA[id]) ? "epica" : "filosofia"; }
};

/* ---------- Card delle opere ---------- */
function renderCard(opera) {
  const totale = Utils.totaleCanti(opera);
  const fatti = Progressi.leggi(opera.id).size;
  const pct = totale ? Math.round((fatti / totale) * 100) : 0;
  const tags = (opera.tag || []).map((t) => `<span class="tag">${Utils.esc(t)}</span>`).join("");
  return `
    <a class="card" href="opera.html?id=${encodeURIComponent(opera.id)}" data-colore="${opera.colore || "oro"}">
      <span class="kicker">${Utils.esc(opera.autore || "")}</span>
      <h3>${Utils.esc(opera.titolo)}</h3>
      <p class="sub">${Utils.esc(opera.sottotitolo || "")}</p>
      <p class="desc">${Utils.esc(opera.epigrafe || "")}</p>
      <div class="tags">${tags}</div>
      <div class="card-foot">
        <div class="mini-prog">
          <div class="bar"><i style="width:${pct}%"></i></div>
          <small>${fatti}/${totale} ripassati · ${pct}%</small>
        </div>
        <span class="go">Apri <span>→</span></span>
      </div>
    </a>`;
}

function renderGriglia(contenitore, dati, ordine, messaggioVuoto) {
  const el = document.querySelector(contenitore);
  if (!el) return;
  const lista = (ordine && ordine.length ? ordine : Object.keys(dati || {}))
    .map((id) => (dati || {})[id])
    .filter(Boolean);

  if (!lista.length) { el.innerHTML = messaggioVuoto || ""; return; }
  el.innerHTML = lista.map(renderCard).join("");
}

/* ---------- Bottone "torna su" ---------- */
function initTopButton() {
  const btn = document.querySelector(".top-btn");
  if (!btn) return;
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  const check = () => btn.classList.toggle("show", window.scrollY > 500);
  window.addEventListener("scroll", check, { passive: true });
  check();
}

/* ---------- Anno nel footer ---------- */
function initAnno() {
  document.querySelectorAll("[data-anno]").forEach((el) => { el.textContent = new Date().getFullYear(); });
}

/* ---------- Avvio ---------- */
Tema.init();
document.addEventListener("DOMContentLoaded", () => {
  initTopButton();
  initAnno();
});
