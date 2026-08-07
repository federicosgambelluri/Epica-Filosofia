# Ripasso — Epica & Filosofia

Sito statico (HTML + CSS + JavaScript, nessuna dipendenza) per ripassare i riassunti di
**Iliade**, **Odissea** ed **Eneide**, con la sezione **Filosofia** già predisposta.

## Cosa c'è dentro

```
index.html               home con le due sezioni
epica.html               elenco delle opere di epica
filosofia.html           elenco delle opere di filosofia (vuoto per ora)
opera.html               pagina di lettura, la stessa per ogni opera (?id=iliade, ?id=odissea, …)
assets/css/style.css     tutto lo stile, temi chiaro e scuro
assets/js/app.js         tema, progressi, card
assets/js/opera.js       rendering della pagina di lettura
assets/js/data-epica.js  ← i testi dell'epica
assets/js/data-filosofia.js ← qui vanno i testi di filosofia
```

## Funzioni

- **Canti a fisarmonica** con indice laterale sempre visibile, che evidenzia dove sei.
- **Ricerca nel testo** di tutti i canti e dei personaggi (premi `/` per andarci al volo, `Esc` per uscire).
  Ignora gli accenti: cercare `perche` trova anche `perché`.
- **Segna come ripassato**: ogni canto si può spuntare, la percentuale si aggiorna e resta
  salvata nel browser (localStorage). Compare anche sulle card della home.
- **Tema chiaro / scuro** con il pulsante in alto a destra, ricordato tra una visita e l'altra.
- **Espandi tutti / Chiudi tutti** e link diretti a un canto (es. `opera.html?id=iliade#c22`).
- Responsive per telefono, e stampabile (Cmd+P apre tutti i canti e nasconde i menu).

## Che cosa c'è nella sezione Filosofia

Percorso costruito sull'indice del manuale (età arcaica e classica), 74 capitoli:

1. **Introduzione** — che cos'è la filosofia, mito e lógos, i rami, le fonti, il metodo di studio.
2. **I Presocratici** — nascita della filosofia, Mileto, pitagorici, Eraclito, eleati, pluralisti, atomismo.
3. **I Sofisti e Socrate** — Protagora, Gorgia, nómos/physis, metodo socratico, processo, scuole minori.
4. **Platone** — idee, reminiscenza, anima, eros, Repubblica, caverna, ultimi dialoghi.
5. **Aristotele** — sostanza, quattro cause, potenza e atto, Dio, logica, fisica, etica, politica, poetica.

Ogni capitolo ha un riquadro **«In due parole»** con la sintesi, e ogni unità un glossario
dei concetti chiave e delle opere.

## Aggiungere altri argomenti (o un altro libro)

1. Apri `assets/js/data-filosofia.js`.
2. Copia il template che trovi nel commento in cima e incollalo dentro `const FILOSOFIA = { … }`.
3. Aggiungi l'`id` che hai scelto dentro `FILOSOFIA_ORDINE`.
4. Ricarica la pagina: indice, ricerca e progressi funzionano da soli.

I campi si chiamano `canti` e `personaggi` anche in filosofia (valgono come
"capitoli" e "concetti chiave"): il sito cambia le etichette da solo.

Nel testo di ogni capitolo puoi usare una formattazione minima:

| Scrivi | Ottieni |
|---|---|
| riga vuota | nuovo paragrafo |
| `- voce` a inizio riga | elenco puntato |
| `**testo**` | **grassetto** |
| `*testo*` | *corsivo* |
| campo `chiave: "..."` | riquadro «In due parole» in cima |
| campo `opere: "..."` | riga in corsivo sotto il titolo |

## Pubblicare su GitHub Pages

```bash
cd ripasso
git init
git add .
git commit -m "Sito di ripasso: epica e filosofia"
git branch -M main
git remote add origin https://github.com/TUO-UTENTE/TUO-REPO.git
git push -u origin main
```

Poi su GitHub: **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)`**.
Dopo un minuto il sito è online su `https://TUO-UTENTE.github.io/TUO-REPO/`.

> Se preferisci l'indirizzo `https://TUO-UTENTE.github.io/` senza sottocartella, chiama il
> repository esattamente `TUO-UTENTE.github.io`.

## Provarlo in locale

Basta aprire `index.html` con doppio clic. Per un test più fedele:

```bash
cd ripasso
python3 -m http.server 8000
# poi apri http://localhost:8000
```
