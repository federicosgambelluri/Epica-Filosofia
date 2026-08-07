/* ============================================================
   DATI — EPICA
   Per aggiungere/modificare contenuti basta editare questo file.
   Struttura:
     id, titolo, autore, sottotitolo, epoca, tag[], epigrafe
     parti: [{ titolo, sottotitolo, canti: [{ n, romano, titolo, testo }] }]
     personaggi: [{ gruppo, nota, voci: [{ nome, alt[], desc }] }]
   ============================================================ */

const EPICA = {

  /* ---------------------------------------------------------- ILIADE */
  iliade: {
    id: "iliade",
    titolo: "Iliade",
    autore: "Omero",
    sottotitolo: "L'ira di Achille e la caduta di Ettore",
    epoca: "VIII sec. a.C. ca.",
    lingua: "Greco antico (esametri)",
    tag: ["24 canti", "Guerra di Troia", "Poema epico greco"],
    epigrafe: "Cantami, o Diva, del Pelìde Achille l'ira funesta.",
    colore: "rosso",
    parti: [
      {
        titolo: "Prima Parte — L'ira di Achille e la ritirata dal campo",
        sottotitolo: "Canti I – VIII",
        canti: [
          { n: 1, romano: "I", titolo: "La peste e l'ira", testo: "L'opera si apre con l'invocazione alla Musa. Apollo scatena una terribile pestilenza nel campo greco perché Agamennone ha rapito Criseide, figlia del sacerdote di Apollo, Crise, rifiutando di restituirla. L'indovino Calcante svela la causa dell'ira del dio e Achille pretende che Agamennone restituisca la ragazza. Agamennone cede, ma per rivalsa pretende in cambio Briseide, la schiava di Achille. Furioso per l'offesa al suo onore (timè), Achille decide di ritirarsi dalla guerra insieme ai suoi Mirmidoni e chiede alla madre Teti di intercedere presso Zeus affinché i Troiani abbiano il sopravvento, dimostrando a tutti quanto Achille fosse indispensabile." },
          { n: 2, romano: "II", titolo: "Il sogno e il catalogo delle navi", testo: "Zeus invia ad Agamennone un sogno ingannevole che gli promette la vittoria immediata su Troia. Per mettere alla prova la fedeltà del suo esercito, Agamennone finge di voler abbandonare l'impresa e rientrare in Grecia: i soldati corrono alle navi e solo l'intervento di Odisseo, incitato da Atena, frena la fuga ed esorta i Greci a combattere, zittendo con la forza il demagogo Tersite. Il canto si chiude con il celebre «Catalogo delle navi» (l'elenco dettagliato delle forze greche) e con la rassegna delle forze troiane e dei loro alleati." },
          { n: 3, romano: "III", titolo: "Il duello di Paride e Menelao", testo: "I due eserciti si schierano nella pianura. Per evitare ulteriori spargimenti di sangue, Paride propone un duello singolare con Menelao: il vincitore otterrà Elena e la fine della guerra. Elena osserva la battaglia dalle mura di Troia insieme al re Priamo e gli descrive i principali eroi greci (scena della Teichoscopia). Nel duello Menelao ha la meglio su Paride, ma prima di sferrare il colpo mortale, la dea Afrodite interviene avvolgendo Paride in una nebbia magica e trasportandolo in salvo nella sua camera da letto a Troia." },
          { n: 4, romano: "IV", titolo: "La tregua infranta", testo: "Sull'Olimpo, Zeus propone la pace, ma Era e Atena pretendono la distruzione di Troia. Atena istiga il troiano Pandaro a scagliare una freccia contro Menelao, ferendolo lievemente. La tregua si rompe violando i patti giurati. Agamennone passa in rassegna le sue truppe, incoraggiando i condottieri (tra cui Diomede e Nestore), e la battaglia generale riprende con inusitata violenza." },
          { n: 5, romano: "V", titolo: "L'aristia di Diomede", testo: "Protagonista assoluto del canto è l'eroe greco Diomede, protetto da Atena che gli dona forza sovrumana e la capacità di distinguere gli dei dagli uomini (episodio dell'Aristia di Diomede). Diomede compie una strage, uccide Pandaro e ferisce gravemente Enea. Quando la dea Afrodite interviene per salvare Enea (suo figlio), Diomede la ferisce alla mano mettendola in fuga. Successivamente, sempre con l'aiuto di Atena, Diomede riesce persino a ferire all'addome il dio della guerra Ares, costringendolo a fuggire sull'Olimpo." },
          { n: 6, romano: "VI", titolo: "Ettore e Andromaca", testo: "Mentre la battaglia infuria, Diomede si scontra con il troiano Glauco, ma scoprendo un antico legame di ospitalità tra i rispettivi avi, i due si scambiano le armi invece di combattere. Intanto Ettore rientra in città per chiedere alla madre Ecuba e alle donne troiane di offrire sacrifici ad Atena. Ettore rimprovera Paride e lo spinge a tornare in battaglia, poi incontra per l'ultima volta la moglie Andromaca e il piccolo figlio Astianatte presso le porte Scee, in una delle scene più toccanti dell'opera sulla consapevolezza del destino." },
          { n: 7, romano: "VII", titolo: "Ettore contro Aiace", testo: "Ettore e Paride ritornano in campo. Ettore sfida a duello il più forte dei Greci: a sorte viene scelto Aiace Telamonio. I due eroi combattono valorosamente fino al tramonto senza che nessuno prevalga e, in segno di reciproco rispetto, si scambiano doni (Ettore dona la spada, Aiace la cintura). Viene concordata una tregua per seppellire i morti di entrambi gli schieramenti, durante la quale i Greci costruiscono un muro e un fossato a protezione del loro accampamento navale." },
          { n: 8, romano: "VIII", titolo: "I Greci alle corde", testo: "Zeus proibisce a tutti gli dei di intervenire nella battaglia e scaglia fulmini a favore dei Troiani. Guidati da Ettore, i Troiani respingono duramente i Greci spingendoli fino al muro di protezione delle navi. Giunta la notte, Ettore ordina all'esercito troiano di non rientrare in città ma di accamparsi direttamente nella pianura, accendendo mille fuochi per impedire una fuga notturna dei Greci." }
        ]
      },
      {
        titolo: "Seconda Parte — L'ambasceria e la svolta della guerra",
        sottotitolo: "Canti IX – XVI",
        canti: [
          { n: 9, romano: "IX", titolo: "L'ambasceria ad Achille", testo: "Nel campo greco regna lo sconforto. Agamennone, disperato, riconosce l'errore commesso e invia un'ambasceria composta da Odisseo, Aiace Telamonio e il vecchio Fenice nella tenda di Achille per offrirgli smisurati doni, la restituzione di Briseide e la mano di una delle sue figlie se rientrerà in combattimento. Achille, irremovibile nel suo sdegno, rifiuta categoricamente l'offerta e minaccia di salpare il giorno seguente per tornare in patria (Ftia)." },
          { n: 10, romano: "X", titolo: "La Dolonìa", testo: "Durante la notte, Agamennone e Menelao inviano Diomede e Odisseo in una missione di spionaggio nel campo troiano. Contemporaneamente, Ettore invia la spia troiana Dolone a perlustrare il campo greco. Diomede e Odisseo catturano Dolone, si fanno rivelare le posizioni dell'esercito avversario e poi lo uccidono. Successivamente penetrano nel campo del nuovo alleato troiano, il re dei Traci Reso, lo uccidono insieme a dodici dei suoi guerrieri e gli rubano i famosi cavalli candidi." },
          { n: 11, romano: "XI", titolo: "I capi greci feriti", testo: "All'alba Zeus invia la Discordia e la battaglia riprende feroce. Agamennone compie grandi imprese ma rimane ferito e deve ritirarsi dal campo; la stessa sorte tocca a Diomede, Odisseo e Macaone (il medico dei Greci). Vedendo i migliori condottieri greci fuori combattimento, Achille manda il caro amico Patroclo alla tenda di Nestore per chiedere notizie. Nestore esorta Patroclo a convincere Achille a combattere o, quanto meno, a lasciar indossare a Patroclo la sua leggendaria armatura per spaventare i Troiani." },
          { n: 12, romano: "XII", titolo: "L'assalto al muro", testo: "I Troiani guidati da Ettore, Polidamante e Sarpedonte sferrano un assalto frontale contro il muro difensivo greco. Nonostante un presagio nefasto (un'aquila che fa cadere un serpente ancora vivo), Ettore rifiuta il consiglio di Polidamante di ritirarsi, infrange una delle porte del muro con un enorme masso ed entra nell'accampamento navale greco insieme alle sue truppe." },
          { n: 13, romano: "XIII", titolo: "Battaglia presso le navi", testo: "Mentre Zeus distoglie momentaneamente lo sguardo dalla Troade, il dio del mare Poseidone interviene segretamente incitando i Greci (in particolare i due Aiaci) a difendere le navi. La battaglia infuria furibonda attorno alle imbarcazioni, con grandi atti di valore da entrambe le parti, ma i Greci riescono temporaneamente a contenere l'avanzata troiana." },
          { n: 14, romano: "XIV", titolo: "L'inganno di Era", testo: "Era progetta un inganno per sviare Zeus: si adorna con la cintura della seduzione di Afrodite e chiede aiuto al dio Sonno (Hypnos). Seduce Zeus sul monte Ida e lo addormenta profondamente. Liberi dalla sorveglianza del re degli dei, Poseidone prende apertamente il comando dei Greci, che contrattaccano con vigore: Aiace ferisce gravemente Ettore con un sasso, costringendolo a farsi portare via svenuto dal campo." },
          { n: 15, romano: "XV", titolo: "Il risveglio di Zeus", testo: "Zeus si risveglia, scopre l'inganno di Era e riprende il controllo. Ordina a Poseidone di abbandonare il campo di battaglia e invia Apollo a guarire e rianimare Ettore. Forte dell'aiuto divino, Ettore guida un travolgente contrattacco troiano che travolge le difese greche. I Troiani raggiungono le prime navi; Ettore si scaglia con una torcia accesa contro la nave di Protesilao per appiccarvi il fuoco, mentre Aiace la difende da solo con una lunghissima lancia." },
          { n: 16, romano: "XVI", titolo: "La Patroclèa", testo: "Vedendo la prima nave greca in fiamme, Patroclo supplica Achille di intervenire. Achille rifiuta di combattere di persona ma acconsente a prestare a Patroclo la propria armatura sacra e il comando dei Mirmidoni, stringendo un patto: spingere i Troiani lontano dalle navi ma non inseguirli fin sotto le mura di Troia. La comparsa dell'armatura di Achille spaventa i Troiani che fuggono in rotta. Patroclo uccide il forte Sarpedonte (figlio di Zeus), ma infrange il divieto di Achille e insegue i fuggitivi fin sotto le mura della città. Apollo interviene, percuote Patroclo alle spalle facendogli cadere l'elmo e le armi; Euforbo lo ferisce e infine Ettore lo trapassa a morte, spogliandolo dell'armatura di Achille. In punto di morte, Patroclo predice ad Ettore l'imminente fine per mano di Achille." }
        ]
      },
      {
        titolo: "Terza Parte — La vendetta di Achille e la caduta di Ettore",
        sottotitolo: "Canti XVII – XXIV",
        canti: [
          { n: 17, romano: "XVII", titolo: "La lotta per il corpo di Patroclo", testo: "Si accende una terribile battaglia attorno al corpo svestito di Patroclo. Menelao e Aiace Telamonio lottano disperatamente per impedire che i Troiani facciano scempio del cadavere o lo diano in pasto ai cani. Ettore indossa l'armatura sottratta a Patroclo. Alla fine, Menelao e Merione riescono a portare via il corpo di Patroclo verso il campo greco, scortati dai due Aiaci che coprono la ritirata dagli assalti di Ettore ed Enea." },
          { n: 18, romano: "XVIII", titolo: "Lo scudo di Achille", testo: "Antiloco informa Achille della morte di Patroclo. L'eroe cade in un dolore disperato e lancia un urlo di rabbia terribile che fa fuggire i Troiani. La madre Teti risale dal mare per consolarlo; Achille rinuncia ufficialmente alla sua ira contro Agamennone e vota la sua vita alla vendetta contro Ettore, pur sapendo che la propria morte seguirà a breve quella del principe troiano. Poiché la sua armatura è nelle mani di Ettore, Teti si reca da Efesto (dio del fuoco e dei fabbri), il quale forgia per Achille una nuova e meravigliosa armatura e uno scudo divino con incise le rappresentazioni dell'intero cosmo e della vita umana." },
          { n: 19, romano: "XIX", titolo: "La riconciliazione", testo: "Al mattino Teti consegna la nuova armatura ad Achille. Viene convocata un'assemblea dei Greci in cui Achille e Agamennone si riconciliano ufficialmente: Agamennone attribuisce la colpa della sua arroganza alla dea dell'inganno, Ate, e restituisce Briseide insieme ai doni promessi. Achille, bramoso solo di vendetta, rifiuta persino di mangiare e si veste per la battaglia. Salito sul carro, il suo cavallo divino Xanto rompe il silenzio e gli predice la morte imminente, ma Achille rifiuta il destino e si slancia in campo." },
          { n: 20, romano: "XX", titolo: "La battaglia degli dei", testo: "Zeus autorizza finalmente tutti gli dei a scendere in campo e schierarsi liberamente con le due fazioni. Achille fa strage di guerrieri troiani. Si scontra prima con Enea, che viene salvato dall'intervento di Poseidone (destinato dai fati a sopravvivere per governare i Troiani superstiti). Poi Achille cerca Ettore, ma Apollo interviene sottraendo il principe troiano alla furia dell'eroe greco avvolgendolo nella nebbia." },
          { n: 21, romano: "XXI", titolo: "La lotta contro il fiume", testo: "Achille spinge una gran parte dell'esercito troiano nel fiume Scamandro (Xanto) e compie un massacro spietato, uccidendo tra gli altri Licaone (figlio di Priamo) e riempiendo il letto del fiume di cadaveri. Risentito per la profanazione delle sue acque, il dio-fiume Scamandro prende forma umana e tenta di annegare Achille con i suoi vortici. L'eroe rischia di soccombere ma viene salvato dall'intervento del dio Efesto, che prosciuga le acque con fiamme spaventose. Apollo assume poi l'aspetto del troiano Agenore per farsi inseguire da Achille lontano dalle porte della città, consentendo al resto dell'esercito troiano di mettersi in salvo dietro le mura." },
          { n: 22, romano: "XXII", titolo: "La morte di Ettore", testo: "Ettore rimane da solo fuori dalle mura di Troia di fronte alle porte Scee. Nonostante i disperati appelli dei genitori Priamo ed Ecuba che lo supplicano di rientrare, il suo senso dell'onore lo trattiene dall'evitare lo scontro. Alla vista di Achille pieno di furia divina, Ettore ha un momento di terrore e fugge: i due compiono tre giri completi attorno alle mura di Troia. Zeus pesa le sorti dei due eroi sulla bilancia d'oro e la sorte di Ettore precipita verso l'Ade; Apollo lo abbandona. Atena prende l'aspetto del fratello Deifobo per convincere Ettore a fermarsi e combattere. Nel duello finale, Achille trapassa Ettore alla gola nell'unico punto scoperto dall'armatura. In punto di morte Ettore supplica Achille di restituire il suo corpo alla famiglia, ma Achille rifiuta spietato; dopo averlo spogliato, fora i talloni del cadavere, lo lega al proprio carro e lo trascina nella polvere davanti agli occhi straziati dei genitori e di Andromaca." },
          { n: 23, romano: "XXIII", titolo: "I giochi funebri per Patroclo", testo: "Il fantasma di Patroclo appare in sogno ad Achille chiedendo una rapida sepoltura per poter accedere al regno dei morti. L'indomani vengono celebrati imponenti funerali: Achille fa sacrifici umani (dodici prigionieri troiani) e brucia il corpo di Patroclo su una pira. Segue la celebrazione di solenni giochi funebri con ricchi premi in palio per varie discipline (corsa dei carri, pugilato, lotta, corsa, duello con le armi, tiro con l'arco, lancio del giavellotto) in cui Achille dimostra grande regalità e compostezza nel placare i litigi tra i capi greci." },
          { n: 24, romano: "XXIV", titolo: "Priamo e Achille: il riscatto", testo: "Per dodici giorni consecutivi Achille continua a straziare il corpo di Ettore trascinandolo ogni mattina intorno alla tomba di Patroclo, ma il dio Apollo protegge la salma da qualsiasi decomposizione o sfigurazione. Gli dei, sdegnati per tanta ferocia, inviano Teti ad Achille per ordinargli di accettare un riscatto, ed Ermes ad accompagnare il vecchio re Priamo nel campo greco. Priamo entra invisibile nella tenda di Achille, gli bacia le mani (le stesse che gli hanno ucciso i figli) e lo supplica in nome dell'anziano padre. Mosso da profonda commozione ed empatia, la furia di Achille si scioglie: i due piangono insieme le rispettive perdite. Achille restituisce il corpo di Ettore e concede dodici giorni di tregua. Priamo rientra a Troia con la salma; il poema si chiude con i lamenti funebri di Andromaca, Ecuba ed Elena e con i solenni funerali di Ettore, domatore di cavalli." }
        ]
      }
    ],
    notaPersonaggi: "Come nell'Odissea, i personaggi presentano doppi nomi dovuti al passaggio dal greco al latino, ai patronimici (nomi derivati dal padre) o agli epiteti tradizionali.",
    personaggi: [
      {
        gruppo: "1. Gli eroi e sovrani greci (Achei / Argivi / Danai)",
        nota: "In Omero i Greci vengono chiamati con tre nomi collettivi equivalenti: Achei, Argivi o Danai.",
        voci: [
          { nome: "Achille", alt: ["Achilleo", "Pelìde", "Eacide"], desc: "Pelìde: il patronimico più famoso (figlio di Peleo). Eacide: nipote di Eaco (padre di Peleo). Epiteti: «dal piede veloce», «simile agli dei», «distruttore di rocche»." },
          { nome: "Agamennone", alt: ["Atrìde"], desc: "Atrìde: figlio di Atreo (condiviso con il fratello Menelao). Epiteti: «anax andron» (signore di uomini / re dei re), «pastore di popoli»." },
          { nome: "Menelao", alt: ["Atrìde"], desc: "Figlio di Atreo. Epiteti: «biondo Menelao», «caro ad Ares», «forte nel grido di guerra»." },
          { nome: "Odisseo", alt: ["Ulisse", "Laertìade"], desc: "Laertìade: figlio di Laerte. Epiteti: «ricco di astuzia» (polytropos), «multiforme», «distruttore di città»." },
          { nome: "Aiace Telamonio", alt: ["Aiace Grande", "Telamònio"], desc: "Figlio di Telamone (per distinguerlo da Aiace d'Oileo). Epiteto: «baluardo degli Achei»." },
          { nome: "Aiace d'Oileo", alt: ["Aiace Piccolo", "Oilìde"], desc: "Figlio di Oileo." },
          { nome: "Diomede", alt: ["Tidìde"], desc: "Figlio di Tideo. Epiteto: «forte nel grido di guerra». Protagonista dell'aristia del canto V." },
          { nome: "Patroclo", alt: ["Menezìade"], desc: "Figlio di Menezio. Amico fraterno di Achille, muore per mano di Ettore." },
          { nome: "Nestore", alt: [], desc: "Epiteti: «il vecchio cavaliere», «saggio di Pilo». Voce della prudenza e dell'esperienza." },
          { nome: "Macaone e Podalirio", alt: [], desc: "I due medici degli Achei, figli del dio della medicina Asclepio (Esculapio)." },
          { nome: "Tersite", alt: [], desc: "L'unico soldato semplice di cui viene fatto il nome: deforme e cialtrone, zittito da Odisseo." },
          { nome: "Fenice", alt: [], desc: "Vecchio precettore di Achille, membro dell'ambasceria del canto IX." }
        ]
      },
      {
        gruppo: "2. I Troiani e i loro alleati",
        voci: [
          { nome: "Ettore", alt: [], desc: "Epiteti: «domatore di cavalli», «dall'elmo lucente». Figlio di Priamo e massimo difensore di Troia." },
          { nome: "Paride", alt: ["Alessandro"], desc: "In Omero viene chiamato indifferentemente Paride o Alessandro (Alexandros, «protettore di uomini»). Epiteti: «bello come un dio», «cagione di mali»." },
          { nome: "Priamo", alt: ["Dardanìde"], desc: "Re di Troia. Dardanìde: discendente di Dardano (fondatore della stirpe troiana)." },
          { nome: "Ecuba", alt: ["Hekabe"], desc: "Regina di Troia, moglie di Priamo." },
          { nome: "Andromaca", alt: [], desc: "Moglie di Ettore, protagonista dell'addio alle porte Scee (canto VI)." },
          { nome: "Astianatte", alt: ["Scamandrio"], desc: "Il figlio infante di Ettore e Andromaca. Il nome vero dato dal padre era Scamandrio (dal fiume Scamandro), ma il popolo lo chiamava Astianatte («signore della città»)." },
          { nome: "Enea", alt: ["Anchisiade"], desc: "Figlio di Anchise e della dea Afrodite; salvato dal Fato per governare i Troiani superstiti." },
          { nome: "Sarpedonte", alt: [], desc: "Re della Licia, figlio di Zeus, il più valoroso tra gli alleati di Troia. Ucciso da Patroclo." },
          { nome: "Glauco", alt: [], desc: "Comandante dei Lici, nipote di Bellerofonte; scambia le armi con Diomede." },
          { nome: "Polidamante", alt: [], desc: "Giovane guerriero e indovino troiano, nato nella stessa notte di Ettore: rappresenta la prudenza contrapposta all'impeto di Ettore." },
          { nome: "Pandaro", alt: [], desc: "Arciere della Licia che rompe la tregua ferendo Menelao." },
          { nome: "Dolone", alt: [], desc: "La spia troiana catturata e uccisa da Diomede e Odisseo." },
          { nome: "Reso", alt: [], desc: "Re dei Traci, alleato dei Troiani ucciso nella notte." },
          { nome: "Cassandra", alt: [], desc: "Figlia di Priamo, la sacerdotessa/profetessa inascoltata." },
          { nome: "Criseide e Briseide", alt: ["Astinome", "Ippodamia"], desc: "I loro nomi omerici tradizionali sono patronimici: Criseide significa «figlia di Crise», Briseide «figlia di Brise». I loro veri nomi personali secondo la tradizione mitologica successiva erano rispettivamente Astinome e Ippodamia." }
        ]
      },
      {
        gruppo: "3. Gli dei e le loro doppie denominazioni (greco / latino)",
        nota: "Gli dei intervengono direttamente nel conflitto divisi in due fazioni.",
        voci: [
          { nome: "Atena / Minerva", alt: ["Pallade", "Glaukopis"], desc: "★ Pro Greci — detta anche Pallade Atena o «occhi azzurri / occhi di civetta» (Glaukopis)." },
          { nome: "Era / Giunone", alt: ["Boopis"], desc: "★ Pro Greci — detta «dalle bianche braccia» o «dagli occhi di vitella» (Boopis)." },
          { nome: "Poseidone / Nettuno", alt: ["Enosigèo"], desc: "★ Pro Greci — detto «scuotitore della terra» o «Enosigèo»." },
          { nome: "Efesto / Vulcano", alt: [], desc: "★ Pro Greci — il dio fabbro e del fuoco, forgia lo scudo di Achille." },
          { nome: "Ermes / Mercurio", alt: ["Argicida"], desc: "★ Pro Greci — il messaggero, detto «l'Argicida» (uccisore di Argo)." },
          { nome: "Apollo / Febo", alt: ["Sminteo"], desc: "☾ Pro Troiani — detto Febo («lo splendente»), Sminteo («dio dei topi», invocato per la pestilenza) o «arciere d'argento»." },
          { nome: "Afrodite / Venere", alt: ["Citerea"], desc: "☾ Pro Troiani — detta Citerea (dall'isola di Citera) o «amante del riso»." },
          { nome: "Ares / Marte", alt: [], desc: "☾ Pro Troiani — il dio della guerra, detto «il distruttore di uomini»." },
          { nome: "Artemide / Diana", alt: [], desc: "☾ Pro Troiani — dea della caccia, sorella di Apollo." },
          { nome: "Scamandro / Xanto", alt: [], desc: "☾ Pro Troiani — il dio-fiume di Troia. Gli dei lo chiamano Xanto («il biondo/rosso»), gli uomini lo chiamano Scamandro." },
          { nome: "Zeus / Giove", alt: ["Cronìde"], desc: "⚖ Super partes (arbitro) — detto «adunatore di nubi», «padre degli dei e degli uomini», «Cronìde» (figlio di Crono)." },
          { nome: "Teti", alt: [], desc: "Ninfa marina, madre di Achille: intercede presso Zeus e ottiene da Efesto le nuove armi." }
        ]
      }
    ]
  },

  /* --------------------------------------------------------- ODISSEA */
  odissea: {
    id: "odissea",
    titolo: "Odissea",
    autore: "Omero",
    sottotitolo: "Il lungo ritorno di Odisseo a Itaca",
    epoca: "VIII–VII sec. a.C. ca.",
    lingua: "Greco antico (esametri)",
    tag: ["24 canti", "Nostos", "Poema epico greco"],
    epigrafe: "Narrami, o Musa, dell'uomo dal multiforme ingegno.",
    colore: "blu",
    parti: [
      {
        titolo: "Prima Parte — La Telemachia",
        sottotitolo: "Canti I – IV",
        canti: [
          { n: 1, romano: "I", titolo: "Il concilio degli dei", testo: "L'opera si apre con l'invocazione alla Musa. Nel concilio degli dei sull'Olimpo, approfittando dell'assenza di Poseidone (ostile a Odisseo), Atena ottiene da Zeus il permesso di far tornare Odisseo a casa da Ogigia, dove è trattenuto dalla ninfa Calipso. Ermes viene inviato da Calipso, mentre Atena si reca a Itaca sotto le spoglie di Mente, re dei Tafi. Qui trova la reggia invasa dai Proci, nobili locali che sperperano i beni di Odisseo pretendendo di sposarne la moglie Penelope. Atena incoraggia il giovane figlio di Odisseo, Telemaco, a prendere in mano la situazione, convocare l'assemblea dei cittadini e partire alla ricerca di notizie del padre." },
          { n: 2, romano: "II", titolo: "L'assemblea di Itaca e la tela di Penelope", testo: "Telemaco convoca l'assemblea dei cittadini di Itaca (evento che non accadeva dalla partenza di Odisseo per Troia vent'anni prima). Il giovane denuncia l'arroganza dei Proci, ma il loro capo, Antinoo, rifiuta le accuse e svela l'inganno di Penelope: la regina aveva promesso di scegliere uno sposo solo dopo aver terminato il sudario per il suocero Laerte, ma di notte disfaceva la tela tessuta di giorno. Nonostante i presagi sfavorevoli mandati da Zeus contro i Proci, questi deridono Telemaco. Aiutato segretamente da Atena (che assume le sembianze di Mentore), Telemaco prepara una nave e parte di notte verso Pilo." },
          { n: 3, romano: "III", titolo: "Telemaco a Pilo da Nestore", testo: "Telemaco e Mentore giungono a Pilo, dove il saggio re Nestore sta sacrificando a Poseidone sulla spiaggia. Nestore accoglie calorosamente il giovane e narra le vicende del ritorno di molti eroi greci da Troia, spiegando però di non avere notizie certe sulla sorte finale di Odisseo. Nestore invita Telemaco a recarsi a Sparta da Menelao, l'ultimo eroe giunto in patria, e gli mette a disposizione un carro guidato da suo figlio Pisistrato. Atena si rivela trasformandosi in un'aquila, rassicurando tutti sulla protezione divina sul ragazzo." },
          { n: 4, romano: "IV", titolo: "Telemaco a Sparta da Menelao", testo: "Arrivati a Sparta, Telemaco e Pisistrato vengono accolti da Menelao e dalla moglie Elena durante una festa nobiliare. Elena riconosce Telemaco per la somiglianza con il padre. Menelao racconta le sue peripezie in Egitto e come sia riuscito a catturare il dio marino Proteo (il «Vecchio del Mare»). Proteo gli aveva rivelato che Odisseo era ancora vivo, prigioniero nell'isola di Ogigia della ninfa Calipso. Nel frattempo, a Itaca, i Proci scoprono la partenza di Telemaco e organizzano un agguato in mare vicino all'isola di Asteride per ucciderlo al suo ritorno. Penelope apprende della trama e cade nel dolore, ma Atena la rassicura inviandole un sogno consolatorio." }
        ]
      },
      {
        titolo: "Seconda Parte — Il ritorno di Odisseo e i racconti alla reggia dei Feaci",
        sottotitolo: "Canti V – XII",
        canti: [
          { n: 5, romano: "V", titolo: "Calipso, la zattera e la tempesta", testo: "Un secondo concilio degli dei invia Ermes su Ogigia. Il messaggero divino ordina a Calipso di lasciare andare Odisseo. La ninfa, pur a malincuore, obbedisce e offre all'eroe gli strumenti per costruirsi una zattera. Odisseo naviga per diciotto giorni, ma Poseidone lo avvista e scatena una terribile tempesta che distrugge l'imbarcazione. Salvato dal velo magico della dea marina Ino Leucotea e guidato da Atena, Odisseo approda esausto sulla costa dell'isola dei Feaci (Scheria), dove si addormenta sotto un cespuglio di ulivo." },
          { n: 6, romano: "VI", titolo: "Nausicaa", testo: "Atena appare in sogno a Nausicaa, giovane principessa dei Feaci, suggerendole di andare al fiume con le ancelle per lavare il corredo di nozze. Sulla spiaggia, dopo aver lavato le vesti, le ragazze giocano a palla. Le loro grida risvegliano Odisseo, che si presenta nudo e sporco di salsedine, implorando aiuto con grande diplomazia e intelligenza. Nausicaa, colpita dai suoi modi e dal suo aspetto (abbellito da Atena), gli offre abiti, cibo e gli indica la strada per la reggia del padre Alcinoo." },
          { n: 7, romano: "VII", titolo: "Alla reggia di Alcinoo e Arete", testo: "Odisseo si dirige verso la città protetto da una nebbia magica eretta da Atena. Entra nella ricca reggia del re Alcinoo e della regina Arete e si getta supplice alle ginocchia della regina. I sovrani lo accolgono con le norme della sacra ospitalità (xenia), promettendo di fornirgli una nave per il ritorno a casa senza ancora conoscere la sua vera identità. Durante la cena, Arete riconosce i vestiti che l'ospite indossa, e Odisseo racconta del suo naufragio e dell'incontro con Nausicaa." },
          { n: 8, romano: "VIII", titolo: "I giochi e il canto di Demodoco", testo: "Il giorno seguente Alcinoo organizza un'assemblea e dei giochi atletici in onore dell'ospite. Durante il banchetto, l'aedo cieco Demodoco canta le imprese degli eroi a Troia, tra cui la lite tra Odisseo e Achille e l'inganno del Cavallo di Legno. Sentendo quelle storie, Odisseo si commuove e piange nascondendosi nel mantello. Notando il suo turbamento, il re Alcinoo interrompe i canti e chiede ufficialmente allo sconosciuto di svelare il suo nome, la sua patria e la causa del suo profondo dolore." },
          { n: 9, romano: "IX", titolo: "Ciconi, Lotofagi e Polifemo", testo: "Odisseo svela finalmente la sua identità e inizia il lungo racconto delle sue avventure (Apologoi). Narra della partenza da Troia, dell'attacco alla città dei Ciconi e della tappa nella terra dei Lotofagi, dove i suoi uomini rischiano di dimenticare la patria mangiando il frutto del loto. Prosegue descrivendo l'arrivo nella terra dei Ciclopi e l'esplorazione della grotta del gigante Polifemo. Il mostro intrappola Odisseo e i compagni divorandone diversi. Odisseo lo ubriaca con del vino puro, dice di chiamarsi «Nessuno» e lo acceca nel sonno con un palo infuocato. Fuggiti dalla grotta nascosti sotto la pancia delle pecore, Odisseo compie l'errore di gridare il suo vero nome a Polifemo, permettendo al gigante di invocare la maledizione di suo padre Poseidone contro di lui." },
          { n: 10, romano: "X", titolo: "Eolo, i Lestrigoni e Circe", testo: "Odisseo giunge nell'isola di Eolo, il signore dei venti, che gli dona un otre di cuoio contenente tutti i venti contrari alla navigazione. A un passo da Itaca, mentre Odisseo dorme, i compagni sospettosi aprono l'otre credendolo pieno d'oro: si scatena una tempesta che li riporta indietro da Eolo, il quale stavolta li caccia definendoli maledetti dagli dei. Successivamente giungono tra i giganteschi cannibali Lestrigoni, che distruggono undici delle dodici navi della flotta. La sola nave di Odisseo si salva e approda all'isola di Eea, dimora della maga Circe. Essa trasforma parte dei compagni in maiali. Grazie all'erba magica «moly» fornita da Ermes, Odisseo resiste agli incantesimi di Circe e la costringe a restituire forma umana ai suoi uomini. Vi rimangono un anno intero, al termine del quale la maga indica loro di scendere negli Inferi per consultare l'indovino Tiresia." },
          { n: 11, romano: "XI", titolo: "La Nekuia: la discesa agli Inferi", testo: "Odisseo si reca ai confini del mondo (nel paese dei Cimmeri) ed esegue il rito dei sacrifici per evocare i morti (episodio della Nekuia). Incontra l'ombra dell'indovino Tiresia, che gli predice le difficoltà del ritorno, il pericolo di toccare i buoi del Sole e la sua futura morte in tarda età lontano dal mare. Incontra poi la madre Anticlea (morta di dolore per la sua assenza), le grandi eroine del passato, e i suoi compagni della guerra di Troia: Agamennone (che lo mette in guardia dalla perfidia delle donne), Achille e Aiace." },
          { n: 12, romano: "XII", titolo: "Sirene, Scilla e Cariddi, i buoi del Sole", testo: "Tornato da Circe per seppellire il compagno Elpenore, Odisseo riceve dalla maga preziose istruzioni sui pericoli imminenti. Ripreso il mare, la nave supera lo scoglio delle Sirene: Odisseo si fa legare all'albero maestro per ascoltarne il canto ammaliatore, mentre i compagni navigano con le orecchie tappate di cera. Successivamente affrontano lo stretto passaggio tra i mostri Scilla e Cariddi; Scilla divora sei marinai. Giunti sull'isola di Trinacria, nonostante i divieti di Odisseo, i compagni affamati approfittano del suo sonno per uccidere e mangiare i buoi sacri al dio Sole (Elio). Per punizione, appena ripartiti, Zeus scatena una folgore che affonda la nave e uccide tutti i compagni. Solo Odisseo si salva aggrappandosi ai resti dell'imbarcazione e, dopo giorni alla deriva, giunge sull'isola di Ogigia da Calipso." }
        ]
      },
      {
        titolo: "Terza Parte — Il ritorno a Itaca e la vendetta",
        sottotitolo: "Canti XIII – XXIV",
        canti: [
          { n: 13, romano: "XIII", titolo: "Il ritorno a Itaca", testo: "Terminato il racconto, i Feaci riempiono Odisseo di ricchi doni e lo trasportano dormiente fino a una baia di Itaca. Per punire la generosità dei Feaci, Poseidone trasforma la loro nave in uno scoglio di pietra al suo rientro in patria. Odisseo si risveglia ma non riconosce la sua terra a causa di una nebbia posata da Atena. La dea gli appare sotto forma di un giovane pastore, gli svela di essere a Itaca, lo aiuta a nascondere i tesori in una grotta e lo trasforma in un vecchio e cencioso mendicante per non farlo riconoscere dai nemici." },
          { n: 14, romano: "XIV", titolo: "La capanna di Eumeo", testo: "Odisseo, sotto le spoglie del mendicante, si reca nella dimora del suo fedele servitore Eumeo, il guardiano dei porci. Eumeo accoglie lo sconosciuto offrendogli cibo, riparo e dimostrando profonda devozione verso il vecchio padrone scomparso. Odisseo inventa una complessa e falsa storia sulla propria origine (dicendo di essere un nobile cretese caduto in disgrazia) e rassicura Eumeo sul fatto che il re Odisseo tornerà presto a casa." },
          { n: 15, romano: "XV", titolo: "Il ritorno di Telemaco", testo: "Atena vola a Sparta per sollecitare Telemaco a tornare a Itaca prima che la madre si pieghi alle pressioni dei Proci. Telemaco parte, porta con sé l'indovino Teoclimeno (in fuga per un omicidio) ed evita l'agguato dei Proci al suo rientro nell'isola. Nel frattempo, nella capanna, Eumeo narra a Odisseo la storia della propria vita: nato principe, era stato rapito da mercanti fenici e venduto come schiavo a Laerte. Il mattino seguente la nave di Telemaco approda felicemente sulle coste di Itaca." },
          { n: 16, romano: "XVI", titolo: "Il riconoscimento di padre e figlio", testo: "Telemaco giunge alla capanna di Eumeo e manda il servitore in città ad avvisare la madre del suo ritorno. Rimanendo soli nella capanna, Atena restituisce temporaneamente a Odisseo il suo vero aspetto regale. Padre e figlio si riabbracciano in un pianto di commozione e pianificano nei dettagli la vendetta contro i Proci: Telemaco dovrà nascondere tutte le armi presenti nella sala del trono. I Proci, appreso del ritorno del giovane, rimangono delusi dal fallimento del loro agguato e preparano nuovi piani." },
          { n: 17, romano: "XVII", titolo: "Il cane Argo e il ritorno alla reggia", testo: "Telemaco rientra alla reggia seguito più tardi da Eumeo e da Odisseo di nuovo trasformato in mendicante. L'unico a riconoscere Odisseo prima ancora di entrare è il suo anziano cane Argo che, spezzato dagli anni e dalla solitudine, scodinzola e muore subito dopo aver rivisto il padrone. Entrato nella reggia, Odisseo chiede la carità ai Proci per saggiarne la moralità: Antinoo lo insulta e gli scaglia contro uno sgabello. Penelope manifesta il desiderio di parlare con il nuovo mendicante per sapere se ha notizie del marito." },
          { n: 18, romano: "XVIII", titolo: "La lotta con il mendicante Iro", testo: "Un mendicante locale di nome Iro, abituato a spadroneggiare nella reggia, sfida Odisseo a un combattimento a pugni per il monopolio della carità. Odisseo, sostenuto da Atena, lo sconfigge facilmente con un solo pugno ben piazzato, guadagnandosi il rispetto apparente degli altri rivali. Atena instilla in Penelope il desiderio di mostrarsi ai Proci, rendendola ancora più bella e affascinante; la regina rimprovera i corteggiatori, che la riempiono di preziosi doni. L'eroe tenta invano di mettere in guardia Anfinomo (il più moderato tra i Proci) sul massacro imminente." },
          { n: 19, romano: "XIX", titolo: "Il colloquio con Penelope e la cicatrice", testo: "Nella notte, Odisseo e Telemaco mettono in atto la prima fase del piano rimuovendo tutte le armi dalla sala del palazzo. Odisseo incontra poi Penelope e le racconta una nuova storia falsa, affermando di aver conosciuto Odisseo a Creta e descrivendone accuratamente i vestiti per dimostrare la veridicità delle sue parole. La regina ordina all'anziana nutrice Euriclea di lavare i piedi all'ospite. Lavandogli la gamba, Euriclea riconosce Odisseo da una vecchia cicatrice causata da un cinghiale sul monte Parnaso. Odisseo la afferra alla gola e le impone il silenzio. Penelope svela all'ospite il sogno di un'aquila che uccide le sue oche e gli preannuncia la gara dell'arco che organizzerà l'indomani." },
          { n: 20, romano: "XX", titolo: "La notte prima della strage", testo: "Odisseo trascorre una notte agitata tormentato dai dubbi sull'esito dello scontro, ma Atena interviene per rassicurarlo. Il giorno successivo, durante il banchetto per la festa di Apollo, i Proci mostrano ancora una volta la loro irriverenza: Ctesippo scaglia un piede di bue contro il finto mendicante. L'indovino Teoclimeno ha una terribile visione profetica, vedendo le pareti della sala coperte di sangue e i Proci avvolti dalle tenebre, ma i corteggiatori lo deridono." },
          { n: 21, romano: "XXI", titolo: "La gara dell'arco", testo: "Penelope porta nella sala l'arco di Odisseo e lancia la sfida: sposerà chiunque riesca a incordare l'arco del re e a scagliare una freccia attraverso gli anelli di dodici scuri allineate. Nessuno dei Proci riesce nemmeno a tendere l'arco. Nel frattempo, all'esterno, Odisseo rivela la sua identità ai fedeli servitori Eumeo e Filezio, ordinando loro di chiudere le porte della sala. Nonostante le proteste dei nobili, Odisseo chiede di provare l'arco: lo incorda senza alcuno sforzo, scaglia la freccia perfettamente attraverso le dodici scuri e Zeus fa rimbombare un tuono in cielo." },
          { n: 22, romano: "XXII", titolo: "La Mnesterofonia: la strage dei Proci", testo: "Odisseo si spoglia dei cenci, si posiziona sulla soglia e uccide per primo Antinoo trapassandogli la gola con una freccia. Svelata la propria identità, la carneficina ha inizio (Mnesterofonia). Eurimaco tenta di trattare ma viene abbattuto. Il servo traditore Melanzio riesce a recuperare alcune armi dalla stanza segreta per i Proci, ma viene sorpreso da Eumeo e Filezio e incatenato. Atena interviene in forma di rondine incitando Odisseo. Tutti i Proci vengono sterminati; vengono risparmiati unicamente il cantore Femio e l'araldo Medonte. Le ancelle infedeli che si erano unite ai Proci vengono costrette a pulire il sangue dalla sala e poi impiccate." },
          { n: 23, romano: "XXIII", titolo: "La prova del letto nuziale", testo: "Euriclea corre a svegliare Penelope per annunciarle la vittoria e il ritorno del marito. Penelope, prudente e incredula, teme un inganno divino. Scesa nella sala, sottopone Odisseo a una prova decisiva: ordina di spostare fuori dalla camera da letto il loro letto nuziale. Odisseo reagisce subito dicendo che è impossibile, poiché egli stesso aveva costruito quel letto intagliandolo direttamente in un ceppo di ulivo secolare ancora radicato al suolo. Riconosciuto il segreto unico della coppia, Penelope scioglie ogni riserva e si getta tra le sue braccia. Quella notte Atena prolunga la durata della notte per far riabbracciare i due sposi, che si raccontano le rispettive sofferenze." },
          { n: 24, romano: "XXIV", titolo: "Laerte e la pace di Atena", testo: "Ermes conduce le anime dei Proci nell'Ade, dove incontrano le ombre di Achille e Agamennone; quest'ultimo loda la fedeltà di Penelope confrontandola con il tradimento di Clitennestra. Nel frattempo Odisseo si reca nei campi per riabbracciare l'anziano padre Laerte, facendosi riconoscere attraverso la cicatrice e ricordando gli alberi da frutto che il padre gli aveva regalato da bambino. I parenti dei Proci uccisi, guidati da Eupite (padre di Antinoo), imbracciano le armi per vendicarsi. Si giunge allo scontro e Laerte uccide Eupite. Prima che la guerra civile devasti Itaca, la dea Atena interviene su ordine di Zeus, imponendo la pace eterna e ripristinando il regno di Odisseo." }
        ]
      }
    ],
    notaPersonaggi: "Odisseo e Ulisse sono la stessa identica persona: Odisseo (dal greco Odysseús) è il nome originale usato da Omero, Ulisse (dal latino Ulixes) è la forma latinizzata diffusa attraverso la cultura romana e la lingua italiana. Molti personaggi presentano doppi nomi: varianti greco/latino, soprannomi, epiteti o identità sotto mentite spoglie.",
    personaggi: [
      {
        gruppo: "1. I protagonisti con più nomi o identità",
        voci: [
          { nome: "Odisseo / Ulisse", alt: ["Nessuno (Outis)", "Mendicante", "Eroe di Creta"], desc: "Nessuno (Outis): il falso nome che Odisseo dà al ciclope Polifemo per trarlo in inganno. Mendicante / eroe di Creta: l'identità fittizia inventata quando torna a Itaca sotto mentite spoglie (racconta di essere un nobile cretese caduto in disgrazia)." },
          { nome: "Atena / Minerva", alt: ["Mente", "Mentore"], desc: "La dea della sapienza che protegge Odisseo. Assume diverse sembianze umane: Mente, re dei Tafi (canto I, per parlare con Telemaco) e Mentore, nobile amico di Odisseo (per guidare Telemaco a Pilo e Sparta e durante la battaglia finale)." },
          { nome: "Ermes / Mercurio", alt: [], desc: "Il messaggero degli dei che porta a Calipso l'ordine di liberare Odisseo; dona anche l'erba moly." },
          { nome: "Poseidone / Nettuno", alt: [], desc: "Il dio del mare, acerrimo nemico di Odisseo dopo l'accecamento del figlio Polifemo." },
          { nome: "Zeus / Giove", alt: [], desc: "Il padre degli dei, arbitro del destino di Odisseo." }
        ]
      },
      {
        gruppo: "2. Personaggi familiari e della reggia di Itaca",
        voci: [
          { nome: "Penelope", alt: [], desc: "Moglie di Odisseo e regina di Itaca; celebre per l'inganno della tela e per la prudenza." },
          { nome: "Telemaco", alt: [], desc: "Figlio di Odisseo e Penelope, protagonista della Telemachia." },
          { nome: "Laerte", alt: [], desc: "Anziano padre di Odisseo, ritirato in campagna; uccide Eupite nel canto XXIV." },
          { nome: "Anticlea", alt: [], desc: "Madre di Odisseo, morta di dolore: il figlio la incontra nel regno dei morti." },
          { nome: "Euriclea", alt: [], desc: "La fedele nutrice d'infanzia di Odisseo, che lo riconosce dalla cicatrice." },
          { nome: "Eumeo", alt: [], desc: "Il fedele porcaro (guardiano dei porci) che accoglie Odisseo al suo ritorno." },
          { nome: "Filezio", alt: [], desc: "Il capraio/vaccaro rimasto fedele al re." },
          { nome: "Argo", alt: [], desc: "Il vecchio cane da caccia di Odisseo: lo riconosce e muore." },
          { nome: "Melanzio / Melanteo", alt: ["Melanto"], desc: "Il capraio traditore che aiuta i Proci; sua sorella Melanto è un'ancella infedele." }
        ]
      },
      {
        gruppo: "3. I Proci (i pretendenti al trono)",
        nota: "I nobili di Itaca e delle isole vicine che occupano la reggia per sposare Penelope.",
        voci: [
          { nome: "Antinoo", alt: [], desc: "Il più arrogante e violento, capo dei Proci: il primo a essere ucciso da Odisseo." },
          { nome: "Eurimaco", alt: [], desc: "Il proco falso e manipolatore." },
          { nome: "Anfinomo", alt: [], desc: "Il più moderato e ragionevole tra i pretendenti." },
          { nome: "Ctesippo", alt: [], desc: "Il proco ricchissimo e sgarbato che lancia un piede di bue contro Odisseo mendicante." }
        ]
      },
      {
        gruppo: "4. Figure mitologiche, dei e mostri",
        voci: [
          { nome: "Calipso", alt: [], desc: "La ninfa che trattiene Odisseo per sette anni sull'isola di Ogigia." },
          { nome: "Circe", alt: [], desc: "La maga dell'isola di Eea che trasforma i compagni di Odisseo in maiali." },
          { nome: "Polifemo", alt: [], desc: "Il gigante monocolo, figlio di Poseidone: uno dei Ciclopi." },
          { nome: "Eolo", alt: [], desc: "Il dio/signore dei venti, donatore dell'otre dei venti." },
          { nome: "Tiresia", alt: [], desc: "L'indovino cieco tebano consultato da Odisseo negli Inferi." },
          { nome: "Scilla e Cariddi", alt: [], desc: "I due mostri marini che custodiscono lo stretto passaggio: Scilla ha sei teste, Cariddi è un vortice marino." },
          { nome: "Le Sirene", alt: [], desc: "Creature dal canto ammaliatore che incantano i marinai." },
          { nome: "Ino Leucotea", alt: [], desc: "La dea marina che dona a Odisseo il velo magico per salvarlo dalla tempesta." },
          { nome: "Elio / Iperione", alt: [], desc: "Il dio Sole, i cui buoi sacri vengono uccisi dai compagni di Odisseo nell'isola di Trinacria." }
        ]
      },
      {
        gruppo: "5. I Feaci (l'isola di Scheria)",
        voci: [
          { nome: "Alcinoo", alt: [], desc: "Re dei Feaci che accoglie Odisseo e ascolta i suoi racconti." },
          { nome: "Arete", alt: [], desc: "Regina dei Feaci, moglie di Alcinoo." },
          { nome: "Nausicaa", alt: [], desc: "Giovane principessa feaca, figlia di Alcinoo e Arete, che soccorre Odisseo sulla spiaggia." },
          { nome: "Demodoco", alt: [], desc: "L'aedo cieco della corte dei Feaci." }
        ]
      },
      {
        gruppo: "6. Gli eroi greci e i sovrani alleati",
        voci: [
          { nome: "Nestore", alt: [], desc: "Anziano e saggio re di Pilo." },
          { nome: "Pisistrato", alt: [], desc: "Figlio di Nestore, accompagna Telemaco nel suo viaggio a Sparta." },
          { nome: "Menelao", alt: [], desc: "Re di Sparta, marito di Elena: racconta a Telemaco di aver saputo da Proteo che Odisseo è vivo." },
          { nome: "Elena", alt: [], desc: "Moglie di Menelao, causa della guerra di Troia." },
          { nome: "Proteo", alt: ["Il Vecchio del Mare"], desc: "Il dio marino mutaforma catturato da Menelao in Egitto." },
          { nome: "Agamennone, Achille, Aiace", alt: [], desc: "Le ombre degli eroi della guerra di Troia incontrate da Odisseo nell'Oltretomba." }
        ]
      }
    ]
  },

  /* ---------------------------------------------------------- ENEIDE */
  eneide: {
    id: "eneide",
    titolo: "Eneide",
    autore: "Virgilio",
    sottotitolo: "Il destino di Enea e le origini di Roma",
    epoca: "29–19 a.C.",
    lingua: "Latino (esametri)",
    tag: ["12 libri", "Poema epico latino", "Fondazione di Roma"],
    epigrafe: "Arma virumque cano — Canto le armi e l'uomo.",
    colore: "oro",
    parti: [
      {
        titolo: "Prima Parte — I viaggi e l'arrivo nel Lazio",
        sottotitolo: "Libri I – VI (fase «odisseica»)",
        canti: [
          { n: 1, romano: "I", titolo: "La tempesta e l'approdo a Cartagine", testo: "L'opera si apre con la celebre dichiarazione d'intenti («Canto le armi e l'uomo»). Enea e i Troiani superstiti sono in navigazione nel Mediterraneo verso l'Italia, dove il destino vuole che fondino una nuova stirpe. Giunone (ostile ai Troiani) convince il dio dei venti Eolo a scatenare una tempesta che disperde la flotta. Nettuno interviene placando le acque. Enea approda sulle coste dell'Africa (vicino a Cartagine) con sole sette navi. Venere, madre di Enea, ottiene da Giove la rassicurazione sul glorioso avvenire di Roma. Enea incontra la regina Dido (Didone), profuga fenicia che sta costruendo Cartagine. Durante il banchetto di benvenuto, Venere sostituisce il piccolo Ascanio (figlio di Enea) con Cupido, instillando in Didone un'insana passione per l'eroe troiano." },
          { n: 2, romano: "II", titolo: "La caduta di Troia", testo: "Su richiesta di Didone, Enea narra la fine di Troia (il famoso racconto nel racconto). Descrive l'inganno del Cavallo di Legno ideato da Ulisse, la morte del sacerdote Laocoonte stritolato da serpenti marini e la notte di massacro. L'ombra di Ettore appare in sogno a Enea ordinandogli di fuggire portando con sé i Penati (gli dei protettori della patria). Enea combatte fino all'ultimo e assiste all'uccisione dell'anziano re Priamo per mano di Pirro (Neottolemo). Infine, Enea fugge caricandosi sulle spalle il vecchio padre Anchise, tenendo per mano il figlioletto Ascanio (Iulo) e portando i sacri Penati. Nella calca perde la moglie Creusa, il cui fantasma gli appare rassicurandolo sul fatto che un nuovo regno e una nuova sposa lo attendono in Esperia (Italia)." },
          { n: 3, romano: "III", titolo: "L'errare per il Mediterraneo", testo: "Enea prosegue il racconto dei sette anni di peripezie in mare. I Troiani tentano invano di fondare nuove città prima in Tracia (dove scoprono la triste sorte di Polidoro) e poi a Creta (dove vengono colpiti da una pestilenza). Consultato l'oracolo di Delo, comprendono che la loro meta è l'antica terra d'origine: l'Italia. Lungo la rotta incontrano le Arpie (l'arpia Celeno predice che mangeranno le proprie mense per la fame), ritrovano in Epiro Andromaca ed Eleno (diventati sovrani) ed evitano lo stretto di Scilla e Cariddi. Approdati in Sicilia (terra dei Ciclopi), salvano un compagno di Ulisse dimenticato nell'isola, Achemenide. A Trapani (Drepanum) muore il padre Anchise. Da lì, la tempesta del Libro I li aveva spinti a Cartagine." },
          { n: 4, romano: "IV", titolo: "La tragedia di Didone", testo: "Didone è dilaniata dall'amore per Enea, violando il giuramento di fedeltà alla memoria del defunto marito Sicheo. Giunone e Venere stringono un'alleanza tattica: durante una battuta di caccia sorpresa da un temporale, Enea e Didone si rifugiano in una grotta e consumano la loro unione. Tuttavia, la Fama diffonde la notizia e Iarba (re africano rifiutato da Didone) invoca Giove. Il padre degli dei invia Mercurio a Enea per ricordargli la sua missione divina e ordinargli di salpare immediatamente. Enea, pur soffrendo, obbedisce al destino. Didone, scoprendo la partenza clandestina, scaglia una terribile maledizione che prefigura la futura rivalità tra Cartagine e Roma (le guerre puniche), per poi uccidersi salendo su una pira funebre e trafiggendosi con la spada regalatale da Enea." },
          { n: 5, romano: "V", titolo: "I giochi funebri per Anchise", testo: "I Troiani tornano in Sicilia presso l'ospitale re Aceste. Enea celebra solenni giochi funebri in onore del padre Anchise a un anno dalla morte (gare di navi, corsa, pugilato, tiro con l'arco e la parata a cavallo dei giovani, il Lusus Troiae). Istigate da Giunone, le donne troiane (Troadi), stanche del lungo errare, appiccano il fuoco alle navi; Enea prega Giove, che invia una pioggia provvidenziale salvando la maggior parte della flotta. Enea fonda la città di Acesta per chi desidera fermarsi. Ripresa la navigazione verso il Lazio, il nocchiero Palinuro cade in mare di notte, tradito dal dio Sonno: il suo sacrificio è il prezzo chiesto dagli dei per garantire un approdo sicuro." },
          { n: 6, romano: "VI", titolo: "La discesa agli Inferi", testo: "Enea approda a Cuma ed entra nel tempio di Apollo per consultare la Sibilla Cumana. La profetessa gli vaticina le imminenti e sanguinose guerre nel Lazio e lo guida nella discesa negli Inferi (Catabasi). Recuperato il ramo d'oro sacro a Proserpina e seppellito il compagno Miseno, Enea entra nell'Oltretomba attraverso il lago d'Averno. Attraversa il fiume Stige sul traghetto di Caronte, supera il mostro Cerbero e giunge nei Campi del Pianto, dove incontra il fantasma di Didone (che lo ignora freddamente) e molti compagni caduti a Troia. Raggiunti i Campi Elisi, Enea riabbraccia il padre Anchise, il quale gli mostra le anime dei futuri eroi romani in attesa di reincarnarsi: da Romolo ai Fabii, da Scipione fino a Giulio Cesare, Augusto e il giovane Marcello. Confermato nel suo supremo destino storico, Enea risale nel mondo dei vivi attraverso la porta d'avorio." }
        ]
      },
      {
        titolo: "Seconda Parte — La guerra nel Lazio",
        sottotitolo: "Libri VII – XII (fase «iliadica»)",
        canti: [
          { n: 7, romano: "VII", titolo: "L'arrivo nel Lazio e lo scoppio della guerra", testo: "La flotta di Enea sbarca alla foce del Tevere. Si compie la profezia di Celeno: i Troiani usano focacce di pane come piatti per il cibo e, mangiandole, «divorano le mense». Enea invia un'ambasceria al re Latino, sovrano del posto. Latino li accoglie benedicendo l'unione: un oracolo gli aveva infatti proibito di dare in sposa la figlia Lavinia a un principe locale, imponendogli uno straniero (Enea). Giunone, infuriata, invoca la furia Aletto dagli Inferi per scatenare la guerra. Aletto avvelena l'animo della regina Amata (madre di Lavinia) e istiga il giovane re dei Rutuli, Turno (promesso sposo di Lavinia), alla rivolta. La scintilla scocca quando Ascanio uccide inavvertitamente un cervo domestico amato dai contadini locali: le popolazioni italiche si coalizzano contro i Troiani." },
          { n: 8, romano: "VIII", titolo: "Evandro, il Palatino e lo scudo di Enea", testo: "Vista la sproporzione delle forze, il dio Tevere appare in sogno a Enea e gli suggerisce di risalire il fiume per chiedere aiuto al re Evandro, un arcade che ha fondato un insediamento sul colle Palatino (la futura Roma). Evandro accoglie Enea con grande cordialità, gli mostra i luoghi storici della futura capitale e gli concede la guida delle proprie truppe assieme al giovane figlio Pallante. Evandro suggerisce inoltre di stringere alleanza con gli Etruschi di Cere (Cerveteri), insorti contro il loro spietato ex tiranno Mezenzio. Intanto Venere si reca da Vulcano e gli fa forgiare un'armatura divina per Enea, il cui scudo mostra le future vittorie romane, tra cui la battaglia di Azio." },
          { n: 9, romano: "IX", titolo: "L'assalto di Turno; Eurialo e Niso", testo: "Approfittando dell'assenza di Enea, Turno attacca l'accampamento troiano e tenta di bruciarne le navi; Cibele (madre degli dei) interviene trasformando le imbarcazioni in ninfe marine. Durante la notte, due giovani amici troiani, Eurialo e Niso, tentano una sortita per filtrare tra le linee nemiche e avvisare Enea. Dopo aver compiuto una strage di nemici addormentati, vengono intercettati dalla cavalleria latina: Eurialo viene catturato e Niso muore nel disperato tentativo di salvarlo. Il giorno seguente Turno penetra nell'accampamento troiano compiendo una strage, ma rimasto isolato è costretto a salvarsi tuffandosi nel Tevere." },
          { n: 10, romano: "X", titolo: "La morte di Pallante e di Lauso", testo: "Giove convoca un concilio degli dei proibendo ulteriori interferenze, stabilendo che sarà il Fato a decidere. Enea torna per fiume con gli alleati Etruschi e Arcadi. La battaglia riprende feroce: Pallante combatte con immenso valore ma affronta Turno, che lo uccide spietatamente e gli strappa il balteo (la cintura scolpita) come trofeo. Alla notizia della morte di Pallante, Enea cade in una furia cieca cercando Turno sul campo. Turno viene tratto in salvo temporaneamente da Giunone con un inganno visivo. Enea affronta e uccide prima il feroce re etrusco Mezenzio e poi il suo giovane e nobile figlio Lauso, soffrendo per il sacrificio del ragazzo." },
          { n: 11, romano: "XI", titolo: "I funerali di Pallante e Camilla", testo: "Enea piange la salma di Pallante e la rimanda al padre Evandro scortata da un solenne corteo funebre. Viene stabilita una tregua di dodici giorni per seppellire i caduti. Nel consiglio dei Latini, il saggio Drance attacca l'ostinazione di Turno e propone di risolvere la contesa con un duello singolare tra Turno ed Enea. Turno accetta con orgoglio, ma la battaglia riprende prima dell'accordo. Protagonista del libro è la vergine guerriera Camilla, regina dei Volsci e alleata di Turno. Dopo aver compiuto imprese prodigiose, Camilla viene uccisa con un inganno dall'etrusco Arunte, provocando lo sbandamento e la ritirata delle forze italiche." },
          { n: 12, romano: "XII", titolo: "Il duello finale: Enea e Turno", testo: "Turno decide di affrontare Enea in un duello unico per decidere la sorte della guerra e la mano di Lavinia. Solennemente vengono stipulati i patti alla presenza del re Latino. Tuttavia, Giunone istiga la ninfa Giuturna (sorella di Turno) a rompere la tregua: un presagio ingannevole spinge i Latini a scagliare le lance e la battaglia riprende. Enea viene ferito di nascosto da una freccia, ma viene curato da Venere e rientra in campo cercando solo Turno. Presa dalla disperazione vedendo le mura assediate e credendo Turno già morto, la regina Amata si impicca. Turno, per evitare ulteriori massacri al suo popolo, impone la fine dei combattimenti e affronta finalmente Enea. Giove convince Giunone ad abbandonare la sua ostilità, promettendo che i Troiani si fonderanno con i Latini perdendo il loro nome e che la nuova stirpe romana manterrà la lingua e i costumi italici. Nel duello finale, Enea ferisce gravemente Turno. Turno ammette la sconfitta e supplica Enea di risparmiarlo in nome del vecchio padre Dauno. Enea è quasi tentato dalla clemenza, ma vedendo addosso a Turno il balteo rubato al giovane Pallante, preso dall'ira trapassa il nemico a morte. L'Eneide si chiude con l'anima di Turno che fugge sdegnata verso le tenebre." }
        ]
      }
    ],
    notaPersonaggi: "Nell'Eneide i personaggi presentano spesso una doppia denominazione dovuta alla compenetrazione tra il mondo greco/troiano e il mondo latino/italico, oltre all'uso diffuso dei patronimici e degli epiteti solenni.",
    personaggi: [
      {
        gruppo: "1. I protagonisti troiani",
        voci: [
          { nome: "Enea", alt: ["Anchisiade", "Pius Aeneas"], desc: "Anchisiade: figlio di Anchise. Epiteto supremo: pius (il «pio», colui che è devoto agli dei, alla famiglia e al dovere verso la patria)." },
          { nome: "Ascanio / Iulo", alt: [], desc: "Figlio di Enea e Creusa. Inizialmente chiamato Ascanio, gli viene attribuito il nome Iulo per collegare la sua figura alla nascita della Gens Iulia (la famiglia di Giulio Cesare e Cesare Augusto)." },
          { nome: "Anchise", alt: [], desc: "Anziano padre di Enea, saggio e interprete dei segnali divini; muore a Drepanum e mostra al figlio gli eroi futuri nei Campi Elisi." },
          { nome: "Creusa", alt: [], desc: "Prima moglie di Enea, figlia di Priamo: muore durante la fuga da Troia e gli appare come fantasma." },
          { nome: "Palinuro", alt: [], desc: "Il fedele timoniere della nave di Enea, caduto in mare e sacrificato per un approdo sicuro." },
          { nome: "Eurialo e Niso", alt: [], desc: "Coppia di giovani soldati legati da profonda amicizia e devozione, protagonisti della sortita notturna del libro IX." },
          { nome: "Achemenide", alt: [], desc: "Il compagno di Ulisse dimenticato nell'isola dei Ciclopi e salvato da Enea." },
          { nome: "Pandaro e Bitia", alt: [], desc: "I giganteschi fratelli troiani posti a guardia del campo." }
        ]
      },
      {
        gruppo: "2. I popoli italici e latini",
        voci: [
          { nome: "Turno", alt: ["Daunio"], desc: "Re dei Rutuli, principale antagonista umano di Enea. Daunio: figlio del re Dauno." },
          { nome: "Latino", alt: [], desc: "Anziano re del Lazio e del popolo dei Latini." },
          { nome: "Amata", alt: [], desc: "Regina dei Latini, moglie di Latino e madre di Lavinia; favorevole a Turno, si impicca nel libro XII." },
          { nome: "Lavinia", alt: [], desc: "Figlia di Latino e Amata, promessa sposa di Enea e causa del conflitto." },
          { nome: "Evandro", alt: [], desc: "Re arcade insediatosi sul Palatino, fondatore della città di Pallanteo." },
          { nome: "Pallante", alt: [], desc: "Giovane e valoroso figlio di Evandro, affidato a Enea come un figlio: la sua morte segna il punto di svolta del poema." },
          { nome: "Mezenzio", alt: ["contemptor divum"], desc: "Spietato re etrusco esiliato dal suo popolo per le sue crudeltà: «disprezzatore degli dei»." },
          { nome: "Lauso", alt: [], desc: "Giovane e nobile figlio di Mezenzio, morto per difendere il padre da Enea." },
          { nome: "Camilla", alt: [], desc: "Regina guerriera dei Volsci, consacrata alla dea Diana; uccisa a tradimento dall'etrusco Arunte." },
          { nome: "Drance", alt: [], desc: "Politico latino, oratore rivale di Turno nell'assemblea dei Latini." },
          { nome: "Iarba", alt: [], desc: "Re dei Getuli (Africa) rifiutato da Didone." }
        ]
      },
      {
        gruppo: "3. Cartagine",
        voci: [
          { nome: "Didone / Elissa", alt: ["Infelix Dido"], desc: "La regina fondatrice di Cartagine. Il suo nome fenicio originale è Elissa, mentre Didone è il nome legato alla tradizione della profuga/eroina. Epiteto: «sfortunata Didone» (infelix Dido)." },
          { nome: "Sicheo", alt: [], desc: "Il defunto marito di Didone, assassinato dal cognato Pigmalione." },
          { nome: "Anna", alt: [], desc: "La cara e fedele sorella di Didone, sua confidente." },
          { nome: "Pigmalione", alt: [], desc: "Fratello di Didone, re di Tiro: uccide Sicheo e costringe la sorella alla fuga." }
        ]
      },
      {
        gruppo: "4. Gli dei e le figure divine",
        nota: "Sezione integrativa: nell'Eneide gli dei portano i nomi latini, corrispondenti a quelli greci dell'epica omerica.",
        voci: [
          { nome: "Giove / Zeus", alt: [], desc: "Padre degli dei, garante del Fato e del destino di Roma." },
          { nome: "Giunone / Era", alt: [], desc: "Principale avversaria divina dei Troiani; scatena la tempesta e la guerra nel Lazio, si riconcilia solo nel libro XII." },
          { nome: "Venere / Afrodite", alt: [], desc: "Madre di Enea e sua costante protettrice; ottiene da Vulcano le armi divine." },
          { nome: "Nettuno / Poseidone", alt: [], desc: "Dio del mare: placa la tempesta scatenata da Eolo nel libro I." },
          { nome: "Mercurio / Ermes", alt: [], desc: "Messaggero degli dei: richiama Enea al suo dovere a Cartagine." },
          { nome: "Vulcano / Efesto", alt: [], desc: "Dio fabbro: forgia l'armatura e lo scudo profetico di Enea." },
          { nome: "Eolo", alt: [], desc: "Signore dei venti, corrotto da Giunone." },
          { nome: "Aletto", alt: [], desc: "Una delle Furie, evocata da Giunone per scatenare la guerra." },
          { nome: "Sibilla Cumana", alt: [], desc: "Sacerdotessa di Apollo a Cuma, guida di Enea negli Inferi." },
          { nome: "Caronte, Cerbero, Proserpina", alt: [], desc: "Figure dell'Oltretomba: il traghettatore dello Stige, il cane a tre teste e la regina degli Inferi cui è sacro il ramo d'oro." },
          { nome: "Giuturna", alt: [], desc: "Ninfa sorella di Turno, istigata da Giunone a rompere la tregua." },
          { nome: "Cibele", alt: [], desc: "La «madre degli dei»: trasforma le navi troiane in ninfe marine." }
        ]
      }
    ]
  }
};

/* Ordine di visualizzazione nella sezione Epica */
const EPICA_ORDINE = ["iliade", "odissea", "eneide"];
