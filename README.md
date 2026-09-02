# Ripasso — Epica & Filosofia

Sito statico (HTML + CSS + JavaScript, nessuna dipendenza) per ripassare i riassunti di
**Iliade**, **Odissea** ed **Eneide** e tutto il percorso di **Filosofia**, dai presocratici a Hegel.

## Cosa c'è dentro

```
index.html               home con le due sezioni
epica.html               elenco delle opere di epica
filosofia.html           elenco delle unità di filosofia
opera.html               pagina di lettura, la stessa per ogni opera (?id=iliade, ?id=odissea, …)
assets/css/style.css     tutto lo stile, temi chiaro e scuro
assets/js/app.js         tema, progressi, card
assets/js/opera.js       rendering della pagina di lettura
assets/js/data-epica.js  ← i testi dell'epica
assets/js/data-filosofia.js    filosofia · età arcaica e classica
assets/js/data-filosofia-1b.js filosofia · dall'ellenismo alla scolastica
assets/js/data-filosofia-2a.js filosofia · dall'Umanesimo all'empirismo
assets/js/data-filosofia-2b.js filosofia · dall'Illuminismo a Hegel
```

I quattro file di filosofia seguono i volumi del manuale (Abbagnano–Fornero,
*La ricerca del pensiero*). Il primo definisce `FILOSOFIA` e `FILOSOFIA_ORDINE`,
gli altri vi aggiungono le proprie unità con `Object.assign` e `FILOSOFIA_ORDINE.push`.

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

**17 unità, 215 capitoli, oltre 500 voci di glossario**, in ordine storico.

*Età arcaica e classica* (`data-filosofia.js`)

1. **Introduzione** — che cos'è la filosofia, mito e lógos, i rami, le fonti, il metodo di studio.
2. **I Presocratici** — nascita della filosofia, Mileto, pitagorici, Eraclito, eleati, pluralisti, atomismo.
3. **I Sofisti e Socrate** — Protagora, Gorgia, nómos/physis, metodo socratico, processo, scuole minori.
4. **Platone** — idee, reminiscenza, anima, eros, Repubblica, caverna, ultimi dialoghi.
5. **Aristotele** — sostanza, quattro cause, potenza e atto, Dio, logica, fisica, etica, politica, poetica.

*Dall'ellenismo alla scolastica* (`data-filosofia-1b.js`)

6. **L'età ellenistica** — Alessandria e la scienza, stoicismo, epicureismo, scetticismo, Plotino.
7. **La patristica e Agostino** — cristianesimo e filosofia, interiorità, tempo, male, grazia, le due città.
8. **La scolastica e Tommaso** — fede e ragione, universali, Anselmo, le cinque vie, Duns Scoto, Ockham.

*Dall'Umanesimo all'empirismo* (`data-filosofia-2a.js`)

9. **Umanesimo e Rinascimento** — dignità dell'uomo, Cusano, Ficino, Pico, Riforma, Machiavelli, Bruno.
10. **La rivoluzione scientifica** — da Copernico a Newton, il metodo e il processo di Galilei, Bacone.
11. **Cartesio e il razionalismo** — metodo, dubbio, cogito, le due sostanze, occasionalismo.
12. **Pascal, Spinoza, Leibniz** — divertissement e scommessa, Deus sive Natura, monadi e teodicea.
13. **L'empirismo inglese** — Hobbes, Locke, Berkeley, Hume: causalità, io, morale, tolleranza.

*Dall'Illuminismo a Hegel* (`data-filosofia-2b.js`)

14. **Vico e l'Illuminismo** — verum ipsum factum, i Lumi, Voltaire, l'Enciclopedia, Rousseau.
15. **Kant** — le tre Critiche: sintetico a priori, imperativo categorico, bello e sublime, pace perpetua.
16. **Romanticismo e idealismo** — l'infinito, Fichte e l'Io, Schelling e la natura, l'arte.
17. **Hegel** — dialettica, Fenomenologia, servo e padrone, eticità, storia, spirito assoluto.

Ogni capitolo ha un riquadro **«In due parole»** con la sintesi, e ogni unità un glossario
dei concetti chiave e delle opere.

## Aggiungere altri argomenti (o un altro libro)

1. Apri il file del volume che ti serve (`assets/js/data-filosofia*.js`).
2. Copia la struttura di un'unità esistente e incollala nel blocco `Object.assign(FILOSOFIA, { … })`.
3. Aggiungi l'`id` che hai scelto nella chiamata `FILOSOFIA_ORDINE.push(…)` in fondo al file.
4. Se crei un file nuovo, aggiungi il suo `<script>` in `index.html`, `epica.html`,
   `filosofia.html` e `opera.html`, dopo `data-filosofia.js`.
5. Ricarica la pagina: indice, ricerca e progressi funzionano da soli.

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
