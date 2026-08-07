/* ============================================================
   OPERA — rendering della pagina di dettaglio (opera.html?id=…)
   ============================================================ */

(function () {
  const params = new URLSearchParams(location.search);
  const id = params.get("id") || "";
  const opera = Utils.opera(id);
  const root = document.getElementById("opera-root");

  /* --- opera inesistente --- */
  if (!opera) {
    root.innerHTML = `
      <div class="wrap section">
        <div class="empty">
          <div class="big">🏛️</div>
          <h3>Opera non trovata</h3>
          <p>L'indirizzo non corrisponde a nessuna opera disponibile.</p>
          <p style="margin-top:18px"><a class="btn" href="index.html">← Torna alla home</a></p>
        </div>
      </div>`;
    return;
  }

  document.title = `${opera.titolo} — Ripasso`;
  const sezione = Utils.sezioneDi(id);
  const paginaSezione = sezione === "epica" ? "epica.html" : "filosofia.html";
  const nomeSezione = sezione === "epica" ? "Epica" : "Filosofia";
  const etichettaUnita = sezione === "epica" ? (opera.id === "eneide" ? "Libri" : "Canti") : "Capitoli";
  const etichettaGloss = sezione === "epica" ? "Personaggi" : "Concetti";

  const totale = Utils.totaleCanti(opera);
  let progresso = Progressi.leggi(opera.id);

  /* ------------------------------------------------ MARKUP ------- */
  const meta = [
    opera.epoca && `<span><b>Epoca:</b> ${Utils.esc(opera.epoca)}</span>`,
    opera.lingua && `<span><b>Testo:</b> ${Utils.esc(opera.lingua)}</span>`,
    `<span><b>${etichettaUnita}:</b> ${totale}</span>`
  ].filter(Boolean).join("");

  root.innerHTML = `
    <header class="opera-hero">
      <div class="wrap">
        <nav class="crumb"><a href="index.html">Home</a> › <a href="${paginaSezione}">${nomeSezione}</a> › <span>${Utils.esc(opera.titolo)}</span></nav>
        <p class="autore">${Utils.esc(opera.autore || "")}</p>
        <h1>${Utils.esc(opera.titolo)}</h1>
        <p class="sub">${Utils.esc(opera.sottotitolo || "")}</p>
        ${opera.epigrafe ? `<blockquote class="epigrafe">${Utils.esc(opera.epigrafe)}</blockquote>` : ""}
        <div class="meta-row">${meta}</div>
        <div class="progress-box">
          <span class="lbl">Ripasso</span>
          <span class="track"><i id="track-fill"></i></span>
          <span class="pct" id="track-pct">0%</span>
          <button class="link-reset" id="btn-reset">azzera</button>
        </div>
      </div>
    </header>

    <div class="toolbar">
      <div class="wrap">
        <div class="tabs" role="tablist">
          <button role="tab" data-tab="canti" aria-selected="true">${etichettaUnita}</button>
          <button role="tab" data-tab="personaggi" aria-selected="false">${etichettaGloss}</button>
        </div>
        <button class="ghost" id="btn-espandi">Espandi tutti</button>
        <div class="search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
          <input type="search" id="q" placeholder="Cerca nel testo…" autocomplete="off">
          <kbd>/</kbd>
        </div>
      </div>
    </div>

    <div class="wrap layout">
      <aside class="sidebar" id="sidebar"></aside>
      <main>
        <section id="pan-canti"></section>
        <section id="pan-personaggi" hidden></section>
      </main>
    </div>`;

  root.setAttribute("data-colore", opera.colore || "oro");

  /* ---------------------------------------- CORPO DEL TESTO ------
     Il testo dei riassunti accetta una formattazione minima:
       riga vuota  -> nuovo paragrafo
       "- voce"    -> elenco puntato
       **grassetto**  *corsivo*
  --------------------------------------------------------------- */
  function inline(t) {
    return t
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/(^|[\s(«"'])\*(?!\s)(.+?)\*/g, "$1<em>$2</em>");
  }

  function corpo(testo, query) {
    let primo = true;
    const fmt = (t) => inline(Utils.evidenzia(Utils.esc(t), query));
    const out = [];

    String(testo).split(/\n\s*\n/).forEach((blocco) => {
      const righe = blocco.split("\n").map((r) => r.trim()).filter(Boolean);
      // dentro un blocco si alternano righe normali e righe di elenco ("- ")
      let buffer = [];
      let inElenco = false;
      const scarica = () => {
        if (!buffer.length) return;
        if (inElenco) {
          out.push(`<ul class="punti">${buffer.map((r) => `<li>${fmt(r)}</li>`).join("")}</ul>`);
        } else {
          const classe = primo ? ' class="primo"' : "";
          primo = false;
          out.push(`<p${classe}>${fmt(buffer.join(" "))}</p>`);
        }
        buffer = [];
      };
      righe.forEach((r) => {
        const elenco = r.startsWith("- ");
        if (elenco !== inElenco) { scarica(); inElenco = elenco; }
        buffer.push(elenco ? r.slice(2) : r);
      });
      scarica();
    });

    return out.join("");
  }

  /* ------------------------------------------------ CANTI -------- */
  function htmlCanti(query = "") {
    const q = Utils.norm(query);
    let trovati = 0;
    const parti = opera.parti.map((parte, pi) => {
      const canti = parte.canti.filter((c) => {
        if (!q) return true;
        return Utils.norm(`${c.romano} ${c.n} ${c.titolo} ${c.chiave || ""} ${c.opere || ""} ${c.testo}`).includes(q);
      });
      if (!canti.length) return "";
      trovati += canti.length;
      const items = canti.map((c) => {
        const done = progresso.has(c.n);
        const titolo = Utils.evidenzia(Utils.esc(c.titolo || ""), query);
        const testo = corpo(c.testo, query);
        const chiave = c.chiave
          ? `<div class="chiave"><b>In due parole</b><span>${Utils.evidenzia(Utils.esc(c.chiave), query)}</span></div>`
          : "";
        const nota = c.opere ? `<span class="opera-nota">${Utils.esc(c.opere)}</span>` : "";
        return `
          <article class="canto${done ? " done" : ""}${q ? " open" : ""}" id="c${c.n}" data-n="${c.n}">
            <button class="canto-head" aria-expanded="${q ? "true" : "false"}">
              <span class="canto-num">${Utils.esc(c.romano)}</span>
              <span class="canto-title">
                <small>${etichettaUnita.replace(/i$/, "o")} ${Utils.esc(c.romano)}</small>
                <strong>${titolo}</strong>
                ${nota}
              </span>
              <svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div class="canto-body">
              ${chiave}${testo}
              <div class="canto-actions">
                <button class="check" data-check="${c.n}">
                  <span class="box">${done ? "✓" : ""}</span>${done ? "Ripassato" : "Segna come ripassato"}
                </button>
              </div>
            </div>
          </article>`;
      }).join("");
      return `
        <section class="parte" id="p${pi}">
          <div class="parte-head">
            <h2>${Utils.esc(parte.titolo)}</h2>
            <span>${Utils.esc(parte.sottotitolo || "")}</span>
          </div>
          ${items}
        </section>`;
    }).join("");

    if (!trovati) {
      return `<div class="empty"><div class="big">🔍</div><h3>Nessun risultato</h3><p>Nessun ${etichettaUnita.toLowerCase().replace(/i$/, "o")} contiene «${Utils.esc(query)}».</p></div>`;
    }
    return parti;
  }

  /* ------------------------------------------- PERSONAGGI -------- */
  function htmlPersonaggi(query = "") {
    const q = Utils.norm(query);
    const gruppi = (opera.personaggi || []).map((g, gi) => {
      const voci = g.voci.filter((v) => !q || Utils.norm(`${v.nome} ${(v.alt || []).join(" ")} ${v.desc}`).includes(q));
      if (!voci.length) return "";
      const cards = voci.map((v) => `
        <div class="pers">
          <h4>${Utils.evidenzia(Utils.esc(v.nome), query)}</h4>
          ${(v.alt && v.alt.length) ? `<div class="alt">${v.alt.map((a) => `<span>${Utils.esc(a)}</span>`).join("")}</div>` : ""}
          <p>${Utils.evidenzia(Utils.esc(v.desc || ""), query)}</p>
        </div>`).join("");
      return `
        <section class="gruppo" id="g${gi}">
          <h3>${Utils.esc(g.gruppo)}</h3>
          ${g.nota ? `<p class="g-nota">${Utils.esc(g.nota)}</p>` : ""}
          <div class="pers-grid">${cards}</div>
        </section>`;
    }).join("");

    if (!(opera.personaggi || []).length) {
      return `<div class="empty"><div class="big">📜</div><h3>Ancora nulla qui</h3><p>Aggiungi le voci nel campo <code>personaggi</code> del file dei dati.</p></div>`;
    }
    if (!gruppi.trim()) {
      return `<div class="empty"><div class="big">🔍</div><h3>Nessun risultato</h3><p>Nessuna voce contiene «${Utils.esc(query)}».</p></div>`;
    }
    const nota = opera.notaPersonaggi ? `<p class="nota">${Utils.esc(opera.notaPersonaggi)}</p>` : "";
    return nota + gruppi;
  }

  /* ---------------------------------------------- SIDEBAR -------- */
  function renderSidebar() {
    const el = document.getElementById("sidebar");
    if (tabAttiva === "canti") {
      el.innerHTML = opera.parti.map((parte, pi) => `
        <h4>${Utils.esc(parte.sottotitolo || parte.titolo)}</h4>
        <ul>${parte.canti.map((c) => `
          <li><a href="#c${c.n}" data-goto="c${c.n}" class="${progresso.has(c.n) ? "done" : ""}">
            <span class="num">${Utils.esc(c.romano)}</span>${Utils.esc(c.titolo || "")}
          </a></li>`).join("")}</ul>`).join("");
    } else {
      el.innerHTML = `<h4>Indice</h4><ul>${(opera.personaggi || []).map((g, gi) =>
        `<li><a href="#g${gi}" data-goto="g${gi}">${Utils.esc(g.gruppo)}</a></li>`).join("")}</ul>`;
    }
  }

  /* -------------------------------------------- PROGRESSO -------- */
  function aggiornaProgresso() {
    const pct = totale ? Math.round((progresso.size / totale) * 100) : 0;
    document.getElementById("track-fill").style.width = pct + "%";
    document.getElementById("track-pct").textContent = pct + "%";
  }

  /* ------------------------------------------------ STATO -------- */
  let tabAttiva = "canti";
  const panCanti = document.getElementById("pan-canti");
  const panPers = document.getElementById("pan-personaggi");
  const input = document.getElementById("q");

  function disegna() {
    const q = input.value.trim();
    if (tabAttiva === "canti") panCanti.innerHTML = htmlCanti(q);
    else panPers.innerHTML = htmlPersonaggi(q);
    renderSidebar();
    aggiornaProgresso();
    aggiornaBtnEspandi();
    osserva();
  }

  function aggiornaBtnEspandi() {
    const btn = document.getElementById("btn-espandi");
    btn.hidden = tabAttiva !== "canti";
    const aperti = panCanti.querySelectorAll(".canto.open").length;
    const totCanti = panCanti.querySelectorAll(".canto").length;
    btn.textContent = (totCanti && aperti === totCanti) ? "Chiudi tutti" : "Espandi tutti";
  }

  /* ------------------------------------------------ EVENTI ------- */
  // tab
  document.querySelectorAll(".tabs button").forEach((b) => {
    b.addEventListener("click", () => {
      tabAttiva = b.dataset.tab;
      document.querySelectorAll(".tabs button").forEach((x) => x.setAttribute("aria-selected", String(x === b)));
      panCanti.hidden = tabAttiva !== "canti";
      panPers.hidden = tabAttiva !== "personaggi";
      disegna();
    });
  });

  // ricerca (con piccolo debounce)
  let t;
  input.addEventListener("input", () => { clearTimeout(t); t = setTimeout(disegna, 160); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== input) { e.preventDefault(); input.focus(); }
    if (e.key === "Escape" && document.activeElement === input) { input.value = ""; input.blur(); disegna(); }
  });

  // apertura/chiusura canti + spunta
  panCanti.addEventListener("click", (e) => {
    const head = e.target.closest(".canto-head");
    if (head) {
      const art = head.closest(".canto");
      const aperto = art.classList.toggle("open");
      head.setAttribute("aria-expanded", String(aperto));
      aggiornaBtnEspandi();
      return;
    }
    const check = e.target.closest("[data-check]");
    if (check) {
      const n = Number(check.dataset.check);
      progresso = Progressi.toggle(opera.id, n);
      const art = check.closest(".canto");
      const done = progresso.has(n);
      art.classList.toggle("done", done);
      check.innerHTML = `<span class="box">${done ? "✓" : ""}</span>${done ? "Ripassato" : "Segna come ripassato"}`;
      document.querySelectorAll(`[data-goto="c${n}"]`).forEach((a) => a.classList.toggle("done", done));
      aggiornaProgresso();
    }
  });

  // espandi / chiudi tutti
  document.getElementById("btn-espandi").addEventListener("click", () => {
    const canti = [...panCanti.querySelectorAll(".canto")];
    const apri = canti.some((c) => !c.classList.contains("open"));
    canti.forEach((c) => {
      c.classList.toggle("open", apri);
      c.querySelector(".canto-head").setAttribute("aria-expanded", String(apri));
    });
    aggiornaBtnEspandi();
  });

  // azzera progressi
  document.getElementById("btn-reset").addEventListener("click", () => {
    if (!confirm(`Azzerare i progressi di ${opera.titolo}?`)) return;
    Progressi.azzera(opera.id);
    progresso = new Set();
    disegna();
  });

  // click sull'indice: apri il canto di destinazione
  document.getElementById("sidebar").addEventListener("click", (e) => {
    const a = e.target.closest("[data-goto]");
    if (!a || !a.dataset.goto.startsWith("c")) return;
    const art = document.getElementById(a.dataset.goto);
    if (art && !art.classList.contains("open")) {
      art.classList.add("open");
      art.querySelector(".canto-head").setAttribute("aria-expanded", "true");
      aggiornaBtnEspandi();
    }
  });

  // evidenzia nell'indice la sezione visibile (se il browser lo supporta)
  const osservatore = ("IntersectionObserver" in window) && new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      document.querySelectorAll(".sidebar a").forEach((a) => a.classList.remove("is-active"));
      const link = document.querySelector(`.sidebar [data-goto="${en.target.id}"]`);
      if (link) {
        link.classList.add("is-active");
        const box = document.getElementById("sidebar");
        const r = link.getBoundingClientRect(), rb = box.getBoundingClientRect();
        if (r.top < rb.top || r.bottom > rb.bottom) link.scrollIntoView({ block: "nearest" });
      }
    });
  }, { rootMargin: "-140px 0px -70% 0px" });

  function osserva() {
    if (!osservatore) return;
    osservatore.disconnect();
    document.querySelectorAll(".canto, .gruppo").forEach((el) => osservatore.observe(el));
  }

  /* ------------------------------------------------ AVVIO -------- */
  disegna();

  // apri direttamente il canto indicato nell'hash (es. opera.html?id=iliade#c22)
  if (location.hash) {
    const art = document.querySelector(location.hash);
    if (art && art.classList.contains("canto")) {
      art.classList.add("open");
      art.querySelector(".canto-head").setAttribute("aria-expanded", "true");
      setTimeout(() => art.scrollIntoView({ block: "start" }), 60);
    }
  }
})();
