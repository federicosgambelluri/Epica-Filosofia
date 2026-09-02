/* ============================================================
   DATI — FILOSOFIA · Volume 1B
   Abbagnano–Fornero, "La ricerca del pensiero" 1B
   «Dall'ellenismo alla scolastica»

   Unità 5 — Le filosofie ellenistiche e il neoplatonismo
   Unità 6 — La patristica e Agostino
   Unità 7 — La scolastica e Tommaso

   Le unità vengono aggiunte all'oggetto FILOSOFIA definito in
   data-filosofia.js. Stessa struttura e stessa formattazione del testo.
   ============================================================ */

Object.assign(FILOSOFIA, {

  /* ------------------------------------------------ UNITÀ 5 */
  ellenismo: {
    id: "ellenismo",
    titolo: "L'età ellenistica",
    autore: "Unità 5 · Dall'ellenismo al neoplatonismo",
    sottotitolo: "Stoicismo, epicureismo, scetticismo, Plotino",
    epoca: "323 a.C. – III sec. d.C.",
    lingua: "Atene, Alessandria, Roma",
    tag: ["Stoicismo", "Epicureismo", "Scetticismo", "Neoplatonismo"],
    epigrafe: "Vana è la parola del filosofo che non curi nessuna sofferenza dell'uomo. (Epicuro)",
    colore: "verde",
    parti: [
      {
        titolo: "Capitolo 1 — Società e cultura nell'età ellenistica",
        sottotitolo: "Il mondo nuovo dopo Alessandro Magno",
        canti: [
          {
            n: 1, romano: "1", titolo: "Politica e società: la fine della pólis",
            chiave: "Crollata la città-stato, l'uomo greco si ritrova suddito di grandi regni. Non potendo più cercare la felicità nella politica, la cerca dentro di sé: nasce la filosofia come «cura dell'anima».",
            testo: `Il 323 a.C., anno della morte di **Alessandro Magno**, è la data convenzionale con cui si apre l'**età ellenistica**. Il suo impero si spezza subito nei regni dei successori (i *diàdochi*): l'Egitto dei Tolomei con capitale Alessandria, la Siria dei Seleucidi, la Macedonia degli Antigonidi, più tardi Pergamo. L'età si chiude con la conquista romana, convenzionalmente nel 31 a.C. (Azio).

Che cosa cambia per un greco? Tutto. Fino ad allora la **pólis** era l'orizzonte totale della vita: piccola, autosufficiente, governata dai cittadini in assemblea. Aristotele poteva ancora scrivere che l'uomo è per natura «animale politico» e che chi vive fuori dalla città «o è bestia o è dio». Ora la città continua a esistere, ma **non decide più nulla di importante**: la guerra, la pace, le tasse, le alleanze le decide un re lontano, a volte in un'altra lingua.

Le conseguenze sul modo di pensare sono profonde:
- **Il cittadino diventa suddito.** L'individuo perde il potere politico e insieme la protezione psicologica della comunità: si sente solo davanti a un mondo enorme.
- **Nasce il cosmopolitismo.** Se non sono più cittadino di Atene, di che cosa sono cittadino? Della *kósmopolis*, la «città-mondo». Lo diranno i cinici («la mia patria è il mondo») e soprattutto gli stoici.
- **La felicità si sposta all'interno.** Non essendo più raggiungibile attraverso l'azione politica, la si cerca in un atteggiamento interiore: *atarassia* (assenza di turbamento), *apatia* (assenza di passioni), *autarchia* (bastare a sé stessi). Sono le tre parole d'ordine di tutte le scuole ellenistiche.

Un altro tratto nuovo è la **mescolanza delle culture**. Greci, egiziani, ebrei, persiani, siriani vivono nelle stesse metropoli; si diffonde una lingua comune, la *koinè*; arrivano culti orientali, astrologia, religioni di salvezza. È il terreno su cui, secoli dopo, si diffonderà anche il cristianesimo.

Attenzione a un pregiudizio diffuso: l'ellenismo non è una «decadenza» della grande filosofia greca. È una filosofia con **compiti diversi**. Non chiede più «che cos'è il mondo», chiede «come si vive bene in un mondo che non controllo». È una domanda che tornerà attualissima ogni volta che gli uomini si sentiranno piccoli di fronte a poteri troppo grandi.`
          },
          {
            n: 2, romano: "2", titolo: "Cultura e scienza: Alessandria e il divorzio tra scienza e filosofia",
            chiave: "Con la Biblioteca e il Museo di Alessandria nasce la ricerca specialistica finanziata dallo Stato. La scienza si stacca dalla filosofia: ognuna prende la propria strada.",
            testo: `I sovrani ellenistici finanziano la cultura per prestigio. A **Alessandria d'Egitto** i Tolomei fondano due istituzioni destinate a fare storia:
- il **Museo** (*Museîon*, «tempio delle Muse»): un centro di ricerca dove gli studiosi vivono a spese del re, con vitto, alloggio e stipendio. È l'antenato dell'università e del CNR;
- la **Biblioteca**, che arriva a contenere centinaia di migliaia di rotoli. Vi si inventa la **filologia**: si confrontano i manoscritti, si stabiliscono i testi «buoni» di Omero, si scrivono commenti. Nasce l'idea stessa di edizione critica.

Il fatto teoricamente più importante è però un altro: la **separazione tra scienza e filosofia**. Fino ad Aristotele erano la stessa cosa: il filosofo studiava insieme l'essere, gli animali, le stelle e la giustizia. Ora la ricerca si spezza in **discipline specialistiche** con metodi propri: matematica, astronomia, medicina, geografia. Il matematico Euclide non ha bisogno di una metafisica per dimostrare i suoi teoremi.

Le cause della separazione sono almeno tre:
- **Quantitativa**: il sapere è cresciuto troppo perché un solo uomo lo domini tutto.
- **Metodologica**: le scienze si accorgono che, per progredire, devono restringere il campo e adottare procedure rigorose e verificabili (dimostrazione, osservazione, misura).
- **Culturale**: le scuole filosofiche si concentrano ormai sull'etica, cioè su come vivere. La curiosità sulla natura resta, ma diventa strumentale: gli stoici studiano il cosmo per accettarne l'ordine, gli epicurei per **liberarsi dalla paura** degli dei.

Si separa anche la **scienza dalla tecnica**. Le grandi scoperte teoriche raramente diventano macchine utili: c'è un pregiudizio aristocratico contro il lavoro manuale e, con la manodopera schiavile, manca l'incentivo economico a risparmiare fatica. Archimede stesso, secondo Plutarco, considerava le sue macchine da guerra un passatempo indegno della vera geometria. Bisognerà aspettare Bacone e la rivoluzione scientifica perché scienza e tecnica si saldino di nuovo.`
          },
          {
            n: 3, romano: "3", titolo: "Le scienze specialistiche: matematica, astronomia, geografia, medicina",
            chiave: "In due secoli la scienza ellenistica raggiunge risultati che resteranno insuperati fino al Seicento: Euclide, Archimede, Aristarco, Eratostene, Erofilo.",
            testo: `**Matematica.** **Euclide** (III sec. a.C.) scrive gli *Elementi*, il libro di testo più longevo della storia: da poche definizioni, postulati e nozioni comuni deduce tutta la geometria. Il suo **metodo assiomatico-deduttivo** diventerà il modello di rigore per Cartesio, Spinoza e Newton. **Archimede** di Siracusa (287–212 a.C.) unisce genio teorico e applicazione: calcola il valore di π, fonda l'idrostatica (il famoso principio) e la statica (legge della leva), anticipa procedimenti di calcolo infinitesimale. **Apollonio di Perga** studia le sezioni coniche — ellisse, parabola, iperbole — che Keplero ritroverà nelle orbite dei pianeti.

**Astronomia.** **Aristarco di Samo** formula per primo l'ipotesi **eliocentrica**: la Terra ruota su sé stessa e gira attorno al Sole. Fu respinta per ragioni serie (non si osservava la parallasse stellare, ossia lo spostamento apparente delle stelle) e per ragioni di senso comune. Prevalse il sistema geocentrico, perfezionato da **Tolomeo** (II sec. d.C.) con epicicli e deferenti: un modello complicato ma capace di «salvare i fenomeni», che resterà in vigore fino a Copernico.

**Geografia.** **Eratostene** misura la circonferenza terrestre confrontando l'ombra del sole a Siene e ad Alessandria: sbaglia di pochissimo. Che la Terra fosse sferica, per un greco colto, era un fatto acquisito da secoli.

**Medicina.** A Alessandria **Erofilo** ed **Erasistrato** praticano la dissezione anatomica: distinguono nervi motori e sensitivi, studiano il cervello come centro dell'attività nervosa, descrivono il sistema circolatorio. Più tardi **Galeno** (II sec. d.C.) sistemerà tutto il sapere medico antico, e la sua autorità durerà fino al Rinascimento.

Il senso di questo capitolo per lo studio della filosofia è duplice: mostra che l'antichità **conosceva il metodo scientifico** ben più di quanto si creda; e spiega perché la filosofia ellenistica poté concentrarsi quasi solo sull'etica: la natura era ormai affare di altri.`
          },
          {
            n: 4, romano: "4", titolo: "Il «bisogno» di filosofia e le scuole",
            chiave: "La filosofia ellenistica non promette il sapere per il sapere: promette la felicità. È una terapia, e per questo si organizza in scuole con maestri, dogmi e regole di vita.",
            testo: `Se la scienza si occupa del mondo, di che si occupa la filosofia? Della **vita**. Tutte le scuole ellenistiche condividono la stessa struttura: la filosofia è una **medicina dell'anima**, un sapere che serve a raggiungere la *eudaimonía* nonostante tutto.

Ne deriva un modo nuovo di organizzare il sapere. Tutte le scuole (stoici, epicurei, in parte scettici) dividono la filosofia in **tre parti**:
- **logica** (o canonica): come si distingue il vero dal falso, cioè lo strumento;
- **fisica**: com'è fatto il mondo, cioè il contesto in cui viviamo;
- **etica**: come si vive bene, cioè il fine.

Le prime due esistono in funzione della terza. Gli stoici usavano una similitudine celebre: la filosofia è un uovo, il guscio è la logica, l'albume la fisica, il tuorlo l'etica; oppure un campo, dove la recinzione è la logica, il terreno la fisica, il frutto l'etica.

Un'altra novità è la **«scuola» come comunità di vita**. Non sono facoltà universitarie: sono gruppi che condividono un maestro fondatore, testi considerati autorevoli, esercizi spirituali quotidiani (esame di coscienza, meditazione sulla morte, memorizzazione di massime). Il **Giardino** di Epicuro accoglie donne e schiavi; la **Stoà** insegna sotto un portico; l'**Accademia** platonica prosegue la sua strada cambiando radicalmente indirizzo.

Questo spiega due caratteri spesso criticati della filosofia ellenistica:
- il **dogmatismo**: le tesi del fondatore vengono difese e tramandate quasi come articoli di fede, perché ciò che conta non è innovare ma *vivere secondo* quella dottrina;
- la **ripetitività**: si scrivono manuali, epitomi, raccolte di massime da imparare a memoria («*Kýriai dóxai*», le Massime capitali di Epicuro). Non è pigrizia: se la filosofia deve trasformarti, deve essere disponibile nella memoria nel momento del bisogno.`
          },
          {
            n: 5, romano: "5", titolo: "L'eclettismo e il declino del pensiero scientifico",
            chiave: "Tra II e I secolo a.C. si smette di scegliere una scuola e si prende il meglio da ciascuna: nasce l'eclettismo. Contemporaneamente la ricerca scientifica si spegne.",
            testo: `A partire dal II secolo a.C. le grandi scuole si esauriscono e prende piede l'**eclettismo** (dal greco *eklégo*, «scelgo»): l'atteggiamento di chi non aderisce a un sistema, ma seleziona da ognuno le tesi che gli sembrano più convincenti o più utili.

Le ragioni:
- la lunga polemica tra le scuole ha mostrato che nessuna riesce a confutare definitivamente le altre;
- la critica **scettica** ha indebolito la pretesa di ciascuna di possedere la verità;
- serve un sapere pratico, adatto all'uomo di governo: sono i **Romani** i grandi eclettici, e **Cicerone** ne è il rappresentante tipico.

L'eclettismo ha una fama cattiva («raccogliticcio», «senza rigore») ma va giudicato con equilibrio: da un lato è indice di stanchezza teorica, dall'altro corrisponde a un criterio di buon senso, quello del **consenso universale** — è probabilmente vero ciò su cui tutte le scuole concordano.

Parallelamente si spegne la scienza. Il **declino di Alessandria** ha cause materiali (guerre, incendi della Biblioteca, fine dei finanziamenti regi, poi il disinteresse di Roma) e culturali: prevale un clima religioso e mistico, che cerca la salvezza più che la spiegazione. Il sapere si fa **erudizione e commento**: non si scoprono più cose nuove, si compilano riassunti di quelle vecchie. È lo stesso passaggio che si osserverà, molti secoli dopo, alla fine della scolastica.`
          }
        ]
      },
      {
        titolo: "Capitolo 2 — Lo stoicismo",
        sottotitolo: "Vivere secondo natura, cioè secondo ragione",
        canti: [
          {
            n: 6, romano: "6", titolo: "La scuola stoica: le tre fasi",
            chiave: "Fondata da Zenone di Cizio sotto un portico dipinto (stoà poikíle) ad Atene, è la scuola più duratura dell'antichità: arriva fino all'imperatore Marco Aurelio.",
            testo: `Lo **stoicismo** nasce ad Atene attorno al 300 a.C. per opera di **Zenone di Cizio** (Cipro), che insegnava sotto la *stoà poikíle*, il «portico dipinto» dell'agorà: da lì il nome della scuola.

Si distinguono tre fasi:
- **Stoicismo antico** (III–II sec. a.C.): Zenone, **Cleante**, e soprattutto **Crisippo**, il grande sistematore («se non ci fosse stato Crisippo, non ci sarebbe la Stoà»). È la fase in cui si costruisce la dottrina completa: logica, fisica, etica. Ne restano solo frammenti.
- **Stoicismo medio** (II–I sec. a.C.): **Panezio** e **Posidonio**, che attenuano la rigidezza morale, accolgono elementi platonici e diffondono lo stoicismo a Roma nel circolo degli Scipioni.
- **Stoicismo romano** o **nuova Stoà** (I–II sec. d.C.): **Seneca**, **Epitteto** (uno schiavo liberato) e **Marco Aurelio** (un imperatore). Qui la fisica e la logica quasi scompaiono e resta l'etica, in forma di predicazione morale e di esame di coscienza. Sono anche gli unici autori stoici di cui possediamo opere intere.

Un particolare che colpisce e che vale la pena ricordare: la scuola che afferma con più forza l'**uguaglianza di tutti gli uomini** come esseri razionali ha come massimi rappresentanti uno schiavo e un imperatore. Non è un caso: per gli stoici la libertà vera non è quella giuridica, è quella interiore.`
          },
          {
            n: 7, romano: "7", titolo: "La logica: il criterio della verità e la teoria del significato",
            chiave: "Per gli stoici il criterio della verità è la «rappresentazione catalettica»: quell'impressione così evidente da costringere l'assenso. La conoscenza parte tutta dai sensi.",
            testo: `Gli stoici chiamano **logica** l'insieme di ciò che riguarda il discorso (*lógos*), e la dividono in **retorica** e **dialettica**; quest'ultima comprende la teoria della conoscenza, la semantica e quella che oggi chiamiamo logica proposizionale.

**Il criterio della verità.** Contro Platone, gli stoici sono **empiristi**: l'anima alla nascita è come un foglio bianco su cui l'esperienza scrive. Dalle sensazioni si formano i ricordi, dai ricordi l'esperienza, dall'esperienza i concetti. Ma allora come distinguere una percezione vera da un'allucinazione? Con la **rappresentazione catalettica** (*phantasía kataleptiké*, «rappresentazione che afferra»): quella impressione che proviene realmente dall'oggetto, lo riproduce fedelmente ed è talmente evidente da **strappare il nostro assenso**.

Crisippo la illustrava con la mano: la mano aperta è la rappresentazione; le dita che si piegano sono l'assenso; il pugno chiuso è la comprensione; la mano che stringe il pugno con l'altra è la scienza. Il punto decisivo è che l'assenso **dipende da noi**: da qui, in etica, la responsabilità morale.

**La teoria del significato.** Gli stoici distinguono tre elementi, con una precisione che anticipa la linguistica moderna:
- il **significante**, cioè il suono o il segno materiale («albero»);
- il **significato** o *lektón*, ciò che viene detto, il contenuto di pensiero, che è incorporeo;
- l'**oggetto** reale a cui ci si riferisce.

Due persone che parlano lingue diverse odono lo stesso suono ma solo chi conosce la lingua coglie il *lektón*. Questa distinzione permette agli stoici di costruire una logica non dei termini (come quella aristotelica) ma delle **proposizioni**: studiano gli enunciati ipotetici («se… allora»), disgiuntivi, la negazione, e formulano regole di inferenza che la logica contemporanea ha riscoperto come propriamente moderne.

**Paradossi e antinomie.** Gli stoici si appassionano ai rompicapo logici: il **mentitore** («questa frase è falsa»: se è vera è falsa e viceversa), il **sorite** (togliendo un chicco alla volta, quando un mucchio smette di essere un mucchio?), il **dilemma del coccodrillo**. Non sono giochi: sono i punti in cui il linguaggio mostra i propri limiti.`
          },
          {
            n: 8, romano: "8", titolo: "La fisica: un cosmo vivo, razionale e necessario",
            chiave: "Tutto è corpo; il cosmo è un unico vivente ordinato da un lógos-fuoco che ne è l'anima. Nulla accade a caso: tutto è provvidenza e destino.",
            testo: `La fisica stoica è un **materialismo panteistico**: esiste solo ciò che è corpo, perché solo un corpo può agire e subire. Ma i corpi sono di due tipi, o meglio ogni corpo ha due principi:
- un principio **passivo**, la materia inerte;
- un principio **attivo**, il *lógos*, concepito come **pneuma**, soffio igneo che penetra tutto e lo organizza.

Questo principio attivo ha molti nomi che indicano la stessa realtà: **Dio**, **ragione**, **natura**, **destino**, **provvidenza**, **Zeus**, **fuoco artefice**. Il cosmo, quindi, non è una macchina cieca: è un **animale vivente**, di cui Dio è l'anima e il mondo il corpo. È **panteismo**: Dio non è fuori dal mondo, è il mondo nel suo aspetto razionale.

Da qui tre conseguenze forti:
- **Determinismo assoluto.** Ogni evento è legato agli altri in una catena di cause: il **fato** (*heimarméne*). Nulla è casuale, nemmeno le sciagure.
- **Provvidenzialità.** Poiché la ragione che governa è perfetta, ciò che accade è il meglio possibile per il tutto — anche quando al singolo appare un male. Questa è la prima grande **teodicea** della storia del pensiero: il male è apparente, oppure è necessario alla perfezione dell'insieme (l'ombra nel quadro).
- **Eterno ritorno.** Il mondo periodicamente si dissolve in fuoco (*ekpýrosis*, conflagrazione) e rinasce identico, all'infinito.

Il problema più spinoso è la **libertà**: se tutto è necessario, come posso essere responsabile? Crisippo risponde con l'immagine del **cane legato al carro**: il carro va dove deve andare; il cane può seguirlo volentieri o essere trascinato scalciando. Non cambia il percorso, cambia il modo in cui lo vivi. La libertà stoica è **libertà di adesione**: non poter cambiare gli eventi, ma poter cambiare il proprio giudizio su di essi.`
          },
          {
            n: 9, romano: "9", titolo: "L'antropologia: l'uomo come parte del lógos",
            chiave: "L'anima umana è una scintilla del fuoco divino. Ciò che ci definisce non è il corpo né il ruolo sociale, ma la ragione: perciò tutti gli uomini sono uguali.",
            testo: `Se il cosmo è un vivente razionale, l'uomo ne è una **parte**, e la sua anima è **frammento** (*apóspasma*) del *lógos* universale. Anche l'anima è corporea — è *pneuma* — e ha otto parti: i cinque sensi, la voce, la facoltà riproduttiva e, al centro, l'**egemonico** (*hegemonikón*), la parte direttiva che sta nel cuore e in cui risiedono giudizio e assenso.

Tre conseguenze antropologiche importanti:

**1. L'uguaglianza di tutti gli uomini.** Se ciò che ci costituisce è la ragione, e la ragione è la stessa in tutti, allora la distinzione tra greco e barbaro, tra libero e schiavo, tra uomo e donna è **convenzionale**, non naturale. Seneca lo scrive in una delle pagine più celebri dell'antichità: «Sono schiavi? No, uomini. Sono schiavi? No, compagni di schiavitù, se pensi che la sorte ha uguale potere su entrambi». Non è ancora abolizionismo politico, ma è la premessa teorica dell'idea moderna di dignità umana.

**2. L'oikéiosis.** Ogni vivente ha un istinto naturale a conservare sé stesso e a «sentire come proprio» ciò che gli appartiene. Crescendo, questo cerchio si allarga: dal proprio corpo alla famiglia, agli amici, ai concittadini, all'umanità intera. È la base naturale della **socialità** e della **filantropia**.

**3. Il dovere.** L'azione conforme alla natura razionale si chiama *kathékon* (in latino *officium*, «dovere»): un termine che, tramite Cicerone, entrerà in tutta la morale occidentale fino a Kant.`
          },
          {
            n: 10, romano: "10", titolo: "L'etica: virtù, apatia, le cose indifferenti",
            chiave: "Il bene è solo la virtù, il male solo il vizio; tutto il resto — salute, ricchezza, vita — è indifferente. La felicità è vivere secondo ragione, liberi dalle passioni.",
            testo: `L'etica stoica parte da un principio: **«vivere secondo natura»**, che per l'uomo significa **vivere secondo ragione**, cioè in accordo con il *lógos* che governa il tutto.

**Il bene, il male, gli indifferenti.** Solo la **virtù** è bene; solo il **vizio** è male. Tutto ciò che non dipende da noi — salute, malattia, ricchezza, povertà, fama, la vita stessa — è **indifferente** (*adiáphoron*). Non significa che sia tutto uguale: tra gli indifferenti alcuni sono «preferibili» (la salute), altri da respingere (la malattia). Ma non toccano la felicità, perché il saggio è felice anche nel toro di Falaride: la sua interiorità non è raggiungibile dall'esterno.

**Le passioni e l'apatia.** Le passioni (*páthe*) non sono impulsi irrazionali da moderare, come per Aristotele: sono **giudizi sbagliati**. La paura è il giudizio che qualcosa di indifferente sia un male; il desiderio, che sia un bene. Quattro le fondamentali: piacere e desiderio (verso il presunto bene), dolore e timore (verso il presunto male). Poiché sono errori, non vanno moderate ma **estirpate**: il fine è l'**apátheia**, l'assenza di passioni — che non è insensibilità, ma non essere più in balìa di ciò che non si controlla.

**Il saggio e il paradosso stoico.** La virtù è **una e indivisibile**: chi la possiede la possiede tutta, chi non la possiede è vizioso. Non ci sono vie di mezzo, come non c'è chi affoga «un po' meno» a un braccio dalla superficie. Ne segue che il saggio è raro quasi quanto la fenice; gli stoici ammettono allora la figura del *proficiens*, chi progredisce.

**La legge naturale e il cosmopolitismo.** Poiché la ragione è comune, esiste una **legge naturale** valida per tutti gli uomini, superiore alle leggi positive delle singole città. Il saggio è **cittadino del mondo**. Da qui passa una linea diretta che arriva al diritto romano, al giusnaturalismo moderno e alla Dichiarazione universale dei diritti umani.

**La formula famosa** è quella di Epitteto: «Delle cose, alcune dipendono da noi, altre non dipendono da noi». Distinguere le due categorie e occuparsi solo della prima è tutta la saggezza stoica.`
          },
          {
            n: 11, romano: "11", titolo: "La filosofia greca a Roma: Cicerone e lo stoicismo romano",
            chiave: "A Roma la filosofia diventa educazione del cittadino. Cicerone la traduce in latino; Seneca, Epitteto e Marco Aurelio ne fanno un esercizio quotidiano di vita.",
            testo: `I Romani accolgono la filosofia greca con diffidenza (nel 161 a.C. i filosofi vengono addirittura espulsi) e poi con entusiasmo. Prevale un uso **pratico ed educativo**: la filosofia deve formare l'uomo pubblico.

**Cicerone** (106–43 a.C.) è l'eclettico per eccellenza: prende dall'Accademia il metodo del dubbio probabilistico, dagli stoici l'etica del dovere. La sua importanza è enorme per due motivi. Primo: **crea il lessico filosofico latino** — traduce *poiótes* con *qualitas*, *kathékon* con *officium*, e conia parole che usiamo ancora (essenza, evidenza, qualità, moralità). Secondo: attraverso di lui l'Occidente medievale e umanistico conoscerà gran parte della filosofia greca.

**Lo stoicismo romano** riduce quasi tutto all'etica:
- **Seneca** (4 a.C.–65 d.C.): nelle *Lettere a Lucilio* e nei dialoghi affronta il tempo («non abbiamo poco tempo, ne perdiamo molto»), la morte come esercizio quotidiano, il rapporto tra saggio e potere, l'uguaglianza degli schiavi. Consigliere di Nerone, dovrà suicidarsi per suo ordine.
- **Epitteto** (50–130 d.C. circa): schiavo liberato, insegna che la libertà è indipendenza interiore. Il *Manuale* si apre con la distinzione tra ciò che dipende da noi (opinioni, desideri, impulsi) e ciò che non dipende (corpo, reputazione, cariche).
- **Marco Aurelio** (121–180 d.C.): imperatore, scrive per sé stesso i *Ricordi* (*A sé stesso*), un diario di esercizi spirituali in cui il potere assoluto convive con il pensiero della propria piccolezza e della morte.

Nell'insieme, lo stoicismo è la filosofia che ha influenzato più a lungo la cultura occidentale nella vita quotidiana: il senso del dovere, l'idea di coscienza morale, la dignità di ogni uomo, l'immagine dell'uomo «stoico» che sopporta senza lamentarsi. Ed è la scuola che il cristianesimo trova più vicina — pur non potendone accettare il panteismo e il determinismo.`
          }
        ]
      },
      {
        titolo: "Capitolo 3 — L'epicureismo",
        sottotitolo: "Il quadrifarmaco: liberarsi dalle paure",
        canti: [
          {
            n: 12, romano: "12", titolo: "Epicuro e il Giardino",
            chiave: "Epicuro fonda ad Atene una comunità di amici, aperta a donne e schiavi. La filosofia è una medicina: se non guarisce le sofferenze dell'anima, non serve a niente.",
            testo: `**Epicuro** nasce a Samo nel 341 a.C. e muore ad Atene nel 270. Nel 306 acquista una casa con giardino alle porte della città e vi fonda la sua scuola, che da quel luogo prende il nome: il **Giardino** (*Kêpos*).

Il Giardino non è un'accademia: è una **comunità di amici** che vivono insieme secondo la dottrina del maestro. Vi sono ammesse **donne** e **schiavi**, cosa scandalosa per l'epoca, e proprio per questo la scuola fu bersaglio di calunnie feroci (si diceva che vi si tenessero orge; in realtà il regime alimentare era frugale al punto che Epicuro si accontentava di pane e acqua e considerava un lusso un po' di formaggio).

Epicuro scrisse moltissimo, ma ci restano solo tre lettere riportate da Diogene Laerzio (a **Erodoto** sulla fisica, a **Pitocle** sui fenomeni celesti, a **Meneceo** sull'etica), le *Massime capitali* e alcuni frammenti. Molto della fisica epicurea lo conosciamo grazie al poema latino di **Lucrezio**, *De rerum natura*.

La frase che riassume il programma è netta: **«Vana è la parola di quel filosofo che non curi nessuna sofferenza dell'uomo»**. La filosofia è **terapia**; le sue parti valgono solo in quanto servono alla felicità. Per questo Epicuro riduce al minimo la logica e usa la fisica come strumento di liberazione.

La ricetta è riassunta nel **quadrifarmaco** (*tetraphármakon*), quattro rimedi contro le quattro paure fondamentali:
- **non bisogna temere gli dei** (non si occupano di noi);
- **non bisogna temere la morte** (quando c'è lei non ci siamo noi);
- **il piacere si può raggiungere** (i bisogni naturali sono facili da soddisfare);
- **il dolore si può sopportare** (se è acuto è breve, se è lungo è lieve).`
          },
          {
            n: 13, romano: "13", titolo: "La canonica: i sensi non sbagliano mai",
            chiave: "Il criterio della verità sono le sensazioni, che sono sempre vere. L'errore nasce dall'opinione che ci aggiungiamo sopra.",
            testo: `Epicuro chiama **canonica** la sua teoria della conoscenza, dal *Canone*, l'opera in cui esponeva i «criteri» del vero. È ridotta all'essenziale, perché serve solo a garantire che la fisica sia attendibile.

I criteri sono tre:
- le **sensazioni** (*aisthéseis*);
- le **anticipazioni** o **prolessi** (*prolépseis*): i concetti generali che si formano nella memoria per accumulo di sensazioni simili, e che ci permettono di riconoscere «un cavallo» quando ne vediamo uno;
- i **sentimenti** di piacere e dolore (*páthe*), criteri per la scelta e il rifiuto, cioè per l'etica.

La tesi più forte e più discussa è che **le sensazioni sono sempre vere**. Come si spiegano allora le illusioni, la torre quadrata che da lontano appare rotonda, il remo che sembra spezzato nell'acqua? La risposta: la sensazione registra fedelmente ciò che le arriva (a quella distanza, arrivano davvero *simulacri* smussati); l'errore sta nel **giudizio** che aggiungiamo, quando affermiamo frettolosamente che la torre *è* rotonda. La verifica si fa avvicinandosi.

La spiegazione fisica della percezione è materialistica: dai corpi si staccano continuamente sottilissime pellicole di atomi, i **simulacri** (*éidola*), che viaggiano e colpiscono i nostri organi di senso. Anche il pensiero e i sogni si spiegano così.

Il risultato è un **empirismo radicale**: ogni ragionamento deve poter essere ricondotto all'evidenza sensibile, e le ipotesi sull'invisibile (gli atomi) valgono se non sono contraddette dai fenomeni. È un criterio metodologico che ricorda da vicino la scienza moderna.`
          },
          {
            n: 14, romano: "14", titolo: "La fisica: atomi, vuoto e clinamen",
            chiave: "Riprende l'atomismo di Democrito ma vi aggiunge la deviazione casuale degli atomi (clinamen): serve a salvare la libertà umana dal determinismo.",
            testo: `Epicuro riprende l'**atomismo** di Democrito: esistono solo **atomi** e **vuoto**; gli atomi sono infiniti, eterni, indivisibili, si muovono nel vuoto e, aggregandosi, formano i corpi e i mondi (che sono infiniti). Nulla nasce dal nulla e nulla si annulla.

Ma introduce due modifiche decisive.

**1. Il peso e il clinamen.** Democrito faceva muovere gli atomi in tutte le direzioni per urto reciproco; Epicuro dice che cadono nel vuoto **verticalmente**, tutti alla stessa velocità (perché il vuoto non oppone resistenza). Ma allora non si incontrerebbero mai, come gocce di pioggia parallele. Serve qualcosa che rompa il parallelismo: la **declinazione**, in latino ***clinamen***. In un tempo e in un luogo **indeterminati**, l'atomo devia minimamente dalla traiettoria. Da lì gli urti, gli aggregati, i mondi.

Il *clinamen* ha una portata teorica enorme: introduce nel cosmo un margine di **indeterminazione**, e quindi spezza il **determinismo assoluto** di Democrito e degli stoici. Epicuro lo dice esplicitamente: meglio credere ai miti sugli dei che essere schiavi del destino dei fisici, «perché il mito lascia almeno la speranza di piegare gli dei con le preghiere, mentre la necessità è inflessibile». Sul piano umano, il *clinamen* fonda la **libertà del volere**.

**2. La corporeità degli dei e dell'anima.** Gli dei esistono, ma sono composti di atomi sottilissimi e vivono negli *intermundia*, gli spazi tra i mondi, in perfetta beatitudine. Proprio perché beati, **non si occupano del mondo**: non lo hanno creato, non lo governano, non puniscono. Non è ateismo, è la negazione della **provvidenza** — ed è ciò che rese Epicuro odioso a stoici e cristiani.

Anche l'**anima** è materiale: un composto di atomi finissimi sparso nel corpo. Alla morte gli atomi si disperdono, la sensibilità cessa e non resta nulla. Da qui il ragionamento che libera dalla paura della morte: **«la morte non è nulla per noi»**, perché quando ci siamo noi lei non c'è, e quando c'è lei non ci siamo noi. Nessun aldilà, nessun inferno, nessun giudizio.`
          },
          {
            n: 15, romano: "15", titolo: "L'etica: il piacere, i bisogni, l'amicizia",
            chiave: "Il piacere è assenza di dolore nel corpo (aponia) e di turbamento nell'anima (atarassia). Non è godimento smodato: è sobrietà e amicizia, lontano dalla politica.",
            testo: `L'etica epicurea è un **edonismo**, ma va capito bene, perché è quasi l'opposto di ciò che oggi si chiama «vita epicurea».

**Il piacere come fine.** Il piacere è il bene, il dolore il male: lo si vede dal comportamento di ogni essere vivente appena nato, che non ha bisogno di dimostrazioni. Ma il piacere vero non è quello **cinetico** (in movimento: il godimento mentre si mangia, si beve), bensì quello **catastematico** (stabile): la condizione di chi non ha dolore nel corpo (**aponia**) né turbamento nell'anima (**atarassia**). Il modello non è il banchetto, è la salute serena.

**La classificazione dei bisogni.** Dalla *Lettera a Meneceo*:
- desideri **naturali e necessari** (mangiare, bere, ripararsi, avere amici, filosofare): pochi, facili da soddisfare, tolgono un dolore;
- desideri **naturali ma non necessari** (cibi raffinati, lusso): variano il piacere, non lo aumentano;
- desideri **né naturali né necessari** (ricchezza, gloria, potere): vani, infiniti, fonte di ansia.

Il **calcolo dei piaceri** è il compito della saggezza (*phrónesis*), che Epicuro dice più preziosa della filosofia stessa: a volte si sceglie un dolore perché produce un piacere maggiore, a volte si rinuncia a un piacere perché produce un dolore maggiore. Ne segue che una vita di piacere è necessariamente una vita **saggia, onesta e giusta**, e viceversa.

**L'amicizia.** È il bene più grande. Nasce dall'utilità, ma diventa un valore in sé: «di tutte le cose che la saggezza procura per la felicità dell'intera vita, la maggiore è l'acquisto dell'amicizia». Il Giardino stesso è un'istituzione dell'amicizia.

**La politica.** Il motto è ***láthe biósas***, «vivi nascosto». La vita politica è fonte di ansia, invidia e competizione: chi cerca la serenità se ne tiene fuori. La giustizia non è un valore assoluto ma un **contratto** di reciproca utilità («non danneggiare e non essere danneggiati»), variabile con i tempi e i luoghi.

È la differenza netta rispetto agli stoici: entrambi cercano l'imperturbabilità, ma lo stoico la trova **partecipando** al dovere e alla vita comune, l'epicureo **sottraendosi**.`
          }
        ]
      },
      {
        titolo: "Capitolo 4 — Lo scetticismo",
        sottotitolo: "Sospendere il giudizio per vivere tranquilli",
        canti: [
          {
            n: 16, romano: "16", titolo: "Caratteri generali: il dubbio come terapia",
            chiave: "Lo scettico non nega la verità: dichiara di non averla trovata e sospende il giudizio. Da questa sospensione, inaspettatamente, nasce la pace dell'anima.",
            testo: `**Scetticismo** viene da *sképsis*, «ricerca, esame». Lo scettico è letteralmente «colui che continua a cercare», in opposizione al **dogmatico** che afferma di avere trovato.

Il ragionamento di fondo è questo: per ogni tesi si può costruire un'argomentazione altrettanto forte a favore della tesi opposta (**isosthéneia**, equivalenza delle ragioni). Poiché non c'è modo di decidere, l'unica mossa razionale è l'***epoché***: la **sospensione del giudizio**.

Il risultato è sorprendente e va sottolineato, perché è il vero motivo per cui lo scetticismo è una filosofia ellenistica come le altre: chi sospende il giudizio smette di affannarsi a difendere opinioni, e ottiene l'**atarassia**. Sesto Empirico lo racconta con l'aneddoto del pittore Apelle: non riuscendo a dipingere la bava del cavallo, gettò per rabbia la spugna sulla tela, e la macchia riprodusse esattamente ciò che cercava. Così la tranquillità: arriva quando si smette di inseguirla.

**Come si vive senza opinioni?** È l'obiezione classica: senza giudizi non si può nemmeno decidere se attraversare la strada. La risposta scettica è che si vive **secondo i fenomeni**: seguendo le apparenze, gli istinti naturali, le leggi e i costumi del proprio paese, l'addestramento nelle arti. Lo scettico non dice «il miele non è dolce»; dice «mi appare dolce», e lo mangia. Ciò che sospende è il giudizio sulla **natura nascosta** delle cose.

Sulla portata dello scetticismo antico gli studiosi discutono ancora. L'**interpretazione tradizionale** vi vede una filosofia negativa e distruttiva, sintomo di decadenza. **Interpretazioni più recenti** (a partire dal Novecento) vi riconoscono invece un rigoroso esercizio critico, antenato del metodo del dubbio di Cartesio e della critica humeana della metafisica, e una difesa della tolleranza contro il fanatismo di chi crede di possedere la verità.`
          },
          {
            n: 17, romano: "17", titolo: "Pirrone, l'Accademia scettica, Sesto Empirico",
            chiave: "Da Pirrone, che non scrisse nulla, agli accademici Arcesilao e Carneade, fino ai tropi di Enesidemo e Agrippa raccolti da Sesto Empirico.",
            testo: `**Pirrone di Elide** (365–275 a.C. circa) è il fondatore. Non scrisse nulla; lo conosciamo dal discepolo **Timone**. Aveva seguito Alessandro in India ed era rimasto colpito dagli asceti indiani. Le sue tre domande fondamentali, secondo la testimonianza di Aristocle:
- come sono le cose per natura? → **indifferenti e indeterminabili**;
- come dobbiamo comportarci verso di esse? → senza opinioni, **sospendendo il giudizio**;
- che cosa ne ricaviamo? → **afasia** (non pronunciarsi) e poi **atarassia**.

**L'Accademia scettica.** Paradossalmente, la scuola di Platone diventa scettica: **Arcesilao** (media Accademia) polemizza con gli stoici negando che esista la rappresentazione catalettica — non c'è impressione vera che non possa essere identica a una falsa. **Carneade** (nuova Accademia) porta la critica al culmine: attacca le prove dell'esistenza degli dei, la provvidenza e l'idea di una giustizia naturale (famosa la sua «doppia orazione» a Roma nel 155 a.C.: un giorno elogiò la giustizia, il giorno dopo la demolì, tanto che Catone chiese che i filosofi greci fossero espulsi). Ma Carneade non è un nichilista: elabora la teoria del **probabile** (*píthanon*), una scala di gradi di credibilità di una rappresentazione, che permette di orientarsi nella pratica. È l'antenato del probabilismo moderno.

**Gli ultimi scettici.** **Enesidemo** (I sec. a.C.) formula i **dieci tropi**, cioè i dieci modi che conducono alla sospensione: la diversità tra le specie animali, tra gli uomini, tra i sensi, le circostanze, le posizioni e distanze, le mescolanze, le quantità, la relatività, la frequenza, i costumi e le leggi. La conclusione comune è sempre la stessa: non conosciamo la cosa in sé, ma **la cosa in relazione a** un osservatore e a una condizione.

**Agrippa** riduce tutto a **cinque tropi** più stringenti, tra cui i famosi tre che colpiscono ogni tentativo di fondazione: il **regresso all'infinito** (ogni prova ha bisogno di un'altra prova), l'**ipotesi** (se ci si ferma a un principio indimostrato, è arbitrario) e il **circolo vizioso** (se si prova A con B e B con A). È il «trilemma» che la filosofia contemporanea ha ribattezzato *trilemma di Münchhausen*.

**Sesto Empirico** (II–III sec. d.C.), medico, è l'unico di cui restino opere intere (*Schizzi pirroniani*, *Contro i matematici*): un'enciclopedia dello scetticismo antico che, riscoperta nel Cinquecento, avrà un'influenza enorme su Montaigne, su Cartesio e sull'intera filosofia moderna.`
          }
        ]
      },
      {
        titolo: "Capitolo 5 — Neoplatonismo",
        sottotitolo: "Il ritorno all'Uno",
        canti: [
          {
            n: 18, romano: "18", titolo: "L'indirizzo religioso e la filosofia greco-giudaica: Filone",
            chiave: "Nei primi secoli la filosofia si fa religiosa: cerca la salvezza, non la spiegazione. Filone di Alessandria è il primo a fondere Bibbia e filosofia greca.",
            testo: `Tra il I secolo a.C. e il III d.C. il clima culturale cambia di nuovo. Le scuole ellenistiche avevano promesso la felicità con le sole forze umane; ora prevale la sensazione che l'uomo **non basti a sé stesso** e abbia bisogno di un aiuto dall'alto. La filosofia si avvicina alla religione: si parla di rivelazione, purificazione, unione mistica con Dio, salvezza dell'anima.

In questo clima si diffondono la **gnosi**, i culti misterici, l'ermetismo, l'astrologia — e si diffonde il **cristianesimo**.

**Filone di Alessandria** (20 a.C.–50 d.C. circa), ebreo di lingua e cultura greca, è il primo grande tentativo di **conciliare una rivelazione con la filosofia**. La sua tesi: la Bibbia e Platone dicono la stessa verità; anzi, i filosofi greci hanno attinto da Mosè. Per mostrarlo usa sistematicamente l'**allegoria**: sotto la lettera del testo sacro si nasconde un senso filosofico.

Le sue idee più influenti:
- **Dio è assolutamente trascendente**, superiore all'essere e ineffabile: di lui si può dire solo *che* è, non *che cosa* è. È l'inizio della **teologia negativa**.
- Tra Dio e il mondo sta il ***lógos***, «figlio di Dio», luogo delle idee e mediatore della creazione. La formula avrà una fortuna immensa nel cristianesimo (il prologo di Giovanni).
- La conoscenza più alta non è ragionamento ma **estasi**: Dio si raggiunge quando l'anima esce da sé.

Filone è la porta attraverso cui il platonismo entra nella tradizione biblica. Senza di lui la patristica sarebbe stata diversa.`
          },
          {
            n: 19, romano: "19", titolo: "Plotino: l'Uno e le ipostasi",
            chiave: "Dall'Uno, che è al di là dell'essere e del pensiero, emana per necessità l'Intelletto, poi l'Anima, poi la materia. Un'unica realtà che si degrada allontanandosi.",
            testo: `**Plotino** (203–270 d.C.), egiziano di formazione alessandrina, insegna a Roma. I suoi scritti furono raccolti dal discepolo **Porfirio** in sei gruppi di nove trattati: le ***Enneadi*** (da *ennéa*, nove).

**L'Uno.** Al vertice c'è l'**Uno** (*tò hén*), che coincide con il **Bene**. Non è «un ente supremo»: è **al di là dell'essere**, al di là della determinazione, al di là del pensiero, perché pensare significa già distinguere soggetto e oggetto, cioè introdurre la molteplicità. Dell'Uno non si può dire nulla in positivo: è la **teologia negativa** portata alle estreme conseguenze. È infinito, semplice, ineffabile.

**L'emanazione.** Come si passa dall'Uno al molteplice? Non per creazione (che richiederebbe volontà e progetto, cioè molteplicità), ma per ***emanazione*** (*próodos*, processione): l'Uno, per sovrabbondanza di perfezione, «trabocca» necessariamente, come la luce dal sole o l'acqua da una sorgente, senza perdere nulla di sé. È il punto in cui Plotino si separa nettamente dalla creazione biblica: nessuna libertà, nessun atto volontario, nessun nulla iniziale.

**Le tre ipostasi.** I gradi della realtà (*ipòstasi*, «sostanze»):
- l'**Uno**;
- l'**Intelletto** (*Noûs*): il primo prodotto, dove sono le idee platoniche; qui c'è già dualità (pensiero che pensa sé stesso) ma è un'eternità immobile;
- l'**Anima** (*Psyché*): il mondo dell'anima universale, che guarda in alto verso l'Intelletto e in basso genera e ordina il mondo sensibile; ne partecipano le anime individuali.

**La materia** è l'ultimo grado, il punto in cui la luce si esaurisce nel buio: non-essere, privazione, e proprio per questo **male**. Attenzione: il male per Plotino non è una forza positiva ma **mancanza di bene**, come l'ombra è mancanza di luce. Questa definizione passerà ad Agostino e diventerà la soluzione cristiana classica del problema del male.

Il mondo è dunque una **gerarchia continua**: ogni grado è meno perfetto del precedente perché più lontano dalla fonte, ma tutto è divino, e nulla è cattivo in sé.`
          },
          {
            n: 20, romano: "20", titolo: "Il «ritorno» e l'estasi. La scuola di Atene e Proclo",
            chiave: "L'anima è caduta nel corpo e ha nostalgia dell'origine: purificandosi risale i gradi fino all'unione mistica con l'Uno. Plotino disse di averla raggiunta quattro volte.",
            testo: `Al movimento di discesa (*próodos*) corrisponde un movimento inverso di **ritorno** (*epistrophé*). L'anima umana, «caduta» nel corpo, conserva la **nostalgia** dell'Uno: l'inquietudine, il desiderio, la ricerca del bello sono i segni di questa memoria.

Il ritorno ha tappe precise, che sono anche gradi di vita morale:
- le **virtù politiche**: dominare le passioni, vivere ordinatamente;
- le **virtù purificatrici** (catartiche): staccarsi progressivamente dal sensibile;
- la **contemplazione filosofica**: risalire dall'anima all'Intelletto, cioè al mondo delle idee;
- l'**estasi** (*ékstasis*, «uscita da sé»): l'unione con l'Uno, che non è più conoscenza — perché non c'è più distinzione tra chi conosce e ciò che è conosciuto — ma **contatto**, semplificazione, «fuga del solo verso il Solo».

Porfirio racconta che Plotino raggiunse questo stato quattro volte in sei anni. L'estasi non è tecnica né merito: è un dono, e non dura.

Va notato il ruolo della **bellezza**: il bello sensibile non è disprezzato (a differenza di certe letture di Platone), è il primo gradino della risalita, perché è la forma che risplende nella materia. Da qui l'enorme influenza del neoplatonismo su tutta l'estetica occidentale, dal Medioevo al Rinascimento fino ai romantici.

**Dopo Plotino.** Porfirio ne diffonde l'opera e scrive l'*Isagoge*, introduzione alle *Categorie* di Aristotele: il libro da cui nascerà, nel Medioevo, la **disputa sugli universali**. **Giamblico** accentua gli aspetti magico-rituali (la *teurgia*). Nella **scuola di Atene**, **Proclo** (V sec.) sistematizza tutto in una struttura triadica rigorosa (permanenza – processione – ritorno) negli *Elementi di teologia*: sarà uno dei modelli lontani della dialettica hegeliana. Nel **529** l'imperatore Giustiniano chiude la scuola di Atene: è la data convenzionale della fine della filosofia antica.

L'eredità del neoplatonismo è immensa: passa in Agostino, nello Pseudo-Dionigi, in Scoto Eriugena, in Cusano, in Ficino, e attraverso di loro in tutta la mistica e in buona parte dell'idealismo moderno.`
          }
        ]
      }
    ],
    personaggi: [
      {
        gruppo: "1. Parole dell'età ellenistica",
        voci: [
          { nome: "Atarassia", alt: ["ataraxía"], desc: "Assenza di turbamento dell'anima. È il fine comune, con nomi diversi, di stoici, epicurei e scettici." },
          { nome: "Autarchia", alt: ["autárkeia"], desc: "Bastare a sé stessi: non dipendere per la propria felicità da beni esterni o da altre persone." },
          { nome: "Cosmopolitismo", alt: [], desc: "L'idea di essere cittadini del mondo e non di una singola città: nasce con i cinici e diventa dottrina con gli stoici." },
          { nome: "Eclettismo", alt: [], desc: "Scegliere le tesi migliori da scuole diverse invece di aderire a un sistema. Tipico dei Romani, e di Cicerone in particolare." },
          { nome: "Museo e Biblioteca", alt: ["Alessandria"], desc: "Le due istituzioni fondate dai Tolomei: centro di ricerca finanziato dallo Stato e raccolta universale di libri. Vi nasce la filologia." }
        ]
      },
      {
        gruppo: "2. Stoicismo",
        voci: [
          { nome: "Lógos", alt: ["pneuma", "fuoco artefice"], desc: "La ragione divina che permea il cosmo e lo ordina. È corporea: uno «soffio» igneo. Dio, natura, destino e provvidenza sono suoi sinonimi." },
          { nome: "Rappresentazione catalettica", alt: ["phantasía kataleptiké"], desc: "L'impressione evidente che «afferra» l'oggetto e costringe all'assenso: il criterio stoico della verità." },
          { nome: "Lektón", alt: ["il detto"], desc: "Il significato, distinto dal suono e dall'oggetto: contenuto incorporeo del discorso. Anticipa la semantica moderna." },
          { nome: "Heimarméne", alt: ["fato", "destino"], desc: "La concatenazione necessaria di tutte le cause. Il cane legato al carro può seguirlo volentieri o essere trascinato: questa è la libertà stoica." },
          { nome: "Apátheia", alt: ["apatia"], desc: "Estirpazione delle passioni, che sono giudizi errati sul valore delle cose. Non insensibilità, ma indipendenza dal caso." },
          { nome: "Indifferenti", alt: ["adiáphora"], desc: "Tutto ciò che non è virtù né vizio: salute, ricchezza, vita. Alcuni sono «preferibili», nessuno tocca la felicità." },
          { nome: "Oikéiosis", alt: ["appropriazione"], desc: "L'istinto naturale a sentire come proprio prima sé stessi, poi la famiglia, poi l'umanità intera: fondamento naturale della socialità." },
          { nome: "Kathékon", alt: ["dovere", "officium"], desc: "L'azione conveniente alla natura razionale. Tradotto da Cicerone con officium, entra in tutta la morale occidentale." }
        ]
      },
      {
        gruppo: "3. Epicureismo",
        voci: [
          { nome: "Quadrifarmaco", alt: ["tetraphármakon"], desc: "I quattro rimedi: gli dei non sono da temere, la morte non è nulla, il bene è facile da procurare, il male facile da sopportare." },
          { nome: "Canonica", alt: [], desc: "La teoria epicurea della conoscenza: criteri del vero sono sensazioni, prolessi e sentimenti di piacere e dolore." },
          { nome: "Prolessi", alt: ["anticipazione"], desc: "Il concetto generale formato dalla memoria di sensazioni ripetute, che ci consente di riconoscere le cose." },
          { nome: "Simulacri", alt: ["éidola"], desc: "Sottili pellicole di atomi che si staccano dai corpi e colpiscono i sensi: la spiegazione materialistica della percezione." },
          { nome: "Clinamen", alt: ["declinazione", "parénklisis"], desc: "La deviazione minima e indeterminata dell'atomo dalla caduta verticale. Rompe il determinismo e fonda la libertà umana." },
          { nome: "Aponia / Atarassia", alt: [], desc: "Assenza di dolore nel corpo e di turbamento nell'anima: il piacere «catastematico» o stabile, vero fine epicureo." },
          { nome: "Piacere cinetico / catastematico", alt: [], desc: "Il primo è in movimento (godere mentre si beve), il secondo è di quiete (non aver sete). Solo il secondo è il vero bene." },
          { nome: "Láthe biósas", alt: ["vivi nascosto"], desc: "Il consiglio epicureo di stare fuori dalla politica, fonte di ansia e competizione. Opposto della scelta stoica." },
          { nome: "Lucrezio", alt: ["De rerum natura"], desc: "Poeta latino del I sec. a.C.: il suo poema espone in versi la fisica epicurea ed è la nostra fonte più ampia su di essa." }
        ]
      },
      {
        gruppo: "4. Scetticismo e neoplatonismo",
        voci: [
          { nome: "Epoché", alt: ["sospensione del giudizio"], desc: "Il gesto centrale dello scettico: non affermare né negare, poiché le ragioni contrarie si equivalgono." },
          { nome: "Isosthéneia", alt: ["equipollenza"], desc: "L'uguale forza delle argomentazioni opposte, che rende impossibile decidere." },
          { nome: "Tropi", alt: ["Enesidemo", "Agrippa"], desc: "I «modi» che conducono alla sospensione: dieci in Enesidemo (tutti fondati sulla relatività), cinque in Agrippa, tra cui regresso all'infinito, ipotesi e circolo vizioso." },
          { nome: "Probabile", alt: ["píthanon"], desc: "La risposta di Carneade all'obiezione pratica: senza certezza si può comunque graduare la credibilità e agire." },
          { nome: "Sesto Empirico", alt: [], desc: "Medico del II–III sec. d.C., unico scettico di cui restino opere complete. Riscoperto nel Cinquecento, influenzerà Montaigne e Cartesio." },
          { nome: "Uno", alt: ["tò hén"], desc: "Principio primo di Plotino, coincidente con il Bene, al di là dell'essere e del pensiero, indicibile. Non crea: emana." },
          { nome: "Emanazione", alt: ["próodos"], desc: "Il traboccare necessario dell'Uno, come luce dal sole. Si oppone alla creazione libera dal nulla della Bibbia." },
          { nome: "Ipostasi", alt: [], desc: "I tre gradi della realtà in Plotino: Uno, Intelletto (sede delle idee), Anima. Sotto di essi la materia." },
          { nome: "Materia come male", alt: [], desc: "L'ultimo grado dell'emanazione, dove la luce si esaurisce: non forza positiva ma privazione di bene. Definizione ripresa da Agostino." },
          { nome: "Estasi", alt: ["ékstasis"], desc: "«Uscita da sé»: l'unione con l'Uno, oltre la conoscenza. Plotino l'avrebbe raggiunta quattro volte." },
          { nome: "Porfirio", alt: ["Isagoge"], desc: "Discepolo di Plotino, curatore delle Enneadi. La sua introduzione alle Categorie apre nel Medioevo la disputa sugli universali." },
          { nome: "Proclo", alt: ["scuola di Atene"], desc: "Sistematizza il neoplatonismo in triadi (permanenza, processione, ritorno). Nel 529 Giustiniano chiude la sua scuola: fine convenzionale della filosofia antica." }
        ]
      }
    ]
  }

  ,

  /* ------------------------------------------------ UNITÀ 6 */
  "patristica-agostino": {
    id: "patristica-agostino",
    titolo: "La patristica e Agostino",
    autore: "Unità 6 · L'età tardo-antica",
    sottotitolo: "Il cristianesimo incontra la filosofia greca",
    epoca: "I – V secolo d.C.",
    lingua: "Da Paolo a Boezio",
    tag: ["Fede e ragione", "Agostino", "Tempo", "Male", "Grazia"],
    epigrafe: "Non uscire fuori, rientra in te stesso: nell'uomo interiore abita la verità.",
    colore: "blu",
    parti: [
      {
        titolo: "Capitolo 1 — La nascita della filosofia cristiana",
        sottotitolo: "Dal messaggio evangelico alla patristica",
        canti: [
          {
            n: 1, romano: "1", titolo: "Cristianesimo e filosofia: un incontro difficile",
            chiave: "Il cristianesimo non nasce come filosofia ma come annuncio di salvezza. Il problema è che per farsi capire nel mondo greco deve usare parole e concetti greci.",
            testo: `Il cristianesimo non è, in origine, una filosofia. È un **annuncio** (*kérygma*): Dio si è fatto uomo, è morto ed è risorto, e chi crede è salvato. Non chiede di dimostrare, chiede di **credere**; non si rivolge ai sapienti ma a tutti; non promette conoscenza ma salvezza.

Eppure, appena esce dalla Palestina, si trova a parlare a un mondo che ragiona in greco e che a ogni affermazione chiede: *perché*? Nasce così un problema che percorrerà tutto il Medioevo e non è ancora esaurito: **che rapporto c'è tra fede e ragione**?

Le risposte possibili sono già tutte presenti nei primi secoli:
- **Rifiuto radicale.** «Che cosa hanno in comune Atene e Gerusalemme?» chiede **Tertulliano**: la filosofia è la madre delle eresie, e la fede vale proprio perché è scandalosa per la ragione («credo perché è assurdo», gli attribuisce la tradizione).
- **Accoglienza.** **Giustino** afferma che il *lógos* divino ha «seminato» frammenti di verità anche fuori dalla rivelazione: Socrate e Platone furono «cristiani prima di Cristo». La filosofia greca è una preparazione al Vangelo.
- **Uso strumentale.** La filosofia è utile per difendere la fede (**apologetica**), per formulare i dogmi con precisione, per confutare le eresie.

Storicamente vince la seconda e la terza via, e il risultato è un fatto di enorme portata: il cristianesimo si esprime attraverso categorie **platoniche** (anima immortale, mondo intelligibile, Dio-Bene, male come privazione) e, molto più tardi, **aristoteliche** (con Tommaso). Ma non senza modificarle profondamente.`
          },
          {
            n: 2, romano: "2", titolo: "La novità del messaggio cristiano rispetto ai Greci",
            chiave: "Creazione dal nulla, Dio persona che ama, storia con un inizio e una fine, uomo immagine di Dio, resurrezione della carne: cinque idee che i Greci non avevano.",
            testo: `Per capire il Medioevo bisogna avere chiaro che cosa il cristianesimo porta **di nuovo** rispetto alla filosofia greca. Sono almeno cinque idee, e ognuna sposta un pilastro.

- **Creazione dal nulla** (*creatio ex nihilo*). Per i Greci «nulla nasce dal nulla»: la materia è eterna e il demiurgo del *Timeo* la ordina, non la produce. Per la Bibbia Dio crea liberamente, e prima non c'era nulla. Ne segue che il mondo è **contingente**: poteva non esserci.
- **Dio persona.** Il Dio di Aristotele è pensiero di pensiero, non conosce il mondo e non lo ama; l'Uno di Plotino emana per necessità. Il Dio biblico **conosce, vuole, ama, interviene**, chiama per nome. Non emana: crea. Non è necessità: è libertà.
- **Il tempo e la storia.** I Greci pensano il tempo come circolare (l'eterno ritorno stoico); la Bibbia lo pensa **lineare**: c'è una creazione, un'incarnazione avvenuta una volta sola, un giudizio finale. La storia acquista un senso e una direzione. Nasce l'idea stessa di filosofia della storia.
- **L'uomo immagine di Dio.** Ogni uomo, indipendentemente da intelligenza, ruolo, condizione sociale, ha un valore infinito. Non è la ragione a fondare la dignità, ma la relazione con Dio. Da qui l'idea moderna di **persona**.
- **La resurrezione della carne.** Per i Greci il corpo è tomba dell'anima e la salvezza è liberazione da esso; per i cristiani il corpo è creato buono e sarà risorto. È il punto su cui Paolo, all'Areopago di Atene, viene deriso.

A queste si aggiungono le tre grandi difficoltà teoriche che impegneranno secoli di pensiero: la **Trinità** (uno e trino), l'**incarnazione** (vero Dio e vero uomo), il rapporto tra **grazia e libertà**.`
          },
          {
            n: 3, romano: "3", titolo: "La patristica: apologisti, gnostici, Padri greci e latini",
            chiave: "«Patristica» è il pensiero dei Padri della Chiesa, dal II al VII secolo: si difende la fede, si combattono le eresie e si costruiscono i dogmi con strumenti filosofici.",
            testo: `Si chiama **patristica** (da *pater*, padre) il pensiero cristiano dei primi secoli, dei «Padri della Chiesa». Si divide di solito in tre fasi: fino al Concilio di Nicea (325) la fase di **difesa**; dal IV al V secolo la fase di **elaborazione sistematica** (l'età d'oro, quella di Agostino); poi la fase di **sistemazione e trasmissione** al Medioevo.

**Gli apologisti** (II sec.) difendono i cristiani dalle accuse (ateismo, immoralità, sedizione) e dalle obiezioni dei filosofi. **Giustino** è il più aperto: la ragione umana partecipa al *lógos* divino, dunque ogni verità, ovunque si trovi, è cristiana. **Taziano** e **Tertulliano** sono ostili: quest'ultimo, giurista di Cartagine, scrive che la filosofia è all'origine delle eresie.

**Lo gnosticismo** è la grande eresia del II secolo, e proprio combattendola la Chiesa definisce sé stessa. La *gnosi* è una «conoscenza» segreta riservata a pochi eletti (*pneumatici*), che salva. I suoi tratti tipici: **dualismo** radicale tra spirito (buono) e materia (cattiva); il mondo non è creato dal Dio vero ma da un demiurgo inferiore, spesso identificato col Dio dell'Antico Testamento; il Cristo non ha avuto un corpo vero (docetismo). La replica cristiana — di **Ireneo**, **Tertulliano**, poi Agostino contro i manichei — fissa punti decisivi: il mondo e la materia sono **buoni** perché creati da Dio; la salvezza è per **tutti**, non per pochi iniziati; il male non è una sostanza.

**I Padri greci.** **Clemente Alessandrino** e soprattutto **Origene** (185–253) costruiscono la prima grande teologia speculativa, con largo uso di Platone e dell'allegoria (tre sensi della Scrittura: letterale, morale, spirituale). Alcune sue tesi — la preesistenza delle anime, l'*apocatastasi*, cioè la salvezza finale di tutti — saranno condannate. Più tardi i **Cappadoci** (Basilio, Gregorio di Nissa, Gregorio Nazianzeno) fissano il lessico trinitario.

**I Padri latini** sono più giuridici e pratici: Tertulliano, **Ambrogio**, **Girolamo** (traduttore della *Vulgata*) e, sopra tutti, **Agostino**.`
          }
        ]
      },
      {
        titolo: "Capitolo 2 — Agostino",
        sottotitolo: "L'uomo interiore, il tempo, il male, la grazia",
        canti: [
          {
            n: 4, romano: "4", titolo: "L'uomo, il pensatore, il cristiano",
            chiave: "La biografia è parte della filosofia: la ricerca di Agostino è la storia di una conversione, e le Confessioni sono il primo libro in cui un uomo racconta la propria interiorità.",
            testo: `**Aurelio Agostino** nasce a Tagaste (Numidia, l'odierna Algeria) nel **354** e muore vescovo di Ippona nel **430**, mentre i Vandali assediano la città. È forse il pensatore che ha influenzato più a lungo la cultura occidentale, non solo religiosa.

Il suo percorso, raccontato nelle ***Confessioni***, è una successione di tappe che sono anche posizioni filosofiche:
- la **retorica**: la formazione classica, il mestiere di professore di eloquenza a Cartagine, Roma, Milano;
- la lettura dell'*Ortensio* di Cicerone, che a 19 anni gli accende l'amore per la sapienza;
- il **manicheismo**, seguito per nove anni: una religione dualistica che spiegava il male come principio positivo opposto al bene. Lo abbandona quando si accorge che non regge alle obiezioni;
- lo **scetticismo** accademico, un periodo di sospensione;
- il **neoplatonismo**, decisivo: leggendo Plotino capisce che si può pensare una realtà **incorporea** — fino ad allora non riusciva a immaginare Dio se non come una sostanza estesa — e che il male non è una cosa ma una privazione;
- la **conversione** (386), narrata nella scena del giardino di Milano: la voce di un bambino, «*tolle, lege*», prendi e leggi, e il passo di Paolo aperto a caso.

Da qui il tratto costante del suo pensiero: la verità non si cerca fuori ma **dentro**. «Non uscire fuori, rientra in te stesso: nell'uomo interiore abita la verità». È l'atto di nascita dell'**interiorità** come categoria filosofica: prima di Agostino nessuno aveva scritto un'autobiografia dell'anima.

Le opere principali: le *Confessioni*, il *De Trinitate*, *La città di Dio*, il *De libero arbitrio*, il *De magistro*, il *De doctrina christiana*.`
          },
          {
            n: 5, romano: "5", titolo: "Ragione e fede: credere per capire, capire per credere",
            chiave: "Non sono alternative ma un circolo: la fede indirizza la ragione, la ragione approfondisce la fede. «Credi per comprendere, comprendi per credere».",
            testo: `Agostino rifiuta sia il fideismo di chi disprezza la ragione sia il razionalismo di chi pretende di fare a meno della rivelazione. Il suo rapporto tra fede e ragione è **circolare** e si riassume in due formule:

- ***Crede ut intelligas*** — credi per comprendere: la fede è il punto di partenza, perché apre alla ragione contenuti che da sola non raggiungerebbe. Anche nella vita ordinaria crediamo prima di verificare (crediamo ai nostri genitori, alla testimonianza altrui): senza fiducia non si costruisce alcun sapere.
- ***Intellige ut credas*** — comprendi per credere: la ragione deve poi approfondire ciò che si crede, perché una fede che rinuncia a capire non è degna dell'uomo. «Se non puoi comprendere, credi per poter comprendere: la fede precede, l'intelletto segue».

La fede quindi **precede** cronologicamente ma non annulla la ragione; anzi la stimola all'infinito, perché il suo oggetto è inesauribile. La ricerca non finisce mai: si comprende sempre di più senza mai comprendere del tutto.

Da questa impostazione nasce anche la **teoria dell'illuminazione**, che è la sua gnoseologia. Come facciamo a conoscere verità **necessarie, eterne e uguali per tutti** (le verità matematiche, i principi morali) se la nostra mente è mutevole e imperfetta? Non possono venire dai sensi, che danno solo il particolare e il mutevole; non possono essere prodotte da noi, che siamo mutevoli. Vengono da **Dio, che illumina la mente** come il sole illumina gli occhi. Le idee stanno nella mente divina, e Dio le rende visibili al nostro intelletto.

È la traduzione cristiana della reminiscenza platonica: al posto della vita precedente dell'anima c'è la presenza di Dio nell'interiorità. Il **maestro interiore** è Cristo: nel *De magistro* Agostino sostiene che nessun uomo insegna davvero a un altro; le parole sono solo segni che ci invitano a consultare la verità che è già dentro di noi.`
          },
          {
            n: 6, romano: "6", titolo: "Dal dubbio alla verità: «si fallor, sum»",
            chiave: "Contro gli scettici: anche se dubito di tutto, non posso dubitare di esistere mentre dubito. Mille anni prima di Cartesio.",
            testo: `Agostino aveva attraversato lo scetticismo e ne conosce la forza. Nel *Contra Academicos* e nel *De Trinitate* costruisce la confutazione classica.

L'argomento decisivo è questo: lo scettico dice che ogni certezza può essere illusoria. Ma **il dubbio stesso è un fatto certo**. Se mi inganno, allora esisto, perché chi non esiste non può ingannarsi: ***si fallor, sum*** — «se mi inganno, sono». La somiglianza con il *cogito ergo sum* di Cartesio è impressionante, e Cartesio dovrà rispondere a chi glielo faceva notare; la differenza è che per Agostino questa certezza non è il fondamento di un sistema scientifico, ma il **primo gradino** della risalita verso Dio.

Sono certi, dice, anche i **principi logici** (non posso dubitare che una cosa non possa essere e non essere insieme), le **verità matematiche** (3+7=10 vale sempre), e il fatto che **mi appare** così come mi appare (posso sbagliare a dire che il remo è spezzato, non che *mi appare* spezzato).

Il passo successivo è il vero argomento agostiniano: se dentro di me trovo verità **immutabili, eterne e necessarie**, e io sono mutevole e contingente, esse non possono venire da me. C'è dunque qualcosa **al di sopra della mia mente**: Dio. Ecco perché la struttura del suo pensiero va sempre dall'esterno all'interno e dall'interno all'alto: *ab exterioribus ad interiora, ab interioribus ad superiora*.

Dio è dunque insieme **Essere** (l'*ipsum esse* dell'Esodo: «Io sono colui che sono»), **Verità** (fondamento delle verità eterne) e **Amore** (perché si è dato liberamente). Non è una definizione fredda: per Agostino conoscere Dio e amarlo sono lo stesso atto.`
          },
          {
            n: 7, romano: "7", titolo: "La creazione e il tempo",
            chiave: "Dio non ha creato «nel» tempo: ha creato il tempo insieme al mondo. E il tempo non è nelle cose, è nell'anima, come distensione della memoria, dell'attenzione e dell'attesa.",
            testo: `Il libro XI delle *Confessioni* contiene la pagina più celebre e più moderna di Agostino.

**Il problema.** Gli avversari chiedevano: che cosa faceva Dio prima di creare il mondo? La risposta ironica («preparava l'inferno per chi fa domande simili») viene subito accantonata per quella seria: la domanda **non ha senso**, perché non c'era un «prima». Dio non ha creato il mondo *nel* tempo: ha creato **il tempo insieme al mondo**. Dio è eterno, e l'eternità non è un tempo lunghissimo: è **assenza di successione**, un presente totale in cui nulla passa.

Nella creazione Agostino introduce anche le **ragioni seminali** (*rationes seminales*): Dio ha creato all'inizio i germi di tutte le cose, che poi si sviluppano nel tempo. È un modo di conciliare la creazione istantanea con lo sviluppo progressivo del mondo.

**Che cos'è il tempo?** Qui la frase famosa: «Se nessuno me lo chiede, lo so; se voglio spiegarlo a chi me lo chiede, non lo so più». Il paradosso: il **passato** non è più, il **futuro** non è ancora, il **presente** — se fosse esteso — sarebbe divisibile in una parte passata e una futura; quindi il presente è un istante senza durata. Come può il tempo «essere», se le sue tre parti o non sono o non durano?

**La soluzione: il tempo è nell'anima.** Esistono tre presenti: il *presente del passato* (**memoria**), il *presente del presente* (**attenzione**), il *presente del futuro* (**attesa**). Il tempo è ***distentio animi***, distensione dell'anima. Misuriamo il tempo misurando le impressioni che le cose lasciano in noi: come quando recitiamo un verso, e ciò che era attesa diventa attenzione e poi memoria.

È una svolta radicale: il tempo passa dall'essere una proprietà del **cosmo** (come in Aristotele, «numero del movimento») a essere una struttura della **coscienza**. Da qui parte una linea che arriva a Kant, a Bergson, a Husserl e a Heidegger.`
          },
          {
            n: 8, romano: "8", titolo: "Il problema del male",
            chiave: "Se Dio è buono e onnipotente, da dove viene il male? Risposta: il male non è una cosa, è mancanza di bene. E il male morale nasce dalla libertà, non da Dio.",
            testo: `È il problema che ha tormentato Agostino per tutta la vita, e che aveva motivato la sua adesione al manicheismo. La sua soluzione è diventata la risposta classica della tradizione cristiana.

**La non-sostanzialità del male.** Il male **non è una cosa**. Se lo fosse, dovrebbe essere stata creata da Dio, e Dio sarebbe autore del male. Il male è **privazione di bene** (*privatio boni*): come la malattia è mancanza di salute e la cecità mancanza di vista, non entità positive. L'idea viene da Plotino, ma Agostino la usa contro i manichei per negare che esista un principio malvagio eterno accanto a Dio. Tutto ciò che è, in quanto è, è buono.

**I tre tipi di male.**
- Il **male metafisico**: la semplice finitezza e imperfezione delle creature, che non possono essere perfette come Dio. Non è un vero male: è la condizione del creato, e contribuisce alla bellezza dell'insieme come le ombre in un quadro.
- Il **male fisico**: dolore, malattia, morte. Conseguenza della corruzione della natura dopo il peccato originale, e in parte apparente (giudichiamo dalla nostra prospettiva parziale).
- Il **male morale**, il vero problema: il peccato. Nasce dalla **volontà libera** dell'uomo, che si allontana dal bene sommo per attaccarsi a beni inferiori. È *aversio a Deo, conversio ad creaturas*. Dio non lo causa, lo **permette**, perché ha voluto creature libere: una libertà che non potesse sbagliare non sarebbe libertà.

Resta la domanda più dura: perché Dio, che prevede il male, crea ugualmente? Agostino risponde con l'argomento estetico-provvidenziale: dal male Dio trae un bene maggiore, e l'insieme della storia è più bello con il male redento che senza il male. Non tutti lo trovano convincente — è la questione della **teodicea** che riemergerà in Leibniz, in Bayle, in Voltaire dopo il terremoto di Lisbona e in Dostoevskij.`
          },
          {
            n: 9, romano: "9", titolo: "Libertà, grazia e predestinazione",
            chiave: "L'uomo è libero, ma dopo il peccato originale la sua volontà è ferita: da solo non riesce a fare il bene. Serve la grazia, che Dio dona gratuitamente a chi vuole.",
            testo: `La riflessione di Agostino sulla libertà si radicalizza con l'età e con la **polemica contro Pelagio**.

**Pelagio**, monaco britannico, sosteneva una posizione ottimistica e razionale: l'uomo nasce senza colpa, il peccato di Adamo è solo un cattivo esempio, la volontà umana è integra e può scegliere il bene con le proprie forze; la grazia aiuta ma non è necessaria. Conseguenza: la salvezza è **merito** dell'uomo.

Agostino replica con forza. Dopo il **peccato originale** la natura umana è ferita: la volontà resta libera (*liberum arbitrium*, la capacità di scegliere) ma ha perso la **libertà** vera (*libertas*, la capacità di scegliere effettivamente il bene). L'uomo, da solo, «può peccare e non può non peccare». Serve la **grazia**, dono gratuito e non dovuto (*gratia*, da *gratis*).

Il punto delicato è come la grazia agisca senza distruggere la libertà. Agostino risponde che la grazia non forza: **rende capace di volere il bene**, agisce dall'interno guarendo la volontà, così che l'uomo faccia liberamente ciò che senza grazia non riuscirebbe a fare.

Ne segue la dottrina più discussa: la **predestinazione**. Dio, che è eterno e conosce tutto in un unico presente, sa da sempre chi si salverà; e poiché la grazia è gratuita, la dà a chi vuole. Agostino parla di un *massa damnata* da cui alcuni sono tratti in salvo per pura misericordia. Insiste che questo non elimina la responsabilità (chi si danna lo fa per colpa propria), ma la tensione resta: sarà il punto su cui si spaccheranno **Lutero e Calvino** contro il cattolicesimo, e su cui tornerà **Pascal** con il giansenismo.

Le quattro condizioni della volontà, nel suo schema: *posse non peccare* (Adamo prima del peccato), *non posse non peccare* (l'uomo dopo), *posse non peccare* con la grazia (l'uomo redento), *non posse peccare* (i beati).`
          },
          {
            n: 10, romano: "10", titolo: "La città di Dio: due amori, due città",
            chiave: "Scritto dopo il sacco di Roma del 410. La storia è il conflitto tra la città terrena, fondata sull'amore di sé, e la città di Dio, fondata sull'amore di Dio.",
            testo: `Nel **410** Alarico saccheggia Roma. È un trauma per tutto il mondo antico, e i pagani accusano: è successo da quando abbiamo abbandonato gli dei per il cristianesimo. **La città di Dio** (*De civitate Dei*, 413–426) nasce come risposta a quell'accusa e diventa la prima grande **filosofia della storia** dell'Occidente.

**Le due città.** Non sono due istituzioni (non coincidono con Chiesa e Impero) ma due **orientamenti dell'amore**, mescolati in questo mondo e che solo alla fine saranno separati:
- la **città terrena** (*civitas terrena*), fondata sull'«amore di sé fino al disprezzo di Dio»;
- la **città di Dio** (*civitas Dei*), fondata sull'«amore di Dio fino al disprezzo di sé».

La storia umana è il loro intreccio: dalla fondazione (Caino e Abele) fino al giudizio finale. Questo significa che la storia **ha un senso, un inizio e una fine**, ed è guidata dalla provvidenza. È un modello che, secolarizzato, riapparirà nelle filosofie della storia moderne — in Vico, in Hegel, perfino in Marx (la storia come conflitto che sfocia in una società finale riconciliata).

**Lo Stato e la giustizia.** Agostino non condanna lo Stato in quanto tale, ma è severo: «tolta la giustizia, che cosa sono i regni se non grandi bande di ladri?». Riporta l'aneddoto del pirata che, catturato da Alessandro Magno, gli risponde: «Poiché io faccio questo con una piccola nave sono chiamato brigante; tu, che lo fai con una grande flotta, sei chiamato imperatore». Lo Stato serve a garantire la pace terrena, che è un bene reale ma provvisorio.

**Altre eredità.** Nel *De doctrina christiana* Agostino elabora una **teoria del linguaggio** come sistema di **segni** (*signum* e *res*), che è considerata l'atto di nascita della semiotica; nella pedagogia insiste sull'amore come motore dell'apprendimento («si insegna bene solo ciò che si ama»).

**Boezio** (480–525), l'ultimo dei Romani e il primo degli scolastici, chiude l'età patristica: traduce e commenta la logica aristotelica, trasmette al Medioevo il lessico filosofico (persona, natura, sostanza, eternità), e in carcere, prima di essere giustiziato, scrive la *Consolazione della filosofia*, dove affronta il rapporto tra prescienza divina e libertà umana con l'idea che Dio non «pre-vede» ma vede tutto in un eterno presente.`
          }
        ]
      }
    ],
    personaggi: [
      {
        gruppo: "1. Cristianesimo e filosofia",
        voci: [
          { nome: "Kérygma", alt: ["annuncio"], desc: "Il nucleo della predicazione cristiana: non una dottrina da dimostrare ma un evento da accogliere nella fede." },
          { nome: "Creatio ex nihilo", alt: ["creazione dal nulla"], desc: "Dio produce il mondo liberamente e dal nulla. Rompe con il principio greco «dal nulla nulla si genera» e rende il mondo contingente." },
          { nome: "Patristica", alt: [], desc: "Il pensiero dei Padri della Chiesa (II–VII sec.): difesa della fede, lotta alle eresie, elaborazione dei dogmi con strumenti filosofici." },
          { nome: "Apologetica", alt: ["Giustino", "Tertulliano"], desc: "La difesa razionale del cristianesimo. Giustino la apre alla filosofia («i semi del lógos»), Tertulliano la chiude («che c'entra Atene con Gerusalemme?»)." },
          { nome: "Gnosticismo", alt: ["gnosi"], desc: "Eresia del II sec.: conoscenza segreta che salva pochi eletti, dualismo spirito/materia, mondo creato da un demiurgo cattivo. Combattendola la Chiesa afferma la bontà del creato." },
          { nome: "Origene", alt: ["allegoria"], desc: "Primo grande teologo speculativo. Tre sensi della Scrittura; alcune tesi (preesistenza delle anime, apocatastasi) furono condannate." },
          { nome: "Boezio", alt: ["Consolatio philosophiae"], desc: "Ultimo dei Romani: trasmette al Medioevo la logica aristotelica e il lessico filosofico latino. Affronta prescienza divina e libertà." }
        ]
      },
      {
        gruppo: "2. Agostino: i concetti chiave",
        voci: [
          { nome: "Interiorità", alt: ["uomo interiore"], desc: "«Non uscire fuori, rientra in te stesso: nell'uomo interiore abita la verità». Nasce con Agostino l'analisi filosofica della coscienza." },
          { nome: "Crede ut intelligas", alt: ["intellige ut credas"], desc: "Il circolo di fede e ragione: la fede apre alla comprensione, la comprensione approfondisce la fede." },
          { nome: "Illuminazione", alt: [], desc: "Dio illumina la mente e le rende visibili le verità eterne, come il sole rende visibili i colori. È la versione cristiana della reminiscenza platonica." },
          { nome: "Si fallor, sum", alt: [], desc: "«Se mi inganno, esisto»: la certezza indubitabile che confuta lo scetticismo. Anticipa il cogito di Cartesio, ma serve a risalire a Dio." },
          { nome: "Maestro interiore", alt: ["De magistro"], desc: "Nessun uomo insegna davvero a un altro: le parole sono segni che invitano a consultare la verità presente dentro di noi." },
          { nome: "Distentio animi", alt: ["tempo"], desc: "Il tempo come distensione dell'anima: memoria (presente del passato), attenzione (del presente), attesa (del futuro)." },
          { nome: "Eternità", alt: [], desc: "Non tempo infinito ma assenza di successione: un presente totale. Dio ha creato il tempo insieme al mondo, non «nel» tempo." },
          { nome: "Rationes seminales", alt: ["ragioni seminali"], desc: "I germi di tutte le cose posti da Dio nella creazione iniziale, che si sviluppano poi nel tempo." },
          { nome: "Privatio boni", alt: ["male come privazione"], desc: "Il male non è sostanza ma mancanza di bene, come la cecità è mancanza di vista. Esclude un principio malvagio eterno." },
          { nome: "Liberum arbitrium / libertas", alt: [], desc: "La capacità di scegliere resta dopo il peccato; la capacità di scegliere effettivamente il bene si perde e va restituita dalla grazia." },
          { nome: "Grazia", alt: ["Pelagio", "predestinazione"], desc: "Dono gratuito che guarisce la volontà. Contro Pelagio, che riteneva l'uomo capace di salvarsi da sé. Da qui la dottrina della predestinazione." },
          { nome: "Due città", alt: ["civitas Dei", "civitas terrena"], desc: "Due amori: amore di sé fino al disprezzo di Dio, amore di Dio fino al disprezzo di sé. La storia è il loro intreccio fino al giudizio." },
          { nome: "Signum e res", alt: ["teoria dei segni"], desc: "Nel De doctrina christiana: le parole sono segni che rimandano a cose. Considerata l'origine della semiotica occidentale." }
        ]
      }
    ]
  }

  ,

  /* ------------------------------------------------ UNITÀ 7 */
  "scolastica-tommaso": {
    id: "scolastica-tommaso",
    titolo: "La scolastica e Tommaso",
    autore: "Unità 7 · L'età medievale",
    sottotitolo: "Fede e ragione, gli universali, le cinque vie",
    epoca: "IX – XIV secolo",
    lingua: "Dalle scuole carolinge a Ockham",
    tag: ["Fede e ragione", "Universali", "Anselmo", "Tommaso", "Ockham"],
    epigrafe: "La grazia non abolisce la natura, ma la porta a compimento.",
    colore: "oro",
    parti: [
      {
        titolo: "Capitolo 1 — La scolastica e il rapporto fede-ragione",
        sottotitolo: "Dalle origini ad Anselmo e alla disputa sugli universali",
        canti: [
          {
            n: 1, romano: "1", titolo: "Che cos'è la scolastica",
            chiave: "«Scolastica» è la filosofia insegnata nelle scuole medievali: un metodo prima che una dottrina, fondato sul commento dei testi e sulla disputa regolata.",
            testo: `Il termine **scolastica** deriva da *schola*: indica la filosofia che si insegna nelle scuole del Medioevo — prima monastiche e cattedrali, poi, dal XIII secolo, nelle **università** (Bologna, Parigi, Oxford).

Non è una dottrina unica: è un **metodo di lavoro**, riconoscibile e rigoroso.
- Si parte da un **testo autorevole** (la Scrittura, i Padri, poi Aristotele) che viene letto e commentato: la *lectio*.
- Dal testo emergono **questioni** (*quaestiones*): «se sia vero che…».
- Ogni questione viene discussa nella ***disputatio***, secondo uno schema fisso: si espongono le obiezioni (*videtur quod non*), poi l'autorità contraria (*sed contra*), poi la soluzione dell'autore (*respondeo dicendum*), infine la risposta a ciascuna obiezione. La *Summa theologiae* di Tommaso è interamente costruita così.

Il problema di fondo, che attraversa tutti i secoli scolastici, è il **rapporto tra fede e ragione**, cioè fra la verità rivelata e la verità raggiungibile con l'intelletto naturale. Le posizioni possibili sono quattro e si ripresentano di continuo:
- **la ragione al servizio della fede** (*philosophia ancilla theologiae*): la ragione chiarisce e difende ciò che la fede afferma;
- **fede e ragione concordi ma distinte**: hanno lo stesso oggetto ultimo (Dio) ma metodi e ambiti diversi, e non possono contraddirsi (è la soluzione di Tommaso);
- **la doppia verità**: qualcosa può essere vero in filosofia e falso in teologia (attribuita agli averroisti latini, e da loro respinta);
- **la separazione totale**: la fede non si dimostra, la ragione non arriva a Dio (Ockham). È il punto in cui la scolastica si dissolve.

La **periodizzazione** usuale: **alta scolastica** o formazione (IX–XII sec.), **fioritura** (XIII sec., il secolo di Tommaso e Bonaventura), **crisi e dissoluzione** (XIV sec., Duns Scoto e Ockham).`
          },
          {
            n: 2, romano: "2", titolo: "Le origini: la rinascita carolingia e Scoto Eriugena",
            chiave: "Carlo Magno riorganizza le scuole; Scoto Eriugena costruisce il primo grande sistema medievale, neoplatonico e audace fino al panteismo.",
            testo: `Dopo la caduta dell'Impero romano d'Occidente la cultura sopravvive quasi solo nei **monasteri**, dove si copiano i manoscritti. Il sapere si organizza nelle **sette arti liberali**: il *trivio* (grammatica, retorica, dialettica) e il *quadrivio* (aritmetica, geometria, astronomia, musica).

La **rinascita carolingia** (fine VIII–IX sec.) è il primo risveglio: Carlo Magno chiama a corte **Alcuino di York** e impone la creazione di scuole presso monasteri e cattedrali. Si riscopre l'importanza della **dialettica**, cioè della logica, come strumento per ordinare il pensiero.

**Giovanni Scoto Eriugena** (IX sec.), irlandese, è il primo pensatore originale del Medioevo. Traduce dal greco lo **Pseudo-Dionigi l'Areopagita**, autore neoplatonico fondamentale per la mistica medievale (teologia negativa: di Dio si dice meglio ciò che non è). Nel *De divisione naturae* costruisce un sistema in quattro gradi:
- natura che **crea e non è creata**: Dio come principio;
- natura che **crea ed è creata**: le idee primordiali;
- natura che **non crea ed è creata**: il mondo delle creature;
- natura che **non crea e non è creata**: Dio come fine, in cui tutto ritorna.

È lo schema neoplatonico di processione e ritorno, applicato alla creazione cristiana. Le sue tesi (Dio come «nulla» per eccesso di essere, il ritorno finale di tutto in Dio) sfiorano il **panteismo** e saranno condannate secoli dopo. Scoto afferma anche, con una formula memorabile, che «l'autorità nasce dalla vera ragione, mai la ragione dall'autorità»: una delle prime rivendicazioni medievali dell'autonomia del pensiero.`
          },
          {
            n: 3, romano: "3", titolo: "Dialettici e antidialettici. Anselmo d'Aosta",
            chiave: "Si può usare la logica per parlare di Dio? Anselmo risponde di sì e costruisce l'argomento ontologico: Dio è ciò di cui non si può pensare il maggiore, dunque esiste.",
            testo: `Nell'XI secolo si accende la polemica tra **dialettici** — che applicano la logica anche ai misteri della fede — e **antidialettici**, come **Pier Damiani**, per cui la filosofia deve restare *ancilla theologiae*, serva della teologia, e la ragione tacere davanti a Dio (che, dice, può perfino fare che ciò che è stato non sia stato).

**Anselmo d'Aosta** (1033–1109), abate e poi arcivescovo di Canterbury, è chiamato «il padre della scolastica». La sua formula riprende Agostino: ***fides quaerens intellectum***, la fede che cerca di comprendere. Non si crede perché si è capito, ma avendo creduto si cerca di capire, e la ragione può arrivare molto lontano — perfino a dimostrare Dio senza presupporre la Scrittura (*sola ratione*).

**Le prove a posteriori** (*Monologion*) partono dall'esperienza: le cose sono buone in gradi diversi, dunque esiste un bene sommo per cui sono buone; sono perfette in gradi diversi, dunque esiste una perfezione massima. È lo schema che ritroverà Tommaso nella quarta via.

**L'argomento ontologico** (*Proslogion*) è invece **a priori**, e ha affascinato e irritato i filosofi per mille anni. Il ragionamento:
- Dio è, per definizione, «ciò di cui non si può pensare nulla di maggiore» (*id quo maius cogitari nequit*);
- anche lo stolto che dice «Dio non esiste» capisce questa definizione, quindi Dio esiste **nella sua mente**;
- ma esistere **nella realtà** è maggiore che esistere solo nella mente;
- se Dio esistesse solo nella mente, si potrebbe pensare qualcosa di maggiore (lo stesso Dio esistente): contraddizione;
- dunque Dio esiste anche nella realtà.

**Le obiezioni.** Già il monaco **Gaunilone** replicò: allora esisterebbe anche l'«isola perfetta» che riesco a pensare. Anselmo rispose che l'argomento vale solo per un essere il cui concetto includa la necessità dell'esistenza. **Tommaso** lo respinge per un altro motivo: dal concetto non si può saltare alla realtà, perché non conosciamo l'essenza di Dio. **Kant** darà la formulazione decisiva della critica: l'esistenza non è un predicato, cioè non aggiunge nulla al concetto (cento talleri reali non contengono un centesimo più di cento talleri pensati). Ma l'argomento risorge in Cartesio, Spinoza, Leibniz e Hegel: è forse il più longevo della storia della filosofia.`
          },
          {
            n: 4, romano: "4", titolo: "La disputa sugli universali",
            chiave: "I concetti generali («uomo», «cavallo») esistono nella realtà o sono solo nomi? Da questa domanda tecnica dipende tutto: la scienza, la Trinità, il peccato originale.",
            testo: `La domanda nasce da poche righe dell'*Isagoge* di **Porfirio**, tradotta da Boezio: i generi e le specie esistono di per sé o solo nel pensiero? sono corporei o incorporei? sono separati dalle cose o in esse? Porfirio poneva le domande e dichiarava di non volerle risolvere. Il Medioevo ci discuterà sopra per quattro secoli.

Le posizioni principali:
- **Realismo estremo** (Guglielmo di Champeaux): gli universali sono **cose reali** (*res*), esistenti prima delle cose individuali (*universalia ante rem*). È la posizione platonica. Difficoltà: se l'umanità è una sola sostanza presente in tutti, Socrate e Platone sarebbero lo stesso individuo.
- **Nominalismo** (Roscellino): gli universali sono solo **nomi**, *flatus vocis*, emissioni di voce; esistono soltanto gli individui. Difficoltà: applicato alla Trinità porta a dire che le tre persone sono tre dèi (triteismo) — e infatti Roscellino fu condannato.
- **Concettualismo** (Abelardo): gli universali non sono cose né semplici suoni, ma **concetti** (*sermones*) con un contenuto oggettivo: colgono ciò che gli individui hanno realmente in comune, senza essere sostanze separate.
- **Realismo moderato** (Tommaso, e già Aristotele): l'universale esiste in tre modi — *ante rem* nella mente di Dio come idea creatrice, *in re* nelle cose come loro forma, *post rem* nella nostra mente come concetto astratto dai singolari. È la sintesi che regge il pensiero scolastico maturo.

**Perché è importante?** Perché da qui dipende la possibilità stessa della **scienza**: se esistono solo individui irripetibili, non ci sono leggi generali. E perché ha conseguenze teologiche pesanti: la Trinità, la trasmissione del peccato originale a tutta l'«umanità», il valore dei sacramenti.

**Pietro Abelardo** (1079–1142) merita una nota a parte: logico brillante, autore del *Sic et non* (una raccolta di sentenze contraddittorie dei Padri, per esercitare gli studenti a risolverle), sostenne che «dubitando si giunge alla ricerca e cercando si percepisce la verità», e in etica anticipò la modernità affermando che ciò che conta non è l'atto ma l'**intenzione** (*Scito te ipsum*, «Conosci te stesso»). La sua tormentata vicenda con Eloisa è raccontata nella *Storia delle mie disgrazie*.`
          },
          {
            n: 5, romano: "5", titolo: "Filosofia islamica ed ebraica. Il ritorno di Aristotele",
            chiave: "Nel XII secolo l'Occidente riscopre Aristotele attraverso le traduzioni arabe. Averroè e Avicenna diventano interlocutori obbligati, e nasce il problema dell'averroismo latino.",
            testo: `Per secoli l'Occidente conobbe di Aristotele solo una parte della logica. Il **corpus completo** — *Fisica*, *Metafisica*, *De anima*, *Etica* — rientra tra XII e XIII secolo attraverso il mondo **islamico**, con i grandi centri di traduzione di **Toledo** e della **Sicilia**. Arrivano non solo i testi, ma i **commenti** arabi, che ne orientano la lettura.

**La filosofia islamica.**
- **Avicenna** (Ibn Sīnā, 980–1037): distingue tra **essenza** ed **esistenza**. Nelle creature l'esistenza è un «accidente» che si aggiunge all'essenza (posso pensare che cosa sia un cavallo senza sapere se esiste); solo in Dio essenza ed esistenza coincidono, ed è per questo che Dio è l'unico **necessario**, mentre tutto il resto è **possibile**. Tommaso riprenderà questa distinzione rendendola il cuore della propria metafisica.
- **Averroè** (Ibn Rushd, 1126–1198), di Cordova, «il Commentatore» per eccellenza: sostiene l'eternità del mondo (contro la creazione nel tempo) e soprattutto l'**unicità dell'intelletto** — l'intelletto possibile è uno solo per tutta l'umanità, e i singoli vi partecipano. Conseguenza: non c'è immortalità **individuale**. Sostiene inoltre l'autonomia della filosofia dalla religione, che dice la stessa verità in forma allegorica per il popolo.

**La filosofia ebraica.** **Maimonide** (1138–1204), nella *Guida dei perplessi*, tenta la conciliazione tra Aristotele e la Torah, con largo uso della teologia negativa e dell'interpretazione allegorica.

**Le reazioni in Occidente.** L'Aristotele che arriva è pericoloso: eternità del mondo, negazione della provvidenza particolare, mortalità dell'anima individuale. Ci sono divieti e condanne (Parigi 1210, 1215, 1231), e tre atteggiamenti:
- **rifiuto** e fedeltà ad Agostino e Platone (i francescani: **Bonaventura**, per cui la filosofia senza fede porta all'errore, e la conoscenza culmina nell'*itinerarium mentis in Deum*);
- **accoglienza integrale**, anche nei punti eterodossi: l'**averroismo latino** di **Sigieri di Brabante**, cui gli avversari attribuirono la teoria della «doppia verità»;
- **accoglienza critica**: distinguere in Aristotele ciò che è dimostrato da ciò che non lo è, correggerlo dove serve, usarlo come strumento della teologia. È la via di **Alberto Magno** e del suo allievo **Tommaso d'Aquino**.`
          }
        ]
      },
      {
        titolo: "Capitolo 2 — Tommaso d'Aquino",
        sottotitolo: "La grande sintesi tra Aristotele e il cristianesimo",
        canti: [
          {
            n: 6, romano: "6", titolo: "L'«Aristotele cristiano»: ragione e fede",
            chiave: "Fede e ragione non possono contraddirsi perché vengono dalla stessa fonte. Distinte per metodo e per oggetto, si aiutano: la grazia non abolisce la natura, la porta a compimento.",
            testo: `**Tommaso d'Aquino** (1225–1274), nato presso Aquino, domenicano, allievo di Alberto Magno, insegna a Parigi e a Napoli. Le opere maggiori sono la ***Summa contra Gentiles*** (rivolta a chi non accetta la Scrittura, e quindi puramente razionale) e la ***Summa theologiae***, rimasta incompiuta. Fu chiamato dai compagni «il bue muto», e Alberto Magno rispose: «i muggiti di questo bue si sentiranno in tutto il mondo».

**Il rapporto fede-ragione** è la chiave di volta del sistema. Fede e ragione sono **distinte** ma **non opposte**, perché entrambe vengono da Dio, che non può contraddirsi. Se c'è conflitto, o si è ragionato male o si è interpretata male la rivelazione.

Le verità si dividono in tre gruppi:
- **verità di sola ragione**: ciò che riguarda il mondo naturale (la matematica, la fisica);
- **verità di sola fede** o *preambula fidei* superate: i **misteri**, come la Trinità, l'incarnazione, la creazione nel tempo. Non sono contro la ragione (*contra rationem*), sono **sopra** la ragione (*supra rationem*): non si dimostrano, ma si può mostrare che le obiezioni contro di essi non sono cogenti;
- **verità miste**, dimostrabili razionalmente e anche rivelate: l'esistenza di Dio, l'immortalità dell'anima. Dio le ha rivelate ugualmente perché tutti — non solo i filosofi, e senza il rischio di errore — potessero raggiungerle.

Il principio che riassume tutto: ***gratia non tollit naturam, sed perficit*** — la grazia non abolisce la natura ma la porta a compimento. È una formula di enorme portata culturale: significa che la natura, la ragione, la politica, il corpo, hanno una **consistenza propria** e un valore positivo. È il fondamento dell'autonomia relativa delle realtà terrene, e la differenza profonda rispetto all'agostinismo più radicale.`
          },
          {
            n: 7, romano: "7", titolo: "La metafisica: essenza ed esistenza, analogia, partecipazione",
            chiave: "In tutte le creature essenza ed esistenza sono distinte: hanno l'essere ricevuto. Solo in Dio coincidono: Dio è l'Essere stesso sussistente.",
            testo: `Tommaso costruisce la metafisica su categorie aristoteliche (**sostanza**, **atto e potenza**, **materia e forma**, **quattro cause**) ma le trasforma con un'idea che Aristotele non aveva: la **creazione**.

**Ente, essenza, esistenza.** In ogni creatura si distinguono l'**essenza** (*che cosa* una cosa è) e l'**esistenza** o *actus essendi* (il fatto *che* sia). Posso sapere perfettamente che cos'è una fenice senza sapere se esista: segno che le due cose sono distinte. L'esistenza è dunque qualcosa che la creatura **riceve**, non qualcosa che le spetta per natura. Solo in **Dio** essenza ed esistenza coincidono: Dio non «ha» l'essere, **è** l'essere — *ipsum esse subsistens*. È la lettura metafisica del nome divino dell'Esodo: «Io sono colui che sono».

**La partecipazione.** Le creature hanno l'essere **per partecipazione**, Dio per essenza. È un elemento platonico integrato nell'impianto aristotelico: l'ordine del reale è una gerarchia di esseri che partecipano in gradi diversi all'unica sorgente dell'essere.

**L'analogia.** Se Dio è così diverso da noi, come possiamo parlarne? Non in modo **univoco** (le stesse parole con lo stesso significato: sarebbe ridurre Dio a una creatura) né in modo **equivoco** (significati del tutto diversi: allora non diremmo nulla), ma per **analogia**: quando dico che Dio è «buono» o «sapiente», uso termini che valgono in senso proprio e in grado eminente per Dio, e in senso derivato per le creature, che ne sono effetti. La dottrina dell'analogia è la risposta di Tommaso alla teologia negativa: di Dio non sappiamo *che cosa* sia, ma possiamo dirne qualcosa di vero.

**I trascendentali** sono le proprietà che appartengono a ogni ente in quanto ente, al di là delle categorie: *ens*, *res*, *unum*, *aliquid*, *verum*, *bonum*. Ogni cosa, in quanto esiste, è una, vera e buona. Da qui la tesi ottimistica: l'essere e il bene si convertono, e il male resta privazione.`
          },
          {
            n: 8, romano: "8", titolo: "Le cinque vie: dimostrare l'esistenza di Dio",
            chiave: "Tommaso rifiuta l'argomento ontologico e parte sempre dall'esperienza: dal movimento, dalle cause, dalla contingenza, dai gradi di perfezione, dall'ordine del mondo.",
            testo: `Per Tommaso l'esistenza di Dio **non è evidente di per sé** per noi: la conosciamo solo attraverso i suoi effetti. Perciò respinge l'argomento **a priori** di Anselmo (dal concetto non si passa alla realtà) e costruisce cinque prove **a posteriori**, tutte con la stessa struttura: si parte da un dato d'esperienza, si applica il principio di causalità, si esclude il regresso all'infinito, si conclude con un primo termine «che tutti chiamano Dio».

- **Prima via, dal movimento.** Nel mondo qualcosa si muove. Tutto ciò che si muove è mosso da altro (nulla passa da sé dalla potenza all'atto). Non si può risalire all'infinito nella serie dei motori. Dunque esiste un **primo motore immobile**.
- **Seconda via, dalla causa efficiente.** Nel mondo c'è un ordine di cause. Nulla è causa di sé stesso. Non si risale all'infinito. Dunque esiste una **causa prima incausata**.
- **Terza via, dal possibile e dal necessario.** Le cose nascono e muoiono: sono **contingenti**, possono non essere. Se tutto fosse contingente, ci sarebbe stato un momento in cui nulla esisteva, e allora nulla esisterebbe ora. Dunque esiste un essere **necessario**, che ha in sé la ragione del proprio essere. È la via più propriamente metafisica, quella collegata alla distinzione essenza/esistenza.
- **Quarta via, dai gradi di perfezione.** Le cose sono più o meno buone, vere, nobili. Il «più» e il «meno» si dicono rispetto a un massimo. Dunque esiste un essere **massimamente perfetto**, causa di tutte le perfezioni. È la via di ascendenza platonico-agostiniana.
- **Quinta via, dal finalismo.** Anche i corpi privi di conoscenza agiscono per un fine, con regolarità. Ciò che non conosce non tende a un fine se non è diretto da un'intelligenza, come la freccia dall'arciere. Dunque esiste un'**intelligenza ordinatrice**.

**Le critiche.** La prima e la seconda via presuppongono la fisica aristotelica, superata dal principio d'inerzia. Hume e Kant contestano l'uso del principio di causalità oltre l'esperienza; Kant mostra inoltre che la terza via si appoggia in realtà all'argomento ontologico (per passare da «essere necessario» a «Dio»). La quinta via, il **disegno**, è quella che ha avuto più fortuna popolare e che Darwin ha messo in crisi.

Va notato che le vie provano al massimo un motore, una causa, un essere necessario: che questo sia il Dio personale della fede è, ammette Tommaso stesso, un passo ulteriore che le prove non compiono.`
          },
          {
            n: 9, romano: "9", titolo: "Conoscenza, anima, verità",
            chiave: "Nulla è nell'intelletto che prima non sia stato nei sensi: la conoscenza parte dall'esperienza e per astrazione arriva all'universale. L'anima è forma del corpo, ma immortale.",
            testo: `**La gnoseologia.** Tommaso rifiuta l'illuminazione agostiniana e adotta l'**astrazione** aristotelica: ***nihil est in intellectu quod prius non fuerit in sensu***. Il percorso:
- i sensi ricevono le **specie sensibili** delle cose;
- l'immaginazione forma il *phantasma*, l'immagine;
- l'**intelletto agente** «illumina» il *phantasma* astraendone la forma universale, spogliata delle condizioni materiali e individuali;
- l'**intelletto possibile** riceve la specie intelligibile e conosce l'universale.

L'universale, quindi, esiste realmente nelle cose (*in re*) e viene colto dalla mente (*post rem*): è il **realismo moderato**.

La **verità** è definita come *adaequatio rei et intellectus*, corrispondenza tra la cosa e l'intelletto. Le cose sono vere in quanto conformi all'intelletto divino che le ha pensate; il nostro intelletto è vero quando si conforma alle cose. È la definizione classica di verità, che resterà egemone fino a Kant.

**L'anima.** Qui Tommaso corregge tanto Platone quanto Averroè.
- Contro Platone (e contro l'agostinismo): l'anima **non è una sostanza chiusa nel corpo come in una prigione**, è la **forma sostanziale** del corpo. Uomo non è l'anima: è il composto, il *sinolo*. Per questo il corpo non è un male e la resurrezione della carne ha senso.
- Contro Averroè: l'intelletto **non è unico** per tutta l'umanità. Se lo fosse, non sarei io a pensare. Ogni uomo ha il proprio intelletto, e dunque la propria responsabilità e la propria immortalità.
- L'immortalità si dimostra così: l'anima intellettiva compie un'operazione (conoscere l'universale, l'immateriale) che non dipende da un organo corporeo; dunque è **sussistente** e non perisce con il corpo. Resta però, senza il corpo, in una condizione «innaturale»: da qui l'attesa della resurrezione.`
          },
          {
            n: 10, romano: "10", titolo: "Etica, legge, politica, estetica",
            chiave: "Il fine dell'uomo è la felicità, che pienamente si realizza solo nella visione di Dio. Le leggi umane derivano dalla legge naturale: se la contraddicono, non obbligano.",
            testo: `**L'etica.** Tommaso riprende l'impianto aristotelico: ogni essere tende al proprio fine, e il fine dell'uomo è la **felicità** (*beatitudo*). Ma la felicità perfetta non è raggiungibile in questa vita: consiste nella **visione beatifica** di Dio. Restano valide le virtù aristoteliche — le quattro **cardinali** (prudenza, giustizia, fortezza, temperanza), acquisibili con l'esercizio — a cui si aggiungono le tre **teologali** (fede, speranza, carità), che sono dono di Dio. La struttura è la stessa del principio generale: la natura è buona, la grazia la compie.

**La legge.** È la parte più feconda per la storia del pensiero politico. Tommaso distingue quattro livelli:
- la **legge eterna**: il piano razionale con cui Dio governa il mondo;
- la **legge naturale**: la partecipazione della creatura razionale alla legge eterna, cioè i principi morali che la ragione può scoprire da sé («fa' il bene, evita il male», conserva la vita, vivi in società, cerca la verità);
- la **legge umana** o positiva: le norme concrete stabilite dagli uomini, che devono **derivare** dalla legge naturale specificandola;
- la **legge divina**: la rivelazione, che indica il fine soprannaturale.

La conseguenza è potentissima: **una legge umana ingiusta, che contraddica la legge naturale, «non è legge ma corruzione della legge»** e non obbliga in coscienza. È il fondamento di tutto il **giusnaturalismo** successivo e, indirettamente, dell'idea moderna di diritti umani e di obiezione di coscienza.

**La politica.** Contro l'agostinismo che vedeva nello Stato una conseguenza del peccato, Tommaso recupera Aristotele: l'uomo è **animale politico per natura**, e lo Stato è una realtà **naturale e buona**, con un proprio fine (il bene comune) e una propria autonomia. Chiesa e Stato hanno ambiti distinti, benché il fine soprannaturale sia superiore. La forma di governo migliore è la **monarchia temperata** da elementi aristocratici e popolari; contro il tiranno, che governa per il proprio interesse, è ammessa la resistenza.

**L'estetica.** Il bello è «ciò che visto piace» (*id quod visum placet*), e richiede tre condizioni: **integrità** (la cosa non deve essere mutila), **proporzione** o armonia, **chiarezza** (*claritas*, lo splendore della forma). Bello e bene coincidono nella cosa, ma differiscono nella relazione: il bene riguarda l'appetito, il bello la conoscenza — piace il vederlo.`
          }
        ]
      },
      {
        titolo: "Capitolo 3 — La crisi e la fine della scolastica",
        sottotitolo: "Duns Scoto, Ockham, il tramonto di una sintesi",
        canti: [
          {
            n: 11, romano: "11", titolo: "Duns Scoto: la volontà e l'individuo",
            chiave: "Il «dottor sottile» separa filosofia e teologia, mette la volontà al di sopra dell'intelletto e valorizza l'individuo come tale: l'haecceitas, il «questo qui».",
            testo: `Nella seconda metà del XIII secolo il tomismo non trionfa affatto: alcune tesi di Tommaso vengono incluse nelle **condanne del 1277** del vescovo di Parigi Tempier, insieme all'averroismo. La sintesi comincia a incrinarsi. Nel Trecento due pensatori francescani la smontano dall'interno.

**Giovanni Duns Scoto** (1265–1308), il *doctor subtilis*:
- **Separa teologia e filosofia**. Non hanno lo stesso oggetto formale: la teologia è una scienza **pratica**, che riguarda la salvezza, e i suoi contenuti non sono dimostrabili; la filosofia è **teoretica**. Il territorio comune si restringe drasticamente.
- **Univocità dell'essere.** Contro l'analogia tomista: se «essere» non avesse un significato almeno minimamente univoco tra Dio e le creature, non potremmo dire nulla di Dio. È una mossa che rende la metafisica possibile ma svuota la trascendenza dell'analogia.
- **Primato della volontà** (volontarismo). In Dio e nell'uomo la volontà è superiore all'intelletto ed è libera. Le cose non sono buone perché Dio le comanda dopo averle riconosciute buone: sono buone **perché Dio le vuole**. L'ordine morale dipende dalla libera volontà divina, non da una necessità razionale.
- **L'*haecceitas***. Che cosa rende Socrate *questo* individuo e non un altro? Per Tommaso la materia; per Scoto una perfezione positiva della forma, l'«ecceità», il «questo-qui». È una valorizzazione filosofica dell'individuo che avrà lunga eco.

Il risultato complessivo: la ragione perde terreno, la libertà (di Dio e dell'uomo) ne guadagna. La costruzione unitaria di Tommaso, in cui l'ordine razionale del mondo rispecchia l'ordine divino, comincia a sgretolarsi.`
          },
          {
            n: 12, romano: "12", titolo: "Guglielmo di Ockham: il rasoio e la fine della metafisica",
            chiave: "«Non moltiplicare gli enti senza necessità». Esistono solo individui; gli universali sono segni mentali. La metafisica non è dimostrabile: restano l'esperienza e la fede.",
            testo: `**Guglielmo di Ockham** (1285–1349 ca.), francescano inglese, è il grande demolitore.

**Il rasoio.** Il principio di economia — *entia non sunt multiplicanda praeter necessitatem*, «non si devono moltiplicare gli enti senza necessità» — non è una novità assoluta, ma Ockham lo usa come una lama: taglia via specie intelligibili, forme, essenze, cause finali, tutte le entità intermedie che la scolastica aveva accumulato. Ciò che non è necessario a spiegare va eliminato.

**Il nominalismo.** Esistono **solo individui**. L'universale non è né una cosa né una forma nelle cose: è un **segno** mentale (*terminus*, *signum*) che sta al posto di molti individui simili. La **teoria della supposizione** studia proprio le funzioni con cui i termini «stanno per» le cose nelle proposizioni. La conoscenza parte dall'**intuizione** del singolare — l'esperienza diretta di questo qui — e solo dopo forma concetti astratti.

**La dissoluzione del problema scolastico.** Le conseguenze arrivano in fila:
- **La teologia non è dimostrabile.** Non si può provare razionalmente l'esistenza di Dio, la sua unicità, l'immortalità dell'anima. Le prove tomiste presuppongono nessi causali necessari, e nessun nesso necessario è dato nell'esperienza. Resta la **fede**, pura e sola.
- **L'onnipotenza divina.** Dio è assolutamente libero (*potentia absoluta*): potrebbe fare qualunque cosa non contraddittoria, anche far conoscere un oggetto che non esiste. L'ordine attuale del mondo è solo quello che Dio ha di fatto scelto (*potentia ordinata*), non un ordine necessario. Ne segue che il mondo va conosciuto **osservandolo**, non deducendolo: è un incentivo formidabile alla ricerca empirica.
- **Contingenza della natura e nascita della scienza.** Se le leggi non sono necessarie, la fisica si fa con l'esperienza e con ipotesi. La scuola occamista (Buridano, Oresme) elabora la teoria dell'*impetus*, critica la cosmologia aristotelica e prepara la strada a Galileo.

**Il pensiero politico.** Ockham, in conflitto con papa Giovanni XXII sulla povertà francescana, rifugiato presso l'imperatore Ludovico il Bavaro («difendimi con la spada, io ti difenderò con la penna»), sostiene la **netta separazione tra potere spirituale e potere temporale**, nega che il papa abbia potere sulle cose civili e difende la libertà dei cristiani anche contro l'autorità ecclesiastica. Sulla stessa linea, **Marsilio da Padova** nel *Defensor pacis* attribuisce la sovranità al popolo, che la delega al governante: una delle anticipazioni più nette dello Stato moderno.

**La conclusione.** La grande sintesi di fede e ragione si spezza in due tronconi che prenderanno strade separate: la fede diventa affare della sola rivelazione (e Lutero, formatosi in ambiente occamista, ne trarrà le conseguenze religiose); la ragione si volta verso l'esperienza e la natura, e prepara la rivoluzione scientifica. Non è la fine del pensiero: è la fine di un modo di pensare, e l'inizio del nostro.

Va ricordato infine il **misticismo tedesco** di **Meister Eckhart**, sviluppatosi negli stessi anni: se la ragione non arriva a Dio, vi arriva l'esperienza interiore, nel «fondo dell'anima» dove Dio nasce. Anche questa è una risposta alla crisi della scolastica, e alimenterà Cusano, la Riforma e la mistica moderna.`
          }
        ]
      }
    ],
    personaggi: [
      {
        gruppo: "1. Il metodo e i problemi della scolastica",
        voci: [
          { nome: "Scolastica", alt: [], desc: "La filosofia insegnata nelle scuole medievali: lectio (commento del testo), quaestio, disputatio secondo uno schema fisso di obiezioni e risposte." },
          { nome: "Ancilla theologiae", alt: [], desc: "«Serva della teologia»: la formula del ruolo subordinato della filosofia, sostenuta dagli antidialettici come Pier Damiani." },
          { nome: "Fides quaerens intellectum", alt: [], desc: "«La fede che cerca di comprendere»: il programma di Anselmo, erede di Agostino." },
          { nome: "Argomento ontologico", alt: ["Anselmo", "Proslogion"], desc: "Dio è ciò di cui non si può pensare il maggiore; esistere nella realtà è più che esistere solo nella mente; dunque Dio esiste. Respinto da Tommaso e da Kant, ripreso da Cartesio, Leibniz e Hegel." },
          { nome: "Universali", alt: ["Porfirio", "Isagoge"], desc: "I concetti generali. Realismo estremo (sono cose), nominalismo (sono nomi), concettualismo (sono concetti), realismo moderato (ante rem, in re, post rem)." },
          { nome: "Abelardo", alt: ["Sic et non"], desc: "Logico e concettualista. «Dubitando si giunge alla ricerca». In etica conta l'intenzione, non l'atto materiale." },
          { nome: "Avicenna", alt: ["Ibn Sīnā"], desc: "Distingue essenza ed esistenza: nelle creature l'esistenza è ricevuta, solo in Dio coincidono. Fonte diretta di Tommaso." },
          { nome: "Averroè", alt: ["Ibn Rushd", "il Commentatore"], desc: "Eternità del mondo e unicità dell'intelletto per tutta l'umanità: quindi nessuna immortalità individuale. Da qui la polemica sull'averroismo latino." },
          { nome: "Doppia verità", alt: ["Sigieri di Brabante"], desc: "Tesi secondo cui una cosa può essere vera in filosofia e falsa in teologia. Attribuita agli averroisti dagli avversari; da loro respinta." }
        ]
      },
      {
        gruppo: "2. Tommaso",
        voci: [
          { nome: "Gratia non tollit naturam", alt: [], desc: "«La grazia non abolisce la natura ma la porta a compimento»: la formula che fonda il valore autonomo della ragione, del corpo e della politica." },
          { nome: "Supra rationem", alt: ["misteri"], desc: "I contenuti di fede non sono contro la ragione ma al di sopra di essa: non si dimostrano, ma si può mostrare che le obiezioni non sono decisive." },
          { nome: "Essenza ed esistenza", alt: ["actus essendi"], desc: "Nelle creature sono realmente distinte: l'essere è ricevuto. In Dio coincidono: Dio è ipsum esse subsistens." },
          { nome: "Analogia", alt: [], desc: "Non parliamo di Dio in modo univoco né equivoco: i termini valgono in senso proprio ed eminente per Dio, derivato per le creature." },
          { nome: "Trascendentali", alt: [], desc: "Proprietà di ogni ente in quanto tale: uno, vero, buono. Essere e bene si convertono." },
          { nome: "Cinque vie", alt: [], desc: "Prove a posteriori dell'esistenza di Dio: dal movimento, dalla causa efficiente, dalla contingenza, dai gradi di perfezione, dal finalismo." },
          { nome: "Astrazione", alt: ["intelletto agente"], desc: "Nulla è nell'intelletto che non sia stato prima nei sensi: l'intelletto agente estrae l'universale dall'immagine sensibile." },
          { nome: "Adaequatio rei et intellectus", alt: ["verità"], desc: "La verità come corrispondenza tra cosa e intelletto: definizione classica, egemone fino a Kant." },
          { nome: "Anima forma del corpo", alt: ["sinolo"], desc: "Contro Platone: l'uomo non è l'anima ma il composto. Contro Averroè: ogni uomo ha il proprio intelletto, e dunque la propria immortalità." },
          { nome: "Legge naturale", alt: [], desc: "La partecipazione della ragione umana alla legge eterna. Una legge umana che la contraddica «non è legge ma corruzione della legge»." },
          { nome: "Bene comune", alt: [], desc: "Il fine dello Stato, realtà naturale e buona. Contro il tiranno che governa per sé è ammessa la resistenza." },
          { nome: "Id quod visum placet", alt: ["bello"], desc: "Il bello è ciò che, visto, piace: richiede integrità, proporzione e claritas." }
        ]
      },
      {
        gruppo: "3. La crisi: Scoto e Ockham",
        voci: [
          { nome: "Univocità dell'essere", alt: ["Duns Scoto"], desc: "Contro l'analogia: «essere» deve avere un significato comune a Dio e alle creature, altrimenti non potremmo dire nulla di Dio." },
          { nome: "Volontarismo", alt: [], desc: "La volontà è superiore all'intelletto: le cose sono buone perché Dio le vuole, non viceversa. L'ordine morale dipende dalla libertà divina." },
          { nome: "Haecceitas", alt: ["ecceità"], desc: "Il «questo qui»: la perfezione positiva che rende un individuo esattamente quell'individuo. Valorizzazione filosofica del singolare." },
          { nome: "Rasoio di Ockham", alt: [], desc: "«Non moltiplicare gli enti senza necessità»: principio di economia che elimina forme, specie e cause finali superflue." },
          { nome: "Supposizione", alt: ["terminus"], desc: "La funzione per cui un termine «sta per» le cose in una proposizione. Cuore della logica nominalista." },
          { nome: "Potentia absoluta / ordinata", alt: [], desc: "Dio potrebbe fare tutto ciò che non è contraddittorio; l'ordine attuale del mondo è solo quello scelto di fatto. Perciò la natura si conosce osservandola." },
          { nome: "Impetus", alt: ["Buridano", "Oresme"], desc: "Teoria occamista del movimento che critica la fisica aristotelica: uno dei precedenti del principio d'inerzia." },
          { nome: "Marsilio da Padova", alt: ["Defensor pacis"], desc: "La sovranità appartiene al popolo, che la delega. Netta separazione tra potere spirituale e temporale." },
          { nome: "Meister Eckhart", alt: ["misticismo tedesco"], desc: "Se la ragione non raggiunge Dio, lo raggiunge l'esperienza interiore nel «fondo dell'anima». Influirà su Cusano e sulla Riforma." }
        ]
      }
    ]
  }

});

/* Aggiunge le unità del volume 1B all'ordine di visualizzazione */
FILOSOFIA_ORDINE.push("ellenismo", "patristica-agostino", "scolastica-tommaso");
