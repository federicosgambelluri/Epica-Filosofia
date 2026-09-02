/* ============================================================
   DATI — FILOSOFIA · Volume 2B
   Abbagnano–Fornero, "La ricerca del pensiero" 2B
   «Dall'Illuminismo a Hegel»

   Unità 6 — Vico, l'Illuminismo e Rousseau
   Unità 7 — Kant
   Unità 8 — Il Romanticismo e i fondatori dell'idealismo
   Unità 9 — Hegel
   ============================================================ */

Object.assign(FILOSOFIA, {

  /* ------------------------------------------------ UNITÀ 6 */
  illuminismo: {
    id: "illuminismo",
    titolo: "Vico e l'Illuminismo",
    autore: "Unità 6 · Il secolo dei Lumi",
    sottotitolo: "La ragione contro i pregiudizi, e Rousseau",
    epoca: "XVIII secolo",
    lingua: "Napoli, Parigi, Ginevra",
    tag: ["Vico", "Illuminismo", "Voltaire", "Rousseau", "Contratto"],
    epigrafe: "Sapere aude! Abbi il coraggio di servirti della tua propria intelligenza.",
    colore: "oro",
    parti: [
      {
        titolo: "Capitolo 1 — Vico",
        sottotitolo: "La storia è opera degli uomini, e per questo si può conoscere",
        canti: [
          {
            n: 1, romano: "1", titolo: "Un filosofo della storia contro Cartesio",
            chiave: "Vico contesta il primato della matematica: conosciamo davvero solo ciò che facciamo. Perciò la vera scienza umana non è la fisica ma la storia.",
            testo: `**Giambattista Vico** (1668–1744), napoletano, professore mal pagato di retorica, è una figura isolata e in gran parte incompresa dai contemporanei. Sarà riscoperto nell'Ottocento — da Michelet, da Coleridge, da De Sanctis, da Croce — e riconosciuto come uno dei pensatori più originali della modernità.

**La polemica contro Cartesio.** Vico attacca il cartesianesimo su tre fronti:
- l'idea che si debba respingere tutto ciò che non è chiaro e distinto **impoverisce** il sapere: elimina la storia, la poesia, l'eloquenza, la prudenza politica, tutto ciò che riguarda il verosimile e il particolare;
- il metodo geometrico è **sterile** fuori dal proprio campo: la vita umana non si tratta *more geometrico*;
- e soprattutto: la matematica è certa non perché rispecchi la realtà, ma **perché la costruiamo noi**. I suoi enti (punto, linea) sono nostre finzioni: per questo li dominiamo perfettamente.

**Il verum ipsum factum.** Da qui il principio che rovescia il criterio moderno di verità: ***verum ipsum factum***, «il vero è il fatto stesso» — si conosce con verità **solo ciò che si è fatto**.

Le conseguenze sono radicali:
- **Dio** conosce perfettamente la **natura**, perché l'ha creata;
- l'**uomo** non può conoscere la natura in senso pieno: può solo osservarla dall'esterno e formularne modelli. La fisica non è vera scienza ma «coscienza» di ciò che non abbiamo fatto;
- l'uomo conosce invece perfettamente la **matematica** (che inventa) e — questa è la scoperta di Vico — il **mondo civile**, cioè la **storia**, «perché è stato fatto dagli uomini, onde se ne possono, perché se ne debbono, ritrovare i princìpi dentro le modificazioni della nostra medesima mente umana».

È il capovolgimento del giudizio corrente: la storia non è la disciplina meno rigorosa, è **la più conoscibile di tutte**. Vico fonda così le «scienze dello spirito» come sapere autonomo, e apre la strada a Herder, Hegel, Dilthey e a tutta la moderna riflessione sul metodo storico.`
          },
          {
            n: 2, romano: "2", titolo: "La Scienza nuova: storia ideale eterna e tre età",
            chiave: "Tutte le nazioni percorrono lo stesso ciclo: età degli dèi, degli eroi, degli uomini. Poi la ricaduta nella barbarie, e si ricomincia: corsi e ricorsi.",
            testo: `La ***Scienza nuova*** (tre edizioni, 1725–1744) vuole essere per il mondo civile ciò che i *Principia* di Newton sono per la natura: la scoperta delle leggi che lo governano.

**La storia ideale eterna.** Vico distingue la **storia empirica**, con i suoi fatti irripetibili, e la **«storia ideale eterna sopra la quale corrono in tempo le storie di tutte le nazioni»**: uno schema di sviluppo comune, dettato dalla natura umana, che ogni popolo attraversa nei propri tempi e modi. Non è un determinismo rigido: è una **struttura di possibilità** che si realizza in forme diverse.

**Le tre età** — riprese da un'idea egizia — sono insieme fasi storiche e forme dello spirito:
- **Età degli dèi**. Gli uomini primitivi, «bestioni» dominati dai sensi e dalla fantasia, sentono il tuono e credono che il cielo sia un corpo animato che li minaccia: nasce la religione, poi il matrimonio e la sepoltura (i tre «princìpi» universali di ogni civiltà). Governo **teocratico**, diritto divino, linguaggio **muto** fatto di gesti e simboli sacri.
- **Età degli eroi**. Dominio dei **padri di famiglia** e poi delle aristocrazie sui *famuli*, i rifugiati resi servi. Governo **aristocratico**, diritto della forza, linguaggio per **imprese e blasoni**; è l'epoca dei poemi omerici e delle leggi feroci delle XII tavole. La lotta fra plebei e patrizi spinge oltre.
- **Età degli uomini**. Si riconosce l'uguale natura umana di tutti. Governo **democratico** o monarchico, diritto fondato sulla ragione, linguaggio **articolato** e convenzionale, prosa, filosofia.

**Corsi e ricorsi.** L'età degli uomini, però, contiene il proprio veleno: l'eccesso di riflessione produce scetticismo, dissoluzione dei legami, «**barbarie della riflessione**», peggiore della barbarie primitiva dei sensi perché fredda e calcolatrice. Le nazioni si disgregano e ricadono in una nuova infanzia, da cui il ciclo **ricomincia** — non identico, ma analogo. È la teoria dei **corsi e ricorsi storici**, esemplificata dal passaggio da Roma antica al Medioevo e alla nuova civiltà europea.

**La sapienza poetica.** La parte più originale e più feconda. Vico sostiene che i primi uomini non pensavano peggio di noi: pensavano **diversamente**, per **fantasia** e non per astrazione. I loro «universali fantastici» (Achille per il valore, Ulisse per l'astuzia) sono un modo di generalizzare tramite immagini. Il mito non è menzogna né allegoria di verità filosofiche: è la forma originaria e vera del pensiero di un'epoca, e va interpretato **storicamente**. Da qui deriva anche la sua tesi celebre su **Omero**: non un individuo ma la voce collettiva del popolo greco.

**La provvidenza.** Vico è cattolico e non nega la provvidenza, ma la concepisce in modo nuovissimo: essa opera **dentro** la storia, non dall'esterno, servendosi delle passioni degli uomini. Dalla ferocia, dall'avarizia e dall'ambizione — «tre vizi che manderebbero in rovina il genere umano» — nascono milizia, mercatura e politica. Gli uomini, perseguendo scopi egoistici, producono senza volerlo un ordine sociale. È l'idea di **eterogenesi dei fini**, che ritroveremo nella «mano invisibile» di Adam Smith e nell'«astuzia della ragione» di Hegel.`
          }
        ]
      },
      {
        titolo: "Capitolo 2 — Caratteri generali dell'Illuminismo",
        sottotitolo: "Il programma dei Lumi",
        canti: [
          {
            n: 3, romano: "3", titolo: "Il programma illuministico: sapere aude",
            chiave: "Non una dottrina ma un atteggiamento: usare la propria ragione senza sottomettersi ad autorità. È l'uscita dell'uomo dallo stato di minorità.",
            testo: `L'**Illuminismo** è il movimento culturale che domina l'Europa del Settecento — la Francia dei *philosophes*, l'Inghilterra, la Germania, l'Italia di Napoli e Milano.

**La definizione classica** è quella che Kant darà nel 1784, rispondendo alla domanda «Che cos'è l'Illuminismo?»: «l'**uscita dell'uomo dallo stato di minorità** che egli deve imputare a sé stesso. Minorità è l'incapacità di valersi del proprio intelletto senza la guida di un altro. […] ***Sapere aude!*** Abbi il coraggio di servirti della tua propria intelligenza: ecco il motto dell'Illuminismo».

Tre cose vanno sottolineate in questa definizione:
- la minorità è **colpevole**: non deriva da mancanza di intelligenza ma da **pigrizia e viltà**. È comodo avere un libro che pensi per me, un direttore di coscienza che decida al posto mio;
- l'illuminismo non è un patrimonio di verità ma un **uso** della ragione;
- richiede una condizione pubblica: la **libertà** di «fare pubblico uso della propria ragione in tutti i campi».

**I caratteri del movimento.**
- **Ragione critica, non metafisica.** La ragione illuministica non costruisce sistemi come quelli di Spinoza o Leibniz: è **analitica e strumentale**, sul modello di Newton e di Locke. Non pretende di dedurre il mondo, lo esamina. D'Alembert dirà che il secolo ha sostituito «lo spirito di sistema» con «lo spirito sistematico».
- **Lotta ai pregiudizi.** L'obiettivo polemico è la triade **superstizione, fanatismo, intolleranza**. Voltaire riassume tutto nel grido *Écrasez l'infâme*, schiacciate l'infame — cioè il fanatismo religioso.
- **Empirismo e antimetafisica.** Non ciò che si può immaginare, ma ciò che si può verificare. Le grandi costruzioni metafisiche vengono liquidate come «romanzi dell'anima».
- **Fiducia nel progresso.** La conoscenza si accumula, l'umanità può migliorare le proprie condizioni. Il progresso non è però automatico: dipende dall'educazione e dalle riforme.
- **Cosmopolitismo e filantropia.** Il *philosophe* si sente cittadino del mondo, e la sua etica è la beneficenza pubblica.
- **Ruolo nuovo dell'intellettuale.** Non più erudito chiuso nello studio ma **uomo pubblico** che interviene, polemizza, si rivolge all'opinione. Nascono i salotti, i caffè, le gazzette, e con essi l'**opinione pubblica** come forza politica.

**Le premesse**: il modello scientifico newtoniano, l'empirismo lockiano, la crisi della coscienza europea di fine Seicento (Bayle), il libertinismo, e sul piano sociale l'ascesa della borghesia.`
          },
          {
            n: 4, romano: "4", titolo: "Illuminismo e religione: deismo, ateismo, tolleranza",
            chiave: "Si critica la religione positiva — rivelazione, miracoli, clero — in nome di una religione naturale fondata sulla ragione; alcuni arrivano all'ateismo materialista.",
            testo: `Il rapporto con la religione è il tema più incandescente del secolo, ed è sbagliato ridurlo all'ateismo: le posizioni sono molte.

**La critica alle religioni positive** è comune a tutti. Si contestano: le **rivelazioni** (perché mai Dio avrebbe parlato a un popolo solo?), i **miracoli** (che violerebbero le leggi che Dio stesso ha posto), i **dogmi** incomprensibili, il **potere del clero**, e soprattutto l'**intolleranza**. La molla è spesso morale prima che teorica: le guerre di religione e i roghi.

**Il deismo** è la posizione maggioritaria. Ammette una **religione naturale**: esiste un Dio, conoscibile con la ragione dall'ordine del mondo, creatore e «grande orologiaio», che non interviene con miracoli né rivelazioni; il culto che gli è dovuto è la **vita morale**. Voltaire ne è il rappresentante tipico: «se Dio non esistesse, bisognerebbe inventarlo» — frase che dice insieme la sua convinzione e la sua idea del valore sociale della religione. Deisti erano molti dei padri fondatori americani.

**L'ateismo materialista** è la posizione di una minoranza radicale, il circolo di **d'Holbach** e **La Mettrie**: la materia è eterna e dotata di movimento proprio; l'uomo è interamente materiale (*L'uomo macchina* di La Mettrie); l'idea di Dio nasce dalla paura e serve ai potenti. **Helvétius** riconduce tutta la morale all'interesse e all'educazione.

**Bayle** e la tolleranza. **Pierre Bayle** (1647–1706), col *Dizionario storico e critico*, è il precursore di tutto il secolo: dimostra la contraddittorietà delle dottrine teologiche, sostiene che il male è inconciliabile con la razionalità divina e — tesi scandalosa — che **una società di atei potrebbe essere perfettamente morale**, perché la morale non dipende dalle credenze religiose ma dai costumi e dalle leggi.

**L'affare Calas.** La tolleranza non resta teoria. Nel 1762 il protestante Jean Calas è giustiziato a Tolosa, accusato ingiustamente di aver ucciso il figlio per impedirgli la conversione al cattolicesimo. **Voltaire** conduce una campagna di tre anni e ottiene la riabilitazione postuma: è la nascita dell'**intellettuale impegnato** e della battaglia d'opinione per i diritti. Da lì nasce il *Trattato sulla tolleranza*.

**La critica della metafisica.** Parallelamente, gli illuministi liquidano i grandi sistemi. Il bersaglio prediletto è l'**ottimismo leibniziano**: dopo il terremoto di **Lisbona** (1755), che uccise decine di migliaia di persone il giorno di Ognissanti, Voltaire scrive il *Poema sul disastro di Lisbona* e il ***Candido***, dove il ridicolo Pangloss ripete che «tutto è per il meglio nel migliore dei mondi possibili» in mezzo a ogni sorta di sciagure. La conclusione del racconto — «bisogna coltivare il nostro giardino» — è il congedo dalla metafisica consolatoria a favore dell'azione concreta e limitata.`
          },
          {
            n: 5, romano: "5", titolo: "Illuminismo, storia e politica",
            chiave: "La storia diventa storia dei costumi e della civiltà, non delle battaglie. E la politica diventa il progetto di uno Stato laico, di diritto, che garantisca la felicità pubblica.",
            testo: `**La storiografia illuministica.** Voltaire inventa quasi la storia della cultura: nel *Saggio sui costumi* e nel *Secolo di Luigi XIV* si occupa di arti, scienze, commercio, leggi, mentalità, invece che di dinastie e battaglie. Vuole una storia **critica** (verificare le fonti, eliminare miracoli e leggende), **universale** (include Cina, India, mondo islamico) e **filosofica** (deve servire a capire il presente). Anzi, l'espressione «filosofia della storia» è sua.

Il giudizio sul passato è però severo: la storia è in gran parte «il quadro dei delitti e delle sventure», una lunga serie di errori e di fanatismi, illuminata da poche epoche felici. Da qui una tensione interna all'Illuminismo:
- **pessimismo storico**: il passato è dominato dall'irrazionalità;
- **ottimismo programmatico**: proprio per questo la ragione può e deve cambiare le cose.

**L'idea di progresso.** **Turgot** e soprattutto **Condorcet** ne fanno una teoria compiuta. Nell'*Abbozzo di un quadro storico dei progressi dello spirito umano*, scritto mentre si nascondeva dal Terrore che l'avrebbe ucciso, Condorcet divide la storia in dieci epoche e prevede per la decima l'abolizione della disuguaglianza tra le nazioni e tra le classi, il perfezionamento indefinito dell'uomo, la diffusione dell'istruzione, l'uguaglianza tra i sessi. È il documento più puro della fiducia illuministica, scritto nelle circostanze più tragiche.

**La politica.** Gli obiettivi condivisi:
- **Stato laico**, separato dalla Chiesa;
- **Stato di diritto**: leggi certe, uguali per tutti, superiori al sovrano;
- **libertà civili**: di pensiero, di stampa, di religione, di commercio;
- **felicità pubblica** come fine del governo — è la formula degli illuministi italiani, che entrerà nella Dichiarazione d'indipendenza americana come «ricerca della felicità»;
- **riforme** più che rivoluzione: molti confidano nel **dispotismo illuminato** (Federico II, Caterina II, Giuseppe II), cioè in un sovrano che imponga dall'alto le riforme razionali.

**L'Enciclopedia** (1751–1772) è l'impresa simbolo: 28 volumi diretti da **Diderot** e **d'Alembert**, con oltre 140 collaboratori. Il suo scopo dichiarato è «raccogliere le conoscenze sparse sulla superficie della terra» e «cambiare il modo comune di pensare». È insieme un inventario del sapere, un manifesto ideologico (le voci più eversive sono nascoste nei rimandi, per aggirare la censura) e — novità enorme — una **valorizzazione delle arti meccaniche**: le tavole illustrano telai, fucine, officine, mettendo il lavoro tecnico sullo stesso piano della speculazione.

**Le figure principali in Francia**: **Montesquieu** (*Lo spirito delle leggi*, 1748), che studia le leggi in rapporto al clima, ai costumi, alla storia, e teorizza la **separazione dei tre poteri** — legislativo, esecutivo, giudiziario — come garanzia della libertà: «perché non si possa abusare del potere, bisogna che il potere arresti il potere»; **Voltaire**, il polemista; **Diderot**, il più inquieto e materialista; **d'Alembert**, il matematico; **Condillac**, che con la celebre **statua** che acquista una a una le sensazioni riduce ogni facoltà mentale alla sensazione trasformata.

**In Inghilterra**: il deismo, la morale del sentimento (Shaftesbury, Hutcheson), **Mandeville** con la scandalosa *Favola delle api* («vizi privati, pubbliche virtù»), **Adam Smith** con la *Ricchezza delle nazioni* e la «mano invisibile». **In Italia**: a Napoli **Genovesi** e **Filangieri**; a Milano il gruppo del *Caffè* con **Pietro Verri** e **Cesare Beccaria**, il cui *Dei delitti e delle pene* (1764) — contro la tortura e la pena di morte, per la certezza e proporzionalità della pena — è il libro italiano più influente del secolo in Europa. **In Germania**: **Wolff**, **Baumgarten** (che fonda l'**estetica** come disciplina), **Mendelssohn** e **Lessing**, con la parabola dei tre anelli del *Nathan il saggio*, il grande testo della tolleranza.`
          }
        ]
      },
      {
        titolo: "Capitolo 3 — Rousseau",
        sottotitolo: "L'uomo è nato libero, e ovunque è in catene",
        canti: [
          {
            n: 6, romano: "6", titolo: "Un illuminista atipico: la critica del progresso",
            chiave: "Contro tutti i suoi contemporanei, Rousseau sostiene che il progresso delle scienze e delle arti ha corrotto i costumi anziché migliorarli.",
            testo: `**Jean-Jacques Rousseau** (1712–1778), ginevrino, autodidatta, carattere difficile, rompe con quasi tutti i *philosophes*. È dentro l'Illuminismo — condivide la critica dei privilegi, l'appello alla ragione naturale, l'idea di uguaglianza — e insieme ne è il critico più radicale. Per questo è anche il ponte verso il **Romanticismo**.

**Il primo Discorso.** Nel 1750 l'Accademia di Digione mette a concorso la domanda: se il progresso delle scienze e delle arti abbia contribuito a migliorare i costumi. Tutti si attendevano un sì entusiasta. Rousseau vince rispondendo **no**: le scienze e le arti sono nate dai nostri vizi (l'astronomia dalla superstizione, la geometria dall'avarizia), producono lusso, ozio e disuguaglianza, e coprono con «ghirlande di fiori le catene di ferro» degli uomini. Le civiltà più virtuose — Sparta, la Roma antica — furono le meno raffinate.

**Il secondo Discorso** (*Sull'origine della disuguaglianza*, 1755) è il testo teoricamente decisivo.

**Lo stato di natura.** Rousseau precisa che è un'**ipotesi metodologica**, non una fase storica: «cominciamo dallo scartare tutti i fatti». Serve a distinguere ciò che nell'uomo è naturale da ciò che è prodotto dalla società. L'uomo naturale è:
- **solitario**, non socievole (ma neppure in guerra, contro Hobbes): si incontra raramente e senza conflitto;
- guidato da due sentimenti: l'**amore di sé** (*amour de soi*), sano istinto di conservazione, e la **pietà**, la ripugnanza naturale a vedere soffrire un proprio simile — che è la vera radice della morale, prima di ogni ragionamento;
- **né buono né cattivo** in senso morale, perché la moralità nasce solo nei rapporti sociali; ma **innocente**, cioè non corrotto;
- caratterizzato da due qualità che ne spiegheranno la storia: la **libertà** e la **perfettibilità**, cioè la capacità di cambiare — che è insieme la sua grandezza e la sua rovina.

**La nascita della disuguaglianza.** Il passaggio alla società non è un progresso: è una **caduta**. La pagina è celebre: «Il primo che, avendo cintato un terreno, pensò di dire *questo è mio* e trovò persone abbastanza semplici da credergli, fu il vero fondatore della società civile. Quanti delitti, guerre, assassini, quante miserie e orrori avrebbe risparmiato al genere umano colui che, strappando i pali, avesse gridato ai suoi simili: guardatevi dall'ascoltare questo impostore; siete perduti se dimenticate che i frutti sono di tutti e la terra non è di nessuno».

Dalla proprietà nascono la divisione del lavoro, la ricchezza, la dipendenza reciproca, e con esse l'***amour propre***, l'amor proprio: non più l'amore di sé, ma il bisogno di **essere considerati dagli altri**, il confronto, la vanità, l'invidia. L'uomo civile «vive fuori di sé», nell'opinione altrui. Le leggi e lo Stato, infine, nascono da un contratto **fraudolento** proposto dai ricchi, che consacra giuridicamente la disuguaglianza di fatto.

**Non si torna indietro.** Rousseau non predica il ritorno alla foresta — è un'accusa di Voltaire («viene voglia di camminare a quattro zampe leggendo la vostra opera») che egli respinse. Il problema è **come costruire una società che non corrompa**: risponderanno l'*Emilio* per l'educazione e il *Contratto sociale* per la politica.`
          },
          {
            n: 7, romano: "7", titolo: "Il contratto sociale e la volontà generale",
            chiave: "Un patto in cui ciascuno si dà a tutti e quindi a nessuno: obbedendo alla volontà generale si obbedisce a sé stessi, e si resta liberi come prima.",
            testo: `**Il problema.** Il *Contratto sociale* (1762) si apre con la frase più citata della filosofia politica: «**L'uomo è nato libero, e ovunque è in catene**». E pone il problema in termini precisi: «trovare una forma di associazione che difenda e protegga con tutta la forza comune la persona e i beni di ciascun associato, e per la quale ciascuno, unendosi a tutti, **non obbedisca tuttavia che a sé stesso, e resti libero come prima**».

**La soluzione: l'alienazione totale.** «Ciascuno di noi mette in comune la sua persona e ogni suo potere sotto la suprema direzione della **volontà generale**». Il punto paradossale è che l'alienazione dev'essere **totale e uguale per tutti**: proprio perché ciascuno si dà interamente, «la condizione è uguale per tutti, e nessuno ha interesse a renderla onerosa agli altri»; e dandosi a tutti, «non si dà a nessuno». Ciò che si perde come individuo lo si riacquista come membro del sovrano.

**La volontà generale.** È il concetto centrale e il più discusso. Non è la somma degli interessi particolari (quella è la **volontà di tutti**, che «guarda all'interesse privato ed è una somma di volontà particolari»): è la volontà del corpo politico in quanto tale, **orientata al bene comune**. Non è unanimità né maggioranza aritmetica: è ciò che ciascuno vorrebbe se pensasse come cittadino e non come privato. Rousseau raccomanda perciò che nella deliberazione **non esistano fazioni e partiti**, perché ogni gruppo organizzato sostituisce alla volontà generale la propria volontà particolare.

**Le sue caratteristiche**: è **inalienabile** (non si può delegare: qui la rottura con Hobbes e con Locke — «il popolo inglese crede di essere libero, ma si inganna: lo è solo durante l'elezione dei membri del parlamento»), **indivisibile** (niente separazione dei poteri come in Montesquieu), **infallibile** (non può volere il male comune, anche se il popolo può essere ingannato su ciò che è bene), e sempre **retta**.

**Sovranità e governo.** La **sovranità** appartiene sempre e solo al popolo; il **governo** è un semplice esecutore, un commissario revocabile, non una parte contraente. Rousseau è quindi teorico della **democrazia diretta**, praticabile — riconosce — solo in Stati piccoli come la sua Ginevra.

**La libertà come obbedienza alla legge che ci si dà.** «L'obbedienza alla legge che ci si è prescritta è libertà». È una definizione che avrà un'eco enorme: Kant la riprenderà nella morale come **autonomia**.

**Il punto controverso.** Rousseau scrive che chi rifiuta di obbedire alla volontà generale «sarà costretto a farlo da tutto il corpo: il che non significa altro se non che **lo si costringerà a essere libero**». La formula ha fatto discutere per due secoli: alcuni vi hanno visto il germe del **totalitarismo** (così Constant, Talmon, Popper), altri l'hanno interpretata come la semplice affermazione che il rispetto della legge liberamente data è condizione della libertà di tutti. Ciò che è certo è l'enorme influenza sulla **Rivoluzione francese**, in particolare sui giacobini, che ne fecero il proprio vangelo.

**La religione civile.** Nell'ultimo capitolo Rousseau propone un piccolo insieme di dogmi civili (esistenza di Dio, vita futura, santità del contratto sociale, tolleranza) necessari a tenere unita la comunità: chi non li accetta va escluso, non come empio ma come «insocievole». È il punto in cui il suo pensiero appare più distante dal liberalismo.`
          },
          {
            n: 8, romano: "8", titolo: "L'Emilio, la religione naturale, la sensibilità",
            chiave: "Un'educazione negativa che protegge la bontà naturale del bambino; una fede fondata sul sentimento interiore; e la scoperta dell'io che sente. Da qui nasce il Romanticismo.",
            testo: `**L'Emilio, o dell'educazione** (1762). L'incipit dà il programma: «Tutto è bene uscendo dalle mani dell'Autore delle cose, tutto degenera nelle mani dell'uomo».

I princìpi:
- **Educazione negativa**: il compito dell'educatore non è riempire ma **proteggere**: tenere lontano il bambino dai pregiudizi, dai vizi sociali, dai libri («odio i libri», dice — con l'eccezione di *Robinson Crusoe*, che insegna a bastare a sé stessi) prima che la ragione sia matura;
- **rispetto delle età**: il bambino non è un adulto in miniatura. Ogni fase ha modi di sentire e di ragionare propri, e forzarli produce guasti. È l'atto di nascita della **pedagogia moderna**;
- **apprendere dall'esperienza e dalle cose**, non dalle parole: si impara la geografia camminando, l'astronomia guardando il cielo, la morale subendo le conseguenze naturali dei propri atti;
- **un mestiere manuale** per tutti, perché rende indipendenti;
- l'educazione della **donna** (Sofia) è invece pensata in funzione dell'uomo: la pagina più datata del libro, criticata già allora da **Mary Wollstonecraft**, che vi rispose con la *Rivendicazione dei diritti della donna*.

**La professione di fede del vicario savoiardo**, inserita nell'*Emilio*, è la religione di Rousseau, e gli costò la condanna sia dai cattolici sia dai protestanti sia dai *philosophes* atei. I punti:
- Dio si conosce non con le prove metafisiche ma con il **sentimento interiore** e con lo spettacolo della natura;
- la **coscienza morale** è «istinto divino, immortale e celeste voce»: un sentimento innato del bene e del male, presente in ogni uomo, più affidabile della ragione ragionante;
- si rifiutano rivelazione, miracoli e dogmi, ma non con l'ironia di Voltaire: con la serietà di chi cerca una religione del cuore.

**La sensibilità e la scoperta dell'io.** Nella *Nuova Eloisa* (romanzo di enorme successo europeo), nelle *Confessioni* e nelle *Fantasticherie del passeggiatore solitario*, Rousseau introduce nella letteratura e nella filosofia qualcosa di nuovo: l'attenzione al **sentimento**, alla natura come specchio dell'anima, alla solitudine, alla memoria, alla sincerità dell'io. Le *Confessioni* si aprono con una dichiarazione senza precedenti: «Formo un'impresa che non ha esempi… voglio mostrare ai miei simili un uomo in tutta la verità della natura; e quest'uomo sarò io».

**L'eredità.** Rousseau è insieme:
- l'ispiratore della **democrazia moderna** (sovranità popolare, uguaglianza, critica della rappresentanza);
- il padre della **pedagogia** contemporanea;
- il primo **romantico**, per il primato del sentimento, il culto della natura, l'esaltazione dell'individuo autentico contro la società artificiale;
- l'anello che porta a **Kant**, il quale confessò che Rousseau lo aveva «raddrizzato»: «ci fu un tempo in cui credevo che la sete di conoscenza costituisse l'onore dell'umanità, e disprezzavo il popolo ignorante. Rousseau mi ha corretto: imparo a onorare gli uomini».`
          }
        ]
      }
    ],
    personaggi: [
      {
        gruppo: "1. Vico",
        voci: [
          { nome: "Verum ipsum factum", alt: [], desc: "Si conosce con verità solo ciò che si è fatto: Dio la natura, l'uomo la matematica e la storia. Rovescia il primato cartesiano della fisica." },
          { nome: "Storia ideale eterna", alt: [], desc: "Lo schema di sviluppo comune «sopra il quale corrono in tempo le storie di tutte le nazioni»: non determinismo ma struttura di possibilità." },
          { nome: "Tre età", alt: ["dèi, eroi, uomini"], desc: "Teocrazia con linguaggio muto; aristocrazia con linguaggio per imprese; democrazia con linguaggio articolato e filosofia." },
          { nome: "Corsi e ricorsi", alt: ["barbarie della riflessione"], desc: "L'eccesso di riflessione dissolve i legami e riporta alla barbarie, peggiore di quella primitiva perché fredda. Poi il ciclo ricomincia." },
          { nome: "Sapienza poetica", alt: ["universali fantastici"], desc: "I primi uomini pensavano per fantasia, non peggio ma diversamente. Achille sta per il valore: il mito è la forma vera del pensiero di un'epoca." },
          { nome: "Provvidenza immanente", alt: ["eterogenesi dei fini"], desc: "Da ferocia, avarizia e ambizione nascono milizia, mercatura e politica: gli uomini producono un ordine che non avevano progettato." }
        ]
      },
      {
        gruppo: "2. L'Illuminismo",
        voci: [
          { nome: "Sapere aude", alt: ["minorità"], desc: "Kant: l'Illuminismo è l'uscita dell'uomo da una minorità di cui è colpevole, dovuta a pigrizia e viltà. Serve il coraggio di usare la propria testa." },
          { nome: "Spirito sistematico", alt: [], desc: "Non «spirito di sistema»: la ragione illuministica è analitica e critica, sul modello di Newton e Locke, non costruisce metafisiche." },
          { nome: "Écrasez l'infâme", alt: ["Voltaire"], desc: "«Schiacciate l'infame»: il bersaglio è il fanatismo religioso e l'intolleranza, non la religione in quanto tale." },
          { nome: "Deismo", alt: ["religione naturale"], desc: "Dio esiste, conoscibile dall'ordine del mondo, ma non interviene con miracoli o rivelazioni: il culto dovuto è la vita morale." },
          { nome: "Materialismo ateo", alt: ["d'Holbach", "La Mettrie"], desc: "La materia è eterna e in movimento; l'uomo è macchina; l'idea di Dio nasce dalla paura e serve ai potenti." },
          { nome: "Bayle", alt: ["società di atei"], desc: "Precursore del secolo: una società di atei potrebbe essere morale, perché la morale dipende da costumi e leggi, non da credenze." },
          { nome: "Affare Calas", alt: [], desc: "La campagna di Voltaire per riabilitare un innocente giustiziato: nasce l'intellettuale impegnato e il Trattato sulla tolleranza." },
          { nome: "Candido", alt: ["Lisbona"], desc: "La satira dell'ottimismo dopo il terremoto del 1755. «Bisogna coltivare il nostro giardino»: congedo dalla metafisica consolatoria." },
          { nome: "Enciclopedia", alt: ["Diderot", "d'Alembert"], desc: "28 volumi per «cambiare il modo comune di pensare». Valorizza le arti meccaniche e aggira la censura con i rimandi." },
          { nome: "Separazione dei poteri", alt: ["Montesquieu"], desc: "Legislativo, esecutivo, giudiziario: «perché non si possa abusare del potere, bisogna che il potere arresti il potere»." },
          { nome: "Statua di Condillac", alt: [], desc: "Una statua che riceve una a una le sensazioni sviluppa da sé attenzione, memoria, giudizio: tutte le facoltà sono sensazione trasformata." },
          { nome: "Condorcet", alt: ["progresso"], desc: "Dieci epoche della storia e perfettibilità indefinita dell'uomo: scritto mentre si nascondeva dal Terrore che lo uccise." },
          { nome: "Beccaria", alt: ["Dei delitti e delle pene"], desc: "Contro tortura e pena di morte, per la certezza e la proporzionalità della pena: il libro italiano più influente del secolo." },
          { nome: "Lessing", alt: ["tre anelli"], desc: "La parabola del Nathan il saggio: nessuna delle tre religioni può provare di possedere l'anello autentico; lo dimostrerà con le opere." }
        ]
      },
      {
        gruppo: "3. Rousseau",
        voci: [
          { nome: "Critica del progresso", alt: [], desc: "Scienze e arti sono nate dai vizi e hanno corrotto i costumi, coprendo «di ghirlande di fiori le catene di ferro»." },
          { nome: "Stato di natura", alt: [], desc: "Ipotesi metodologica, non fase storica: l'uomo naturale è solitario, innocente, guidato da amore di sé e pietà. Né buono né cattivo moralmente." },
          { nome: "Amour de soi / amour propre", alt: [], desc: "Il sano istinto di conservazione contro il bisogno di essere considerati: nell'amor proprio nascono vanità, confronto, invidia." },
          { nome: "Perfettibilità", alt: [], desc: "La capacità di cambiare che distingue l'uomo dagli animali: insieme la sua grandezza e la causa della sua rovina." },
          { nome: "Origine della proprietà", alt: [], desc: "«Il primo che, avendo cintato un terreno, disse questo è mio…»: dalla proprietà nascono disuguaglianza e dipendenza." },
          { nome: "Volontà generale", alt: [], desc: "Non la somma degli interessi privati (volontà di tutti) ma la volontà del corpo politico orientata al bene comune. Inalienabile, indivisibile, infallibile." },
          { nome: "Alienazione totale", alt: [], desc: "Ciascuno si dà interamente a tutti, dunque a nessuno: la condizione è uguale per tutti e si resta liberi come prima." },
          { nome: "Libertà come autonomia", alt: [], desc: "«L'obbedienza alla legge che ci si è prescritta è libertà». Kant la riprenderà come principio della morale." },
          { nome: "«Costretto a essere libero»", alt: [], desc: "La formula più discussa: vi si è visto il germe del totalitarismo oppure la semplice condizione della libertà comune." },
          { nome: "Critica della rappresentanza", alt: [], desc: "«Il popolo inglese è libero solo durante le elezioni»: la sovranità non si delega. Da qui la democrazia diretta." },
          { nome: "Educazione negativa", alt: ["Emilio"], desc: "Proteggere anziché riempire, rispettare le età, imparare dalle cose e non dai libri: nasce la pedagogia moderna." },
          { nome: "Coscienza morale", alt: ["vicario savoiardo"], desc: "«Istinto divino, immortale e celeste voce»: il bene si sente prima di ragionarlo. Religione del cuore, senza dogmi né miracoli." }
        ]
      }
    ]
  }

  ,

  /* ------------------------------------------------ UNITÀ 7 */
  kant: {
    id: "kant",
    titolo: "Kant",
    autore: "Unità 7 · Il criticismo",
    sottotitolo: "Le tre Critiche e la filosofia del limite",
    epoca: "1724 – 1804",
    lingua: "Königsberg",
    tag: ["Criticismo", "A priori", "Imperativo categorico", "Sublime"],
    epigrafe: "Il cielo stellato sopra di me, la legge morale dentro di me.",
    colore: "blu",
    parti: [
      {
        titolo: "Capitolo 1 — Dal periodo precritico al criticismo",
        sottotitolo: "La formazione di un problema",
        canti: [
          {
            n: 1, romano: "1", titolo: "Una vita per il pensiero",
            chiave: "Non uscì mai dalla sua città, visse con regolarità proverbiale, e produsse la rivoluzione filosofica più radicale dell'età moderna.",
            testo: `**Immanuel Kant** (1724–1804) nacque, visse e morì a **Königsberg**, nella Prussia orientale, senza allontanarsene mai per più di poche decine di chilometri. Di famiglia modesta e di educazione **pietista** (un movimento protestante che insisteva sulla religiosità interiore e sul rigore morale: un'impronta che resterà), fu per anni precettore privato, poi *Privatdozent*, e solo a quarantasei anni ottenne la cattedra di logica e metafisica.

La sua vita esteriore è priva di eventi: la leggenda vuole che i vicini regolassero gli orologi sulla sua passeggiata pomeridiana. Ma fu un uomo curioso di tutto — geografia, astronomia, antropologia, politica — conversatore brillante e ospite ricercato, entusiasta della Rivoluzione francese e ammiratore di Rousseau (l'unico giorno in cui saltò la passeggiata fu, si racconta, quello in cui ricevette l'*Emilio*).

**Il periodo precritico** (fino al 1770) comprende opere soprattutto scientifiche e metafisiche, tra cui la *Storia universale della natura e teoria del cielo* (1755), dove formula l'ipotesi cosmogonica poi detta di **Kant-Laplace**: il sistema solare si sarebbe formato per condensazione da una nebulosa primitiva.

In questi anni Kant si muove entro la metafisica razionalistica di **Wolff** (il sistematizzatore di Leibniz in Germania), ma con crescente disagio. Due scosse lo mettono in crisi:
- **Hume**, che, come scriverà, «mi svegliò dal sonno dogmatico»: la critica della causalità mostrava che la metafisica non ha fondamento — ma anche che la scienza newtoniana rischiava di non averne;
- **Rousseau**, che gli insegnò a rispettare l'uomo comune e a mettere la morale al di sopra della cultura.

**La dissertazione del 1770** («Sulla forma e i princìpi del mondo sensibile e intelligibile») è la svolta: Kant distingue nettamente la conoscenza **sensibile** (che riguarda i fenomeni ed è strutturata da spazio e tempo, forme del soggetto) da quella **intellettuale**. Seguono undici anni di silenzio.

**Il periodo critico** si apre nel 1781 con la ***Critica della ragion pura***; seguono i *Prolegomeni* (1783), la *Fondazione della metafisica dei costumi* (1785), la ***Critica della ragion pratica*** (1788), la ***Critica del Giudizio*** (1790), *La religione nei limiti della semplice ragione* (1793), *Per la pace perpetua* (1795), la *Metafisica dei costumi* (1797).`
          },
          {
            n: 2, romano: "2", titolo: "Il criticismo come filosofia del limite",
            chiave: "La ragione istituisce un tribunale su sé stessa: prima di conoscere il mondo, deve stabilire fin dove può arrivare. Né dogmatismo né scetticismo.",
            testo: `**Che cos'è il criticismo.** *Critica* non significa «critica negativa»: significa **esame delle condizioni di possibilità e dei limiti**. La ragione, invece di lanciarsi a conoscere gli oggetti, si volta su sé stessa e chiede: che cosa posso conoscere, e in virtù di che cosa?

Kant usa l'immagine del **tribunale**: «un tribunale che assicuri la ragione nelle sue giuste pretese e liquidi tutte le usurpazioni infondate». La ragione è insieme giudice e imputata.

**Le tre domande** in cui riassume tutto l'interesse della ragione:
- **Che cosa posso sapere?** → *Critica della ragion pura*;
- **Che cosa devo fare?** → *Critica della ragion pratica*;
- **Che cosa posso sperare?** → religione e postulati.
E tutte e tre si riassumono in una quarta: **Che cos'è l'uomo?**

**La posizione intermedia.** Il criticismo si colloca tra due estremi:
- il **dogmatismo** dei razionalisti, che pretendono di conoscere Dio, l'anima e il mondo con la sola ragione, senza aver mai verificato se la ragione ne sia capace;
- lo **scetticismo** di Hume, che, non trovando fondamento, finisce per togliere valore anche alla scienza.

Kant vuole **salvare la scienza e limitare la metafisica**: mostrare che la fisica è certa, ma solo perché riguarda i fenomeni, e che proprio per la stessa ragione la metafisica non può essere scienza.

**Il senso storico e culturale.** Il criticismo è la coscienza filosofica dell'**Illuminismo**: la ragione che si autolimita è la stessa ragione che si emancipa dalle autorità. Nulla può sottrarsi alla critica, dice Kant nella prefazione: «la religione, per la sua santità, e la legislazione, per la sua maestà, vogliono generalmente sottrarsi ad essa. Ma allora esse suscitano contro di sé un giusto sospetto».

C'è anche un senso morale: limitando la conoscenza al fenomeno, Kant lascia spazio alla libertà. «Ho dovuto **sospendere il sapere per far posto alla fede**»: non alla superstizione, ma alla fede morale che nessuna scienza può né provare né confutare.`
          }
        ]
      },
      {
        titolo: "Capitolo 2 — La Critica della ragion pura",
        sottotitolo: "Come è possibile la conoscenza",
        canti: [
          {
            n: 3, romano: "3", titolo: "Il problema generale: i giudizi sintetici a priori",
            chiave: "La scienza deve essere insieme informativa (dice cose nuove) e universale e necessaria. Come è possibile? Solo se esistono giudizi sintetici a priori.",
            testo: `**Il problema.** Kant parte dalla constatazione che matematica e fisica **sono** scienze: producono conoscenze **universali e necessarie** e insieme **ampliano** il nostro sapere. Come è possibile? La domanda della *Critica* non è «esiste la scienza?» ma «**come è possibile** la scienza?».

**La classificazione dei giudizi.** Due distinzioni incrociate:
- **analitici / sintetici**: nel giudizio **analitico** il predicato è già contenuto nel soggetto («i corpi sono estesi»): è *esplicativo*, non aggiunge nulla, ma è certo. Nel giudizio **sintetico** il predicato aggiunge qualcosa di nuovo («i corpi sono pesanti»): è *ampliativo*;
- **a priori / a posteriori**: *a priori* è ciò che è indipendente dall'esperienza, e i suoi segni sono **universalità e necessità**; *a posteriori* è ciò che deriva dall'esperienza, e vale solo per i casi osservati.

Combinandole si ottengono tre tipi effettivi:
- **analitici a priori**: certi ma vuoti (la logica);
- **sintetici a posteriori**: informativi ma non universali («questo tavolo è marrone»);
- **sintetici a priori**: informativi **e** universali e necessari. Sono la scienza.

**Gli esempi.**
- In **matematica**: «7+5=12» è sintetico, perché nel concetto della somma di 7 e 5 non è contenuto il 12 — bisogna *costruire* l'operazione, contare, ricorrere all'intuizione; ed è a priori perché vale necessariamente. Così «la retta è la linea più breve tra due punti»: «breve» non è contenuto in «retta», che è un concetto di qualità, non di quantità.
- In **fisica**: «in tutti i mutamenti del mondo corporeo la quantità di materia resta invariata» è sintetico e a priori — nessuna esperienza potrebbe garantirne l'universalità.

**La domanda della Critica** diventa dunque: *come sono possibili i giudizi sintetici a priori?* E si articola in tre: come è possibile la matematica pura (→ **estetica trascendentale**), come è possibile la fisica pura (→ **analitica trascendentale**), come è possibile la metafisica come scienza (→ **dialettica trascendentale**, che risponderà: non lo è).

**Trascendentale.** È il termine tecnico chiave: «chiamo trascendentale ogni conoscenza che si occupa non tanto di oggetti, quanto del nostro **modo di conoscere** gli oggetti, in quanto questo deve essere possibile a priori». Non significa «trascendente» (al di là dell'esperienza): significa **ciò che rende possibile l'esperienza**.`
          },
          {
            n: 4, romano: "4", titolo: "La rivoluzione copernicana",
            chiave: "Non è la mente che si modella sugli oggetti, sono gli oggetti che si modellano sulla mente. Conosciamo il mondo perché siamo noi a dargli la forma.",
            testo: `**L'analogia.** Kant paragona la propria mossa a quella di **Copernico**: «Poiché non si riusciva a spiegare i movimenti celesti supponendo che tutto l'esercito degli astri ruotasse attorno allo spettatore, Copernico tentò di far ruotare lo spettatore e di lasciare fermi gli astri». Allo stesso modo: «finora si è supposto che ogni nostra conoscenza dovesse regolarsi sugli oggetti… **Si provi dunque una buona volta a vedere se non riusciamo meglio supponendo che gli oggetti debbano regolarsi sulla nostra conoscenza**».

**Il capovolgimento.** Prima di Kant si pensava alla conoscenza come a un rispecchiamento: il soggetto è passivo e riceve l'impronta dell'oggetto (empiristi) o coglie l'essenza che è nelle cose (razionalisti). Kant rovescia: il **soggetto è attivo**, e la struttura dell'oggetto conosciuto dipende dalle forme del soggetto.

L'immagine efficace: chi indossa **occhiali con lenti colorate** vede tutto di quel colore, e non può togliersele. Spazio, tempo e categorie sono le nostre lenti: non le abbiamo scelte, non possiamo levarle, e proprio per questo sappiamo **a priori** che ogni oggetto ci apparirà spaziale, temporale, causalmente ordinato.

**Perché questo risolve il problema.** Se le forme fossero nelle cose, dovremmo verificarle caso per caso e non potremmo mai dire «sempre e necessariamente» (era il problema di Hume). Se invece le mettiamo noi, allora possiamo saperle in anticipo, con certezza universale, senza consultare l'esperienza. È la fondazione della scienza.

**Il prezzo: fenomeno e noumeno.** La contropartita è severa. Se conosciamo le cose come sono strutturate dalle nostre forme, allora conosciamo il **fenomeno** — la cosa *come appare a noi* — e non la **cosa in sé** (*noumeno*), la cosa come sarebbe indipendentemente dal nostro modo di conoscerla.

Attenzione, perché è il punto più frainteso: il fenomeno **non è illusione**. È l'oggetto reale della conoscenza, uguale per tutti i soggetti razionali, ordinato da leggi oggettive. Il noumeno non è un «mondo vero» nascosto dietro le apparenze: è un **concetto-limite**, che segnala che la nostra conoscenza è finita e riceve una materia che non produce.

Kant lo intende in due sensi: **negativo** (ciò che non è oggetto della nostra intuizione sensibile: uso legittimo) e **positivo** (un oggetto conoscibile da un'intuizione non sensibile che noi non possediamo: uso illegittimo). Il noumeno serve anche a due cose fondamentali: impedisce l'idealismo (c'è qualcosa che ci è dato, non produciamo il mondo) e apre lo spazio alla **libertà** morale, che nel mondo fenomenico, tutto determinato, non troverebbe posto.

**La struttura dell'opera** segue le facoltà: **sensibilità** (estetica trascendentale), **intelletto** (analitica trascendentale), **ragione** (dialettica trascendentale). Le prime due formano la *Dottrina degli elementi*, parte «costruttiva»; la terza è la parte critica e distruttiva.`
          },
          {
            n: 5, romano: "5", titolo: "L'estetica trascendentale: spazio e tempo",
            chiave: "Spazio e tempo non sono cose né proprietà delle cose: sono le forme a priori della nostra sensibilità. Per questo la geometria e l'aritmetica sono certe.",
            testo: `*Estetica* qui vale nel senso etimologico (*aísthesis*, sensazione): è la dottrina della **sensibilità**, la facoltà con cui riceviamo le impressioni.

**La tesi.** Nella sensibilità si distinguono una **materia** (la sensazione, che ci è data a posteriori) e una **forma** (l'ordine in cui essa è disposta, che il soggetto mette a priori). Le forme sono due:
- lo **spazio**, forma del **senso esterno**: ordiniamo secondo lo spazio tutto ciò che percepiamo fuori di noi;
- il **tempo**, forma del **senso interno**: ordiniamo secondo il tempo tutti i nostri stati mentali. Poiché ogni rappresentazione, anche di oggetti esterni, è anche un nostro stato interno, **il tempo è la forma di tutti i fenomeni**, ed è quindi più universale dello spazio.

**Le prove.**
- *Argomento metafisico*: spazio e tempo non sono concetti empirici ricavati dall'esperienza, perché per riferire una sensazione a un «fuori» o a un «prima» devo già averli. Non sono nemmeno concetti generali: c'è **un solo** spazio e **un solo** tempo, di cui i singoli spazi e tempi sono parti — dunque sono **intuizioni pure**, non concetti. E si può pensare uno spazio vuoto di oggetti, mai un oggetto senza spazio.
- *Argomento trascendentale*: solo così si spiega come geometria e aritmetica siano sintetiche a priori. La geometria studia le proprietà dello spazio, l'aritmetica si fonda sulla successione, cioè sul tempo. Se spazio e tempo fossero proprietà delle cose, le loro leggi sarebbero conosciute a posteriori e non avrebbero necessità.

**Le conseguenze.** Spazio e tempo hanno **idealità trascendentale** (non appartengono alle cose in sé: sono nostri) e insieme **realtà empirica** (valgono oggettivamente per tutti i fenomeni, non sono illusioni private). Non sono contenitori reali (Newton) né relazioni tra le cose (Leibniz): sono **strutture del soggetto**.

Ne segue che tutto ciò che è spaziale e temporale è fenomeno; e che di ciò che non è dato nello spazio e nel tempo — Dio, l'anima come sostanza, la libertà — **non c'è conoscenza possibile**. Il verdetto della metafisica è già scritto qui.

**Una precisazione storica.** L'affermazione che la geometria euclidea sia l'unica possibile perché radicata nella struttura della nostra intuizione è stata smentita dalle geometrie non euclidee e dalla relatività. Ma la tesi filosofica di fondo — che la conoscenza sia costituita anche dalle strutture del soggetto e non solo dai dati — resta uno dei pilastri del pensiero contemporaneo.`
          },
          {
            n: 6, romano: "6", titolo: "L'analitica trascendentale: le categorie e l'Io penso",
            chiave: "I dati sensibili da soli sono muti: l'intelletto li unifica con dodici concetti puri. E ciò che tiene insieme tutto è l'autocoscienza: l'«Io penso».",
            testo: `**Il ruolo dell'intelletto.** «I pensieri senza contenuto sono vuoti, le intuizioni senza concetti sono cieche». La sensibilità **riceve**, l'intelletto **unifica e giudica**. Solo la loro collaborazione produce conoscenza.

**Le dodici categorie.** L'intelletto ha propri concetti puri, non ricavati dall'esperienza, che Kant deriva dalle **forme logiche del giudizio**: giudicare significa unificare rappresentazioni, e ogni modo di giudicare corrisponde a un modo di unificare. Le categorie sono dodici, in quattro gruppi di tre:
- **quantità**: unità, pluralità, totalità;
- **qualità**: realtà, negazione, limitazione;
- **relazione**: sostanza/accidente, causa/effetto, reciprocità;
- **modalità**: possibilità, esistenza, necessità.

Le più importanti per la scienza sono **sostanza** e **causa** — proprio le due che Hume aveva demolito. Kant le salva mostrando che non sono ricavate dall'esperienza ma la **rendono possibile**.

**La deduzione trascendentale** è la sezione più ardua e più decisiva. «Deduzione» è termine giuridico: significa **giustificazione di un diritto**. Con quale diritto applichiamo alla realtà concetti che non derivano da essa?

La risposta si articola così: perché io possa avere esperienza, tutte le mie rappresentazioni devono poter essere accompagnate da un «**io penso**» — devono essere *mie*, unificate in una sola coscienza. Kant chiama questa condizione **appercezione trascendentale**, o unità sintetica originaria. Non è un'anima-sostanza (Cartesio): è una **funzione unificatrice**, un'attività, non un oggetto conoscibile. È «il supremo principio di tutto l'uso dell'intelletto».

Ora: unificare le rappresentazioni in una coscienza significa **connetterle secondo regole**, e queste regole sono le categorie. Dunque le categorie valgono necessariamente per ogni oggetto della mia esperienza possibile — non perché le cose in sé le rispettino, ma perché **nulla può diventare oggetto di esperienza per me senza passare per esse**.

Da qui la formula che riassume tutta la rivoluzione kantiana: **«L'intelletto è il legislatore della natura»**. Non nel senso che inventa i fatti, ma nel senso che la «natura» — l'insieme dei fenomeni connessi secondo leggi — è tale in virtù delle forme del soggetto.

**Lo schematismo.** Resta un problema: categorie (intellettuali, pure) e intuizioni (sensibili) sono eterogenee; come si applicano le une alle altre? Serve un **medio**, che sia insieme intellettuale e sensibile: è lo **schema trascendentale**, prodotto dall'**immaginazione**, ed è una **determinazione a priori del tempo**. Lo schema della sostanza è la permanenza nel tempo; quello della causa la successione regolare; quello della necessità l'esistenza in ogni tempo. Kant chiama lo schematismo «un'arte nascosta nel profondo dell'anima umana».

**I principi dell'intelletto puro** sono le leggi generalissime che ne derivano, e coincidono con i presupposti della fisica newtoniana: ogni fenomeno ha una grandezza estensiva e intensiva; nel mutamento la sostanza permane; ogni evento ha una causa; tutte le sostanze coesistenti sono in reciprocità.

**Il limite.** Le categorie hanno valore **solo se applicate all'intuizione sensibile**. Usate a vuoto, senza materiale sensibile, non producono conoscenza ma illusioni. È esattamente ciò che fa la metafisica.`
          },
          {
            n: 7, romano: "7", titolo: "La dialettica trascendentale: perché la metafisica non è scienza",
            chiave: "La ragione cerca l'incondizionato e produce tre idee — anima, mondo, Dio — che non corrispondono a nessuna esperienza. Le prove che le sostengono sono tutte fallaci.",
            testo: `**La ragione e le idee.** Oltre alla sensibilità e all'intelletto c'è la **ragione**, che ha una tendenza naturale e inevitabile: non accontentarsi del condizionato, ma cercare l'**incondizionato**, il fondamento ultimo. Da questa esigenza nascono tre **idee trascendentali**:
- l'**anima**: totalità incondizionata dei fenomeni interni;
- il **mondo**: totalità incondizionata dei fenomeni esterni;
- **Dio**: condizione incondizionata di tutto ciò che esiste.

Il problema è che queste idee **non hanno alcun oggetto corrispondente nell'esperienza**. Applicando ad esse le categorie, la ragione crea un'apparenza inevitabile — non un semplice errore che si possa eliminare, ma una **illusione trascendentale**, come il bastone che continua ad apparire spezzato nell'acqua anche a chi sa che non lo è.

**1. La psicologia razionale e i paralogismi.** Dall'«io penso» si pretende di dedurre che l'anima sia una **sostanza**, semplice, identica nel tempo, immortale. È un **paralogismo**, un ragionamento fallace: si scambia l'io come *funzione logica unificatrice* con un io come *oggetto reale*. Dell'io penso non abbiamo intuizione: sappiamo *che* pensiamo, non *che cosa* siamo. Cade la dimostrazione razionale dell'immortalità.

**2. La cosmologia razionale e le antinomie.** Applicando le categorie al mondo come totalità, la ragione dimostra **con uguale forza** tesi opposte. Kant ne elenca quattro:
- il mondo ha un inizio nel tempo e limiti nello spazio / non ne ha;
- tutto è composto di parti semplici / nulla è semplice;
- esiste una causalità libera / tutto avviene secondo necessità naturale;
- esiste un essere necessario / non esiste.

Le prime due antinomie (matematiche) sono risolte dichiarando **false entrambe** le posizioni: il mondo come totalità non è un oggetto dato, è un'idea. Le ultime due (dinamiche) possono essere **entrambe vere** se si distinguono i piani: nel mondo **fenomenico** tutto è determinato; nel mondo **noumenico** la libertà è pensabile senza contraddizione. È il passaggio che apre la strada alla *Critica della ragion pratica*.

**3. La teologia razionale.** Kant esamina le tre prove classiche dell'esistenza di Dio e le confuta:
- la prova **ontologica** (dal concetto all'esistenza): l'errore sta nel trattare l'esistenza come un **predicato**. «Essere non è un predicato reale»: dire che una cosa esiste non aggiunge nulla al suo concetto. **Cento talleri reali non contengono un centesimo più di cento talleri possibili** — cambia però, e non poco, lo stato del mio patrimonio. L'esistenza si constata, non si deduce;
- la prova **cosmologica** (dalla contingenza a un essere necessario): usa il principio di causalità oltre l'esperienza, e nel passaggio finale da «essere necessario» a «essere perfettissimo» presuppone di nascosto la prova ontologica;
- la prova **fisico-teologica** (dall'ordine del mondo a un ordinatore): è la più antica e la più rispettabile, dice Kant, ma proverebbe al massimo un **architetto** che ordina una materia preesistente, non un creatore; e per arrivare a Dio ricade anch'essa nella cosmologica e quindi nell'ontologica.

**L'uso regolativo delle idee.** Le idee non sono però inutili. Non hanno uso **costitutivo** (non ci fanno conoscere oggetti), ma hanno uso **regolativo**: funzionano come **compiti**, come orizzonti che spingono la ricerca a unificare sempre di più le conoscenze — a cercare cause più profonde, connessioni più ampie, come se il mondo fosse un tutto sistematico. È il *«come se»* (*als ob*) che guida la scienza.

**Il nuovo concetto di metafisica.** La metafisica come **scienza** dei suprasensibili è impossibile. Ma resta legittima come **disposizione naturale** dell'uomo (non possiamo non porci quelle domande) e soprattutto sarà rifondata sul terreno **pratico**: ciò che non si può conoscere, si può — e si deve — *pensare* e *postulare* in nome della morale.`
          }
        ]
      },
      {
        titolo: "Capitolo 3 — La Critica della ragion pratica",
        sottotitolo: "L'imperativo categorico e l'autonomia della morale",
        canti: [
          {
            n: 8, romano: "8", titolo: "La legge morale come «fatto della ragione»",
            chiave: "Non si tratta di dimostrare che c'è una legge morale: la coscienza del dovere è un fatto innegabile. Si tratta di analizzarne la struttura.",
            testo: `**Il compito rovesciato.** Nella prima *Critica* Kant doveva mostrare che la ragion pura **non può** conoscere il sovrasensibile. Nella seconda deve mostrare che la ragion pura **può** essere pratica, cioè determinare da sola la volontà, indipendentemente da inclinazioni ed esperienze.

**La ragion pratica.** *Pratico* significa ciò che riguarda l'agire. Kant distingue:
- le **massime**: principi soggettivi, validi per il singolo individuo («voglio arricchirmi il più possibile»);
- gli **imperativi**: principi oggettivi, validi per ogni essere razionale.

**Il fatto della ragione.** Kant non cerca di dimostrare che esiste la legge morale: sarebbe impossibile, perché non è un oggetto di esperienza. Constata che la coscienza della legge morale è un ***Faktum der Vernunft***, un «fatto della ragione»: si impone a noi in modo innegabile, come «l'unico fatto della ragion pura, la quale in tal modo si annuncia come originariamente legislatrice».

L'esperimento mentale con cui lo mostra è memorabile: un uomo dice di non poter resistere a una passione. Gli si chieda se resisterebbe sapendo che, uscendo dalla stanza, verrebbe impiccato: ammetterà di sì. Gli si chieda ora se resisterebbe all'ordine del sovrano di rendere una falsa testimonianza contro un innocente, con la stessa minaccia di morte: forse non oserà dire che resisterebbe, «ma che ciò gli sia possibile lo ammetterà senza esitare». Ed ecco la conclusione: «egli giudica dunque di poter fare qualcosa **perché è consapevole di dover** farlo». ***Devi, dunque puoi***: dalla legge morale si deduce la libertà.

**Il rapporto tra le due Critiche.** La libertà era, nella prima *Critica*, solo una possibilità non contraddittoria del noumeno. Ora diventa la **ratio essendi** della legge morale (senza libertà non ci sarebbe dovere), mentre la legge morale è la **ratio cognoscendi** della libertà (è solo attraverso il dovere che sappiamo di essere liberi). È il ponte tra i due mondi.`
          },
          {
            n: 9, romano: "9", titolo: "Imperativi ipotetici e imperativo categorico",
            chiave: "«Se vuoi X, fai Y» è un consiglio di prudenza. La morale parla invece così: «Devi», senza condizioni e senza scopi. E dice solo la forma dell'azione, non il contenuto.",
            testo: `**Due tipi di imperativi.**
- **Ipotetici**: comandano un'azione come mezzo per un fine. «Se vuoi essere sano, fai movimento»; «se vuoi essere stimato, sii onesto». Il loro valore dipende dal fatto che io voglia quel fine: se non mi interessa la salute, l'imperativo cade. Sono **condizionati**.
- **Categorico**: comanda un'azione come **incondizionatamente necessaria**, senza riferimento ad alcun fine. «Non mentire», punto. Non «se vuoi essere rispettato»; non «se vuoi andare in paradiso». È l'unico imperativo propriamente **morale**.

**La formalità della legge.** Poiché non può indicare un contenuto (ogni contenuto — la felicità, l'utile, la volontà di Dio — sarebbe un fine, e renderebbe l'imperativo ipotetico), la legge morale può prescrivere solo la **forma** dell'azione: la sua universalizzabilità.

**Le formule dell'imperativo categorico.** Kant ne dà diverse, che considera equivalenti:
1. **Formula dell'universalità**: «**Agisci soltanto secondo quella massima che puoi al tempo stesso volere che divenga una legge universale**». È un test: prova a immaginare che tutti agiscano come te. L'esempio della **promessa falsa**: se tutti promettessero senza intenzione di mantenere, l'istituto stesso della promessa si autodistruggerebbe — la massima è contraddittoria non moralmente, ma **logicamente**, se universalizzata.
2. **Formula della legge di natura**: «Agisci come se la massima della tua azione dovesse diventare, per tua volontà, una legge universale della natura».
3. **Formula dell'umanità come fine**: «**Agisci in modo da trattare l'umanità, sia nella tua persona sia in quella di ogni altro, sempre anche come fine e mai semplicemente come mezzo**». È la formula più feconda sul piano etico e giuridico: fonda la **dignità** della persona. Kant distingue il **prezzo** (ciò che ha un equivalente e si può scambiare) e la **dignità** (ciò che non ha equivalente ed è fine in sé). Le persone hanno dignità, le cose prezzo.
4. **Formula dell'autonomia e del regno dei fini**: agisci come membro legislatore di un «regno dei fini», una comunità ideale di esseri razionali che si danno da sé le proprie leggi.

**La buona volontà.** L'opera si apre così: «Non è possibile pensare nulla al mondo, e neppure fuori del mondo, che possa essere considerato buono senza limitazione, eccetto **una buona volontà**». Intelligenza, coraggio, ricchezza, perfino la felicità possono diventare cattivi se manca una volontà retta.

**Legalità e moralità.** È una distinzione decisiva. Un'azione è **legale** se è **conforme** al dovere; è **morale** se è compiuta **per** dovere, cioè per rispetto della legge. Il commerciante che non imbroglia i clienti per non perdere la clientela agisce legalmente ma non moralmente. Il valore morale non sta nell'effetto ma nell'**intenzione**, nella *forma* del volere.

**Il rigorismo e le critiche.** Kant sostiene che nessuna inclinazione — nemmeno la simpatia o l'amore — può fondare la moralità: solo il **rispetto** (*Achtung*) per la legge, unico sentimento non patologico ma prodotto dalla ragione stessa. Schiller lo prese in giro con un epigramma («servo volentieri gli amici, ma lo faccio purtroppo per inclinazione: e così mi rode il dubbio di non essere virtuoso»). Hegel accuserà l'etica kantiana di **formalismo vuoto**: dice la forma, non il contenuto, e con il test dell'universalizzazione si può giustificare quasi tutto. Il caso limite più discusso resta lo scritto in cui Kant nega che sia lecito mentire anche all'assassino che chiede dove si nasconde la vittima.

**L'autonomia.** Il cuore della rivoluzione morale kantiana: la legge non viene da fuori (Dio, la natura, l'autorità, la ricerca del piacere) ma dalla **ragione stessa del soggetto**, che è insieme legislatore e suddito. Tutte le morali precedenti sono **eteronome**, e per Kant nessuna morale eteronoma è veramente morale. È la trasposizione filosofica dell'idea rousseauiana di libertà come obbedienza alla legge che ci si è dati.`
          },
          {
            n: 10, romano: "10", titolo: "I postulati e il primato della ragion pratica",
            chiave: "La virtù merita la felicità, ma nel mondo non la ottiene. Per non rendere assurda la morale, la ragione pratica postula immortalità, libertà e Dio.",
            testo: `**Il sommo bene.** La legge morale comanda la virtù, non la felicità. Ma sarebbe assurdo che la virtù e la felicità restassero eternamente separate: il **sommo bene** è la loro unione, cioè la felicità **proporzionata** alla virtù, «l'essere degni di essere felici».

Il problema: nel mondo dell'esperienza questo accordo non c'è. Il giusto soffre, il malvagio prospera. Se il sommo bene fosse impossibile, la legge morale che ce lo comanda sarebbe vana.

**I tre postulati.** Da qui la ragion pratica **postula** — non dimostra, non conosce — tre proposizioni che la ragion teoretica non poteva né provare né confutare:
- la **libertà**: senza di essa non ci sarebbe dovere. È l'unico dei tre di cui abbiamo, attraverso il *fatto della ragione*, una sorta di certezza;
- l'**immortalità dell'anima**: la santità, cioè la piena conformità della volontà alla legge, è irraggiungibile in una vita finita; richiede un progresso all'infinito, e dunque un'esistenza senza fine;
- l'**esistenza di Dio**: solo un essere insieme onnipotente e giusto può garantire l'accordo tra virtù e felicità, che le leggi della natura non assicurano.

**Che cosa sono i postulati.** Non sono conoscenze: non ampliano di un millimetro il nostro sapere teoretico, e Dio resta inconoscibile. Sono **esigenze pratiche**, condizioni senza le quali la moralità sarebbe assurda: si tratta di una **fede razionale** (*Vernunftglaube*), non di scienza né di credenza cieca.

Si capisce ora la frase della prima *Critica*: «ho dovuto sospendere il sapere per far posto alla fede». Se avessimo la prova scientifica dell'esistenza di Dio e del giudizio, agiremmo bene per **paura o calcolo**, e la moralità sparirebbe. L'ignoranza teorica è la condizione della libertà morale.

**Il primato della ragion pratica.** La ragione è una sola, con due usi. Ma se il suo uso pratico ha bisogno di ammettere ciò che quello teoretico non può provare, **il pratico ha il primato**: la ragione teoretica deve accogliere quelle proposizioni, non come conoscenze proprie, ma come esigenze legittime della ragione nel suo insieme.

**La religione nei limiti della ragione.** Ne discende una religione tutta morale: «la religione è la conoscenza di tutti i nostri doveri come comandi divini». Il vero culto non sono i riti ma la condotta; le pratiche esteriori sono «illusione religiosa» e «feticismo». Kant affronta anche il **male radicale**: nell'uomo c'è una tendenza originaria a subordinare la legge morale all'amor proprio — non un peccato ereditato, ma una scelta della libertà, che solo la libertà può correggere.

**La pagina più celebre**, che chiude la seconda *Critica* ed è incisa sulla sua tomba: «Due cose riempiono l'animo di ammirazione e venerazione sempre nuova e crescente, quanto più spesso e più a lungo la riflessione si occupa di esse: **il cielo stellato sopra di me e la legge morale dentro di me**». La prima mi annienta come essere naturale, un punto in un universo immenso; la seconda «eleva infinitamente il mio valore, come intelligenza, per mezzo della mia personalità».`
          }
        ]
      },
      {
        titolo: "Capitolo 4 — La Critica del Giudizio",
        sottotitolo: "Il bello, il sublime, la finalità della natura",
        canti: [
          {
            n: 11, romano: "11", titolo: "Il problema dell'opera e il giudizio riflettente",
            chiave: "Tra il mondo della natura e quello della libertà c'è un abisso. Il Giudizio è la facoltà che getta un ponte: cerca la regola a partire dal caso particolare.",
            testo: `**Il problema.** Le prime due *Critiche* hanno lasciato due mondi separati: la **natura**, regno della necessità, e la **libertà**, regno del dovere. Ma il fine morale deve potersi realizzare nel mondo naturale, altrimenti resta un'astrazione. Serve un **ponte**, e a costruirlo è il **Giudizio** (*Urteilskraft*), la facoltà intermedia tra intelletto e ragione, il cui sentimento corrispondente è il **piacere e dispiacere**.

**Determinante e riflettente.** Kant distingue due usi:
- il giudizio **determinante**: è dato l'universale (la legge, la categoria) e vi si **sussume** il particolare. È l'operazione della scienza;
- il giudizio **riflettente**: è dato il **particolare** e si cerca l'universale che gli conviene. Non conosce l'oggetto: riflette su di esso in rapporto al nostro modo di sentire.

Il giudizio riflettente ha due forme, e da esse le due parti dell'opera:
- **estetico**: riferisce la rappresentazione al sentimento di piacere → **il bello e il sublime**;
- **teleologico**: considera gli oggetti come se fossero organizzati secondo un fine → **il finalismo della natura**.

**Il principio a priori del Giudizio** è la **finalità** (*Zweckmäßigkeit*): l'assunzione che la natura sia organizzata *come se* fosse fatta per la nostra facoltà di conoscere. È un principio **soggettivo e regolativo**: non dice come è la natura, dice come dobbiamo guardarla per poterla studiare — cercando ordine, sistematicità, leggi sempre più unificate. Senza questa assunzione la ricerca scientifica non avrebbe motivo di cominciare.`
          },
          {
            n: 12, romano: "12", titolo: "Il bello: piacere disinteressato e universalità senza concetto",
            chiave: "Bello non è ciò che è utile né ciò che soddisfa un bisogno: è ciò che piace disinteressatamente, e che pretendiamo debba piacere a tutti pur non potendolo dimostrare.",
            testo: `Kant analizza il giudizio di gusto («questa rosa è bella») secondo le quattro classi delle categorie, ricavandone quattro caratteri.

**1. Qualità: il piacere disinteressato.** Bello è ciò che piace **senza interesse**, cioè senza riferimento all'esistenza dell'oggetto e alla sua utilità per me. È la differenza rispetto al **piacevole** (che soddisfa un bisogno sensibile: il gusto di un cibo) e al **buono** (che è apprezzato in vista di un fine o come valore morale). Chi ammira un palazzo chiedendosi quanto costa o a che serve non sta compiendo un giudizio estetico. La contemplazione estetica è **libera** perché non serve a nulla.

**2. Quantità: universale senza concetto.** Quando dico «questa musica è bella» non dico soltanto «mi piace»: **pretendo il consenso degli altri**. Il giudizio estetico ha una pretesa di **universalità**. Ma non può appoggiarsi a un concetto: non esiste una regola da cui dedurre che una cosa è bella, e nessuna dimostrazione convincerà chi non prova quel piacere. È «universalità **soggettiva**».

Come si giustifica questa pretesa? Con il **libero gioco** delle facoltà: davanti al bello, immaginazione e intelletto entrano in un'armonia libera e non forzata da un concetto determinato. Poiché queste facoltà sono uguali in tutti gli uomini, quell'armonia è in linea di principio **comunicabile universalmente**. È il **senso comune** (*sensus communis*) estetico: non l'opinione della maggioranza, ma la capacità condivisa di sentire.

**3. Relazione: finalità senza scopo.** Il bello è «forma della finalità di un oggetto, in quanto è percepita **senza la rappresentazione di uno scopo**». L'opera bella appare organizzata, armonica, come se fosse fatta *per* qualcosa — ma non si può dire per che cosa. È l'idea che fonderà tutta l'estetica moderna dell'autonomia dell'arte.

**4. Modalità: piacere necessario.** Il bello piace **necessariamente**, cioè con una necessità esemplare: non si può *provare*, ma si può *esigere*.

**Bello libero e aderente.** Kant distingue la bellezza **libera** (un fiore, un arabesco, una fuga musicale: non presuppone alcun concetto di ciò che l'oggetto deve essere) dalla bellezza **aderente** (un edificio, un cavallo, una figura umana: implica un concetto di perfezione della cosa).`
          },
          {
            n: 13, romano: "13", titolo: "Il sublime, il genio, il giudizio teleologico",
            chiave: "Il sublime nasce dal fallimento dell'immaginazione davanti all'immenso e al terribile: e proprio in quel fallimento sentiamo la nostra superiorità morale sulla natura.",
            testo: `**Il sublime.** È l'altro grande sentimento estetico, e Kant lo distingue nettamente dal bello:
- il **bello** riguarda la **forma**, il limite, l'armonia; produce un piacere calmo e positivo; è legato all'**intelletto**;
- il **sublime** riguarda l'**informe**, lo smisurato, il caotico; produce un piacere **negativo**, misto a dispiacere, «un moto dell'animo» fatto di attrazione e repulsione; è legato alla **ragione**.

Due forme:
- **sublime matematico**: davanti a ciò che è incommensurabilmente **grande** (il cielo stellato, l'oceano, le piramidi da vicino). L'immaginazione tenta di abbracciare il tutto in una sola intuizione e **fallisce**;
- **sublime dinamico**: davanti alla **potenza** terribile della natura (la tempesta, il vulcano, i precipizi), purché si sia in condizioni di sicurezza. Ci sentiamo fisicamente annientati.

**Il rovesciamento.** In entrambi i casi accade qualcosa di decisivo: proprio nel fallimento dell'immaginazione si rivela in noi la presenza della **ragione**, che possiede le idee di infinito e di totalità, e la **destinazione morale**, che nessuna forza naturale può schiacciare. «L'irresistibilità della potenza della natura ci fa riconoscere la nostra debolezza fisica, ma scopre insieme in noi una facoltà di giudicarci indipendenti da essa». Il sublime, dunque, non è nella natura: **è in noi**.

È il concetto che i **romantici** faranno proprio, ed è la porta attraverso cui l'infinito rientra nella filosofia dopo che Kant l'aveva escluso dalla conoscenza.

**Il genio.** Come nasce l'arte bella? Non da regole imparabili — altrimenti basterebbe applicarle. Il **genio** è «la disposizione innata dell'animo attraverso cui la natura **dà la regola all'arte**». Caratteri: **originalità** (non imita), **esemplarità** (le sue opere fanno scuola pur non essendo imitabili meccanicamente), **inconsapevolezza** (non sa spiegare come ha fatto: non è come lo scienziato, che può insegnare il proprio procedimento — Newton può essere seguito passo passo, Omero no), **naturalità** (opera come natura, non secondo un piano).

Il genio produce **idee estetiche**: rappresentazioni dell'immaginazione che danno molto da pensare senza che alcun concetto le esaurisca. È il contrario dell'idea di ragione, a cui non corrisponde intuizione.

**Il giudizio teleologico.** Nella seconda parte Kant affronta il **finalismo della natura**. Esistono oggetti — gli **organismi viventi** — che non si spiegano con il meccanicismo: in essi ogni parte è insieme mezzo e fine delle altre, e il tutto precede le parti. Un orologio è fatto *da* qualcosa di esterno; un albero si **auto-organizza**, cresce, si ripara, si riproduce.

Ma attenzione, e qui sta il rigore kantiano: il finalismo è un **principio regolativo del giudizio riflettente**, non una legge costitutiva della natura. Significa che **dobbiamo** guardare gli organismi *come se* fossero prodotti secondo un fine, perché il nostro intelletto non riesce altrimenti a comprenderli; **non** che siano stati creati da un'intelligenza. Kant è netto: non ci sarà mai «un Newton del filo d'erba» capace di spiegare meccanicisticamente la produzione di una foglia — previsione che Darwin, in un certo senso, ha smentito, e che resta uno dei passaggi più discussi dell'opera.

Con questo il sistema si chiude: la finalità estetica e quella teleologica mostrano che la natura non è estranea ai nostri fini, e che il regno della libertà può trovare posto nel regno della necessità.`
          }
        ]
      },
      {
        titolo: "Capitolo 5 — Religione, diritto, storia",
        sottotitolo: "Il progetto della pace perpetua",
        canti: [
          {
            n: 14, romano: "14", titolo: "Diritto, Stato e pace perpetua",
            chiave: "Il diritto garantisce la coesistenza delle libertà; lo Stato deve essere repubblicano; e la pace non è una tregua ma un compito giuridico da costruire tra le nazioni.",
            testo: `**Il diritto.** Kant lo definisce come «l'insieme delle condizioni per cui l'arbitrio dell'uno può accordarsi con l'arbitrio dell'altro secondo una legge universale della libertà». La differenza rispetto alla morale è netta: la morale riguarda l'**intenzione** e non può essere imposta; il diritto riguarda le **azioni esterne** ed è per definizione accompagnato dalla **coercizione**. Un ordinamento giuridico giusto non richiede uomini virtuosi: «il problema dell'istituzione dello Stato è risolubile anche per un popolo di **diavoli**, purché abbiano intelletto».

**Lo Stato.** Kant riprende il **contrattualismo**, ma anche qui il contratto è **un'idea della ragione**, non un fatto storico: è il criterio a cui il legislatore deve conformarsi, chiedendosi se una legge potrebbe essere approvata da tutto il popolo. I principi dello Stato giusto sono tre: **libertà** di ogni membro come uomo, **uguaglianza** di ciascuno come suddito davanti alla legge, **indipendenza** di ciascuno come cittadino.

La forma di governo giusta è quella **repubblicana**, che Kant definisce non per il numero di chi governa ma per la **separazione tra legislativo ed esecutivo** e per il governo mediante leggi: si oppone al **dispotismo**, in cui chi fa le leggi le esegue. Kant non ammette il **diritto di resistenza** — posizione conservatrice che stride con il suo entusiasmo per la Rivoluzione francese, che egli giudicò un «segno storico» del progresso morale dell'umanità, pur condannandone i mezzi.

**Per la pace perpetua** (1795) è il suo scritto politico più famoso, e ha la forma ironica di un trattato internazionale, con articoli preliminari e definitivi.

*Articoli preliminari* (le condizioni negative): nessun trattato di pace valga come tregua con riserve mentali; nessuno Stato possa essere acquistato per eredità o scambio; gli eserciti permanenti siano aboliti col tempo; non si contraggano debiti pubblici per la guerra; nessuno Stato interferisca con la forza nella costituzione di un altro; in guerra non si compiano atti che rendano impossibile la fiducia futura (assassini, avvelenatori, istigazione al tradimento).

*Articoli definitivi* (le condizioni positive):
- la costituzione di ogni Stato sia **repubblicana**: dove sono i cittadini a decidere, si va alla guerra molto più raramente, perché sono loro a pagarne il prezzo;
- il diritto internazionale sia fondato su una **federazione di liberi Stati**: non uno Stato mondiale (che rischierebbe il dispotismo universale) ma un'alleanza permanente che rinunci alla guerra;
- esista un **diritto cosmopolitico**, limitato alle condizioni dell'**ospitalità universale**: il diritto di ogni straniero a non essere trattato con ostilità quando arriva sul territorio altrui. Kant lo argomenta con parole durissime contro il **colonialismo** europeo e la «condotta inospitale degli Stati civili».

La pace, conclude Kant, non è uno stato di natura — quello è la guerra — ma un **compito** da istituire, un dovere morale e giuridico. Il progetto ispirerà la Società delle Nazioni e l'ONU.`
          },
          {
            n: 15, romano: "15", titolo: "La filosofia della storia e l'eredità di Kant",
            chiave: "La storia procede per «insocievole socievolezza»: sono i conflitti e l'egoismo a costringere gli uomini a darsi leggi. E la natura ha un piano che noi possiamo solo ipotizzare.",
            testo: `**L'idea di una storia universale.** Nello scritto del 1784 Kant si chiede se la storia umana, che a prima vista appare un caos di follie, non nasconda un disegno. La risposta è metodologica: possiamo **ipotizzare** un piano della natura, non dimostrarlo — è un uso regolativo del giudizio riflettente applicato alla storia.

**L'insocievole socievolezza** (*ungesellige Geselligkeit*) è il concetto motore: l'uomo ha insieme la tendenza ad **associarsi** (perché solo in società sviluppa le proprie disposizioni) e a **isolarsi**, a prevalere sugli altri, a competere. È l'antagonismo — la vanità, l'ambizione, l'avidità — a strappare gli uomini alla pigrizia e a costringerli a sviluppare talenti, arti, scienze e infine ordinamenti giuridici. «Senza queste qualità in sé poco amabili, tutti i talenti resterebbero eternamente sepolti in germe, in una arcadica vita pastorale».

Il **fine ultimo** che la natura persegue attraverso questo conflitto è l'istituzione di una **società civile universale che amministri il diritto**: prima all'interno degli Stati, poi nei rapporti tra Stati. La guerra stessa, paradossalmente, spinge in questa direzione, costringendo gli uomini a cercare la pace per esaurimento.

È lo stesso schema di **eterogenesi dei fini** che abbiamo visto in Vico e in Mandeville, e che Hegel chiamerà **astuzia della ragione**: le passioni private producono, senza volerlo, un risultato razionale.

**L'eredità di Kant.** Difficilmente si esagera la sua importanza. Dopo di lui la filosofia occidentale si divide in un prima e un dopo.
- La **svolta trascendentale**: la domanda su che cosa rende possibile la conoscenza diventa la domanda filosofica per eccellenza; da qui Fichte, Schelling, Hegel, e più tardi Husserl e la fenomenologia.
- La **critica della metafisica**: il divieto di applicare le categorie oltre l'esperienza è la premessa del positivismo, del neokantismo e, in altro modo, della filosofia analitica.
- L'**autonomia morale** e la **dignità della persona**: sono entrate nel linguaggio del diritto contemporaneo. La formula dell'umanità come fine è alla base delle dichiarazioni dei diritti umani.
- L'**estetica**: il piacere disinteressato e la finalità senza scopo fondano l'autonomia dell'arte moderna; il sublime apre al Romanticismo.
- Il **cosmopolitismo giuridico**: la pace perpetua è il progetto delle istituzioni internazionali.

**Le critiche immediate.** Il punto più attaccato fu subito la **cosa in sé**: **Jacobi** osservò che senza di essa non si entra nel sistema kantiano, e con essa non ci si può restare (perché per dire che la cosa in sé «causa» le impressioni si applica la categoria di causa oltre il lecito). Da questa obiezione, come vedremo, nascerà l'**idealismo tedesco**, che eliminerà la cosa in sé e farà dell'Io il principio unico della realtà.

**Kant oggi.** Le sue idee restano vive nel dibattito contemporaneo: **Rawls** riprende l'universalizzabilità e il contratto come idea razionale nella *Teoria della giustizia*; **Habermas** trasforma l'imperativo categorico in etica del discorso; il diritto internazionale e la bioetica ne usano quotidianamente il vocabolario. Pochi filosofi sono altrettanto presenti in problemi che non potevano nemmeno immaginare.`
          }
        ]
      }
    ],
    personaggi: [
      {
        gruppo: "1. Il criticismo",
        voci: [
          { nome: "Criticismo", alt: [], desc: "Esame delle condizioni di possibilità e dei limiti della conoscenza: la ragione istituisce un tribunale su sé stessa. Contro dogmatismo e scetticismo." },
          { nome: "Le tre domande", alt: [], desc: "Che cosa posso sapere, che cosa devo fare, che cosa posso sperare: e tutte in una, che cos'è l'uomo." },
          { nome: "Giudizio analitico / sintetico", alt: [], desc: "Nell'analitico il predicato è già nel soggetto (certo ma vuoto); nel sintetico aggiunge qualcosa (informativo)." },
          { nome: "A priori / a posteriori", alt: [], desc: "A priori è ciò che è indipendente dall'esperienza, riconoscibile da universalità e necessità; a posteriori deriva dall'esperienza." },
          { nome: "Sintetico a priori", alt: [], desc: "Informativo e insieme universale e necessario: è ciò che rende possibile la scienza. 7+5=12, la retta è la via più breve." },
          { nome: "Trascendentale", alt: [], desc: "Non «trascendente»: ciò che riguarda il nostro modo a priori di conoscere gli oggetti, e che rende possibile l'esperienza." },
          { nome: "Rivoluzione copernicana", alt: [], desc: "Non la conoscenza si regola sugli oggetti ma gli oggetti sulla conoscenza. Le forme del soggetto costituiscono l'oggetto." },
          { nome: "Fenomeno e noumeno", alt: ["cosa in sé"], desc: "Il fenomeno è l'oggetto reale della conoscenza, non un'illusione; il noumeno è concetto-limite, che impedisce l'idealismo e apre spazio alla libertà." }
        ]
      },
      {
        gruppo: "2. Ragion pura",
        voci: [
          { nome: "Estetica trascendentale", alt: [], desc: "Dottrina della sensibilità: spazio e tempo sono forme a priori, non cose né relazioni. Idealità trascendentale e realtà empirica." },
          { nome: "Spazio e tempo", alt: [], desc: "Spazio forma del senso esterno, tempo del senso interno e quindi di tutti i fenomeni. Sono intuizioni pure, non concetti." },
          { nome: "Categorie", alt: [], desc: "Dodici concetti puri dell'intelletto in quattro gruppi (quantità, qualità, relazione, modalità), ricavati dalle forme del giudizio." },
          { nome: "Deduzione trascendentale", alt: [], desc: "La giustificazione del diritto di applicare le categorie: nulla può diventare mia esperienza senza essere unificato secondo esse." },
          { nome: "Io penso", alt: ["appercezione"], desc: "L'unità che deve poter accompagnare tutte le rappresentazioni: funzione unificatrice, non anima-sostanza." },
          { nome: "Intelletto legislatore della natura", alt: [], desc: "La natura come insieme di fenomeni connessi secondo leggi è costituita dalle forme del soggetto." },
          { nome: "Schematismo", alt: [], desc: "Gli schemi, prodotti dall'immaginazione, sono determinazioni a priori del tempo che mediano tra categorie e intuizioni. «Arte nascosta nel profondo dell'anima»." },
          { nome: "Idee della ragione", alt: ["anima, mondo, Dio"], desc: "Nascono dalla ricerca dell'incondizionato; non hanno oggetto nell'esperienza e generano illusione trascendentale." },
          { nome: "Paralogismi", alt: [], desc: "Si scambia l'io come funzione logica con un io-sostanza: cade la prova razionale dell'immortalità." },
          { nome: "Antinomie", alt: [], desc: "Quattro coppie di tesi opposte ugualmente dimostrabili. Le matematiche sono entrambe false; le dinamiche possono essere entrambe vere su piani diversi." },
          { nome: "«L'essere non è un predicato reale»", alt: [], desc: "La confutazione della prova ontologica: cento talleri reali non contengono un centesimo più di cento talleri possibili." },
          { nome: "Uso regolativo", alt: ["als ob"], desc: "Le idee non fanno conoscere oggetti ma guidano la ricerca a unificare sempre di più, «come se» il mondo fosse un tutto sistematico." }
        ]
      },
      {
        gruppo: "3. Ragion pratica",
        voci: [
          { nome: "Fatto della ragione", alt: [], desc: "La coscienza della legge morale non si dimostra: si constata. «Devi, dunque puoi»: dal dovere si deduce la libertà." },
          { nome: "Massime e imperativi", alt: [], desc: "Le massime sono principi soggettivi del singolo; gli imperativi principi oggettivi validi per ogni essere razionale." },
          { nome: "Imperativo ipotetico", alt: [], desc: "«Se vuoi X, fai Y»: vale solo se si vuole quel fine. Consiglio di prudenza, non morale." },
          { nome: "Imperativo categorico", alt: [], desc: "Comanda incondizionatamente e può prescrivere solo la forma: «agisci secondo la massima che puoi volere divenga legge universale»." },
          { nome: "Umanità come fine", alt: ["dignità"], desc: "Tratta l'umanità sempre anche come fine, mai solo come mezzo. Le cose hanno prezzo, le persone dignità." },
          { nome: "Autonomia / eteronomia", alt: [], desc: "La legge viene dalla ragione stessa del soggetto, non da fuori. Ogni morale eteronoma non è veramente morale." },
          { nome: "Legalità e moralità", alt: [], desc: "Conforme al dovere contro compiuto per dovere: il commerciante onesto per convenienza è legale ma non morale." },
          { nome: "Buona volontà", alt: [], desc: "L'unica cosa buona senza limitazione: intelligenza, coraggio e ricchezza possono diventare cattivi senza di essa." },
          { nome: "Sommo bene", alt: [], desc: "Unione di virtù e felicità proporzionata: nel mondo non si realizza, e da qui nascono i postulati." },
          { nome: "Postulati", alt: ["libertà, immortalità, Dio"], desc: "Non conoscenze ma esigenze pratiche: fede razionale, senza cui la moralità sarebbe assurda." },
          { nome: "Primato della ragion pratica", alt: [], desc: "L'uso pratico della ragione ha la precedenza: la ragione teoretica deve accogliere i postulati come esigenze legittime." },
          { nome: "Male radicale", alt: [], desc: "La tendenza a subordinare la legge morale all'amor proprio: non peccato ereditato ma scelta della libertà." }
        ]
      },
      {
        gruppo: "4. Giudizio, diritto, storia",
        voci: [
          { nome: "Giudizio determinante / riflettente", alt: [], desc: "Il primo sussume il particolare sotto un universale dato; il secondo cerca l'universale a partire dal particolare." },
          { nome: "Finalità", alt: ["Zweckmäßigkeit"], desc: "Il principio a priori del Giudizio: guardare la natura «come se» fosse organizzata per la nostra facoltà conoscitiva. Soggettivo e regolativo." },
          { nome: "Piacere disinteressato", alt: [], desc: "Bello è ciò che piace senza riferimento all'esistenza e all'utilità dell'oggetto: diverso dal piacevole e dal buono." },
          { nome: "Universalità senza concetto", alt: ["sensus communis"], desc: "Il giudizio di gusto pretende il consenso di tutti pur non potendo dimostrare: si fonda sul libero gioco di immaginazione e intelletto." },
          { nome: "Finalità senza scopo", alt: [], desc: "Il bello appare organizzato come se fosse fatto per qualcosa, senza che si possa dire per che cosa. Fonda l'autonomia dell'arte." },
          { nome: "Sublime", alt: ["matematico", "dinamico"], desc: "Piacere negativo davanti allo smisurato o al terribile: l'immaginazione fallisce e si rivela la superiorità morale della ragione. Il sublime è in noi." },
          { nome: "Genio", alt: [], desc: "La natura che dà la regola all'arte: originale, esemplare, inconsapevole. Newton si può seguire passo passo, Omero no." },
          { nome: "Idee estetiche", alt: [], desc: "Rappresentazioni dell'immaginazione che danno molto da pensare senza che alcun concetto le esaurisca." },
          { nome: "Teleologia degli organismi", alt: [], desc: "Nel vivente ogni parte è mezzo e fine delle altre. Ma il finalismo è regolativo: non c'è «un Newton del filo d'erba»." },
          { nome: "Popolo di diavoli", alt: [], desc: "Un buon ordinamento giuridico è possibile anche senza uomini virtuosi, purché dotati di intelletto: il diritto riguarda le azioni esterne." },
          { nome: "Repubblicanesimo", alt: [], desc: "Non il numero dei governanti ma la separazione tra legislativo ed esecutivo e il governo mediante leggi. Opposto al dispotismo." },
          { nome: "Pace perpetua", alt: ["federazione", "ospitalità"], desc: "Costituzioni repubblicane, federazione di liberi Stati, diritto cosmopolitico dell'ospitalità. La pace è un compito, non uno stato di natura." },
          { nome: "Insocievole socievolezza", alt: [], desc: "L'antagonismo tra uomini li costringe a sviluppare talenti e a darsi leggi: eterogenesi dei fini applicata alla storia." }
        ]
      }
    ]
  }

  ,

  /* ------------------------------------------------ UNITÀ 8 */
  "romanticismo-idealismo": {
    id: "romanticismo-idealismo",
    titolo: "Romanticismo e idealismo",
    autore: "Unità 8 · L'Ottocento",
    sottotitolo: "Fichte, Schelling e i fondatori dell'idealismo",
    epoca: "1770 – 1830",
    lingua: "Jena, Berlino, Monaco",
    tag: ["Romanticismo", "Infinito", "Fichte", "Schelling", "Io"],
    epigrafe: "L'Io pone originariamente sé stesso.",
    colore: "viola",
    parti: [
      {
        titolo: "Capitolo 1 — La filosofia tedesca di fine Settecento",
        sottotitolo: "La filosofia della fede e il classicismo",
        canti: [
          {
            n: 1, romano: "1", titolo: "Hamann, Herder, Jacobi: la filosofia della fede",
            chiave: "Contro l'astrazione illuministica: il sapere vero è sentimento, fede, storia e lingua. È il primo scardinamento della ragione dei Lumi.",
            testo: `Alla fine del Settecento, in Germania, si diffonde una reazione al razionalismo illuministico che prepara il Romanticismo. Prende il nome di *Sturm und Drang* («tempesta e assalto») nella letteratura e di «filosofia della fede» o del sentimento in filosofia.

**Johann Georg Hamann** (1730–1788), «il mago del Nord», amico e critico di Kant: la ragione analitica separa ciò che nella vita è unito. La realtà si coglie nella **fede** (*Glaube*), che è insieme fiducia e certezza immediata, e nel **linguaggio**, che non è strumento della ragione ma sua **origine**: «la poesia è la lingua materna del genere umano». Nella realtà gli opposti coesistono (*coincidentia oppositorum*): il pensiero astratto li separa e ne perde la vita.

**Johann Gottfried Herder** (1744–1803) è il più influente. Le sue tesi:
- ogni **popolo** ha un proprio spirito (*Volksgeist*) che si esprime nella lingua, nei canti popolari, nei costumi, nel diritto. Non esiste una natura umana astratta e uguale ovunque, come credevano gli illuministi;
- ogni **epoca** ha valore in sé e va compresa dall'interno, non giudicata col metro del presente. Il Medioevo non è «età oscura»: è un modo diverso e legittimo di essere umani. È l'atto di nascita dello **storicismo**;
- la **lingua** non è un'invenzione arbitraria né un dono divino: nasce con il pensiero, e insieme a esso;
- la storia dell'umanità è il progressivo dispiegarsi dell'**umanità** (*Humanität*) attraverso una pluralità di forme, come un albero che ramifica.

Herder rivaluta il popolare, il primitivo, il folklore, la poesia orale: raccoglie canti popolari, promuove Shakespeare contro il classicismo francese. È l'origine della sensibilità romantica per le radici, la tradizione, la nazione — con tutte le ambivalenze storiche che questo comporterà.

**Friedrich Heinrich Jacobi** (1743–1819) è filosoficamente il più tagliente. Due sue mosse pesano su tutta la filosofia successiva:
- **la critica alla cosa in sé**: «senza quel presupposto non posso entrare nel sistema kantiano, e con esso non posso restarvi». Se la cosa in sé causa le impressioni, si applica la categoria di causa oltre il lecito; se non le causa, è inutile. Da questa obiezione nascerà l'idealismo;
- **la polemica sul panteismo** (*Pantheismusstreit*, 1785): Jacobi rivela che Lessing era spinozista, e sostiene che ogni razionalismo coerente conduce a Spinoza, cioè al **panteismo, al determinismo e al fatalismo** — quindi alla negazione di Dio personale e della libertà. La sua conclusione: bisogna compiere un *salto mortale* dalla ragione alla **fede**. L'effetto involontario fu di far riscoprire Spinoza a tutta una generazione — Goethe, Schelling, Hegel, Novalis — che vi trovò invece l'idea di un'unica sostanza vivente.

**Schiller** e **Goethe** rappresentano il **classicismo di Weimar**: cercano una conciliazione tra natura e spirito, dovere e inclinazione. Schiller, nelle *Lettere sull'educazione estetica*, propone la **bellezza** come mediatrice: l'uomo è pienamente uomo solo quando gioca (*Spieltrieb*, impulso al gioco), cioè quando forma e materia, ragione e sensibilità si armonizzano nell'arte. È una risposta al rigorismo kantiano e insieme una lettura politica: solo l'educazione estetica può formare uomini degni della libertà.

**Wilhelm von Humboldt** applica queste idee alla lingua (ogni lingua è una «visione del mondo»), alla storia e allo Stato, di cui teorizza i limiti in nome dello sviluppo individuale.`
          },
          {
            n: 2, romano: "2", titolo: "Il Romanticismo: caratteri generali",
            chiave: "Rifiuto della ragione calcolante, ricerca dell'infinito, primato del sentimento e dell'arte, culto della natura e della storia: una nuova sensibilità europea.",
            testo: `Il **Romanticismo** nasce a **Jena** intorno al 1798 con il circolo dei fratelli **Schlegel**, **Novalis**, **Tieck**, **Schleiermacher**, e la rivista *Athenäum*. Da lì si diffonde in tutta Europa.

**Gli atteggiamenti caratteristici.**
- **Rifiuto della ragione illuministica**, giudicata fredda, astratta, incapace di cogliere la vita. Non si nega la ragione: se ne nega il **primato esclusivo**. Si cercano altre vie d'accesso all'Assoluto: **sentimento**, **fede**, **arte**, **intuizione**, **immaginazione**.
- **Il senso dell'infinito**. È il tratto più profondo. La realtà non è un insieme finito di fatti: è un **infinito** che si manifesta nel finito. Ogni cosa rimanda oltre sé stessa. Da qui la *Sehnsucht*, il desiderio struggente e mai appagato, e l'*ironia romantica*, la coscienza che nessuna opera finita può esaurire l'infinito.
- **La vita come inquietudine e desiderio**. Il romantico non cerca l'equilibrio ma la tensione; non la quiete ma il divenire. Il modello non è la statua greca ma la musica, arte del tempo e dell'indefinito.
- **L'infinità e creatività dell'uomo**. L'artista è colui che crea come la natura; il genio è una forza cosmica. Nasce il culto moderno dell'artista.
- **L'amore** come anelito di fusione totale e cifra dell'infinito, e insieme la sua idealizzazione tragica (Werther, Tristano).
- **La natura** non è più macchina: è **organismo vivente**, spirito che dorme, forza creatrice. Si passa dal meccanicismo all'**organicismo**.
- **Il ritorno alla storia e alla tradizione**. Contro l'idea illuministica di una ragione uguale in tutti i tempi, il romantico valorizza il **passato** — soprattutto il **Medioevo**, riscoperto come età di fede, comunità e poesia — e la **nazione** come organismo storico. Nasce la scuola storica del diritto, la filologia moderna, il gusto per il gotico.
- **Il rapporto con la religione**: **Schleiermacher** definisce la religione non come dottrina né come morale, ma come «**sentimento della dipendenza assoluta**» e «intuizione dell'infinito nel finito». Non ha bisogno di prove: è un'esperienza originaria.

**Le due fasi.** La prima fase (Jena, 1798–1804) è entusiastica, rivoluzionaria, filosoficamente creativa. La seconda (Heidelberg, dopo il 1805) è più conservatrice: si accentua la valorizzazione della tradizione, della religione positiva, della monarchia, in reazione a Napoleone e alla Rivoluzione.

**Le figure.** **Hölderlin**, il poeta della nostalgia della Grecia e dell'unità perduta; **Friedrich Schlegel**, teorico della **poesia universale progressiva** e dell'ironia; **Novalis**, che con la formula dell'«idealismo magico» pensa un io capace di trasformare il mondo, e canta la notte, il sogno, la morte come passaggio; **Schleiermacher**, teologo e traduttore di Platone.

**Come giudicarlo.** Il Romanticismo è ambivalente: da un lato ha allargato enormemente la comprensione dell'uomo (storia, inconscio, arte, sentimento, culture diverse); dall'altro il culto dell'irrazionale, del genio e della nazione mostrerà, molto più tardi, il proprio lato oscuro. Ma **idealismo** e Romanticismo non coincidono: l'idealismo è un tentativo di comprendere l'Assoluto con la **ragione**, non contro di essa — Hegel, anzi, sarà severissimo con l'intuizionismo romantico.`
          }
        ]
      },
      {
        titolo: "Capitolo 2 — Fichte",
        sottotitolo: "L'Io che pone sé stesso",
        canti: [
          {
            n: 3, romano: "3", titolo: "Dalla cosa in sé all'idealismo",
            chiave: "Eliminata la cosa in sé, resta solo il soggetto: ma allora il soggetto deve produrre anche l'oggetto. Nasce l'idealismo tedesco.",
            testo: `**Il problema lasciato da Kant.** La **cosa in sé** era la parte del sistema kantiano più fragile: incoglioscibile eppure causa delle nostre impressioni, cioè pensata attraverso una categoria che dovrebbe valere solo nel fenomeno. **Jacobi**, **Maimon** e **Schulze** insistono sulla contraddizione.

Le vie d'uscita erano due: rinunciare alla pretesa di conoscere (scetticismo) oppure **eliminare la cosa in sé**. I post-kantiani scelgono la seconda, e il risultato è l'**idealismo**: se non c'è nulla di dato dall'esterno, allora l'oggetto stesso è **prodotto** dal soggetto.

**I caratteri dell'idealismo tedesco.**
- **Monismo**: esiste un unico principio (l'Io, l'Assoluto, lo Spirito) da cui tutto deriva. Cade la dualità kantiana fenomeno/noumeno.
- **Infinito**: il principio non è finito. Il finito non è altro rispetto all'infinito: ne è un **momento**, una manifestazione.
- **Identità di reale e razionale**: se la realtà è prodotta dal pensiero, allora conoscere significa ripercorrere la genesi delle cose. Si può conoscere tutto.
- **Il primato del divenire**: l'Assoluto non è una sostanza immobile ma **attività, processo, sviluppo**.
- **La dialettica**: il processo procede per opposizioni e loro superamento.

**Fichte.** **Johann Gottlieb Fichte** (1762–1814), di origini poverissime, si forma su Kant e pubblica anonimo un *Saggio di una critica di ogni rivelazione* che tutti attribuiscono a Kant: quando si scopre l'autore, diventa celebre in una notte. Professore a **Jena**, ne viene allontanato nel 1799 per l'accusa di **ateismo** (aveva identificato Dio con l'ordine morale del mondo). A Berlino, sotto l'occupazione napoleonica, pronuncia i ***Discorsi alla nazione tedesca*** (1807–08). Opera principale: la ***Dottrina della scienza*** (*Wissenschaftslehre*, 1794 e molte riscritture).

**Idealismo o dogmatismo: una scelta.** Fichte pone il problema in termini che colpirono i contemporanei. Due sistemi sono possibili e coerenti: il **dogmatismo** (parte dalla cosa, dall'oggetto, e ne fa derivare la coscienza: è deterministico, e nega la libertà) e l'**idealismo** (parte dall'Io e ne fa derivare l'oggetto: fonda la libertà). Nessuno dei due può confutare l'altro con argomenti, perché ciascuno parte da un principio diverso. La scelta è dunque **morale ed esistenziale**: «**che filosofia si scelga dipende da che uomo si è**». Chi ha coscienza della propria libertà sceglie l'idealismo.`
          },
          {
            n: 4, romano: "4", titolo: "I tre principi della Dottrina della scienza",
            chiave: "L'Io pone sé stesso; l'Io oppone a sé un non-Io; l'Io oppone nell'Io un Io divisibile a un non-Io divisibile. Tesi, antitesi, sintesi.",
            testo: `La *Dottrina della scienza* deve individuare il principio primo di ogni sapere: qualcosa di assolutamente incondizionato, che non presupponga nulla. Non può essere un fatto (*Tatsache*), perché ogni fatto è già oggetto: dev'essere un'**azione** che ponendosi si conosce, ciò che Fichte chiama ***Tathandlung***, «atto-azione» — un'attività che è insieme l'agire e il prodotto dell'agire.

**Primo principio: l'Io pone sé stesso.** «L'Io pone originariamente il proprio essere» — *Io = Io*. Non c'è un io che prima esista e poi si conosca: l'Io **è** in quanto si pone. È **autoposizione**, autocoscienza pura, attività infinita. È la **tesi**.

Attenzione: non si tratta dell'io empirico, del singolo individuo Tizio o Caio. È l'**Io puro**, l'attività universale che sta alla base di ogni coscienza. Fichte trasforma l'«Io penso» kantiano da condizione formale a **principio creatore**.

**Secondo principio: l'Io oppone a sé un non-Io.** Se l'Io fosse solo attività infinita e indeterminata, non ci sarebbe coscienza, perché la coscienza è sempre coscienza *di qualcosa*. L'Io, per essere consapevole di sé, deve **limitarsi**, deve porre di fronte a sé un ostacolo, un **non-Io** (il mondo, l'oggetto, la natura). È l'**antitesi**.

Il punto decisivo: il non-Io non viene da fuori — sarebbe la cosa in sé — ma è **posto dall'Io stesso**. La natura non è un dato: è l'ostacolo che l'Io produce per potersi realizzare, in modo del tutto **inconsapevole**.

**Terzo principio: l'Io oppone nell'Io un Io divisibile a un non-Io divisibile.** Se Io e non-Io fossero entrambi infiniti si annullerebbero. Devono dunque **limitarsi reciprocamente** all'interno dell'Io assoluto: nasce così l'**Io empirico** (il soggetto finito, ciascuno di noi) di fronte al **non-Io empirico** (la natura, il mondo degli oggetti). È la **sintesi**.

È il primo grande esempio di **dialettica** moderna, lo schema tesi-antitesi-sintesi che Hegel erediterà e trasformerà.

**Le due direzioni.** Dai tre principi Fichte deriva le due parti della sua filosofia:
- l'attività **teoretica**: l'Io è **limitato** dal non-Io, cioè la coscienza si trova davanti un mondo che le sembra indipendente. Qui l'Io produce senza saperlo, e l'**immaginazione produttiva** è la facoltà che costruisce l'oggetto. Rappresentare significa subire — ma è un subire che l'Io stesso ha causato;
- l'attività **pratica**: l'Io tende a **superare** il limite, a estendere il proprio dominio sul non-Io. Qui l'Io è libero e attivo.

**Il primato della ragion pratica.** La domanda decisiva: perché l'Io pone un ostacolo? Perché è **attività infinita** e per essere attivo ha bisogno di qualcosa da superare, come la forza ha bisogno di una resistenza. Il non-Io esiste **in funzione dell'agire morale**. Ne segue che l'aspetto teoretico è subordinato al pratico: «non agiamo perché conosciamo, ma **conosciamo perché siamo destinati ad agire**».`
          },
          {
            n: 5, romano: "5", titolo: "La morale, il pensiero politico, i Discorsi alla nazione",
            chiave: "Il compito morale è infinito: la libertà è uno sforzo senza fine. E la missione del dotto è educare l'umanità; quella della Germania, rigenerare l'Europa.",
            testo: `**La dottrina morale.** Se l'Io è attività infinita che deve superare ogni ostacolo, il compito morale è **infinito**: mai concluso, sempre da riprendere. La legge morale suona: «agisci sempre secondo la migliore convinzione del tuo dovere», cioè secondo la voce della coscienza, che Fichte considera infallibile.

La differenza con Kant è di tono e di struttura: in Kant il dovere è un limite che la ragione impone alle inclinazioni; in Fichte è la **manifestazione dell'attività infinita dell'Io**, il modo in cui l'Io diventa ciò che è. La libertà non è un fatto ma un **compito** (*Streben*, tensione). Il mondo sensibile è «la materia sensibilizzata del nostro dovere».

Da qui anche la sua religione: Dio non è una sostanza personale ma l'**ordine morale del mondo**, l'infinita legge dell'agire. Fu questa tesi a costargli la cattedra.

**La missione del dotto.** Nelle conferenze *Sulla missione del dotto* Fichte assegna all'intellettuale un ruolo pubblico: non chiudersi nella speculazione ma **educare** l'umanità, elevarne il livello morale, essere «sacerdote della verità». È l'immagine moderna dell'intellettuale come guida civile.

**Il pensiero politico.** Fichte evolve nettamente.
- In un primo momento è vicino al **contrattualismo** e alla Rivoluzione francese, di cui scrive una difesa; il diritto nasce dal reciproco limitarsi delle libertà.
- Nello *Stato commerciale chiuso* (1800) delinea una **società autarchica** pianificata, che garantisca a tutti il lavoro e i mezzi di sussistenza, con controllo statale del commercio estero: una posizione che lo ha fatto considerare un precursore del socialismo di Stato.
- Dopo la sconfitta prussiana a Jena e l'occupazione napoleonica, nei ***Discorsi alla nazione tedesca*** (1807–08) elabora una concezione **nazionale**: i tedeschi sarebbero un «popolo originario» (*Urvolk*) perché hanno conservato una lingua «viva», non derivata; a loro spetta la missione di rigenerare l'Europa, attraverso una nuova **educazione nazionale** che formi uomini liberi.

**Il giudizio.** I *Discorsi* sono un documento ambivalente. Nel contesto sono un appello alla resistenza civile e alla riforma educativa di un popolo occupato, non un programma di conquista; ma la loro retorica del popolo eletto e della lingua originaria sarà poi utilizzata dal nazionalismo tedesco più aggressivo. È il caso classico in cui un testo va letto insieme nel suo contesto e nei suoi effetti.

**La seconda fase** (dopo il 1800) attenua l'idealismo soggettivo: l'Io assoluto tende a identificarsi con **Dio**, di cui la coscienza umana è manifestazione o «immagine»; il tono diventa mistico-religioso. È il segno di una difficoltà reale del sistema: un Io che pone tutto rischia o di essere il singolo individuo (assurdo) o di essere Dio (e allora non è più «Io»). Sarà il punto di attacco di Schelling.`
          }
        ]
      },
      {
        titolo: "Capitolo 3 — Schelling",
        sottotitolo: "L'Assoluto come indifferenza di spirito e natura",
        canti: [
          {
            n: 6, romano: "6", titolo: "La critica a Fichte e la filosofia della natura",
            chiave: "La natura non è un semplice ostacolo per l'Io: è spirito che dorme, un'intelligenza in formazione. Natura e spirito sono la stessa realtà a gradi diversi.",
            testo: `**Friedrich Wilhelm Joseph Schelling** (1775–1854), compagno di studi di Hegel e Hölderlin al seminario di Tubinga, è un ragazzo prodigio: pubblica opere importanti a poco più di vent'anni e ottiene una cattedra a Jena a ventitré. Il suo pensiero attraversa molte fasi, e questa mobilità è insieme la sua ricchezza e il suo limite.

**La critica a Fichte.** Se il non-Io è solo un ostacolo posto dall'Io per esercitare la propria libertà, la **natura** viene ridotta a materiale inerte, priva di dignità propria. Schelling — nutrito di Spinoza, di Bruno, del Romanticismo e delle nuove scoperte scientifiche (elettricità, magnetismo, chimica, biologia) — reagisce: la natura non è un mezzo, è una **potenza autonoma e creatrice**.

**L'Assoluto come indifferenza.** Il principio primo non può essere né l'Io né la natura, perché sarebbe già uno dei due opposti. Deve essere la loro **radice comune**: l'**Assoluto** come **identità indifferenziata** di spirito e natura, di soggetto e oggetto, di ideale e reale. In esso le differenze non sono ancora sorte; è «la notte in cui tutte le vacche sono nere», dirà ironicamente Hegel, contestandone l'indeterminatezza.

Da questo unico Assoluto partono due strade simmetriche, che Schelling percorre entrambe:
- dalla **natura** verso lo spirito → **filosofia della natura**;
- dallo **spirito** verso la natura → **idealismo trascendentale**.

**La filosofia della natura.** La natura è «**spirito visibile**», e lo spirito è «natura invisibile»; la natura è «un'intelligenza pietrificata», uno spirito che dorme e che progressivamente si sveglia. Non è un meccanismo ma un **organismo**, animato da un'anima del mondo (*Weltseele*) e da una struttura **dialettica**: ogni fenomeno nasce dalla tensione tra **forze opposte** (attrazione e repulsione, polo positivo e negativo, come nel magnete). È la **polarità** il principio esplicativo universale.

La natura procede per **gradi** o «potenze», dai più semplici ai più complessi: dalla materia inorganica (magnetismo, elettricità, chimismo) alla vita organica (sensibilità, irritabilità, riproduzione), fino all'uomo, in cui la natura diventa **cosciente di sé**. Il finalismo, che Kant aveva ammesso solo come principio regolativo, in Schelling diventa **reale**: la natura tende davvero allo spirito.

**Il giudizio scientifico.** La *Naturphilosophie* è stata a lungo derisa come «fisica speculativa» fantasiosa, e in effetti pretendeva di dedurre a priori i fenomeni che gli scienziati faticosamente scoprivano. Ma va riconosciuto che ispirò ricerche reali: Oersted, che scoprì il legame tra elettricità e magnetismo, era influenzato da questa scuola, e l'idea di unità delle forze naturali si rivelò feconda.`
          },
          {
            n: 7, romano: "7", titolo: "L'idealismo trascendentale e la filosofia dell'arte",
            chiave: "Il cammino inverso: dall'Io alla natura. E al vertice non c'è la filosofia ma l'arte, unico luogo in cui conscio e inconscio, libertà e necessità coincidono davvero.",
            testo: `Nel *Sistema dell'idealismo trascendentale* (1800) Schelling percorre la strada opposta a quella della filosofia della natura: parte dall'**Io** e mostra come esso produca inconsapevolmente il mondo oggettivo, ricostruendo le tappe («epoche») dell'autocoscienza.

- **Filosofia teoretica**: dalla sensazione all'intuizione, alla riflessione, alla volontà. L'Io produce l'oggetto ma non lo sa: è la «storia inconscia dell'intelligenza».
- **Filosofia pratica**: l'Io si sa libero e agisce. Qui si colloca anche la **storia**, che Schelling concepisce come il luogo in cui libertà e necessità si intrecciano: gli uomini agiscono liberamente, ma dall'insieme delle loro azioni emerge un ordine che nessuno ha voluto. È l'**eterogenesi dei fini** interpretata come rivelazione progressiva dell'Assoluto: la storia è «una rivelazione continua e progressiva di Dio». Schelling ne distingue tre periodi: fatalità (il mondo antico, dominato dal destino cieco), natura (il presente, dominato da leggi meccaniche), provvidenza (il futuro, quando l'Assoluto si mostrerà come tale).

**Il vertice: l'arte.** Il problema di tutto il sistema è: dove si può **constatare** l'identità di natura e spirito, di inconscio e cosciente? Non nella filosofia, che ne ha solo un'**intuizione intellettuale** riservata a pochi e indimostrabile. La risposta di Schelling è la sua tesi più celebre e più romantica: **nell'arte**.

Perché l'arte? Perché nell'opera d'arte:
- l'artista lavora **consapevolmente** (tecnica, progetto, mestiere) e insieme **inconsapevolmente** (ispirazione, genio, ciò che l'opera dice oltre le sue intenzioni). Vi coincidono libertà e necessità;
- il prodotto è **infinito**: un'opera vera non si esaurisce in nessuna interpretazione, «suscita un'infinità di interpretazioni»;
- l'identità di reale e ideale non è pensata ma **resa visibile**, presente, concreta.

Perciò l'arte è «l'**organo universale della filosofia**» e «il documento eterno e unico della filosofia»: dove il filosofo può solo indicare, l'artista mostra. È la più alta consacrazione dell'arte in tutta la storia del pensiero occidentale, e la bandiera del Romanticismo.

**La filosofia dell'identità e il problema del finito.** Nella fase successiva Schelling formula l'**Assoluto come identità** pura di soggetto e oggetto. Ma sorge la domanda che lo tormenterà: **perché dall'infinito nasce il finito?** Se l'Assoluto è perfetto e indifferenziato, che bisogno c'era del mondo? Schelling tenta più risposte: il finito come «caduta» (*Abfall*), come distacco libero, e nelle *Ricerche sulla libertà umana* (1809) introduce in Dio stesso un **fondamento oscuro e irrazionale**, una volontà cieca da cui deriva la possibilità del male. È una svolta importantissima: l'Assoluto non è più solo ragione, contiene un abisso.

**La filosofia positiva.** Nell'ultima fase Schelling distingue una **filosofia negativa** (che indaga l'essenza, il *che cosa*, e comprende tutta la filosofia razionale fino a Hegel) e una **filosofia positiva** (che parte dall'esistenza, dal *che* le cose siano, fatto irriducibile alla ragione). Il puro esistere è un'eccedenza che il pensiero non può dedurre — «lo scandalo del fatto che c'è qualcosa anziché nulla». Le lezioni berlinesi in cui espose queste tesi furono ascoltate da **Kierkegaard**, **Engels** e **Bakunin**: sono uno degli snodi in cui comincia la reazione antihegeliana e, in prospettiva, l'**esistenzialismo**.`
          }
        ]
      }
    ],
    personaggi: [
      {
        gruppo: "1. Romanticismo",
        voci: [
          { nome: "Volksgeist", alt: ["Herder"], desc: "Lo spirito di un popolo, che si esprime in lingua, canti, costumi e diritto. Non esiste una natura umana astratta uguale ovunque." },
          { nome: "Storicismo", alt: [], desc: "Ogni epoca ha valore in sé e va compresa dall'interno, non giudicata col metro del presente. Il Medioevo non è «età oscura»." },
          { nome: "Critica della cosa in sé", alt: ["Jacobi"], desc: "«Senza di essa non si entra nel sistema kantiano, con essa non ci si può restare». L'obiezione da cui nasce l'idealismo." },
          { nome: "Pantheismusstreit", alt: [], desc: "La polemica sullo spinozismo di Lessing: per Jacobi ogni razionalismo coerente porta al panteismo e al fatalismo. Effetto involontario: la riscoperta di Spinoza." },
          { nome: "Sehnsucht", alt: ["senso dell'infinito"], desc: "Il desiderio struggente e inappagabile che nasce dal sentire l'infinito nel finito. Tratto centrale della sensibilità romantica." },
          { nome: "Ironia romantica", alt: [], desc: "La consapevolezza che nessuna opera finita può esaurire l'infinito: l'artista si distacca dalla propria creazione." },
          { nome: "Organicismo", alt: [], desc: "La natura non è macchina ma organismo vivente, forza creatrice. Rovescia il meccanicismo seicentesco." },
          { nome: "Sentimento di dipendenza", alt: ["Schleiermacher"], desc: "La religione non è dottrina né morale ma sentimento della dipendenza assoluta e intuizione dell'infinito nel finito." },
          { nome: "Educazione estetica", alt: ["Schiller", "Spieltrieb"], desc: "La bellezza media tra sensibilità e ragione: «l'uomo è pienamente uomo solo quando gioca»." }
        ]
      },
      {
        gruppo: "2. Fichte",
        voci: [
          { nome: "Idealismo", alt: [], desc: "Eliminata la cosa in sé, il soggetto produce anche l'oggetto: un unico principio infinito, di cui il finito è momento." },
          { nome: "«Che filosofia si scelga…»", alt: [], desc: "«…dipende da che uomo si è»: tra dogmatismo (che nega la libertà) e idealismo (che la fonda) la scelta è morale, non dimostrativa." },
          { nome: "Tathandlung", alt: ["atto-azione"], desc: "Non un fatto ma un'attività che ponendosi si conosce: l'autoposizione dell'Io, principio incondizionato di ogni sapere." },
          { nome: "Primo principio", alt: ["Io = Io"], desc: "L'Io pone originariamente sé stesso: autocoscienza pura, attività infinita. Non è l'io empirico ma l'Io puro." },
          { nome: "Secondo principio", alt: ["non-Io"], desc: "L'Io oppone a sé un non-Io: l'ostacolo che si dà per potersi realizzare, prodotto inconsapevolmente e non ricevuto da fuori." },
          { nome: "Terzo principio", alt: [], desc: "Io e non-Io divisibili si limitano reciprocamente dentro l'Io assoluto: nascono soggetto e mondo finiti. Tesi-antitesi-sintesi." },
          { nome: "Immaginazione produttiva", alt: [], desc: "La facoltà con cui l'Io costruisce inconsciamente l'oggetto: rappresentare è subire ciò che l'Io stesso ha causato." },
          { nome: "Primato del pratico", alt: [], desc: "«Non agiamo perché conosciamo, ma conosciamo perché siamo destinati ad agire»: il non-Io esiste in funzione dell'agire morale." },
          { nome: "Streben", alt: ["compito infinito"], desc: "La libertà non è un fatto ma una tensione senza fine: il mondo sensibile è «la materia sensibilizzata del nostro dovere»." },
          { nome: "Missione del dotto", alt: [], desc: "L'intellettuale non si chiude nello studio: educa l'umanità ed è «sacerdote della verità»." },
          { nome: "Discorsi alla nazione tedesca", alt: ["Urvolk"], desc: "Appello alla rigenerazione morale ed educativa sotto l'occupazione napoleonica; ma la retorica del popolo originario avrà usi ben peggiori." }
        ]
      },
      {
        gruppo: "3. Schelling",
        voci: [
          { nome: "Assoluto come indifferenza", alt: [], desc: "Il principio primo è la radice comune di spirito e natura, in cui le differenze non sono ancora sorte. Hegel: «la notte in cui tutte le vacche sono nere»." },
          { nome: "Natura come spirito visibile", alt: [], desc: "«La natura è spirito visibile, lo spirito è natura invisibile»: un'intelligenza pietrificata che progressivamente si risveglia." },
          { nome: "Polarità", alt: [], desc: "Ogni fenomeno nasce dalla tensione tra forze opposte, come nel magnete: il principio esplicativo universale della filosofia della natura." },
          { nome: "Gradi o potenze", alt: [], desc: "La natura sale per gradi dall'inorganico al vivente fino all'uomo, in cui diventa cosciente di sé. Il finalismo qui è reale, non regolativo." },
          { nome: "Idealismo trascendentale", alt: [], desc: "Il cammino inverso: dall'Io alla natura, ricostruendo le epoche in cui l'intelligenza produce inconsciamente il mondo." },
          { nome: "Storia come rivelazione", alt: [], desc: "Gli uomini agiscono liberamente ma ne emerge un ordine non voluto: la storia è rivelazione progressiva dell'Assoluto." },
          { nome: "Arte organo della filosofia", alt: [], desc: "Solo nell'opera d'arte conscio e inconscio, libertà e necessità coincidono visibilmente, e il significato resta infinito." },
          { nome: "Intuizione intellettuale", alt: [], desc: "L'atto con cui il filosofo coglie l'Assoluto: immediato e indimostrabile. Hegel lo contesterà come rifiuto della fatica del concetto." },
          { nome: "Fondamento oscuro in Dio", alt: ["libertà"], desc: "Nelle Ricerche del 1809 l'Assoluto contiene una volontà cieca e irrazionale da cui deriva la possibilità del male." },
          { nome: "Filosofia positiva", alt: [], desc: "Il puro esistere è un'eccedenza che la ragione non deduce. Le lezioni berlinesi, ascoltate da Kierkegaard ed Engels, aprono la reazione antihegeliana." }
        ]
      }
    ]
  }

  ,

  /* ------------------------------------------------ UNITÀ 9 */
  hegel: {
    id: "hegel",
    titolo: "Hegel",
    autore: "Unità 9 · Il sistema",
    sottotitolo: "Dialettica, Fenomenologia, Enciclopedia",
    epoca: "1770 – 1831",
    lingua: "Tubinga, Jena, Berlino",
    tag: ["Dialettica", "Spirito", "Eticità", "Storia"],
    epigrafe: "Ciò che è razionale è reale, e ciò che è reale è razionale.",
    colore: "rosso",
    parti: [
      {
        titolo: "Capitolo 1 — I capisaldi del sistema",
        sottotitolo: "Le tesi di fondo e la dialettica",
        canti: [
          {
            n: 1, romano: "1", titolo: "La vita e gli scritti",
            chiave: "Dal seminario di Tubinga con Hölderlin e Schelling alla cattedra di Berlino, dove diventa il filosofo ufficiale della Prussia e poi il maestro di due generazioni.",
            testo: `**Georg Wilhelm Friedrich Hegel** nasce a Stoccarda nel **1770** e muore a Berlino nel **1831**, forse di colera.

Le tappe:
- **Tubinga** (1788–93): studia teologia nel seminario protestante insieme a **Hölderlin** e **Schelling**. I tre piantano insieme un «albero della libertà» per festeggiare la Rivoluzione francese;
- gli **scritti giovanili** (o «teologici»), pubblicati solo nel Novecento: *Vita di Gesù*, *La positività della religione cristiana*, *Lo spirito del cristianesimo e il suo destino*. Vi si riflette sull'opposizione tra la religione «positiva», imposta dall'esterno, e una religione «vivente»; e sulla nostalgia per l'armonia greca, dove religione, arte e politica erano un tutto unito;
- **Jena** (1801–07): prima nell'ombra di Schelling, poi in rottura con lui. Vi scrive la ***Fenomenologia dello spirito***, terminata — si racconta — la notte prima della battaglia di Jena, mentre vedeva passare Napoleone a cavallo: «ho visto l'anima del mondo cavalcare per la città»;
- **Norimberga** e **Heidelberg**: la *Scienza della logica* (1812–16) e l'***Enciclopedia delle scienze filosofiche in compendio*** (1817);
- **Berlino** (1818–31): la cattedra più prestigiosa di Germania. Pubblica i *Lineamenti di filosofia del diritto* (1821); le sue lezioni su **storia**, **arte**, **religione** e **storia della filosofia** sono raccolte postume dagli allievi. Diventa il pensatore dominante della cultura tedesca.

**Il giovane Hegel e i temi che restano.** Già negli scritti giovanili si vedono i motivi del sistema: il rifiuto delle **separazioni** (tra uomo e Dio, individuo e comunità, dovere e inclinazione, finito e infinito) e la ricerca di una **riconciliazione** che non annulli le differenze ma le comprenda. La filosofia matura sarà il tentativo grandioso di pensare la totalità come un tutto **articolato** e vivente.`
          },
          {
            n: 2, romano: "2", titolo: "Le tesi di fondo: finito e infinito, ragione e realtà",
            chiave: "Il finito non ha realtà propria: è momento dell'infinito. E poiché la realtà è razionale, la filosofia può comprenderla — ma solo a cose fatte.",
            testo: `**1. Risoluzione del finito nell'infinito.** La realtà non è un insieme di cose separate: è un **organismo unitario** — l'Assoluto, l'Idea, lo Spirito — di cui le singole cose sono **momenti**, parti che hanno senso solo nel tutto. Un dito staccato dalla mano non è più un dito; una foglia non si capisce senza l'albero. «**Il vero è l'intero**».

Attenzione: l'infinito hegeliano non è al di là del finito (sarebbe un «cattivo infinito», un altro finito accanto agli altri): è il **processo stesso** attraverso cui il finito si supera. L'infinito è immanente.

**2. Identità di ragione e realtà.** «**Ciò che è razionale è reale, e ciò che è reale è razionale**». La frase più fraintesa della filosofia. Non significa che tutto ciò che esiste sia giusto e vada accettato: Hegel distingue la **realtà** (*Wirklichkeit*, ciò che è effettivo e necessario, che ha in sé la propria ragione) dall'**esistenza** (*Existenz*, il fatto accidentale, che può essere irrazionale e destinato a perire). Significa che la realtà non è caos: ha una struttura razionale, e per questo può essere **compresa**. È il presupposto di ogni conoscenza filosofica.

**3. La funzione della filosofia.** Se la ragione è già nel reale, il compito del filosofo non è **prescrivere** come il mondo dovrebbe essere — questo è il vizio delle filosofie del «dover essere», di Kant e di Fichte — ma **comprendere** ciò che è. Da qui l'immagine celebre della prefazione ai *Lineamenti*: «**la nottola di Minerva inizia il suo volo sul far del crepuscolo**». La filosofia arriva sempre tardi, quando una forma di vita è ormai compiuta: può dipingerla «grigio su grigio», non ringiovanirla.

**Il dibattito sul «giustificazionismo».** Questa impostazione è stata accusata di **conservatorismo** — la filosofia che benedice l'esistente, e in particolare lo Stato prussiano. I difensori replicano che «reale» non significa «esistente» e che Hegel critica esplicitamente molte istituzioni del suo tempo; i critici (Popper, in *La società aperta e i suoi nemici*) vi vedono l'origine del totalitarismo. La verità storica è più sfumata: Hegel è un riformista moderato, ostile sia alla reazione feudale sia alla rivoluzione permanente, e la sua scuola si spaccherà subito tra **destra** e **sinistra hegeliana** proprio su questa ambiguità.

**4. Il vero è l'intero, e il risultato con il suo divenire.** Una verità isolata non è vera: lo diventa nel sistema. E la conclusione non vale senza il percorso che vi ha condotto: «il bocciolo scompare nello sbocciare del fiore, e il frutto dichiara il fiore un falso esserci della pianta» — ma tutti e tre sono momenti necessari della vita dell'organismo.`
          },
          {
            n: 3, romano: "3", titolo: "La dialettica",
            chiave: "Tre momenti: intelletto astratto, ragione negativa, ragione speculativa. La contraddizione non è un errore da evitare: è il motore che fa avanzare il reale.",
            testo: `La **dialettica** è insieme la legge di sviluppo della realtà e il metodo con cui il pensiero la ripercorre. Non è uno schema applicato dall'esterno: è il modo in cui le cose stesse si muovono.

**I tre momenti** (Hegel li chiama così nell'*Enciclopedia*):
- **momento astratto o intellettuale** (*tesi*): l'intelletto fissa le determinazioni nella loro separatezza e le considera stabili e opposte l'una all'altra. È indispensabile — senza distinzioni non si pensa — ma è astratto, perché isola ciò che nella realtà è connesso;
- **momento dialettico o negativo-razionale** (*antitesi*): ogni determinazione finita, se pensata a fondo, **rimanda al proprio opposto** e vi si rovescia. L'essere puro, privo di ogni determinazione, si rivela identico al nulla; il padrone dipende dal servo; la libertà astratta produce il Terrore. È il momento della **contraddizione**;
- **momento speculativo o positivo-razionale** (*sintesi*): coglie l'**unità** degli opposti, che non sono annullati ma conservati come momenti di una totalità superiore.

**L'Aufhebung.** Il termine chiave del terzo momento è ***Aufheben***, intraducibile perché in tedesco significa insieme **togliere**, **conservare** e **innalzare**. Il superamento hegeliano non distrugge: **toglie** la pretesa di autosufficienza del momento precedente, ne **conserva** il contenuto, lo **eleva** a un livello più alto. In italiano si rende con «superamento» o «tolgimento».

**Il ruolo del negativo.** È l'aspetto più originale. Per la logica tradizionale la contraddizione è il segno dell'errore: se una tesi si contraddice, va scartata. Per Hegel la contraddizione è **la vita stessa del reale**: «la contraddizione è la radice di ogni movimento e vitalità». Nulla si sviluppa se non ha in sé la propria negazione. La morte, la perdita, il conflitto, il male non sono incidenti: sono i motori del processo. «La vita dello spirito non è quella che inorridisce davanti alla morte e si preserva intatta dalla devastazione, ma quella che **sopporta la morte e in essa si mantiene**».

**Alcune precisazioni** utili per non banalizzare:
- lo schema «tesi-antitesi-sintesi» è di **Fichte**, non di Hegel, che non lo usa quasi mai: è una semplificazione didattica comoda ma un po' meccanica;
- la sintesi **non è un compromesso** a metà strada tra due posizioni: è un livello nuovo, che riorganizza il problema;
- il processo non è arbitrario: ogni negazione è **determinata**, nasce cioè dal contenuto specifico di ciò che nega (*omnis determinatio est negatio*, riprendendo Spinoza).

**Il razionale è dialettico.** La conseguenza più importante: la ragione hegeliana non è quella dell'intelletto che separa e definisce, ma una ragione che pensa il **movimento**, il divenire, l'unità di ciò che è opposto. È il motivo per cui Hegel è difficile: chiede di abbandonare l'abitudine di pensare per identità fisse.

**Le critiche.** La dialettica è stata accusata di essere uno schema che si può piegare a dimostrare qualunque cosa, e di violare il principio di non contraddizione. Ma è stata anche uno degli strumenti più fecondi del pensiero moderno: **Marx** la applicherà ai rapporti sociali, la psicoanalisi e le scienze sociali ne useranno costantemente l'idea che i fenomeni si comprendono nelle loro tensioni interne.`
          },
          {
            n: 4, romano: "4", titolo: "La partizione del sistema e la critica ai predecessori",
            chiave: "Idea in sé (Logica), fuori di sé (Natura), in sé e per sé (Spirito). E una critica serrata a illuministi, Kant, romantici, Fichte e Schelling.",
            testo: `**La struttura del sistema.** L'Assoluto è **Idea**, cioè pensiero, e si sviluppa in tre momenti che danno le tre parti dell'*Enciclopedia*:
- l'**Idea in sé**: il pensiero puro, considerato nelle sue determinazioni logiche, prima di ogni realizzazione → **LOGICA**;
- l'**Idea fuori di sé**: l'Idea che si aliena nell'esteriorità dello spazio e del tempo → **FILOSOFIA DELLA NATURA**;
- l'**Idea che ritorna in sé**: lo spirito che, attraverso la natura, giunge alla piena coscienza di sé → **FILOSOFIA DELLO SPIRITO**.

Il modello è quello di un movimento circolare: l'Assoluto esce da sé e ritorna a sé arricchito. Alla fine è ciò che era all'inizio, ma **saputo**: «il vero è il divenire di sé stesso, il circolo che presuppone come proprio fine il proprio termine e che soltanto attraverso l'attuazione e il proprio termine è effettuale».

**Le critiche ai predecessori.** Hegel definisce la propria posizione demarcandosi da tutti.

- **Contro gli illuministi**: la loro ragione è **astratta e intellettualistica**, misura tutto con criteri fissi e giudica dall'esterno, senza comprendere le epoche dall'interno. Ha il merito della critica, non quello della comprensione. Lo stesso vale per la Rivoluzione francese: la **libertà astratta**, che non si dà istituzioni, si rovescia nel **Terrore**, «furia del dileguare» in cui la libertà si riduce alla «morte più fredda e piatta».
- **Contro Kant**: tre obiezioni. Primo, non si può pretendere di esaminare la conoscenza **prima** di conoscere — è come voler imparare a nuotare prima di entrare in acqua. Secondo, la **cosa in sé** è un residuo assurdo: dichiarare un limite significa averlo già oltrepassato con il pensiero, perché per sapere che c'è un limite bisogna vedere al di là. Terzo, la morale kantiana è un **formalismo vuoto** e un «dover essere» che non si realizza mai: separa dovere e inclinazione, individuo e comunità, e lascia il mondo com'è.
- **Contro i romantici**: il ricorso al **sentimento**, alla fede, all'intuizione immediata è una scorciatoia. L'Assoluto non si «sente»: si **comprende**, e comprendere costa la «fatica del concetto». L'ironia romantica, poi, è un narcisismo che si mette al di sopra di ogni contenuto senza impegnarsi in nessuno.
- **Contro Fichte**: il suo Io resta **soggettivo** e finito, e il non-Io un ostacolo mai davvero superato: il compito è infinito, dunque non si conclude mai. È ancora una filosofia del *dover essere*.
- **Contro Schelling**: l'Assoluto come indifferenza indeterminata è vuoto, e l'**intuizione intellettuale** che dovrebbe coglierlo è un colpo di pistola. La frase famosa della prefazione alla *Fenomenologia*: quell'Assoluto è «**la notte in cui tutte le vacche sono nere**». Il vero Assoluto non è l'identità immobile: è **processo**, e va ricostruito passo per passo. La rottura tra i due amici sarà definitiva.

Il senso complessivo di queste critiche: la filosofia deve smettere di essere **giudizio esterno** sul reale (illuminismo, Kant), **esperienza privata** (romanticismo) o **postulato** mai realizzato (Fichte). Deve essere **comprensione del processo**.`
          }
        ]
      },
      {
        titolo: "Capitolo 2 — La Fenomenologia dello spirito",
        sottotitolo: "Il romanzo di formazione della coscienza",
        canti: [
          {
            n: 5, romano: "5", titolo: "Che cos'è la Fenomenologia",
            chiave: "La storia romanzata della coscienza che, attraverso errori e crisi, sale dalla certezza sensibile fino al sapere assoluto. Ogni tappa è una «figura».",
            testo: `La ***Fenomenologia dello spirito*** (1807) è l'opera più letta e più affascinante di Hegel, e anche la più difficile da collocare nel sistema.

**Il progetto.** È «la scienza dell'esperienza della coscienza»: descrive il cammino che la coscienza comune deve percorrere per giungere al **sapere assoluto**, cioè al punto di vista della filosofia. Hegel la definisce una «**via della disperazione**», perché a ogni tappa la coscienza scopre che ciò che riteneva vero non lo era, e deve rinunciarvi.

Ma è anche altro: è la storia dell'**umanità** in forma condensata. Le «figure» della coscienza sono insieme momenti logici e configurazioni storiche reali (la Grecia, lo stoicismo, il cristianesimo medievale, l'Illuminismo, la Rivoluzione francese). L'individuo che si forma ripercorre in breve il cammino della specie: per questo la si è chiamata il «romanzo di formazione» (*Bildungsroman*) della coscienza.

**Le figure.** Ogni figura è un modo in cui la coscienza si rapporta al vero. Ciascuna è **coerente al proprio interno** e per questo va presa sul serio; ma ciascuna contiene una contraddizione che la spinge oltre sé stessa. Il movimento non è arbitrario: è la coscienza stessa che, misurando il proprio sapere sul proprio oggetto, scopre che entrambi devono cambiare.

**Le sei sezioni**: **Coscienza**, **Autocoscienza**, **Ragione**, **Spirito**, **Religione**, **Sapere assoluto**. Le prime tre riguardano l'individuo, le altre lo spirito collettivo e storico.

**Coscienza** — il rapporto con l'oggetto esterno:
- la **certezza sensibile** crede di avere il sapere più ricco e immediato, il «questo, qui, ora». Ma appena prova a dirlo — «ora è notte» — scopre che le sue parole valgono per qualunque «ora», cioè esprimono l'**universale**, non il singolare. Il ricchissimo si rivela il più povero: non sa dire nulla di ciò che crede di sapere;
- la **percezione** coglie la cosa con le sue proprietà, ma non riesce a tenere insieme l'uno e i molti (la cosa è una, le proprietà sono molte);
- l'**intelletto** postula allora dietro il fenomeno un mondo di **forze e leggi**; ma scoprendo che quel mondo è una sua costruzione, la coscienza si accorge di guardare in fondo sé stessa. E passa all'**autocoscienza**.`
          },
          {
            n: 6, romano: "6", titolo: "Signoria e servitù, stoicismo, coscienza infelice",
            chiave: "L'autocoscienza esiste solo se riconosciuta da un'altra: da qui la lotta, il rapporto tra padrone e servo, e il paradosso per cui è il servo a emanciparsi.",
            testo: `**Il bisogno di riconoscimento.** L'autocoscienza non si costituisce da sola: «l'autocoscienza è in sé e per sé in quanto e per il fatto che essa è in sé e per sé **per un'altra autocoscienza**». Ho bisogno che un altro mi riconosca come soggetto libero. È una delle idee più feconde di tutta la filosofia moderna.

**La lotta per il riconoscimento.** Ma il riconoscimento richiesto è inizialmente **unilaterale**: ciascuna delle due autocoscienze vuole essere riconosciuta senza riconoscere. Da qui la **lotta a morte**, in cui ciascuno rischia la vita per affermarsi. Se uno dei due muore, però, il riconoscimento è perduto: perciò lo scontro si risolve quando uno dei due, per **paura della morte**, si sottomette e preferisce la vita alla libertà.

**Signoria e servitù.** Nasce così la figura di **padrone** e **servo**:
- il **padrone** gode delle cose senza lavorarle: il servo le prepara per lui. Sembra il vincitore;
- il **servo** lavora, cioè trasforma la natura per il padrone.

Ma la dialettica rovescia la situazione:
- il padrone dipende dal servo per la propria sopravvivenza e per il proprio riconoscimento — che però è privo di valore, perché gli viene da qualcuno che egli stesso non riconosce come libero. Il padrone si scopre **dipendente**;
- il servo, invece, attraverso due esperienze si emancipa: la **paura della morte**, che ha scosso ogni sua certezza e gli ha rivelato l'inconsistenza di ogni attaccamento; e soprattutto il **lavoro**, che è «desiderio trattenuto», e che imprimendo la propria forma sulla cosa gli fa vedere sé stesso oggettivato nel mondo. «Il servo, lavorando, **diventa consapevole di ciò che veramente è**».

È una delle pagine più influenti mai scritte: **Marx** vi troverà l'idea che il lavoro forma l'uomo e che la classe oppressa è il soggetto dell'emancipazione; l'esistenzialismo francese (Sartre, Kojève), la psicoanalisi (Lacan) e i movimenti di liberazione del Novecento vi si riferiranno costantemente.

**Stoicismo, scetticismo, coscienza infelice.** Il servo, però, non è ancora libero nella realtà: conquista una libertà **interiore**, e questo genera tre figure:
- lo **stoicismo**: sono libero nel pensiero, qualunque sia la mia condizione — «sul trono o in catene». Ma è una libertà astratta, indifferente al contenuto;
- lo **scetticismo**: nega ogni realtà esterna e proclama la totale indipendenza del pensiero. Ma cade in una contraddizione pratica: continua a vivere, mangiare, obbedire alle abitudini che dichiara insensate. È una «confusione loquace» che si smentisce ogni giorno;
- la **coscienza infelice**: la consapevolezza della propria contraddizione. È la coscienza divisa tra un aspetto immutabile ed essenziale (Dio, l'assoluto) posto **fuori di sé**, e un aspetto mutevole e inessenziale che è sé stessa. Hegel la identifica storicamente con la **religiosità ebraico-cristiana e medievale**, e ne descrive tre momenti: il **devoto** che cerca un Dio lontano e irraggiungibile; il **fare e desiderare** che si sente indegno; l'**ascetismo** e la mortificazione, fino alla rinuncia della propria volontà nelle mani di un mediatore.

La coscienza infelice si supera quando si comprende che l'immutabile non è **altro** dalla coscienza: è la coscienza stessa nella sua universalità. Allora si passa alla **Ragione**, la certezza di essere ogni realtà — e da lì allo **Spirito**, cioè alla vita etica di un popolo, dove l'individuo non è più isolato ma parte di una comunità concreta.`
          }
        ]
      },
      {
        titolo: "Capitolo 3 — L'Enciclopedia",
        sottotitolo: "Logica, natura, spirito",
        canti: [
          {
            n: 7, romano: "7", titolo: "La Logica e la Filosofia della natura",
            chiave: "La logica hegeliana non studia le forme del pensiero ma le strutture stesse dell'essere: essere, essenza, concetto. La natura è l'Idea che si aliena.",
            testo: `**La Logica.** Non è la logica formale di Aristotele, che studia le regole del ragionamento indipendentemente dai contenuti. È **ontologia**: poiché il reale è razionale, le determinazioni del pensiero sono anche le determinazioni dell'essere. Hegel la definisce «l'esposizione di Dio quale egli è nella sua eterna essenza prima della creazione della natura e di uno spirito finito».

Si articola in tre parti:
- la **logica dell'essere**: le categorie dell'immediatezza. Si apre con il celebre inizio: l'**essere** puro, del tutto indeterminato, non si distingue in nulla dal **nulla**; la loro verità è il **divenire**, cioè il passaggio dell'uno nell'altro. È il modello di ogni movimento dialettico;
- la **logica dell'essenza**: le categorie della riflessione e della mediazione (identità e differenza, fenomeno ed essenza, causa ed effetto, necessità e caso, possibilità e realtà). È la parte più ricca, e quella in cui Hegel critica le opposizioni fisse dell'intelletto;
- la **logica del concetto**: dove pensiero e realtà si riconoscono identici. Comprende il concetto soggettivo (concetto, giudizio, sillogismo), l'oggetto (meccanismo, chimismo, teleologia) e infine l'**Idea**, unità di concetto e realtà, che culmina nell'**Idea assoluta**.

**La Filosofia della natura.** L'Idea, giunta al suo compimento logico, «si risolve liberamente» a **estraniarsi**, a porsi come altro da sé: nasce la **natura**, l'Idea nella forma dell'**esteriorità**, dello spazio e del tempo.

Il rapporto di Hegel con la natura è il punto debole del sistema, e lui non lo nasconde: la natura è l'Idea «nella forma dell'**alienazione**», il regno dell'esteriorità, della ripetizione e della **contingenza**, dove il concetto fatica a realizzarsi pienamente. Nella natura c'è dell'irrazionale, e questo è per Hegel «l'**impotenza della natura**»: essa non riesce a mantenere puro il concetto, e produce mostri, casi, eccezioni.

Si articola in tre livelli: **meccanica** (spazio, tempo, materia, moto), **fisica** (elementi, calore, magnetismo, chimismo) e **organica** (geologia, vegetale, animale). Al vertice l'organismo animale, che nella morte del singolo rivela l'inadeguatezza della natura a esprimere l'universale, e apre il passaggio allo **Spirito**.

Va detto che Hegel **non pensa a un'evoluzione temporale**: i gradi della natura sono una gerarchia concettuale, non una discendenza storica. Questa è la parte del sistema più invecchiata: la geologia, la biologia e soprattutto Darwin l'hanno resa insostenibile nei contenuti, benché l'idea di livelli di organizzazione irriducibili gli uni agli altri sia tutt'altro che priva di interesse.`
          },
          {
            n: 8, romano: "8", titolo: "Lo spirito soggettivo e oggettivo: diritto, moralità, eticità",
            chiave: "Diritto astratto, moralità interiore, e infine eticità: famiglia, società civile, Stato. Solo nelle istituzioni concrete la libertà diventa reale.",
            testo: `Lo **Spirito** è l'Idea che, attraverso la natura, ritorna a sé e si sa. Si articola in soggettivo, oggettivo e assoluto.

**Lo spirito soggettivo** è lo spirito individuale, studiato in tre momenti: **antropologia** (l'anima come spirito ancora immerso nella corporeità), **fenomenologia** (la coscienza nel rapporto con l'oggetto) e **psicologia** (le facoltà dello spirito che si sa: intelligenza, volontà).

**Lo spirito oggettivo** è lo spirito che si realizza in **istituzioni** e rapporti sociali. La libertà, per Hegel, non è un sentimento interiore: esiste solo se **incarnata** in leggi, istituzioni, costumi.

- **Il diritto astratto** è la libertà nella sfera esterna: **proprietà**, **contratto**, e la reazione all'ingiustizia con la **pena** — che Hegel intende non come deterrente né come vendetta ma come **negazione della negazione**, ristabilimento del diritto violato; per questo il criminale ha «diritto» alla pena, che lo riconosce come essere razionale. È il momento astratto: mi limito a non violare la sfera altrui.
- **La moralità** è la libertà nell'interiorità: il **proposito**, l'**intenzione**, il **bene**, la **coscienza morale**. È il livello kantiano, e Hegel ne riconosce il valore — è una conquista storica che l'individuo sia giudicato per l'intenzione. Ma ne mostra il limite: il bene resta un **dover essere** astratto, e la coscienza che decide da sola ciò che è bene può scivolare nell'arbitrio e nell'ipocrisia («l'anima bella» che, per non sporcarsi, non agisce mai).
- **L'eticità** (*Sittlichkeit*) è la sintesi: il bene realizzato nei **costumi e nelle istituzioni** di un popolo. Tre momenti:
  - la **famiglia**, unità naturale fondata sul sentimento: l'individuo vi è membro, non persona autonoma. Si dissolve quando i figli diventano adulti;
  - la **società civile** (*bürgerliche Gesellschaft*), il «sistema dei bisogni»: la sfera dell'economia, del lavoro, degli interessi privati, dove ciascuno persegue il proprio scopo e, così facendo, dipende da tutti. Hegel la analizza con strumenti presi dagli economisti inglesi (Smith, Ricardo, Say) e vi individua una contraddizione che colpì Marx: la produzione di ricchezza genera anche l'accumulo di miseria e la formazione di una **plebe** priva di mezzi e di dignità, problema che la società civile da sola non risolve. Vi appartengono anche l'**amministrazione della giustizia**, la **polizia** e le **corporazioni**;
  - lo **Stato**, in cui l'individuo ritrova l'unità della famiglia con la consapevolezza acquisita nella società civile. È «la realtà dell'idea etica», «l'ingresso di Dio nel mondo».

**Lo Stato hegeliano.** È il punto più contestato. Hegel afferma che lo Stato non nasce da un contratto tra individui (contro Hobbes, Locke, Rousseau): non è uno strumento al servizio dei privati ma la **sostanza etica** in cui soltanto l'individuo è realmente libero, perché ne condivide i valori e le leggi. Vi si distinguono tre poteri — **legislativo**, **governativo** e **principesco** — non separati come in Montesquieu ma articolati in unità organica.

Le letture divergono radicalmente: c'è chi vi ha visto l'anticipazione dello Stato totalitario (Popper), e chi ha osservato che il suo Stato prevede costituzione, divisione dei poteri, libertà di stampa, indipendenza dei giudici, tutela della proprietà e della sfera privata — una monarchia costituzionale moderna, non un Leviatano. Resta certamente estranea a Hegel l'idea liberale che lo Stato sia un male necessario.

**I rapporti tra Stati.** Non esistendo un potere superiore, i conflitti si risolvono con la **guerra**, che Hegel non esalta ma considera un momento necessario ed «eticamente» significativo, perché mostra la caducità dei beni finiti e rinsalda l'unità del popolo. È la pagina che ha suscitato le reazioni più dure, e la distanza massima dal progetto kantiano di pace perpetua.`
          },
          {
            n: 9, romano: "9", titolo: "La filosofia della storia e lo spirito assoluto",
            chiave: "La storia è il progresso nella coscienza della libertà, guidata dall'astuzia della ragione. E lo spirito si sa pienamente nell'arte, nella religione e nella filosofia.",
            testo: `**La storia del mondo.** Al di sopra dei singoli Stati c'è la **storia universale**, «il tribunale del mondo», in cui lo **spirito del mondo** (*Weltgeist*) realizza il proprio fine.

La definizione classica: la storia è il **progresso nella coscienza della libertà**. Le sue tappe:
- il mondo **orientale**: uno solo è libero (il despota), e la sua non è vera libertà;
- il mondo **greco-romano**: alcuni sono liberi (i cittadini, non gli schiavi);
- il mondo **germanico-cristiano**: **tutti** sono liberi, perché il cristianesimo ha affermato il valore infinito di ogni persona e la modernità lo ha tradotto in istituzioni.

**L'astuzia della ragione** (*List der Vernunft*). Come si realizza questo fine? Non attraverso le buone intenzioni: attraverso le **passioni** degli individui. «Nulla di grande si è compiuto nel mondo senza passione». La ragione «lascia agire le passioni per sé», e gli uomini, perseguendo i propri scopi egoistici, realizzano senza saperlo un disegno più grande. Gli **individui cosmico-storici** — Alessandro, Cesare, Napoleone — sono coloro nei quali il fine particolare coincide con il bisogno del tempo; e per questo travolgono ciò che incontrano e, di solito, finiscono male: «essi non sono mai stati felici», perché erano strumenti.

Ne discende una conseguenza dura, che ha fatto discutere: la storia non è il luogo della felicità («le pagine felici della storia sono pagine bianche»), e il giudizio morale sui grandi individui non coincide con il loro significato storico. Il progresso avviene attraverso il conflitto, la sofferenza e la rovina di intere generazioni: il «**macello**» in cui, dice Hegel senza attenuanti, sono state sacrificate «la felicità dei popoli, la saggezza degli Stati e la virtù degli individui».

**Lo Spirito assoluto** è il momento finale: lo spirito che sa pienamente sé stesso. Ha lo **stesso contenuto** — l'Assoluto — in tre **forme** diverse:
- l'**arte**: l'Assoluto nella forma dell'**intuizione sensibile**. Hegel ne distingue tre stadi: **simbolica** (l'oriente: il contenuto eccede la forma, che resta enigmatica — la sfinge), **classica** (la Grecia: perfetto equilibrio tra idea e forma sensibile — la statua), **romantica** (l'età cristiana: il contenuto spirituale eccede ogni forma sensibile — pittura, musica, poesia). Da qui la tesi celebre della «**morte dell'arte**»: non che l'arte finisca, ma che essa non sia più la forma più alta in cui un'epoca esprime la propria verità. «L'arte è e rimane per noi, riguardo alla sua suprema destinazione, qualcosa di passato»;
- la **religione**: l'Assoluto nella forma della **rappresentazione** (*Vorstellung*), cioè dell'immagine, del racconto, del simbolo. Il cristianesimo è per Hegel la «religione assoluta», perché nel dogma trinitario e nell'incarnazione **rappresenta** la verità speculativa (l'Assoluto che esce da sé e ritorna a sé). Ma la rappresenta, non la concettualizza: pensa Dio come un essere separato, e ricorre a immagini;
- la **filosofia**: l'Assoluto nella forma del **concetto** (*Begriff*). È la forma più alta, perché comprende ciò che l'arte mostra e la religione racconta.

**La storia della filosofia.** Coerentemente, la storia della filosofia non è una galleria di opinioni: è lo **sviluppo necessario** dell'Idea, in cui ogni sistema è vero nel proprio momento e viene *superato* (nel senso dell'*Aufhebung*) dal successivo. La filosofia è «il proprio tempo appreso col pensiero».

**L'eredità.** La scuola hegeliana si divide subito: la **destra** conserva il sistema in senso religioso e politico; la **sinistra** ne trattiene il metodo dialettico e ne rovescia i contenuti — **Feuerbach** (la religione come proiezione umana), **Marx** (la dialettica applicata ai rapporti materiali di produzione). Contro Hegel reagiscono **Schopenhauer** (che gli oppone una volontà cieca e irrazionale) e **Kierkegaard** (che gli oppone il singolo, la scelta, l'angoscia: «il sistema non ha posto per l'esistenza»). E tuttavia quasi tutto il pensiero successivo — marxismo, esistenzialismo, ermeneutica, teoria critica — è nato dialogando con lui.`
          }
        ]
      }
    ],
    personaggi: [
      {
        gruppo: "1. I capisaldi",
        voci: [
          { nome: "Il vero è l'intero", alt: [], desc: "Le singole cose sono momenti di una totalità organica: una verità isolata non è ancora vera. Il finito si risolve nell'infinito." },
          { nome: "Cattivo infinito", alt: [], desc: "L'infinito posto al di là del finito è solo un altro finito. Il vero infinito è immanente: il processo stesso in cui il finito si supera." },
          { nome: "Razionale e reale", alt: [], desc: "La realtà ha struttura razionale e per questo è comprensibile. «Reale» (Wirklichkeit) non significa ogni esistenza accidentale." },
          { nome: "Nottola di Minerva", alt: [], desc: "La filosofia arriva sul far del crepuscolo: comprende una forma di vita quando è compiuta, non prescrive come dovrebbe essere." },
          { nome: "Dialettica", alt: ["tre momenti"], desc: "Astratto-intellettuale, negativo-razionale, positivo-speculativo. Lo schema tesi-antitesi-sintesi è di Fichte, non di Hegel." },
          { nome: "Aufhebung", alt: ["superamento"], desc: "Togliere, conservare e innalzare insieme: il momento superato non è distrutto ma mantenuto a un livello più alto." },
          { nome: "Potenza del negativo", alt: [], desc: "«La contraddizione è la radice di ogni movimento»: lo spirito è quello che sopporta la morte e in essa si mantiene." },
          { nome: "«Notte in cui tutte le vacche sono nere»", alt: [], desc: "La stroncatura dell'Assoluto indifferenziato di Schelling: il vero Assoluto è processo, e va ricostruito passo per passo." },
          { nome: "Fatica del concetto", alt: [], desc: "Contro i romantici: l'Assoluto non si sente né si intuisce, si comprende attraverso il lavoro paziente del pensiero." }
        ]
      },
      {
        gruppo: "2. Fenomenologia",
        voci: [
          { nome: "Figura", alt: ["Gestalt"], desc: "Un modo in cui la coscienza si rapporta al vero: coerente al proprio interno, ma con una contraddizione che la spinge oltre." },
          { nome: "Certezza sensibile", alt: [], desc: "Crede di avere il sapere più ricco col «questo, qui, ora»; ma appena parla dice l'universale. Il più ricco si rivela il più povero." },
          { nome: "Riconoscimento", alt: [], desc: "L'autocoscienza è tale solo per un'altra autocoscienza. Da qui la lotta a morte e poi il rapporto asimmetrico." },
          { nome: "Signoria e servitù", alt: ["padrone e servo"], desc: "Il padrone dipende dal servo e riceve un riconoscimento senza valore; il servo, con la paura della morte e con il lavoro, si emancipa." },
          { nome: "Lavoro come desiderio trattenuto", alt: [], desc: "Formando la cosa il servo vede sé stesso oggettivato nel mondo e diventa consapevole di ciò che è. Idea decisiva per Marx." },
          { nome: "Stoicismo e scetticismo", alt: [], desc: "Libertà solo nel pensiero, indifferente al contenuto; poi negazione di tutto, che però si smentisce ogni giorno nella pratica." },
          { nome: "Coscienza infelice", alt: [], desc: "La coscienza divisa che pone l'immutabile fuori di sé: devozione verso un Dio lontano, senso di indegnità, ascetismo." }
        ]
      },
      {
        gruppo: "3. Sistema e spirito oggettivo",
        voci: [
          { nome: "Idea in sé / fuori di sé / in sé e per sé", alt: [], desc: "Logica, Filosofia della natura, Filosofia dello spirito: l'Assoluto esce da sé e vi ritorna arricchito." },
          { nome: "Essere, nulla, divenire", alt: [], desc: "L'essere puro indeterminato è identico al nulla; la loro verità è il divenire. Il modello di ogni passaggio dialettico." },
          { nome: "Impotenza della natura", alt: [], desc: "La natura è l'Idea alienata nell'esteriorità: vi resta un margine di contingenza che il concetto non riesce a dominare." },
          { nome: "Diritto astratto", alt: ["proprietà", "pena"], desc: "La libertà nella sfera esterna. La pena non è vendetta né deterrente ma negazione della negazione: il criminale ha diritto a essa." },
          { nome: "Moralità", alt: [], desc: "La libertà nell'interiorità: intenzione, bene, coscienza. Conquista reale, ma il bene resta un dover essere astratto e può scivolare nell'arbitrio." },
          { nome: "Anima bella", alt: [], desc: "La coscienza che, per non sporcarsi nell'azione, non agisce mai: il vizio della moralità puramente interiore." },
          { nome: "Eticità", alt: ["Sittlichkeit"], desc: "Il bene realizzato nei costumi e nelle istituzioni: famiglia, società civile, Stato. Solo qui la libertà diventa reale." },
          { nome: "Società civile", alt: ["sistema dei bisogni"], desc: "La sfera dell'economia e degli interessi privati, che produce insieme ricchezza e plebe: la contraddizione che colpirà Marx." },
          { nome: "Stato etico", alt: [], desc: "Non nasce da un contratto né serve i privati: è la sostanza etica in cui l'individuo è realmente libero. La lettura oscilla tra monarchia costituzionale e totalitarismo." }
        ]
      },
      {
        gruppo: "4. Storia e spirito assoluto",
        voci: [
          { nome: "Progresso nella coscienza della libertà", alt: [], desc: "Uno è libero (oriente), alcuni sono liberi (mondo classico), tutti sono liberi (mondo germanico-cristiano)." },
          { nome: "Astuzia della ragione", alt: ["List der Vernunft"], desc: "La ragione si serve delle passioni: gli uomini perseguono scopi egoistici e realizzano senza saperlo un disegno più grande." },
          { nome: "Individui cosmico-storici", alt: [], desc: "Alessandro, Cesare, Napoleone: il loro fine coincide con il bisogno del tempo. Strumenti, e per questo mai felici." },
          { nome: "Storia come tribunale del mondo", alt: [], desc: "La storia giudica popoli e Stati; ma non è il luogo della felicità: «le pagine felici della storia sono pagine bianche»." },
          { nome: "Arte simbolica, classica, romantica", alt: [], desc: "La forma eccede il contenuto, lo equilibra, ne è ecceduta: sfinge, statua greca, pittura e musica cristiane." },
          { nome: "Morte dell'arte", alt: [], desc: "Non la fine dell'arte, ma la fine del suo primato: non è più la forma più alta in cui un'epoca dice la propria verità." },
          { nome: "Religione come rappresentazione", alt: [], desc: "Il cristianesimo dice la stessa verità della filosofia, ma per immagini e racconti anziché per concetti." },
          { nome: "Filosofia come concetto", alt: [], desc: "La forma più alta dello spirito assoluto: «il proprio tempo appreso col pensiero»." },
          { nome: "Destra e sinistra hegeliana", alt: [], desc: "La prima conserva il sistema in senso religioso e conservatore; la seconda ne usa il metodo rovesciandone i contenuti: Feuerbach, Marx." }
        ]
      }
    ]
  }

});

/* Aggiunge le unità del volume 2B all'ordine di visualizzazione */
FILOSOFIA_ORDINE.push("illuminismo", "kant", "romanticismo-idealismo", "hegel");
