/* ============================================================
   DATI — FILOSOFIA · Volume 2A
   Abbagnano–Fornero, "La ricerca del pensiero" 2A
   «Dall'Umanesimo all'empirismo»

   Unità 1 — Umanesimo e Rinascimento
   Unità 2 — La rivoluzione scientifica, Galilei e Bacone
   Unità 3 — Cartesio e il razionalismo
   Unità 4 — Critici e continuatori di Cartesio: Pascal, Spinoza, Leibniz
   Unità 5 — Ragione ed esperienza nel pensiero inglese: da Hobbes a Hume
   ============================================================ */

Object.assign(FILOSOFIA, {

  /* ------------------------------------------------ UNITÀ 1 */
  "umanesimo-rinascimento": {
    id: "umanesimo-rinascimento",
    titolo: "Umanesimo e Rinascimento",
    autore: "Unità 1 · Il Quattrocento e il Cinquecento",
    sottotitolo: "L'uomo artefice di sé stesso",
    epoca: "XV – XVI secolo",
    lingua: "Firenze, Roma, l'Europa",
    tag: ["Umanesimo", "Platonismo", "Riforma", "Machiavelli", "Bruno"],
    epigrafe: "Non ti ho fatto né celeste né terreno: sarai tu, arbitro di te stesso, a plasmarti nella forma che preferirai. (Pico della Mirandola)",
    colore: "rosso",
    parti: [
      {
        titolo: "Capitolo 1 — Coordinate storiche e concetti generali",
        sottotitolo: "Che cosa cambia tra Medioevo e mondo moderno",
        canti: [
          {
            n: 1, romano: "1", titolo: "Le coordinate storiche e il rapporto con il Medioevo",
            chiave: "Scoperte geografiche, stampa, Stati nazionali, crisi della Chiesa. Il Rinascimento si autodefinisce «rinascita» contro un'«età di mezzo» buia: un'immagine di parte, ma decisiva.",
            testo: `Tra Quattrocento e Cinquecento cambia il mondo materiale prima ancora delle idee:
- la **scoperta dell'America** (1492) e le circumnavigazioni allargano il pianeta e mostrano che gli antichi non sapevano tutto;
- la **stampa a caratteri mobili** (Gutenberg, 1455) moltiplica la circolazione dei testi e rende possibile un pubblico di lettori;
- la caduta di **Costantinopoli** (1453) porta in Italia dotti bizantini con i manoscritti greci: si torna a leggere Platone in originale;
- nascono gli **Stati nazionali** (Francia, Spagna, Inghilterra) e, in Italia, le corti signorili;
- la **Riforma protestante** (1517) spezza l'unità religiosa d'Europa;
- **Copernico** (1543) sposta la Terra dal centro del cosmo.

Il tratto più interessante, dal punto di vista filosofico, è che gli uomini del Rinascimento sono i primi a **definire la propria epoca**: si sentono in una «rinascita» (*rinascita*, poi *Renaissance*) dopo una «età di mezzo» (*medium aevum*) di barbarie. È un giudizio **polemico e di parte**: sono loro a inventare l'idea di «Medioevo buio», e la storiografia moderna l'ha largamente corretta — il Medioevo aveva già conosciuto rinascite, università, tecnica, grande arte.

Come giudicare allora il rapporto Medioevo–Rinascimento? Due tesi opposte:
- **discontinuità** (Burckhardt, Ottocento): il Rinascimento è la nascita dell'individuo moderno, dello Stato come opera d'arte, della coscienza laica;
- **continuità** (medievisti novecenteschi): molti temi rinascimentali sono già medievali, e il Rinascimento è per certi versi più «magico» e meno razionale del XIII secolo.

La lettura più equilibrata: il Rinascimento **non è la nascita della modernità scientifica** (quella arriva con Galileo), ma è la stagione in cui si sposta il **centro di gravità** della cultura — dalla teologia all'uomo, dall'eternità alla storia, dall'autorità al testo originale.`
          },
          {
            n: 2, romano: "2", titolo: "L'intellettuale laico e i nuovi luoghi della cultura",
            chiave: "L'uomo di cultura non è più solo un chierico in un convento: è un segretario di cancelleria, un cortigiano, un tipografo, un artista. Cambia il mestiere, cambia il pensiero.",
            testo: `Nel Medioevo la cultura era quasi interamente **ecclesiastica**, e i suoi luoghi erano il monastero, la scuola cattedrale, l'università dominata dalle facoltà di teologia. Nel Rinascimento cambia tutto:

- **Chi**: l'intellettuale è spesso un **laico** — Petrarca, Salutati e Bruni sono cancellieri della repubblica fiorentina, Machiavelli un funzionario, Leonardo un artista-ingegnere, Erasmo un umanista europeo che vive dei propri libri.
- **Dove**: i nuovi luoghi sono la **corte** (Firenze, Urbino, Ferrara, Mantova), l'**accademia** (l'Accademia platonica di Careggi), la **bottega dell'artista**, la **tipografia** (Aldo Manuzio a Venezia), la biblioteca privata dei mecenati.
- **Come**: il modello non è più il commento scolastico ma il **dialogo**, l'**epistola**, il **trattato**, l'**orazione** — generi classici, eleganti, rivolti a un pubblico colto e non tecnico.

Cambia anche il **pubblico**: si scrive sempre più in volgare, ci si rivolge a mercanti, gentiluomini, donne di corte. Nasce l'idea di una cultura come formazione dell'uomo completo — il *cortegiano* di Castiglione — e non come specializzazione professionale.

La conseguenza filosofica è importante: la filosofia esce dalle facoltà di teologia e diventa **cultura civile**. Si occupa di educazione, di politica, di morale, di arte, di storia. E acquista un tono nuovo: polemico verso la scolastica, accusata di parlare un latino barbaro e di discutere problemi inutili («quanti angeli stanno sulla punta di uno spillo» è una caricatura umanistica, non una vera questione medievale, ma dice bene il clima).`
          },
          {
            n: 3, romano: "3", titolo: "«Ritorno al principio» e riscoperta degli antichi",
            chiave: "Il Rinascimento non guarda avanti ma indietro: crede che la verità sia all'origine, e vada liberata dalle incrostazioni. Vale per i testi, per il diritto, per la religione.",
            testo: `Il gesto fondamentale del Rinascimento è il **ritorno al principio**: la convinzione che la verità stia nelle **origini**, e che l'operazione da compiere sia togliere le sovrapposizioni che l'hanno deformata.

Questo spiega tutta una serie di fenomeni che altrimenti sembrerebbero slegati:
- in **letteratura**: si tornano a leggere i classici nella loro lingua e nel loro contesto storico, non come autorità atemporali;
- in **filosofia**: si legge Platone in greco e non nelle parafrasi, si distingue l'Aristotele autentico da quello scolastico;
- in **religione**: si torna al Vangelo e ai Padri (Erasmo pubblica il Nuovo Testamento in greco), e Lutero alla sola Scrittura;
- in **arte**: si studiano le rovine romane, le proporzioni, l'anatomia;
- in **scienza**: si riscoprono Archimede, Euclide, Lucrezio, il corpus ermetico.

Lo strumento nuovo è la **filologia**, e il suo capolavoro è la dimostrazione con cui **Lorenzo Valla** (1440) prova che la *Donazione di Costantino* — il documento su cui il papato fondava il proprio potere temporale — è un falso: il latino che vi si usa non poteva esistere nel IV secolo. È il primo grande caso in cui una tecnica erudita smonta un potere politico. E introduce nella cultura europea un'idea decisiva: **i testi hanno una storia**, e il senso di una parola dipende dall'epoca in cui è stata scritta. Nasce la coscienza storica.

Attenzione però: il «ritorno al principio» è anche il motivo per cui il Rinascimento accoglie con entusiasmo testi che riteneva antichissimi e che erano invece tardi e fantasiosi, come il **Corpus Hermeticum** attribuito al mitico Ermete Trismegisto. Da qui la fortuna di magia, alchimia, astrologia e cabala accanto alla nuova filologia: un intreccio che ci appare contraddittorio ma che per loro era coerente.`
          },
          {
            n: 4, romano: "4", titolo: "La concezione rinascimentale dell'uomo",
            chiave: "L'uomo non ha una natura fissa: è ciò che decide di diventare. Non è più solo creatura, è artefice, e la vita attiva vale quanto la contemplazione.",
            testo: `È il tema più celebre dell'umanesimo, e la sua formulazione classica è l'*Oratio de hominis dignitate* di **Pico della Mirandola** (1486). Dio, alla fine della creazione, parla ad Adamo:

«Non ti ho dato né un posto determinato, né un aspetto proprio, né alcuna prerogativa tua, perché quel posto, quell'aspetto, quelle prerogative che tu desidererai, tutto secondo il tuo voto e il tuo consiglio ottenga e conservi. […] Non ti ho fatto né celeste né terreno, né mortale né immortale, perché di te stesso quasi libero e sovrano artefice ti plasmassi nella forma che avresti preferito.»

Il punto rivoluzionario: **l'uomo non ha una natura data**. Tutte le altre creature occupano un gradino fisso nella scala dell'essere; l'uomo è **indeterminato** e si colloca da sé, potendo abbassarsi al bruto o innalzarsi al divino. La dignità non consiste in ciò che l'uomo è, ma nella sua **libertà di farsi**. Da qui una linea che arriva fino all'esistenzialismo del Novecento («l'esistenza precede l'essenza»).

Altri aspetti collegati:
- **L'uomo microcosmo**: contiene in sé tutti i livelli della realtà, dal minerale al divino; è il «nodo e vincolo del mondo» (Ficino), il punto in cui l'universo si tiene insieme.
- **La rivalutazione della vita attiva**. L'umanesimo civile fiorentino (Salutati, Bruni) contesta l'ideale monastico: la virtù si esercita nella città, nella politica, nella famiglia. La *vita activa* non è inferiore alla *contemplativa*.
- **La riabilitazione del piacere, del corpo e della ricchezza**. Valla, nel *De voluptate*, sostiene che il piacere è il vero bene e che l'ascetismo è contro natura; altri difendono la ricchezza come strumento di magnificenza e di bene comune. Il denaro cessa di essere sospetto.
- **La libertà** contro il determinismo astrologico: proprio Pico scrive un durissimo trattato *contro* l'astrologia divinatoria, perché se gli astri decidono, la dignità dell'uomo crolla.

Va detto per equilibrio che questa fiducia non è universale: **Machiavelli** ha un'idea molto più cupa della natura umana, e la Riforma la considererà radicalmente corrotta. L'ottimismo antropologico è una delle voci del Rinascimento, non l'unica.`
          },
          {
            n: 5, romano: "5", titolo: "Prospettiva storica, naturalismo, laicizzazione del sapere",
            chiave: "Tre conseguenze: si scopre che il passato è diverso dal presente; la natura diventa oggetto d'indagine autonoma; il sapere si emancipa dalla teologia.",
            testo: `**La scoperta della prospettiva storica.** Il Medioevo dipingeva i personaggi antichi con abiti medievali: il passato era un presente più vecchio. L'umanesimo scopre la **distanza storica**: gli antichi erano *diversi*, avevano un'altra lingua, altri costumi, altre istituzioni. Da qui nascono la filologia, la storiografia moderna, il senso dell'anacronismo. È forse l'eredità più duratura dell'umanesimo.

**Il naturalismo.** La natura smette di essere solo un libro di simboli da decifrare per rimandare a Dio e diventa una realtà **viva, autonoma, dotata di leggi proprie**, da studiare direttamente. È ancora una natura animata, magica, percorsa da forze e simpatie occulte — non ancora la natura matematica di Galileo — ma il passo decisivo è compiuto: si guarda alle cose, non ai libri.

**La laicizzazione del sapere.** Le diverse attività umane rivendicano ciascuna la propria **autonomia**: la politica dalla morale (Machiavelli), l'arte dalla committenza religiosa, la scienza dalla teologia, la storia dalla provvidenza. Non è ancora ateismo — il Rinascimento è profondamente religioso — ma è la fine dell'idea che un unico sapere teologico governi tutti gli altri.

**Il Rinascimento tra Medioevo e modernità.** Il bilancio equilibrato è questo:
- guarda **indietro** nella forma (il mito dell'antico, l'autorità dei classici, la magia);
- guarda **avanti** nella sostanza (l'autonomia dell'uomo e delle discipline, il metodo filologico, l'interesse per la natura e la tecnica).

**Le principali figure dell'Umanesimo italiano**: **Petrarca**, che apre la stagione con l'amore per i classici e la critica alla logica scolastica; **Coluccio Salutati** e **Leonardo Bruni**, cancellieri e teorici dell'umanesimo civile; **Lorenzo Valla**, filologo e critico. Fuori d'Italia: **Erasmo da Rotterdam**, il «principe degli umanisti», e **Montaigne**, che nei *Saggi* porta l'attenzione sull'io concreto e mutevole, con uno scetticismo tollerante riassunto nella domanda «*Que sais-je?*», che cosa so io?`
          }
        ]
      },
      {
        titolo: "Capitolo 2 — Platonismo e aristotelismo nel Rinascimento",
        sottotitolo: "Cusano, Ficino, Pico, Pomponazzi",
        canti: [
          {
            n: 6, romano: "6", titolo: "Cusano: la dotta ignoranza e la coincidenza degli opposti",
            chiave: "Dio è infinito, la nostra mente è finita: sapere di non poterlo conoscere è la vera sapienza. Nell'infinito gli opposti coincidono, e l'universo non ha centro.",
            testo: `**Niccolò Cusano** (1401–1464), cardinale tedesco, è la figura di passaggio tra Medioevo e Rinascimento.

**La dotta ignoranza.** Il rapporto tra la nostra conoscenza e l'infinito è come quello tra un poligono inscritto e il cerchio: si possono moltiplicare i lati all'infinito, ci si avvicina sempre di più, ma **non si coincide mai**. Fra finito e infinito non c'è proporzione. La conclusione non è scetticismo: la vera sapienza è la ***docta ignorantia***, il sapere consapevole del proprio limite. Chi crede di conoscere Dio è ignorante; chi sa di non conoscerlo, sa qualcosa di vero.

**La coincidenza degli opposti** (*coincidentia oppositorum*). Nell'infinito le distinzioni che valgono nel finito si annullano. Esempi geometrici che Cusano usa con maestria: in un cerchio di raggio infinito, la circonferenza coincide con la retta; il massimo e il minimo coincidono. Così in Dio coincidono il massimo assoluto e il minimo, l'essere e il potere (*possest*), l'unità e la molteplicità. La ragione discorsiva, che procede per opposizioni, deve cedere il posto all'**intuizione intellettuale**.

**Il cosmo.** Da qui una conseguenza esplosiva: se Dio è infinito, il suo effetto è **indefinitamente esteso**. L'universo non ha una circonferenza e quindi **non ha un centro**: la Terra non è al centro, ma nessun altro luogo lo è. La celebre formula: Dio è «una sfera il cui centro è ovunque e la circonferenza in nessun luogo». Non è ancora l'eliocentrismo di Copernico — non è astronomia, è metafisica — ma prepara Bruno.

**L'uomo.** È *parvus mundus*, piccolo mondo che rispecchia il grande, e la sua mente (*mens*) è viva immagine di Dio: non riceve passivamente ma **produce** i concetti, come Dio produce le cose. La matematica ne è la prova: i suoi oggetti non stanno nel mondo, li crea la mente. È un'idea che risuonerà fino a Kant.`
          },
          {
            n: 7, romano: "7", titolo: "Il platonismo: Ficino e Pico della Mirandola",
            chiave: "A Firenze si traduce tutto Platone e si costruisce una religione filosofica: l'amore che unisce il cosmo, l'anima come nodo del mondo, la concordia di tutte le dottrine.",
            testo: `Nel 1462 Cosimo de' Medici fonda a Careggi l'**Accademia platonica**, affidata a **Marsilio Ficino** (1433–1499), che traduce in latino **tutto Platone**, Plotino e il *Corpus Hermeticum*: un'operazione culturale di portata europea.

**Ficino.** La sua tesi centrale è la ***pia philosophia***: filosofia e religione non sono in conflitto, sono due espressioni della stessa verità; Platone è quasi un profeta. La realtà è una **gerarchia** neoplatonica di cinque gradi (Dio, mente angelica, anima, qualità, corpo), e l'**anima** occupa il centro: è il *nodo e vincolo del mondo* (*copula mundi*), perché partecipa insieme dell'eterno e del temporale, e tiene insieme l'universo. Da qui la sua argomentazione per l'immortalità: l'anima desidera l'infinito, e un desiderio naturale non può essere vano.

L'altro grande tema ficiniano è l'**amore**: forza cosmica che circola da Dio alle creature e ritorna, e che unisce il mondo. L'«amore platonico» come lo intende la cultura europea nasce dal suo *Commento al Simposio*. Da lì passa nella poesia, nella pittura (Botticelli), nella trattatistica cinquecentesca.

**Pico della Mirandola** (1463–1494), oltre alla dignità dell'uomo, propone il progetto della **concordia**: raccoglie **900 tesi** tratte da tutte le tradizioni — greca, araba, ebraica, cabalistica, cristiana — per dimostrare che tutte le dottrine, correttamente interpretate, convergono nella stessa verità. Il papa fa condannare alcune tesi e l'evento non si tiene. È comunque il manifesto di un ideale di **sincretismo e tolleranza intellettuale** che segna il Rinascimento.

Pico introduce anche una distinzione decisiva tra **magia naturale**, che è conoscenza delle forze nascoste della natura e loro uso — e in questo senso è «la parte pratica della scienza naturale» — e magia **demoniaca**, superstiziosa, che rifiuta. È in questa forma che la magia rinascimentale ha contribuito, paradossalmente, all'atteggiamento operativo della scienza moderna: l'idea che sapere serva a **fare**.`
          },
          {
            n: 8, romano: "8", titolo: "L'aristotelismo e Pomponazzi: l'anima non è dimostrabile immortale",
            chiave: "Gli aristotelici rinascimentali si dividono su Averroè e Alessandro. Pomponazzi conclude: filosoficamente l'anima è mortale, e proprio per questo la virtù va cercata per sé stessa.",
            testo: `L'aristotelismo non muore affatto: resta la filosofia insegnata nelle **università**, soprattutto a Padova, ma cambia natura. Si torna al testo greco di Aristotele e ci si divide sulla lettura del *De anima*:
- gli **averroisti**: l'intelletto è unico per tutta l'umanità; l'immortalità è collettiva, non personale;
- gli **alessandristi** (da Alessandro di Afrodisia): l'anima è forma del corpo e perisce con esso.

**Pietro Pomponazzi** (1462–1525), nel *De immortalitate animae* (1516), sviluppa la seconda linea con estremo rigore. Il ragionamento: l'anima intellettiva, anche nell'attività più alta, ha sempre bisogno delle immagini sensibili, cioè del corpo; dunque, **secondo i principi di Aristotele**, non può sussistere senza di esso. Filosoficamente, l'immortalità **non è dimostrabile** (né, aggiunge, è dimostrabile il contrario).

La conclusione morale è la parte più notevole. Se l'anima è mortale, la morale crolla? Al contrario: chi è virtuoso per avere un premio o per paura di una punizione **non è virtuoso**, è un mercante o un servo. La virtù è **premio di sé stessa** e il vizio castigo di sé stesso. È una posizione di grande dignità etica, che anticipa la morale autonoma moderna (e Kant).

Pomponazzi resta formalmente ortodosso appellandosi alla distinzione tra ciò che si dimostra e ciò che si crede: come filosofo conclude per la mortalità, come cristiano crede l'immortalità perché rivelata. Gli avversari vi videro la vecchia «doppia verità»; il libro fu bruciato a Venezia, ma lui non fu condannato.

Nel *De incantationibus* Pomponazzi compie un altro passo, ancora più moderno: i fatti apparentemente miracolosi hanno **cause naturali** ancora ignote, e non vanno spiegati ricorrendo a demoni o angeli. È l'affermazione dell'ordine naturale come chiave di lettura di tutti i fenomeni.

**Il bilancio della disputa** tra platonici e aristotelici: i platonici danno al Rinascimento la metafisica dell'infinito, l'amore cosmico, la dignità dell'uomo; gli aristotelici padovani danno il rigore metodologico e l'attenzione alla natura — ed è dal loro ambiente che uscirà, non a caso, l'insegnamento di **Galileo**.`
          }
        ]
      },
      {
        titolo: "Capitolo 3 — Rinascimento e Riforma",
        sottotitolo: "Erasmo, Lutero, Calvino, la Controriforma",
        canti: [
          {
            n: 9, romano: "9", titolo: "Erasmo e la «filosofia di Cristo»",
            chiave: "Il più grande umanista europeo vuole riformare la Chiesa dall'interno con la filologia, l'ironia e la tolleranza. Sarà travolto da una riforma molto più radicale.",
            testo: `**Erasmo da Rotterdam** (1466–1536) incarna il progetto di un cristianesimo **umanistico**: semplice, evangelico, interiore, purificato dalle superstizioni e dalle sottigliezze scolastiche.

Gli strumenti:
- la **filologia**: pubblica il **Nuovo Testamento in greco** con nuova traduzione latina, mostrando che la Vulgata contiene errori. Anche qui il «ritorno al principio»;
- l'**ironia**: nell'*Elogio della follia* fa parlare la Follia stessa, che smaschera l'ipocrisia di teologi, monaci, principi e papi. È satira, ma con un fondo serio: la vera sapienza cristiana appare follia al mondo;
- la ***philosophia Christi***: la religione non è dottrina complicata né osservanza esteriore, è vita morale e imitazione di Cristo. Da qui l'insistenza sull'**educazione**, sulla pace tra i principi cristiani, sulla **tolleranza**.

**Lo scontro con Lutero sul libero arbitrio** è uno dei grandi dibattiti della storia del pensiero. Erasmo scrive il *De libero arbitrio* (1524): senza un minimo di libertà non ha senso comandare, esortare, giudicare; le Scritture sono in parte oscure e su questi punti conviene sospendere il giudizio. Lutero risponde con il *De servo arbitrio* (1525), durissimo: la volontà umana è come un cavallo cavalcato o da Dio o da Satana, e non sceglie da sé chi la monti; la Scrittura è chiarissima e non ammette prudenze accademiche.

Nella spaccatura tra le due Europe, Erasmo si trova schiacciato: troppo critico per i cattolici, troppo moderato per i protestanti. I suoi libri finiscono all'Indice. Ma la sua eredità — filologia biblica, tolleranza, irenismo — riemergerà nell'Illuminismo.`
          },
          {
            n: 10, romano: "10", titolo: "Lutero, Zwingli, Calvino: l'età della Riforma",
            chiave: "Sola fide, sola gratia, sola Scriptura. La salvezza non dipende dalle opere ma dalla grazia; ogni credente è sacerdote e legge la Bibbia da sé.",
            testo: `Il 31 ottobre **1517** **Martin Lutero** (1483–1546) affigge le 95 tesi contro le indulgenze. La contestazione di un abuso diventa in pochi anni una rottura teologica ed europea.

**I principi della Riforma luterana**:
- ***sola gratia***: la salvezza è dono gratuito di Dio, non merito;
- ***sola fide***: si è giustificati dalla fede, non dalle opere. Le buone azioni sono conseguenza della fede, non causa della salvezza;
- ***sola Scriptura***: unica autorità è la Bibbia, non la tradizione né il magistero. Da qui la traduzione in tedesco, atto fondativo anche della lingua letteraria tedesca;
- il **sacerdozio universale dei credenti**: non c'è differenza di natura tra clero e laici; ognuno sta davanti a Dio senza mediazioni;
- il ***servo arbitrio***: la natura umana è radicalmente corrotta dal peccato, e da sé non può nulla. È l'agostinismo portato all'estremo, contro l'ottimismo umanistico.

Sul piano filosofico Lutero è ostile alla ragione («la ragione è la prostituta del diavolo») quando pretende di giudicare la fede, e alla scolastica aristotelica. Ma la conseguenza indiretta della Riforma è enorme: affermando il rapporto diretto del singolo con Dio e con il testo, alimenta l'**individualismo**, la **libertà di coscienza** (pur non volendola come principio politico) e l'alfabetizzazione.

**Ulrich Zwingli** a Zurigo radicalizza il rifiuto delle immagini e interpreta l'eucaristia in senso puramente simbolico.

**Giovanni Calvino** (1509–1564), a Ginevra, costruisce il sistema più coerente e più rigido, esposto nell'*Istituzione della religione cristiana*. Al centro la **predestinazione assoluta**: Dio ha decretato ab aeterno chi è salvato e chi è dannato, e nessuna opera può cambiarlo. Non è una dottrina disperante per il credente: poiché il successo nella vocazione terrena può essere **segno** dell'elezione, ne discende un'etica del lavoro metodico, della sobrietà e del reinvestimento. È la celebre tesi di **Max Weber** ne *L'etica protestante e lo spirito del capitalismo*.

**La Controriforma o Riforma cattolica** risponde con il **Concilio di Trento** (1545–1563): riafferma tradizione e magistero accanto alla Scrittura, il valore delle opere, i sette sacramenti; riorganizza la formazione del clero con i seminari; istituisce l'**Indice dei libri proibiti** e potenzia l'Inquisizione romana. Nasce la Compagnia di Gesù, e con essa una scuola filosofica (la **seconda scolastica** spagnola, Suárez) e un modello educativo di grande efficacia. Il clima nuovo peserà su Bruno, condannato al rogo nel 1600, e su Galileo.`
          }
        ]
      },
      {
        titolo: "Capitolo 4 — Rinascimento e politica",
        sottotitolo: "Machiavelli, Guicciardini, il giusnaturalismo",
        canti: [
          {
            n: 11, romano: "11", titolo: "Machiavelli: l'autonomia della politica",
            chiave: "Non come si dovrebbe vivere, ma come si vive davvero. La politica ha regole proprie, indipendenti dalla morale: è la nascita della scienza politica moderna.",
            testo: `**Niccolò Machiavelli** (1469–1527), segretario della cancelleria fiorentina, scrive *Il Principe* (1513) e i *Discorsi sopra la prima deca di Tito Livio* dopo la caduta della repubblica e il proprio esilio.

**Il metodo: la verità effettuale.** «Essendo l'intento mio scrivere cosa utile a chi la intende, mi è parso più conveniente andare drieto alla verità effettuale della cosa che alla immaginazione di essa». Non si studia la città ideale (Platone, Agostino, gli utopisti) ma **come gli uomini agiscono realmente**. La politica diventa oggetto di osservazione, non di prescrizione morale.

**L'autonomia della politica.** È la tesi che ha reso Machiavelli scandaloso per cinque secoli: l'azione politica ha **criteri propri** — l'efficacia, la conservazione dello Stato — che non coincidono con quelli della morale privata. Il principe «impari a potere non essere buono, e usarlo e non usarlo secondo la necessità». Attenzione a non fraintendere: non è la tesi che «il fine giustifica i mezzi» in senso cinico (la frase non è sua in questa forma), ed è sempre un fine **politico e collettivo** — l'ordine, la sicurezza, l'indipendenza — a giustificare l'eccezione, mai il vantaggio personale.

**Virtù e fortuna.** La *virtù* non è la virtù morale: è energia, capacità, prontezza, capacità di adattarsi ai tempi. La *fortuna* è l'insieme delle circostanze non controllabili: «è arbitra della metà delle azioni nostre», ma lascia governare a noi l'altra metà. Machiavelli la paragona a un fiume in piena, contro cui però si possono costruire argini in tempo di calma.

**L'antropologia.** Gli uomini sono «ingrati, volubili, simulatori e dissimulatori, fuggitori de' pericoli, cupidi di guadagno»: bisogna presupporli cattivi, non perché lo siano sempre, ma perché chi governa deve prepararsi al peggio. Meglio essere temuti che amati, se non si può essere entrambi — ma mai **odiati**, perché l'odio distrugge il potere.

**La repubblica.** *Il Principe* è solo una parte del suo pensiero. Nei *Discorsi* Machiavelli è un **repubblicano** convinto: la libertà si conserva meglio in una repubblica; il **conflitto** tra plebe e senato non fu la rovina di Roma ma la causa della sua grandezza, perché produsse buone leggi. È una delle intuizioni più moderne e più feconde del suo pensiero: il dissenso è risorsa, non patologia.

**Guicciardini** ne è il contraltare realista e disincantato: diffida delle regole generali («le cose del mondo si giudicano per il caso per caso»), teorizza il «particulare», l'interesse personale, e scrive una monumentale *Storia d'Italia*. **Botero** più tardi codificherà la **«ragion di Stato»**, tentando di riconciliarla con la morale cattolica.`
          },
          {
            n: 12, romano: "12", titolo: "Il giusnaturalismo: Moro, Bodin, Grozio",
            chiave: "Contro il realismo machiavelliano, la ricerca di un diritto fondato sulla natura umana, valido sempre e ovunque, indipendente dalla religione.",
            testo: `Accanto alla linea realistica corre nel Cinque-Seicento la linea del **giusnaturalismo**: esiste un **diritto naturale**, iscritto nella ragione umana, che precede le leggi positive e le misura.

**Tommaso Moro** (1478–1535), cancelliere d'Inghilterra decapitato da Enrico VIII, scrive l'***Utopia*** (1516) — parola che conia lui, «non-luogo». Nell'isola immaginaria: abolizione della **proprietà privata**, che è la radice dei mali sociali; sei ore di lavoro per tutti; **tolleranza religiosa**; pena di morte quasi assente; e una critica durissima alla società inglese, dove «le pecore mangiano gli uomini» (le recinzioni dei pascoli che cacciavano i contadini). Il genere utopico prosegue con la *Città del Sole* di **Campanella** e la *Nuova Atlantide* di **Bacone**.

**Jean Bodin** (1530–1596), francese, nei *Sei libri della Repubblica* elabora il concetto moderno di **sovranità**: potere **assoluto e perpetuo** dello Stato, indivisibile, che fa le leggi senza riceverle da altri. È la risposta teorica alle guerre di religione: se lo Stato non ha un potere supremo, la società si dissolve nelle fazioni. Bodin è però anche il teorico della tolleranza tra confessioni e il sovrano resta vincolato alla legge divina e naturale.

**Ugo Grozio** (1583–1645), olandese, è considerato il padre del **diritto internazionale**. La sua tesi decisiva: il diritto naturale ha validità **anche se — per assurdo — Dio non esistesse** (*etiamsi daremus non esse Deum*). Perché il fondamento non è la rivelazione ma la **natura razionale e socievole dell'uomo**. È il passaggio a un diritto **laico e universale**, valido tra popoli di religione diversa. Nel *De iure belli ac pacis* pone le regole della guerra giusta e dei trattati, in un'Europa devastata dalla guerra dei Trent'anni.

Questa linea sfocerà direttamente in **Hobbes**, **Locke** e **Rousseau**: lo stato di natura, il contratto sociale, i diritti inalienabili sono tutti sviluppi del giusnaturalismo cinque-seicentesco.`
          }
        ]
      },
      {
        titolo: "Capitolo 5 — Rinascimento e naturalismo",
        sottotitolo: "Telesio, Bruno, Campanella",
        canti: [
          {
            n: 13, romano: "13", titolo: "Magia, scienze occulte e Telesio",
            chiave: "Prima della scienza matematica c'è una natura viva, percorsa da forze e simpatie. Telesio la studia «secondo i suoi propri principi», non secondo Aristotele.",
            testo: `Il Rinascimento è insieme l'età della magia e quella che prepara la scienza. Non è una contraddizione: **magia, alchimia e astrologia** condividono con la scienza moderna due convinzioni fondamentali — che la natura sia governata da leggi conoscibili, e che conoscerle serva a **operare**, a dominarle. Manca il metodo matematico e sperimentale; ma l'atteggiamento attivo, «faustiano», verso la natura nasce qui. Non a caso Bacone chiamerà la magia «la scienza che ancora non c'è».

**Bernardino Telesio** (1509–1588), calabrese, fonda a Cosenza un'accademia e scrive il *De rerum natura iuxta propria principia* — «Sulla natura delle cose secondo i propri principi». Il titolo è già un programma: la natura va spiegata con principi **suoi**, tratti dall'osservazione, non con le categorie della metafisica aristotelica.

I suoi principi sono tre:
- il **caldo**, forza espansiva, che ha sede nel Sole;
- il **freddo**, forza contrattiva, che ha sede nella Terra;
- la **materia** corporea, passiva e inerte, che i due agenti si contendono.

Tutti i fenomeni naturali nascono da questa lotta. È una fisica ingenua rispetto a Galileo, ma il metodo è nuovo: si parte dai **sensi**, non dai sillogismi. Telesio afferma con nettezza che «la natura si conosce con la sensazione», e che i sensi non ingannano.

L'uomo, per Telesio, è mosso da uno *spiritus* materiale sottile e dall'istinto fondamentale di **autoconservazione**: la virtù è ciò che conserva, il vizio ciò che distrugge. È una morale naturalistica che influenzerà Hobbes. Ammette poi, per non contrastare con la fede, un'anima superaggiunta e immortale — un'aggiunta che i contemporanei giudicarono un'appendice prudente.

Bacone lo chiamò «il primo degli uomini nuovi».`
          },
          {
            n: 14, romano: "14", titolo: "Giordano Bruno: l'universo infinito",
            chiave: "L'universo è infinito e contiene infiniti mondi; Dio non è fuori di esso ma ne è l'anima. Bruno paga con il rogo la coerenza della sua metafisica.",
            testo: `**Giordano Bruno** (1548–1600), domenicano fuggito dall'ordine, gira l'Europa (Ginevra, Parigi, Londra, Wittenberg, Praga), scrive dialoghi italiani di straordinaria potenza (*La cena de le ceneri*, *De la causa, principio et uno*, *De l'infinito universo e mondi*, *Spaccio de la bestia trionfante*), torna in Italia, viene arrestato dall'Inquisizione veneziana nel 1592 e arso vivo a Roma in Campo de' Fiori il **17 febbraio 1600**.

**L'infinito.** Bruno prende Copernico e va oltre: se Dio è infinito e onnipotente, il suo effetto non può essere finito. Dunque l'universo è **infinito**, senza centro e senza confini, e contiene **infiniti mondi** abitati. Il Sole è una stella tra le altre; non esiste alto e basso; cadono le sfere celesti, l'*extra-mondo*, la distinzione tra cielo incorruttibile e terra corruttibile. È la vera «rottura del cerchio chiuso»: più radicale, filosoficamente, dello stesso Copernico, che manteneva un universo finito.

**La natura e Dio.** Se l'universo è infinito, Dio non può essergli esterno: Bruno lo pensa come **anima del mondo**, principio immanente che vive in tutte le cose (**panpsichismo** e **panteismo**). Distingue **causa** (che agisce dall'esterno) e **principio** (che è interno all'effetto): Dio è principio. La materia non è passiva ma **viva**, ha in sé le forme, è «madre generante». *Natura naturans* e *natura naturata*: Dio come natura che produce e come natura prodotta — una formula che riprenderà Spinoza.

**L'eroico furore.** L'etica di Bruno è quella dell'entusiasmo conoscitivo: il *furore eroico* è la tensione infinita dell'uomo verso l'infinito, un amore che non si placa perché il suo oggetto non si esaurisce mai. Il filosofo è un cacciatore che, come Atteone, diventa preda di ciò che insegue. In questo Bruno è già romantico.

**La religione.** Attacca il cristianesimo come religione «per gli asini», che esalta l'ignoranza e l'obbedienza, e propone una religione naturale, civile, fondata sull'amore per la natura e sulle opere buone. Nello *Spaccio* immagina il cielo riformato scacciando i vizi e insediando le virtù.

Va detto con precisione, contro un luogo comune: Bruno **non fu condannato per l'eliocentrismo** ma per un insieme di tesi teologiche (negazione della Trinità, della divinità di Cristo, della creazione, panteismo, metempsicosi). Resta comunque, dall'Ottocento in poi, il simbolo della libertà di pensiero contro il dogma.`
          },
          {
            n: 15, romano: "15", titolo: "Campanella: sapere è potere, conoscere è sentire",
            chiave: "Tutte le cose sentono; l'autocoscienza è il fondamento indubitabile del sapere; e la società ideale è una teocrazia razionale governata dalla scienza.",
            testo: `**Tommaso Campanella** (1568–1639), domenicano calabrese, passa **ventisette anni in carcere** per aver organizzato una congiura contro il dominio spagnolo in Calabria, salvandosi dalla condanna a morte simulando la pazzia. In prigione scrive la maggior parte delle sue opere.

**La natura sente.** Riprendendo Telesio, Campanella sostiene il **pansensismo**: ogni essere, anche il minerale, ha una forma elementare di **sensibilità**, perché ogni cosa tende a conservarsi e per farlo deve in qualche modo «avvertire» ciò che le giova e ciò che la danneggia. Le tre «primalità» costitutive di ogni ente sono **potenza, sapienza, amore**.

**L'autocoscienza.** È il punto per cui Campanella interessa la filosofia moderna. Distingue la *cognitio innata*, la conoscenza immediata che l'anima ha di sé, dalla *cognitio illata*, quella dedotta dalle cose esterne. Posso dubitare di tutto ciò che è fuori di me, non del fatto che **io sento e so di sentire**. È una anticipazione del *cogito* cartesiano: Campanella scriverà a Cartesio riconoscendovi la propria idea.

**La magia e la scienza.** Sapere la natura significa poterla usare: la magia naturale è il sapere operativo per eccellenza, e il progresso tecnico è parte del progetto filosofico.

**La Città del Sole** (1602) è l'utopia teocratica di Campanella. La città è governata dal **Sole** o Metafisico, sacerdote e filosofo, assistito da tre principi: **Pon** (Potenza, guerra), **Sin** (Sapienza, scienze), **Mor** (Amore, riproduzione ed educazione). Vi sono la comunanza dei beni e delle donne, il lavoro di quattro ore per tutti, l'educazione data attraverso le mura dipinte con tutto lo scibile, la selezione razionale delle unioni. Ci appare inquietante, ed è la contraddizione tipica dell'utopia: una società perfettamente razionale che non lascia spazio all'individuo.

Campanella difese pubblicamente **Galileo** con l'*Apologia pro Galilaeo*, sostenendo che la Bibbia non insegna astronomia e che la libertà di ricerca è utile alla fede: una posizione coraggiosa, scritta da un uomo in catene.`
          }
        ]
      }
    ],
    personaggi: [
      {
        gruppo: "1. Concetti dell'Umanesimo",
        voci: [
          { nome: "Umanesimo / Rinascimento", alt: [], desc: "Il primo indica soprattutto la riscoperta filologica dei classici e la centralità dell'uomo; il secondo il fenomeno culturale complessivo, arte e scienza incluse." },
          { nome: "Ritorno al principio", alt: [], desc: "La convinzione che la verità stia nelle origini e vada liberata dalle incrostazioni: vale per i testi, la religione, il diritto, l'arte." },
          { nome: "Filologia", alt: ["Lorenzo Valla"], desc: "La tecnica di datare e autenticare i testi. Valla dimostra falsa la Donazione di Costantino: nasce la coscienza storica." },
          { nome: "Dignità dell'uomo", alt: ["Pico della Mirandola"], desc: "L'uomo non ha natura fissa: è libero artefice di sé. Anticipa l'idea moderna e perfino esistenzialista di libertà." },
          { nome: "Microcosmo", alt: ["copula mundi"], desc: "L'uomo contiene in sé tutti i gradi della realtà ed è il nodo che tiene insieme l'universo (Ficino)." },
          { nome: "Vita activa / contemplativa", alt: [], desc: "L'umanesimo civile fiorentino rivaluta l'impegno politico e familiare contro l'ideale monastico." },
          { nome: "Magia naturale", alt: [], desc: "Conoscenza operativa delle forze occulte della natura, distinta da Pico dalla magia demoniaca. Antenata dell'atteggiamento tecnico moderno." }
        ]
      },
      {
        gruppo: "2. Platonismo e aristotelismo",
        voci: [
          { nome: "Docta ignorantia", alt: ["Cusano"], desc: "Fra finito e infinito non c'è proporzione: sapere di non poter conoscere Dio è la vera sapienza. Il poligono non diventa mai cerchio." },
          { nome: "Coincidentia oppositorum", alt: [], desc: "Nell'infinito massimo e minimo, retta e curva coincidono. La ragione discorsiva cede all'intuizione intellettuale." },
          { nome: "Universo senza centro", alt: [], desc: "Se Dio è infinito, l'universo è indefinito: nessun luogo è il centro. Metafisica, non astronomia, ma prepara Bruno." },
          { nome: "Pia philosophia", alt: ["Ficino"], desc: "Filosofia e religione dicono la stessa verità; Platone è quasi un profeta. Traduce Platone, Plotino e il Corpus Hermeticum." },
          { nome: "Amore platonico", alt: [], desc: "Forza cosmica che unisce il mondo e riconduce a Dio: dal Commento al Simposio di Ficino passa in tutta la cultura europea." },
          { nome: "Concordia", alt: ["900 tesi"], desc: "Il progetto di Pico: tutte le tradizioni, ben interpretate, convergono nella stessa verità. Manifesto di sincretismo e tolleranza." },
          { nome: "Averroisti / alessandristi", alt: [], desc: "Le due letture rinascimentali del De anima: intelletto unico per tutti, oppure anima che perisce col corpo." },
          { nome: "Pomponazzi", alt: ["De immortalitate animae"], desc: "L'immortalità non è dimostrabile filosoficamente. Ma la virtù è premio di sé stessa: chi è buono per il premio non è buono." }
        ]
      },
      {
        gruppo: "3. Riforma e politica",
        voci: [
          { nome: "Philosophia Christi", alt: ["Erasmo"], desc: "Cristianesimo semplice, interiore, morale, purificato dalle superstizioni. Con filologia, ironia e tolleranza." },
          { nome: "Libero / servo arbitrio", alt: [], desc: "La disputa Erasmo–Lutero: senza libertà non ha senso comandare (Erasmo); la volontà è cavalcata da Dio o da Satana (Lutero)." },
          { nome: "Sola fide, sola gratia, sola Scriptura", alt: [], desc: "I tre principi luterani: salvezza per fede, per grazia, con la sola autorità della Bibbia." },
          { nome: "Sacerdozio universale", alt: [], desc: "Nessuna differenza di natura tra clero e laici: ognuno sta davanti a Dio senza mediazione. Alimenta individualismo e alfabetizzazione." },
          { nome: "Predestinazione calvinista", alt: ["Weber"], desc: "Dio ha deciso ab aeterno chi si salva. Il successo nella vocazione come segno dell'elezione: da qui, secondo Weber, l'etica del capitalismo." },
          { nome: "Concilio di Trento", alt: ["Controriforma"], desc: "Riafferma tradizione, opere e sacramenti; istituisce seminari e Indice dei libri proibiti. Il clima che condanna Bruno e Galileo." },
          { nome: "Verità effettuale", alt: ["Machiavelli"], desc: "Studiare come gli uomini agiscono davvero, non come dovrebbero: metodo della scienza politica moderna." },
          { nome: "Virtù e fortuna", alt: [], desc: "La virtù è energia e capacità di adattarsi ai tempi; la fortuna è arbitra di metà delle azioni: l'altra metà si governa con argini preparati per tempo." },
          { nome: "Autonomia della politica", alt: [], desc: "L'azione politica ha criteri propri (efficacia, conservazione dello Stato) distinti dalla morale privata." },
          { nome: "Conflitto come risorsa", alt: ["Discorsi"], desc: "Nei Discorsi Machiavelli è repubblicano: il contrasto tra plebe e senato produsse le buone leggi di Roma." },
          { nome: "Utopia", alt: ["Tommaso Moro"], desc: "«Non-luogo»: isola senza proprietà privata, con sei ore di lavoro e tolleranza religiosa. Critica dell'Inghilterra reale." },
          { nome: "Sovranità", alt: ["Bodin"], desc: "Potere assoluto, perpetuo e indivisibile dello Stato: risposta alle guerre di religione." },
          { nome: "Etiamsi daremus non esse Deum", alt: ["Grozio"], desc: "Il diritto naturale varrebbe anche se Dio non esistesse, perché si fonda sulla natura razionale e socievole dell'uomo. Nasce il diritto laico e internazionale." }
        ]
      },
      {
        gruppo: "4. Naturalismo",
        voci: [
          { nome: "Iuxta propria principia", alt: ["Telesio"], desc: "La natura va spiegata con principi propri tratti dall'osservazione, non con la metafisica aristotelica. Caldo, freddo e materia." },
          { nome: "Universo infinito", alt: ["Bruno"], desc: "Infiniti mondi, nessun centro, nessuna sfera celeste: l'effetto di un Dio infinito non può essere finito." },
          { nome: "Causa e principio", alt: [], desc: "La causa agisce dall'esterno, il principio è interno all'effetto. Dio è principio: immanente, anima del mondo." },
          { nome: "Natura naturans / naturata", alt: [], desc: "La natura come potenza che produce e come insieme delle cose prodotte. Formula ripresa da Spinoza." },
          { nome: "Eroico furore", alt: [], desc: "La tensione infinita dell'uomo verso l'infinito, amore che non si placa. Bruno anticipa il sentimento romantico." },
          { nome: "Pansensismo", alt: ["Campanella"], desc: "Ogni essere ha una forma di sensibilità, perché tende a conservarsi. Primalità: potenza, sapienza, amore." },
          { nome: "Cognitio innata", alt: ["autocoscienza"], desc: "Posso dubitare di tutto tranne che io sento e so di sentire: anticipazione del cogito cartesiano." },
          { nome: "Città del Sole", alt: [], desc: "Utopia teocratica governata dal Metafisico e da Pon, Sin, Mor: comunanza dei beni, quattro ore di lavoro, sapere dipinto sulle mura." }
        ]
      }
    ]
  }

  ,

  /* ------------------------------------------------ UNITÀ 2 */
  "rivoluzione-scientifica": {
    id: "rivoluzione-scientifica",
    titolo: "La rivoluzione scientifica",
    autore: "Unità 2 · Galilei e Bacone",
    sottotitolo: "Il libro della natura è scritto in lingua matematica",
    epoca: "1543 – 1687",
    lingua: "Da Copernico a Newton",
    tag: ["Copernico", "Galilei", "Metodo", "Bacone", "Processo"],
    epigrafe: "La filosofia è scritta in questo grandissimo libro che continuamente ci sta aperto innanzi agli occhi.",
    colore: "blu",
    parti: [
      {
        titolo: "Capitolo 1 — La rivoluzione scientifica",
        sottotitolo: "Che cosa cambia nel modo di guardare la natura",
        canti: [
          {
            n: 1, romano: "1", titolo: "Un evento di importanza capitale",
            chiave: "Tra il 1543 e il 1687 nasce un modo nuovo di conoscere: non solo nuove scoperte, ma una nuova idea di che cosa significhi sapere.",
            testo: `Si chiama **rivoluzione scientifica** il periodo che va convenzionalmente dal **1543** — anno di pubblicazione del *De revolutionibus orbium coelestium* di **Copernico** e del *De humani corporis fabrica* di **Vesalio** — al **1687**, anno dei *Principia* di **Newton**.

Il punto da capire è che non si tratta soltanto di scoperte. Le scoperte, prese una a una, non farebbero una rivoluzione: si tratta di un cambiamento nel **concetto stesso di sapere**. Prima si sapeva commentando i testi degli antichi; dopo si sa **misurando, sperimentando e calcolando**.

Le conseguenze investono tutto:
- la **fisica** e l'**astronomia** (cade il cosmo aristotelico-tolemaico);
- la **filosofia** (il problema del metodo diventa il problema centrale: da qui Cartesio, Bacone, e più tardi Kant);
- la **religione** (il rapporto tra Bibbia e scienza);
- la **tecnica** e l'**economia** (il sapere diventa potere operativo);
- l'**idea di uomo** (non più al centro dell'universo, ma capace di comprenderlo).

Una precisazione importante: la rivoluzione scientifica non nasce dal nulla, e non nasce contro il Rinascimento. Vi contribuiscono il naturalismo rinascimentale (la natura ha leggi proprie), il neoplatonismo (l'ordine matematico del cosmo, il Sole come immagine di Dio), la tecnica degli artigiani e degli ingegneri, e perfino la magia, con la sua ambizione di **dominare** la natura.`
          },
          {
            n: 2, romano: "2", titolo: "Il nuovo modo di vedere la natura e di concepire la scienza",
            chiave: "La natura non è più un organismo pieno di fini e di qualità, ma una macchina fatta di materia in movimento, descrivibile con numeri e figure.",
            testo: `**Il nuovo modo di vedere la natura.** Si passa da una concezione **organicistica e qualitativa** a una **meccanicistica e quantitativa**.
- Prima: la natura è un organismo vivente, gerarchico, pieno di **fini** (la pietra cade perché «cerca» il suo luogo naturale) e di **qualità** (caldo, freddo, secco, umido, nobile, vile). Il cielo è di natura diversa dalla terra.
- Dopo: la natura è una **macchina**, un insieme di corpi in movimento retti da **leggi matematiche uguali ovunque**. Non ci sono fini, ci sono cause efficienti; non ci sono qualità, ci sono grandezze misurabili; cielo e terra obbediscono alle stesse leggi.

Da qui la distinzione, che sarà di Galileo e poi di Locke, tra **qualità oggettive** (forma, numero, movimento, posizione: proprie del corpo) e **qualità soggettive** (colore, sapore, odore, calore: che esistono solo nel soggetto senziente). La scienza si occupa solo delle prime.

**Il nuovo modo di concepire la scienza.**
- La scienza è **pubblica e verificabile**: chiunque, ripetendo l'esperimento, deve ottenere lo stesso risultato. Cade la scienza come sapere iniziatico o come commento all'autorità.
- La scienza è **ipotetica e progressiva**: le teorie valgono finché reggono al confronto con i fatti, e possono essere corrette. Non è più un sistema chiuso e definitivo.
- La scienza è **operativa**: serve a fare, a costruire, a modificare. «Sapere è potere» dirà Bacone.
- La scienza è un'**impresa collettiva**: nascono le accademie (Accademia dei Lincei 1603, del Cimento 1657, Royal Society 1662, Académie des sciences 1666) e le riviste scientifiche.

**Le premesse storiche.** Contribuiscono: la nascita di una borghesia interessata alla tecnica; le esigenze pratiche della navigazione, della balistica, dell'idraulica; la stampa, che diffonde i risultati; la nuova figura dell'**ingegnere-scienziato** (Leonardo, Galileo) che unisce mano e mente, superando il vecchio disprezzo aristocratico per il lavoro manuale.

**Le forze ostili** non mancano: le autorità religiose (cattoliche e protestanti), gli aristotelici delle università, e più tardi una parte della cultura umanistica che vede nella scienza un impoverimento del mondo. Il contrasto tra le «due culture» comincia qui.`
          },
          {
            n: 3, romano: "3", titolo: "La rivoluzione astronomica: da Copernico a Newton",
            chiave: "Copernico sposta il Sole al centro, Keplero rende le orbite ellittiche, Galileo osserva col cannocchiale, Newton unifica cielo e terra con la gravitazione.",
            testo: `**Il cosmo degli antichi.** Terra immobile al centro; pianeti e stelle fissati su sfere concentriche di etere incorruttibile; moti circolari e uniformi perché il cerchio è la figura perfetta; l'universo finito, chiuso dalla sfera delle stelle fisse; una netta differenza di natura tra mondo sublunare (corruttibile) e celeste (immutabile). Il sistema di **Tolomeo**, con epicicli e deferenti, «salvava i fenomeni» con buona precisione.

**Copernico** (1473–1543). Sposta il Sole al centro e fa ruotare la Terra su sé stessa e attorno al Sole. Le motivazioni sono in parte estetiche e neoplatoniche (**semplicità** e armonia: il Sole «lampada del mondo» posto sul trono regale), non ancora empiriche. Il sistema resta con orbite **circolari** e ha bisogno ancora di epicicli. La prefazione anonima di Osiander lo presentava come una semplice ipotesi di calcolo, e questo lo protesse per decenni.

**Tycho Brahe** (1546–1601) raccoglie le osservazioni più precise mai fatte a occhio nudo e, osservando una **nova** e le comete, dimostra che i cieli **cambiano**: crolla l'incorruttibilità celeste.

**Keplero** (1571–1630), usando i dati di Tycho, formula le tre leggi: orbite **ellittiche** con il Sole in un fuoco; velocità areolare costante; relazione tra periodo e distanza. È il colpo decisivo al dogma del moto circolare — e Keplero vi arriva pur essendo mosso da una profonda fede nell'armonia matematica e musicale del cosmo.

**Galileo** (1564–1642) fornisce le prove osservative con il **cannocchiale**: le montagne della Luna (la Luna è fatta come la Terra), i satelliti di Giove (esistono centri di rotazione diversi dalla Terra), le fasi di Venere (Venere gira attorno al Sole), le macchie solari (il Sole non è perfetto), la Via Lattea risolta in stelle.

**Newton** (1642–1727) chiude il ciclo con la **legge di gravitazione universale**: la stessa forza che fa cadere la mela tiene la Luna in orbita. Cielo e terra obbediscono alle stesse leggi: l'unificazione è completa.

**Il significato filosofico.** Il mondo **chiuso** diventa universo **infinito** (Bruno lo aveva già affermato per via metafisica). L'uomo perde la posizione centrale — è la prima delle tre «ferite narcisistiche» di cui parlerà Freud, seguita da Darwin e dalla psicoanalisi. Ma insieme guadagna la scoperta che la propria ragione **può leggere l'universo**.`
          }
        ]
      },
      {
        titolo: "Capitolo 2 — Galilei",
        sottotitolo: "Il metodo, il processo, la scienza autonoma",
        canti: [
          {
            n: 4, romano: "4", titolo: "Una vita consacrata alla scienza",
            chiave: "Pisano, professore a Padova, poi matematico del granduca. Le sue opere sono dialoghi in volgare, scritti perché tutti possano seguirli: la scienza esce dalle università.",
            testo: `**Galileo Galilei** nasce a Pisa nel **1564** e muore ad Arcetri nel **1642**. Studia medicina, passa alla matematica, insegna a Pisa e poi per diciotto anni a **Padova** — «i diciotto anni migliori della mia vita», nella Repubblica di Venezia, dove la libertà di ricerca era maggiore. Nel 1610 accetta l'incarico di matematico e filosofo del granduca di Toscana e torna a Firenze: una scelta di prestigio che lo priverà della protezione veneziana.

Le opere principali:
- il ***Sidereus Nuncius*** (1610), il resoconto delle prime osservazioni col cannocchiale, un successo europeo immediato;
- le **lettere copernicane** (a Castelli, a Cristina di Lorena, 1613–1615), dove affronta il rapporto tra Scrittura e scienza;
- ***Il Saggiatore*** (1623), il grande manifesto del metodo;
- il ***Dialogo sopra i due massimi sistemi del mondo*** (1632), che gli costa il processo;
- i ***Discorsi e dimostrazioni matematiche intorno a due nuove scienze*** (1638), scritti da recluso e pubblicati in Olanda: la fondazione della dinamica.

Una scelta stilistica è essa stessa una posizione filosofica: Galileo scrive **in volgare** e in forma di **dialogo**, con tre personaggi — Salviati (il copernicano), Sagredo (l'uomo di buon senso) e Simplicio (l'aristotelico). Vuole rivolgersi non ai professori ma a chiunque abbia intelligenza e curiosità. La nuova scienza nasce fuori dalle università, e contro di esse.`
          },
          {
            n: 5, romano: "5", titolo: "L'autonomia della scienza e il rifiuto del principio d'autorità",
            chiave: "Due libri, due linguaggi: la Bibbia insegna «come si vadia in cielo», la natura «come vadia il cielo». Non possono contraddirsi perché parlano di cose diverse.",
            testo: `Galileo combatte su due fronti.

**Contro i teologi.** Nella *Lettera a Cristina di Lorena* espone la dottrina dei **due libri**: Dio si è rivelato nella Scrittura e nella natura, ed è autore di entrambe, dunque non possono contraddirsi. Ma parlano linguaggi diversi:
- la **Scrittura** si adatta alla capacità del popolo, usa immagini, e ha un fine morale e salvifico. La citazione famosa, ripresa dal cardinale Baronio: *«l'intenzione dello Spirito Santo è d'insegnarci come si vadia in cielo, e non come vadia il cielo»*;
- la **natura** è «inesorabile e immutabile», non si cura che le sue ragioni siano comprese, e parla il linguaggio delle dimostrazioni necessarie.

Ne segue una regola precisa: quando una tesi scientifica è **dimostrata**, non può essere confutata da un passo biblico; semmai va reinterpretato il passo. Ma quando è solo probabile, prudenza. È esattamente la posizione che gli sarà contestata: si diceva che l'interpretazione della Scrittura non spetta a un matematico laico.

**Contro gli aristotelici.** L'accusa è di sostituire l'osservazione con la lettura: sono i «filosofi di carta», quelli che «non vogliono guardare nel cannocchiale» perché il testo di Aristotele dice diversamente. Galileo replica che Aristotele stesso, se vivesse oggi, cambierebbe idea davanti a nuove evidenze — perché il vero aristotelismo è il metodo, non le conclusioni.

Il principio generale è quello di **autonomia**: la scienza ha un proprio ambito, un proprio metodo e un proprio criterio di verità, e non deve rendere conto né alla teologia né alla filosofia scolastica. È un principio che vale ancora oggi, ed è la vera posta in gioco del processo.`
          },
          {
            n: 6, romano: "6", titolo: "Le scoperte fisiche e astronomiche",
            chiave: "La caduta dei gravi, il piano inclinato, il pendolo, il principio d'inerzia e la relatività galileiana: la nascita della dinamica moderna.",
            testo: `**Gli studi fisici.** Galileo fonda la **dinamica** studiando il movimento:
- la **caduta dei gravi**: in assenza di resistenza, tutti i corpi cadono con la stessa accelerazione, indipendentemente dal peso (contro Aristotele). Il moto è **uniformemente accelerato**, e gli spazi percorsi stanno come i quadrati dei tempi;
- il **piano inclinato**: usato per «diluire» la caduta e renderla misurabile — un esempio perfetto di come si costruisce un esperimento;
- l'**isocronismo del pendolo**: le oscillazioni hanno la stessa durata indipendentemente dall'ampiezza (per piccole oscillazioni); da qui l'orologio a pendolo;
- il **moto dei proietti**: composizione di un moto rettilineo uniforme e di uno accelerato, che dà una **parabola**;
- il **principio d'inerzia**: un corpo su un piano orizzontale privo di attriti, una volta messo in moto, continuerebbe indefinitamente. È l'idea che demolisce l'intera fisica aristotelica, dove il movimento richiede un motore costante. Newton la formulerà nella forma definitiva;
- il **principio di relatività galileiana**: nella stiva di una nave che si muove di moto uniforme, non si può capire con nessun esperimento interno se la nave sia ferma o in movimento. È la risposta decisiva all'obiezione degli antiCopernicani («se la Terra si muove, un sasso lasciato cadere dalla torre dovrebbe cadere lontano»).

**Il cannocchiale.** Galileo non lo inventa ma lo perfeziona (arriva a 30 ingrandimenti) e soprattutto lo **punta al cielo**, cioè trasforma uno strumento pratico in strumento di conoscenza. Le sue osservazioni demoliscono a una a una le tesi della cosmologia aristotelico-tolemaica: la Luna ha montagne e valli come la Terra; Giove ha quattro satelliti; Venere ha le fasi come la Luna, il che prova che ruota attorno al Sole; il Sole ha macchie mobili, dunque non è incorruttibile; la Via Lattea è fatta di stelle innumerevoli.

Contro chi obiettava che lo strumento potesse ingannare, Galileo dovette anche **giustificarne il valore scientifico**: un problema nuovissimo, quello dell'attendibilità della strumentazione, che accompagnerà per sempre la scienza.`
          },
          {
            n: 7, romano: "7", titolo: "Il metodo: sensate esperienze e necessarie dimostrazioni",
            chiave: "Due gambe: l'esperienza sensibile e la dimostrazione matematica. Si formula un'ipotesi, se ne deducono conseguenze misurabili, si verifica con l'esperimento.",
            testo: `Il metodo galileiano si riassume nella formula: ***sensate esperienze e necessarie dimostrazioni***.
- Le **sensate esperienze** sono le osservazioni e gli esperimenti, cioè il momento **induttivo** e empirico: si parte dai fatti.
- Le **necessarie dimostrazioni** sono i ragionamenti matematici rigorosi, il momento **deduttivo**: dall'ipotesi si traggono conseguenze necessarie.

I due momenti si intrecciano in un ciclo che è, in sostanza, il metodo sperimentale moderno:
- **osservazione** di un fenomeno;
- formulazione di un'**ipotesi**, spesso in forma matematica;
- **deduzione** delle conseguenze verificabili dell'ipotesi;
- **esperimento** («cimento») per controllarle, in condizioni artificiali e ripetibili;
- **verifica o falsificazione** dell'ipotesi.

Due precisazioni importanti. Primo: l'esperimento non è semplice osservazione. È un **domandare alla natura** in condizioni costruite apposta, isolando le variabili, eliminando gli attriti, misurando. È «anatomia»: si fa dire alla natura ciò che spontaneamente non direbbe.

Secondo: l'esperimento include il **caso ideale**, l'esperimento mentale. Il piano perfettamente liscio, il vuoto assoluto non esistono; sono **idealizzazioni matematiche** che permettono di formulare la legge, alla quale i casi reali si avvicinano. Questa è la mossa concettuale più difficile e più feconda della scienza moderna.

**La matematizzazione della natura.** È il presupposto filosofico del metodo, ed è enunciato nella pagina più famosa del *Saggiatore*: «La filosofia è scritta in questo grandissimo libro che continuamente ci sta aperto innanzi a gli occhi (io dico l'universo), ma non si può intendere se prima non s'impara a intender la lingua, e conoscer i caratteri, ne' quali è scritto. Egli è scritto in lingua matematica, e i caratteri son triangoli, cerchi, ed altre figure geometriche, senza i quali mezi è impossibile a intenderne umanamente parola».

Non è solo una scelta di strumento: è una tesi **ontologica**. La natura *è* strutturata matematicamente. Da qui la distinzione tra qualità oggettive (figura, grandezza, numero, moto: reali) e soggettive (colori, sapori, odori, suoni: che «non sono altro che puri nomi» fuori dal soggetto).

**Il «realismo» di Galileo.** Riteneva che la scienza cogliesse la struttura reale del mondo, non solo apparenze utili al calcolo. Sulla portata della conoscenza umana distingue: **estensivamente** sappiamo pochissimo rispetto a Dio, ma **intensivamente**, nelle poche verità matematiche che dimostriamo, «l'intender nostro pareggia il divino nella certezza obiettiva». È un'affermazione fortissima — e fu una di quelle che gli furono contestate.`
          },
          {
            n: 8, romano: "8", titolo: "Il processo",
            chiave: "Ammonito nel 1616, condannato nel 1633 all'abiura e agli arresti. Il conflitto non è tra fede e scienza, ma su chi abbia l'autorità di dire come è fatto il mondo.",
            testo: `**Le prime accuse e l'ammonizione del 1616.** Le lettere copernicane suscitano l'accusa di invadere il campo dei teologi. Nel **1616** il Sant'Uffizio dichiara la tesi eliocentrica «stolta e assurda in filosofia e formalmente eretica»; il *De revolutionibus* di Copernico è sospeso «donec corrigatur». Il cardinale **Bellarmino** ammonisce personalmente Galileo: può trattare l'eliocentrismo come **ipotesi matematica**, non come descrizione della realtà.

**Il Dialogo e la condanna del 1633.** Eletto papa **Urbano VIII** (Maffeo Barberini), che era stato suo estimatore, Galileo ottiene il permesso di scrivere un'opera che presenti i due sistemi in modo equilibrato. Ma il ***Dialogo sopra i due massimi sistemi*** (1632) è tutto fuorché equilibrato: Simplicio, che sostiene le tesi aristoteliche, fa la figura dello sciocco — e nella sua bocca è messo l'argomento prediletto del papa (Dio, essendo onnipotente, potrebbe produrre gli stessi fenomeni in infiniti modi, quindi la scienza non può pretendere certezza). Urbano VIII si sente deriso.

Il processo si conclude nel **giugno 1633**: Galileo, quasi settantenne e malato, minacciato di tortura, **abiura** in ginocchio («con cuor sincero e fede non finta abiuro, maledico e detesto li suddetti errori et heresie»). È condannato al carcere, commutato negli arresti domiciliari ad Arcetri, dove resterà fino alla morte, cieco negli ultimi anni. La frase «eppur si muove» è leggendaria, non documentata.

**Come giudicare la vicenda.** Alcune precisazioni sono necessarie per non ridurla a uno slogan:
- non è uno scontro tra «fede» e «ragione»: Galileo era credente sincero, e molti uomini di Chiesa erano dalla sua parte (Campanella lo difese, i Gesuiti del Collegio Romano ne confermarono le osservazioni);
- è uno scontro sull'**autorità cognitiva**: chi ha il diritto di stabilire come è fatto il mondo, e chi può interpretare la Scrittura;
- pesano anche fattori contingenti: il clima della Controriforma e della guerra dei Trent'anni, la rivalità tra ordini religiosi, il carattere polemico di Galileo, l'orgoglio ferito del papa;
- va riconosciuto che, sul piano strettamente scientifico, nel 1633 la prova decisiva dell'eliocentrismo mancava ancora (la parallasse stellare sarà misurata solo nel 1838): la posizione «è solo un'ipotesi» non era priva di ragioni tecniche. Ciò che è indifendibile è la pretesa di risolvere la questione con un tribunale.

**La riabilitazione.** La condanna fu revocata solo nel 1757 (per il divieto dei libri copernicani) e nel 1822; nel **1992** Giovanni Paolo II riconobbe formalmente l'errore commesso dai giudici, parlando di una «tragica incomprensione reciproca».`
          }
        ]
      },
      {
        titolo: "Capitolo 3 — Bacone",
        sottotitolo: "Sapere è potere: il metodo induttivo",
        canti: [
          {
            n: 9, romano: "9", titolo: "Il profeta della tecnica",
            chiave: "Bacone non fa scoperte scientifiche: progetta la scienza come impresa collettiva al servizio dell'umanità. «Sapere è potere», e si comanda la natura obbedendole.",
            testo: `**Francesco Bacone** (Francis Bacon, 1561–1626), lord cancelliere d'Inghilterra, caduto in disgrazia per corruzione, dedica gli ultimi anni al progetto di una *Instauratio magna*, la «grande restaurazione» del sapere umano. Le opere: il *Novum Organum* (1620, il «nuovo strumento», in contrapposizione all'*Organon* aristotelico), il *De dignitate et augmentis scientiarum*, la *Nuova Atlantide* (postuma).

Bacone non è uno scienziato: non conosceva bene la matematica, rifiutò il copernicanesimo, non fece scoperte. La sua grandezza è **filosofica e programmatica**: è il primo a definire il **senso sociale** della scienza.

**Sapere è potere** (*scientia est potentia*, o meglio: *tantum possumus quantum scimus*). La conoscenza non ha valore contemplativo ma **operativo**: serve a migliorare la condizione umana, ad «ampliare i confini dell'impero umano sulle cose». Bacone individua nella stampa, nella polvere da sparo e nella bussola tre invenzioni che hanno cambiato il mondo più di qualunque teoria filosofica.

**Il rapporto con la natura.** La formula è calibratissima: *natura non nisi parendo vincitur* — **la natura non si vince se non obbedendole**. Non si domina la natura violandone le leggi, ma conoscendole e assecondandole. È la sintesi tra l'ambizione operativa della magia e il rigore del sapere: Bacone critica infatti duramente i maghi e gli alchimisti, che vogliono i risultati senza il metodo.

**La Nuova Atlantide** descrive l'isola di Bensalem, dove la **Casa di Salomone** è un'istituzione statale di ricerca: laboratori, orti botanici, osservatori, una divisione del lavoro scientifico con ruoli specializzati (chi raccoglie dati, chi fa esperimenti, chi elabora assiomi). È la prima immagine moderna della **ricerca organizzata** e ha ispirato direttamente la fondazione della Royal Society.`
          },
          {
            n: 10, romano: "10", titolo: "Gli idoli della mente",
            chiave: "Prima di conoscere bisogna liberarsi dai pregiudizi: quelli della specie umana, quelli individuali, quelli del linguaggio, quelli delle dottrine tramandate.",
            testo: `La *pars destruens* del metodo baconiano è la teoria degli **idoli** (*idola*, immagini false): i pregiudizi che deformano la mente e che vanno riconosciuti ed eliminati prima di poter conoscere. Sono quattro.

- **Idoli della tribù** (*idola tribus*): comuni a tutta la **specie umana**. La nostra mente tende a vedere più ordine e regolarità di quanti ce ne siano, a generalizzare in fretta, a farsi influenzare dalla volontà e dalle emozioni, a ricordare le conferme e dimenticare le smentite. È una descrizione impressionante di ciò che la psicologia contemporanea chiama *bias cognitivi*. Bacone usa l'immagine dello **specchio deformante**: l'intelletto umano è come uno specchio irregolare che mescola la propria natura a quella delle cose.
- **Idoli della caverna** (*idola specus*): propri di **ciascun individuo**, derivanti da carattere, educazione, letture, abitudini, ambiente. Ciascuno guarda il mondo dalla propria caverna, e vi porta le proprie ossessioni. L'immagine è ripresa da Platone, ma il senso è diverso: qui non è la condizione umana in generale, è la deformazione personale.
- **Idoli del mercato** (*idola fori*): nascono dal **linguaggio** e dal commercio delle parole tra gli uomini. Le parole sono state imposte secondo la comprensione del volgo, e trascinano la mente: nomi di cose che non esistono (fortuna, primo mobile) o nomi confusi. È il più insidioso degli idoli, e apre un tema — la critica del linguaggio come fonte di errore filosofico — che arriverà fino a Wittgenstein.
- **Idoli del teatro** (*idola theatri*): derivano dalle **filosofie tramandate** e dalle regole errate delle dimostrazioni. I sistemi filosofici sono come tante commedie recitate su un palcoscenico, che rappresentano mondi immaginari. Bacone ne distingue tre tipi: i sofistici (Aristotele, che piega l'esperienza alla logica), gli empirici (chi generalizza da poche esperienze), i superstiziosi (chi mescola teologia e fisica).

Il senso complessivo: la mente umana non è una tabula rasa neutra, è **attivamente distorcente**. Prima di costruire, bisogna sgombrare.`
          },
          {
            n: 11, romano: "11", titolo: "Il metodo induttivo: le tavole e la forma",
            chiave: "Non l'induzione per semplice enumerazione, ma un procedimento che raccoglie i casi, li confronta e soprattutto cerca le eccezioni: nasce l'idea di esperimento cruciale.",
            testo: `La *pars construens* è il **metodo induttivo**, che Bacone contrappone al sillogismo aristotelico, giudicato incapace di scoprire alcunché di nuovo (dalle premesse non esce più di quanto vi sia già).

**Le tre vie.** Bacone usa la celebre metafora degli animali:
- la **formica** è l'empirico puro: accumula dati senza elaborarli;
- il **ragno** è il dogmatico razionalista: tesse teorie tratte dalla propria mente, senza materiali;
- l'**ape** è lo scienziato: raccoglie il materiale dai fiori dell'esperienza e lo **trasforma** con l'elaborazione dell'intelletto.

**Le fasi del metodo.**
1. **Storia naturale**: raccogliere in modo sistematico e senza pregiudizi tutti i fatti relativi al fenomeno studiato (la «natura» che si vuole spiegare, per esempio il calore).
2. **Le tre tavole**:
   - **tavola della presenza**: tutti i casi in cui il fenomeno **compare** (i raggi del sole, il fuoco, l'attrito, la calce viva…);
   - **tavola dell'assenza**: i casi simili in cui il fenomeno **non compare** (i raggi della luna, che pure sono raggi ma non scaldano);
   - **tavola dei gradi** o comparativa: i casi in cui il fenomeno **varia di intensità**, e con che cosa varia.
3. **Esclusione** (*exclusio*): eliminare tutto ciò che è presente quando il fenomeno manca, o assente quando compare, o non varia con esso. È l'operazione centrale, ed è già l'idea di **controllo delle variabili**.
4. **Vendemmia prima** (*vindemiatio prima*): la prima ipotesi provvisoria sulla **forma**.
5. Verifica con le **istanze prerogative**, tra cui la famosa ***instantia crucis***, «istanza del bivio»: il caso decisivo che permette di scegliere tra due spiegazioni concorrenti. Da qui l'espressione **esperimento cruciale**.

**La teoria della forma.** Che cosa cerca l'induzione? La **forma**, che in Bacone non è la forma aristotelica ma qualcosa di molto più moderno: la **legge** costante che governa un fenomeno, la sua struttura interna. Trovare la forma del calore significa trovare che cos'è il calore *sempre*, e quindi poterlo produrre a piacere. Bacone conclude, con notevole intuizione, che il calore è una forma di **movimento** delle particelle.

**I limiti.** Bacone sottovaluta la **matematica**, non capisce il ruolo delle ipotesi creative (crede che i fatti «parlino» quasi da sé, se raccolti bene), e la sua induzione non risolve il problema logico che Hume porrà. Ma il suo contributo resta grande: la centralità dell'**esperimento**, l'idea di **esclusione** e di prova negativa, e soprattutto la visione della scienza come impresa **collettiva, pubblica e utile**.

**Il confronto con Galileo** è istruttivo: Bacone dà la filosofia della scienza (perché e per chi), Galileo dà il metodo effettivo (matematica più esperimento). La scienza moderna nascerà dall'unione dei due.`
          }
        ]
      }
    ],
    personaggi: [
      {
        gruppo: "1. La rivoluzione scientifica",
        voci: [
          { nome: "Meccanicismo", alt: [], desc: "La natura come macchina di corpi in movimento retta da leggi matematiche, senza fini e senza qualità occulte. Sostituisce la natura organica e finalistica di Aristotele." },
          { nome: "Qualità oggettive / soggettive", alt: [], desc: "Forma, numero, moto appartengono ai corpi; colore, sapore, suono esistono solo nel soggetto senziente. La scienza si occupa delle prime." },
          { nome: "Copernico", alt: ["eliocentrismo"], desc: "1543: il Sole al centro, la Terra un pianeta. Motivazioni di semplicità e armonia, orbite ancora circolari." },
          { nome: "Keplero", alt: ["orbite ellittiche"], desc: "Tre leggi: ellissi con il Sole in un fuoco, aree uguali in tempi uguali, relazione tra periodo e distanza. Cade il dogma del moto circolare." },
          { nome: "Newton", alt: ["gravitazione universale"], desc: "La stessa forza governa la caduta della mela e l'orbita della Luna: cielo e terra sotto le stesse leggi. Principia, 1687." },
          { nome: "Accademie scientifiche", alt: ["Royal Society", "Lincei"], desc: "La scienza diventa impresa collettiva e pubblica: si fondano accademie e riviste, i risultati si comunicano e si controllano." }
        ]
      },
      {
        gruppo: "2. Galilei",
        voci: [
          { nome: "Sensate esperienze e necessarie dimostrazioni", alt: [], desc: "Le due gambe del metodo: osservazione ed esperimento da un lato, dimostrazione matematica dall'altro." },
          { nome: "Esperimento", alt: ["cimento"], desc: "Non semplice osservazione ma domanda posta alla natura in condizioni costruite, isolando le variabili e misurando." },
          { nome: "Caso ideale", alt: ["idealizzazione"], desc: "Il piano perfettamente liscio, il vuoto: costruzioni matematiche a cui i casi reali si avvicinano. Mossa concettuale decisiva." },
          { nome: "Il libro della natura", alt: ["Saggiatore"], desc: "«È scritto in lingua matematica, e i caratteri son triangoli, cerchi ed altre figure geometriche»: tesi ontologica, non solo metodologica." },
          { nome: "Principio d'inerzia", alt: [], desc: "Un corpo in moto su un piano orizzontale senza attriti continuerebbe indefinitamente. Distrugge la fisica aristotelica del motore sempre necessario." },
          { nome: "Relatività galileiana", alt: ["nave"], desc: "Nella stiva di una nave in moto uniforme nessun esperimento interno rivela il movimento: risposta all'obiezione antiCopernicana." },
          { nome: "Due libri", alt: ["Cristina di Lorena"], desc: "Scrittura e natura vengono entrambe da Dio ma parlano linguaggi diversi: la Bibbia insegna «come si vadia in cielo», non «come vadia il cielo»." },
          { nome: "Intensive / estensive", alt: [], desc: "Sappiamo pochissimo rispetto a Dio quanto a estensione; ma nelle verità matematiche che dimostriamo la certezza è la stessa." },
          { nome: "Processo", alt: ["1616", "1633", "abiura"], desc: "Ammonizione di Bellarmino, poi condanna dopo il Dialogo. In gioco non è la fede contro la scienza ma chi abbia l'autorità di dire com'è fatto il mondo." }
        ]
      },
      {
        gruppo: "3. Bacone",
        voci: [
          { nome: "Sapere è potere", alt: ["scientia est potentia"], desc: "La conoscenza vale per ciò che permette di fare: ampliare l'impero dell'uomo sulle cose e migliorarne la condizione." },
          { nome: "Natura parendo vincitur", alt: [], desc: "«La natura non si vince se non obbedendole»: si domina conoscendone le leggi, non violandole." },
          { nome: "Idoli della tribù", alt: [], desc: "Pregiudizi della specie: vedere più ordine di quanto ce ne sia, generalizzare in fretta, ricordare solo le conferme." },
          { nome: "Idoli della caverna", alt: [], desc: "Deformazioni individuali dovute a carattere, educazione, letture, ambiente." },
          { nome: "Idoli del mercato", alt: [], desc: "Errori generati dal linguaggio: parole imposte dal volgo, nomi di cose inesistenti. I più insidiosi." },
          { nome: "Idoli del teatro", alt: [], desc: "I sistemi filosofici tramandati, come commedie che rappresentano mondi immaginari." },
          { nome: "Formica, ragno, ape", alt: [], desc: "L'empirico che accumula, il dogmatico che tesse da sé, lo scienziato che raccoglie ed elabora." },
          { nome: "Tavole", alt: ["presenza", "assenza", "gradi"], desc: "I tre elenchi di casi da confrontare; poi l'esclusione elimina ciò che non varia col fenomeno. Antenato del controllo delle variabili." },
          { nome: "Instantia crucis", alt: ["esperimento cruciale"], desc: "Il caso decisivo che permette di scegliere tra due spiegazioni concorrenti." },
          { nome: "Forma", alt: [], desc: "Non la forma aristotelica ma la legge costante che governa un fenomeno: conoscerla significa poterlo produrre." },
          { nome: "Casa di Salomone", alt: ["Nuova Atlantide"], desc: "Istituto statale di ricerca con laboratori e divisione del lavoro scientifico: modello ispiratore della Royal Society." }
        ]
      }
    ]
  }

  ,

  /* ------------------------------------------------ UNITÀ 3 */
  cartesio: {
    id: "cartesio",
    titolo: "Cartesio e il razionalismo",
    autore: "Unità 3 · Tra Seicento e Settecento",
    sottotitolo: "Il dubbio, il cogito, le due sostanze",
    epoca: "1596 – 1650",
    lingua: "Francia e Olanda",
    tag: ["Metodo", "Dubbio", "Cogito", "Dualismo"],
    epigrafe: "Penso, dunque sono.",
    colore: "viola",
    parti: [
      {
        titolo: "Capitolo 1 — Cartesio",
        sottotitolo: "Il fondatore della filosofia moderna",
        canti: [
          {
            n: 1, romano: "1", titolo: "La vita e gli scritti",
            chiave: "Studia dai gesuiti, si arruola, viaggia, poi si ritira in Olanda per vent'anni a pensare. Cerca in filosofia la stessa certezza che aveva trovato in matematica.",
            testo: `**René Descartes**, italianizzato in **Cartesio**, nasce nel 1596 a La Haye, in Turenna, e muore a Stoccolma nel 1650 (di polmonite, dopo pochi mesi passati a dare lezioni alla regina Cristina di Svezia alle cinque del mattino: lui, che aveva l'abitudine di restare a letto a meditare fino a tardi).

Studia nel collegio gesuita di La Flèche, uno dei migliori d'Europa. Ne esce, racconta, con «il dubbio più profondo»: ha imparato molte cose, ma nessuna sicura — eccetto la **matematica**, «per la certezza ed evidenza delle sue ragioni», di cui però si stupisce che nessuno abbia costruito qualcosa di più solido. È l'intuizione da cui nascerà tutto: e se si estendesse a **ogni sapere** il rigore della matematica?

Si arruola, viaggia per l'Europa («il gran libro del mondo»), e nella notte del **10 novembre 1619**, chiuso in una stanza riscaldata da una stufa, ha l'illuminazione dei «fondamenti di una scienza mirabile» e sogna tre sogni che interpreta come una vocazione. Dal 1628 si trasferisce in **Olanda**, il paese più libero d'Europa, dove vive vent'anni cambiando spesso casa per garantirsi la solitudine.

Le opere:
- ***Regole per la guida dell'ingegno*** (1628, postuma): il primo abbozzo del metodo;
- ***Il Mondo*** o *Trattato sulla luce*: pronto nel 1633, lo **ritira** appena sa della condanna di Galileo;
- ***Discorso sul metodo*** (1637), in francese, premesso a tre saggi scientifici (*Diottrica*, *Meteore*, **Geometria**): il libro con cui la filosofia moderna comincia;
- ***Meditazioni metafisiche*** (1641), con le *Obiezioni* dei più grandi pensatori del tempo e le sue *Risposte*;
- ***Principi di filosofia*** (1644), l'esposizione sistematica;
- ***Le passioni dell'anima*** (1649).

Il suo motto era *larvatus prodeo*, «avanzo mascherato»: la prudenza di chi vuole cambiare tutto senza farsi bruciare.`
          },
          {
            n: 2, romano: "2", titolo: "Il metodo e le quattro regole",
            chiave: "Il problema non è avere idee ma avere un metodo. Quattro regole: evidenza, analisi, sintesi, enumerazione. La ragione è uguale in tutti: manca solo la strada.",
            testo: `**I termini del problema.** Cartesio parte da una constatazione: «il buon senso è la cosa meglio distribuita del mondo», tutti credono di averne abbastanza. Se dunque gli uomini arrivano a conclusioni tanto diverse, non è perché alcuni ragionino meglio: è perché **conducono il pensiero per vie diverse**. La differenza la fa il **metodo**, non l'ingegno. «Non basta avere un buon ingegno: l'essenziale è applicarlo bene».

Il modello è la **matematica**, e in particolare la sua stessa invenzione, la **geometria analitica**: la scoperta che i problemi di geometria si possono tradurre in equazioni e viceversa. Se figure e numeri sono traducibili gli uni negli altri, forse esiste una *mathesis universalis*, una scienza generale dell'ordine e della misura, valida per ogni oggetto.

**Le quattro regole** del *Discorso*:
1. **Evidenza**: «non accogliere mai nulla per vero che non conoscessi *evidentemente* come tale», evitando precipitazione e prevenzione, e accettando solo ciò che si presenta alla mente in modo così **chiaro e distinto** da non lasciare occasione di dubbio. *Chiara* è l'idea presente e manifesta a una mente attenta; *distinta* è quella così precisa da non confondersi con altre.
2. **Analisi**: «dividere ciascuna delle difficoltà in tante parti quanto fosse possibile e necessario per meglio risolverle». Scomporre il complesso nei suoi elementi semplici.
3. **Sintesi**: «condurre con ordine i miei pensieri, cominciando dagli oggetti più semplici e più facili da conoscere, per salire a poco a poco fino alla conoscenza dei più complessi», supponendo un ordine anche là dove non ce n'è uno naturale.
4. **Enumerazione e revisione**: «fare dovunque enumerazioni così complete e revisioni così generali da essere sicuro di non omettere nulla».

Sono le regole della **deduzione matematica** estese a tutto il sapere. Le due facoltà in gioco sono l'**intuizione** (che coglie immediatamente le nature semplici) e la **deduzione** (che concatena le intuizioni). Il metodo è unico perché la **ragione è una sola**, e le scienze sono come i rami di un albero: la metafisica è la radice, la fisica il tronco, e i rami sono medicina, meccanica e morale.

**La morale provvisoria.** Mentre si ricostruisce la casa bisogna abitare da qualche parte: perciò Cartesio si dà quattro massime pratiche provvisorie — obbedire alle leggi e ai costumi del proprio paese, essere fermi e risoluti nelle azioni una volta decise, «vincere sé stessi piuttosto che la fortuna» e cambiare i propri desideri anziché l'ordine del mondo, e infine coltivare la ragione dedicando la vita alla ricerca della verità.`
          },
          {
            n: 3, romano: "3", titolo: "Il dubbio metodico e il dubbio iperbolico",
            chiave: "Per trovare un fondamento certo Cartesio dubita di tutto volontariamente: dei sensi, del sogno, perfino della matematica, ipotizzando un genio maligno che lo inganni.",
            testo: `Il metodo richiede un punto di partenza assolutamente certo. Per trovarlo, Cartesio adotta il **dubbio** come strumento: non lo scetticismo di chi rinuncia, ma un dubbio **metodico**, volontario, provvisorio e universale. Tratterà come **falso** tutto ciò di cui si possa in qualche modo dubitare, per vedere se resta qualcosa che resista.

Le fasi sono tre, in ordine crescente di radicalità.

**1. I sensi.** I sensi talvolta ci ingannano (il bastone spezzato nell'acqua, la torre quadrata che appare rotonda). «È prudente non fidarsi mai completamente di chi ci ha ingannato anche una sola volta». Cade dunque l'evidenza sensibile. Ma restano le cose vicine e ovvie: che io sia qui, seduto, con questo foglio in mano.

**2. Il sogno.** Anche quelle cadono: quando sogno, credo con la stessa vivezza di essere sveglio. **Non esiste un segno certo per distinguere la veglia dal sogno**. Dunque tutta la realtà esterna potrebbe essere un sogno. Restano però le verità che valgono sia da sveglio sia in sogno: 2+3=5, il quadrato ha quattro lati. La matematica sembra salva.

**3. Il genio maligno.** Qui il dubbio diventa **iperbolico**, cioè spinto all'estremo. Supponiamo che esista «un genio maligno, non meno astuto e ingannatore che potente» (*genius malignus*), il quale abbia impiegato tutta la sua industria a ingannarmi: potrebbe farmi sbagliare **anche quando faccio i conti più semplici**, facendomi sembrare evidente ciò che è falso. A questo punto crolla tutto: mondo esterno, corpo, matematica, ogni evidenza.

È l'ipotesi più radicale mai formulata in filosofia — ed è ancora attuale: il «cervello in una vasca», la simulazione informatica, *Matrix* sono sue riformulazioni contemporanee.

Attenzione a due punti spesso fraintesi. Primo: il dubbio è **teoretico**, non pratico: Cartesio non smette di mangiare o di rispettare le leggi (per questo la morale provvisoria). Secondo: è **metodico**, cioè strumentale: serve a trovare la certezza, non a distruggerla. Lo scettico si ferma al dubbio; Cartesio lo attraversa.`
          },
          {
            n: 4, romano: "4", titolo: "Il cogito: la prima certezza",
            chiave: "Mentre dubito di tutto, non posso dubitare di stare dubitando: e per dubitare devo esistere. «Penso, dunque sono» è la verità che resiste anche al genio maligno.",
            testo: `Nel mezzo della distruzione universale emerge un punto che resiste. Il genio maligno può ingannarmi su tutto — ma **per essere ingannato devo esistere**. «Mi inganni pure quanto vuole: non potrà mai fare che io non sia nulla, finché penserò di essere qualcosa».

***Cogito, ergo sum***: penso, dunque sono. Nelle *Meditazioni* la formula è: «Io sono, io esisto è necessariamente vera ogni volta che la pronuncio o la concepisco nella mia mente».

**Che tipo di verità è?** Non è un sillogismo (che avrebbe bisogno della premessa «tutto ciò che pensa esiste», da dimostrare a sua volta): è un'**intuizione immediata**, un'evidenza colta in un solo atto. L'*ergo* non indica una deduzione ma la struttura dell'atto stesso: nel pensare mi è dato il mio esistere.

**Che cosa sono io, dunque?** Una ***res cogitans***, una «cosa che pensa»: «una cosa che dubita, intende, afferma, nega, vuole, non vuole, immagina anche e sente». Attenzione all'ampiezza di *cogitatio*: non è solo il ragionamento, è **ogni atto di coscienza**, volere e sentire compresi (il *sentire* inteso come «mi pare di vedere», che è certo anche se l'oggetto non esistesse).

Il corpo, invece, resta ancora nel dubbio. Io so di esistere come pensiero, non ancora come uomo in carne e ossa.

**La regola generale dell'evidenza.** Dal cogito Cartesio estrae il criterio: esaminando *perché* è certo, trova che lo è perché lo percepisce in modo **chiaro e distinto**. Dunque: «tutte le cose che concepisco molto chiaramente e distintamente sono vere».

**Le discussioni intorno al cogito.** Fu obiettato subito che Agostino aveva detto la stessa cosa (*si fallor, sum*): Cartesio rispose che la somiglianza c'è, ma l'uso è diverso — Agostino ne fa un gradino verso Dio, lui ne fa il **fondamento assoluto di ogni sapere**. Altre obiezioni classiche: dal «si pensa» non segue un «io» sostanziale (lo dirà **Lichtenberg**, poi **Nietzsche**: si dovrebbe dire «si pensa», come «piove»); e **Kant** mostrerà che l'«io penso» è una condizione formale della conoscenza, non una sostanza conosciuta.

Resta il fatto storico: con il cogito la filosofia cambia punto di partenza. Non si comincia più dall'essere o da Dio, ma dal **soggetto**. È l'atto di nascita della modernità filosofica: la «svolta soggettiva» che arriverà fino a Kant, Husserl e oltre.`
          },
          {
            n: 5, romano: "5", titolo: "Dio come garante: le prove e il circolo cartesiano",
            chiave: "Il cogito da solo mi chiude in me stesso. Per uscirne serve Dio: se esiste ed è buono, non può ingannarmi, e le mie idee chiare e distinte sono vere.",
            testo: `Il cogito è una certezza, ma **solitaria**: mi assicura solo della mia esistenza come pensiero. Per riconquistare il mondo esterno serve garantire che l'evidenza sia affidabile — e finché il genio maligno resta possibile, non lo è. Bisogna dunque dimostrare che Dio esiste e non è ingannatore.

**Le tre idee.** Cartesio classifica le idee in **avventizie** (che sembrano venire dall'esterno), **fattizie** (costruite da me: la sirena, l'ippogrifo) e **innate** (presenti in me da sempre: idea di sostanza, di infinito, di Dio, i principi logici e matematici).

**Prima prova (dell'idea di perfezione, o «gnoseologica»).** Ho in me l'idea di un essere **infinito e perfetto**. Ma io sono finito e imperfetto (lo dimostra il fatto stesso che dubito). Per il principio che nella causa deve esserci almeno tanta realtà quanta nell'effetto, un essere imperfetto non può essere la causa dell'idea di perfezione. Dunque quell'idea mi è stata posta da un essere realmente perfetto: **Dio esiste**.

**Seconda prova (della conservazione).** Se io fossi la causa di me stesso, mi sarei dato tutte le perfezioni; e comunque non basta essere stato creato: occorre essere **conservati** istante per istante nell'esistenza, e questo posso farlo solo grazie a un essere che ha in sé la potenza di esistere.

**Terza prova (ontologica).** Riprende Anselmo. L'idea di Dio è l'idea di un essere **sommamente perfetto**; l'esistenza è una perfezione; escludere l'esistenza da Dio sarebbe contraddittorio come pensare un triangolo senza tre angoli o una valle senza monte. Dunque Dio esiste necessariamente.

**Dio garante dell'evidenza.** Dio è perfetto, dunque **sommamente buono**, dunque **non ingannatore**: ingannare è segno di malizia o di debolezza. Quindi le mie facoltà, se usate correttamente, non mi ingannano, e **tutto ciò che percepisco chiaramente e distintamente è vero**. Il genio maligno è eliminato. Con questa garanzia Cartesio recupera la matematica, la fisica e l'esistenza del mondo esterno.

**Il circolo cartesiano.** È l'obiezione classica, mossa già da **Arnauld**: Cartesio usa l'evidenza per dimostrare Dio, e poi Dio per garantire l'evidenza. Non è un cerchio? La risposta di Cartesio: nell'atto stesso dell'intuizione l'evidenza è irresistibile e non ha bisogno di garanzia; Dio serve a garantire le verità **ricordate**, quelle di cui non ho sotto gli occhi la dimostrazione. Molti interpreti non trovano la risposta pienamente convincente, ed è uno dei nodi più discussi della storia della filosofia.

**L'errore.** Se Dio non inganna, da dove viene l'errore? Dalla sproporzione tra due facoltà: l'**intelletto**, che è **finito**, e la **volontà**, che è **infinita**. L'errore nasce quando la volontà dà l'assenso a ciò che l'intelletto non ha percepito chiaramente. È dunque colpa nostra, e la sua radice è **morale**: precipitazione, fretta, mancanza di rigore. Da qui la libertà umana come radice sia dell'errore sia della dignità.`
          },
          {
            n: 6, romano: "6", titolo: "Il dualismo: res cogitans e res extensa",
            chiave: "Due sostanze incomunicabili: la mente, che pensa e non occupa spazio, e la materia, che occupa spazio e non pensa. Da qui una fisica interamente meccanicistica.",
            testo: `Cartesio definisce **sostanza** ciò che «esiste in modo da non aver bisogno di altro per esistere». In senso rigoroso solo Dio lo è; ma si chiamano sostanze anche le due realtà create che hanno bisogno solo di Dio:
- la ***res cogitans***, la sostanza pensante, il cui attributo essenziale è il **pensiero**: inestesa, indivisibile, libera, immortale;
- la ***res extensa***, la sostanza corporea, il cui attributo essenziale è l'**estensione**: divisibile all'infinito, priva di pensiero, retta interamente dalle leggi del movimento.

Le due sostanze sono **totalmente eterogenee**. È il **dualismo** cartesiano, e le conseguenze sono enormi.

**In fisica**: se la materia è solo estensione, tutti i fenomeni naturali si spiegano con **figura e movimento**. Non esistono qualità occulte, forme sostanziali, fini, anime dei corpi. Il mondo è una **macchina**. Da qui il **meccanicismo** integrale, l'identificazione di materia e spazio (dunque **non esiste il vuoto**, e l'universo è un pieno in cui i movimenti avvengono per **vortici**), e la conservazione della quantità di moto impressa da Dio all'origine.

**In biologia**: gli animali sono **automi**, macchine complesse prive di anima e di coscienza. Una tesi che ha avuto conseguenze pesanti sul trattamento degli animali, e che già i contemporanei contestarono.

**Nell'uomo**: qui nasce il problema più grave. L'uomo è un composto delle due sostanze — ma se sono incomunicabili, **come interagiscono**? Come fa la volontà (pensiero) a muovere un braccio (estensione)? Come fa una ferita (estensione) a produrre dolore (pensiero)?

Cartesio risponde con la **ghiandola pineale** (l'epifisi), un piccolo organo al centro del cervello, non doppio come gli altri, dove l'anima avrebbe la sua «sede principale» e influirebbe sugli «spiriti animali», particelle sottilissime che percorrono i nervi. È una soluzione che nessuno ha mai trovato convincente — la principessa **Elisabetta di Boemia**, in un carteggio celebre, gli chiese semplicemente come una cosa inestesa possa spingere una cosa estesa, e Cartesio non seppe rispondere in modo soddisfacente.

Il **problema mente-corpo** aperto qui non si è mai richiuso: gli occasionalisti, Spinoza, Leibniz tenteranno soluzioni diverse, e la filosofia della mente contemporanea vi lavora ancora.`
          },
          {
            n: 7, romano: "7", titolo: "La filosofia pratica: le passioni e la generosità",
            chiave: "Le passioni non sono malattie da estirpare ma effetti del corpo sull'anima: vanno conosciute e usate. La virtù suprema è la generosità: sapere che si è liberi.",
            testo: `Cartesio non scrisse la morale definitiva che progettava (doveva essere l'ultimo ramo dell'albero), ma nelle *Passioni dell'anima* (1649) e nel carteggio con Elisabetta ne delinea i tratti.

**Le passioni.** Sono «percezioni, sensazioni o emozioni dell'anima» che l'anima riferisce a sé stessa e che sono **causate dal corpo**, cioè dal movimento degli spiriti animali. Non sono in sé cattive: sono utili alla conservazione, «tutte buone per natura», e la vita senza di esse sarebbe povera. Il problema è il loro **eccesso** e il fatto che ci ingannano sul valore delle cose.

Cartesio ne individua **sei primitive**, da cui derivano tutte le altre: **meraviglia** (la prima di tutte, che nasce davanti al nuovo), **amore**, **odio**, **desiderio**, **gioia**, **tristezza**.

**Il dominio delle passioni** non avviene per volontà diretta — non posso decidere di non avere paura — ma **indirettamente**: associando alle rappresentazioni che le suscitano altri pensieri e altre immagini, cioè rieducando le connessioni tra corpo e anima. È una posizione sorprendentemente moderna, vicina alle terapie cognitive.

**La generosità** è la virtù suprema, e insieme una passione: consiste nella consapevolezza che l'unica cosa che davvero mi appartiene è il **libero uso della mia volontà**, e nella ferma risoluzione di usarla bene. Chi è generoso non disprezza nessuno, perché sa che ogni uomo possiede la stessa libertà; non invidia, perché nulla di esterno vale quanto il buon uso di sé. È il punto in cui l'eredità stoica si innesta sul cogito.

**La geometria analitica** merita un'ultima nota, perché è la realizzazione concreta del programma: introducendo il sistema di coordinate (che chiamiamo «cartesiane»), Cartesio traduce le figure in equazioni e le equazioni in figure. È la prova che la *mathesis universalis* non era un sogno: una stessa struttura razionale attraversa domini apparentemente diversi. Su questa base nascerà, con Newton e Leibniz, il calcolo infinitesimale.`
          }
        ]
      },
      {
        titolo: "Capitolo 2 — Il razionalismo nel Seicento",
        sottotitolo: "Occasionalismo, Port-Royal, Gassendi, libertinismo",
        canti: [
          {
            n: 8, romano: "8", titolo: "L'occasionalismo: Geulincx e Malebranche",
            chiave: "Se le due sostanze non possono agire l'una sull'altra, allora non agiscono: è Dio che, in occasione di un movimento del corpo, produce l'idea nell'anima.",
            testo: `Il problema lasciato aperto da Cartesio — l'interazione tra le due sostanze — genera immediatamente una scuola.

**L'occasionalismo** taglia il nodo con una soluzione radicale: le due sostanze **non interagiscono affatto**. Ciò che chiamiamo causa non è una vera causa, è solo un'**occasione**: la vera e unica causa efficiente è **Dio**.

**Arnold Geulincx** (1624–1669) usa l'immagine dei **due orologi** perfettamente sincronizzati: quando l'uno segna l'ora, l'altro suona; sembra che il primo causi il secondo, ma non c'è alcun influsso — è la sincronia impostata dall'orologiaio. Così quando voglio alzare il braccio, Dio muove il braccio; quando il corpo è ferito, Dio produce in me il dolore. Il principio: *quod nescis quomodo fiat, id non facis*, «ciò che non sai come si faccia, non lo fai tu» — e nessuno di noi sa come faccia a muovere un muscolo.

**Nicolas Malebranche** (1638–1715), oratoriano, sviluppa la posizione in modo sistematico e vi aggiunge la celebre dottrina della **visione in Dio**: non conosciamo le cose direttamente, ma vediamo le loro **idee in Dio**, che è «il luogo degli spiriti come lo spazio è il luogo dei corpi». È un platonismo cristiano innestato sul cartesianesimo.

Il prezzo di questa soluzione è alto: si salva la coerenza del dualismo ma si svuota il mondo di ogni causalità propria, e Dio diventa l'unico agente dell'universo. Da qui una linea che porta dritta a **Spinoza** (una sola sostanza) e, in altro modo, a **Berkeley** e a **Hume** (che negherà la conoscibilità del nesso causale in generale).

**Arnauld e la logica di Port-Royal.** L'abbazia di Port-Royal, centro del **giansenismo** francese, produce la *Logica o arte di pensare* (1662) di **Arnauld** e **Nicole**: un manuale che unisce logica formale, teoria della conoscenza cartesiana e regole del metodo, e che sarà il testo di logica più letto in Europa per oltre un secolo. Vi si trova la distinzione classica tra **estensione** e **comprensione** di un concetto.

**Il platonismo inglese** di Cambridge (Cudworth, More) reagisce invece al meccanicismo affermando l'esistenza di principi spirituali attivi nella natura, e influenzerà Newton nella concezione dello spazio come *sensorium Dei*.`
          },
          {
            n: 9, romano: "9", titolo: "Gassendi e il libertinismo",
            chiave: "Contro Cartesio, la ripresa dell'atomismo di Epicuro e di uno scetticismo empirista. Accanto, i libertini: la libertà di pensiero come critica di ogni superstizione.",
            testo: `Non tutto il Seicento è cartesiano.

**Pierre Gassendi** (1592–1655), sacerdote e scienziato, è il grande avversario di Cartesio (scrive le *Quinte obiezioni* alle *Meditazioni*, con toni pungenti; Cartesio risponde chiamandolo «o carne», e lui replica «o mente»). Le sue tesi:
- **critica del cogito**: dal fatto che penso segue che esisto, ma anche «passeggio dunque sono» funzionerebbe; e soprattutto il cogito non prova che io sia una **sostanza** immateriale;
- **contro le idee innate**: ogni conoscenza deriva dai sensi. Gassendi è un **empirista** che precede Locke;
- **ripresa dell'atomismo epicureo**, che egli tenta di conciliare con il cristianesimo: gli atomi sono creati da Dio e non eterni, e l'anima razionale è immateriale. È lui a rimettere in circolazione Epicuro nella cultura moderna, con grande influsso su Newton, Boyle e la chimica;
- **probabilismo**: la scienza non raggiunge l'essenza delle cose ma solo apparenze ben ordinate; il suo è un empirismo cauto, consapevole dei limiti.

**Il libertinismo.** Nella prima metà del Seicento francese si diffonde la corrente dei *libertins érudits* (La Mothe Le Vayer, Naudé, Cyrano de Bergerac). «Libertino» non significa dissoluto ma **libero pensatore**: chi rivendica l'autonomia della ragione dalla religione rivelata. I loro tratti: scetticismo di derivazione montaigniana, critica della superstizione e dei miracoli, naturalismo, deismo o ateismo prudente, teoria delle religioni come «imposture» politiche utili al controllo dei popoli.

Costretti alla prudenza, praticano la scrittura allusiva e la doppia lettura. Il loro contributo alla cultura europea è più grande di quanto la loro fama suggerisca: preparano il terreno alla **critica illuministica della religione**, a Bayle e a Voltaire.`
          }
        ]
      }
    ],
    personaggi: [
      {
        gruppo: "1. Il metodo e il dubbio",
        voci: [
          { nome: "Mathesis universalis", alt: [], desc: "Il progetto di una scienza generale dell'ordine e della misura, suggerito dalla geometria analitica: un solo metodo per tutto il sapere." },
          { nome: "Chiaro e distinto", alt: [], desc: "Chiara è l'idea presente e manifesta a una mente attenta; distinta quella così precisa da non confondersi con altre. È il criterio di verità." },
          { nome: "Le quattro regole", alt: [], desc: "Evidenza, analisi (scomporre), sintesi (ricomporre dal semplice al complesso), enumerazione (non omettere nulla)." },
          { nome: "Albero del sapere", alt: [], desc: "Metafisica le radici, fisica il tronco, medicina meccanica e morale i rami: le scienze sono un unico sapere, perché la ragione è una." },
          { nome: "Morale provvisoria", alt: [], desc: "Le quattro massime per vivere mentre si ricostruisce il sapere: seguire leggi e costumi, essere risoluti, vincere sé stessi anziché la fortuna, coltivare la ragione." },
          { nome: "Dubbio metodico", alt: [], desc: "Dubbio volontario, universale e provvisorio, usato come strumento per trovare l'indubitabile. Diverso dallo scetticismo, che al dubbio si ferma." },
          { nome: "Argomento del sogno", alt: [], desc: "Non esiste segno certo per distinguere veglia e sogno: cade la realtà del mondo esterno, ma non ancora la matematica." },
          { nome: "Genio maligno", alt: ["genius malignus"], desc: "Ipotesi iperbolica di un ingannatore potentissimo che mi faccia sbagliare anche nei calcoli più semplici. Il dubbio più radicale mai formulato." }
        ]
      },
      {
        gruppo: "2. Cogito, Dio, sostanze",
        voci: [
          { nome: "Cogito ergo sum", alt: [], desc: "Per essere ingannato devo esistere: intuizione immediata, non sillogismo. Da qui la filosofia moderna comincia dal soggetto." },
          { nome: "Res cogitans", alt: ["cosa che pensa"], desc: "Ciò che dubita, intende, afferma, nega, vuole, immagina e sente. Cogitatio significa ogni atto di coscienza." },
          { nome: "Idee innate", alt: ["avventizie", "fattizie"], desc: "Le idee vengono da fuori, sono costruite da noi, oppure sono in noi da sempre: sostanza, infinito, Dio, principi logici." },
          { nome: "Prova dell'idea di perfezione", alt: [], desc: "Un essere imperfetto non può essere causa dell'idea di perfezione: dunque quell'idea è stata posta in me da Dio." },
          { nome: "Prova ontologica", alt: [], desc: "L'esistenza appartiene all'essenza dell'essere perfetto come i tre angoli al triangolo. Ripresa di Anselmo, che Kant confuterà." },
          { nome: "Dio non ingannatore", alt: [], desc: "Garantisce che le idee chiare e distinte siano vere: elimina il genio maligno e restituisce il mondo esterno." },
          { nome: "Circolo cartesiano", alt: ["Arnauld"], desc: "Si usa l'evidenza per provare Dio e Dio per garantire l'evidenza. Cartesio replica distinguendo l'intuizione attuale dalle verità ricordate." },
          { nome: "Teoria dell'errore", alt: [], desc: "L'intelletto è finito, la volontà infinita: l'errore nasce quando si dà l'assenso a ciò che non è chiaro. È colpa nostra, non di Dio." },
          { nome: "Res extensa", alt: [], desc: "La materia è solo estensione: divisibile, senza qualità occulte né fini. Materia e spazio coincidono, quindi non c'è vuoto." },
          { nome: "Dualismo", alt: [], desc: "Due sostanze eterogenee, pensiero ed estensione. Da qui il meccanicismo integrale e gli animali-automi." },
          { nome: "Ghiandola pineale", alt: [], desc: "La sede in cui anima e corpo interagirebbero. Soluzione mai giudicata convincente: apre il problema mente-corpo." },
          { nome: "Generosità", alt: [], desc: "La virtù suprema: sapere che l'unica cosa che mi appartiene è il libero uso della volontà, e risolversi a usarlo bene." }
        ]
      },
      {
        gruppo: "3. Il razionalismo dopo Cartesio",
        voci: [
          { nome: "Occasionalismo", alt: ["Geulincx"], desc: "Le sostanze non interagiscono: gli eventi sono solo occasioni in cui Dio, unica causa vera, produce l'effetto. L'immagine dei due orologi sincronizzati." },
          { nome: "Visione in Dio", alt: ["Malebranche"], desc: "Non conosciamo le cose ma le loro idee in Dio, «luogo degli spiriti come lo spazio è luogo dei corpi»." },
          { nome: "Logica di Port-Royal", alt: ["Arnauld", "Nicole"], desc: "L'arte di pensare (1662): logica, gnoseologia e metodo insieme. Introduce la distinzione tra estensione e comprensione dei concetti." },
          { nome: "Gassendi", alt: [], desc: "Empirista e atomista epicureo, critico del cogito e delle idee innate. Rimette in circolo Epicuro nella scienza moderna." },
          { nome: "Libertini eruditi", alt: [], desc: "Liberi pensatori del Seicento francese: scetticismo, critica della superstizione, religione come impostura politica. Preparano l'Illuminismo." }
        ]
      }
    ]
  }

  ,

  /* ------------------------------------------------ UNITÀ 4 */
  "pascal-spinoza-leibniz": {
    id: "pascal-spinoza-leibniz",
    titolo: "Pascal, Spinoza, Leibniz",
    autore: "Unità 4 · Critici e continuatori di Cartesio",
    sottotitolo: "Il cuore, la sostanza unica, le monadi",
    epoca: "1623 – 1716",
    lingua: "Francia, Olanda, Germania",
    tag: ["Pascal", "Spinoza", "Leibniz", "Teodicea"],
    epigrafe: "Il cuore ha le sue ragioni, che la ragione non conosce.",
    colore: "rosso",
    parti: [
      {
        titolo: "Capitolo 1 — Pascal",
        sottotitolo: "I limiti della ragione e la miseria dell'uomo senza Dio",
        canti: [
          {
            n: 1, romano: "1", titolo: "Vita e opere: la difesa del giansenismo",
            chiave: "Genio scientifico precoce, dopo una notte di fuoco abbandona la ricerca per Dio. Le Provinciali e i Pensieri nascono dalla polemica con i gesuiti.",
            testo: `**Blaise Pascal** (1623–1662) è un caso quasi unico: scienziato di primissimo ordine e insieme uno dei più grandi scrittori religiosi d'Europa.

**Lo scienziato.** A sedici anni scrive un trattato sulle coniche; a diciannove costruisce la **pascalina**, una delle prime macchine calcolatrici; compie gli esperimenti sul **vuoto** (Puy-de-Dôme, 1648) che confutano l'assioma aristotelico e cartesiano del *horror vacui*; formula il **principio di Pascal** in idrostatica; con Fermat pone le basi del **calcolo delle probabilità**, nato da un problema di scommesse.

**La conversione.** Nella notte del **23 novembre 1654** vive un'esperienza mistica di cui lascia traccia in un foglio cucito nella fodera del vestito, trovato solo dopo la morte: il ***Mémorial***. Vi si legge: «FUOCO. Dio di Abramo, Dio di Isacco, Dio di Giacobbe, **non dei filosofi e dei dotti**. Certezza, certezza. Sentimento. Gioia. Pace».

**Port-Royal e il giansenismo.** Pascal aderisce al movimento giansenista, che riprende l'Agostino più rigoroso: corruzione radicale della natura umana, necessità assoluta della grazia, predestinazione. Contro i **gesuiti**, accusati di lassismo morale (la «casistica», la teoria della «direzione dell'intenzione», il probabilismo che consente di seguire l'opinione più comoda purché sostenuta da qualche autorità), scrive le ***Provinciali*** (1656–57): diciotto lettere anonime, capolavoro di ironia e di prosa, che demoliscono la morale gesuitica agli occhi dell'opinione pubblica europea.

**I *Pensieri***. Progettava un'*Apologia della religione cristiana*: ne restano frammenti, raccolti dopo la morte. Non è un'opera incompiuta per caso: la forma frammentaria, aforistica, che aggredisce il lettore, corrisponde al metodo — non si convince della verità del cristianesimo con una dimostrazione, si conduce l'interlocutore a **sentire** la propria condizione.`
          },
          {
            n: 2, romano: "2", titolo: "Il divertissement: la fuga da sé stessi",
            chiave: "L'uomo non sopporta di restare solo in una stanza a pensare: si stordisce con la caccia, il gioco, la guerra, la conversazione. Perché fermarsi significherebbe vedere la propria miseria.",
            testo: `L'analisi pascaliana della condizione umana parte da un'osservazione psicologica di straordinaria acutezza: «tutta l'infelicità degli uomini deriva da una sola cosa: **non saper restare in riposo, in una camera**».

Il ***divertissement*** — che significa letteralmente «diversione, distrazione», non «divertimento» nel senso odierno — è l'insieme delle attività con cui l'uomo distoglie l'attenzione da sé stesso.

L'esempio classico: il cacciatore. Se gli si offrisse la lepre già presa, la rifiuterebbe: **non vuole la preda, vuole la caccia**. Ciò che cerca non è l'oggetto ma l'**agitazione** che gli impedisce di pensare. Lo stesso vale per il gioco d'azzardo, per le cariche pubbliche, per la guerra, per la conversazione mondana: «gli uomini non sanno che la caccia, e non la preda, è ciò che essi cercano».

Perché questa fuga? Perché fermandosi l'uomo vedrebbe la propria condizione: la **noia** (*ennui*), la mortalità, la contingenza, il fatto di essere gettato in un universo che non ha chiesto. «Immaginiamo un certo numero di uomini in catene, tutti condannati a morte, alcuni dei quali sgozzati ogni giorno sotto gli occhi degli altri…: ecco l'immagine della condizione umana».

Il **divertissement** ha quindi due facce: è la nostra **maggiore miseria**, perché ci impedisce di affrontare l'unica questione seria; ed è insieme la nostra **maggiore consolazione**, perché senza di esso saremmo disperati.

Pascal aggiunge una precisazione decisiva: il fatto stesso che ci si annoi, che si fugga, che si desideri l'infinito, è la prova che l'uomo **non è fatto per questa condizione**. C'è in lui la traccia di una grandezza perduta. «L'uomo supera infinitamente l'uomo».`
          },
          {
            n: 3, romano: "3", titolo: "Spirito di geometria e spirito di finezza. I limiti della scienza",
            chiave: "La ragione matematica è potentissima ma non tocca ciò che conta. C'è un altro modo di conoscere, intuitivo e globale: lo spirito di finezza, cioè il «cuore».",
            testo: `Pascal, che è un grande matematico, è anche il critico più lucido dei **limiti della scienza**.

**La ragione non fonda sé stessa.** La geometria è il modello del rigore, ma anch'essa deve partire da **definizioni e principi indimostrabili** (spazio, tempo, movimento, numero). Chi glieli fornisce? Non il ragionamento: il **cuore**. «Il cuore sente che vi sono tre dimensioni nello spazio e che i numeri sono infiniti… I principi si sentono, le proposizioni si dimostrano». La ragione, dunque, poggia su un fondamento che non è razionale: è una scoperta antidogmatica di prima grandezza.

**I due spiriti.**
- Lo **spirito di geometria** parte da pochi principi chiari e lontani dall'uso comune, e procede per deduzioni concatenate. È rigoroso ma **lento e parziale**.
- Lo **spirito di finezza** coglie in un solo sguardo un gran numero di principi delicati, presenti nell'uso comune ma difficili da isolare. Non si dimostra, si **vede**. È lo spirito con cui si giudicano gli uomini, le situazioni morali, la vita.

Non sono in conflitto: sono adatti a **oggetti diversi**. L'errore è applicare l'uno dove serve l'altro — i geometri che vogliono trattare more geometrico le questioni umane risultano ridicoli, e le persone fini che pretendono di fare geometria a intuito sbagliano.

**Il limite della scienza rispetto all'esistenza.** La scienza è vera nel suo ambito, ma **non risponde alle domande che contano**: chi sono, perché esisto, perché devo morire. Da qui il giudizio severo su Cartesio: «Non posso perdonare a Cartesio: egli avrebbe voluto, in tutta la sua filosofia, poter fare a meno di Dio; ma non ha potuto evitare di fargli dare una spinta per mettere il mondo in movimento; dopo di che, non sa più che farsene di Dio». Il Dio dei filosofi è un ingranaggio; il Dio vero è quello di Abramo, Isacco e Giacobbe.

**I due infiniti.** L'uomo è sospeso tra l'infinitamente grande e l'infinitamente piccolo: «un nulla rispetto all'infinito, un tutto rispetto al nulla, un mezzo tra nulla e tutto». Da qui la vertigine: «il silenzio eterno di questi spazi infiniti mi spaventa».

**La canna pensante.** Ma proprio nella coscienza della propria miseria sta la grandezza: «L'uomo non è che una canna, la più debole della natura; ma è una canna pensante. Non occorre che l'universo intero si armi per schiacciarlo: un vapore, una goccia d'acqua bastano a ucciderlo. Ma quand'anche l'universo lo schiacciasse, l'uomo sarebbe ancora più nobile di ciò che lo uccide, perché sa di morire, e il vantaggio che l'universo ha su di lui; l'universo non ne sa nulla».`
          },
          {
            n: 4, romano: "4", titolo: "La scommessa e il «cuore»",
            chiave: "Se la ragione non può decidere se Dio esiste, si può però calcolare la convenienza: scommettere su Dio significa rischiare il finito per guadagnare l'infinito.",
            testo: `**Il problema.** Pascal si rivolge all'uomo che non crede e che non è convinto dalle prove razionali. La ragione, dice, non può decidere: siamo come su una nave in mezzo all'oceano, e «bisogna scommettere: non è facoltativo, siete imbarcati».

**L'argomento della scommessa** (*le pari*) è la prima applicazione del calcolo delle probabilità a una decisione esistenziale. Lo schema:
- se **scommetto che Dio esiste** e Dio esiste: guadagno **infinito** (beatitudine eterna);
- se scommetto che Dio esiste e Dio non esiste: perdo pochissimo (qualche piacere di una vita finita);
- se **scommetto che non esiste** e non esiste: non guadagno nulla di rilevante;
- se scommetto che non esiste e invece esiste: perdo **tutto**.

Poiché la posta in gioco da un lato è infinita e dall'altro finita, la scommessa razionale — anche a probabilità bassissima — è **credere**. «Se vincete, guadagnate tutto; se perdete, non perdete nulla».

**Le obiezioni** sono note e forti: non si può credere per decisione (Pascal risponde che si comincia dai gesti, dalle abitudini, dal vivere come se si credesse, e la fede seguirà: «ciò vi abbrutirà», dice provocatoriamente); e la scommessa non dice **quale** Dio. Pascal ne è consapevole: la scommessa non è una dimostrazione, è un **argomento ad hominem** rivolto a chi già ragiona in termini di calcolo e interesse — serve a scuoterlo, non a convincerlo.

**Dalla ragione al cuore.** Il vero accesso è un altro: «È il cuore che sente Dio, non la ragione. Ecco che cos'è la fede: Dio sensibile al cuore, non alla ragione». E la frase più celebre: ***«Il cuore ha le sue ragioni che la ragione non conosce»***.

Il *cuore* non è il sentimentalismo: è una **facoltà di conoscenza immediata**, che coglie i principi primi e le realtà globali. Non è irrazionale, è **pre-razionale**: fonda la ragione anziché contraddirla.

**La ragionevolezza del cristianesimo.** L'ultimo passo dell'apologia: solo il cristianesimo **spiega** la condizione umana, perché sola la dottrina del **peccato originale** rende conto insieme della grandezza (l'uomo è fatto per Dio, e conserva la memoria di quella condizione) e della miseria (l'uomo è caduto). Tutte le altre filosofie ne colgono solo una metà: gli stoici esaltano la grandezza e diventano superbi; gli scettici e i libertini vedono la miseria e cadono nella disperazione. Solo la fede tiene insieme le due cose, e per questo, dice Pascal, il cristianesimo è **ragionevole** anche se non dimostrabile.

**La grazia.** Da giansenista, Pascal ribadisce che nemmeno questo cammino è opera dell'uomo: «non mi cercheresti se non mi avessi già trovato».`
          }
        ]
      },
      {
        titolo: "Capitolo 2 — Spinoza",
        sottotitolo: "Deus sive Natura: una sola sostanza infinita",
        canti: [
          {
            n: 5, romano: "5", titolo: "Un'esistenza appartata e dedita al sapere",
            chiave: "Espulso dalla comunità ebraica, rifiuta cattedre e onori, vive molando lenti. La sua filosofia è una via di liberazione dalla schiavitù delle passioni.",
            testo: `**Baruch Spinoza** (1632–1677) nasce ad Amsterdam da una famiglia di ebrei sefarditi fuggiti dal Portogallo. A **ventiquattro anni** viene colpito dal *cherem*, la scomunica maggiore della comunità ebraica, con formule di una durezza impressionante — probabilmente per le sue idee sull'anima, su Dio e sulla legge. Cambia il nome in **Benedictus**, rifiuta la cattedra offertagli a Heidelberg per non compromettere la propria libertà, vive appartato a Rijnsburg e all'Aia **molando lenti** per microscopi e cannocchiali (la polvere di vetro contribuirà alla tisi che lo ucciderà a quarantaquattro anni).

Le opere: il ***Trattato sull'emendazione dell'intelletto***, il ***Trattato teologico-politico*** (1670, pubblicato anonimo e subito messo all'indice) e l'***Etica dimostrata secondo l'ordine geometrico***, pubblicata postuma nel 1677.

**Il carattere del sistema.** L'*Etica* è scritta *more geometrico*: definizioni, assiomi, proposizioni, dimostrazioni, corollari, scolii. Non è un vezzo. Per Spinoza l'ordine delle idee **è** l'ordine delle cose: dimostrare geometricamente significa esporre la struttura necessaria della realtà, eliminando ogni traccia di soggettività, di scopo, di emozione. «Considererò le azioni e gli appetiti umani come se si trattasse di linee, superfici e corpi».

**Il fine.** Nonostante l'apparenza glaciale, il progetto è **esistenziale**, e Spinoza lo dichiara nell'incipit del *Trattato sull'emendazione*: ho constatato che tutto ciò che gli uomini inseguono — ricchezza, onori, piaceri — è vano e produce solo ansia; ho voluto cercare se esistesse «un bene vero, capace di comunicarsi, dal quale, respinti tutti gli altri, l'animo fosse affetto in modo unico». La filosofia è **catarsi**, liberazione: si comprende per essere liberi. È lo stesso movimento degli stoici, ma condotto con gli strumenti della geometria.

Le fonti: Cartesio (di cui accetta il razionalismo e rifiuta il dualismo), Bruno e il naturalismo rinascimentale, la tradizione ebraica e la cabala, gli stoici.`
          },
          {
            n: 6, romano: "6", titolo: "La sostanza unica: Deus sive Natura",
            chiave: "Se la sostanza è ciò che esiste per sé, allora ce n'è una sola, infinita: Dio, che coincide con la Natura. Tutto il resto sono suoi modi, non sostanze.",
            testo: `Spinoza parte dalle definizioni cartesiane e le prende **sul serio fino in fondo**, ottenendo un risultato opposto.

**La deduzione.** Sostanza è «ciò che è in sé e si concepisce per sé». Se è così, la sostanza deve essere **causa di sé** (*causa sui*: la sua essenza implica l'esistenza), **infinita** (se fosse limitata da altro, dipenderebbe da altro), **unica** (due sostanze infinite si limiterebbero a vicenda), **eterna** e **indivisibile**. Dunque esiste **una sola sostanza**: e Spinoza la chiama ***Deus sive Natura***, «Dio ossia la Natura».

Cartesio aveva detto che in senso proprio solo Dio è sostanza, e poi aveva chiamato «sostanze» anche pensiero ed estensione. Spinoza elimina l'incoerenza: pensiero ed estensione non sono sostanze, sono **attributi** dell'unica sostanza.

**Attributi e modi.**
- Gli **attributi** sono «ciò che l'intelletto percepisce della sostanza come costituente la sua essenza». Sono **infiniti**, ma noi ne conosciamo due: **pensiero** ed **estensione**. Non sono parti di Dio: ciascuno esprime tutta l'essenza divina, in un linguaggio diverso.
- I **modi** sono le «affezioni della sostanza», i modi particolari e finiti in cui essa esiste: le singole cose, i singoli pensieri. Un uomo, una pietra, un'idea non sono sostanze: sono **onde** di un unico oceano.

**Natura naturans e natura naturata.** La formula (di origine scolastica e bruniana) distingue Dio come **potenza produttiva** (natura naturante: sostanza e attributi) e Dio come **insieme dei modi prodotti** (natura naturata). Non sono due cose: sono due modi di considerare la stessa realtà.

**Panteismo o acosmismo?** La formula *Deus sive Natura* fece gridare all'ateismo per un secolo e mezzo. In realtà Spinoza non nega Dio: nega che Dio sia una **persona** distinta dal mondo. Hegel osserverà che il suo non è tanto un ateismo quanto un **acosmismo**: non è il mondo che assorbe Dio, è Dio che assorbe il mondo, il quale perde consistenza autonoma. Novalis lo chiamerà «l'uomo ebbro di Dio».

**Le due grandi conseguenze polemiche.**
- **Contro il finalismo.** Dio non agisce «per uno scopo»: agire per un fine significherebbe mancare di qualcosa. Le cose seguono dalla natura di Dio **come dall'essenza del triangolo segue che i suoi angoli valgano due retti**: per necessità logica, non per progetto. L'appendice della prima parte dell'*Etica* smonta il pregiudizio finalistico con un'analisi memorabile: gli uomini nascono ignari delle cause e coscienti dei propri desideri, perciò credono che tutto sia fatto per loro; da questo pregiudizio nascono le nozioni di bene e male, ordine e disordine, bellezza e bruttezza — tutte **proiezioni umane**, non proprietà delle cose. E quando la realtà smentisce (terremoti, malattie), invece di abbandonare il pregiudizio si rifugiano nella «volontà di Dio, asilo dell'ignoranza».
- **Contro il Dio biblico.** Un Dio che comanda, punisce, si adira, cambia idea, sceglie un popolo, è un Dio pensato a immagine dell'uomo. Il vero Dio non ha intelletto né volontà come i nostri, non ama né odia: è **potenza infinita che si esprime necessariamente**.`
          },
          {
            n: 7, romano: "7", titolo: "Il parallelismo, la libertà, la conoscenza",
            chiave: "Mente e corpo sono la stessa cosa espressa in due linguaggi. La libertà non è libero arbitrio — che è un'illusione — ma comprensione della necessità.",
            testo: `**Il parallelismo.** Come risolve Spinoza il problema mente-corpo lasciato da Cartesio? Dissolvendolo. Mente e corpo non sono due sostanze che devono comunicare: sono **la stessa realtà espressa sotto due attributi diversi**. «L'ordine e la connessione delle idee è lo stesso che l'ordine e la connessione delle cose». Non c'è interazione perché non ci sono due cose. La mente è «l'idea del corpo».

**Il determinismo.** Tutto segue necessariamente dalla natura di Dio: nulla è contingente, nulla poteva andare diversamente. Le cose ci appaiono contingenti solo per **difetto della nostra conoscenza**.

**L'illusione del libero arbitrio.** È una delle pagine più famose: «Gli uomini si credono liberi solo perché sono coscienti delle proprie azioni e ignari delle cause da cui sono determinati». L'esempio è la **pietra lanciata**: se la pietra avesse coscienza, credendo di volare per propria volontà si direbbe libera. Così l'ubriaco crede di parlare per libera decisione. Il libero arbitrio è ignoranza delle cause.

**La vera libertà.** Non consiste nel non essere determinati (impossibile) ma nell'essere determinati **dalla propria natura** anziché da cause esterne: è *libera necessitas*. Si diventa liberi **comprendendo**: chi capisce le cause delle proprie passioni cessa di subirle passivamente. Questa è la terapia spinoziana, e ha impressionato profondamente Freud.

**I tre generi di conoscenza.**
1. **Immaginazione** (opinione, esperienza vaga): la conoscenza attraverso i sensi e le parole. Frammentaria, confusa, è l'unica fonte di **falsità** — è qui che nascono l'idea di libero arbitrio, il finalismo, le superstizioni.
2. **Ragione**: la conoscenza attraverso le **nozioni comuni** e le proprietà comuni delle cose; procede per concatenazione logica ed è sempre vera. È la scienza.
3. **Scienza intuitiva**: coglie l'essenza delle cose singole **a partire da Dio**, vedendo ogni cosa come modo della sostanza infinita, *sub specie aeternitatis*, «dal punto di vista dell'eternità». È il grado più alto, e produce la beatitudine.

Il criterio della verità è interno: *verum index sui et falsi*, il vero è indice di sé e del falso. Un'idea vera non ha bisogno di conferme esterne, perché contiene in sé la propria evidenza.`
          },
          {
            n: 8, romano: "8", titolo: "L'etica: conatus, affetti, amore intellettuale di Dio",
            chiave: "Ogni essere tende a perseverare nel proprio essere: da qui gioia, tristezza, desiderio. La schiavitù è subire le passioni; la libertà è comprenderle.",
            testo: `**Il conatus.** «Ogni cosa, per quanto sta in essa, si sforza di perseverare nel proprio essere». Questo sforzo (*conatus*) è l'essenza attuale di ogni ente; nell'uomo, riferito insieme alla mente e al corpo, si chiama **appetito**, e se ne siamo consapevoli, **desiderio** (*cupiditas*).

Da qui la **rivoluzione etica** di Spinoza: non desideriamo una cosa perché la giudichiamo buona, ma **la giudichiamo buona perché la desideriamo**. Bene e male non sono proprietà delle cose ma relazioni: buono è ciò che accresce la nostra potenza d'agire, cattivo ciò che la diminuisce.

**Gli affetti primari** sono tre: **cupiditas** (desiderio), **laetitia** (gioia: il passaggio a una perfezione maggiore, l'aumento di potenza) e **tristitia** (tristezza: la diminuzione). Tutti gli altri affetti — amore, odio, speranza, timore, invidia, gelosia, rimorso — sono combinazioni di questi tre con l'idea di una causa esterna, e Spinoza li analizza uno per uno con una precisione da naturalista.

**Passioni e azioni.** Un affetto è **passione** quando siamo causa solo parziale di ciò che ci accade (siamo agiti da fuori); è **azione** quando ne siamo causa adeguata. La **servitù** dell'uomo consiste nell'essere in balìa delle passioni.

**La liberazione.** Non si combatte un affetto con la volontà — «un affetto non può essere né tolto né rimosso se non da un affetto contrario e più forte». Si combatte **conoscendolo**: appena ne formiamo un'idea chiara e distinta, l'affetto cessa di essere passione e diventa azione. Comprendere che tutto è necessario libera dal risentimento, dal rimpianto, dalla speranza e dal timore — che per Spinoza sono affetti gemelli e ugualmente da superare.

**L'uomo libero.** Non è un asceta: Spinoza rivendica la gioia («nulla di ciò che è triste può essere buono»), il piacere moderato, l'amicizia, la vita sociale, perché «all'uomo nulla è più utile dell'uomo». Ma è colui che «pensa alla morte meno che a ogni altra cosa, e la cui sapienza è meditazione della vita, non della morte».

**L'amore intellettuale di Dio.** Il vertice: dalla scienza intuitiva nasce l'*amor Dei intellectualis*, la gioia di comprendere sé stessi e il mondo come parte della sostanza infinita. È un amore che **non chiede di essere ricambiato** nel senso comune, perché Dio non ama nessuno in particolare; ma «l'amore intellettuale della mente verso Dio è lo stesso amore con cui Dio ama sé stesso». È qui la **beatitudine**, che non è premio della virtù ma la virtù stessa: «la beatitudine non è premio della virtù, ma la virtù stessa».

L'ultima frase dell'*Etica*: «tutto ciò che è eccellente è tanto difficile quanto raro».`
          },
          {
            n: 9, romano: "9", titolo: "Stato, religione, libertà di pensiero",
            chiave: "Lo Stato nasce per garantire sicurezza, ma il suo vero fine è la libertà. E la libertà di pensiero non si può togliere: nessuno può essere costretto a credere.",
            testo: `Il **Trattato teologico-politico** (1670) è uno dei libri più coraggiosi del Seicento, e uno dei più influenti.

**La critica biblica.** Spinoza inaugura l'**esegesi storica** della Scrittura: la Bibbia va interpretata «con gli stessi criteri con cui si interpreta la natura», cioè studiandone la lingua, gli autori, le circostanze storiche. Ne ricava che il Pentateuco non può essere di Mosè, che i testi sono stratificati, che i profeti erano uomini di forte immaginazione e non di superiore intelletto. Conclusione centrale: **la Scrittura non insegna verità speculative, insegna l'obbedienza**. Il suo unico contenuto è morale: amare Dio e il prossimo, praticare giustizia e carità. Tutto il resto — miracoli, dogmi, riti — è adattamento alla mentalità del volgo.

Ne segue la separazione dei territori: la **filosofia** ha per fine la verità, la **religione** l'obbedienza e la pietà. Non possono contraddirsi perché non parlano della stessa cosa. È una delle radici del pensiero laico moderno.

**La teoria dello Stato.** Spinoza è giusnaturalista come Hobbes, ma con esiti diversi.
- Nello **stato di natura** il diritto di ciascuno coincide con la sua **potenza**: «i pesci grandi mangiano i piccoli con sommo diritto naturale». Non è una condizione morale, è un dato di fatto.
- Poiché ciascuno da solo è debole, conviene unire le forze: nasce lo **Stato** per contratto, in cui gli individui trasferiscono la propria potenza alla collettività.
- A differenza di Hobbes, però, gli individui **non perdono mai** il diritto naturale: se lo Stato diventa insopportabile, il patto perde efficacia di fatto, perché nessun potere può ottenere ciò che gli uomini non sono disposti a dare.

**La libertà di pensiero.** È la tesi celebre del capitolo XX: il fine dello Stato **non è il dominio ma la libertà**. Lo Stato può controllare le azioni, non i pensieri: nessuno può trasferire ad altri la propria facoltà di giudicare. Un governo che pretenda di comandare le opinioni ottiene solo ipocrisia e ribellione — e si indebolisce. Perciò «in una libera repubblica è lecito a ciascuno pensare ciò che vuole e dire ciò che pensa».

Spinoza preferisce la **democrazia**, «il più naturale dei regimi», perché in essa nessuno trasferisce il proprio diritto a un altro uomo ma alla maggioranza della società di cui è parte, restando così uguale agli altri come nello stato di natura.

**La fortuna.** Condannato e maledetto per un secolo (essere chiamato «spinozista» era un'accusa infamante), Spinoza viene riscoperto alla fine del Settecento nella *Pantheismusstreit* tedesca e diventa un riferimento per Goethe, i romantici, Hegel («o spinozismo o nessuna filosofia»), Nietzsche, Einstein e la filosofia contemporanea.`
          }
        ]
      },
      {
        titolo: "Capitolo 3 — Leibniz",
        sottotitolo: "Monadi, armonia prestabilita, il migliore dei mondi possibili",
        canti: [
          {
            n: 10, romano: "10", titolo: "Una mente universale",
            chiave: "Matematico, giurista, diplomatico, storico, inventore del calcolo infinitesimale e della logica simbolica: l'ultimo uomo che seppe tutto quel che si poteva sapere.",
            testo: `**Gottfried Wilhelm Leibniz** (1646–1716), di Lipsia, è forse l'ingegno più universale della storia moderna. Fu:
- **matematico**: inventore, indipendentemente da Newton, del **calcolo infinitesimale** (e la notazione che usiamo — *dx*, il segno di integrale — è la sua, più maneggevole di quella newtoniana). La disputa sulla priorità avvelenò i rapporti tra scienza inglese e continentale per un secolo;
- **logico**: progetta una ***characteristica universalis***, un linguaggio simbolico universale in cui i concetti siano rappresentati da segni, e un ***calculus ratiocinator***, un calcolo che permetta di risolvere le controversie ragionando: «quando sorgeranno delle controversie, non ci sarà più bisogno di discutere: basterà dire *calcoliamo*». È l'atto di nascita, con due secoli d'anticipo, della **logica matematica** e, in prospettiva, dell'informatica. Studia inoltre il sistema **binario**;
- **diplomatico, giurista, storico, bibliotecario**, ingegnere minerario, fondatore dell'Accademia delle scienze di Berlino;
- **filosofo**: e la sua filosofia è scritta quasi tutta in saggi brevi, lettere e opuscoli — *Discorso di metafisica*, *Nuovo sistema della natura*, *Nuovi saggi sull'intelletto umano* (risposta a Locke, pubblicata postuma), *Teodicea*, ***Monadologia*** (1714).

Un tratto costante è il suo **spirito conciliativo**: cerca sempre la verità parziale contenuta in ogni posizione. Tenta di riunire cattolici e protestanti; concilia il meccanicismo moderno con le cause finali aristoteliche; riconosce ragione tanto agli innatisti quanto agli empiristi. Il suo principio è che «i sistemi hanno ragione in ciò che affermano e torto in ciò che negano».`
          },
          {
            n: 11, romano: "11", titolo: "Verità di ragione e verità di fatto",
            chiave: "Due tipi di verità: quelle necessarie, il cui opposto è impossibile, e quelle contingenti, il cui opposto è pensabile. Le prime si fondano sulla non contraddizione, le seconde sulla ragion sufficiente.",
            testo: `Leibniz distingue nettamente due specie di verità, e la distinzione è una delle più feconde della filosofia moderna (Hume la riprenderà come «relazioni tra idee» e «dati di fatto», Kant come analitico e sintetico).

**Verità di ragione** (o eterne, o necessarie): il loro opposto è **contraddittorio** e quindi impossibile. Sono le verità della logica e della matematica: 2+2=4, il triangolo ha tre lati. Si fondano sul **principio di identità e di non contraddizione**, e si dimostrano per **analisi finita**: scomponendo i concetti si vede che il predicato è già contenuto nel soggetto. Valgono in **tutti i mondi possibili**.

**Verità di fatto** (o contingenti): il loro opposto è **pensabile** senza contraddizione. Che Cesare abbia varcato il Rubicone, che io esista, che questo tavolo sia marrone: potevano essere diversamente. Si fondano sul **principio di ragion sufficiente**: «nulla accade senza che ve ne sia una ragione per cui sia così e non altrimenti». Valgono solo in **questo mondo**.

**Un punto sottile e famoso.** Anche nelle verità di fatto il predicato è contenuto nel soggetto — il concetto completo di Cesare include tutto ciò che gli accadrà — ma l'analisi che lo mostrerebbe è **infinita**, e solo Dio può compierla in un solo sguardo. Per noi resta contingente; per Dio è certa, ma non necessaria: Dio ha **scelto** quel mondo tra infiniti possibili, e ha scelto liberamente il migliore. Così Leibniz cerca di salvare insieme la determinatezza divina e la contingenza del mondo — una manovra che molti giudicano riuscita solo a metà.

**Gli altri principi** del sistema: il **principio del meglio** (Dio sceglie sempre l'ottimo), il **principio degli indiscernibili** (non esistono due cose perfettamente identiche: se lo fossero, sarebbero la stessa cosa; nessuna due foglie sono uguali), il **principio di continuità** (*natura non facit saltus*, la natura non fa salti: tutti i gradi di essere e di percezione sono riempiti).`
          },
          {
            n: 12, romano: "12", titolo: "L'universo monadistico",
            chiave: "La realtà è fatta di infinite unità di forza, semplici e senza parti: le monadi. Ognuna rispecchia tutto l'universo dal proprio punto di vista, e non ha finestre.",
            testo: `**Contro il meccanicismo.** Leibniz accetta che in fisica si spieghi tutto con figure e movimenti, ma sostiene che l'estensione **non basta** a costituire la sostanza. L'estensione è divisibile all'infinito, dunque presuppone qualcosa di semplice; ed è passiva, mentre l'esperienza mostra ovunque **forza**, resistenza, attività. Critica inoltre Cartesio in fisica: ciò che si conserva non è la quantità di moto (*mv*) ma la **forza viva** (*mv²*), anticipando il concetto di energia.

**Le monadi.** Le vere sostanze sono dunque **unità di forza**, semplici, inestese, indivisibili, che Leibniz chiama **monadi** (dal greco *monás*, unità): «gli atomi della natura, gli elementi delle cose». Non sono punti materiali: sono **centri di attività**, «atomi formali» o metafisici.

Le loro caratteristiche:
- sono **infinite** e tutte **diverse** (principio degli indiscernibili);
- **«non hanno finestre»**: nulla può entrarvi o uscirne. Non subiscono influssi esterni; tutto ciò che accade in una monade nasce dal suo interno, secondo la sua legge di sviluppo;
- ciascuna è uno **specchio vivente dell'universo**: rappresenta tutto il cosmo dal proprio **punto di vista**, come una stessa città vista da angolazioni diverse appare diversa pur essendo una;
- la loro attività consiste in **percezione** (rappresentazione del molteplice nell'uno) e **appetizione** (la tendenza che le fa passare da una percezione all'altra).

**I gradi delle monadi.** Poiché la natura non fa salti, esiste una scala continua di chiarezza percettiva:
- monadi **nude**, con sole **piccole percezioni** inconsce: i corpi inorganici;
- **anime**, con percezione accompagnata da memoria e sensazione: gli animali;
- **spiriti**, con **appercezione**, cioè coscienza di sé e conoscenza delle verità eterne: gli uomini, che sono «piccole divinità».

Le **piccole percezioni** (*petites perceptions*) sono un'intuizione notevolissima: percezioni troppo deboli per essere avvertite ma reali ed efficaci, come il rumore di ogni singola onda che, sommato, produce il fragore del mare. È una delle prime teorizzazioni dell'**inconscio**, e la risposta a Locke: nulla è nell'intelletto che non sia stato nei sensi, «**tranne l'intelletto stesso**».

**L'armonia prestabilita.** Se le monadi non comunicano, perché l'universo è coerente? Perché **Dio le ha sincronizzate fin dall'origine**, come un orologiaio perfetto che regoli infiniti orologi in modo che segnino tutti la stessa ora senza collegamento tra loro. È la soluzione leibniziana al problema mente-corpo: anima e corpo non interagiscono, ma si corrispondono perfettamente per armonia prestabilita.

**Materia prima e seconda**: ogni monade creata ha una passività intrinseca (materia prima) e appare associata a un aggregato di monadi che ne costituiscono il corpo organico (materia seconda). La materia, dunque, non è sostanza ma **fenomeno bene fondato**.`
          },
          {
            n: 13, romano: "13", titolo: "Dio e la teodicea: il migliore dei mondi possibili",
            chiave: "Dio ha scelto tra infiniti mondi possibili quello che realizza il massimo di essere con il minimo di mezzi. Il male è il prezzo inevitabile della finitezza.",
            testo: `**Le prove dell'esistenza di Dio.** Leibniz le raccoglie quasi tutte, correggendole: l'**ontologica** (valida, ma va prima dimostrato che il concetto di Dio non è contraddittorio, cioè che l'essere perfettissimo è **possibile**), la prova **dalle verità eterne** (le verità necessarie devono avere il loro fondamento in un intelletto eterno), quella **dalla contingenza** (le cose contingenti richiedono una ragion sufficiente ultima fuori dalla serie) e quella **dall'armonia prestabilita** (una sincronia infinita richiede un ordinatore).

**Il problema del male.** Il termine ***teodicea*** — «giustificazione di Dio» — è coniato da Leibniz nell'opera del 1710, scritta in risposta a **Pierre Bayle**, che nel *Dizionario storico-critico* aveva sostenuto l'impossibilità razionale di conciliare l'esistenza del male con un Dio buono e onnipotente.

**La soluzione: il migliore dei mondi possibili.** Nell'intelletto di Dio esistono infiniti **mondi possibili**, cioè infinite combinazioni compossibili di sostanze. Dio, che è insieme onnipotente, onnisciente e sommamente buono, ha necessariamente scelto **il migliore**: quello che realizza la massima varietà di fenomeni con la massima semplicità di leggi, il **massimo di essere**.

Perché allora c'è il male? Leibniz distingue tre forme:
- **male metafisico**: la semplice **finitezza** delle creature. È inevitabile: una creatura infinita sarebbe un altro Dio. È la radice degli altri due;
- **male fisico**: il dolore. Ha spesso funzione di mezzo (educa, previene mali maggiori) e comunque è il prezzo di un ordine di leggi generali semplici, che non possono fare eccezioni caso per caso;
- **male morale**: il peccato, che deriva dalla libertà delle creature. Dio lo **permette** ma non lo vuole: e l'insieme che lo comprende, con la redenzione, è migliore di uno che non lo comprendesse.

L'argomento generale è quello della **totalità**: il male non va giudicato isolatamente ma nel quadro d'insieme, come un'ombra in un quadro o una dissonanza in una sinfonia, che accrescono la bellezza del tutto.

**Le critiche.** L'ottimismo leibniziano diventerà il bersaglio più famoso dell'Illuminismo: dopo il **terremoto di Lisbona** (1755) **Voltaire** scriverà il *Poema sul disastro di Lisbona* e soprattutto il ***Candido***, dove il maestro Pangloss ripete che «tutto è per il meglio nel migliore dei mondi possibili» mentre attorno a lui accade ogni orrore. Kant respingerà la possibilità stessa di una teodicea razionale, e Dostoevskij, con la voce di Ivan Karamazov, obietterà che nessuna armonia finale può giustificare la sofferenza di un solo bambino.

Va detto per equità che Leibniz non sostiene che questo mondo sia *bello*, ma che sia il **migliore possibile**, e che la sua tesi è un'affermazione sulla **razionalità del reale** più che una consolazione. In questa forma passerà a Hegel («ciò che è razionale è reale»).`
          }
        ]
      }
    ],
    personaggi: [
      {
        gruppo: "1. Pascal",
        voci: [
          { nome: "Divertissement", alt: ["diversione"], desc: "Le attività con cui l'uomo si distrae da sé stesso. Il cacciatore vuole la caccia, non la lepre: insieme la nostra miseria maggiore e la nostra consolazione." },
          { nome: "Spirito di geometria / di finezza", alt: [], desc: "Il primo deduce da pochi principi chiari, il secondo coglie in un solo sguardo molti principi delicati. Adatti a oggetti diversi, non in conflitto." },
          { nome: "Cuore", alt: [], desc: "Facoltà di conoscenza immediata che coglie i principi primi, non dimostrabili dalla ragione: «i principi si sentono, le proposizioni si dimostrano»." },
          { nome: "Dio dei filosofi", alt: ["Mémorial"], desc: "«Dio di Abramo, di Isacco, di Giacobbe, non dei filosofi e dei dotti»: il Dio della fede non è l'ingranaggio della metafisica." },
          { nome: "I due infiniti", alt: [], desc: "L'uomo sospeso tra infinitamente grande e infinitamente piccolo: «un nulla rispetto all'infinito, un tutto rispetto al nulla»." },
          { nome: "Canna pensante", alt: [], desc: "L'uomo è fragilissimo, ma sa di morire: e in questo è più nobile dell'universo che lo schiaccia." },
          { nome: "Scommessa", alt: ["le pari"], desc: "Rischiare il finito per guadagnare l'infinito: prima applicazione del calcolo delle probabilità a una scelta esistenziale. Argomento ad hominem, non dimostrazione." },
          { nome: "Grandezza e miseria", alt: ["peccato originale"], desc: "Solo il cristianesimo spiega entrambe: siamo fatti per Dio (grandezza) e siamo caduti (miseria). Stoici e scettici ne vedono metà ciascuno." },
          { nome: "Giansenismo", alt: ["Port-Royal", "Provinciali"], desc: "Rigorismo agostiniano sulla grazia. Le Provinciali demoliscono la casistica gesuitica con l'ironia." }
        ]
      },
      {
        gruppo: "2. Spinoza",
        voci: [
          { nome: "More geometrico", alt: [], desc: "Definizioni, assiomi, proposizioni: la forma dell'Etica. Non un vezzo: l'ordine delle idee è l'ordine delle cose." },
          { nome: "Deus sive Natura", alt: ["sostanza unica"], desc: "Esiste una sola sostanza infinita, causa di sé, che coincide con la natura. Pensiero ed estensione ne sono attributi, non sostanze." },
          { nome: "Attributi e modi", alt: [], desc: "Gli attributi esprimono l'essenza della sostanza (ne conosciamo due su infiniti); i modi sono le cose singole, onde di un unico oceano." },
          { nome: "Natura naturans / naturata", alt: [], desc: "Dio come potenza produttiva e come insieme dei prodotti: due modi di considerare la stessa realtà." },
          { nome: "Critica del finalismo", alt: [], desc: "Dio non agisce per scopi: le cose seguono da lui come dall'essenza del triangolo segue la somma degli angoli. Bene, male e ordine sono proiezioni umane." },
          { nome: "Asilo dell'ignoranza", alt: [], desc: "Il ricorso alla «volontà di Dio» quando i fatti smentiscono il pregiudizio finalistico." },
          { nome: "Parallelismo", alt: [], desc: "«L'ordine e la connessione delle idee è lo stesso che l'ordine e la connessione delle cose»: mente e corpo sono la stessa realtà sotto due attributi." },
          { nome: "Pietra che si crede libera", alt: ["libero arbitrio"], desc: "Gli uomini si credono liberi perché conoscono i loro atti e ignorano le cause. Il libero arbitrio è ignoranza." },
          { nome: "Conatus", alt: [], desc: "Lo sforzo di ogni cosa a perseverare nel proprio essere. Non desideriamo ciò che è buono: chiamiamo buono ciò che desideriamo." },
          { nome: "Tre generi di conoscenza", alt: [], desc: "Immaginazione (unica fonte di errore), ragione (nozioni comuni, la scienza), scienza intuitiva (le cose sub specie aeternitatis)." },
          { nome: "Amor Dei intellectualis", alt: [], desc: "La gioia di comprendere sé stessi e il mondo come parte della sostanza infinita. «La beatitudine non è premio della virtù, ma la virtù stessa»." },
          { nome: "Libertà come necessità compresa", alt: [], desc: "Liberi non è chi sfugge alle cause ma chi è determinato dalla propria natura: si diventa liberi comprendendo." },
          { nome: "Fine dello Stato è la libertà", alt: [], desc: "Lo Stato controlla le azioni, non i pensieri: «in una libera repubblica è lecito pensare ciò che si vuole e dire ciò che si pensa»." },
          { nome: "Esegesi storica della Bibbia", alt: [], desc: "La Scrittura va interpretata con criteri storici e filologici: non insegna verità speculative ma obbedienza, giustizia e carità." }
        ]
      },
      {
        gruppo: "3. Leibniz",
        voci: [
          { nome: "Characteristica universalis", alt: ["calculus ratiocinator"], desc: "Un linguaggio simbolico universale e un calcolo per risolvere le controversie: «calcoliamo». Anticipa la logica matematica e l'informatica." },
          { nome: "Verità di ragione", alt: ["necessarie"], desc: "Il loro opposto è contraddittorio; valgono in tutti i mondi possibili; si fondano sul principio di non contraddizione." },
          { nome: "Verità di fatto", alt: ["contingenti"], desc: "Il loro opposto è pensabile; si fondano sul principio di ragion sufficiente; la loro analisi è infinita, e solo Dio la compie." },
          { nome: "Ragion sufficiente", alt: [], desc: "Nulla accade senza una ragione per cui sia così e non altrimenti. Il principio che regge tutta la metafisica leibniziana." },
          { nome: "Indiscernibili", alt: [], desc: "Non esistono due cose perfettamente identiche: se lo fossero, sarebbero la stessa cosa. Nessuna due foglie sono uguali." },
          { nome: "Monade", alt: ["atomo formale"], desc: "Unità di forza semplice, inestesa, indivisibile: la vera sostanza. Attività di percezione e appetizione." },
          { nome: "Senza finestre", alt: [], desc: "Nulla entra o esce da una monade: tutto ciò che le accade nasce dal suo interno secondo la sua legge di sviluppo." },
          { nome: "Specchio dell'universo", alt: ["punto di vista"], desc: "Ogni monade rappresenta tutto il cosmo dalla propria prospettiva, come una città vista da angolazioni diverse." },
          { nome: "Petites perceptions", alt: ["piccole percezioni"], desc: "Percezioni inconsce ma reali, come il rumore di ogni singola onda nel fragore del mare: una delle prime teorie dell'inconscio." },
          { nome: "Appercezione", alt: [], desc: "La coscienza della propria percezione, propria degli spiriti. Distingue l'uomo dall'animale." },
          { nome: "Armonia prestabilita", alt: ["due orologi"], desc: "Dio ha sincronizzato ab origine tutte le monadi: anima e corpo non interagiscono ma si corrispondono perfettamente." },
          { nome: "Forza viva", alt: ["mv²"], desc: "Contro Cartesio: ciò che si conserva non è la quantità di moto ma mv², anticipazione del concetto di energia." },
          { nome: "Teodicea", alt: ["migliore dei mondi possibili"], desc: "Dio sceglie tra infiniti mondi quello di massima varietà con leggi più semplici. Male metafisico (finitezza), fisico, morale." },
          { nome: "Candido", alt: ["Voltaire", "Pangloss"], desc: "La satira dell'ottimismo leibniziano dopo il terremoto di Lisbona: «tutto è per il meglio» ripetuto tra gli orrori." }
        ]
      }
    ]
  }

  ,

  /* ------------------------------------------------ UNITÀ 5 */
  "empirismo-inglese": {
    id: "empirismo-inglese",
    titolo: "L'empirismo inglese",
    autore: "Unità 5 · Da Hobbes a Hume",
    sottotitolo: "Ragione ed esperienza nel pensiero inglese",
    epoca: "1588 – 1776",
    lingua: "Inghilterra e Scozia",
    tag: ["Hobbes", "Locke", "Berkeley", "Hume", "Causalità"],
    epigrafe: "Nulla è nell'intelletto che prima non sia stato nei sensi.",
    colore: "verde",
    parti: [
      {
        titolo: "Capitolo 1 — Hobbes",
        sottotitolo: "Il materialismo e lo Stato assoluto",
        canti: [
          {
            n: 1, romano: "1", titolo: "Un'alternativa a Cartesio: ragione e calcolo",
            chiave: "Stesso ideale di rigore geometrico, premesse opposte: esiste solo il corpo, e pensare non è intuire essenze ma calcolare, sommare e sottrarre nomi.",
            testo: `**Thomas Hobbes** (1588–1679) nasce, dice lui, insieme alla paura: la madre partorì prematuramente per lo spavento dell'Invincibile Armada. La paura è, non a caso, il concetto centrale della sua filosofia politica. Visse novantun anni attraversando la guerra civile inglese, l'esecuzione di Carlo I, la repubblica di Cromwell e la Restaurazione.

Le opere: la trilogia degli *Elementa philosophiae* (*De corpore*, *De homine*, *De cive*) e il ***Leviatano*** (1651).

**Il modello geometrico.** Come Cartesio, Hobbes ammira la geometria (di cui si innamorò a quarant'anni aprendo per caso gli *Elementi* di Euclide) e vuole costruire una filosofia rigorosa. Ma il punto di partenza è opposto.

**Il materialismo.** Esiste **solo il corpo**: «l'universo, cioè l'intera massa di tutte le cose che sono, è corporeo, e ciò che non è corpo non è parte dell'universo». Non esistono sostanze spirituali; «sostanza incorporea» è una contraddizione in termini, come «cerchio quadrato». Anche i pensieri sono movimenti di particelle nel cervello.

**Il razionalismo come calcolo.** Qui sta la mossa più originale: ***ragionare è calcolare*** (*ratiocinatio est computatio*). Pensare non significa cogliere essenze o idee innate, significa **sommare e sottrarre nomi**: unendo «corpo», «animato» e «razionale» ottengo «uomo»; sottraendo ottengo il contrario. La verità non sta nelle cose ma nelle **proposizioni**: è una proprietà del linguaggio, dipendente dalle definizioni che abbiamo convenuto. Di conseguenza la scienza è un sistema **ipotetico-deduttivo** costruito su definizioni, e la sua certezza è quella della coerenza, non della corrispondenza a essenze eterne.

È una posizione di grande modernità, che anticipa il convenzionalismo e la concezione formale della logica — e che rende Hobbes, insieme, empirista (ogni idea deriva dalla sensazione) e razionalista (la scienza è costruzione deduttiva).

**Il conoscere.** Tutto comincia dalla **sensazione**, che è movimento prodotto dagli oggetti sugli organi; l'immaginazione è «senso indebolito»; la memoria è immaginazione che sbiadisce. Le qualità sensibili (colori, suoni) sono nel soggetto, non nelle cose: Hobbes è d'accordo con Galileo e con Cartesio su questo punto.`
          },
          {
            n: 2, romano: "2", titolo: "Lo stato di natura e la guerra di tutti contro tutti",
            chiave: "Tolto il potere comune, gli uomini sono uguali nel poter uccidere e mossi da desiderio e paura: la vita diventa «solitaria, misera, brutale e breve».",
            testo: `**L'antropologia.** L'uomo non è per natura socievole (contro Aristotele): è mosso dal **desiderio** di ciò che accresce la propria potenza e dall'**avversione** per ciò che la minaccia, e il bene non è che il nome dato a ciò che si desidera. La molla fondamentale è l'**autoconservazione**.

**Lo stato di natura** non è necessariamente una fase storica: è ciò che accadrebbe (e accade nelle guerre civili) **tolto il potere comune**. Le sue premesse:
- gli uomini sono sostanzialmente **uguali** — anche il più debole può uccidere il più forte con l'astuzia o alleandosi;
- da questa uguaglianza nasce l'uguaglianza delle **speranze**, e se due desiderano la stessa cosa che non può essere condivisa, diventano nemici;
- tre cause di conflitto: la **competizione** (per il guadagno), la **diffidenza** (per la sicurezza), la **gloria** (per la reputazione).

Il risultato è la ***bellum omnium contra omnes***, la guerra di tutti contro tutti — che non consiste in un combattimento continuo, ma nella **disposizione permanente** al conflitto, «come il cattivo tempo non è un rovescio ma la tendenza persistente alla pioggia». In quella condizione «non c'è posto per l'industria, perché il frutto è incerto; e quindi non agricoltura, non navigazione, non arti, non lettere, non società, e — ciò che è peggio di tutto — continua paura e pericolo di morte violenta: e la vita dell'uomo è **solitaria, povera, sgradevole, brutale e breve**».

**Il diritto di natura.** In quello stato ciascuno ha *ius in omnia*, diritto su ogni cosa, perché ha diritto di fare tutto ciò che serve alla propria conservazione. Ma un diritto di tutti su tutto equivale a un diritto di nessuno su niente: è un diritto **inutile**.

**Le leggi di natura.** La ragione, che è calcolo, indica allora le regole per uscirne. Sono precetti **razionali**, non morali in senso pieno:
- **prima legge**: cercare la pace, finché c'è speranza di ottenerla; e se non c'è, usare ogni mezzo;
- **seconda legge**: che ciascuno rinunci al diritto su tutte le cose, quanto gli altri, e si accontenti di tanta libertà quanta ne concederebbe agli altri;
- **terza legge**: che i patti stipulati vengano osservati (*pacta sunt servanda*), che è la fonte della giustizia.

Ma «i patti senza la spada sono solo parole»: le leggi di natura da sole non obbligano, perché chi le rispettasse mentre gli altri no si consegnerebbe alla rovina. Serve un **potere coercitivo**.`
          },
          {
            n: 3, romano: "3", titolo: "Il contratto e il Leviatano",
            chiave: "Con un patto di tutti con tutti si trasferisce ogni potere a un sovrano che non è parte del contratto: il suo potere è dunque assoluto, indivisibile e irrevocabile.",
            testo: `**Il patto.** Gli uomini stipulano tra loro un accordo di *reciproca rinuncia*: ciascuno trasferisce a un uomo o a un'assemblea il proprio diritto di autogovernarsi, a condizione che tutti gli altri facciano lo stesso. La formula del *Leviatano*: «autorizzo e cedo il mio diritto di governare me stesso a quest'uomo, o a quest'assemblea, a condizione che tu gli ceda il tuo diritto e autorizzi tutte le sue azioni allo stesso modo».

Il risultato è la nascita dello **Stato**, che Hobbes chiama **Leviatano** — il mostro biblico — e definisce «**dio mortale** al quale, sotto il Dio immortale, dobbiamo la nostra pace e la nostra difesa».

**I caratteri del potere sovrano** derivano rigorosamente dalla struttura del patto:
- è **assoluto**: nessun limite giuridico esterno, altrimenti ci sarebbe un potere superiore e si ricadrebbe nell'anarchia;
- è **irrevocabile**: il sovrano **non è parte del contratto** (il patto è tra i sudditi), dunque non può violarlo e i sudditi non possono scioglierlo;
- è **indivisibile**: dividere i poteri significa preparare la guerra civile (è la critica anticipata a Locke e Montesquieu);
- comprende il potere legislativo, giudiziario, di guerra e di pace, di censura delle dottrine — perché le opinioni producono azioni — e la **supremazia sulla Chiesa**: nessuna autorità religiosa può competere con lo Stato, altrimenti il cittadino avrebbe due padroni.

**Il fondamento è la paura.** Ciò che tiene insieme lo Stato non è la virtù né l'amore ma il **timore razionale**: la paura della morte violenta è la passione che rende ragionevoli.

**Il limite invalicabile.** C'è un solo punto in cui il suddito può disobbedire: il **diritto alla vita**. Poiché il patto è stato fatto proprio per conservarsi, se il sovrano attenta alla vita del suddito (o non è più in grado di proteggerlo), il patto perde efficacia. È una crepa piccola ma teoricamente decisiva: dentro l'assolutismo di Hobbes c'è già il germe del **diritto individuale inalienabile** che diventerà il liberalismo.

**Perché Hobbes è moderno**, pur difendendo l'assolutismo:
- lo Stato non è naturale né voluto da Dio: è un **artificio umano**, costruito per un fine e giustificato solo da quel fine;
- il fondamento del potere è il **consenso** degli individui, non la tradizione o il diritto divino;
- l'individuo, non la comunità, è il punto di partenza.

È per questo che Hobbes è considerato il fondatore della filosofia politica moderna, ed è stato attaccato da tutte le parti: dai monarchici, perché toglieva a Dio la legittimazione del trono; dai parlamentari, perché negava il diritto di resistenza; dalla Chiesa, per il materialismo e la subordinazione della religione allo Stato.`
          }
        ]
      },
      {
        titolo: "Capitolo 2 — Locke",
        sottotitolo: "La mente è un foglio bianco. Tolleranza e Stato liberale",
        canti: [
          {
            n: 4, romano: "4", titolo: "Il fondatore dell'empirismo: ragione ed esperienza",
            chiave: "Prima di conoscere il mondo, esaminiamo lo strumento: fin dove arriva l'intelletto umano? Risposta: fin dove arriva l'esperienza, e non un passo oltre.",
            testo: `**John Locke** (1632–1704), medico e uomo politico legato al partito whig, esule in Olanda, rientra in Inghilterra con la **Gloriosa Rivoluzione** del 1688, di cui diventa il teorico. Le opere principali: il ***Saggio sull'intelletto umano*** (1690), i ***Due trattati sul governo*** (1690), la ***Lettera sulla tolleranza*** (1689).

**Il programma.** Nell'*Epistola al lettore* Locke racconta l'origine del *Saggio*: discutendo con amici di morale e religione, si accorsero di non arrivare a nulla, e capì che «era necessario esaminare le nostre capacità e vedere quali oggetti fossero alla portata del nostro intelletto». Prima di indagare le cose, bisogna indagare lo **strumento**.

È una svolta decisiva: la **teoria della conoscenza diventa il problema preliminare della filosofia**. La stessa mossa, portata a compimento in modo diverso, sarà di Kant. Locke si definisce modestamente «un manovale che sgombra il terreno», mentre i grandi scienziati — Newton, Boyle — costruiscono l'edificio.

**Il criterio: la ragione fondata sull'esperienza.** Locke non è un antirazionalista: la ragione è «la candela del Signore» accesa in noi. Ma è una ragione che **conosce i propri limiti**: sa fin dove può arrivare e dove deve fermarsi. Non è la ragione onnipotente dei sistemi metafisici; è una ragione che rinuncia a spiegare l'essenza delle cose e si accontenta di ciò che serve alla vita e alla condotta. Il tono è quello che diventerà tipico della cultura inglese e poi illuministica: **antidogmatico, pratico, tollerante**.

**La critica dell'innatismo.** Il primo libro del *Saggio* demolisce le idee innate:
- **non esiste consenso universale** su alcun principio: bambini e «idioti» non conoscono il principio di non contraddizione, e i popoli hanno idee morali opposte tra loro (l'antropologia comparata entra qui in filosofia);
- anche se ci fosse consenso, non proverebbe l'innatismo: proverebbe solo che tutti fanno le stesse esperienze;
- dire che le idee sono in noi «implicitamente» non significa nulla: un'idea di cui non si è mai coscienti non è un'idea.

Il bersaglio è duplice: la metafisica cartesiana e, sul piano politico, l'idea che esistano princìpi indiscutibili da imporre agli altri — perché è dall'innatismo che nasce il **dogmatismo**, e dal dogmatismo l'intolleranza.`
          },
          {
            n: 5, romano: "5", titolo: "Idee semplici e complesse: la mente passiva e attiva",
            chiave: "La mente è una tabula rasa: riceve dai sensi e dalla riflessione le idee semplici, e su queste opera combinando, confrontando e astraendo.",
            testo: `**La tabula rasa.** «Supponiamo che la mente sia, come si dice, un **foglio bianco**, privo di ogni carattere, senza alcuna idea: come si riempie? […] A ciò rispondo con una sola parola: dall'**esperienza**».

L'esperienza ha due fonti:
- la **sensazione**: le idee che vengono dagli oggetti esterni attraverso i sensi (colori, suoni, durezza);
- la **riflessione**: l'osservazione interna delle operazioni della nostra mente (percepire, dubitare, volere, credere). È una specie di «senso interno».

**Le idee semplici** sono i mattoni elementari, e rispetto ad esse **la mente è totalmente passiva**: non può crearne né distruggerne, come non può creare un nuovo colore. Il limite dell'empirismo è questo: chi è cieco dalla nascita non avrà mai l'idea di rosso.

**Le qualità.** Locke distingue, riprendendo Galileo e Cartesio:
- **qualità primarie**: solidità, estensione, figura, numero, movimento. Sono **oggettive**, appartengono realmente ai corpi, e le nostre idee le **somigliano**;
- **qualità secondarie**: colori, suoni, sapori, odori, calore. Non esistono nei corpi come tali: sono **potenze** dei corpi (dovute alla disposizione delle loro particelle) di produrre in noi certe sensazioni. L'idea di rosso non somiglia a nulla che sia nel papavero.

**Le idee complesse** sono prodotte dall'**attività** della mente, che combina, confronta e astrae le idee semplici. Sono di tre tipi:
- **modi**: idee che non sussistono da sole (bellezza, gratitudine, triangolo, ora);
- **relazioni**: nate dal confronto (causa/effetto, identità, paternità);
- **sostanze**: e qui nasce il problema.

**La critica dell'idea di sostanza.** Che cos'è la «sostanza»? Osservo che certe qualità semplici (bianco, freddo, duro) vanno regolarmente insieme, e suppongo un **supporto** che le sostenga. Ma di questo supporto non ho alcuna idea: è «**un non so che**», l'idea confusa di un sostrato sconosciuto. Locke usa la storiella del filosofo indiano: il mondo poggia su un elefante, l'elefante su una tartaruga, e la tartaruga su… «qualcosa, non so cosa». È una critica moderatissima nella forma e devastante nella sostanza, che Berkeley e Hume porteranno alle estreme conseguenze.

**Le idee astratte** (l'«uomo in generale, né bianco né nero né alto né basso») sono per Locke prodotti della mente che servono a nominare i gruppi di cose simili: esistono solo gli individui. È un **nominalismo** moderato, e sarà il primo bersaglio di Berkeley.`
          },
          {
            n: 6, romano: "6", titolo: "I gradi e i limiti della conoscenza",
            chiave: "La conoscenza è accordo o disaccordo tra idee. È certissima su noi stessi e sulla matematica, dimostrativa su Dio, solo probabile sul mondo esterno.",
            testo: `**La definizione.** La conoscenza è «la percezione dell'accordo o disaccordo tra due idee». Non conosciamo direttamente le cose: conosciamo le nostre idee, e i rapporti tra esse. È una premessa carica di conseguenze — se conosco solo idee, come faccio a sapere che corrispondono a qualcosa fuori di me?

**I tre gradi di conoscenza**, in ordine decrescente di certezza:
- **intuitiva**: la mente coglie immediatamente l'accordo tra due idee, senza intermediari (il bianco non è nero, il cerchio non è un triangolo, **io esisto**). È la più certa di tutte;
- **dimostrativa**: l'accordo si coglie attraverso una catena di idee intermedie, cioè con un ragionamento. È la matematica; ed è per Locke anche il caso dell'**esistenza di Dio**, che egli dimostra a partire dalla propria esistenza e dal principio che nulla può produrre l'essere;
- **sensitiva**: la conoscenza dell'esistenza delle **cose esterne** presenti ai sensi. È il grado più basso e non è propriamente certezza, ma Locke la considera sufficiente: la differenza tra guardare il sole e ricordarlo, tra sentire il calore del fuoco e immaginarlo, è per chiunque evidente; e comunque la nostra conoscenza è adeguata «alle nostre necessità e ai nostri interessi», non a una curiosità infinita.

**I limiti.** Locke è netto: non conosciamo le **essenze reali** delle cose (che cosa sia davvero l'oro, al di là della lista delle sue qualità osservabili), ma solo le **essenze nominali**, cioè i grappoli di idee semplici a cui abbiamo dato un nome. La scienza naturale, quindi, non potrà mai essere una scienza dimostrativa come la matematica: sarà sempre **probabile**, fondata sull'osservazione. Ed è esattamente ciò che Newton stava facendo.

Sulla **probabilità** Locke costruisce la sua teoria della **fede** e dell'opinione: quando la conoscenza manca, si valutano i gradi di verosimiglianza secondo la conformità con l'esperienza e la testimonianza altrui. Una fede che pretendesse di essere superiore alla ragione sarebbe **entusiasmo**, cioè fanatismo: e l'entusiasmo è pericoloso perché sostituisce all'evidenza la sicurezza soggettiva.

**L'identità personale.** Locke innova radicalmente: l'identità di una persona non consiste nella sostanza (materiale o spirituale) ma nella **coscienza e nella memoria**. Sono lo stesso io di ieri perché ricordo di essere stato quello. Il caso, celebre, del principe e del ciabattino i cui ricordi si scambiano: la persona segue la coscienza, non il corpo. È l'origine di tutta la discussione moderna sull'identità personale.`
          },
          {
            n: 7, romano: "7", titolo: "La politica: diritti naturali, contratto, divisione dei poteri",
            chiave: "Lo stato di natura non è guerra ma libertà con una legge; il governo nasce per garantire vita, libertà e proprietà, ed è revocabile se tradisce lo scopo.",
            testo: `I *Due trattati sul governo* fondano il **liberalismo** moderno. Il primo confuta il diritto divino dei re (Filmer); il secondo costruisce la teoria positiva.

**Lo stato di natura**, contro Hobbes, **non è guerra**. È uno stato di **libertà** e **uguaglianza**, ma **non di licenza**: è già governato da una **legge di natura**, che la ragione può conoscere e che prescrive di non danneggiare «la vita, la salute, la libertà e i beni» altrui. Gli uomini hanno quindi **diritti naturali** già prima dello Stato, e sono diritti **inalienabili**.

**La proprietà.** È il punto più originale. Locke la fonda sul **lavoro**: la terra è data in comune da Dio, ma «ogni uomo ha una proprietà nella propria persona»; dunque quando mescola il proprio lavoro con una cosa naturale, quella cosa diventa sua. I limiti originari erano due — non accumulare più di quanto si possa usare senza sprecare, e lasciarne «abbastanza e altrettanto buona» per gli altri — ma l'invenzione del **denaro**, che non si deteriora, li rende superabili con il consenso tacito di tutti. È la giustificazione filosofica dell'accumulazione, e il punto su cui Locke sarà più criticato.

**Perché uscire dallo stato di natura**, se non è guerra? Perché mancano tre cose: una **legge stabile** conosciuta da tutti, un **giudice imparziale** (nello stato di natura ciascuno è giudice in causa propria, e questo è fonte di conflitti), e un **potere che faccia eseguire** le sentenze. Il difetto non è morale ma **giuridico**.

**Il contratto.** Gli uomini non trasferiscono tutti i diritti (contro Hobbes): cedono solo il **diritto di farsi giustizia da sé**. Il governo è un **fiduciario** (*trust*), incaricato di uno scopo preciso: la tutela dei diritti naturali. Ne segue che il potere è **limitato**, **condizionato** e **revocabile**: se il governo viola sistematicamente lo scopo per cui è stato istituito, si scioglie il vincolo e il popolo ha **diritto di resistenza**. È la legittimazione teorica della Gloriosa Rivoluzione, e passerà quasi alla lettera nella Dichiarazione d'indipendenza americana.

**La divisione dei poteri.** Locke distingue il **legislativo** (supremo, ma non arbitrario: deve governare con leggi generali e stabili), l'**esecutivo** e il **federativo** (guerra, pace, trattati). L'idea sarà perfezionata da Montesquieu con l'aggiunta del giudiziario.

**La tolleranza.** Nella *Lettera sulla tolleranza* Locke separa nettamente Stato e Chiesa: lo Stato si occupa dei **beni civili** (vita, libertà, proprietà, salute); la Chiesa è una **società volontaria** per la salvezza delle anime, e chiunque può entrarvi e uscirne. Due argomenti decisivi: il magistrato **non ha competenza** in materia di salvezza; e soprattutto la coercizione **non può produrre fede**, perché si può obbligare un uomo a dire ciò che non crede, non a credere. La tolleranza, però, ha limiti che rivelano il suo tempo: Locke la nega agli **atei** (perché senza timore di Dio i giuramenti non vincolano) e ai **cattolici** (perché obbedirebbero a un sovrano straniero).`
          }
        ]
      },
      {
        titolo: "Capitolo 3 — Berkeley e Hume",
        sottotitolo: "Esse est percipi, e la fine della metafisica",
        canti: [
          {
            n: 8, romano: "8", titolo: "Newton: la fisica classica e il metodo",
            chiave: "«Non fingo ipotesi»: la scienza descrive matematicamente i fenomeni senza pretendere di conoscerne l'essenza. È il modello che tutta l'età dei lumi imiterà.",
            testo: `**Isaac Newton** (1642–1727) è il padre della **fisica classica** e il modello di scienziato per tutto il Settecento. Nei *Philosophiae naturalis principia mathematica* (1687) espone:
- i tre **principi della dinamica** (inerzia; forza uguale a massa per accelerazione; azione e reazione);
- la legge di **gravitazione universale**: due corpi si attraggono con una forza proporzionale al prodotto delle masse e inversamente al quadrato della distanza. Con essa spiega insieme la caduta dei gravi, le orbite dei pianeti, le maree, le comete: **cielo e terra unificati**;
- il **calcolo delle flussioni** (il calcolo infinitesimale), sviluppato indipendentemente da Leibniz;
- in *Ottica*, la scomposizione della luce bianca nello spettro con il prisma.

**Il metodo.** Newton lo riassume nella formula ***hypotheses non fingo***, «non invento ipotesi». Significa: non pretendo di dire **che cosa sia** la gravità, se agisca per contatto o a distanza, quale ne sia la causa metafisica; mi limito a stabilire **come** si comporta, cioè la legge matematica che ne descrive gli effetti, ricavata dai fenomeni e verificata su di essi. La spiegazione delle cause ultime è rinviata, o rinunciata.

È una rinuncia gravida di conseguenze filosofiche. La scienza smette di essere **metafisica** e diventa **descrizione matematica dei fenomeni**: una posizione che Locke aveva teorizzato («non conosciamo le essenze reali»), che Hume porterà alle conclusioni scettiche e che Kant tenterà di fondare definitivamente.

**Le regole del filosofare** che Newton enuncia — non ammettere più cause di quante siano necessarie e sufficienti; attribuire agli stessi effetti le stesse cause; considerare universali le proprietà riscontrate in tutti i corpi su cui si è potuto sperimentare; considerare vere le proposizioni ricavate per induzione finché non intervengano fenomeni che le smentiscano — sono il manifesto metodologico dell'Illuminismo.

**Spazio e tempo assoluti.** Newton li concepisce come contenitori reali, indipendenti dai corpi: lo spazio assoluto è addirittura il *sensorium Dei*, l'«organo di senso» divino. Leibniz obietterà che spazio e tempo sono solo **relazioni** tra corpi ed eventi (celebre il carteggio con Clarke): la disputa arriverà fino a Einstein.`
          },
          {
            n: 9, romano: "9", titolo: "Berkeley: esse est percipi",
            chiave: "Se conosciamo solo idee, che senso ha parlare di una materia che nessuno percepisce? Berkeley la elimina: essere significa essere percepito.",
            testo: `**George Berkeley** (1685–1753), irlandese, vescovo anglicano, pubblica giovanissimo il *Trattato sui principi della conoscenza umana* (1710) e i *Dialoghi tra Hylas e Filonous*.

**Il punto di partenza.** Berkeley prende l'empirismo di Locke e ne elimina le incoerenze. Locke aveva detto: conosciamo solo idee; e aveva mantenuto una materia sconosciuta dietro di esse, e la distinzione tra qualità primarie (oggettive) e secondarie (soggettive). Berkeley mostra che entrambe le cose sono insostenibili.

**Contro le idee astratte.** Prima mossa: non possiamo formare l'idea astratta di «triangolo in generale, né scaleno né equilatero», né quella di «estensione senza colore». Ogni idea è **particolare**; le parole generali sono solo segni che stanno per molte idee particolari. Ed è dall'illusione delle idee astratte che nascono i falsi problemi della filosofia — a cominciare da quello della materia.

**Contro la distinzione tra qualità primarie e secondarie.** Gli argomenti di Locke per mostrare che i colori sono soggettivi (variano col punto di vista, con lo stato dell'osservatore) valgono identici per l'estensione e la figura: la stessa cosa appare grande o piccola a seconda della distanza, liscia o rugosa a seconda dello strumento. E soprattutto: **non si può pensare l'estensione senza qualità sensibili**. Dunque anche le qualità primarie esistono solo nella mente.

**L'immaterialismo.** Se tutte le qualità sono nella mente, che cosa resta della «materia»? Una **sostanza inerte, inestesa, insensibile, di cui nessuno ha mai avuto alcuna percezione**: cioè nulla, un'astrazione senza contenuto. Berkeley la elimina con il rasoio dell'empirismo. Il principio è: ***esse est percipi*** — **essere significa essere percepito** (e per gli spiriti, *esse est percipere*, essere significa percepire).

**Non è idealismo soggettivo né scetticismo.** Berkeley insiste su questo, e va capito bene: egli **non nega la realtà** delle cose. Nega solo che dietro le cose percepite ci sia un sostrato materiale inconoscibile. Le mele restano mele, il fuoco brucia. Anzi, sostiene di essere lui il difensore del senso comune contro i filosofi: sono loro ad aver inventato un mondo invisibile dietro quello che vediamo, aprendo la porta allo scetticismo.

**Le due obiezioni classiche e le risposte.**
- *Le cose cessano di esistere quando non le guardo?* No: continuano a essere percepite da **Dio**. Dio è lo spirito infinito che percepisce sempre tutto e che imprime in noi le idee sensibili. Qui l'immaterialismo diventa una prova dell'esistenza di Dio: l'ordine e la costanza delle nostre percezioni, che non dipendono dalla nostra volontà, esigono uno Spirito che le produca.
- *Come si distingue la realtà dal sogno?* Le idee **reali** sono più vive, più ordinate, coerenti tra loro e indipendenti dalla nostra volontà; quelle dell'immaginazione sono deboli e arbitrarie. Le **leggi di natura** sono le regolarità con cui Dio ci presenta le idee: un vero e proprio **linguaggio** con cui parla agli uomini, e la scienza ne è la grammatica.

**Il significato.** Berkeley è il punto in cui l'empirismo, applicato con rigore, distrugge il concetto stesso di materia. Hume applicherà lo stesso rasoio all'altra sostanza — l'**io** — e al **nesso causale**.`
          },
          {
            n: 10, romano: "10", titolo: "Hume: impressioni, idee, associazione",
            chiave: "Tutto il contenuto della mente deriva dalle impressioni. Se un'idea non risale a nessuna impressione, è una parola vuota: è il criterio che smonta la metafisica.",
            testo: `**David Hume** (1711–1776), scozzese, pubblica a ventotto anni il *Trattato sulla natura umana* (che «cadde morto dai torchi»), poi la più accessibile *Ricerca sull'intelletto umano*, saggi politici ed economici, una *Storia d'Inghilterra* di enorme successo e, postumi, i *Dialoghi sulla religione naturale*.

**Il progetto: la scienza della natura umana.** Hume vuole fare per la mente ciò che Newton ha fatto per i corpi: individuare **poche leggi semplici** che spieghino il funzionamento del pensiero, procedendo per osservazione ed esperienza, senza ipotesi metafisiche. La «scienza dell'uomo» è la scienza fondamentale, perché tutte le altre dipendono dalle nostre facoltà.

**Impressioni e idee.** Tutte le percezioni si dividono in:
- **impressioni**: le percezioni originarie, vivaci e forti (sensazioni, passioni, emozioni);
- **idee**: le copie sbiadite delle impressioni nel pensiero e nella memoria.

Il **principio di derivazione**: ogni idea semplice deriva da un'impressione semplice che la precede. La mente può combinare le idee (l'unicorno, la montagna d'oro) ma non crearne di nuove.

Da qui il **criterio di significanza**, l'arma più potente della filosofia di Hume: quando un termine filosofico è sospetto, si chiede — «**da quale impressione deriva questa idea?**». Se non se ne trova nessuna, il termine è privo di significato. È l'antenato diretto del principio di verificazione del neopositivismo.

**Le relazioni tra idee e i dati di fatto** (la «forchetta di Hume»):
- le **relazioni tra idee** (matematica, logica): sono certe e necessarie, si scoprono col solo pensiero, il loro contrario è contraddittorio. Ma **non dicono nulla sul mondo**;
- i **dati di fatto**: riguardano l'esistenza, si conoscono solo con l'esperienza, il loro contrario è sempre possibile («il sole non sorgerà domani» non è contraddittorio). Ma **non sono mai necessari**.

La conclusione, alla fine della *Ricerca*, è programmatica e famosa: prendendo in mano un volume, chiediamoci se contenga ragionamenti astratti su quantità e numero, o ragionamenti sperimentali su fatti; se no, «diamolo alle fiamme, perché non può contenere altro che sofismi e illusione».

**Le leggi di associazione.** Le idee si legano nella mente secondo tre principi, che sono la «gravitazione» del mondo mentale: **somiglianza**, **contiguità** nello spazio e nel tempo, **causa ed effetto**. È la terza a reggere tutta la conoscenza dei fatti — ed è quella che Hume sottoporrà all'analisi più celebre della storia della filosofia moderna.`
          },
          {
            n: 11, romano: "11", titolo: "La critica della causalità e dell'io",
            chiave: "Non vediamo mai un nesso necessario tra causa ed effetto: vediamo una successione ripetuta. La necessità è un'abitudine della nostra mente, non una legge del mondo.",
            testo: `**Il problema.** Tutti i ragionamenti sui fatti si fondano sul rapporto **causa-effetto**: se vedo del fumo concludo che c'è del fuoco, se ricevo una lettera concludo che qualcuno l'ha scritta. Su che cosa si fonda questo rapporto?

**Non sulla ragione.** Nessuna analisi del concetto di «uovo» permette di dedurre il pulcino: il rapporto causale non è una relazione tra idee, non è conoscibile *a priori*, e il suo contrario è sempre pensabile senza contraddizione. «Adamo, per quanto perfette fossero le sue facoltà, non avrebbe potuto dedurre dalla fluidità e trasparenza dell'acqua che essa lo avrebbe soffocato».

**Non sull'esperienza, come nesso.** Osservando due eventi, io percepisco:
- la **contiguità** (sono vicini nello spazio);
- la **priorità temporale** (uno precede l'altro);
- la **congiunzione costante** (li ho sempre visti insieme).

Ma **non percepisco mai la connessione necessaria**. Il legame che credo di vedere non è dato in nessuna impressione. Nella famosa immagine delle palle da biliardo: vedo una palla muoversi, toccarne un'altra, e la seconda muoversi. Non vedo la «forza» che passa dall'una all'altra.

**Il problema dell'induzione.** E il passaggio dai casi osservati a quelli futuri? Si fonda sul principio dell'**uniformità della natura** — che il futuro somiglierà al passato. Ma questo principio **non è dimostrabile**: non è una verità logica (è pensabile che la natura cambi), e non lo si può provare con l'esperienza senza cadere in un **circolo vizioso**, perché è proprio ciò che si vuole dimostrare. È il **problema dell'induzione**, che nessuno ha risolto da allora e che Kant dirà averlo «risvegliato dal sonno dogmatico».

**La soluzione: l'abitudine.** Se non è la ragione, che cosa ci fa credere nella causalità? L'**abitudine** (*custom*), che Hume chiama «la grande guida della vita umana». La ripetizione produce nella mente una **transizione naturale**: presentata l'una idea, la mente passa all'altra. La necessità che attribuiamo alle cose è dunque una **propensione psicologica** proiettata sul mondo. La causalità non è una legge dell'essere, è una legge del **credere**.

Attenzione a non caricare Hume di più scetticismo di quanto ne abbia. Egli **non dice** che non dobbiamo credere alla causalità: dice che quella credenza è naturale, inevitabile e utilissima — semplicemente non è **razionalmente fondata**. La natura, dice, non ha lasciato alla nostra ragione una questione tanto importante.

**La critica del mondo esterno.** Analogamente, la credenza nell'esistenza continua e indipendente dei corpi non deriva né dai sensi (che danno solo percezioni) né dalla ragione: deriva dall'immaginazione, che coglie la **coerenza e costanza** delle percezioni e vi aggiunge l'idea di una identità continua.

**La critica dell'io.** Il colpo finale. Cerchiamo l'impressione da cui deriva l'idea di «io»: «per parte mia, quando entro più intimamente in ciò che chiamo me stesso, mi imbatto sempre in qualche particolare percezione — di caldo o freddo, luce o ombra, amore o odio, piacere o dolore. **Non riesco mai a sorprendere me stesso senza una percezione**, e non riesco mai a osservare nulla se non la percezione». L'io non è una sostanza: è «**un fascio o collezione di percezioni diverse, che si succedono con inconcepibile rapidità**». La mente è come un **teatro** dove le percezioni compaiono e passano — con l'avvertenza che non c'è nessun palcoscenico e nessuno spettatore.

Restano dunque demolite le tre grandi sostanze della metafisica: la materia (Berkeley), l'io (Hume) e — con la critica delle prove — Dio.`
          },
          {
            n: 12, romano: "12", titolo: "Morale, religione, politica",
            chiave: "La morale non nasce dalla ragione ma dal sentimento; dall'«è» non si ricava il «deve»; e le prove dell'esistenza di Dio non reggono all'analisi empirica.",
            testo: `**La morale del sentimento.** «La ragione è, e deve soltanto essere, **schiava delle passioni**». Non è un elogio dell'irrazionalità: significa che la ragione stabilisce i **mezzi** e i fatti, ma non può da sola muovere all'azione né fissare i **fini**. Se osservo un omicidio, la ragione mi dice come è avvenuto; ciò che lo rende *cattivo* non sta nei fatti, sta nel **sentimento di disapprovazione** che sorge in me. La virtù è ciò che suscita un piacevole sentimento di approvazione nello spettatore imparziale.

Il fondamento è la **simpatia**: la capacità naturale di partecipare ai sentimenti altrui, che estende la nostra approvazione oltre l'interesse personale. E il criterio di fatto è l'**utilità**: approviamo le qualità utili o piacevoli a noi o agli altri. Da qui parte la linea che porta all'**utilitarismo** di Bentham e Mill.

**La legge di Hume.** In un passo brevissimo e decisivo, Hume osserva che gli autori di morale procedono con proposizioni legate da «è» e «non è», e improvvisamente passano a proposizioni legate da «**deve**» e «non deve», senza spiegare come. Da giudizi di fatto non si può derivare un giudizio di valore: è la **legge di Hume**, o «grande divario» tra essere e dover essere, e resta uno dei pilastri della filosofia morale contemporanea (chi la viola commette la «fallacia naturalistica»).

**La religione.** Hume è il critico più radicale del Settecento, e prudente: i *Dialoghi sulla religione naturale* uscirono postumi.
- **Contro i miracoli**: un miracolo è una violazione delle leggi di natura, cioè l'evento con la più bassa probabilità concepibile, mentre l'errore o l'inganno dei testimoni sono eventi comunissimi. Sarà dunque sempre più ragionevole credere che il testimone si sbagli.
- **Contro l'argomento del disegno** (l'unica prova che i suoi contemporanei prendessero sul serio): l'analogia tra il mondo e una macchina è debole; non abbiamo esperienza di altri mondi né della loro produzione; e anche ammettendo un ordinatore, non se ne può dedurre che sia unico, infinito, perfetto o buono — l'universo, con i suoi mali, sembra piuttosto l'opera di un artigiano inesperto o di una divinità indifferente. Il **problema del male**, ripreso da Epicuro, viene riformulato con impressionante nettezza.
- **Sull'origine della religione** (*Storia naturale della religione*): non nasce dalla ragione ma dalla **paura** e dalla speranza degli uomini davanti a cause ignote; la forma originaria è il politeismo, non il monoteismo.

La conclusione è uno **scetticismo mitigato**: la ragione non fonda quasi nulla, ma la **natura** ci fa credere e agire ugualmente. «La natura ci mantiene sempre in un'attività non abbastanza intensa da abbrutirci»: uscito dallo studio, il filosofo gioca a backgammon con gli amici, e le sue vertigini scettiche si dissolvono.

**Politica.** Hume critica il **contratto sociale**: nessuno stato è mai nato da un patto, e nessuno ha mai promesso obbedienza. L'obbligo politico si fonda sull'**utilità** e sull'abitudine, cioè sul fatto che il governo funziona. È una posizione conservatrice nel metodo e liberale nei contenuti, che influenzerà Burke e il pensiero politico anglosassone.

**L'eredità.** L'empirismo, condotto con coerenza, ha smontato la metafisica ma ha anche minato la fondazione della **scienza** (se l'induzione non è fondata, la fisica di Newton non è certa). È il paradosso da cui parte **Kant**: come salvare la scienza dopo Hume.`
          }
        ]
      }
    ],
    personaggi: [
      {
        gruppo: "1. Hobbes",
        voci: [
          { nome: "Materialismo", alt: [], desc: "Esiste solo il corpo: «sostanza incorporea» è contraddittorio come «cerchio quadrato». Anche i pensieri sono movimenti." },
          { nome: "Ragionare è calcolare", alt: ["computatio"], desc: "Pensare è sommare e sottrarre nomi. La verità sta nelle proposizioni e dipende dalle definizioni: convenzionalismo ante litteram." },
          { nome: "Stato di natura", alt: ["bellum omnium"], desc: "Non una fase storica ma ciò che accade tolto il potere comune: competizione, diffidenza, gloria. Vita «solitaria, povera, sgradevole, brutale e breve»." },
          { nome: "Ius in omnia", alt: [], desc: "Nello stato di natura ciascuno ha diritto su tutto: un diritto di tutti su tutto equivale a un diritto di nessuno su niente." },
          { nome: "Leggi di natura", alt: [], desc: "Precetti razionali: cercare la pace, rinunciare al diritto su tutto, rispettare i patti. Ma «i patti senza la spada sono solo parole»." },
          { nome: "Leviatano", alt: ["dio mortale"], desc: "Lo Stato nato dal patto di tutti con tutti. Potere assoluto, indivisibile e irrevocabile perché il sovrano non è parte del contratto." },
          { nome: "Diritto alla vita", alt: [], desc: "L'unico limite: se il sovrano attenta alla vita del suddito o non può più proteggerlo, il patto perde efficacia. Il germe del diritto individuale inalienabile." }
        ]
      },
      {
        gruppo: "2. Locke",
        voci: [
          { nome: "Tabula rasa", alt: ["foglio bianco"], desc: "La mente non ha idee innate: tutto viene dall'esperienza, per sensazione e per riflessione." },
          { nome: "Critica dell'innatismo", alt: [], desc: "Nessun principio gode di consenso universale; e comunque il consenso proverebbe solo esperienze comuni. Dall'innatismo nasce il dogmatismo." },
          { nome: "Qualità primarie / secondarie", alt: [], desc: "Estensione, figura, moto sono nei corpi; colori, suoni, sapori sono potenze dei corpi di produrre sensazioni in noi." },
          { nome: "Idee semplici / complesse", alt: [], desc: "Rispetto alle semplici la mente è passiva; le complesse (modi, relazioni, sostanze) le costruisce combinando, confrontando, astraendo." },
          { nome: "Sostanza come «non so che»", alt: [], desc: "Il supposto supporto delle qualità di cui non abbiamo alcuna idea. Critica moderata nella forma, devastante nelle conseguenze." },
          { nome: "Gradi di conoscenza", alt: [], desc: "Intuitiva (certissima: io esisto), dimostrativa (matematica, esistenza di Dio), sensitiva (le cose esterne: la meno certa ma sufficiente)." },
          { nome: "Essenza reale / nominale", alt: [], desc: "Non conosciamo che cosa siano davvero le cose, ma solo i grappoli di qualità che abbiamo nominato: la scienza naturale resta probabile." },
          { nome: "Identità personale", alt: ["memoria"], desc: "La persona non è una sostanza ma la continuità della coscienza: il principe e il ciabattino seguono i propri ricordi, non i corpi." },
          { nome: "Diritti naturali", alt: ["vita, libertà, proprietà"], desc: "Esistono già nello stato di natura, che è libertà regolata da una legge di ragione, non guerra. Sono inalienabili." },
          { nome: "Proprietà dal lavoro", alt: [], desc: "Mescolando il proprio lavoro con una cosa naturale la si fa propria. I limiti originari sono superati dall'invenzione del denaro." },
          { nome: "Trust", alt: ["diritto di resistenza"], desc: "Il governo è un fiduciario incaricato di tutelare i diritti: se tradisce lo scopo, il popolo può riprendersi il potere." },
          { nome: "Tolleranza", alt: [], desc: "Lo Stato si occupa dei beni civili, la Chiesa è società volontaria. La coercizione non può produrre fede. Esclusi però atei e cattolici." }
        ]
      },
      {
        gruppo: "3. Newton e Berkeley",
        voci: [
          { nome: "Hypotheses non fingo", alt: [], desc: "La scienza descrive matematicamente come i fenomeni si comportano, senza pretendere di dirne l'essenza o la causa ultima." },
          { nome: "Gravitazione universale", alt: [], desc: "Forza proporzionale alle masse e inversa al quadrato della distanza: unifica caduta dei gravi, orbite, maree e comete." },
          { nome: "Spazio e tempo assoluti", alt: ["sensorium Dei"], desc: "Contenitori reali indipendenti dai corpi. Leibniz obietta che sono solo relazioni: il carteggio con Clarke arriva fino a Einstein." },
          { nome: "Contro le idee astratte", alt: ["Berkeley"], desc: "Non possiamo pensare il triangolo in generale né l'estensione senza colore: ogni idea è particolare. Da qui nascono i falsi problemi." },
          { nome: "Esse est percipi", alt: ["immaterialismo"], desc: "Essere è essere percepito. La materia come sostrato insensibile e mai percepito è un'astrazione vuota, eliminata dal rasoio empirista." },
          { nome: "Dio percipiente", alt: [], desc: "Le cose continuano a esistere perché percepite da Dio, che imprime in noi le idee sensibili: l'ordine delle percezioni è un linguaggio divino." },
          { nome: "Realtà e immaginazione", alt: [], desc: "Le idee reali sono vivaci, ordinate, coerenti e indipendenti dalla volontà; quelle immaginarie deboli e arbitrarie." }
        ]
      },
      {
        gruppo: "4. Hume",
        voci: [
          { nome: "Impressioni e idee", alt: [], desc: "Le impressioni sono percezioni vivaci, le idee copie sbiadite. Ogni idea semplice deriva da un'impressione." },
          { nome: "Criterio di significanza", alt: [], desc: "«Da quale impressione deriva questa idea?» Se non se ne trova nessuna, il termine è vuoto. Antenato del principio di verificazione." },
          { nome: "Forchetta di Hume", alt: ["relazioni tra idee / dati di fatto"], desc: "Le prime sono certe ma non dicono nulla sul mondo; i secondi riguardano l'esistenza ma non sono mai necessari." },
          { nome: "Leggi di associazione", alt: [], desc: "Somiglianza, contiguità, causa-effetto: la «gravitazione» del mondo mentale." },
          { nome: "Critica della causalità", alt: ["palle da biliardo"], desc: "Percepiamo contiguità, priorità e congiunzione costante, mai la connessione necessaria. Non c'è impressione del nesso causale." },
          { nome: "Problema dell'induzione", alt: ["uniformità della natura"], desc: "Il principio che il futuro somiglierà al passato non è dimostrabile né logicamente né empiricamente, senza circolo vizioso." },
          { nome: "Abitudine", alt: ["custom"], desc: "«La grande guida della vita umana»: la necessità causale è una propensione psicologica proiettata sul mondo, non una legge dell'essere." },
          { nome: "Io come fascio di percezioni", alt: [], desc: "Non troviamo mai un'impressione dell'io: la mente è un teatro di percezioni che si succedono, senza palcoscenico né spettatore." },
          { nome: "Ragione schiava delle passioni", alt: [], desc: "La ragione stabilisce mezzi e fatti ma non muove all'azione né fissa i fini: la morale nasce dal sentimento." },
          { nome: "Simpatia e utilità", alt: [], desc: "Approviamo per naturale partecipazione ai sentimenti altrui, e in base a ciò che è utile o piacevole. Da qui l'utilitarismo." },
          { nome: "Legge di Hume", alt: ["essere / dover essere"], desc: "Da proposizioni di fatto non si può derivare un dovere. Chi lo fa commette la fallacia naturalistica." },
          { nome: "Critica dei miracoli", alt: [], desc: "È sempre più probabile che il testimone si inganni piuttosto che una legge di natura sia stata violata." },
          { nome: "Critica del disegno", alt: [], desc: "L'analogia tra mondo e macchina è debole; e anche ammesso un ordinatore, non se ne deduce che sia unico, infinito o buono." },
          { nome: "Scetticismo mitigato", alt: [], desc: "La ragione fonda poco, ma la natura ci fa credere e agire: uscito dallo studio, il filosofo gioca a backgammon." }
        ]
      }
    ]
  }

});

/* Aggiunge le unità del volume 2A all'ordine di visualizzazione */
FILOSOFIA_ORDINE.push(
  "umanesimo-rinascimento",
  "rivoluzione-scientifica",
  "cartesio",
  "pascal-spinoza-leibniz",
  "empirismo-inglese"
);
