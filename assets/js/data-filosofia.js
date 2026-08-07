/* ============================================================
   DATI — FILOSOFIA
   Percorso costruito seguendo l'indice del manuale (Abbagnano–Fornero,
   "I Classici della Filosofia"): età arcaica e età classica.

   Struttura di ogni unità:
     id, titolo, autore, sottotitolo, epoca, lingua, tag[], epigrafe, colore
     parti: [{ titolo, sottotitolo, canti: [{ n, romano, titolo, opere?, chiave?, testo }] }]
     personaggi: [{ gruppo, nota, voci: [{ nome, alt[], desc }] }]

   Nel campo "testo" si può usare una formattazione minima:
     riga vuota      -> nuovo paragrafo
     "- voce"        -> elenco puntato
     **grassetto**   *corsivo*
   Il campo "chiave" compare come riquadro "In due parole" in cima al testo.
   ============================================================ */

const FILOSOFIA = {

  /* ------------------------------------------------ INTRODUZIONE */
  introduzione: {
    id: "introduzione",
    titolo: "Introduzione",
    autore: "Prima di cominciare",
    sottotitolo: "Che cos'è la filosofia e come si studia",
    epoca: "Le basi",
    lingua: "Da leggere per prima",
    tag: ["Guida", "Metodo", "Parole chiave"],
    epigrafe: "La filosofia non è un elenco di opinioni strane: è un allenamento a fare domande precise.",
    colore: "viola",
    parti: [
      {
        titolo: "Le basi",
        sottotitolo: "Da leggere prima di tutto il resto",
        canti: [
          {
            n: 1, romano: "1", titolo: "Che cos'è la filosofia",
            chiave: "«Amore per il sapere»: non il possesso della verità, ma la ricerca continua, fatta con ragionamenti che chiunque può controllare.",
            testo: `La parola *filosofia* viene dal greco **philéin** (amare) e **sophía** (sapere): letteralmente «amore per il sapere». Secondo un aneddoto antico fu Pitagora a coniarla: nessun uomo è *sophós* (sapiente) davvero, perché la sapienza piena appartiene agli dei; l'uomo può al massimo essere *philósophos*, amante della sapienza, uno che la insegue senza mai possederla del tutto.

Questa etimologia dice già due cose importanti. La prima: la filosofia è una **ricerca**, non un catalogo di risultati da imparare a memoria. La seconda: è una ricerca **che si sa incompiuta**, e quindi accetta di essere discussa.

Che cosa distingue un ragionamento filosofico da un'opinione qualsiasi? Tre cose:
- **Le domande sono generali**: non «perché è caduta questa pietra», ma «che cos'è il movimento»; non «questo è giusto?», ma «che cos'è la giustizia».
- **Le risposte vanno argomentate**: non basta dire «è così», bisogna dire *perché*, e con ragioni che l'interlocutore possa verificare da sé.
- **Nulla è escluso dalla critica**: anche le credenze più ovvie — gli dei, le leggi, i sensi, il linguaggio — possono essere messe in discussione.

Per questo studiare filosofia non serve solo a «sapere cosa pensava Platone». Serve a riconoscere la struttura di un ragionamento, a distinguere una prova da una suggestione, e a capire da dove vengono le idee che diamo per scontate.`
          },
          {
            n: 2, romano: "2", titolo: "Dal mito al lógos",
            chiave: "Il mito spiega il mondo raccontando storie di dei; la filosofia lo spiega con cause naturali e ragionamenti verificabili. È il passaggio decisivo.",
            testo: `Prima della filosofia, i Greci spiegavano il mondo con il **mito**. Perché c'è il temporale? Perché Zeus è adirato. Perché il mare è in tempesta? Perché Poseidone è offeso. Il mito è un racconto: ha personaggi, volontà, capricci.

Intorno al VI secolo a.C., in Ionia, alcuni uomini cominciano a rispondere in un modo nuovo, con il **lógos** (parola, ragione, discorso ragionato). Il temporale non è l'ira di un dio: è aria che si muove. Il mondo non è governato da volontà personali, ma da **cause naturali e regolari**.

Le differenze fondamentali:
- Il mito **racconta**, il lógos **spiega**: uno narra una vicenda, l'altro cerca la causa.
- Il mito si accetta per **tradizione** e autorità; il lógos chiede di essere **dimostrato** e può essere confutato.
- Il mito attribuisce gli eventi a **volontà arbitrarie**; il lógos a **leggi costanti**, che valgono sempre e per tutti.
- Il mito è **anonimo e collettivo**; la filosofia ha **autori con un nome**, che si criticano l'un l'altro (Anassimandro corregge Talete, Eraclito attacca Pitagora).

Attenzione però: non è un divorzio netto. I filosofi greci continueranno a usare miti — Platone li usa moltissimo — ma come *immagini* al servizio di un ragionamento, non come spiegazione ultima. Il mito diventa uno strumento, non più un'autorità.`
          },
          {
            n: 3, romano: "3", titolo: "Le grandi domande e i rami della filosofia",
            chiave: "Cinque grandi domande: che cos'è la realtà, che cosa posso conoscere, come devo agire, come si convive, che cos'è il bello. Più la logica, che è lo strumento.",
            testo: `Tutta la storia della filosofia gira attorno a poche domande ricorrenti. Conoscerne i nomi tecnici aiuta a orientarsi subito quando si apre un capitolo nuovo.

- **Metafisica** (o ontologia): che cos'è la realtà? che cosa esiste veramente, al di là delle apparenze? Domanda dei presocratici sull'*archè*, di Parmenide sull'essere, di Aristotele sulla sostanza.
- **Gnoseologia** (teoria della conoscenza): che cosa posso sapere, e come? I sensi ci ingannano? La ragione da sola basta? È il problema di Parmenide, di Democrito, del *Teeteto* di Platone.
- **Etica**: che cos'è il bene? come devo comportarmi? che cos'è la felicità? È la svolta di Socrate e il cuore dell'*Etica Nicomachea* di Aristotele.
- **Politica**: come si organizza una convivenza giusta? chi deve comandare? È la *Repubblica* di Platone e la *Politica* di Aristotele.
- **Estetica**: che cos'è il bello? a che serve l'arte? Platone la condanna, Aristotele la rivaluta con la *Poetica*.
- **Logica**: quali ragionamenti sono corretti? Non è una domanda sul mondo, ma sullo **strumento** con cui parliamo del mondo. La fonda Aristotele.

Una scorciatoia utile per ricordare l'ordine storico: la filosofia greca comincia guardando **fuori** (la natura, i presocratici), poi si volta verso **l'uomo** (sofisti e Socrate), poi costruisce **sistemi completi** che tengono insieme tutto (Platone e Aristotele).`
          },
          {
            n: 4, romano: "4", titolo: "Come sappiamo che cosa dicevano: le fonti",
            chiave: "Dei presocratici restano solo frammenti citati da altri. Di Socrate nessuno scritto. Ricostruiamo il loro pensiero da testimonianze indirette, con tutti i rischi del caso.",
            testo: `Un fatto sorprendente: dei primi filosofi **non possediamo nessun libro intero**. Di Talete, Anassimandro, Eraclito, Parmenide, Democrito restano solo **frammenti**: frasi citate dentro le opere di autori successivi, a volte a distanza di secoli.

Le fonti si dividono in due tipi:
- **Frammenti** (*fragmenta*): le parole vere e proprie del filosofo, riportate tra virgolette da qualcun altro. Sono i più preziosi.
- **Testimonianze** (*testimonia*): riassunti o riferimenti al pensiero di un filosofo fatti da terzi. Più abbondanti, ma filtrati dalle idee di chi scrive.

I testimoni principali sono **Platone** e soprattutto **Aristotele**, che nel primo libro della *Metafisica* passa in rassegna i predecessori. Attenzione però: Aristotele li legge attraverso le proprie categorie (per esempio interpreta l'*archè* come «causa materiale»), quindi la sua ricostruzione è preziosa ma non neutrale. Poi ci sono i **dossografi**, come Teofrasto e più tardi Diogene Laerzio e Simplicio, che compilavano raccolte di «opinioni dei filosofi».

Quando sul manuale trovi sigle come **DK 22 B 50**, sono la classificazione standard di Diels–Kranz: il numero indica il filosofo (22 = Eraclito), la lettera A le testimonianze e la lettera B i frammenti autentici, l'ultimo numero il frammento.

Un caso a parte è la **questione socratica**: Socrate non scrisse mai nulla, e i suoi tre testimoni principali — Platone, Senofonte, Aristofane — lo descrivono in modi incompatibili. Distinguere il Socrate storico dal personaggio di Platone è un problema tuttora aperto.`
          },
          {
            n: 5, romano: "5", titolo: "Come si studia un filosofo (metodo)",
            chiave: "Per ogni autore cerca sempre le stesse cinque cose: il problema che affronta, la tesi, gli argomenti, i termini tecnici, chi critica.",
            testo: `Il modo peggiore di studiare filosofia è imparare a memoria una lista di frasi. Il modo efficace è avere in testa una **griglia fissa** da riempire per ogni autore. Sono cinque caselle.

- **Il problema**: a quale domanda sta rispondendo? Quasi sempre nasce dalla difficoltà lasciata aperta dal filosofo precedente. Parmenide risponde a Eraclito, Democrito prova a salvare il movimento dopo Parmenide, Platone risponde alla crisi lasciata dai sofisti.
- **La tesi**: la risposta in una frase. «Tutto è acqua». «L'essere è, il non essere non è». «La virtù è conoscenza».
- **Gli argomenti**: *perché* lo sostiene. È la parte che vale di più all'esame e quella che si dimentica per prima.
- **Le parole tecniche**: ogni filosofo conia o ridefinisce termini (*archè*, *lógos*, *idea*, *sostanza*, *atto e potenza*). Se non sai il significato preciso, la frase resta vuota.
- **Le conseguenze e le critiche**: che cosa comporta quella tesi, e chi gliela contesterà.

Due consigli pratici. Primo: prova a **spiegare l'autore ad alta voce in tre frasi**, senza guardare — se non ci riesci, non l'hai capito, l'hai solo letto. Secondo: costruisci **catene di problemi** invece di schede isolate; la filosofia greca è una discussione continua, e ricordare «chi risponde a chi» costa meno fatica che ricordare venti nomi slegati.

In questo sito puoi usare la spunta **«segna come ripassato»** proprio così: spunta un capitolo solo quando riesci a riassumerlo a voce.`
          },
          {
            n: 6, romano: "6", titolo: "La mappa del percorso",
            chiave: "Età arcaica: la natura (presocratici). Età classica: l'uomo (sofisti e Socrate) e i grandi sistemi (Platone e Aristotele).",
            testo: `Ecco come si incastrano le quattro unità che trovi in questo sito, in ordine storico.

**Età arcaica (VI–V secolo a.C.) — l'indagine sulla natura.** Nasce nelle colonie greche, lontano dalla madrepatria: a Mileto, in Asia Minore, e nella Magna Grecia. La domanda è cosmologica: qual è il **principio** (*archè*) da cui tutto deriva? Talete dice l'acqua, Anassimandro l'infinito, Eraclito il fuoco e il divenire, Parmenide risponde che il divenire è impossibile, gli atomisti provano a rimettere insieme i pezzi.

**Età classica (V–IV secolo a.C.) — l'indagine sull'uomo.** Il centro si sposta ad Atene, la città della democrazia. I **sofisti** e **Socrate** smettono di interrogare la natura e interrogano l'uomo: le leggi, il linguaggio, la virtù, il bene. È la cosiddetta «svolta antropologica».

**I grandi sistemi.** **Platone** raccoglie l'eredità di Socrate e costruisce la teoria delle idee, una risposta complessiva al relativismo dei sofisti che tiene insieme conoscenza, anima, etica e politica. **Aristotele**, suo allievo per vent'anni, rifiuta il mondo separato delle idee e organizza per la prima volta l'intero sapere umano in discipline distinte: logica, fisica, metafisica, etica, politica, poetica.

Da qui in poi tutta la filosofia occidentale dialogherà con questi due. Una battuta famosa del filosofo Whitehead dice che la storia della filosofia europea è «una serie di note a piè di pagina a Platone»: esagerata, ma rende l'idea.`
          }
        ]
      }
    ],
    notaPersonaggi: "Le parole tecniche che tornano in continuazione: se le sai, il resto del programma diventa molto più leggibile.",
    personaggi: [
      {
        gruppo: "1. Il vocabolario di base",
        nota: "Termini greci che incontrerai in ogni unità.",
        voci: [
          { nome: "Archè", alt: ["principio"], desc: "Il principio da cui tutto deriva e in cui tutto torna: origine, sostanza costitutiva e legge del mondo insieme. È la domanda che apre la filosofia." },
          { nome: "Lógos", alt: ["ragione", "discorso"], desc: "Parola, discorso ragionato, ragione, legge razionale del mondo. Opposto al mito come modo di spiegare." },
          { nome: "Physis", alt: ["natura"], desc: "La natura: sia l'insieme delle cose sia la loro «costituzione propria». I primi filosofi sono detti *fisici* perché indagano la physis." },
          { nome: "Cosmo", alt: ["kósmos"], desc: "Ordine. I Greci chiamano il mondo «cosmo» perché lo pensano come un tutto ordinato, non come un caos." },
          { nome: "Essere / divenire", alt: [], desc: "Essere = ciò che è, stabile. Divenire = il cambiamento continuo. Il conflitto tra i due (Parmenide contro Eraclito) è il motore di tutta la filosofia greca." },
          { nome: "Nómos / physis", alt: ["legge / natura"], desc: "La coppia decisiva della sofistica: le leggi sono convenzioni umane variabili (nómos) o hanno un fondamento naturale (physis)?" },
          { nome: "Virtù (aretè)", alt: [], desc: "Non «bontà» in senso morale moderno: è l'eccellenza propria di qualcosa, la capacità di svolgere bene la propria funzione. La virtù del coltello è tagliare bene." },
          { nome: "Anima (psyché)", alt: [], desc: "Il principio della vita e, da Socrate in poi, la sede dell'identità morale e della ragione. Da qui l'imperativo «prenditi cura della tua anima»." },
          { nome: "Dialettica", alt: [], desc: "Arte del dialogo e del ragionare per domande e risposte. In Platone diventa il metodo supremo della filosofia; in Aristotele un ragionamento che parte da premesse probabili." },
          { nome: "Metafisica", alt: ["filosofia prima"], desc: "Lo studio dell'essere in quanto essere. Il nome nasce per caso: sono i libri collocati «dopo la fisica» (metà tà physiká) nell'edizione delle opere di Aristotele." }
        ]
      },
      {
        gruppo: "2. Come si cita e come si studia",
        voci: [
          { nome: "Frammento (B)", alt: ["fragmentum"], desc: "Le parole autentiche di un filosofo, citate da un autore successivo. Nella classificazione Diels–Kranz portano la lettera B." },
          { nome: "Testimonianza (A)", alt: ["testimonium"], desc: "Il resoconto del pensiero di un filosofo fatto da altri. Utile ma filtrato dalle idee di chi scrive." },
          { nome: "DK (Diels–Kranz)", alt: [], desc: "La numerazione standard dei presocratici: numero del filosofo + lettera (A o B) + numero del frammento. Es. DK 22 B 50 = Eraclito, frammento 50." },
          { nome: "Dossografia", alt: [], desc: "Raccolta di «opinioni» dei filosofi compilata dagli antichi (Teofrasto, Diogene Laerzio, Simplicio): la nostra principale fonte indiretta." },
          { nome: "Aporia", alt: [], desc: "Vicolo cieco, difficoltà senza uscita apparente. Molti dialoghi giovanili di Platone finiscono in aporia: il problema resta aperto, ma le risposte sbagliate sono state eliminate." },
          { nome: "Confutazione (élenchos)", alt: [], desc: "Mostrare che la tesi dell'avversario porta a una contraddizione. È l'arma principale di Socrate e di Zenone." }
        ]
      }
    ]
  },

  /* ------------------------------------------------ PRESOCRATICI */
  presocratici: {
    id: "presocratici",
    titolo: "I Presocratici",
    autore: "Unità 1 · L'età arcaica",
    sottotitolo: "L'indagine sulla natura: alla ricerca del principio",
    epoca: "VI – V secolo a.C.",
    lingua: "Mileto, Magna Grecia, Efeso, Abdera",
    tag: ["Archè", "Physis", "Essere e divenire", "Atomismo"],
    epigrafe: "Tutto scorre. — Eraclito · L'essere è, il non essere non è. — Parmenide",
    colore: "verde",
    parti: [
      {
        titolo: "Capitolo 1 — La Grecia e la nascita della filosofia",
        sottotitolo: "Dove, quando e perché comincia tutto",
        canti: [
          {
            n: 1, romano: "1", titolo: "In che senso la filosofia è nata in Grecia",
            chiave: "Anche Egitto e Babilonia avevano sapere e tecnica, ma legati alla pratica e alla religione. In Grecia nasce per la prima volta un sapere disinteressato e dimostrativo.",
            testo: `Dire che la filosofia «nasce in Grecia» non significa che gli altri popoli fossero stupidi. Egiziani e Babilonesi conoscevano l'astronomia, la geometria, la medicina, e i Greci lo sapevano benissimo: viaggiavano, commerciavano, imparavano da loro.

La differenza sta nel **tipo** di sapere.

Nelle grandi civiltà orientali il sapere era:
- **pratico**: la geometria serviva a rimisurare i campi dopo le piene del Nilo, l'astronomia a fissare il calendario e a prevedere gli eventi.
- **custodito da una casta sacerdotale**, che lo tramandava per autorità come verità rivelata e non discutibile.
- **legato alla religione**: le spiegazioni ultime restavano teologiche.

In Grecia il sapere diventa invece:
- **disinteressato**: si cerca la verità per sé stessa, non per un'applicazione immediata. Il triangolo interessa in quanto triangolo, non in quanto campo da misurare.
- **dimostrativo**: non basta constatare che una regola funziona, si vuole capire *perché* funziona sempre. È la nascita della dimostrazione geometrica.
- **pubblico e discutibile**: si espone in piazza, chiunque può contestarlo. Non esiste in Grecia una casta sacerdotale con il monopolio del sapere, né un libro sacro dogmatico.

Questo è il vero salto: non l'invenzione del sapere, ma l'invenzione di un sapere **libero, argomentato e criticabile**.`
          },
          {
            n: 2, romano: "2", titolo: "Le condizioni storiche: colonie, commercio e pólis",
            chiave: "Non è un caso che nasca nelle colonie ricche e cosmopolite, in città senza re assoluti dove le decisioni si prendono discutendo in assemblea.",
            testo: `La filosofia non nasce ad Atene né a Sparta, ma nelle **colonie**: prima in Ionia (Mileto, sulla costa dell'attuale Turchia), poi in Magna Grecia (Italia meridionale e Sicilia). Perché proprio lì?

- **Ricchezza e commercio.** Le colonie sono porti prosperi. Il commercio produce **tempo libero** (*scholé*, da cui «scuola»): senza uomini liberi dal lavoro quotidiano non c'è ricerca disinteressata.
- **Contatto con altre culture.** Chi commercia scopre che altri popoli hanno dei diversi, leggi diverse, usanze diverse. È il primo colpo alle certezze tradizionali: se le credenze cambiano da un porto all'altro, forse nessuna è ovvia.
- **Assenza di un potere assoluto.** Nella **pólis** greca non c'è un faraone né una casta sacerdotale intoccabile. Le decisioni si prendono in assemblea, discutendo: chi vuole ottenere qualcosa deve **convincere** con argomenti pubblici. Questa abitudine politica alla discussione è la stessa che troviamo nella filosofia.
- **La legge scritta.** Le leggi vengono affisse ed esposte a tutti: diventano una norma impersonale e uguale per tutti, non il capriccio del sovrano. È l'idea di una regola universale, la stessa che i filosofi cercheranno nella natura.
- **L'alfabeto.** I Greci adottano dai Fenici un alfabeto semplice, con le vocali: leggere e scrivere non è più privilegio di scribi specializzati, e il sapere circola.

C'è infine un tratto di mentalità: lo spirito **agonistico**, la gara. I Greci gareggiano in tutto — sport, teatro, poesia — e anche nel pensiero. I filosofi si sfidano, si confutano, si superano a vicenda. È la benzina che alimenta il progresso delle idee.`
          },
          {
            n: 3, romano: "3", titolo: "Il retroterra culturale: miti, Misteri, poeti e Sette Savi",
            chiave: "Prima dei filosofi c'erano già Omero, Esiodo, i culti misterici e i Sette Savi: la filosofia non nasce dal nulla, ma trasforma materiali che esistevano.",
            testo: `La filosofia ha dei precursori che non sono ancora filosofia, ma ne preparano il terreno.

**Le cosmologie mitiche.** La *Teogonia* di **Esiodo** racconta la nascita degli dei e del mondo a partire dal Caos, poi Gaia (la Terra), poi Eros. È ancora un racconto genealogico, ma pone già la domanda giusta: da dove viene il tutto? Il passo successivo — sostituire ai nomi divini elementi naturali — sarà quello dei Milesi.

**Omero.** Nell'*Iliade* e nell'*Odissea* compare l'idea di **Moira**, il destino: una necessità che vincola perfino Zeus. È l'embrione dell'idea di una legge che governa il mondo dall'alto degli dei stessi.

**I Misteri e l'orfismo.** I culti misterici (eleusini, dionisiaci, orfici) diffondono una concezione nuova dell'**anima**: qualcosa di divino imprigionato nel corpo (*sôma sêma*, «il corpo è tomba»), destinato a purificarsi attraverso rinascite successive. Questa idea passerà ai pitagorici e da lì a Platone: senza l'orfismo, la dottrina platonica dell'anima immortale sarebbe impensabile.

**I Sette Savi.** Personaggi semi-leggendari (tra cui **Talete** e **Solone**) a cui la tradizione attribuisce massime brevissime come «conosci te stesso» e «nulla di troppo», poi incise sul tempio di Delfi. È sapienza pratica, non ancora teoria: ma sposta l'attenzione sulla misura e sull'autocoscienza.

**La poesia lirica.** Poeti come Saffo e Archiloco cominciano a parlare in prima persona dei propri sentimenti: emerge l'**individuo**, il soggetto che dice «io». Anche questo serve: la filosofia richiede qualcuno disposto a pensare per conto proprio, contro la tradizione.`
          },
          {
            n: 4, romano: "4", titolo: "I periodi e le scuole della filosofia greca",
            chiave: "Tre fasi: cosmologica (la natura), antropologica (l'uomo), sistematica (Platone e Aristotele). Poi l'età ellenistica.",
            testo: `Uno schema da tenere sempre presente, perché serve a collocare qualunque autore.

**1. Periodo cosmologico o naturalistico** (VI–V sec. a.C.). Oggetto: la *physis*, la natura. Domanda: qual è l'*archè*? Autori: la scuola ionica di Mileto (Talete, Anassimandro, Anassimene), i pitagorici, Eraclito, gli eleati (Parmenide, Zenone, Melisso), i pluralisti (Empedocle, Anassagora) e gli atomisti (Leucippo, Democrito).

**2. Periodo antropologico** (V sec. a.C.). Oggetto: l'uomo, la società, il linguaggio, la morale. Autori: i **sofisti** e **Socrate**. È la «svolta»: la natura passa in secondo piano perché la ricerca sull'*archè* si era arenata in risposte contraddittorie.

**3. Periodo dei grandi sistemi** (IV sec. a.C.). **Platone** e **Aristotele** costruiscono sintesi complessive che tengono insieme natura e uomo, conoscenza ed etica, fisica e metafisica.

**4. Età ellenistica e romana** (dal III sec. a.C.). Dopo Alessandro Magno la pólis perde autonomia: la filosofia diventa soprattutto ricerca della felicità e della serenità individuale (stoicismo, epicureismo, scetticismo, neoplatonismo).

Le «scuole» greche vanno intese in senso ampio: raramente sono istituzioni con un edificio. Sono comunità di maestri e allievi, a volte vere e proprie sette religiose (i pitagorici), a volte semplici gruppi di persone che condividono un'impostazione. Le prime scuole in senso stretto sono l'**Accademia** di Platone e il **Liceo** di Aristotele.`
          }
        ]
      },
      {
        titolo: "Capitolo 2 — La ricerca del principio",
        sottotitolo: "La scuola di Mileto, i pitagorici, Eraclito",
        canti: [
          {
            n: 5, romano: "5", titolo: "La scuola ionica di Mileto e il problema dell'archè",
            chiave: "I Milesi cercano l'archè: la sostanza da cui tutto nasce, di cui tutto è fatto e in cui tutto torna. È l'atto di nascita della filosofia.",
            testo: `A Mileto, nel VI secolo a.C., tre pensatori pongono la stessa domanda: esiste una **sostanza primordiale** da cui tutte le cose derivano?

Il termine tecnico è **archè**, e ha tre significati insieme:
- **origine**: ciò da cui tutto è nato;
- **sostanza costitutiva**: ciò di cui tutto è fatto adesso, la materia permanente sotto le apparenze;
- **legge**: la regola secondo cui tutto avviene, e il termine in cui tutto ritorna.

Perché è una domanda rivoluzionaria? Perché presuppone due idee che noi diamo per scontate ma che allora non lo erano affatto: che sotto la varietà caotica dei fenomeni ci sia una **unità**, e che questa unità sia **conoscibile con la ragione**, senza ricorrere agli dei.

I Milesi sono chiamati **monisti** (una sola archè) e **ilozoisti**: dal greco *hýle* (materia) e *zoé* (vita), perché per loro la materia è viva di per sé, si muove da sola, senza bisogno di una forza esterna che la spinga. Non distinguono ancora spirito e materia: quella distinzione arriverà molto dopo.

Un'avvertenza importante: le loro risposte concrete (acqua, aria) a noi sembrano ingenue. Ma ciò che conta non è la risposta, è **il tipo di domanda** e il fatto che la risposta venga cercata dentro la natura e non fuori. Da questo punto di vista, tra Talete e la fisica contemporanea c'è continuità di metodo.`
          },
          {
            n: 6, romano: "6", titolo: "Talete",
            opere: "attivo a Mileto, inizio VI sec. a.C.",
            chiave: "«Tutto è acqua». Considerato il primo filosofo: cerca il principio di tutte le cose dentro la natura, non nel mito.",
            testo: `**Talete di Mileto** (circa 624–546 a.C.) è tradizionalmente il primo filosofo. Fu anche astronomo e matematico: la tradizione gli attribuisce la previsione di un'eclissi di sole (585 a.C.) e il teorema che ancora porta il suo nome.

La sua tesi: l'**archè è l'acqua**. Perché proprio l'acqua? Aristotele ipotizza tre ragioni, tutte osservative:
- il **nutrimento** di tutti i viventi è umido;
- i **semi** e lo sperma sono umidi: la vita nasce dall'umido;
- il **calore** stesso si genera dall'umido e di esso vive.

Aggiungiamo che l'acqua è l'unica sostanza che i Greci vedevano esistere naturalmente nei tre stati — solida, liquida, gassosa — e che la Terra, secondo Talete, galleggia sull'acqua come un disco su un mare.

A Talete si attribuisce anche la frase «**tutto è pieno di dei**»: non un ritorno al mito, ma l'idea che la materia sia intrinsecamente animata e capace di muoversi da sé (ilozoismo).

Su Talete circolano due aneddoti opposti e istruttivi. Platone racconta che, mentre osservava le stelle, cadde in un pozzo e una servetta tracia rise di lui: il filosofo che guarda il cielo e non vede i piedi. Aristotele racconta invece che, prevedendo un raccolto abbondante di olive, Talete affittò in anticipo tutti i frantoi della zona e si arricchì: voleva dimostrare che il filosofo potrebbe diventare ricco se solo gli interessasse. I due racconti insieme dicono bene l'ambiguità della figura del filosofo agli occhi della città.`
          },
          {
            n: 7, romano: "7", titolo: "Anassimandro",
            opere: "Sulla natura (perduto) · primo testo filosofico in prosa",
            chiave: "L'archè non può essere un elemento particolare: è l'ápeiron, l'infinito indeterminato. Il salto più originale del pensiero arcaico.",
            testo: `**Anassimandro** (circa 610–546 a.C.), allievo di Talete, compie un passo di enorme profondità teorica: si accorge di un'obiezione al maestro e la risolve.

L'obiezione: se il principio fosse **un elemento determinato** come l'acqua, esso prevarrebbe su tutti gli altri e li distruggerebbe. L'acqua spegne il fuoco: se il principio fosse acqua, il fuoco non potrebbe esistere. Perché gli opposti convivano in equilibrio, il principio deve essere **neutro** rispetto a tutti.

La sua risposta: l'archè è l'**ápeiron** — «senza limiti», infinito e indeterminato. Infinito **quantitativamente** (inesauribile, altrimenti la generazione delle cose finirebbe) e **qualitativamente** (senza qualità specifiche, altrimenti ricadremmo nel problema di prima).

Questo è il primo concetto filosofico **non ricavabile dall'esperienza sensibile**: nessuno ha mai visto l'ápeiron. È un'ipotesi teorica, costruita per necessità logica. Un salto enorme.

Dall'ápeiron le cose si separano per opposizione (caldo/freddo, secco/umido) e vi ritornano. Ne resta il frammento più antico della filosofia occidentale (DK 12 B 1): le cose «pagano l'una all'altra la pena e l'espiazione dell'ingiustizia secondo l'ordine del tempo». Il nascere di una cosa è una prevaricazione ai danni delle altre, e la morte è la restituzione dovuta: la natura è concepita come un tribunale, in cui vige una giustizia cosmica.

Anassimandro sostenne inoltre che la Terra sta ferma al centro **senza appoggiarsi a nulla**, per equidistanza da tutto (un'intuizione straordinaria), e che gli uomini derivano da animali simili a pesci: un'anticipazione lontanissima ma suggestiva dell'evoluzionismo.`
          },
          {
            n: 8, romano: "8", titolo: "Anassimene",
            chiave: "L'archè è l'aria, che si trasforma per rarefazione e condensazione: il primo tentativo di spiegare *come* dal principio nascono le cose.",
            testo: `**Anassimene** (circa 585–528 a.C.) sembra fare un passo indietro rispetto ad Anassimandro, tornando a un elemento determinato: l'**aria**. In realtà introduce qualcosa che ai predecessori mancava.

Perché l'aria? Perché è **infinita e indeterminata** come l'ápeiron (quindi conserva il vantaggio di Anassimandro) ma è anche **sensibile**, osservabile, e soprattutto è il **soffio vitale**: «come la nostra anima, che è aria, ci tiene insieme, così il soffio e l'aria abbracciano tutto il mondo». C'è qui un'analogia tra microcosmo (l'uomo) e macrocosmo (l'universo) destinata a lunghissima fortuna.

Il contributo decisivo è però il **meccanismo di trasformazione**. Talete e Anassimandro dicevano *che cosa* è il principio, ma non *come* da esso derivino le cose diverse. Anassimene risponde con due processi quantitativi:
- **rarefazione**: l'aria si dilata, si riscalda e diventa fuoco;
- **condensazione**: l'aria si addensa e diventa via via vento, nube, acqua, terra, pietra.

La differenza tra le cose non è più qualitativa ma **quantitativa**: è solo questione di densità. È il primo tentativo di ridurre la varietà del mondo a una legge fisica misurabile — un'idea di metodo modernissima.

A sostegno porta perfino un esperimento casalingo: se soffi con la bocca stretta l'aria esce fredda (condensata), se soffi a bocca aperta esce calda (rarefatta).`
          },
          {
            n: 9, romano: "9", titolo: "Pitagora e i pitagorici",
            opere: "nessuno scritto · la scuola di Crotone",
            chiave: "Il principio non è una materia ma il numero: la realtà ha una struttura matematica. Più una setta religiosa che crede nella metempsicosi.",
            testo: `**Pitagora di Samo** (circa 570–495 a.C.) emigra a **Crotone**, in Magna Grecia, e vi fonda una comunità che è insieme scuola filosofica, ordine religioso e forza politica. Vigono il segreto, la comunanza dei beni, regole di vita rigide, e le scoperte si attribuiscono tutte al maestro (da cui il celebre *ipse dixit*, «l'ha detto lui»).

**La dottrina del numero.** La svolta è radicale: il principio non è una sostanza materiale ma il **numero**. Ciò che rende conoscibile una cosa non è la sua materia, ma la sua **struttura, proporzione, misura**. Nasce dall'osservazione musicale: pizzicando corde di lunghezza in rapporto 2:1, 3:2, 4:3 si ottengono gli accordi fondamentali. L'armonia — cioè la bellezza percepita — è riducibile a **rapporti numerici semplici**. Se vale per la musica, perché non per l'intero cosmo?

Per i pitagorici i numeri non sono astrazioni mentali ma entità reali, rappresentate con sassolini disposti in figure (numeri triangolari, quadrati). Da qui la fortuna dei numeri figurati e della **tetraktys** (1+2+3+4=10), simbolo sacro della scuola.

**La dottrina dei contrari.** Il mondo è governato da dieci coppie di opposti, con un lato positivo e uno negativo: limite/illimitato, dispari/pari, uno/molteplice, maschio/femmina, quiete/movimento, luce/tenebre, bene/male. Il **limite** è ciò che dà forma, l'illimitato è indeterminatezza.

**La dottrina dell'anima.** Ereditata dall'orfismo: l'anima è immortale e trasmigra di corpo in corpo (**metempsicosi**), anche in animali. Il corpo è una prigione; la filosofia, la musica e la matematica sono strumenti di **purificazione** (*kátharsis*) che liberano l'anima. Da qui i divieti alimentari e le regole della setta.

**La crisi: gli irrazionali.** I pitagorici stessi scoprono che la diagonale del quadrato non è commensurabile con il lato (in termini moderni: √2 è irrazionale). Esiste dunque una grandezza reale che *non* si esprime con un rapporto tra numeri interi: un colpo durissimo alla dottrina, che secondo la leggenda fu tenuto segreto e costò la vita a chi lo divulgò.

L'eredità è comunque immensa: l'idea che **il libro della natura sia scritto in linguaggio matematico** arriva fino a Galileo e alla scienza moderna.`
          },
          {
            n: 10, romano: "10", titolo: "Eraclito",
            opere: "Sulla natura · «l'Oscuro» di Efeso",
            chiave: "Tutto scorre: la realtà è divenire perpetuo. Ma il divenire ha una legge, il lógos, e nasce dalla lotta e dall'unità dei contrari.",
            testo: `**Eraclito di Efeso** (circa 535–475 a.C.), soprannominato **l'Oscuro** per lo stile aforistico e volutamente enigmatico, è un aristocratico sprezzante verso la massa: «uno per me vale diecimila, se è il migliore».

**Il divenire.** La sua tesi celebre è il **pánta rhêi**, «tutto scorre» (formula che in realtà risale ai suoi seguaci): nulla è stabile, tutto si trasforma incessantemente. L'immagine più famosa è il fiume: «non si può discendere due volte nello stesso fiume», perché le acque sono sempre nuove — e anche noi non siamo più gli stessi. La realtà non è un insieme di cose, ma un **processo**.

**L'unità dei contrari.** Il divenire non è casuale: procede dalla **tensione tra opposti**. «La guerra (*pólemos*) è padre di tutte le cose». Ma gli opposti non sono solo in lotta: sono anche **la stessa cosa** sotto aspetti diversi. La via in salita e in discesa sono una sola via; il mare è «acqua purissima e inquinatissima» (potabile per i pesci, imbevibile per gli uomini); la malattia rende dolce la salute. Senza uno dei due contrari, l'altro perderebbe senso. L'armonia del mondo è come quella dell'arco e della lira: nasce da forze che tirano in direzioni opposte.

**Il lógos.** Il divenire è regolato da una legge razionale universale, il **lógos**, che Eraclito identifica con il **fuoco** — l'elemento che è cambiamento allo stato puro, che vive consumando e trasformando ogni cosa. Il fuoco è insieme materia e ragione del mondo: un «Dio-tutto» impersonale, non una divinità antropomorfa.

**La conoscenza.** Il lógos è comune a tutti, ma i più «vivono come dormienti», chiusi in un mondo privato, fidandosi solo dei sensi e dell'apparenza di stabilità. Il compito del filosofo è **destarsi**: cogliere sotto la molteplicità la legge unitaria che la governa.

Eraclito diventerà il grande avversario ideale di Parmenide e, più tardi, il modello di Platone per il **mondo sensibile**, che è appunto flusso incessante e perciò non può essere oggetto di scienza vera.`
          }
        ]
      },
      {
        titolo: "Capitolo 3 — Il problema dell'essere",
        sottotitolo: "La scuola di Elea: Senofane, Parmenide, Zenone, Melisso",
        canti: [
          {
            n: 11, romano: "11", titolo: "Senofane e la critica agli dei",
            chiave: "Se i buoi avessero le mani, dipingerebbero dei simili a buoi: gli dei sono proiezioni umane. Prima grande critica razionale alla religione.",
            testo: `**Senofane di Colofone** (circa 570–475 a.C.), poeta girovago, viene tradizionalmente collegato agli eleati anche se il legame storico è discusso.

La sua fama si deve alla **critica dell'antropomorfismo religioso**, di una lucidità impressionante. Omero ed Esiodo, dice, hanno attribuito agli dei «tutto ciò che tra gli uomini è vergogna e biasimo: rubare, commettere adulterio, ingannarsi a vicenda». Ma soprattutto osserva che ogni popolo si fabbrica gli dei a propria immagine: «gli Etiopi dicono i loro dei camusi e neri, i Traci azzurri di occhi e rossi di capelli». E conclude con l'argomento più tagliente: «se i buoi, i cavalli e i leoni avessero le mani e sapessero dipingere, i cavalli raffigurerebbero gli dei simili a cavalli, i buoi simili a buoi».

Se la rappresentazione del divino varia con chi la produce, allora non è la descrizione di una realtà: è una **proiezione**. È un ragionamento che duemilacinquecento anni dopo ritroveremo quasi identico in Feuerbach e in Marx.

Senofane non è però ateo. Contrappone agli dei del mito un **dio unico**, eterno, immobile, non antropomorfo, che «tutto intero vede, tutto intero pensa, tutto intero ode» e che muove ogni cosa con la sola forza del pensiero. Alcuni lo identificano con il mondo stesso (panteismo).

Infine, una nota di prudenza conoscitiva: nessun uomo, dice, ha mai avuto o avrà certezza piena; anche chi per caso dicesse il vero, non saprebbe di dirlo. Agli uomini è concessa l'*opinione*, e la verità si conquista solo col tempo e la ricerca.`
          },
          {
            n: 12, romano: "12", titolo: "Parmenide: il sentiero della verità",
            opere: "Sulla natura, poema in esametri",
            chiave: "«L'essere è, il non essere non è». Da questo principio deduce che l'essere è unico, eterno, immobile: il divenire è solo illusione dei sensi.",
            testo: `**Parmenide di Elea** (circa 515–450 a.C.) è il filosofo che cambia le regole del gioco: introduce nella filosofia la **deduzione rigorosa**. Il suo poema si apre con un proemio mitico — un carro lo porta al cospetto di una dea — ma ciò che segue è pura logica.

**Il principio.** La dea gli indica due sole vie possibili: «l'**essere è** e non può non essere» oppure «il **non essere non è** e non può essere». La seconda va scartata subito, perché il non essere non si può né pensare né dire: pensare il nulla significa non pensare nulla. Da qui la formula celebre: «**lo stesso è pensare ed essere**» — ciò che è pensabile è, e ciò che non è pensabile non è.

**Le conseguenze.** Da quell'unico principio Parmenide deduce, come un teorema, tutti gli attributi dell'essere:
- **Ingenerato e imperituro**: se nascesse, verrebbe dal non essere, che non c'è. Stessa cosa per la morte.
- **Eterno e senza tempo**: non è stato né sarà, è tutto insieme in un presente immobile.
- **Immutabile e immobile**: cambiare significherebbe diventare ciò che non si è, cioè passare per il non essere.
- **Unico e continuo**: due esseri sarebbero separati da qualcosa che non è essere, cioè dal nulla — impossibile.
- **Finito e sferico**: è perfetto e compiuto, «uguale a sé stesso da ogni parte», come una sfera ben rotonda.

**Il mondo dell'opinione.** Ma allora la vita quotidiana, dove le cose nascono e muoiono? È la **via dell'opinione** (*dóxa*), quella dei mortali «bicipiti», che si affidano ai sensi e ammettono insieme l'essere e il non essere. Per Parmenide il divenire non è reale: è **apparenza**. Bisogna «giudicare con la ragione», non con l'occhio che non vede e l'orecchio che rimbomba.

**Perché è decisivo.** Parmenide impone a chiunque venga dopo un problema ineludibile: come si salva il movimento senza contraddire la logica? Empedocle, Anassagora e Democrito nasceranno tutti da questo tentativo. E la distinzione tra un mondo vero conosciuto dalla ragione e un mondo apparente conosciuto dai sensi arriverà fino a Platone.`
          },
          {
            n: 13, romano: "13", titolo: "Zenone e i paradossi",
            chiave: "Difende Parmenide col metodo opposto: non dimostra che l'essere è immobile, ma che ammettere movimento e molteplicità porta ad assurdità.",
            testo: `**Zenone di Elea** (circa 490–430 a.C.), allievo prediletto di Parmenide, inventa un'arma logica destinata a lunga vita: la **dimostrazione per assurdo** (*reductio ad absurdum*). Aristotele lo considera per questo l'inventore della **dialettica**.

La strategia è indiretta: invece di dimostrare la tesi del maestro, assume per vera la tesi dei suoi avversari — che esistano il movimento e la molteplicità — e ne ricava conseguenze contraddittorie. Se le conseguenze sono assurde, la premessa è falsa.

**Contro la molteplicità.** Se le cose sono molte, ogni cosa è divisibile all'infinito: allora ogni parte sarà o priva di grandezza (e sommando infiniti zeri si ottiene zero: le cose non esisterebbero) o dotata di grandezza (e sommando infinite grandezze si ottiene l'infinito: ogni cosa sarebbe infinitamente grande). Assurdo in entrambi i casi.

**Contro il movimento.** I quattro argomenti famosi:
- **La dicotomia**: per arrivare in fondo a un percorso devi prima farne metà, ma prima ancora la metà della metà, e così all'infinito. Non puoi nemmeno cominciare a muoverti.
- **Achille e la tartaruga**: Achille, il più veloce, non raggiungerà mai la tartaruga partita in vantaggio, perché quando arriva dov'era lei, lei si è già spostata un po' più avanti; e così all'infinito.
- **La freccia**: in ogni istante la freccia scagliata occupa uno spazio uguale a sé stessa, cioè è ferma. La somma di infiniti istanti di quiete non può dare movimento.
- **Lo stadio**: due file di corpi che si muovono in senso opposto percorrono, nello stesso tempo, spazi diversi rispetto a riferimenti fermi o mobili — da cui, secondo Zenone, «il doppio è uguale alla metà».

**Come si risolvono?** Zenone confonde la divisibilità *potenziale* all'infinito con una divisione *attualmente* infinita: lo osserverà già Aristotele. La matematica moderna aggiunge che una somma di infiniti termini può avere risultato finito (le serie convergenti): infiniti intervalli di spazio si percorrono in infiniti intervalli di tempo la cui somma è finita. Ma il valore filosofico resta: Zenone ha mostrato che i concetti di infinito, continuo e movimento nascondono difficoltà che nessuno aveva sospettato.`
          },
          {
            n: 14, romano: "14", titolo: "Melisso",
            chiave: "Ultimo eleata: corregge Parmenide sostenendo che l'essere è infinito e incorporeo. Aggiunge l'argomento contro il vuoto.",
            testo: `**Melisso di Samo** (V sec. a.C.), ammiraglio oltre che filosofo, è l'ultimo grande esponente della scuola eleatica e ne espone la dottrina in prosa, in modo più didattico di Parmenide.

Conserva gli attributi fondamentali dell'essere — ingenerato, eterno, immutabile, unico — ma introduce **due correzioni** importanti al maestro:

- **L'essere è infinito, non finito.** Parmenide lo diceva sferico e compiuto; Melisso obietta che ciò che è finito ha un limite, e un limite è confine con qualcos'altro, cioè con il non essere. Perciò l'essere deve essere **spazialmente illimitato**. Coerentemente ne deduce anche che è **incorporeo**: se avesse un corpo avrebbe spessore e parti, quindi molteplicità. È un passo verso una concezione non materiale dell'essere.
- **L'argomento contro il vuoto.** Il vuoto è non essere, quindi non esiste. Ma senza vuoto nulla può spostarsi, perché non c'è dove andare: ecco un'ulteriore prova dell'immobilità.

Quest'ultimo argomento è storicamente cruciale: gli **atomisti** lo accetteranno come sfida e risponderanno con una mossa spregiudicata — affermare che il vuoto *esiste*, cioè che «il non essere non è meno reale dell'essere».

Melisso aggiunge inoltre un argomento contro l'attendibilità dei sensi molto elegante: i sensi ci mostrano cose che cambiano; ma se una cosa cambia significa che ciò che era prima è perito; dunque i sensi si contraddicono da soli. Se ammettiamo che ci sono molte cose, dobbiamo ammettere che ciascuna sia come l'uno eleatico — e allora non cambierebbe nessuna. Da questa apertura verso una possibile **pluralità di esseri immutabili** partirà, di fatto, il pluralismo successivo.`
          }
        ]
      },
      {
        titolo: "Capitolo 4 — Il principio come sostanza complessa",
        sottotitolo: "I fisici pluralisti e l'atomismo",
        canti: [
          {
            n: 15, romano: "15", titolo: "Empedocle: le quattro radici, Amore e Odio",
            opere: "Sulla natura · Purificazioni",
            chiave: "Salva il divenire moltiplicando i principi: quattro elementi eterni che si mescolano e si separano per opera di due forze, Amore e Odio.",
            testo: `**Empedocle di Agrigento** (circa 490–430 a.C.) è una figura spettacolare: filosofo, medico, taumaturgo, uomo politico. La leggenda vuole che si sia gettato nel cratere dell'Etna per farsi credere un dio (ma il vulcano restituì un suo sandalo di bronzo).

**Il problema.** Parmenide ha dimostrato che nulla nasce dal nulla e nulla si annulla. Empedocle accetta il principio, ma vuole salvare l'esperienza del cambiamento. La soluzione è geniale nella sua semplicità: se **gli elementi** sono eterni e immutabili come l'essere di Parmenide, ma sono **più di uno**, allora ciò che chiamiamo nascita e morte è solo **mescolanza e separazione** di elementi che restano sempre gli stessi. Nulla si crea, nulla si distrugge: tutto si combina.

**Le quattro radici.** Sono acqua, aria, terra, fuoco (che chiama con nomi divini: Nesti, Era, Ade, Zeus). Ingenerate, eterne, qualitativamente immutabili; cambia solo il modo in cui si compongono, come da pochi colori un pittore ricava infinite figure. Questa dottrina dei quattro elementi, ripresa da Aristotele, dominerà la fisica occidentale fino al Seicento.

**Le due forze.** Gli elementi da soli sono inerti: servono cause del movimento. Empedocle le identifica in **Amore** (*Philía*), che unisce, e **Odio** (*Neîkos*), che separa. È la prima volta che le cause materiali e le cause motrici vengono distinte — un punto che Aristotele apprezzerà molto.

**Il ciclo cosmico.** Il mondo attraversa quattro fasi che si ripetono eternamente: lo *Sfero* (dominio assoluto dell'Amore: tutto è mescolato in una sfera perfetta e immobile), l'ingresso dell'Odio che progressivamente separa, il dominio dell'Odio (elementi totalmente separati), il ritorno dell'Amore. Il nostro mondo, con la sua mescolanza parziale, si trova in una fase intermedia. Nella cosmogonia compaiono anche organismi mostruosi e casuali, di cui sopravvivono solo quelli capaci di vivere: una lontana anticipazione della selezione naturale.

**La conoscenza.** Vale il principio che «il simile conosce il simile»: conosciamo la terra grazie alla terra che è in noi, il fuoco grazie al fuoco. Nelle *Purificazioni* Empedocle sostiene inoltre la metempsicosi e un'etica di purificazione di stampo orfico-pitagorico.`
          },
          {
            n: 16, romano: "16", titolo: "Anassagora: i semi e il Nous",
            chiave: "«Tutto è in tutto»: infiniti semi di ogni qualità, ordinati da un'Intelligenza (Nous). Prima volta che una mente ordinatrice entra in filosofia.",
            testo: `**Anassagora di Clazomene** (circa 500–428 a.C.) porta la filosofia ad **Atene**, dove è amico di Pericle; sarà processato per empietà per aver sostenuto che il Sole è una pietra incandescente e non un dio.

**I semi (omeomerie).** Anche lui parte dal divieto parmenideo, ma osserva che quattro elementi non bastano: come fa il pane a diventare carne, ossa, capelli? La sua risposta: esistono **infiniti semi**, qualitativamente diversi, uno per ogni sostanza, ciascuno **divisibile all'infinito** — per quanto piccola sia una parte, resta della stessa qualità (per questo Aristotele le chiamò *omeomerie*, «parti simili al tutto»).

E soprattutto: «**tutto è in tutto**». In ogni cosa sono presenti semi di tutte le qualità; una cosa appare come ciò di cui contiene la **maggioranza** di semi. Nel pane ci sono già semi di carne e di capelli: per questo mangiando cresciamo. Nascere e morire, di nuovo, significa solo aggregarsi e separarsi.

**Il Nous.** Chi ordina questa mescolanza infinita? Non una forza cieca come l'Amore e l'Odio, ma il **Nous**: l'**Intelligenza**, che Anassagora descrive come infinita, autonoma, non mescolata a nulla, «la più sottile e la più pura di tutte le cose». Il Nous imprime alla massa iniziale un movimento vorticoso che separa gli opposti e ordina il cosmo.

È una novità di enorme portata: per la prima volta il principio ordinatore è **spirituale e distinto dalla materia**. Platone e Aristotele lo lodano — ma anche lo rimproverano: nel *Fedone*, Socrate racconta di essersi entusiasmato leggendo Anassagora, sperando di trovare finalmente spiegazioni finalistiche («ogni cosa è disposta così perché è meglio così»), e di essere rimasto deluso perché Anassagora usa il Nous solo come una spinta iniziale meccanica, per poi tornare a spiegare tutto con cause fisiche.

Gli si attribuisce anche l'acuta osservazione che l'uomo è il più intelligente degli animali perché ha le **mani** (Aristotele ribalterà: ha le mani perché è il più intelligente).`
          },
          {
            n: 17, romano: "17", titolo: "Democrito e l'atomismo",
            opere: "circa 70 opere, quasi tutte perdute",
            chiave: "Esistono solo atomi e vuoto. Tutto si spiega meccanicamente, senza finalità né dei: il primo grande materialismo della storia.",
            testo: `**Leucippo** e soprattutto **Democrito di Abdera** (circa 460–370 a.C.) portano alle estreme conseguenze la strategia pluralista, costruendo un sistema di straordinaria coerenza.

**Atomi e vuoto.** La realtà consiste di due soli principi: gli **atomi** (dal greco *á-tomos*, «indivisibile») e il **vuoto**. Gli atomi sono infiniti, eterni, immutabili, indivisibili, tutti fatti della stessa materia: sono, in pratica, tanti piccolissimi «esseri di Parmenide» invisibili. Differiscono solo per **forma, ordine e posizione**.

La mossa più audace riguarda il **vuoto**. Melisso aveva detto: il vuoto è non essere, quindi non esiste. Democrito ribalta: «**il non essere esiste non meno dell'essere**». Il vuoto è lo spazio, ed è indispensabile: senza di esso non ci sarebbe né movimento né molteplicità.

**Un mondo meccanico.** Gli atomi si muovono eternamente nel vuoto, si urtano, si agganciano grazie alle loro forme (uncinati, lisci, ruvidi) e formano aggregati: le cose. Nulla di tutto ciò avviene per uno **scopo**: non esistono finalità, provvidenza o disegno divino, ma solo **necessità** meccanica. È il primo materialismo integrale e deterministico della storia del pensiero, e resterà il grande avversario del finalismo di Platone e Aristotele.

**La conoscenza.** Le qualità che percepiamo non appartengono alle cose: «dolce e amaro, caldo e freddo, colore esistono per convenzione; in realtà esistono solo atomi e vuoto». È l'antenato della distinzione tra qualità oggettive (forma, grandezza, movimento) e qualità soggettive (sapori, colori, odori) che ritroveremo in Galileo e Locke. La conoscenza sensibile è perciò «oscura», quella razionale è «genuina»: solo il ragionamento arriva agli atomi, che nessun occhio potrà mai vedere.

**L'anima e l'etica.** Anche l'anima è fatta di atomi — i più sottili, lisci e sferici, cioè di fuoco — e si dissolve con il corpo: non c'è immortalità, e quindi non c'è ragione di temere la morte (tesi che Epicuro riprenderà). Il fine della vita è la **serenità dell'animo** (*euthymía*), raggiungibile con la misura, la moderazione dei desideri e i piaceri dell'intelligenza.

**Civiltà e linguaggio.** Democrito spiega la nascita della civiltà senza dei: gli uomini si sono associati per bisogno, hanno imparato imitando gli animali (tessere dal ragno, cantare dagli uccelli) e hanno inventato il linguaggio per convenzione. La religione stessa nasce dalla paura dei fenomeni naturali. Uomo di enciclopedica curiosità, Democrito scrisse di fisica, matematica, biologia, musica e tecnica: fu, per ampiezza, l'antenato di Aristotele.`
          },
          {
            n: 18, romano: "18", titolo: "Riepilogo: l'archè nei presocratici",
            chiave: "Una tabella mentale per il ripasso finale: chi ha detto cosa, e perché ognuno risponde a chi lo precede.",
            testo: `Tutta l'unità in uno schema. Per ciascuno: il principio, e la mossa che lo rende necessario.

- **Talete** — l'*acqua*. Prima risposta naturalistica alla domanda sull'origine.
- **Anassimandro** — l'*ápeiron*, infinito e indeterminato. Perché un elemento determinato distruggerebbe i suoi contrari.
- **Anassimene** — l'*aria*, che si trasforma per rarefazione e condensazione. Aggiunge il *come* della trasformazione.
- **Pitagorici** — il *numero*. Il principio non è materiale ma strutturale: la realtà ha una forma matematica.
- **Eraclito** — il *fuoco* e il *lógos*. La realtà è divenire, ma regolato da una legge, e nasce dalla tensione dei contrari.
- **Parmenide** — l'*essere*, uno e immobile. Il divenire è logicamente impossibile: è illusione dei sensi.
- **Zenone e Melisso** — difesa dell'eleatismo: i paradossi contro movimento e molteplicità, il rifiuto del vuoto.
- **Empedocle** — le *quattro radici* + *Amore e Odio*. Il divenire è mescolanza e separazione di elementi eterni.
- **Anassagora** — infiniti *semi* + il *Nous*. Tutto è in tutto; ordina un'Intelligenza.
- **Democrito** — *atomi e vuoto*. Tutto è meccanico e necessario, senza scopo né dei.

**Il filo del ragionamento.** I primi tre cercano una materia unica. I pitagorici spostano la domanda dalla materia alla forma. Eraclito e Parmenide portano all'estremo le due risposte opposte sul divenire e creano un'alternativa apparentemente insanabile. Empedocle, Anassagora e Democrito sono tre tentativi diversi di **salvare l'esperienza del cambiamento senza violare la logica di Parmenide**: moltiplicano i principi, li rendono eterni, e riducono il divenire a un movimento di elementi permanenti.

Il bilancio dell'età arcaica è però problematico: risposte troppo diverse e tutte plausibili, nessun criterio per decidere fra loro. È proprio questa impasse che spingerà la generazione successiva — i sofisti — a cambiare oggetto e a occuparsi non più della natura ma dell'uomo.`
          }
        ]
      }
    ],
    notaPersonaggi: "I protagonisti dell'età arcaica, con il loro principio e il contributo che li rende indispensabili.",
    personaggi: [
      {
        gruppo: "1. La scuola ionica di Mileto",
        nota: "Asia Minore, VI secolo a.C. I primi «fisici»: cercano l'archè dentro la natura.",
        voci: [
          { nome: "Talete", alt: ["acqua"], desc: "Il primo filosofo. L'archè è l'acqua: è nutrimento, seme e vita. «Tutto è pieno di dei» (ilozoismo). Astronomo e geometra, previde un'eclissi." },
          { nome: "Anassimandro", alt: ["ápeiron"], desc: "L'archè è l'infinito indeterminato, perché un elemento determinato prevarrebbe sui contrari. Primo concetto non ricavato dai sensi. La giustizia cosmica: le cose «pagano la pena» del proprio nascere." },
          { nome: "Anassimene", alt: ["aria"], desc: "L'archè è l'aria, che diventa fuoco per rarefazione e acqua, terra, pietra per condensazione. Introduce il meccanismo quantitativo della trasformazione." }
        ]
      },
      {
        gruppo: "2. Pitagorici ed Eraclito",
        voci: [
          { nome: "Pitagora", alt: ["il numero"], desc: "Fonda a Crotone una setta filosofico-religiosa. Il principio è il numero: l'armonia musicale è fatta di rapporti semplici, e così tutto il cosmo. Metempsicosi e purificazione." },
          { nome: "Tetraktys", alt: [], desc: "1+2+3+4 = 10, disposti a triangolo: simbolo sacro dei pitagorici, la perfezione del numero dieci." },
          { nome: "Gli irrazionali", alt: ["incommensurabili"], desc: "La diagonale del quadrato non è esprimibile come rapporto di interi: la scoperta che mette in crisi la dottrina pitagorica del numero." },
          { nome: "Eraclito", alt: ["l'Oscuro", "fuoco", "lógos"], desc: "«Tutto scorre»: la realtà è divenire. La guerra dei contrari è padre di tutte le cose, ma gli opposti sono anche identici. Il fuoco-lógos è la legge del mondo. I più «vivono come dormienti»." }
        ]
      },
      {
        gruppo: "3. La scuola eleatica",
        nota: "Elea, in Magna Grecia. Dalla logica dell'essere alla negazione del divenire.",
        voci: [
          { nome: "Senofane", alt: [], desc: "Critica l'antropomorfismo: «se i buoi sapessero dipingere, farebbero dei simili a buoi». Contrappone un dio unico, immobile, che muove tutto col pensiero." },
          { nome: "Parmenide", alt: [], desc: "«L'essere è, il non essere non è». L'essere è ingenerato, eterno, immutabile, unico, finito e sferico. Il divenire appartiene alla via dell'opinione (dóxa). «Lo stesso è pensare ed essere»." },
          { nome: "Zenone", alt: [], desc: "Difende Parmenide per assurdo: dicotomia, Achille e la tartaruga, la freccia, lo stadio. Aristotele lo dice inventore della dialettica." },
          { nome: "Melisso", alt: [], desc: "Ultimo eleata: l'essere è infinito (non finito) e incorporeo. Nega il vuoto — obiezione a cui risponderanno gli atomisti." }
        ]
      },
      {
        gruppo: "4. Pluralisti e atomisti",
        nota: "Tre tentativi di salvare il divenire dopo Parmenide.",
        voci: [
          { nome: "Empedocle", alt: ["quattro radici"], desc: "Acqua, aria, terra, fuoco: eterni e immutabili, si mescolano e si separano. Le cause del movimento sono Amore e Odio. Ciclo cosmico dallo Sfero e ritorno." },
          { nome: "Anassagora", alt: ["semi", "omeomerie"], desc: "Infiniti semi di ogni qualità: «tutto è in tutto», ogni cosa appare secondo i semi prevalenti. A ordinare la mescolanza è il Nous, l'Intelligenza separata dalla materia." },
          { nome: "Leucippo e Democrito", alt: ["atomi e vuoto"], desc: "Esistono solo atomi (infiniti, indivisibili, diversi per forma, ordine, posizione) e vuoto. Tutto avviene per necessità meccanica, senza scopo. Le qualità sensibili sono convenzionali." },
          { nome: "Euthymía", alt: ["serenità"], desc: "Il fine dell'etica di Democrito: la tranquillità dell'animo, ottenuta con misura e moderazione dei desideri. Anticipa Epicuro." }
        ]
      }
    ]
  },

  /* --------------------------------------------- SOFISTI E SOCRATE */
  "sofisti-socrate": {
    id: "sofisti-socrate",
    titolo: "I Sofisti e Socrate",
    autore: "Unità 2 · L'età classica",
    sottotitolo: "L'indagine sull'uomo: la svolta antropologica",
    epoca: "V secolo a.C.",
    lingua: "Atene, l'età di Pericle",
    tag: ["Relativismo", "Nómos e physis", "Maieutica", "Virtù"],
    epigrafe: "L'uomo è misura di tutte le cose. — Protagora · So di non sapere. — Socrate",
    colore: "blu",
    parti: [
      {
        titolo: "Capitolo 1 — I sofisti",
        sottotitolo: "I maestri di virtù e la crisi delle certezze",
        canti: [
          {
            n: 1, romano: "1", titolo: "Chi erano i sofisti: da «imbroglioni» a protagonisti",
            chiave: "Per secoli screditati come venditori di parole, oggi rivalutati: sono i primi intellettuali di professione e gli inventori dell'educazione laica.",
            testo: `*Sophistés* significava in origine semplicemente «sapiente, esperto». Divenne un insulto per due ragioni.

La prima è **Platone**, che li combatté per tutta la vita e li presentò come «cacciatori a pagamento di giovani ricchi», mercanti di un sapere apparente. La seconda è che i sofisti **facevano pagare le lezioni**: per l'aristocrazia greca, che considerava nobile solo il sapere disinteressato, era una vergogna — mentre per noi è semplicemente il segno di una professione.

La rivalutazione moderna (da Hegel in poi) ha ribaltato il giudizio. I sofisti sono:
- i **primi intellettuali di professione**, che vivono del proprio sapere e non di rendita;
- i fondatori di un'**educazione laica** (*paideia*) aperta a chiunque possa pagarla, e non riservata per nascita;
- coloro che compiono la **svolta antropologica**: smettono di interrogare la natura e interrogano l'uomo, le sue leggi, il suo linguaggio, i suoi valori;
- gli inventori di una **critica sistematica della tradizione**: nulla è giusto solo perché «si è sempre fatto così».

Non furono una scuola con una dottrina comune, ma un movimento con un'aria di famiglia: interesse per l'uomo, fiducia nell'educazione, **relativismo** dei valori, centralità della parola e dell'arte del discorso.

L'accusa che resta in piedi è quella di **strumentalismo**: molti sofisti insegnavano a «rendere più forte il discorso più debole», cioè a vincere una discussione indipendentemente dalla verità. È il rischio, sempre attuale, di una retorica separata dall'etica.`
          },
          {
            n: 2, romano: "2", titolo: "L'ambiente storico: l'Atene di Pericle",
            chiave: "Nella democrazia ateniese si decide in assemblea e nei tribunali: chi sa parlare bene ha potere. È la domanda sociale che crea l'offerta dei sofisti.",
            testo: `I sofisti non nascono per caso nell'Atene della seconda metà del V secolo. Sono la risposta a un bisogno preciso.

Dopo le **guerre persiane** Atene è la potenza egemone del mondo greco, ricca e sicura di sé. Con **Pericle** la **democrazia** raggiunge il massimo sviluppo: i cittadini decidono di persona nell'assemblea (*ekklesía*), le cariche sono elettive o sorteggiate, i tribunali sono popolari e ciascuno deve difendersi da solo.

In un sistema così, la **parola è potere**. Chi sa argomentare in pubblico, replicare, convincere una folla di migliaia di persone, riesce a incidere sulle decisioni; chi non lo sa fare è escluso di fatto, anche se ne avrebbe diritto per legge. Nell'*Epitafio* riportato da Tucidide, Pericle rivendica con orgoglio che ad Atene la discussione non è un ostacolo all'azione, ma la sua premessa.

Ecco allora la domanda sociale a cui i sofisti rispondono: si può **insegnare** la capacità di parlare bene, di deliberare, di amministrare la città? Cioè: la *virtù politica* si può insegnare?

La risposta dei sofisti è sì, ed è una risposta rivoluzionaria. L'aristocrazia sosteneva che la virtù (*aretè*) fosse un dono di **nascita**, legato al sangue nobile. Dire che si insegna significa dire che **chiunque** può acquisirla: è una legittimazione culturale della democrazia.

Non a caso i sofisti sono spesso stranieri (*métoikoi*), viaggiatori che si spostano di città in città. E proprio i viaggi, come già per i primi filosofi, alimentano il relativismo: chi ha visto molte città sa che ogni popolo ha leggi e costumi diversi, e tutti convinti di essere nel giusto.`
          },
          {
            n: 3, romano: "3", titolo: "Protagora: l'uomo misura di tutte le cose",
            opere: "Antilogie · Sugli dei",
            chiave: "«L'uomo è misura di tutte le cose»: non esiste una verità assoluta, ma solo ciò che appare a ciascuno. Umanismo, fenomenismo, relativismo.",
            testo: `**Protagora di Abdera** (circa 490–420 a.C.), il più famoso dei sofisti, è autore della frase più citata dell'intera sofistica: «**L'uomo è misura di tutte le cose: di quelle che sono in quanto sono, di quelle che non sono in quanto non sono**».

La frase contiene tre tesi intrecciate:
- **Umanismo**: il criterio del vero non è più la natura, il cosmo o gli dei, ma **l'uomo**.
- **Fenomenismo**: noi non conosciamo le cose come sono in sé, ma solo come **ci appaiono**. L'esempio classico: lo stesso vento è freddo per chi ha i brividi e caldo per chi non li ha. Ed è *davvero* freddo per l'uno e caldo per l'altro: entrambi dicono il vero.
- **Relativismo**: se ogni apparenza è vera per chi la prova, non esiste **una** verità valida per tutti.

Resta aperta una questione interpretativa: «uomo» significa il **singolo individuo** (relativismo radicale: tante verità quanti sono gli uomini) o l'**uomo in quanto specie** (relativismo moderato: la conoscenza è relativa alle strutture umane comuni, non ai capricci di ciascuno)? La seconda lettura, oggi preferita da molti, avvicina Protagora a Kant più che al soggettivismo spicciolo.

Ne segue la dottrina delle **antilogie**: su ogni questione esistono due discorsi contrari, ed è sempre possibile sostenere entrambi. Da qui l'accusa (Aristofane, Platone) di insegnare a «rendere più forte il discorso più debole».

Anche sugli dei Protagora è prudente fino allo scetticismo: «riguardo agli dei non posso sapere né se sono né se non sono, né quali siano: molte cose lo impediscono, l'oscurità della questione e la brevità della vita umana». Questa frase gli costò, secondo la tradizione, l'accusa di empietà e l'esilio.`
          },
          {
            n: 4, romano: "4", titolo: "Protagora: l'utile, la pólis e il mito di Prometeo",
            chiave: "Se non c'è il vero assoluto resta un criterio pratico: l'utile. Non tutte le opinioni valgono uguale — alcune fanno vivere meglio la città.",
            testo: `Se ogni opinione è vera, come si decide? Protagora non cade nell'indifferenza: sostituisce al criterio del **vero** quello dell'**utile**.

Le opinioni sono tutte ugualmente *vere*, ma non tutte ugualmente *utili*. Il sapiente è come il **medico**: non trasforma il falso in vero, ma il peggio in meglio, sostituendo a uno stato dannoso uno stato vantaggioso. Al malato il cibo sembra amaro e al sano dolce: nessuno dei due sbaglia, ma essere sani è meglio. Allo stesso modo l'educatore politico non insegna la verità, ma condizioni migliori per la comunità. È quella che alcuni studiosi chiamano la «**razionalità debole**» di Protagora: rinuncia all'assoluto, non alla ragione.

Il criterio dell'utile ha un riferimento preciso: la **pólis**. Ciò che è giusto è ciò che la città delibera come tale, finché lo delibera; il compito del sapiente è portarla a deliberare meglio. È una difesa raffinata della democrazia deliberativa, non un invito al «tutto va bene».

**Il mito di Prometeo.** Nell'omonimo dialogo di Platone, Protagora racconta: Epimeteo distribuì agli animali le qualità (velocità, artigli, pelliccia) e si dimenticò dell'uomo, lasciandolo nudo e indifeso. Prometeo rubò allora ad Efesto e Atena il fuoco e le **arti tecniche**. Ma gli uomini continuavano a sterminarsi, perché mancava loro l'arte politica. Zeus mandò dunque Ermes a distribuire **pudore (aidós) e giustizia (díke)** — e ordinò di darli **a tutti**, non a pochi specialisti, perché senza di essi la città non può esistere.

Il mito argomenta due punti in un colpo solo: la civiltà è **conquista umana** e non dono naturale (tesi progressista); e il senso di giustizia appartiene potenzialmente a **ogni cittadino**, il che giustifica la democrazia — ma va **coltivato con l'educazione**, e questo giustifica il mestiere del sofista.`
          },
          {
            n: 5, romano: "5", titolo: "Gorgia: il nulla e la potenza della parola",
            opere: "Sul non essere · Encomio di Elena · Difesa di Palamede",
            chiave: "Nulla esiste; se esistesse non sarebbe conoscibile; se lo fosse non sarebbe comunicabile. Crollata la verità, resta la parola: e la parola è un potere immenso.",
            testo: `**Gorgia da Lentini** (circa 485–375 a.C.), siciliano, arrivò ad Atene come ambasciatore e stupì tutti con la sua prosa ritmica e ricca di figure. Se Protagora moltiplica le verità, Gorgia le azzera.

**I tre argomenti del *Sul non essere*** (parodia rovesciata del poema di Parmenide):
- **Nulla esiste.** Se qualcosa esistesse, sarebbe o essere o non essere; il non essere non è; l'essere dovrebbe essere eterno o generato, uno o molteplice — e ogni ipotesi genera contraddizioni. Dunque nulla è.
- **Se anche qualcosa esistesse, non sarebbe conoscibile.** Perché pensiamo anche cose inesistenti (carri che corrono sul mare, la Chimera): dunque pensiero ed essere non coincidono, e il criterio di Parmenide salta.
- **Se anche fosse conoscibile, non sarebbe comunicabile.** Perché comunichiamo con **parole**, e la parola non è la cosa: il colore si vede, il suono si ode, e nessuna parola trasporta nell'altro la mia esperienza.

Il risultato è un **nichilismo conoscitivo**: se la verità non esiste, o è incomunicabile, non c'è più un sapere che possa fondare i discorsi. Ma proprio qui Gorgia compie il capovolgimento: se la parola non descrive la realtà, allora **crea** la propria realtà. Il *lógos* diventa autonomo, e con esso la **retorica**.

Nell'**Encomio di Elena** — esercizio virtuosistico di difesa dell'indifendibile — Gorgia elenca quattro possibili cause della fuga di Elena (il destino, la forza, l'amore, la persuasione) e in tutti i casi la assolve. Della parola dà una definizione celebre: «**un gran dominatore, che con piccolissimo corpo compie opere divine**»: può togliere la paura, spegnere il dolore, suscitare pietà; agisce sull'anima come i farmaci sul corpo. La parola è dunque una **droga** potentissima — e chi è persuaso, argomenta Gorgia, è vittima di una violenza, non colpevole.

**La visione tragica.** Nel suo pensiero affiora infine un tratto pessimistico: gli uomini sono in balìa del caso (*kairós*) e delle passioni, non esiste una regola universale d'azione, bisogna cogliere l'occasione opportuna momento per momento. La saggezza non è scienza, è tempismo.`
          },
          {
            n: 6, romano: "6", titolo: "Nómos e physis: il problema delle leggi",
            chiave: "Le leggi sono convenzioni umane (nómos) o hanno un fondamento naturale (physis)? Da qui nascono l'uguaglianza di Antifonte e il diritto del più forte di Trasimaco.",
            testo: `È il dibattito più fecondo di tutta la sofistica, e riguarda direttamente la politica.

Il **nómos** è la legge, l'usanza, la convenzione stabilita dagli uomini. La **physis** è la natura. Domanda: le leggi rispecchiano un ordine naturale, oppure sono accordi arbitrari che potrebbero essere diversi?

I sofisti, osservando la varietà delle legislazioni, concludono quasi tutti che il nómos è **convenzionale**. Ma da questa premessa comune partono conclusioni opposte:

- **Il filone democratico e ugualitario. Antifonte** sostiene che le leggi sono «aggiunte», mentre gli obblighi naturali sono necessari; e soprattutto trae una conseguenza clamorosa per l'epoca: per natura **siamo tutti uguali**, greci e barbari, «tutti respiriamo l'aria dalla bocca e dal naso». Le distinzioni di nascita e di stirpe sono pure convenzioni. È una delle prime affermazioni di uguaglianza universale del pensiero occidentale. Anche **Alcidamante** dichiarerà che «la natura non ha fatto nessuno schiavo».
- **Il filone aristocratico e cinico. Trasimaco**, nel primo libro della *Repubblica* di Platone, definisce la giustizia «l'utile del più forte»: le leggi le fa chi comanda, e le fa a proprio vantaggio, chiamando poi «giusto» ciò che gli conviene. **Callicle**, nel *Gorgia*, va oltre: le leggi sono l'arma con cui i **deboli**, che sono i più, imbrigliano i forti; ma per natura è giusto che il migliore prevalga. È un'anticipazione impressionante di temi che ritroveremo in Nietzsche.
- **Il filone cinico-religioso. Crizia** (zio di Platone e tiranno) sostiene che gli dei sono stati **inventati** da un uomo astuto per spaventare chi delinque di nascosto: la religione come strumento di controllo sociale.

Il problema resta aperto ed è tuttora vivo: esistono diritti «naturali» validi ovunque, o ogni cultura ha solo le proprie regole? Socrate e Platone reagiranno proprio a questa domanda, cercando un fondamento della giustizia che non dipenda né dalla forza né dalla convenzione.`
          },
          {
            n: 7, romano: "7", titolo: "Linguaggio, religione e crisi della sofistica",
            chiave: "I sofisti fondano la grammatica e la retorica, ma la loro critica finisce per travolgere sé stessa: se tutto è opinione, anche il loro insegnamento lo è.",
            testo: `**L'arte della parola.** I sofisti sono i primi a studiare il linguaggio come oggetto autonomo. **Prodico di Ceo** si dedica alla **sinonimica**, cioè alla distinzione precisa tra termini apparentemente equivalenti (piacere, godimento, letizia): è l'inizio della semantica. **Ippia di Elide** coltiva un sapere enciclopedico e la mnemotecnica. Protagora classifica i generi dei nomi e i modi del verbo: nasce la **grammatica**. E naturalmente si sviluppa la **retorica**, con le sue regole per la costruzione del discorso persuasivo.

Il punto teorico è che la parola non è più considerata un semplice specchio delle cose: ha regole proprie, effetti propri, potere proprio. Da qui una domanda che attraverserà tutta la filosofia: il nome appartiene alla cosa **per natura** o **per convenzione**? Ne farà un dialogo intero Platone, il *Cratilo*.

**La religione.** Sul divino le posizioni sofistiche vanno dall'**agnosticismo** prudente di Protagora all'**ateismo** militante di Diagora, alla teoria di **Crizia** della religione come invenzione politica, fino a **Prodico**, che spiega la nascita degli dei come divinizzazione delle cose utili alla vita (il pane come Demetra, il vino come Dioniso): una teoria antropologica della religione sorprendentemente moderna.

**La crisi.** La sofistica si logora per due ragioni.

La prima è **interna e logica**: il relativismo si morde la coda. Se ogni opinione è vera, è vera anche l'opinione di chi afferma che il relativismo è falso. Platone userà questo argomento nel *Teeteto* per confutare Protagora, ed è tuttora considerato una obiezione seria.

La seconda è **storica**: la guerra del Peloponneso, la peste, la sconfitta di Atene e le violenze dei Trenta Tiranni creano un clima in cui la critica di ogni valore appare come una delle cause del disastro. La generazione successiva chiederà certezze, non abilità dialettiche.

Ma l'eredità resta enorme: dopo i sofisti nessuno potrà più dare per ovvie le leggi, le credenze e le parole della propria comunità. E chi vorrà difenderle dovrà **argomentare** — che è esattamente ciò che faranno Socrate, Platone e Aristotele.`
          }
        ]
      },
      {
        titolo: "Capitolo 2 — Socrate",
        sottotitolo: "Il filosofo che non scrisse nulla",
        canti: [
          {
            n: 8, romano: "8", titolo: "La vita e la figura di Socrate",
            chiave: "Ateniese, brutto, povero, instancabile: passa la vita a interrogare i concittadini per strada. Non scrive niente, perché la filosofia per lui è dialogo vivo.",
            testo: `**Socrate** (470/469–399 a.C.) nasce ad Atene da Sofronisco, scultore, e Fenarete, levatrice (un dettaglio che userà come metafora del proprio metodo). Sposa Santippe, rimasta proverbiale per il brutto carattere. Combatte come oplita a Potidea, Delio e Anfipoli, dando prova di coraggio e resistenza fisica straordinari.

Fisicamente è l'opposto dell'ideale greco: naso camuso, occhi sporgenti, pancia, andatura goffa. Nel *Simposio* Alcibiade lo paragona ai **sileni**, statuette grottesche che aperte contengono immagini di dei: fuori ridicolo, dentro divino. È un'immagine chiave, perché rovescia l'equazione greca tra bello e buono.

Non ha una scuola, non prende compensi, non scrive libri. Passa le giornate nell'**agorà**, nelle palestre, nelle botteghe, fermando chiunque — politici, poeti, artigiani, giovani — e ponendo domande. La sua filosofia coincide con questa pratica quotidiana: non è un sistema, è un **modo di vivere**.

Perché non scrisse? Perché per lui il sapere nasce solo dal dialogo vivo: un testo scritto non può rispondere a chi lo interroga, non si adatta all'interlocutore, non costringe nessuno a rendere conto delle proprie parole. (Lo stesso argomento tornerà, per bocca di Platone, nel *Fedro*.)

In città è una presenza scomoda e ambigua. Aristofane, nelle *Nuvole*, lo mette in scena come un ciarlatano sospeso in un cesto che studia le nuvole e insegna a non pagare i debiti: agli occhi del pubblico è un sofista come gli altri. Sarà un fraintendimento fatale.

Sé stesso si descrive nell'*Apologia* con due immagini: il **tafano**, che punge un cavallo grosso e pigro per tenerlo sveglio, e la **torpedine** marina, il pesce che paralizza chi lo tocca — perché chi discute con lui finisce sempre per scoprire di non sapere ciò che credeva di sapere.`
          },
          {
            n: 9, romano: "9", titolo: "La questione socratica: il problema delle fonti",
            chiave: "Socrate non scrisse nulla e i suoi testimoni si contraddicono: quanto di ciò che leggiamo è Socrate e quanto è Platone? Problema mai risolto.",
            testo: `Ricostruire il pensiero di Socrate è il caso più difficile della storiografia filosofica. Abbiamo quattro fonti principali, e non concordano.

- **Aristofane** (*Nuvole*, 423 a.C.): lo ritrae come un sofista che indaga i fenomeni celesti e insegna a vincere le cause ingiuste. È una **caricatura comica**, ma preziosa: dice come Socrate appariva al cittadino medio, ed è l'unica testimonianza scritta mentre era ancora vivo.
- **Senofonte** (*Memorabili*, *Apologia*, *Simposio*): un allievo militare, concreto, poco filosofo. Il suo Socrate è un uomo perbene, moralista e di buon senso, che insegna virtù pratiche e utili. Il difetto opposto: è talmente ragionevole che non si capisce perché mai lo avrebbero condannato a morte.
- **Platone**: la fonte più ampia e più profonda. Socrate è protagonista di quasi tutti i dialoghi. Ma il problema è evidente: nei dialoghi giovanili espone probabilmente le posizioni del maestro, in quelli maturi diventa il **portavoce delle idee di Platone stesso**. Dove finisce l'uno e comincia l'altro?
- **Aristotele**: non lo conobbe di persona, ma essendo estraneo alla venerazione discepolare offre giudizi storicamente più freddi. Gli attribuisce due meriti precisi: i **ragionamenti induttivi** e le **definizioni universali** — e aggiunge esplicitamente che Socrate «non separava» gli universali dalle cose, mentre Platone sì. È l'indizio più forte per distinguere i due.

La critica moderna oscilla: c'è chi privilegia Platone, chi Senofonte, chi (come Olof Gigon) ritiene irrecuperabile il Socrate storico e legge tutte le fonti come letteratura.

La posizione più diffusa oggi: il nucleo storico sta nel **metodo del dialogo**, nel **non sapere**, nella **ricerca delle definizioni** e nella **centralità dell'anima e della virtù**; la teoria delle idee, l'immortalità dimostrata e la costruzione politica sono invece elaborazioni platoniche.`
          },
          {
            n: 10, romano: "10", titolo: "Socrate e i sofisti: somiglianze e differenza decisiva",
            chiave: "Come i sofisti si occupa dell'uomo e usa il dialogo; a differenza loro cerca una verità universale, non insegna a pagamento e non vuole vincere ma capire.",
            testo: `Agli occhi degli Ateniesi Socrate era un sofista, e non a torto: condivide con loro molto.

**Somiglianze:**
- l'oggetto: non la natura ma l'**uomo**, la virtù, la giustizia, il linguaggio;
- lo strumento: la **discussione**, non la rivelazione né il poema;
- l'atteggiamento **critico** verso la tradizione e le opinioni ricevute;
- la pratica della **confutazione** dell'avversario.

**Differenze, che però sono decisive:**
- **Il fine.** Il sofista vuole **vincere** la discussione (*eristica*); Socrate vuole **trovare il vero** insieme all'altro (*dialettica*). Nel primo caso l'interlocutore è un avversario, nel secondo un collaboratore.
- **La verità.** I sofisti concludono che non esiste una verità valida per tutti; Socrate è convinto che esista un **universale** — che cosa sia la giustizia in sé, oltre le opinioni — e che si possa cercare col ragionamento. Non lo trova quasi mai, ma non rinuncia mai a cercarlo.
- **Il denaro.** I sofisti insegnano a pagamento; Socrate non prende un obolo e muore povero. Non è dettaglio da poco: significa che non ha un «prodotto» da vendere.
- **Il sapere.** Il sofista si presenta come **maestro** che possiede un sapere e lo trasmette; Socrate dichiara di **non sapere** e di non avere nulla da insegnare: può solo aiutare l'altro a partorire ciò che ha dentro.
- **La città.** I sofisti sono stranieri di passaggio; Socrate è un cittadino che non lascia mai Atene, ne accetta le leggi fino alla morte, e proprio per questo la critica dall'interno.

Platone dedicherà molte pagine a scavare questo confine, perché da esso dipende la legittimità stessa della filosofia: se il filosofo fosse solo un sofista più bravo, la condanna di Socrate sarebbe stata giusta.`
          },
          {
            n: 11, romano: "11", titolo: "Il metodo: non sapere, ironia, maieutica",
            chiave: "Tre mosse: dichiarare di non sapere, smontare le false certezze dell'altro (ironia), aiutarlo a partorire il pensiero giusto (maieutica).",
            testo: `Il dialogo socratico non è una chiacchierata: ha una struttura precisa in tre momenti.

**1. Il non sapere.** L'oracolo di Delfi, interrogato da Cherefonte, rispose che nessuno era più sapiente di Socrate. Lui, stupito, andò a verificare interrogando chi passava per sapiente — politici, poeti, artigiani — e scoprì che tutti credevano di sapere ciò che non sapevano. Da qui la conclusione: «**io so di non sapere**», e proprio in questo consiste la mia superiorità. Non è scetticismo né falsa modestia: è la condizione di partenza della ricerca. Chi crede di sapere non cerca; solo chi riconosce la propria ignoranza si mette in moto. È anche la traduzione filosofica del motto delfico «**conosci te stesso**».

**2. L'ironia** (*eironèia*, «dissimulazione»). Socrate finge di essere ignorante e chiede all'altro di istruirlo. L'interlocutore, lusingato, propone una definizione; Socrate pone domande apparentemente innocue e lo conduce, passo dopo passo, a **contraddirsi da solo**. È la **confutazione** (*élenchos*). Il risultato è l'**aporia**: l'interlocutore scopre di non sapere. Momento sgradevole — molti se ne vanno irritati — ma indispensabile: è la pulizia del terreno. Non si può riempire un vaso già pieno di opinioni sbagliate.

**3. La maieutica** (*maieutiké téchne*, «arte della levatrice»). Come la madre Fenarete faceva partorire i corpi, Socrate fa partorire le **anime**. La levatrice non genera il bambino: aiuta a farlo nascere, e sa riconoscere i parti sani dai falsi. Così il maestro non trasmette contenuti: con le domande giuste aiuta l'allievo a **tirare fuori da sé** la risposta e a distinguere le idee vere da quelle sterili.

Attenzione a un punto sottile: la maieutica presuppone che la verità sia **già dentro** l'interlocutore. Platone ne trarrà una conseguenza metafisica (la reminiscenza: l'anima ricorda ciò che ha visto prima di nascere); in Socrate resta soprattutto una fiducia nella ragione comune a tutti gli uomini.`
          },
          {
            n: 12, romano: "12", titolo: "La ricerca del «che cos'è»: induzione e definizione",
            chiave: "Socrate chiede sempre «che cos'è?», non esempi. Cercando la definizione universale inventa il concetto: il primo passo del pensiero scientifico.",
            testo: `La domanda tipica di Socrate è sempre la stessa: «**tí esti?**», che cos'è? Che cos'è il coraggio, la giustizia, la pietà, la bellezza.

E la risposta tipica dell'interlocutore è sempre sbagliata allo stesso modo: fornisce **esempi** invece della **definizione**. Alla domanda «che cos'è la pietà?» Eutifrone risponde: «è pio ciò che sto facendo io ora, denunciare mio padre». Socrate replica che non gli interessa *un* caso di pietà, ma «quella forma per cui tutte le cose pie sono pie»: il **carattere comune** che permette di riconoscerle come tali.

Il procedimento è quindi **induttivo**: si parte da casi particolari, li si confronta, si eliminano le caratteristiche accidentali e si cerca ciò che resta costante — l'**universale**. Aristotele attribuisce esplicitamente a Socrate due invenzioni: i *ragionamenti induttivi* e le *definizioni universali*.

Perché è così importante? Per tre ragioni.
- **Filosoficamente**: è la nascita del **concetto**. Senza definizioni universali non esiste scienza, perché la scienza non parla di questo o quel caso ma di ciò che vale sempre.
- **Contro i sofisti**: se esiste un carattere comune a tutte le azioni giuste, allora la giustizia non è pura convenzione. Il relativismo perde terreno.
- **Eticamente**: non si può agire bene per caso. Solo chi sa **che cos'è** il coraggio può essere coraggioso in modo affidabile, anche in situazioni nuove.

Va detto che i dialoghi socratici finiscono quasi sempre **senza** la definizione cercata. Ma il fallimento è produttivo: si sono eliminate risposte sbagliate, si è chiarita la domanda, e soprattutto si è imparato *come* si cerca. Sarà Platone a compiere il passo successivo, trasformando quegli universali cercati da Socrate in realtà esistenti di per sé: le **idee**.`
          },
          {
            n: 13, romano: "13", titolo: "La morale: la virtù è conoscenza",
            chiave: "Chi conosce il bene lo fa: nessuno sbaglia volontariamente. L'intellettualismo etico, tesi affascinante e molto discussa.",
            testo: `L'etica socratica ruota attorno a un'identificazione: **virtù = conoscenza**. È il cosiddetto **intellettualismo etico**.

Il ragionamento è questo. Ogni uomo desidera il proprio bene. Se qualcuno agisce male, è perché **si sbaglia** sul proprio bene: scambia per bene ciò che gli nuoce. Dunque il male è **ignoranza**, e da qui i tre celebri «paradossi» dell'etica socratica:
- **nessuno fa il male volontariamente**;
- **è meglio subire un'ingiustizia che commetterla** (chi la commette danneggia la propria anima, che vale più del corpo e dei beni);
- **chi sbaglia volontariamente è migliore di chi sbaglia involontariamente** (perché almeno sa distinguere il bene).

Ne segue che la virtù, essendo sapere, **si può insegnare** — su questo Socrate concorda con i sofisti — ma non trasmettendo nozioni: solo attraverso la ricerca comune, perché deve diventare convinzione interiore.

Ne segue anche l'**unità delle virtù**: coraggio, temperanza, giustizia, pietà non sono virtù separate, ma aspetti di un unico sapere del bene. E infine il legame **virtù–felicità**: chi conosce il bene lo pratica, e chi lo pratica ha l'anima in ordine — è *felice* nel senso pieno di *eudaimonía*, che non è piacere momentaneo ma vita riuscita.

**L'obiezione classica.** Aristotele osserverà che Socrate «eliminò la parte irrazionale dell'anima»: nella realtà esiste l'*akrasía*, l'incontinenza, il caso di chi **sa** quale sia il bene e tuttavia fa il contrario, trascinato dalla passione. Chiunque abbia rimandato di studiare sapendo di doverlo fare ha un'esperienza diretta dell'obiezione. Il cristianesimo aggiungerà il tema della volontà debole e del peccato consapevole («vedo il meglio e faccio il peggio»).

Resta però il nucleo forte: **non si è buoni per abitudine o per obbedienza, ma per comprensione**. Ed è la ragione per cui, in fondo, ha senso studiare etica invece di limitarsi a imparare le regole.`
          },
          {
            n: 14, romano: "14", titolo: "Il demone, l'anima e la religione",
            chiave: "Il daimónion è una voce interiore che lo trattiene dal fare il male: coscienza morale, non superstizione. E l'anima è ciò che davvero siamo.",
            testo: `**Il daimónion.** Socrate dice di avvertire fin da bambino una **voce divina** interiore, un *daimónion*, che interviene «solo per distogliere, mai per spingere». Non gli suggerisce che cosa fare: gli impedisce di fare ciò che sarebbe sbagliato.

Come interpretarlo? Le letture sono tre: una religiosa (un segno divino autentico), una psicologica (la voce della **coscienza morale**, di cui Socrate sarebbe il primo grande testimone in Occidente), una razionalista (l'intuizione immediata dell'uomo saggio, forma abbreviata del ragionamento). Storicamente il *daimónion* ebbe conseguenze pesanti: fu uno dei capi d'accusa al processo, perché sembrava l'introduzione di «divinità nuove».

**L'anima.** Il contributo forse più duraturo di Socrate è aver spostato il centro dell'identità umana sulla **psyché**. Prima di lui, nella cultura omerica, l'anima era un'ombra pallida che sopravvive senza coscienza. Con Socrate l'anima diventa **ciò che l'uomo veramente è**: la sede della ragione e della responsabilità morale.

Da qui l'imperativo che ripete instancabilmente nell'*Apologia*: prendersi cura non delle ricchezze, del corpo o della reputazione, ma **della propria anima**, perché «non è dalle ricchezze che nasce la virtù, ma dalla virtù nascono le ricchezze e ogni altro bene». È una rivoluzione nella scala dei valori, e prepara il terreno tanto a Platone quanto alla morale cristiana.

**La religione.** Socrate non è un ateo: partecipa ai culti della città, crede in una divinità razionale che ha ordinato il mondo con provvidenza (secondo Senofonte, argomenta l'esistenza di un ordinatore dalla finalità degli organi del corpo). Ma la sua religiosità è **interiore e razionale**, non rituale: e a un tribunale abituato a identificare la pietà con l'osservanza pubblica dei riti, questo poteva apparire indistinguibile dall'empietà.`
          },
          {
            n: 15, romano: "15", titolo: "Il processo e la morte di Socrate",
            opere: "Apologia di Socrate · Critone · Fedone (Platone)",
            chiave: "Accusato di empietà e di corrompere i giovani, rifiuta di fuggire e beve la cicuta: la coerenza tra ciò che pensa e ciò che fa diventa il simbolo della filosofia.",
            testo: `**L'accusa.** Nel 399 a.C. Meleto, Anito e Licone accusano Socrate di due capi: **non riconoscere gli dei della città e introdurne di nuovi**, e **corrompere i giovani**.

**Le cause reali.** Dietro l'accusa formale c'è un contesto politico incandescente. Atene ha appena perso la guerra del Peloponneso (404 a.C.), ha subito il regime dei **Trenta Tiranni** e ha da poco restaurato la democrazia con un'amnistia. Socrate era stato maestro di **Alcibiade**, traditore della città, e di **Crizia**, capo dei Trenta; criticava apertamente il sorteggio delle cariche pubbliche; era percepito come un sofista che insegnava a discutere ogni cosa, incluse le tradizioni. L'amnistia impediva di processarlo per motivi politici: l'accusa di empietà era la via praticabile.

**Il processo.** Nell'*Apologia* platonica Socrate non si difende come ci si aspetterebbe. Non implora, non porta la famiglia in lacrime davanti ai giudici (pratica normale). Rivendica la propria missione come un **incarico divino** e dichiara che, se anche lo assolvessero a condizione di smettere di filosofare, rifiuterebbe: «obbedirò al dio piuttosto che a voi». Condannato con circa 280 voti contro 220, alla richiesta di proporre una pena alternativa suggerisce provocatoriamente di essere **mantenuto a spese pubbliche** come un benefattore. La seconda votazione, per la morte, passa con uno scarto più ampio.

**Il rifiuto della fuga.** Nel *Critone* gli amici hanno organizzato l'evasione. Socrate rifiuta con un ragionamento rigoroso: ha accettato per settant'anni i vantaggi delle leggi ateniesi, e non può violarle appena gli tornano contro; una sentenza ingiusta è colpa degli uomini, non delle leggi; e comunque **non si risponde all'ingiustizia con un'altra ingiustizia**.

**La morte.** Nel *Fedone*, circondato dagli amici, beve la cicuta con serenità, argomentando che il filosofo passa la vita a «esercitarsi a morire», cioè a separare l'anima dal corpo. Le ultime parole sono enigmatiche: «Critone, dobbiamo un gallo ad Asclepio», il dio della guarigione — come se la morte fosse guarigione dalla vita.

**Il significato.** La morte di Socrate diventa il simbolo dell'intellettuale che paga di persona la propria coerenza, del conflitto tra coscienza individuale e potere, e della filosofia come vita e non come professione. Per Platone, che aveva ventotto anni, fu il trauma decisivo: la città democratica aveva ucciso l'uomo più giusto. Da lì nasce tutta la sua riflessione politica.`
          },
          {
            n: 16, romano: "16", titolo: "Le scuole socratiche minori",
            chiave: "Ogni allievo prende un pezzo di Socrate e lo porta all'estremo: i megarici la logica, i cinici l'autosufficienza, i cirenaici il piacere.",
            testo: `Dopo la morte del maestro, i discepoli si dispersero e fondarono scuole molto diverse tra loro. Il fatto stesso che da un solo maestro nascano dottrine opposte dice quanto il pensiero socratico fosse aperto — e quanto ciascuno vi abbia trovato ciò che cercava.

**La scuola megarica** (Euclide di Megara). Unisce l'insegnamento socratico sul Bene con l'eleatismo: il Bene è uno, immutabile, ed è l'Essere di Parmenide. I megarici si specializzano nella **logica e nell'eristica**, elaborando paradossi famosi come il *mentitore* («io sto mentendo»: se è vero è falso, se è falso è vero) e il *sorite* (togliendo un chicco alla volta, quando un mucchio smette di essere un mucchio?). Sono ricerche che alimenteranno la logica antica e moderna.

**La scuola cinica** (Antistene, e soprattutto **Diogene di Sinope**). Il nome viene forse dal ginnasio *Cinosarge* o dall'aggettivo *kynikós*, «da cane». Prendono da Socrate la **frugalità** e l'indipendenza dai bisogni e li portano all'estremo: la virtù è **autosufficienza** (*autárkeia*), tutto il resto — ricchezza, fama, convenzioni, patria, famiglia — è indifferente e va rifiutato. Diogene vive in una botte, getta via la ciotola vedendo un bambino bere con le mani, gira di giorno con una lanterna «cercando l'uomo». Ad Alessandro Magno, che gli chiede che cosa desideri, risponde: «che ti scosti dal mio sole». È l'antenato della **cosmopolitica** (si dichiara «cittadino del mondo») e maestro indiretto dello stoicismo.

**La scuola cirenaica** (Aristippo di Cirene). Conclusione opposta: se ciò che conta è la felicità, allora il bene è il **piacere** immediato, corporeo e presente (*edonismo*). Il saggio non rinuncia ai piaceri, ma li **domina** senza esserne dominato: «li possiedo, non ne sono posseduto». Rispetto all'epicureismo successivo, i cirenaici valorizzano il piacere in movimento e attuale, non l'assenza di dolore.

Da un unico Socrate: chi la logica, chi l'ascesi, chi il piacere. La sintesi più ambiziosa, quella che cerca di tenere insieme tutto, sarà però di un altro allievo — **Platone**.`
          }
        ]
      }
    ],
    notaPersonaggi: "Protagonisti, concetti chiave e testi da ricordare dell'età classica.",
    personaggi: [
      {
        gruppo: "1. I sofisti",
        voci: [
          { nome: "Protagora", alt: ["l'uomo-misura"], desc: "«L'uomo è misura di tutte le cose». Umanismo, fenomenismo, relativismo. Le antilogie: su ogni tema esistono due discorsi contrari. Criterio pratico: l'utile per la città. Agnostico sugli dei." },
          { nome: "Gorgia", alt: [], desc: "Sul non essere: nulla esiste, se esistesse non sarebbe conoscibile, se lo fosse non sarebbe comunicabile. La parola è «un gran dominatore» che agisce come un farmaco. Encomio di Elena." },
          { nome: "Prodico", alt: [], desc: "Studia la sinonimica (distinzione precisa tra termini simili). Spiega la religione come divinizzazione delle cose utili: il pane-Demetra, il vino-Dioniso." },
          { nome: "Ippia", alt: [], desc: "Sapere enciclopedico e mnemotecnica. Sostiene l'uguaglianza naturale degli uomini contro le convenzioni della legge." },
          { nome: "Antifonte", alt: [], desc: "Le leggi sono «aggiunte» convenzionali; per natura tutti gli uomini sono uguali, greci e barbari. Una delle prime affermazioni di uguaglianza universale." },
          { nome: "Trasimaco", alt: [], desc: "«La giustizia è l'utile del più forte»: le leggi le fa chi comanda, a proprio vantaggio. Compare nel I libro della Repubblica di Platone." },
          { nome: "Callicle", alt: [], desc: "Nel Gorgia: le leggi sono l'arma con cui i deboli imbrigliano i forti; per natura è giusto che il migliore prevalga." },
          { nome: "Crizia", alt: [], desc: "Zio di Platone e capo dei Trenta Tiranni. Gli dei sarebbero un'invenzione politica di un uomo astuto per spaventare chi delinque di nascosto." }
        ]
      },
      {
        gruppo: "2. I concetti della sofistica",
        voci: [
          { nome: "Relativismo", alt: [], desc: "Non esiste una verità o un valore assoluto: tutto è relativo al soggetto, alla cultura, alla situazione." },
          { nome: "Fenomenismo", alt: [], desc: "Conosciamo solo i fenomeni, cioè le cose come ci appaiono, non come sono in sé." },
          { nome: "Nómos / physis", alt: ["legge / natura"], desc: "La coppia centrale del dibattito politico sofistico: le leggi sono convenzioni umane o hanno fondamento naturale?" },
          { nome: "Antilogia", alt: [], desc: "La tecnica dei discorsi contrapposti: su ogni questione si possono sostenere entrambe le tesi." },
          { nome: "Eristica", alt: [], desc: "L'arte di vincere la disputa a ogni costo, indipendentemente dalla verità. Contrapposta alla dialettica socratica." },
          { nome: "Retorica", alt: [], desc: "L'arte del discorso persuasivo, codificata dai sofisti: strumento di potere nella democrazia assembleare." },
          { nome: "Mito di Prometeo", alt: [], desc: "Nel Protagora di Platone: le arti tecniche sono un furto di Prometeo, ma pudore e giustizia Zeus li dà a tutti. Fondamento mitico della democrazia." }
        ]
      },
      {
        gruppo: "3. Socrate: metodo e concetti",
        voci: [
          { nome: "«So di non sapere»", alt: [], desc: "La consapevolezza della propria ignoranza come punto di partenza obbligato della ricerca. Nasce dal responso dell'oracolo di Delfi." },
          { nome: "Ironia", alt: ["eironèia"], desc: "Fingere di non sapere per condurre l'interlocutore a contraddirsi da solo. Si conclude nell'aporia." },
          { nome: "Confutazione", alt: ["élenchos"], desc: "Mostrare che la tesi dell'altro porta a contraddizione: la fase distruttiva del dialogo." },
          { nome: "Maieutica", alt: ["arte della levatrice"], desc: "La fase costruttiva: aiutare l'interlocutore a «partorire» da sé la verità. Metafora ispirata al mestiere della madre Fenarete." },
          { nome: "Che cos'è? (tí esti)", alt: [], desc: "La domanda socratica per eccellenza: si cerca la definizione universale, non gli esempi. Da qui induzione e concetto." },
          { nome: "Intellettualismo etico", alt: [], desc: "Virtù = conoscenza. Nessuno fa il male volontariamente; meglio subire l'ingiustizia che commetterla. Contestato da Aristotele con l'akrasía." },
          { nome: "Daimónion", alt: ["il demone"], desc: "La voce interiore che lo trattiene dal fare il male, mai lo spinge ad agire. Letta come coscienza morale. Uno dei capi d'accusa al processo." },
          { nome: "Psyché", alt: ["anima"], desc: "Con Socrate diventa la sede della ragione e della responsabilità morale: «prenditi cura della tua anima»." }
        ]
      },
      {
        gruppo: "4. Le scuole socratiche minori",
        voci: [
          { nome: "Megarici", alt: ["Euclide di Megara"], desc: "Bene = Essere di Parmenide. Specialisti di logica ed eristica: paradossi del mentitore e del sorite." },
          { nome: "Cinici", alt: ["Antistene", "Diogene"], desc: "La virtù è autosufficienza (autárkeia): rifiuto di ricchezza, fama e convenzioni. Diogene nella botte, «cittadino del mondo»." },
          { nome: "Cirenaici", alt: ["Aristippo"], desc: "Edonismo: il bene è il piacere presente e corporeo, ma il saggio lo domina senza esserne dominato." }
        ]
      }
    ]
  },

  /* --------------------------------------------------------- PLATONE */
  platone: {
    id: "platone",
    titolo: "Platone",
    autore: "Unità 3 · L'età classica",
    sottotitolo: "La dottrina delle idee e lo Stato giusto",
    epoca: "428/427 – 348/347 a.C.",
    lingua: "Atene · l'Accademia",
    tag: ["Idee", "Anima", "Repubblica", "Mito della caverna"],
    epigrafe: "Le cose belle sono belle per la presenza della bellezza in sé.",
    colore: "oro",
    parti: [
      {
        titolo: "Capitolo 1 — I rapporti con Socrate e con i sofisti",
        sottotitolo: "La vita, le opere, il progetto filosofico",
        canti: [
          {
            n: 1, romano: "1", titolo: "Il platonismo come risposta a una crisi",
            chiave: "Non è filosofia da scrivania: nasce dal trauma della morte di Socrate e dal crollo di Atene. Se la città giusta uccide il giusto, qualcosa va rifondato da capo.",
            testo: `Per capire Platone bisogna partire da un fatto, non da una teoria: nel 399 a.C. la città di Atene, con un processo regolare e democratico, condanna a morte **l'uomo più giusto che Platone abbia conosciuto**.

Attorno c'è una crisi generale. Atene ha perso la guerra del Peloponneso, ha conosciuto il regime violento dei Trenta Tiranni (di cui facevano parte parenti di Platone), ha restaurato una democrazia che si dimostra subito capace di uccidere Socrate. Sul piano culturale, la sofistica ha dissolto ogni valore assoluto: se giusto è solo ciò che la città decide, allora la condanna di Socrate **era giusta**, e questo è per Platone insopportabile.

Da qui nasce tutto il suo pensiero, come risposta a **due domande unite**:
- esiste una verità che non dipenda dalle opinioni? (risposta: la **teoria delle idee**);
- esiste una città giusta che non uccida i giusti? (risposta: la **Repubblica**).

Il legame tra le due è strettissimo, ed è la chiave del sistema: **si può costruire una politica giusta solo se esiste un sapere oggettivo del bene**. Altrimenti governa chi urla più forte o chi è più forte, come dicevano Trasimaco e Callicle.

Platone stesso lo racconta nella *Lettera VII*: da giovane voleva fare politica, si allontanò disgustato dai Trenta prima e dai democratici poi, e concluse che «i mali non cesseranno per gli uomini prima che il genere dei filosofi puri e retti giunga al potere, o quelli che detengono il potere non diventino filosofi».

La filosofia di Platone, insomma, è **filosofia politica anche quando parla di metafisica**.`
          },
          {
            n: 2, romano: "2", titolo: "La vita",
            chiave: "Nobile ateniese, allievo di Socrate a vent'anni, tre viaggi falliti in Sicilia per realizzare lo Stato ideale, e la fondazione dell'Accademia.",
            testo: `**Platone** (428/427–348/347 a.C.), il cui vero nome sarebbe stato Aristocle (*Plátōn*, «dalle spalle larghe», è un soprannome), nasce da una famiglia aristocratica ateniese, imparentata con Solone da parte di madre e con Crizia.

Da giovane si dedica alla poesia e coltiva ambizioni politiche naturali per il suo rango. A circa vent'anni incontra **Socrate** e ne resta segnato per sempre: la tradizione vuole che abbia bruciato le proprie tragedie.

Dopo la condanna del maestro (399) lascia Atene e viaggia per circa dodici anni: **Megara**, forse l'Egitto e Cirene, e soprattutto l'**Italia meridionale**, dove entra in contatto con i **pitagorici** (Archita di Taranto). Da loro assorbe la matematica, la dottrina dell'anima immortale e l'idea della filosofia come purificazione: elementi decisivi per la sua svolta rispetto a Socrate.

**I tre viaggi in Sicilia** sono il capitolo più drammatico. Nel 388 va a Siracusa alla corte di **Dionigi I**, sperando di educare un sovrano; finisce in rotta con il tiranno e, secondo la tradizione, venduto come schiavo a Egina e riscattato da un amico. Torna nel 366 e nel 361 con **Dionigi II**, con l'appoggio di Dione: entrambi i tentativi falliscono e il secondo lo mette in pericolo di vita. Il progetto del «filosofo al potere» si infrange contro la realtà.

Tornato ad Atene nel 387 fonda l'**Accademia**, in un boschetto sacro all'eroe Academo: la prima istituzione stabile di ricerca e insegnamento superiore d'Occidente, con matematica, astronomia e dialettica. Durerà quasi mille anni, fino alla chiusura per ordine di Giustiniano nel 529 d.C.

Muore quasi ottantenne, ad Atene, mentre stava scrivendo le *Leggi*.`
          },
          {
            n: 3, romano: "3", titolo: "Le opere, il dialogo e il mito",
            opere: "circa 36 dialoghi, tutti conservati",
            chiave: "Caso unico nell'antichità: abbiamo tutto. Scrive dialoghi perché la verità nasce dal confronto, e usa i miti dove l'argomentazione non arriva.",
            testo: `Platone è, insieme ad Aristotele, il filosofo antico più fortunato: la sua opera ci è giunta **integralmente** (con l'aggiunta di alcuni scritti spuri). Si divide tradizionalmente in quattro fasi:

- **Dialoghi giovanili o socratici** (*Apologia*, *Critone*, *Ione*, *Lachete*, *Eutifrone*, *Carmide*, *Protagora*): cercano definizioni di singole virtù, finiscono in aporia, riflettono probabilmente il Socrate storico.
- **Dialoghi della maturità** (*Gorgia*, *Menone*, *Cratilo*, *Fedone*, *Simposio*, *Repubblica*, *Fedro*): compare la teoria delle idee, l'immortalità dell'anima, la costruzione politica. Socrate è ormai portavoce di Platone.
- **Dialoghi della vecchiaia o critici** (*Teeteto*, *Parmenide*, *Sofista*, *Politico*, *Filebo*): Platone critica sé stesso, affina la dialettica, affronta il problema del non essere.
- **Ultimi scritti** (*Timeo*, *Crizia*, *Leggi*): cosmologia e progetto politico realistico.

**Perché il dialogo?** Perché la verità, per Platone come per Socrate, non è un contenuto da consegnare ma un percorso da compiere insieme. Il dialogo mostra come si ragiona, non solo che cosa si conclude; conserva le obiezioni; e riproduce sulla pagina la vitalità della ricerca. Il *Fedro* denuncia infatti i **limiti della scrittura**: il testo scritto «dice sempre la stessa cosa», non può rispondere né difendersi, e rischia di produrre l'illusione del sapere (nel mito di Theuth, la scrittura è un rimedio ambiguo: aiuta la memoria e insieme la indebolisce).

**Perché il mito?** Platone è un grandissimo scrittore di miti (la caverna, Er, gli androgini, la biga alata, Atlantide). Ne usa quando l'argomentazione razionale non basta: per parlare dell'anima prima della nascita, dell'aldilà, dell'origine del cosmo. Il mito platonico non sostituisce la ragione, la **prolunga** dove essa non può dimostrare; ed è anche uno strumento pedagogico potente, capace di convincere chi non seguirebbe una dimostrazione.

**Le dottrine non scritte.** Alcune testimonianze (soprattutto di Aristotele) parlano di insegnamenti orali riservati all'Accademia, mai messi per iscritto, riguardanti i principi supremi: l'**Uno** e la **Diade** indeterminata. La cosiddetta «scuola di Tubinga» ritiene che lì stia il vero cuore del platonismo; altri studiosi ridimensionano. Il dibattito è aperto.`
          },
          {
            n: 4, romano: "4", titolo: "La polemica contro i sofisti e il problema del linguaggio",
            opere: "Apologia · Protagora · Gorgia · Cratilo",
            chiave: "Contro i sofisti Platone difende tre cose: la verità esiste, la retorica senza verità è adulazione, e le parole non sono pure convenzioni.",
            testo: `I primi dialoghi sono in gran parte un lungo processo alla sofistica.

**Nel *Protagora*** si discute se la virtù sia insegnabile. Paradossalmente Socrate sostiene di no (perché non è un sapere tecnico trasmissibile) e Protagora di sì; nel corso del dialogo le posizioni si rovesciano, e Socrate arriva a identificare virtù e scienza — cioè a rendere la virtù insegnabile per un'altra via.

**Nel *Gorgia*** l'attacco è frontale. La retorica non è un'arte (*téchne*) ma un'**adulazione** (*kolakeía*): sta alla vera politica come la cucina sta alla medicina. La cucina produce piacere senza sapere che cosa faccia bene; la retorica produce persuasione senza sapere che cosa sia giusto. Contro Callicle, che rivendica il diritto naturale del più forte, Socrate sostiene le tesi più radicali della sua etica: **è meglio subire l'ingiustizia che commetterla**, e chi commette ingiustizia dovrebbe desiderare di essere punito, come il malato desidera la cura.

**Nel *Cratilo*** si affronta il linguaggio: i nomi appartengono alle cose **per natura** (Cratilo) o **per convenzione** (Ermogene)? Platone mostra i limiti di entrambe le tesi e trae la conclusione che conta davvero: la conoscenza **non passa dalle parole**. Le parole sono immagini imperfette; per conoscere bisogna andare alle **cose stesse**, cioè alle realtà stabili — le idee. Il *Cratilo* è così, di fatto, un ponte verso la teoria delle idee: se il linguaggio deve avere una stabilità, deve appoggiarsi a essenze stabili.

**Il ragionamento di fondo** contro il relativismo è quello che Platone svilupperà nel *Teeteto*: se ogni opinione è vera, allora è vera anche l'opinione di chi dice che il relativismo è falso; e se una scienza vale l'altra, non si capisce perché Protagora si facesse pagare per insegnare. Il relativismo, portato in fondo, **si autoconfuta**.

Da questa polemica nasce l'esigenza positiva: trovare qualcosa di **stabile, universale e oggettivo** su cui fondare la conoscenza e la morale. Quel qualcosa sarà l'**idea**.`
          }
        ]
      },
      {
        titolo: "Capitolo 2 — La dottrina delle idee e l'anima",
        sottotitolo: "Il cuore del platonismo",
        canti: [
          {
            n: 5, romano: "5", titolo: "La dottrina delle idee: che cosa sono",
            chiave: "Le idee sono le essenze eterne e perfette delle cose: non pensieri nella nostra testa, ma realtà oggettive che esistono di per sé.",
            testo: `Il termine **idea** (o *eidos*, «forma») è ingannevole: in italiano moderno «idea» significa un pensiero soggettivo, mentre in Platone è esattamente l'opposto — è la **realtà più oggettiva che ci sia**, indipendente da chi la pensa.

**La genesi del problema.** Socrate cercava le definizioni universali: che cos'è il coraggio, che cos'è la giustizia. Platone si pone la domanda successiva: quell'universale, **dove sta**? Non può stare nelle cose sensibili, perché queste cambiano, nascono e muoiono, e sono sempre imperfette (nessun cerchio disegnato è perfettamente circolare, nessuna azione è la giustizia in sé). Ma se non c'è nulla di stabile, non c'è scienza: perché la scienza riguarda ciò che vale sempre. La conclusione è che l'universale **esiste davvero**, come realtà a sé.

**Le caratteristiche delle idee** — sono l'esatto negativo delle cose sensibili:
- **eterne e immutabili** (le cose divengono);
- **uniche** per ogni tipo (le cose sono molteplici);
- **perfette** (le cose sono approssimazioni);
- **incorporee e non sensibili**: si colgono solo con l'intelletto;
- **oggettive**: esistono anche se nessuno le pensa.

**Di che cosa ci sono idee?** Di valori morali (giustizia, bellezza, coraggio), di enti matematici (il triangolo, l'uguale), delle cose naturali (l'uomo, il cavallo, il letto). Nel *Parmenide* Platone si chiede con disagio se esistano idee anche del fango e del capello: segno che il problema lo tormentava.

**Dove stanno?** Nel *Fedro* usa l'immagine dell'**iperuranio**, il «luogo sopra il cielo»: ma è una metafora, perché le idee non stanno in nessun luogo fisico — sono fuori dallo spazio e dal tempo.

**Il rapporto con le cose.** Platone usa tre termini, mai del tutto chiariti: **mimesi** (le cose *imitano* le idee), **metessi** (le cose *partecipano* delle idee), **parusia** (l'idea è *presente* nella cosa). Aristotele osserverà che sono «parole vuote e metafore poetiche»: la critica più seria che la teoria abbia mai ricevuto.

**Il vertice.** Le idee sono ordinate gerarchicamente, e al culmine sta l'**idea del Bene**, che nella *Repubblica* è paragonata al **sole**: come il sole rende visibili le cose e le fa crescere, il Bene rende le idee conoscibili e dà loro l'essere. È «al di là dell'essenza» — formula che avrà una fortuna enorme nel neoplatonismo e nel pensiero cristiano.`
          },
          {
            n: 6, romano: "6", titolo: "La conoscenza come reminiscenza",
            opere: "Menone · Fedone",
            chiave: "Conoscere è ricordare: l'anima ha già visto le idee prima di nascere. Il famoso esperimento con lo schiavo del Menone.",
            testo: `Se le idee non si vedono con gli occhi, come le conosciamo? La risposta di Platone è la **reminiscenza** (*anámnesis*): **conoscere è ricordare**.

L'anima, prima di incarnarsi, ha contemplato le idee; la nascita nel corpo produce un oblio; l'esperienza sensibile funziona da **stimolo** che risveglia il ricordo sopito. Le cose sensibili non ci *insegnano* le idee: ce le *ricordano*.

**L'esperimento del *Menone*.** Socrate chiama uno **schiavo** analfabeta e, senza insegnargli nulla, con sole domande lo guida a risolvere un problema geometrico: costruire un quadrato di area doppia di uno dato (la soluzione è il quadrato costruito sulla diagonale). Il ragazzo prima sbaglia, poi si accorge dell'errore, infine trova la risposta giusta. Se nessuno gliel'ha detta, argomenta Socrate, doveva **averla già in sé**.

Il ragionamento è anche una risposta al «paradosso di Menone»: se non sai una cosa, non puoi cercarla (non sapresti che cosa cercare); se la sai, non hai bisogno di cercarla. La reminiscenza scioglie il paradosso: la sappiamo e non la sappiamo, la possediamo in modo latente.

**L'argomento del *Fedone*.** Vediamo due bastoni «uguali», ma non sono mai perfettamente uguali; eppure li giudichiamo tali *rispetto* all'Uguale in sé, che non abbiamo mai incontrato con i sensi. Dunque ne avevamo conoscenza **prima** di ogni esperienza sensibile: cioè prima di nascere. Ne segue che l'anima **preesiste** al corpo.

**Che cosa resta di attuale.** Al netto della metafisica, Platone sta ponendo un problema serissimo: la mente non è una tabula rasa che registra passivamente, ma possiede **strutture proprie** che rendono possibile l'esperienza (concetti come uguaglianza, identità, causa non si vedono con gli occhi). È una domanda che tornerà in Cartesio (idee innate), in Kant (le forme a priori) e nella linguistica moderna di Chomsky (la grammatica universale).

La reminiscenza ha inoltre una conseguenza pesante nel sistema: sostiene l'**immortalità dell'anima**, che è a sua volta il presupposto dell'etica platonica.`
          },
          {
            n: 7, romano: "7", titolo: "L'anima: immortalità, tripartizione, mito di Er",
            opere: "Fedone · Repubblica · Fedro",
            chiave: "L'anima è immortale e ha tre parti: razionale, irascibile, concupiscibile. La virtù è l'armonia tra loro, sotto il governo della ragione.",
            testo: `**L'immortalità.** Nel *Fedone*, ambientato nelle ultime ore di Socrate, Platone porta quattro argomenti:
- **dai contrari**: tutto nasce dal proprio contrario (il sonno dalla veglia e viceversa), quindi la vita nasce dalla morte in un ciclo continuo;
- **dalla reminiscenza**: se conoscere è ricordare, l'anima esisteva prima;
- **dalla somiglianza con le idee**: l'anima coglie ciò che è eterno e semplice, quindi deve esserle affine; ciò che è semplice non può dissolversi, perché dissolversi significa scomporsi in parti;
- **dalla vita come essenza**: l'anima porta con sé la vita per definizione, quindi non può accogliere il suo contrario, la morte.

Gli argomenti non sono tutti solidi (il terzo e il quarto sono i più discussi), ma la funzione è chiara: se l'anima è immortale, **prendersene cura conta più di ogni altra cosa**, e la morte non è un male.

**La tripartizione.** Nella *Repubblica* Platone si accorge che l'anima non è semplice: dentro di noi c'è **conflitto** (desidero bere ma so che non devo). Distingue quindi tre parti:
- **razionale** (*logistikón*), immortale, che ha sede nel capo: conosce e deve comandare;
- **irascibile** (*thymoeidés*), nel petto: coraggio, sdegno, ambizione, l'alleato naturale della ragione;
- **concupiscibile** (*epithymetikón*), nel ventre: appetiti, piaceri, desiderio di ricchezza.

A ciascuna corrisponde una virtù: **sapienza** alla razionale, **coraggio** all'irascibile, **temperanza** alla concupiscibile. La quarta virtù, la **giustizia**, non appartiene a una parte: è l'**armonia** che si realizza quando ciascuna fa il proprio compito e la ragione governa.

**Il mito della biga alata** (*Fedro*): l'anima è come un carro trainato da due cavalli, uno bianco e docile (l'irascibile) e uno nero e ribelle (il concupiscibile), guidato da un auriga (la ragione). Le anime seguono il corteo degli dei per contemplare l'iperuranio; quelle che non riescono a dominare il cavallo nero perdono le ali e cadono nei corpi.

**Il mito di Er** (fine della *Repubblica*): il soldato Er, tornato dal regno dei morti, racconta il giudizio delle anime, i mille anni di premi e punizioni e infine la **scelta del nuovo destino**. È il punto cruciale: ogni anima sceglie la propria vita futura, e «la responsabilità è di chi sceglie, il dio non è responsabile». Chi ha vissuto senza filosofia sceglie male, abbagliato dalle apparenze. La libertà, e quindi la responsabilità morale, restano integre.`
          },
          {
            n: 8, romano: "8", titolo: "Eros: la dottrina dell'amore e della bellezza",
            opere: "Simposio · Fedro",
            chiave: "L'amore è desiderio di ciò che non si ha: figlio di Povertà e Espediente. Dalla bellezza dei corpi si sale, gradino dopo gradino, alla Bellezza in sé.",
            testo: `Il **Simposio** è forse il capolavoro letterario di Platone: durante un banchetto, ciascun commensale pronuncia un elogio di Eros, e l'ultimo a parlare è Socrate.

**Il mito degli androgini** (raccontato da Aristofane) spiega l'amore come ricerca della metà perduta: gli esseri umani erano originariamente sferici e doppi, e Zeus li tagliò in due per punirli della loro tracotanza; da allora ciascuno cerca la propria metà. È l'immagine popolare dell'amore come completamento — e Platone la mette in bocca a un comico, con affettuosa ironia.

**Il discorso di Socrate** (che riferisce l'insegnamento della sacerdotessa **Diotima**) è la vera dottrina. Eros non è un dio, ma un *daimon*, un intermedio: figlio di **Póros** (Espediente, ricchezza) e **Penía** (Povertà), è sempre povero e sempre ingegnoso, sempre a caccia. Perché **si desidera solo ciò che non si possiede**: chi è già sapiente non filosofa, chi è ignorante nemmeno (non sa di mancare). Eros è quindi la figura stessa del **filosofo**: chi sa di mancare della sapienza e la insegue.

**La scala di Eros.** Dall'amore si sale per gradi:
- amore per **un corpo** bello;
- amore per **tutti i corpi** belli (si capisce che la bellezza è comune);
- amore per la bellezza delle **anime**;
- amore per la bellezza delle **istituzioni e delle leggi**;
- amore per la bellezza delle **scienze**;
- infine la contemplazione della **Bellezza in sé**, eterna, che non nasce né muore.

L'amore, insomma, non è un ostacolo alla filosofia: ne è il **motore**, purché non si fermi al primo gradino. Ed è anche desiderio di immortalità: «generare nel bello», con i figli del corpo o con quelli dell'anima (opere, leggi, pensieri).

Nel **Fedro** l'amore è descritto come una «divina follia» (*manía*): la vista della bellezza fa ricrescere le ali all'anima, perché la bellezza è l'unica idea che si manifesta anche ai sensi ed è quindi il ponte tra i due mondi. Da questa dottrina discende l'espressione «amore platonico» — che però non significa affatto «amore senza corpo», ma amore che **parte** dal corpo e non vi si ferma.`
          }
        ]
      },
      {
        titolo: "Capitolo 3 — Lo Stato e il mito della caverna",
        sottotitolo: "La Repubblica",
        canti: [
          {
            n: 9, romano: "9", titolo: "Lo Stato ideale: le tre classi e la giustizia",
            opere: "Repubblica",
            chiave: "Lo Stato è l'anima in grande: tre classi corrispondono alle tre parti dell'anima. Giustizia = ciascuno fa ciò per cui è portato.",
            testo: `La *Repubblica* (in greco *Politéia*) nasce da una domanda etica — che cos'è la giustizia? — e la affronta con un espediente: siccome nel singolo la giustizia è difficile da vedere, guardiamola «scritta in caratteri più grandi», cioè nello **Stato**. Da qui la corrispondenza rigorosa tra anima e città.

**Le tre classi:**
- i **governanti-filosofi**, corrispondenti all'anima razionale, la cui virtù è la **sapienza**: conoscono il Bene e perciò devono comandare;
- i **guerrieri o custodi**, corrispondenti all'anima irascibile, la cui virtù è il **coraggio**: difendono la città ed eseguono;
- i **produttori** (contadini, artigiani, mercanti), corrispondenti all'anima concupiscibile, la cui virtù è la **temperanza**: producono la ricchezza e obbediscono.

**La giustizia** è la quarta virtù e riguarda l'insieme: si realizza quando **ciascuno svolge il compito che gli è proprio** senza invadere quello degli altri. Non è dunque uguaglianza, ma armonia funzionale — come in un organismo o in un accordo musicale.

Attenzione a un punto spesso frainteso: l'appartenenza alle classi **non è ereditaria**. La selezione avviene per attitudine, attraverso un lungo percorso educativo; i figli dei governanti che non ne sono all'altezza scendono di classe, e viceversa. Platone lo giustifica con il «**mito dei metalli**», una «nobile menzogna» secondo cui il dio ha mescolato oro, argento e bronzo nelle anime.

**Il «comunismo» dei custodi.** Alle due classi superiori Platone impone l'abolizione della **proprietà privata** e della **famiglia**: niente case, niente oro, niente mogli e figli propri. Non è comunismo economico in senso moderno (non riguarda i produttori, e non mira all'uguaglianza materiale): è un dispositivo per eliminare il **conflitto di interessi**, cioè la ragione per cui i governanti antepongono il proprio vantaggio a quello comune. Sono i moventi che vanno estirpati, non i beni redistribuiti.

Ne segue una conseguenza sorprendente per l'epoca: la **parità delle donne**. Se conta solo l'attitudine, le donne devono ricevere la stessa educazione e possono governare. Aristotele lo criticherà; noi lo leggiamo come una delle pagine più avanzate del pensiero antico.

Alla domanda «ma i custodi saranno felici, privati di tutto?» Platone risponde che lo scopo non è la felicità di una classe, ma quella **dell'intero organismo**: come in una statua non si dipingono gli occhi del colore più bello, ma di quello che rende bella la statua.`
          },
          {
            n: 10, romano: "10", titolo: "L'educazione, i gradi della conoscenza e la critica alla democrazia",
            chiave: "Il filosofo si forma in cinquant'anni di studi. E lo Stato degenera in quattro tappe: timocrazia, oligarchia, democrazia, tirannide.",
            testo: `**L'educazione** è il vero cuore politico della *Repubblica*: uno Stato giusto non si ottiene con le leggi, ma **formando** gli uomini giusti. Il percorso dura tutta la vita: musica e ginnastica nell'infanzia (per armonizzare anima e corpo), poi dieci anni di **matematica** — aritmetica, geometria piana e solida, astronomia, armonica — perché abitua a ragionare su oggetti non sensibili; poi cinque anni di **dialettica**; poi quindici anni di **esperienza pratica** negli incarichi pubblici. Solo a **cinquant'anni** si è pronti a governare — e chi ha contemplato il Bene dovrà tornare, controvoglia, ad amministrare la città.

**I gradi della conoscenza** (l'immagine della **linea divisa**, libro VI). La linea è tagliata in due sezioni, ciascuna a sua volta divisa:
- **Opinione** (*dóxa*), che riguarda il sensibile: *immaginazione* (eikasía: ombre e riflessi) e *credenza* (pistis: le cose fisiche).
- **Scienza** (*epistéme*), che riguarda l'intelligibile: *ragione matematica* (diánoia, che parte da ipotesi e usa figure) e *intellezione dialettica* (nóesis, che risale ai principi non ipotetici fino all'idea del Bene).

La **dialettica** è il grado supremo: procede per divisione e sintesi dei generi, e risale dalle ipotesi al principio incondizionato. Solo chi la padroneggia è filosofo.

**Le degenerazioni dello Stato** (libri VIII–IX). Dalla costituzione perfetta si decade per gradi, e ogni forma nasce dai vizi della precedente:
- **timocrazia**: governo degli ambiziosi, prevale l'anima irascibile, si cerca l'onore (modello: Sparta);
- **oligarchia**: governo dei ricchi; la città si spacca in due, la città dei ricchi e quella dei poveri;
- **democrazia**: i poveri prevalgono; regnano libertà assoluta e uguaglianza indiscriminata, ogni desiderio vale quanto un altro;
- **tirannide**: la forma peggiore, che nasce **proprio dall'eccesso di libertà** — il popolo affida il potere a un demagogo che promette protezione e poi diventa padrone.

**La critica alla democrazia** va capita nel contesto: Platone non contesta la partecipazione in sé, ma il presupposto che **governare non richieda competenza**. La sua analogia è tagliente: per navigare scegliamo un timoniere esperto, non uno a sorteggio; perché per la città dovremmo fare diversamente? L'obiezione moderna è altrettanto seria — chi controlla i sapienti, se nessuno può giudicarli? È la domanda di Popper, che nella *Società aperta* accuserà Platone di essere l'antenato del totalitarismo. Vale la pena tenere in mente entrambe le posizioni.`
          },
          {
            n: 11, romano: "11", titolo: "Il mito della caverna",
            opere: "Repubblica, libro VII",
            chiave: "Prigionieri incatenati scambiano le ombre per la realtà. Chi si libera e vede il sole ha il dovere di tornare giù — e rischia di essere ucciso.",
            testo: `È la pagina più famosa della filosofia occidentale, e riassume in un'immagine l'intero sistema platonico.

**La scena.** In una caverna sotterranea, alcuni uomini sono incatenati fin dalla nascita in modo da poter guardare solo la parete di fondo. Alle loro spalle, un fuoco; tra fuoco e prigionieri, un muretto lungo il quale passano uomini che trasportano statuette di oggetti. I prigionieri vedono soltanto le **ombre** proiettate sulla parete e odono l'eco delle voci: per loro, quelle ombre **sono** la realtà. Si sono perfino organizzati: fanno a gara a indovinare quale ombra passerà per prima, e onorano chi ci riesce.

**La liberazione.** Uno viene sciolto e costretto a voltarsi. Il primo effetto è **doloroso**: la luce del fuoco lo abbaglia, gli oggetti veri gli sembrano meno reali delle ombre a cui era abituato. Trascinato su per l'erta, all'aperto, dovrà abituarsi per gradi: prima le ombre esterne, poi i riflessi nell'acqua, poi le cose, poi il cielo notturno e infine il **sole**.

**Il ritorno.** Chi ha visto non vorrebbe tornare. Ma ha il **dovere** di scendere per liberare gli altri. Sotto, però, non vede più bene al buio, sbaglia a riconoscere le ombre, e i compagni lo deridono: «è tornato con gli occhi rovinati, non vale la pena salire». E se provasse a slegarli con la forza, «lo ucciderebbero».

**La spiegazione**, che Platone dà lui stesso:
- la **caverna** è il mondo sensibile; il mondo esterno è quello delle idee;
- le **ombre** sono le apparenze e le opinioni; gli oggetti trasportati, le cose fisiche;
- il **fuoco** è il sole sensibile; il **sole** vero è l'**idea del Bene**;
- la **salita** è il percorso di educazione e di dialettica, faticoso e progressivo;
- il **ritorno** è il dovere politico del filosofo;
- l'uccisione del liberatore è, con evidenza, la **morte di Socrate**.

Il mito dice quattro cose insieme: una **gnoseologia** (i gradi della conoscenza), una **metafisica** (i due mondi), una **pedagogia** (educare non è versare nozioni ma *girare* lo sguardo: «l'occhio dell'anima» c'è già, va orientato) e una **politica** (il sapere obbliga alla responsabilità). Ed è profondamente attuale: quante delle nostre certezze sono ombre che non abbiamo mai verificato?`
          },
          {
            n: 12, romano: "12", titolo: "La condanna dell'arte",
            chiave: "L'arte imita le cose, che a loro volta imitano le idee: è copia di copia, tre gradi lontana dal vero. E parla alla parte irrazionale dell'anima.",
            testo: `Nel libro X della *Repubblica* Platone arriva a una conclusione che ha fatto discutere per venticinque secoli: i poeti vanno **allontanati dalla città ideale**, sia pure «con tutti gli onori» e incoronati di fiori.

**L'argomento metafisico.** Esistono tre letti: quello **ideale** (l'idea di letto, opera del dio), quello **fabbricato** dal falegname (copia dell'idea) e quello **dipinto** dal pittore (copia della copia). L'artista è dunque **tre gradi lontano dal vero**, e per giunta non riproduce nemmeno l'oggetto intero: solo una sua apparenza da un certo punto di vista. L'arte è *mímesis* di *mímesis*.

**L'argomento gnoseologico.** L'artista non possiede alcuna competenza reale su ciò che rappresenta. Omero descrive battaglie, governi e cure mediche, ma non è stato né stratego né legislatore né medico: produce l'**illusione** del sapere, che è peggio dell'ignoranza dichiarata.

**L'argomento morale, il più serio.** L'arte parla alla parte **irrazionale** dell'anima. La tragedia ci fa godere nel piangere per dolori altrui, e questa abitudine ci rende meno padroni di noi quando i dolori sono nostri. La poesia «annaffia le passioni invece di inaridirle» e sovverte la gerarchia dell'anima, mettendo l'emozione al posto della ragione. In un'educazione che punta tutto sull'armonia interiore, è una minaccia.

**Le contraddizioni.** La condanna convive con il fatto che Platone è uno dei più grandi **artisti** della prosa greca e un inventore di miti straordinari; che nella *Repubblica* stessa ammette musica e poesia purché **educative**; che nel *Fedro* la bellezza è la via privilegiata verso l'idea, e la follia poetica è una delle quattro follie divine. Nel tardo *Timeo* rivaluta parzialmente l'arte quando imita l'ordine razionale del cosmo.

Ne nasce la prima grande **querelle sull'arte** della cultura occidentale: l'arte è finzione pericolosa o strumento di verità? Aristotele risponderà nella *Poetica* ribaltando entrambi i punti: la poesia è **più filosofica della storia**, perché rappresenta l'universale e non il particolare; e le emozioni non vanno soffocate ma **purificate** (catarsi).`
          }
        ]
      },
      {
        titolo: "Capitolo 4 — L'ultimo Platone",
        sottotitolo: "Autocritica, cosmologia e realismo politico",
        canti: [
          {
            n: 13, romano: "13", titolo: "Teeteto, Parmenide e Sofista: Platone critica sé stesso",
            chiave: "Nei dialoghi tardi Platone attacca le proprie tesi: il rapporto idee-cose non funziona, e per salvare l'errore bisogna ammettere che il non essere in qualche modo è.",
            testo: `Il Platone della vecchiaia è il critico più severo del Platone maturo — un tratto raro e ammirevole.

**Il *Teeteto*: che cos'è la conoscenza?** Si esaminano e si respingono tre risposte: la conoscenza è *sensazione* (tesi di Protagora, confutata: se ogni apparenza è vera, è vera anche l'opinione di chi nega Protagora, e allora il relativismo si autodistrugge); è *opinione vera* (no: si può indovinare, e un'opinione vera per caso non è sapere); è *opinione vera accompagnata da ragione* (la più promettente, ma il «rendere ragione» resta problematico). Il dialogo finisce in aporia, ma ha stabilito un punto: la conoscenza **non coincide con la percezione**.

**Il *Parmenide*: l'autocritica.** Il vecchio Parmenide interroga un giovane Socrate e demolisce la teoria delle idee con obiezioni che Platone mette in bocca al proprio avversario:
- di quali cose esistono idee? anche del fango, del pelo, dello sporco? (Socrate esita, ed è un'ammissione);
- **come** le cose partecipano dell'idea? prendendone una parte (e allora l'idea si frantuma) o tutta intera (e allora è in molti luoghi contemporaneamente)?
- il celebre **«terzo uomo»**: se un uomo e l'idea di uomo si somigliano, ci vorrà una terza idea che spieghi la somiglianza, e così all'infinito;
- se le idee sono in un mondo separato, come possiamo **conoscerle** noi che stiamo qui? e il dio che conosce le idee, potrà conoscere le nostre cose?

Platone non risolve, ma indica la direzione: le idee non vanno pensate come **cose separate**, bensì come **strutture in relazione tra loro**.

**Il *Sofista*: il «parricidio».** Per definire il sofista — che è produttore di falsi discorsi — occorre spiegare che cos'è l'**errore**. Ma dire il falso significa dire ciò che non è, e Parmenide aveva vietato di pensare il non essere. Platone compie allora quello che chiama esplicitamente un **parricidio** nei confronti del «padre Parmenide»: il non essere esiste, non come nulla assoluto, ma come **diversità** (*heterótes*). Dire «Socrate non vola» non significa evocare il nulla: significa dire che Socrate è **diverso** da ciò che vola.

Ne segue la nuova ontologia dei **cinque generi sommi**: essere, quiete, movimento, identità, diversità. Le idee non sono monadi isolate: si **intrecciano** tra loro secondo regole, e la **dialettica** è appunto la scienza che sa quali generi si combinano e quali no. Con questa mossa Platone salva la possibilità stessa del discorso — e apre la strada alla logica di Aristotele.`
          },
          {
            n: 14, romano: "14", titolo: "Il Timeo: il demiurgo e l'ordine del cosmo",
            opere: "Timeo",
            chiave: "Un artefice divino plasma il mondo guardando alle idee, dando forma matematica a una materia informe. Il testo platonico più letto nel Medioevo.",
            testo: `Il *Timeo* è l'unica cosmologia sistematica di Platone, e fu — caso curioso — l'unico dialogo conosciuto in Occidente per tutto l'alto Medioevo, il che gli diede un'influenza sproporzionata.

**Il demiurgo.** Il mondo non è eterno né casuale: è opera di un **artefice divino** (*demiurgós*, «artigiano»), che non crea dal nulla (idea estranea ai Greci) ma **plasma** e ordina. Ha davanti a sé tre elementi: il **modello** (le idee, eterne), la **materia** (la *chora*, uno spazio-ricettacolo informe e caotico) e sé stesso come causa efficiente. Perché lo fa? Perché è **buono** e «privo di invidia»: vuole che tutto sia il più possibile simile a lui. È l'affermazione più forte del **finalismo** in filosofia antica, e l'esatto opposto del meccanicismo di Democrito.

**La struttura matematica.** Il demiurgo dà forma alla materia attribuendo ai quattro elementi la figura di solidi geometrici regolari (tetraedro al fuoco, cubo alla terra, ottaedro all'aria, icosaedro all'acqua; il dodecaedro all'universo intero). La realtà fisica è dunque, alla radice, **geometria**: un'eredità pitagorica che arriverà fino a Keplero e a Galileo.

**Il tempo.** Definizione celebre: il tempo è «**immagine mobile dell'eternità**», nata insieme al cielo per imitare, con il movimento circolare degli astri, la stabilità perfetta del modello eterno.

**L'anima del mondo.** L'universo è un vivente dotato di anima e intelligenza, sferico e perfetto. Anche gli uomini ricevono un'anima immortale dal demiurgo, mentre il corpo e le parti mortali dell'anima sono opera di divinità inferiori.

**Il limite della necessità.** Il demiurgo non è onnipotente: deve fare i conti con la resistenza della materia, con la *necessità* (*anánke*) che «persuade» ma non elimina del tutto. Ecco perché il mondo è ordinato ma non perfetto — una spiegazione elegante del male come residuo di disordine, che avrà lunga fortuna.

Nel *Crizia*, dialogo incompiuto collegato al *Timeo*, compare inoltre il celebre racconto di **Atlantide**: l'isola potentissima che, corrotta dalla ricchezza, viene inghiottita dal mare. È un apologo politico sulla decadenza, non una notizia geografica.`
          },
          {
            n: 15, romano: "15", titolo: "Politico e Leggi: il secondo Stato migliore",
            opere: "Politico · Leggi",
            chiave: "Dopo i fallimenti in Sicilia, Platone ripiega: se non si trova il re-filosofo, governino leggi rigide e stabili. Realismo amaro dell'ultima opera.",
            testo: `L'ultimo Platone è un uomo che ha provato tre volte a realizzare il proprio progetto politico e ha fallito tre volte. Le opere finali ne portano il segno.

**Il *Politico*.** Il vero governante è il «tessitore» che intreccia le nature diverse dei cittadini (i coraggiosi e i moderati) in un tessuto armonico. In assoluto, il governo del **sapiente senza leggi** resterebbe il migliore, perché la legge è rigida e generale mentre la vita è mutevole e particolare: come un medico che non può cambiare terapia. Ma poiché un sapiente simile difficilmente si trova, **la legge è il male minore**, il rimedio contro l'arbitrio. Compare qui una classificazione delle costituzioni destinata a lunga fortuna: monarchia, aristocrazia e democrazia (nella versione rispettosa delle leggi) contro tirannide, oligarchia e demagogia (nella versione che le viola).

**Le *Leggi***, l'opera più lunga e l'ultima, scritta in vecchiaia. Socrate scompare come personaggio (parla un anonimo «straniero ateniese»). Il progetto è una **seconda città migliore**, Magnesia, pensata per uomini reali:
- niente re-filosofo: sovranità della **legge**, a cui perfino i governanti sono soggetti («servi delle leggi», da cui l'ideale dello Stato di diritto);
- niente abolizione della proprietà e della famiglia, ma **lotti di terra inalienabili** e limiti rigidi alla ricchezza (nessuno può possedere più di quattro volte il minimo);
- una **costituzione mista**, con elementi monarchici e democratici, per evitare gli eccessi di entrambi;
- una **religione civile** obbligatoria, con leggi severe contro l'ateismo, e un organo di controllo, il «Consiglio notturno»;
- grande attenzione ai **preamboli** delle leggi: prima di comandare bisogna **persuadere**, spiegando le ragioni della norma. È un'intuizione notevole, e per certi versi moderna.

**Il bilancio.** Rispetto alla *Repubblica* c'è più realismo e più rispetto della legge, ma anche più rigidità e controllo sociale: molti lettori trovano le *Leggi* più inquietanti dell'utopia giovanile. Resta però ferma l'idea centrale di tutto il platonismo politico: la politica non è tecnica di conquista del potere, ma **arte di rendere migliori i cittadini**.`
          },
          {
            n: 16, romano: "16", titolo: "Riepilogo e eredità di Platone",
            chiave: "Due mondi, un'anima immortale, uno Stato fondato sul sapere: da qui derivano il neoplatonismo, sant'Agostino e buona parte della filosofia moderna.",
            testo: `**Lo schema del sistema.** Tutto il platonismo si regge su una serie di dualismi paralleli, che è utile memorizzare in colonna:

- realtà: **mondo delle idee** / mondo sensibile
- conoscenza: **scienza** (epistéme) / opinione (dóxa)
- facoltà: **intelletto** / sensi
- l'uomo: **anima** / corpo
- valore: **eterno e perfetto** / mutevole e imperfetto

Ogni dottrina occupa un posto in questo schema: la reminiscenza spiega come la colonna di destra possa accedere a quella di sinistra; la caverna la racconta in immagine; l'eros ne è il motore; la *Repubblica* la applica alla politica; la dialettica ne è il metodo.

**I punti deboli**, che Aristotele attaccherà uno per uno: la separazione delle idee (perché raddoppiare il mondo?), la vaghezza della partecipazione, il terzo uomo, la svalutazione dell'esperienza sensibile, l'intellettualismo etico ereditato da Socrate.

**L'eredità**, immensa:
- il **neoplatonismo** (Plotino, III sec. d.C.): l'Uno, l'emanazione, il ritorno dell'anima al principio;
- il **cristianesimo**: sant'Agostino legge il platonismo come preparazione al Vangelo; le idee diventano pensieri di Dio; l'anima immortale e il primato dell'interiorità sono di casa;
- il **Rinascimento**: l'Accademia fiorentina di Marsilio Ficino, l'amore platonico, la matematizzazione della natura;
- la **scienza moderna**: l'idea che il libro della natura sia scritto in caratteri matematici (Galileo) è di ascendenza platonico-pitagorica;
- la **filosofia moderna**: le idee innate di Cartesio, le forme a priori di Kant, il mondo intelligibile di Hegel; e nel Novecento il «realismo matematico» di Gödel;
- la **critica politica**: Popper lo accusa di totalitarismo, altri lo difendono come il primo a chiedere che il potere debba **rendere conto** a qualcosa di più alto della forza.

La battuta di Whitehead — la filosofia occidentale è «una serie di note a piè di pagina a Platone» — è un'iperbole, ma dice una verità: le domande le ha poste quasi tutte lui.`
          }
        ]
      }
    ],
    notaPersonaggi: "Concetti, dialoghi e miti da avere sempre a portata di mano.",
    personaggi: [
      {
        gruppo: "1. I concetti fondamentali",
        voci: [
          { nome: "Idea", alt: ["eidos", "forma"], desc: "L'essenza eterna, immutabile, perfetta e oggettiva di ogni cosa. Non un pensiero soggettivo, ma la realtà più vera: si coglie con l'intelletto, non con i sensi." },
          { nome: "Iperuranio", alt: [], desc: "«Luogo sopra il cielo» (Fedro): immagine metaforica della dimensione in cui stanno le idee, fuori dallo spazio e dal tempo." },
          { nome: "Idea del Bene", alt: [], desc: "Al vertice della gerarchia delle idee. Come il sole rende visibili le cose, il Bene rende conoscibili le idee e dà loro l'essere: è «al di là dell'essenza»." },
          { nome: "Mimesi / metessi / parusia", alt: [], desc: "I tre modi in cui Platone descrive il rapporto tra cose e idee: imitazione, partecipazione, presenza. Aristotele li giudicherà «metafore poetiche»." },
          { nome: "Reminiscenza", alt: ["anámnesis"], desc: "Conoscere è ricordare ciò che l'anima ha contemplato prima di nascere. Dimostrata con lo schiavo del Menone e con l'Uguale in sé del Fedone." },
          { nome: "Dóxa / epistéme", alt: ["opinione / scienza"], desc: "L'opinione riguarda il sensibile e muta; la scienza riguarda le idee ed è stabile. La linea divisa articola quattro gradi: immaginazione, credenza, ragione matematica, dialettica." },
          { nome: "Dialettica", alt: [], desc: "In Platone il metodo supremo: risale dalle ipotesi ai principi e coglie l'intreccio dei generi. Nel Sofista è la scienza di quali idee si combinano tra loro." },
          { nome: "Anima tripartita", alt: [], desc: "Razionale (capo, sapienza), irascibile (petto, coraggio), concupiscibile (ventre, temperanza). La giustizia è l'armonia fra le tre sotto il governo della ragione." },
          { nome: "Eros", alt: [], desc: "Figlio di Póros e Penía: desiderio di ciò che manca, dunque figura del filosofo. La scala di Eros sale dai corpi belli alla Bellezza in sé." },
          { nome: "Demiurgo", alt: [], desc: "L'artefice divino del Timeo: non crea dal nulla, ma ordina una materia caotica guardando al modello delle idee, perché è buono e privo d'invidia." }
        ]
      },
      {
        gruppo: "2. I dialoghi da ricordare",
        nota: "Per ciascuno: il tema per cui viene sempre citato.",
        voci: [
          { nome: "Apologia di Socrate", alt: [], desc: "La difesa di Socrate al processo: il non sapere, la missione divina, il tafano di Atene." },
          { nome: "Critone", alt: [], desc: "Il rifiuto della fuga: non si risponde a un'ingiustizia con un'altra ingiustizia; il patto con le leggi della città." },
          { nome: "Menone", alt: [], desc: "La virtù è insegnabile? Contiene l'esperimento dello schiavo e la teoria della reminiscenza." },
          { nome: "Gorgia", alt: [], desc: "Contro la retorica come adulazione; lo scontro con Callicle sul diritto naturale del più forte." },
          { nome: "Fedone", alt: [], desc: "Le ultime ore di Socrate: i quattro argomenti per l'immortalità dell'anima e la filosofia come «esercizio di morte»." },
          { nome: "Simposio", alt: [], desc: "Gli elogi di Eros: il mito degli androgini di Aristofane e la scala dell'amore insegnata da Diotima." },
          { nome: "Repubblica", alt: ["Politéia"], desc: "L'opera maggiore: giustizia, tre classi, comunismo dei custodi, linea divisa, mito della caverna, degenerazioni dello Stato, condanna dell'arte, mito di Er." },
          { nome: "Fedro", alt: [], desc: "La biga alata, la bellezza come ponte tra i due mondi, la critica della scrittura nel mito di Theuth." },
          { nome: "Teeteto", alt: [], desc: "Che cos'è la conoscenza: confutazione di Protagora e del sapere come sensazione." },
          { nome: "Parmenide", alt: [], desc: "L'autocritica: le obiezioni alla teoria delle idee, tra cui il «terzo uomo»." },
          { nome: "Sofista", alt: [], desc: "Il «parricidio» di Parmenide: il non essere come diversità; i cinque generi sommi." },
          { nome: "Timeo", alt: [], desc: "La cosmologia: il demiurgo, i solidi geometrici, il tempo come «immagine mobile dell'eternità»." },
          { nome: "Leggi", alt: [], desc: "L'ultima opera: la «seconda città migliore», sovranità della legge, proprietà limitata, preamboli persuasivi." }
        ]
      },
      {
        gruppo: "3. I miti platonici",
        voci: [
          { nome: "Mito della caverna", alt: [], desc: "Repubblica VII: prigionieri, ombre, la salita faticosa verso il sole (il Bene), il dovere del ritorno e il rischio di essere uccisi." },
          { nome: "Mito di Er", alt: [], desc: "Repubblica X: il giudizio delle anime e la scelta della vita futura. «La responsabilità è di chi sceglie»." },
          { nome: "Biga alata", alt: [], desc: "Fedro: l'auriga (ragione) guida un cavallo bianco (irascibile) e uno nero (concupiscibile); le anime che non reggono cadono nei corpi." },
          { nome: "Androgini", alt: [], desc: "Simposio: gli esseri umani originari erano doppi e furono tagliati in due; l'amore è ricerca della metà perduta." },
          { nome: "Mito dei metalli", alt: ["nobile menzogna"], desc: "Repubblica: il dio ha mescolato oro, argento e bronzo nelle anime, per giustificare la divisione in classi secondo attitudine." },
          { nome: "Theuth", alt: [], desc: "Fedro: il dio egizio inventore della scrittura; il re Thamus obietta che la scrittura indebolisce la memoria e dà solo apparenza di sapere." },
          { nome: "Atlantide", alt: [], desc: "Timeo e Crizia: l'isola potentissima corrotta dalla ricchezza e inghiottita dal mare. Apologo politico sulla decadenza." }
        ]
      }
    ]
  },

  /* ------------------------------------------------------ ARISTOTELE */
  aristotele: {
    id: "aristotele",
    titolo: "Aristotele",
    autore: "Unità 4 · L'età classica",
    sottotitolo: "L'enciclopedia del sapere: metafisica, logica, etica",
    epoca: "384 – 322 a.C.",
    lingua: "Stagira, Atene · il Liceo",
    tag: ["Sostanza", "Quattro cause", "Sillogismo", "Felicità"],
    epigrafe: "Tutti gli uomini per natura desiderano sapere.",
    colore: "rosso",
    parti: [
      {
        titolo: "Capitolo 1 — Filosofia e scienza",
        sottotitolo: "La vita, gli scritti, il distacco da Platone",
        canti: [
          {
            n: 1, romano: "1", titolo: "La vita e il tempo storico",
            chiave: "Figlio di un medico, vent'anni nell'Accademia, precettore di Alessandro Magno, fondatore del Liceo. Muore in esilio, accusato di empietà.",
            testo: `**Aristotele** nasce nel 384 a.C. a **Stagira**, in Macedonia (per questo è detto «lo Stagirita»). Il padre Nicomaco è medico alla corte macedone: un dettaglio non trascurabile, perché spiega l'attitudine biologica, empirica e classificatoria che percorre tutta la sua opera. Dove Platone parte dalla matematica, Aristotele parte dalla **biologia**.

A diciassette anni entra nell'**Accademia** di Platone, e vi resta **vent'anni**, fino alla morte del maestro (347). Non ne diventa il successore — alla guida va il nipote di Platone, Speusippo — e lascia Atene.

Segue un periodo di viaggi: ad Asso e a Mitilene si dedica a ricerche naturalistiche, raccogliendo osservazioni sugli animali marini che stupiscono ancora oggi i biologi per precisione.

Nel 343 **Filippo II di Macedonia** lo chiama a educare il figlio tredicenne: **Alessandro Magno**. L'incontro tra il più grande filosofo e il più grande conquistatore dell'antichità ha affascinato i posteri, ma i suoi effetti reali furono modesti: Alessandro perseguirà una politica di fusione tra Greci e barbari che Aristotele non avrebbe approvato.

Nel 335 torna ad Atene e fonda la propria scuola, il **Liceo** (dal santuario di Apollo Licio), detta anche **Peripato** — forse dal *perípatos*, il porticato, o dall'abitudine di insegnare passeggiando. Vi organizza una ricerca collettiva con biblioteca, collezioni naturalistiche e divisione dei compiti: è il primo modello di **istituto di ricerca** della storia.

Alla morte di Alessandro (323) esplode ad Atene la reazione antimacedone. Accusato di empietà, Aristotele fugge a Calcide dicendo — secondo la tradizione — di non voler permettere agli Ateniesi «di commettere un secondo delitto contro la filosofia». Muore l'anno dopo, nel 322.

**Il contesto storico** conta: con Alessandro la **pólis** perde autonomia e si aprono i grandi regni. Aristotele è l'ultimo grande filosofo per cui la città-stato è ancora l'orizzonte naturale dell'uomo — e insieme il primo che organizza il sapere in **discipline specialistiche**, come farà l'età ellenistica.`
          },
          {
            n: 2, romano: "2", titolo: "Il problema degli scritti",
            chiave: "Le opere pubblicate e letterarie sono perdute; ci restano gli appunti delle lezioni. Ecco perché Aristotele è così difficile da leggere.",
            testo: `Un paradosso della tradizione: di Platone abbiamo tutto ciò che pubblicò e nulla dell'insegnamento orale; di Aristotele è esattamente il contrario.

- Gli **scritti essoterici** («per chi è fuori»), destinati al pubblico, erano dialoghi di stile elegante, lodati da Cicerone come un «fiume d'oro». Sono **quasi interamente perduti**.
- Gli **scritti acroamatici** o esoterici («per l'ascolto», destinati agli allievi interni) sono i trattati che possediamo: appunti di lezione, rimaneggiati e riorganizzati, con stile secco, ripetizioni, digressioni e periodi ellittici.

Da qui la fama di difficoltà: quando leggiamo la *Metafisica* stiamo in realtà leggendo dispense universitarie, non un libro pensato per noi.

La tradizione racconta che i manoscritti rimasero nascosti in una cantina in Asia Minore e furono riportati a Roma solo nel I secolo a.C., quando **Andronico di Rodi** ne curò l'edizione, ordinandoli per materia. Fu proprio Andronico a collocare dopo i libri di fisica quelli senza titolo sulla «filosofia prima»: da quella collocazione editoriale nasce per caso la parola **metafisica** («*metà tà physiká*», dopo le cose fisiche).

**Il corpus** è organizzato così:
- **Organon** («strumento»): gli scritti di logica — *Categorie*, *Dell'interpretazione*, *Analitici primi* e *secondi*, *Topici*, *Confutazioni sofistiche*;
- **Fisica**, *Del cielo*, *Della generazione e corruzione*, *Meteorologia*;
- **Dell'anima** e i *Parva naturalia*; le grandi opere biologiche (*Storia degli animali*, *Parti degli animali*);
- **Metafisica** (14 libri);
- **Etica Nicomachea**, *Etica Eudemia*, **Politica**;
- **Retorica** e **Poetica**.

Questa architettura, e non solo i contenuti, è l'eredità più duratura: è la prima volta che il sapere umano viene **suddiviso in discipline** con oggetto e metodo propri.`
          },
          {
            n: 3, romano: "3", titolo: "Il distacco da Platone e l'enciclopedia del sapere",
            chiave: "«Amico Platone, ma più amica la verità»: la realtà vera non è in un altro mondo, è questa. E ogni scienza ha il suo metodo, senza modello unico.",
            testo: `Vent'anni nell'Accademia lasciano il segno: Aristotele conserva da Platone l'idea che la scienza riguardi l'universale, il finalismo, il primato della vita teoretica. Ma la divergenza è profonda e riguarda tre punti.

**1. Dove sta la realtà.** Per Platone la realtà vera è in un mondo separato di idee, e questo mondo è copia imperfetta. Per Aristotele la realtà vera è **questa**: la **forma** non sta in un iperuranio, sta **dentro** le cose sensibili come loro struttura. La conseguenza è enorme: **studiare la natura è filosofia**, non un ripiego. Aristotele passa la vita a dissezionare animali e a classificare costituzioni politiche; Platone considerava il sensibile a malapena oggetto di opinione.

**2. Il valore dell'esperienza.** La *Metafisica* si apre con la frase «tutti gli uomini per natura desiderano sapere», e prosegue descrivendo una **scala del conoscere**: sensazione → memoria → esperienza → arte (*téchne*) → scienza (*epistéme*). La conoscenza non è ricordo di un mondo perduto: parte dai sensi e **sale per astrazione** all'universale. È l'opposto esatto della reminiscenza.

**3. Il metodo.** Platone cerca un sapere unitario, con la dialettica come metodo unico e la matematica come modello. Aristotele sostiene che **ogni scienza ha un oggetto e un grado di precisione propri**: «è segno di uomo colto cercare in ciascun campo la precisione che la natura dell'oggetto consente». Non si può pretendere in etica il rigore della geometria.

**L'enciclopedia del sapere.** Da qui la prima classificazione delle scienze:
- **teoretiche** (fine: conoscere): metafisica, fisica, matematica. Sono le più alte, perché disinteressate;
- **pratiche** (fine: agire bene): etica, politica, economia;
- **poietiche** (fine: produrre): tecniche e arti, poetica, retorica.

La **logica** resta fuori dallo schema: non è una scienza ma lo **strumento** (*òrganon*) comune a tutte.

La frase che riassume il rapporto con il maestro è quella tramandata dalla tradizione: «*amicus Plato, sed magis amica veritas*» — Platone è amico, ma la verità lo è di più.`
          }
        ]
      },
      {
        titolo: "Capitolo 2 — La metafisica",
        sottotitolo: "Sostanza, cause, potenza e atto, Dio",
        canti: [
          {
            n: 4, romano: "4", titolo: "Che cos'è la metafisica",
            opere: "Metafisica",
            chiave: "La scienza dell'essere in quanto essere: non studia un settore della realtà, ma ciò che vale per tutto ciò che esiste.",
            testo: `Aristotele non usò mai la parola «metafisica»: la chiama **filosofia prima**, e ne dà quattro definizioni che si integrano.

- **Scienza dell'essere in quanto essere.** Tutte le altre scienze ritagliano un settore (la fisica studia gli enti in movimento, la matematica le quantità); la filosofia prima studia ciò che vale **per tutto ciò che è**, in quanto è.
- **Scienza delle cause e dei principi primi.** Non le cause di questo o quel fenomeno, ma quelle ultime che spiegano tutto il resto.
- **Scienza della sostanza.** Perché la domanda «che cos'è l'essere?» si traduce subito nella domanda «che cos'è la sostanza?».
- **Scienza di Dio** (teologia): perché risalendo alle cause prime si arriva a una sostanza immobile ed eterna.

**Perché serve?** Perché ogni scienza particolare **presuppone** concetti che non può giustificare da sé: causa, sostanza, possibilità, unità. Chi li esamina? Nessuna scienza settoriale — serve una disciplina che indaghi le condizioni generali di ogni discorso sull'essere.

Aristotele la definisce **la più nobile e la più inutile** delle scienze: nobile perché non serve a nulla se non a sé stessa, cioè è l'unica veramente libera. E nasce, dice, dalla **meraviglia**: gli uomini cominciarono a filosofare per stupore, prima di fronte ai fenomeni comuni, poi di fronte ai problemi maggiori. Chi si stupisce riconosce di non sapere.

Attenzione a un rischio di traduzione: «metafisica» ha finito per suggerire «ciò che sta oltre il mondo fisico», cioè qualcosa di sovrannaturale. In Aristotele l'accento è diverso: è lo studio delle **strutture fondamentali di questo mondo**, non di un altro.`
          },
          {
            n: 5, romano: "5", titolo: "La sostanza: materia, forma, sinolo",
            chiave: "L'essere si dice in molti modi, ma il modo principale è la sostanza. Ogni cosa concreta è unione inseparabile di materia e forma.",
            testo: `Il punto di partenza è una formula celebre: «**l'essere si dice in molti modi**». «È» in un senso una pietra, in un altro il suo colore, in un altro la sua posizione, in un altro il fatto che stia cadendo.

Aristotele distingue dieci modi (le **categorie**), ma uno solo è primario: la **sostanza** (*ousía*), cioè ciò che esiste **di per sé**. Tutti gli altri — qualità, quantità, relazione, luogo, tempo… — sono **accidenti**, cioè esistono solo *in* una sostanza. Il bianco non esiste da solo: esiste come «questo cavallo bianco».

Che cos'è dunque la sostanza? Aristotele scarta varie ipotesi e arriva a distinguere:
- la **materia** (*hýle*): ciò di cui una cosa è fatta. Da sola è indeterminata, pura possibilità: il bronzo può diventare statua, campana o spada;
- la **forma** (*morphé*, *eidos*): la struttura, l'essenza, ciò che fa sì che quella materia sia *quella cosa lì*. Non è l'aspetto esteriore: è il «che cos'è», ciò che si esprime nella definizione;
- il **sinolo** (*sýnolon*, «tutto insieme»): la cosa concreta, unione di materia e forma. Questa statua, questo uomo, questo albero.

**La differenza decisiva rispetto a Platone** sta qui. Platone e Aristotele sono d'accordo che la scienza riguarda le forme; ma per Platone la forma esiste **separata** dalle cose, per Aristotele esiste **solo nelle cose**, come loro struttura immanente. Non c'è un'idea di uomo in un altro mondo: c'è la forma «uomo» realizzata in Socrate, in Callia, in ciascuno di noi.

Nelle *Categorie* Aristotele precisa: sostanza **prima** è l'individuo concreto («questo uomo»), sostanza **seconda** sono le specie e i generi («uomo», «animale»), che esistono solo come predicati degli individui. L'individuo viene prima: è il rovesciamento completo della gerarchia platonica.`
          },
          {
            n: 6, romano: "6", titolo: "Le quattro cause",
            chiave: "Per spiegare qualcosa servono quattro risposte: di che è fatto, che cos'è, chi l'ha prodotto, a quale scopo. La causa finale è la più importante.",
            testo: `Conoscere, per Aristotele, significa **conoscere le cause**. E le cause sono quattro. L'esempio classico è una statua di bronzo:

- **Causa materiale**: ciò di cui una cosa è fatta — il bronzo.
- **Causa formale**: l'essenza, il modello, la struttura — la figura che la statua realizza.
- **Causa efficiente**: ciò che ha prodotto il movimento o il cambiamento — lo scultore.
- **Causa finale**: lo scopo, il *per che cosa* — ornare il tempio, onorare un dio.

Nelle cose naturali le ultime tre tendono a coincidere: nella quercia, la forma (essere quercia), la causa efficiente (la quercia madre che ha prodotto la ghianda) e il fine (diventare una quercia compiuta) sono lo stesso principio, che opera dall'interno. Perciò la natura, per Aristotele, è un principio interno di movimento — a differenza degli oggetti artificiali, che ricevono forma e scopo dall'esterno.

**Il finalismo (teleologia).** È il tratto più caratteristico: «**la natura non fa nulla invano**». Ogni essere tende a realizzare la propria forma compiuta, come il seme tende a diventare pianta. Non c'è un progettista esterno che decide gli scopi: la finalità è **immanente**, inscritta nella natura di ciascun essere.

È esattamente il contrario del **meccanicismo** di Democrito, per cui tutto avviene per necessità e urti casuali. Aristotele obietta: se tutto fosse caso, i denti non nascerebbero regolarmente adatti a masticare; il fatto che ciò accada «sempre o per lo più» esclude il caso.

**Che cosa ne resta.** La scienza moderna ha espulso la causa finale dalla fisica: Galileo e Newton spiegano *come*, non *perché*. È stata una liberazione metodologica. Ma la spiegazione finalistica è tuttora indispensabile in **biologia** (a che serve il cuore?), in **psicologia** e nello studio dell'azione umana — dove non si capisce nulla senza chiedersi lo scopo.`
          },
          {
            n: 7, romano: "7", titolo: "La critica alle idee platoniche",
            chiave: "Aristotele smonta il maestro con quattro obiezioni: le idee sono un inutile raddoppio del mondo, non spiegano il movimento, e la partecipazione è una metafora vuota.",
            testo: `La critica alle idee attraversa tutta l'opera di Aristotele e si può riassumere in quattro argomenti.

- **Raddoppiano inutilmente il mondo.** Se non riusciamo a spiegare le cose sensibili, aggiungere un altro insieme di enti — altrettanto numerosi e per giunta irraggiungibili — non risolve nulla: è come «voler contare avendo prima raddoppiato il numero degli oggetti».
- **Non spiegano il movimento.** Le idee sono immobili e separate: come potrebbero causare la generazione e il cambiamento delle cose? Manca in Platone una causa efficiente reale.
- **La partecipazione è una metafora vuota.** Dire che le cose «imitano» o «partecipano» delle idee sono, scrive Aristotele, «parole vuote e metafore poetiche»: non spiegano nulla di preciso.
- **L'argomento del «terzo uomo»** (che Platone stesso si era posto nel *Parmenide*): se un uomo concreto e l'idea di uomo hanno qualcosa in comune, occorrerà una terza idea per spiegare questa somiglianza, e poi una quarta, all'infinito.

A questo aggiunge un rilievo storico-filologico: il vero errore, dice, fu **separare** l'universale dalle cose. Socrate cercava le definizioni universali ma non le rendeva enti a sé stanti; i platonici sì, «e chiamarono idee questa specie di enti».

**La soluzione aristotelica.** L'universale esiste, ma **nelle cose** (*in re*), non prima di esse. Noi lo cogliamo per **astrazione**: dall'esperienza di molti uomini particolari la mente estrae ciò che hanno in comune. L'universale è reale come struttura, ma non è un individuo che esista per conto proprio.

Il dibattito non si chiuderà mai: nel Medioevo si riaprirà come **questione degli universali** (esistono prima delle cose, nelle cose o solo come nomi nella mente?), dividendo realisti, aristotelici e nominalisti.`
          },
          {
            n: 8, romano: "8", titolo: "Potenza e atto: la soluzione del divenire",
            chiave: "Come può una cosa diventare ciò che non è? Perché lo è già in potenza. Con questa distinzione Aristotele risolve il problema aperto da Parmenide.",
            testo: `Il divenire era il grande scandalo della filosofia greca: Parmenide lo aveva dichiarato impossibile, perché cambiare significherebbe passare dal non essere all'essere.

Aristotele lo risolve con una distinzione tanto semplice quanto potente. Tra l'essere e il nulla c'è un **terzo stato**:
- la **potenza** (*dýnamis*): la possibilità reale di diventare qualcosa. Il seme è **in potenza** una quercia; il bambino è in potenza un adulto; il bronzo è in potenza una statua.
- l'**atto** (*enérgeia*, *entelécheia*): la realizzazione compiuta di quella possibilità.

Il divenire non è dunque passaggio dal nulla all'essere, ma **dalla potenza all'atto**. Il seme che germoglia non diventa ciò che non era in nessun modo: attualizza ciò che era già iscritto nella sua natura. La contraddizione di Parmenide si dissolve.

Due precisazioni importanti:
- La potenza **non è indeterminata**: dal seme di quercia nasce una quercia, non un cavallo. Ogni potenza è potenza *di qualcosa di preciso*.
- L'atto è **anteriore** alla potenza in tre sensi: logicamente (per definire la potenza devi già sapere che cos'è la quercia), temporalmente nella specie (ci vuole una quercia in atto per produrre il seme) e ontologicamente (l'atto è più perfetto).

Con questa coppia Aristotele spiega quattro tipi di **movimento** (in senso ampio: ogni cambiamento): sostanziale (nascita e morte), qualitativo (l'alterazione), quantitativo (crescita e diminuzione), locale (lo spostamento). E introduce il **sinolo** in una prospettiva dinamica: la materia è potenza, la forma è atto.

Ne segue infine una visione della natura come **tensione verso la perfezione**: ogni essere si muove per attuare la propria forma. Ed è proprio questa tensione universale che porterà Aristotele a postulare un termine ultimo, un atto puro senza alcuna potenza residua: Dio.`
          },
          {
            n: 9, romano: "9", titolo: "Dio: il motore immobile",
            chiave: "Tutto si muove, quindi c'è una causa prima del movimento che non si muove: pura forma, atto puro, pensiero di pensiero. Muove come l'amato muove l'amante.",
            testo: `L'argomento parte dalla fisica e approda alla teologia.

**La dimostrazione.** Tutto ciò che si muove è mosso da altro. Ma la serie dei motori non può risalire all'infinito, altrimenti non ci sarebbe un inizio del movimento e quindi nemmeno il movimento presente. Deve esistere dunque un **primo motore immobile**: qualcosa che muove senza essere a sua volta mosso.

**Che cos'è.** Se muovesse in quanto mosso, sarebbe ancora in potenza. Dunque il primo motore è **atto puro** (*actus purus*): pura forma senza materia, senza potenzialità, immutabile, eterno, unico, incorporeo.

**Come muove.** Qui sta l'idea più originale. Non muove spingendo — perché spingere significherebbe essere a propria volta mosso dalla reazione. Muove come **causa finale**: «muove in quanto è amato». Come l'oggetto del desiderio attrae senza muoversi, così il primo motore attrae tutto l'universo, che tende verso di lui. Ogni essere, realizzando la propria forma, imita la perfezione dell'atto puro.

**Che cosa fa.** Essendo perfetto, non può occuparsi di ciò che è inferiore: pensare a qualcosa di meno perfetto lo degraderebbe. Quindi pensa solo la cosa più perfetta che ci sia, cioè **sé stesso**. Ne segue la formula celebre: Dio è **pensiero di pensiero** (*nóesis noéseos nóesis*), autocoscienza eterna e beata.

**Le conseguenze**, che è essenziale capire per non fraintendere:
- Dio **non ha creato** il mondo: il mondo è eterno come lui;
- Dio **non conosce** il mondo né i singoli uomini;
- Dio **non interviene**, non è provvidente, non ascolta preghiere;
- è causa **finale**, non efficiente: il motore del desiderio universale, non un artefice.

È un Dio filosofico, molto lontano da quello biblico. Eppure sarà proprio questa dottrina, riletta dai teologi arabi (Avicenna, Averroè) e poi da **Tommaso d'Aquino**, a diventare la struttura portante delle prove razionali dell'esistenza di Dio nel Medioevo — al prezzo di correzioni sostanziali: il Dio cristiano crea, conosce e provvede.`
          }
        ]
      },
      {
        titolo: "Capitolo 3 — La logica e la fisica",
        sottotitolo: "Lo strumento del pensiero e lo studio della natura",
        canti: [
          {
            n: 10, romano: "10", titolo: "La logica: categorie, proposizioni, principio di non contraddizione",
            opere: "Organon",
            chiave: "Aristotele fonda la logica dal nulla: le regole del ragionamento corretto, valide qualunque sia l'argomento. Reggeranno per duemila anni.",
            testo: `La logica è la creazione più incontestabilmente aristotelica: prima di lui **non esisteva**. Kant, duemila anni dopo, osserverà che «non ha potuto fare un passo indietro né uno avanti» dall'assetto che le diede Aristotele — giudizio esagerato ma indicativo.

**Che cos'è.** Non una scienza tra le altre, ma lo **strumento** (*òrganon*) preliminare a ogni scienza: studia le **forme** del ragionamento indipendentemente dal contenuto. «Se ogni A è B e ogni B è C, allora ogni A è C» vale sia che si parli di uomini sia che si parli di numeri.

**I tre livelli.**

**1. I concetti e le categorie.** Il concetto è l'elemento minimo. Aristotele elenca dieci **categorie**, i modi fondamentali in cui si può predicare qualcosa di un soggetto: sostanza, quantità, qualità, relazione, luogo, tempo, posizione, avere, agire, subire. Sono insieme classi logiche e strutture della realtà: non solo modi di dire l'essere, ma modi di essere.

I concetti si ordinano per **genere e specie**, e la definizione si costruisce indicando il genere prossimo e la differenza specifica: l'uomo è «animale (genere) razionale (differenza)».

**2. Le proposizioni.** Solo la proposizione **dichiarativa** (che afferma o nega) può essere vera o falsa: una preghiera o un ordine non lo sono. Le proposizioni si classificano per **qualità** (affermative/negative) e per **quantità** (universali/particolari), da cui i quattro tipi che il Medioevo siglerà A, E, I, O, e i rapporti del **quadrato degli opposti**: contrarie, contraddittorie, subcontrarie, subalterne.

**3. Il ragionamento**: il sillogismo (prossimo capitolo).

**Il principio di non contraddizione.** È il fondamento di tutto: «è impossibile che la stessa cosa appartenga e non appartenga nel medesimo tempo e sotto il medesimo rispetto al medesimo oggetto». Non si può dimostrare, perché ogni dimostrazione lo presuppone; si difende però per **confutazione**: chi lo nega, se vuole dire qualcosa di sensato, è già costretto a usarlo — appena afferma «il principio è falso» pretende che quella frase non sia insieme vera. Chi davvero lo rifiutasse, osserva Aristotele con ironia, non si distinguerebbe da una pianta.`
          },
          {
            n: 11, romano: "11", titolo: "Il sillogismo, l'induzione e la dialettica",
            chiave: "Il sillogismo è il ragionamento che ricava una conclusione necessaria da due premesse. Ma le premesse prime non si dimostrano: si colgono per intuizione.",
            testo: `**Il sillogismo** è definito come «un discorso in cui, poste alcune cose, qualcosa di diverso segue necessariamente da esse». Ha tre proposizioni e tre termini:

- premessa maggiore: *tutti gli uomini sono mortali*
- premessa minore: *Socrate è un uomo*
- conclusione: *Socrate è mortale*

I termini sono: **maggiore** (mortale, predicato della conclusione), **minore** (Socrate, soggetto) e **medio** (uomo), che compare nelle premesse e sparisce nella conclusione: è lui a fare da ponte. Secondo la posizione del termine medio si distinguono le **figure** del sillogismo, e per ciascuna i **modi** validi — che il Medioevo memorizzerà con nomi come *Barbara*, *Celarent*, *Darii*, *Ferio*.

Il punto decisivo è che la validità è **formale**: dipende dalla struttura, non dal contenuto. Un sillogismo può essere formalmente corretto e avere conclusione falsa, se sono false le premesse. Da qui la distinzione tra **validità** (la forma del ragionamento) e **verità** (il contenuto delle proposizioni), che è l'ABC della logica ancora oggi.

**Il problema delle premesse.** Se ogni conclusione va dimostrata partendo da premesse, e queste da altre premesse, si va all'infinito. Aristotele risponde che devono esistere **principi primi** indimostrabili: veri, immediati, più noti della conclusione. Come li conosciamo? Non per dimostrazione, ma per **induzione** (*epagogé*) — dall'esperienza dei casi particolari — e in ultima istanza per **intuizione intellettuale** (*noûs*), che coglie l'universale nel particolare. Il ragionamento deduttivo, insomma, poggia su una base che non è deduttiva.

**Sillogismo scientifico, dialettico, eristico.** La differenza sta nelle premesse: il **sillogismo scientifico** (*apodittico*) parte da premesse vere e necessarie e dà scienza; il **dialettico** parte da premesse solo probabili, cioè condivise dai più o dai sapienti, ed è utile nella discussione (è il campo dei *Topici*); l'**eristico** parte da premesse solo apparentemente probabili e serve a vincere ingannando — Aristotele ne cataloga i trucchi nelle *Confutazioni sofistiche*, primo manuale di fallacie della storia.

**La retorica**, infine, è «l'antistrofe della dialettica»: l'arte di individuare i mezzi di persuasione disponibili. A differenza di Platone, Aristotele **la riabilita**: è uno strumento neutro, indispensabile in tribunale e in assemblea, dove non si può procedere per dimostrazioni rigorose. I suoi mezzi sono l'*ethos* (la credibilità di chi parla), il *pathos* (le emozioni dell'uditorio) e il *logos* (l'argomento), e il suo strumento tipico è l'*entimema*, il sillogismo retorico a premesse probabili.`
          },
          {
            n: 12, romano: "12", titolo: "La fisica e la cosmologia",
            opere: "Fisica · Del cielo",
            chiave: "L'universo è finito, sferico, eterno, con la Terra immobile al centro. Ogni elemento tende al suo luogo naturale. Reggerà fino a Copernico e Galileo.",
            testo: `La **fisica** aristotelica studia gli enti naturali, cioè quelli che hanno in sé il principio del proprio movimento. È una scienza qualitativa e finalistica, non matematica: e questo la rende profondamente diversa dalla nostra.

**I luoghi naturali.** Ogni elemento ha un posto che gli compete e vi tende spontaneamente: la **terra** al centro, poi l'**acqua**, poi l'**aria**, poi il **fuoco** verso l'alto. La pietra cade non perché attratta da una forza, ma perché «torna a casa»; il fuoco sale per lo stesso motivo. Il movimento naturale è dunque spiegato **teleologicamente**, non dinamicamente. I movimenti **violenti** sono quelli imposti contro questa tendenza, e richiedono un motore in contatto costante — da cui la difficoltà (poi celebre) di spiegare perché una freccia continui a volare dopo aver lasciato l'arco.

**I due mondi.** L'universo è nettamente diviso:
- il **mondo sublunare** (sotto la Luna): fatto dei quattro elementi, soggetto a generazione e corruzione, con movimenti rettilinei (che hanno inizio e fine, quindi sono imperfetti);
- il **mondo celeste** (dalla Luna in su): fatto di **etere** o «quinta essenza», ingenerabile e incorruttibile, con movimento **circolare** uniforme ed eterno, perché il cerchio è la figura perfetta che non ha inizio né fine.

Questa distinzione durerà quasi duemila anni e sarà demolita solo quando Galileo, con il cannocchiale, vedrà le montagne sulla Luna e le macchie solari: cioè imperfezione e mutamento nel cielo.

**La struttura del cosmo.** L'universo è **finito** e **sferico**, con la **Terra immobile al centro**; attorno ruotano le sfere concentriche degli astri, mosse in ultima istanza dal motore immobile. Fuori dall'universo non c'è nulla — nemmeno spazio vuoto. Il **vuoto non esiste**: nel vuoto non ci sarebbero luoghi naturali e i corpi si muoverebbero indefinitamente, il che ad Aristotele pare assurdo (curiosamente, è quasi il principio d'inerzia, che lui usa come *reductio ad absurdum*).

**Spazio e tempo.** Lo spazio non è un contenitore assoluto ma il **luogo**, definito come il limite del corpo contenente. Il tempo è «il **numero del movimento** secondo il prima e il poi»: non esiste indipendentemente dal mutamento, e richiede un'anima che conti.

Il sistema, ripreso e affinato da Tolomeo, diventerà la cosmologia ufficiale del Medioevo cristiano — anche perché la gerarchia fisica dei cieli si prestava a essere letta come gerarchia spirituale (si pensi alla *Divina Commedia*).`
          },
          {
            n: 13, romano: "13", titolo: "L'anima e la conoscenza",
            opere: "Dell'anima",
            chiave: "L'anima non è un ospite nel corpo: è la sua forma, ciò che lo rende vivo. Tre livelli: vegetativa, sensitiva, razionale.",
            testo: `Con il trattato *Dell'anima* Aristotele fonda la psicologia come disciplina, e prende le distanze in modo netto da Platone.

**La definizione.** L'anima è «**atto primo di un corpo fisico che ha la vita in potenza**». Cioè: è la **forma** del corpo vivente, ciò che ne fa un organismo capace di funzionare. Non è una sostanza separata imprigionata nella carne (Platone, orfismo), ma **il principio che organizza la materia**. L'immagine è quella dell'occhio: se l'occhio fosse un vivente, la vista sarebbe la sua anima. Chiedersi se anima e corpo siano una cosa sola, aggiunge, è come chiedersi se siano una cosa sola la cera e l'impronta.

La conseguenza è netta: se l'anima è forma del corpo, **muore con esso**. Niente metempsicosi, niente immortalità personale.

**I tre livelli**, ciascuno dei quali include il precedente:
- **vegetativa** (piante): nutrizione, crescita, riproduzione;
- **sensitiva** (animali): sensazione, desiderio, movimento, immaginazione, memoria;
- **razionale** (uomo): intelletto e pensiero.

L'uomo possiede tutte e tre: è la definizione stessa dell'uomo come «animale razionale».

**La conoscenza.** Aristotele è deciso: «**nulla è nell'intelletto che prima non sia stato nei sensi**» (formula medievale che riassume la sua posizione). Il percorso è: **sensazione** → **immaginazione** (*phantasía*, che conserva l'immagine in assenza dell'oggetto) → **memoria** → **esperienza** → **astrazione** dell'universale. La mente alla nascita è come «una tavoletta su cui nulla è scritto» — l'antenata della *tabula rasa* di Locke.

Il **senso comune** (*koiné aísthesis*) è la facoltà che unifica i dati dei cinque sensi e ci fa percepire un unico oggetto e non cinque sensazioni sparse.

**L'intelletto: il punto oscuro.** Aristotele distingue un **intelletto potenziale** (che può ricevere tutte le forme) e un **intelletto attivo** o «agente», che le rende attualmente intelligibili astraendole dalle immagini, come la luce rende attualmente visibili i colori. E aggiunge che l'intelletto attivo è «separabile, impassibile, immortale ed eterno». Ma non spiega se sia individuale o unico per tutti gli uomini.

Da questa ambiguità nasceranno secoli di controversie: **Averroè** sosterrà che l'intelletto è unico per l'intera specie (con la conseguenza che non c'è immortalità individuale), e **Tommaso d'Aquino** scriverà un intero trattato per confutarlo.`
          }
        ]
      },
      {
        titolo: "Capitolo 4 — Etica, politica, poetica",
        sottotitolo: "Le forme dell'agire umano",
        canti: [
          {
            n: 14, romano: "14", titolo: "L'etica: la felicità e il giusto mezzo",
            opere: "Etica Nicomachea",
            chiave: "Il fine dell'uomo è la felicità, cioè l'esercizio della ragione. La virtù è un'abitudine: il giusto mezzo tra due eccessi, e si impara praticandola.",
            testo: `L'*Etica Nicomachea* (dedicata al figlio Nicomaco) è il primo trattato sistematico di etica della storia, e resta uno dei più letti.

**Il fine.** Ogni azione tende a un fine; ma non tutti i fini sono ultimi. Cerchiamo la ricchezza per altro, l'onore per altro; c'è invece un fine che vogliamo **solo per sé stesso**, ed è la **felicità** (*eudaimonía*). Su questo tutti concordano — ma poi ciascuno la identifica con cose diverse: piacere, onore, ricchezza.

**La funzione propria.** Aristotele risolve con un ragionamento elegante: la felicità di ogni essere consiste nello svolgere bene la **funzione che gli è propria**. L'occhio è buono se vede bene. La funzione propria dell'uomo non è vivere (lo fanno le piante) né sentire (lo fanno gli animali), ma **ragionare**. Dunque la felicità è «attività dell'anima secondo ragione», esercitata bene e per tutta la vita.

Non è quindi uno stato d'animo passeggero né un piacere: è una **vita riuscita**. Richiede anche, realisticamente, un minimo di beni esterni: salute, amici, mezzi sufficienti. «Non si può fare il bello con la faccia deturpata e in totale solitudine»: Aristotele, a differenza degli stoici, non pretende che il saggio sia felice sotto tortura.

**Le virtù etiche e il giusto mezzo.** Le virtù si dividono in **dianoetiche** (della ragione: sapienza, saggezza, arte, scienza, intelletto) ed **etiche** (della parte desiderante, che obbedisce alla ragione: coraggio, temperanza, generosità, giustizia).

Le virtù etiche non sono innate né si imparano dai libri: sono **abitudini** (*éthos*), si acquisiscono con l'esercizio ripetuto. «Diventiamo giusti compiendo azioni giuste»: si impara la virtù come si impara a suonare, praticando. È la risposta al problema socratico — non basta *sapere* che cos'è il bene, bisogna aver *educato il carattere*.

Ogni virtù è un **giusto mezzo** tra due vizi opposti, uno per eccesso e uno per difetto:
- coraggio: tra temerarietà e viltà
- temperanza: tra intemperanza e insensibilità
- generosità: tra prodigalità e avarizia
- magnanimità: tra vanità e pusillanimità

Attenzione: non è la mediocrità né una media aritmetica. È il mezzo «relativo a noi», che varia secondo la persona e la situazione, e va individuato di volta in volta dalla **saggezza** (*phrónesis*), la virtù intellettuale che guida l'azione concreta. Il giusto mezzo, precisa Aristotele, è «un estremo quanto a perfezione».

**Il vertice.** La forma più alta di felicità resta la **vita teoretica** (*bíos theoretikós*), la contemplazione: perché è l'attività della parte più nobile dell'uomo, è la più continua, la più autosufficiente e la più simile a quella divina. Ma è per pochi e per momenti: nella vita ordinaria la felicità è quella pratica, fatta di virtù, amicizia e cittadinanza.`
          },
          {
            n: 15, romano: "15", titolo: "L'amicizia e la libertà",
            chiave: "All'amicizia Aristotele dedica due interi libri: senza amici nessuno sceglierebbe di vivere. E l'azione volontaria è quella di cui siamo davvero responsabili.",
            testo: `**L'amicizia** (*philía*) occupa due dei dieci libri dell'*Etica Nicomachea*: nessun filosofo antico le dà tanto spazio. «Nessuno sceglierebbe di vivere senza amici, anche se possedesse tutti gli altri beni».

Ne distingue tre tipi, secondo il motivo:
- **per utilità**: ci si frequenta per il vantaggio reciproco (i soci in affari). Finisce quando finisce l'utile;
- **per piacere**: tipica dei giovani, fondata sul divertimento condiviso. Muta come mutano i gusti;
- **per virtù**: l'amicizia vera, tra persone buone che si vogliono bene **per ciò che sono** e desiderano il bene dell'altro **per l'altro**, non per sé. È rara, richiede tempo e consuetudine («bisogna aver mangiato insieme molto sale»), ed è stabile perché si fonda sul carattere e non sulle circostanze.

L'amicizia perfetta è anche **specchio morale**: l'amico è «un altro sé stesso», e vederlo agire bene ci aiuta a conoscere e correggere noi stessi. Per questo, aggiunge, l'amicizia tiene insieme le città più della giustizia stessa.

**La libertà e la responsabilità.** Prima di giudicare un'azione bisogna sapere se è **volontaria**. È volontaria quando il principio è nell'agente e questi conosce le circostanze; è **involontaria** quando c'è costrizione esterna o ignoranza dei fatti. Restano i casi **misti**: il capitano che getta il carico in mare durante la tempesta agisce controvoglia, ma sceglie — e ne è responsabile.

La **scelta** (*proaíresis*) è deliberata: non si delibera sui fini (che desideriamo) ma sui **mezzi**, e non su ciò che non dipende da noi. Sta qui la responsabilità morale: le virtù e i vizi «dipendono da noi», perché nascono da azioni ripetute che avremmo potuto compiere diversamente. Chi si è reso ingiusto con mille scelte non può più tornare giusto a comando — «come chi ha lanciato una pietra non può richiamarla» — ma era in suo potere non diventarlo.

È una posizione di grande equilibrio: né determinismo (siamo agiti dalle circostanze) né volontarismo assoluto (basta volere). Il carattere si costruisce, e proprio per questo se ne risponde.`
          },
          {
            n: 16, romano: "16", titolo: "La politica",
            opere: "Politica",
            chiave: "L'uomo è per natura un animale politico: la città viene prima dell'individuo, perché solo in essa si diventa pienamente umani.",
            testo: `La *Politica* è la continuazione diretta dell'*Etica*: se il bene dell'uomo si realizza nella comunità, la scienza dell'agire si completa nella scienza della città.

**L'uomo è animale politico** (*zôon politikón*). Non è una constatazione sociologica ma una tesi sulla **natura umana**: l'uomo è l'unico animale dotato di *lógos*, cioè di parola, e la parola serve a discutere dell'utile e del giusto. Chi vive fuori dalla città «o è una bestia o è un dio». Le comunità nascono per gradi — famiglia, villaggio, città — ma la **pólis** è la sola *autosufficiente*, e quindi il fine naturale delle altre: per questo, dice Aristotele con una formula sorprendente, è «per natura anteriore» all'individuo, come il tutto è anteriore alla parte.

**Il metodo.** Nessuna utopia: Aristotele fece raccogliere e analizzare **158 costituzioni** di città greche (ce n'è giunta una, quella di Atene). È filosofia politica **comparata ed empirica**, l'opposto della *Repubblica* platonica — che infatti critica esplicitamente, osservando che l'abolizione della proprietà e della famiglia contraddice la natura umana: «ciò che è comune a molti riceve pochissima cura», e ciascuno si affeziona a ciò che è suo.

**Le forme di governo.** Si classificano secondo **quanti** governano e **nell'interesse di chi**:

- rette (interesse comune): **monarchia** (uno), **aristocrazia** (pochi), **politìa** (molti)
- degeneri (interesse proprio): **tirannide**, **oligarchia**, **democrazia** (intesa come governo dei poveri a proprio vantaggio)

Nessuna forma è la migliore in assoluto: dipende dalle circostanze. Ma la più stabile e praticabile è la **politìa**, un governo misto fondato sulla prevalenza del **ceto medio**: chi non è troppo ricco né troppo povero è meno tentato dalla prepotenza e dall'invidia, e obbedisce alla ragione. È la prima teorizzazione della classe media come garanzia di stabilità politica, e ha avuto un'enorme fortuna moderna.

**I limiti storici.** Aristotele giustifica la **schiavitù** come «naturale» (esisterebbero uomini destinati per natura a obbedire) e considera la donna inferiore per natura, subordinata all'uomo. Sono le pagine più datate e più criticabili, e vanno lette per quello che sono: la razionalizzazione dei rapporti sociali del suo tempo, contro cui già alcuni sofisti — Antifonte, Alcidamante — avevano obiettato in anticipo.`
          },
          {
            n: 17, romano: "17", titolo: "La poetica: mimesi e catarsi",
            opere: "Poetica",
            chiave: "Contro Platone: l'arte non è copia ingannevole ma rappresentazione dell'universale, e le emozioni non vanno soffocate ma purificate.",
            testo: `La *Poetica*, giunta mutila (il libro sulla commedia è perduto — l'assenza attorno a cui Umberto Eco ha costruito *Il nome della rosa*), è la risposta puntuale alla condanna platonica dell'arte.

**La mimesi rivalutata.** Anche per Aristotele l'arte è **imitazione**, ma il termine cambia segno. Imitare non è copiare passivamente: è **rappresentare** ricostruendo secondo verosimiglianza e necessità. E imitare è naturale e piacevole per l'uomo: impariamo imitando fin da bambini, e proviamo piacere davanti alle immagini perché «apprendere è il piacere più grande».

**La poesia è più filosofica della storia.** È la frase più famosa del trattato, e ribalta Platone: lo storico racconta ciò che è **realmente accaduto** (il particolare), il poeta ciò che **potrebbe accadere** secondo verosimiglianza (l'universale). Perciò la poesia sta più vicina alla filosofia. Non è copia di copia: coglie una struttura tipica dell'agire umano.

**La tragedia.** La definizione canonica: «imitazione di un'azione seria e compiuta, in un linguaggio abbellito, che per mezzo di **pietà e terrore** produce la **purificazione** (*kátharsis*) di tali passioni». Le sue parti sono sei, e la più importante è la **trama** (*mŷthos*), non i personaggi: perché la tragedia imita un'azione. La trama deve avere unità (un'unica azione compiuta, con inizio, mezzo e fine) e i suoi meccanismi tipici sono il **rovesciamento** (*peripéteia*) e il **riconoscimento** (*anagnórisis*). L'eroe efficace non è né perfetto né malvagio: è un uomo simile a noi che cade per un **errore** (*hamartía*) — solo così proviamo pietà (per una sventura immeritata) e terrore (perché potrebbe capitare a noi).

**La catarsi.** Il termine, mai spiegato da Aristotele, ha generato duemila anni di interpretazioni: purificazione **religiosa**; **medica** (omeopatica: si scaricano le passioni provandole in forma controllata, come uno sfogo); **morale** (si impara a provarle nella giusta misura, secondo il giusto mezzo); **intellettuale** (si chiariscono le emozioni comprendendone le cause).

In ogni caso la mossa filosofica è chiara: dove Platone vedeva un pericolo — l'arte «annaffia le passioni» — Aristotele vede una **funzione utile**. Le emozioni fanno parte dell'uomo; il problema non è eliminarle ma educarle. È coerente con tutta la sua etica.

*(Nota storica: le famose «tre unità» — azione, tempo, luogo — imposte dal classicismo francese del Seicento non sono di Aristotele: lui parla solo dell'unità d'azione e accenna alla durata. Sono un'invenzione dei suoi interpreti rinascimentali.)*`
          },
          {
            n: 18, romano: "18", titolo: "Il Liceo e l'eredità di Aristotele",
            chiave: "Dopo di lui, la scuola peripatetica; poi la riscoperta araba, Tommaso d'Aquino e otto secoli in cui Aristotele è semplicemente «il Filosofo».",
            testo: `**La scuola peripatetica.** Alla morte di Aristotele guida il Liceo **Teofrasto**, che ne prosegue il programma di ricerca specializzandosi in botanica (fondando di fatto la disciplina) e scrivendo i *Caratteri*, celebre galleria di tipi umani; a lui si deve anche la prima grande opera dossografica sui presocratici, da cui dipendono molte nostre informazioni. Segue **Stratone di Lampsaco**, detto «il fisico», che accentua la ricerca naturalistica in senso quasi materialistico. Poi la scuola declina, mentre nell'età ellenistica prevalgono stoicismo ed epicureismo, più orientati alla salvezza individuale.

**La riscoperta.** Il corpus viene riordinato da **Andronico di Rodi** nel I secolo a.C. Nel Medioevo latino, per secoli, si conoscono solo alcuni scritti di logica. Sono i **filosofi arabi** — al-Fārābī, **Avicenna**, **Averroè**, il «Commentatore» per eccellenza — a conservarlo, commentarlo e restituirlo all'Occidente attraverso la Spagna e la Sicilia, tra XII e XIII secolo.

**Il Medioevo cristiano.** L'arrivo di Aristotele è un terremoto: il suo Dio non crea, non conosce il mondo e l'anima muore col corpo. Dopo un periodo di condanne, **Tommaso d'Aquino** compie la sintesi: adotta l'impianto aristotelico (materia e forma, atto e potenza, quattro cause, le prove del motore immobile) correggendone i punti incompatibili con la fede. Aristotele diventa semplicemente «**il Filosofo**», e per Dante «il maestro di color che sanno».

**Il rovesciamento moderno.** Proprio questa autorità lo renderà il bersaglio della rivoluzione scientifica: Galileo demolisce la fisica dei luoghi naturali e l'incorruttibilità dei cieli, Bacone attacca il sillogismo come sterile, Cartesio riparte da zero. Per due secoli «aristotelico» diventa sinonimo di dogmatico — un'ingiustizia storica, perché il dogmatismo era dei suoi seguaci, non suo.

**Che cosa resta oggi.** Moltissimo, ed è tornato al centro:
- la **logica formale** come disciplina;
- la biologia e la classificazione degli esseri viventi;
- l'idea che ogni ambito richieda un metodo e un grado di precisione propri;
- l'**etica delle virtù**, oggi rifiorita in filosofia morale come alternativa a utilitarismo e kantismo: non «quale regola devo seguire?», ma «che tipo di persona voglio diventare?»;
- la *Poetica*, ancora insegnata nei corsi di sceneggiatura;
- l'analisi dell'amicizia, della responsabilità e della felicità, che si leggono senza bisogno di traduzione culturale.

Se Platone ha insegnato all'Occidente a **immaginare l'ideale**, Aristotele gli ha insegnato a **osservare, distinguere e classificare il reale**. Serve tutt'e due.`
          }
        ]
      }
    ],
    notaPersonaggi: "Le coppie di concetti e le opere che bisogna saper collocare a colpo sicuro.",
    personaggi: [
      {
        gruppo: "1. Metafisica: i concetti chiave",
        voci: [
          { nome: "Sostanza", alt: ["ousía"], desc: "Ciò che esiste di per sé, il significato primario dell'essere. Sostanza prima è l'individuo concreto; sostanze seconde sono specie e generi." },
          { nome: "Materia e forma", alt: ["hýle / morphé"], desc: "La materia è ciò di cui una cosa è fatta (pura possibilità); la forma è l'essenza che la rende ciò che è. La forma è nelle cose, non in un mondo separato." },
          { nome: "Sinolo", alt: ["sýnolon"], desc: "L'unione concreta di materia e forma: la cosa individuale. È la vera sostanza." },
          { nome: "Quattro cause", alt: [], desc: "Materiale (di che è fatto), formale (che cos'è), efficiente (chi l'ha prodotto), finale (a quale scopo). Nelle cose naturali le ultime tre coincidono." },
          { nome: "Potenza e atto", alt: ["dýnamis / enérgeia"], desc: "La soluzione del problema del divenire: il cambiamento è passaggio dalla potenza all'atto, non dal nulla all'essere. L'atto è anteriore e più perfetto." },
          { nome: "Motore immobile", alt: ["atto puro"], desc: "Causa prima del movimento, pura forma senza materia. Muove come causa finale, «in quanto è amato». È pensiero di pensiero: non crea, non conosce il mondo, non provvede." },
          { nome: "Accidente", alt: [], desc: "Ciò che esiste solo in una sostanza (qualità, quantità, relazione…). Non può esistere da solo." },
          { nome: "Categorie", alt: [], desc: "I dieci modi fondamentali di predicare l'essere: sostanza, quantità, qualità, relazione, luogo, tempo, posizione, avere, agire, subire." },
          { nome: "Teleologia", alt: ["finalismo"], desc: "«La natura non fa nulla invano»: ogni essere tende a realizzare la propria forma. Finalità immanente, non progetto esterno. Opposta al meccanicismo di Democrito." }
        ]
      },
      {
        gruppo: "2. Logica",
        voci: [
          { nome: "Organon", alt: ["strumento"], desc: "Il nome complessivo degli scritti di logica: la logica non è una scienza ma lo strumento preliminare a ogni scienza." },
          { nome: "Sillogismo", alt: [], desc: "Ragionamento in cui da due premesse segue necessariamente una conclusione. Tre termini: maggiore, minore e medio (che fa da ponte e sparisce nella conclusione)." },
          { nome: "Validità e verità", alt: [], desc: "Un sillogismo è valido per la forma; è vero se anche le premesse lo sono. Si può ragionare correttamente e concludere il falso." },
          { nome: "Principio di non contraddizione", alt: [], desc: "Impossibile che la stessa cosa sia e non sia nello stesso tempo e sotto il medesimo rispetto. Indimostrabile, ma chi lo nega deve usarlo per negarlo." },
          { nome: "Induzione", alt: ["epagogé"], desc: "Il percorso dai casi particolari all'universale. Insieme all'intuizione (noûs) fornisce le premesse prime, che non possono essere dimostrate." },
          { nome: "Dialettica ed eristica", alt: [], desc: "La dialettica ragiona da premesse probabili (Topici); l'eristica da premesse solo apparentemente tali, per vincere ingannando (Confutazioni sofistiche)." },
          { nome: "Retorica", alt: ["entimema"], desc: "«Antistrofe della dialettica»: arte di trovare i mezzi di persuasione (ethos, pathos, logos). Riabilitata contro Platone. Il suo strumento è l'entimema, sillogismo retorico." }
        ]
      },
      {
        gruppo: "3. Fisica, anima, etica",
        voci: [
          { nome: "Luoghi naturali", alt: [], desc: "Ogni elemento tende al posto che gli compete: terra al centro, poi acqua, aria, fuoco. Il movimento naturale è spiegato per finalità." },
          { nome: "Mondo sublunare / celeste", alt: ["etere"], desc: "Sotto la Luna: quattro elementi, generazione e corruzione, moti rettilinei. Sopra: etere incorruttibile e moto circolare eterno. Demolito da Galileo." },
          { nome: "Tempo", alt: [], desc: "«Numero del movimento secondo il prima e il poi»: non esiste indipendentemente dal mutamento." },
          { nome: "Anima", alt: ["atto del corpo"], desc: "Forma del corpo vivente, non sostanza separata: muore con esso. Tre livelli: vegetativa, sensitiva, razionale." },
          { nome: "Intelletto attivo", alt: [], desc: "Ciò che rende intelligibili le forme astraendole dalle immagini, «come la luce rende visibili i colori». Detto separabile ed eterno: ambiguità da cui nasce la disputa Averroè–Tommaso." },
          { nome: "Eudaimonía", alt: ["felicità"], desc: "Il fine ultimo: attività dell'anima secondo ragione, per tutta la vita. Non uno stato d'animo ma una vita riuscita; richiede anche beni esterni." },
          { nome: "Giusto mezzo", alt: ["medietà"], desc: "Ogni virtù etica sta tra un eccesso e un difetto (coraggio tra temerarietà e viltà). Non è mediocrità: è il mezzo «relativo a noi», individuato dalla saggezza." },
          { nome: "Virtù etiche e dianoetiche", alt: [], desc: "Le etiche riguardano il carattere e si acquisiscono con l'abitudine; le dianoetiche riguardano la ragione. La phrónesis (saggezza) guida l'azione concreta." },
          { nome: "Philía", alt: ["amicizia"], desc: "Tre tipi: per utilità, per piacere, per virtù. Solo la terza è vera e stabile: l'amico è «un altro sé stesso»." }
        ]
      },
      {
        gruppo: "4. Politica e poetica",
        voci: [
          { nome: "Zôon politikón", alt: ["animale politico"], desc: "L'uomo si realizza solo nella pólis, perché ha il lógos e può discutere del giusto. Chi vive fuori dalla città «o è bestia o è dio»." },
          { nome: "Le sei costituzioni", alt: [], desc: "Rette: monarchia, aristocrazia, politìa. Degeneri: tirannide, oligarchia, democrazia. Il criterio è l'interesse comune o quello di chi governa." },
          { nome: "Politìa", alt: ["governo misto"], desc: "La forma più praticabile e stabile: governo dei molti fondato sul ceto medio, meno esposto a prepotenza e invidia." },
          { nome: "Mimesi", alt: [], desc: "L'arte è imitazione, ma nel senso di rappresentazione verosimile: rappresenta l'universale, e per questo «la poesia è più filosofica della storia»." },
          { nome: "Catarsi", alt: ["kátharsis"], desc: "La purificazione di pietà e terrore prodotta dalla tragedia. Mai spiegata da Aristotele: interpretata come purificazione religiosa, medica, morale o intellettuale." },
          { nome: "Peripéteia e anagnórisis", alt: [], desc: "Rovesciamento della situazione e riconoscimento: i due meccanismi che rendono efficace la trama tragica." },
          { nome: "Hamartía", alt: ["errore tragico"], desc: "L'errore per cui cade l'eroe: né perfetto né malvagio, ma simile a noi. Solo così si producono pietà e terrore." }
        ]
      }
    ]
  }

};

/* Ordine di visualizzazione nella sezione Filosofia */
const FILOSOFIA_ORDINE = ["introduzione", "presocratici", "sofisti-socrate", "platone", "aristotele"];
