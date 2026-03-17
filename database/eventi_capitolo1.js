const eventiCapitolo1 = [

{
id: "cap1_economia_001",
capitolo: 1,
categoria: "economia",
titoloInterno: "Mercanti stranieri",

testo: "Il Ladruncolo compare ai piedi del trono con le mani nelle maniche e il solito mezzo sorriso. \"Maesta, fuori dalle mura c e una carovana che puzza di spezie, seta e affari. Gente straniera, ma con borse pesanti. Se li fate entrare, il mercato si sveglia. Se li lasciate fuori, nessuno vi accusera di ingenuita... almeno fino a quando le botteghe non inizieranno a lamentarsi.\"",
image: "mercanti_carovana.jpg",

sinistra: {
etichetta: "Rifiuta",
testoConseguenza: "Ordini di tenere chiuse le porte. All alba la carovana riparte senza aver venduto nulla. Le casse evitano rischi e dazi incerti, ma in citta resta l amaro di un occasione sfumata.",
image: "mercanti_respinti.jpg",
effetti: { popolo: -6, esercito: 0, oro: 4, fede: 0 }
},

destra: {
etichetta: "Accetta",
testoConseguenza: "Le porte si aprono e il mercato si riempie di lingue straniere, stoffe colorate e monete che cambiano mano in fretta. La citta si anima, anche se una parte dei profitti sfugge al controllo diretto della corona.",
image: "mercanti_mercato.jpg",
effetti: { popolo: 6, esercito: 0, oro: -4, fede: 0 }
}

},

{
id: "cap1_popolo_001",
capitolo: 1,
categoria: "popolo",
titoloInterno: "Festa del raccolto",

testo: "Sebastian si presenta davanti al trono con gli stivali ancora impolverati. \"Maesta, nei villaggi chiedono una festa comune per il raccolto. Non parlano solo di vino e musica. Vogliono un giorno in cui sentirsi parte di qualcosa che non sia soltanto fatica e campi. A volte basta una tavola piena per ricordare a un popolo chi siede sul trono.\"",
image: "festa_raccolto.jpg",

sinistra: {
etichetta: "Nega",
testoConseguenza: "La festa viene annullata. I granai restano chiusi, il denaro non si muove e nei villaggi si torna subito al lavoro. Ma la delusione corre veloce quanto una voce cattiva.",
image: "contadini_delusi.jpg",
effetti: { popolo: -7, esercito: 0, oro: 3, fede: 0 }
},

destra: {
etichetta: "Finanzia",
testoConseguenza: "Le piazze dei villaggi si accendono di fuochi, musica e tavole condivise. Per una notte il regno non appare lontano, ma presente, quasi familiare.",
image: "festa_popolare.jpg",
effetti: { popolo: 7, esercito: 0, oro: -5, fede: 1 }
}

},

{
id: "cap1_religione_001",
capitolo: 1,
categoria: "religione",
titoloInterno: "Restauro del tempio",

testo: "Il Monaco avanza piano, come se pesasse ogni passo. \"Maesta, il tempio antico al centro della citta cade a pezzi. Quando le pietre sacre cedono, la gente non vede solo rovina: vede un cielo che si allontana. Restaurarlo non ridara solo un tetto ai sacerdoti, ma una forma alla speranza del regno.\"",
image: "vescovo_tempio.jpg",

sinistra: {
etichetta: "Rifiuta",
testoConseguenza: "Decidi di non finanziare il restauro. Il tempio resta ferito e silenzioso, e tra i sacerdoti iniziano a circolare parole scomode sul destino del regno.",
image: "tempio_rovinato.jpg",
effetti: { popolo: -1, esercito: 0, oro: 4, fede: -7 }
},

destra: {
etichetta: "Finanzia",
testoConseguenza: "Scalpelli e martelli tornano a lavorare sulle mura del tempio. Quando le campane riprendono a suonare, il clero parla apertamente di benedizione ritrovata.",
image: "tempio_restaurato.jpg",
effetti: { popolo: 2, esercito: 0, oro: -5, fede: 7 }
}

},

{
id: "cap1_guerra_001",
capitolo: 1,
categoria: "guerra",
titoloInterno: "Addestramento delle truppe",

testo: "Il Generale si ferma davanti al trono senza inchinarsi troppo. \"Maesta, i soldati sanno obbedire, ma non basta. Coraggio senza disciplina dura fino al primo scontro vero. Se volete un regno che resti in piedi, serve addestramento. Il ferro si paga, gli errori ancora di piu.\"",
image: "soldati_addestramento.jpg",

sinistra: {
etichetta: "Troppo costoso",
testoConseguenza: "Decidi di rimandare l addestramento. Il tesoro tira un sospiro di sollievo, ma tra i ranghi resta la sensazione di essere carne mandata avanti senza preparazione.",
image: "soldati_scontenti.jpg",
effetti: { popolo: 0, esercito: -7, oro: 3, fede: 0 }
},

destra: {
etichetta: "Approva",
testoConseguenza: "Fuori dalle mura iniziano marce, ordini secchi e giornate di esercitazione. Le truppe diventano piu compatte e il regno mostra finalmente muscoli veri.",
image: "esercito_addestrato.jpg",
effetti: { popolo: 0, esercito: 7, oro: -4, fede: 0 }
}

},

{
id: "cap1_carestia_001",
capitolo: 1,
categoria: "carestia",
titoloInterno: "Granai del regno",

testo: "Sebastian arriva con il volto tirato. \"Maesta, nei villaggi il grano sta finendo. I raccolti sono stati poveri e i granai reali sono ormai l unica cosa che separa la fame dalla rabbia. Se restano chiusi troppo a lungo, la corona sara ricordata piu per le serrature che per la misericordia.\"",
image: "granai_regno.jpg",

sinistra: {
etichetta: "Conserva",
testoConseguenza: "Ordini di mantenere chiusi i granai. Le riserve del regno restano al sicuro, ma nei villaggi iniziano a circolare fame, rancore e cattivi pensieri.",
image: "villaggio_affamato.jpg",
effetti: { popolo: -8, esercito: 0, oro: 4, fede: -1 }
},

destra: {
etichetta: "Aprili",
testoConseguenza: "I sigilli vengono spezzati e carri carichi di farina partono verso i villaggi. La fame si ritira per un po, anche se le scorte della corona si assottigliano visibilmente.",
image: "grano_distribuito.jpg",
effetti: { popolo: 8, esercito: 0, oro: -5, fede: 1 }
}

},

{
id: "cap1_intrighi_001",
capitolo: 1,
categoria: "intrighi",
titoloInterno: "Nobile sospetto",

testo: "Il Ladruncolo emerge da una colonna, come se fosse sempre stato li. \"Maesta, a corte si sorride molto... e ci si fida poco. Un nobile influente sta raccogliendo favori, cene, promesse. Forse cerca solo peso. O forse sta misurando quanto il vostro trono sia davvero saldo.\"",
image: "corte_intrigo.jpg",

sinistra: {
etichetta: "Ignora",
testoConseguenza: "Decidi di non muoverti senza prove. Il nobile continua a tessere relazioni indisturbato e qualcuno, a corte, inizia a chiamare prudenza cio che altri chiamano debolezza.",
image: "nobile_sorriso.jpg",
effetti: { popolo: -1, esercito: -2, oro: 0, fede: 0 }
},

destra: {
etichetta: "Indaga",
testoConseguenza: "Ordini alle guardie di osservare senza farsi vedere. I corridoi del palazzo diventano improvvisamente piu silenziosi: segno che qualcuno ha capito di essere sotto sguardo.",
image: "guardie_indagine.jpg",
effetti: { popolo: 0, esercito: 3, oro: -2, fede: 0 }
}

},

{
id: "cap1_diplomazia_001",
capitolo: 1,
categoria: "diplomazia",
titoloInterno: "Patto con il regno vicino",

testo: "Davanti al trono attende un ambasciatore straniero, immobile come una statua. Il Generale parla per primo. \"Maesta, il regno oltre le colline offre commercio aperto e sostegno militare in caso di guerra. Un alleato puo tenere lontani molti problemi. Ma ogni mano stretta abbastanza a lungo finisce anche per trattenere.\"",
image: "ambasciatore_regno.jpg",

sinistra: {
etichetta: "Rifiuta",
testoConseguenza: "L ambasciatore lascia la corte con un inchino impeccabile e freddo. Il regno conserva la propria autonomia, ma qualcuno inizia a parlare di isolamento.",
image: "ambasciatore_offeso.jpg",
effetti: { popolo: -1, esercito: -3, oro: 0, fede: 0 }
},

destra: {
etichetta: "Accetta",
testoConseguenza: "Il trattato viene firmato tra stendardi e formule solenni. I confini appaiono meno fragili e i mercanti iniziano gia a fare i loro conti.",
image: "trattato_firmato.jpg",
effetti: { popolo: 1, esercito: 3, oro: 2, fede: 0 }
}

},

{
id: "cap1_economia_002",
capitolo: 1,
categoria: "economia",
titoloInterno: "Tassa sulle botteghe",

testo: "Il Ladruncolo si china appena, divertito. \"Maesta, le botteghe della citta lavorano bene. Troppo bene, direi. Una piccola tassa sulle vendite riempirebbe le casse in fretta. Certo, i mercanti vi sorrideranno meno... ma un sorriso non paga i muri del castello.\"",
image: "botteghe_citta.jpg",

sinistra: {
etichetta: "Respingi",
testoConseguenza: "Decidi di non imporre nuove tasse. Le botteghe restano animate e i mercanti parlano della corona con gratitudine, o almeno con meno veleno del solito.",
image: "mercanti_sollevati.jpg",
effetti: { popolo: 4, esercito: 0, oro: -2, fede: 0 }
},

destra: {
etichetta: "Imponila",
testoConseguenza: "La nuova tassa entra in vigore e le guardie iniziano a riscuotere con regolarita. Le casse del regno si gonfiano, mentre nei mercati cresce un brusio sempre meno rispettoso.",
image: "tassa_botteghe.jpg",
effetti: { popolo: -6, esercito: 0, oro: 6, fede: 0 }
}

},

{
id: "cap1_religione_002",
capitolo: 1,
categoria: "religione",
titoloInterno: "Processione solenne",

testo: "Il Monaco alza gli occhi verso il trono. \"Maesta, il popolo ha bisogno di vedere che il cielo non ha dimenticato queste mura. Una grande processione unirebbe città e villaggi sotto un solo segno. A volte la fede, per restare viva, deve camminare in mezzo alla polvere.\"",
image: "processione_solenne.jpg",

sinistra: {
etichetta: "Annulla",
testoConseguenza: "Ordini di annullare la processione. Il clero obbedisce, ma nelle strade piu devote il silenzio pesa piu di un cattivo presagio.",
image: "chiesa_silenziosa.jpg",
effetti: { popolo: -3, esercito: 0, oro: 2, fede: -6 }
},

destra: {
etichetta: "Concedi",
testoConseguenza: "Fiaccole, incenso e canti attraversano la citta fino a tarda sera. La folla guarda in silenzio e il regno appare, almeno per un giorno, protetto da qualcosa di piu alto delle sue mura.",
image: "processione_citta.jpg",
effetti: { popolo: 3, esercito: 0, oro: -3, fede: 6 }
}

},

{
id: "cap1_popolo_002",
capitolo: 1,
categoria: "popolo",
titoloInterno: "Petizione dei villaggi",

testo: "Sebastian depone una pergamena ai piedi del trono. \"Maesta, i capi dei villaggi hanno smesso di lamentarsi separatamente. Adesso parlano insieme. Strade rotte, pozzi crollati, fango ovunque. Quando il regno non arriva fino alle campagne, la gente finisce per credere di essere stata dimenticata.\"",
image: "villaggi_petizione.jpg",

sinistra: {
etichetta: "Rimanda",
testoConseguenza: "Rimandi gli interventi a tempi migliori. Le casse evitano una spesa pesante, ma nei villaggi si consolida l idea che la corona protegga prima la pietra della citta che la vita dei campi.",
image: "villaggio_trascurato.jpg",
effetti: { popolo: -6, esercito: 0, oro: 4, fede: 0 }
},

destra: {
etichetta: "Intervieni",
testoConseguenza: "Operai e materiali vengono inviati fuori dalla capitale. Pozzi e strade tornano utili, e nelle campagne il nome del regno inizia finalmente a suonare meno distante.",
image: "villaggio_riparato.jpg",
effetti: { popolo: 7, esercito: 0, oro: -5, fede: 0 }
}

},

{
id: "cap1_guerra_002",
capitolo: 1,
categoria: "guerra",
titoloInterno: "Torre di guardia al confine",

testo: "Il Generale stende una mappa consumata sul tavolo del trono. \"Maesta, sul confine orientale sono stati visti movimenti insoliti. Non sappiamo ancora chi siano, e questo e gia un problema. Una torre di guardia darebbe occhi al regno. Senza occhi, ci resta solo la sorpresa.\"",
image: "confine_torre_guardia.jpg",

sinistra: {
etichetta: "Rinuncia",
testoConseguenza: "Decidi di rimandare la costruzione. Il tesoro evita la spesa, ma quel tratto di confine resta scoperto come una porta socchiusa nella notte.",
image: "confine_scoperto.jpg",
effetti: { popolo: 0, esercito: -7, oro: 3, fede: 0 }
},

destra: {
etichetta: "Costruiscila",
testoConseguenza: "La torre viene innalzata sulle colline del confine e presto le sentinelle iniziano a scrutare l orizzonte giorno e notte. Il regno sembra meno cieco e piu pronto.",
image: "torre_costruita.jpg",
effetti: { popolo: 0, esercito: 7, oro: -5, fede: 0 }
}

},

{
id: "cap1_carestia_002",
capitolo: 1,
categoria: "carestia",
titoloInterno: "Semi per la prossima stagione",

testo: "Sebastian posa un sacchetto di semi davanti al trono. \"Maesta, molti contadini hanno perso quasi tutto. Se non ricevono aiuto adesso, i campi resteranno vuoti anche il prossimo anno. E la fame, quando mette radici, non si ferma a una sola stagione.\"",
image: "contadini_semi.jpg",

sinistra: {
etichetta: "Nega aiuto",
testoConseguenza: "Decidi di conservare le risorse del regno. I contadini faranno il possibile con quello che resta, ma nei campi si lavora gia con la paura del prossimo fallimento.",
image: "campi_spenti.jpg",
effetti: { popolo: -7, esercito: 0, oro: 3, fede: -1 }
},

destra: {
etichetta: "Sostienili",
testoConseguenza: "Il tesoro reale fornisce semi e attrezzi ai villaggi piu colpiti. Nei campi torna il lavoro, e con esso una forma prudente di speranza.",
image: "campi_rinascita.jpg",
effetti: { popolo: 7, esercito: 0, oro: -5, fede: 1 }
}

},

{
id: "cap1_intrighi_002",
capitolo: 1,
categoria: "intrighi",
titoloInterno: "Lettera intercettata",

testo: "Il Ladruncolo si avvicina al trono tenendo una pergamena tra due dita. \"Maesta, questa lettera e stata intercettata prima che arrivasse a destinazione. Dentro ci sono accuse contro uno dei vostri consiglieri piu vicini. Potrebbe essere fango. Oppure il primo filo di una trama piu grossa.\"",
image: "lettera_intercettata.jpg",

sinistra: {
etichetta: "Bruciala",
testoConseguenza: "Decidi di distruggere la lettera per evitare scandali immediati. A corte tutto sembra restare al proprio posto, ma il sospetto continua a muoversi come fumo tra i corridoi.",
image: "lettera_bruciata.jpg",
effetti: { popolo: 0, esercito: -2, oro: 0, fede: 0 }
},

destra: {
etichetta: "Mostrala",
testoConseguenza: "La lettera viene letta davanti alla corte. Alcuni volti impallidiscono, altri si irrigidiscono. Il trono mostra di non temere la verita, qualunque essa sia.",
image: "corte_sconvolta.jpg",
effetti: { popolo: 0, esercito: 3, oro: -2, fede: 0 }
}

},

{
id: "cap1_diplomazia_002",
capitolo: 1,
categoria: "diplomazia",
titoloInterno: "Dono all'ambasciata",

testo: "Il Generale osserva l emissario straniero con distacco. \"Maesta, un dono alla loro ambasciata verrebbe interpretato come rispetto, forse persino come disponibilita. Non tutti pero ameranno vedere la corona spendere per chi vive oltre i nostri confini.\"",
image: "emissario_dono.jpg",

sinistra: {
etichetta: "Nessun dono",
testoConseguenza: "L emissario riceve parole corrette ma nessun segno concreto di favore. Lascia la corte con modi impeccabili e freddezza evidente.",
image: "emissario_freddo.jpg",
effetti: { popolo: -1, esercito: -2, oro: 3, fede: 0 }
},

destra: {
etichetta: "Invia dono",
testoConseguenza: "Il dono raggiunge l ambasciata accompagnato dai sigilli reali. Il gesto viene accolto con favore e i rapporti tra i due regni diventano improvvisamente piu morbidi.",
image: "dono_ambasciata.jpg",
effetti: { popolo: 1, esercito: 2, oro: -4, fede: 0 }
}

},

{
id: "cap1_mistero_001",
capitolo: 1,
categoria: "popolo",
titoloInterno: "Creatura nei boschi",

testo: "Sebastian arriva agitato, quasi senza attendere il permesso di parlare. \"Maesta, dai villaggi vicino alla foresta arrivano storie sempre piu strane. Bestiame in fuga, pollai svuotati, bambini che non vogliono piu uscire al tramonto. Dicono di aver visto una piccola creatura alata. Alcuni sussurrano una parola che non si dovrebbe pronunciare con leggerezza: drago.\"",
image: "creatura_bosco.jpg",

sinistra: {
etichetta: "Ignora",
testoConseguenza: "Decidi di trattare la faccenda come superstizione contadina. Ma la paura, quando non viene smentita, si allarga piu in fretta della verita.",
image: "villaggio_paura.jpg",
effetti: { popolo: -4, esercito: 0, oro: 0, fede: -1 }
},

destra: {
etichetta: "Invia soldati",
testoConseguenza: "Una pattuglia entra nella foresta e torna dopo giorni con la carcassa di una creatura mai vista prima. Nei villaggi si torna a dormire con le porte socchiuse, non sprangate.",
image: "creatura_cacciata.jpg",
effetti: { popolo: 4, esercito: -2, oro: -2, fede: 0 }
}

},

{
id: "cap1_mistero_002",
capitolo: 1,
categoria: "intrighi",
titoloInterno: "Lo stregone errante",

testo: "Il Monaco parla a voce bassa, come se temesse perfino le pareti. \"Maesta, nei villaggi del nord si e fermato un uomo che molti chiamano stregone. Dice di leggere il destino del regno e attira gente con parole che sanno di promessa e di inganno. Il clero teme che il popolo inizi ad ascoltare altre voci oltre a quelle del tempio.\"",
image: "stregone_oscuro.jpg",

sinistra: {
etichetta: "Scaccialo",
testoConseguenza: "Ordini che lo straniero venga allontanato dal regno. Il clero approva con sollievo, ma alcuni contadini avrebbero voluto ascoltare ancora quelle promesse venute dal nulla.",
image: "stregone_cacciato.jpg",
effetti: { popolo: -2, esercito: 0, oro: 0, fede: 4 }
},

destra: {
etichetta: "Lascialo parlare",
testoConseguenza: "Permetti allo stregone di restare. Le sue profezie attirano curiosi e inquieti, mentre il tempio osserva tutto con crescente sospetto.",
image: "stregone_profezia.jpg",
effetti: { popolo: 2, esercito: 0, oro: 2, fede: -4 }
}

},

{
id: "cap1_mistero_003",
capitolo: 1,
categoria: "mistero",
titoloInterno: "Il draghetto",

testo: "Il Generale entra nella sala del trono seguito da due soldati affaticati. Tra loro, legata con corde troppo grandi per il suo corpo, si agita una piccola creatura alata. \"Maesta, l abbiamo trovata nei boschi. I veterani giurano di non aver mai visto nulla di simile. Alcuni gia la chiamano giovane drago.\"",
image: "draghetto_catturato.jpg",

sinistra: {
etichetta: "Liberalo",
testoConseguenza: "Ordini di riportare la creatura nella foresta e lasciarla andare. Nei villaggi si racconta della tua clemenza, anche se una parte delle guardie considera la decisione uno spreco di occasione.",
image: "draghetto_libero.jpg",
effetti: { popolo: 4, esercito: -1, oro: 0, fede: 1 }
},

destra: {
etichetta: "Studialo",
testoConseguenza: "La creatura viene trattenuta nel castello sotto stretta sorveglianza. Studiosi, curiosi e opportunisti iniziano ad affacciarsi alla tua corte.",
image: "draghetto_studiato.jpg",
effetti: { popolo: -1, esercito: 1, oro: 3, fede: -1 }
}

},

{
id: "cap1_intrighi_003",
capitolo: 1,
categoria: "intrighi",
titoloInterno: "Lo sgherro errante",

testo: "Il Ladruncolo entra accompagnato da un uomo incappucciato che evita di alzare lo sguardo. \"Maesta, questo dice di saper fare lavori che non finiscono nei registri e non portano stemmi. Missioni discrete, problemi risolti senza testimoni. Non e il genere di uomo che si mostra alla luce... ma a volte e proprio per questo che torna utile.\"",
image: "sgherro_corte.jpg",

sinistra: {
etichetta: "Caccialo",
testoConseguenza: "Ordini allo sgherro di lasciare il castello. La corte resta pulita agli occhi del regno, anche se rinunci a uno strumento che molti sovrani userebbero senza pensarci due volte.",
image: "sgherro_cacciato.jpg",
effetti: { popolo: 2, esercito: 0, oro: 0, fede: 2 }
},

destra: {
etichetta: "Assumilo",
testoConseguenza: "Accetti i servizi dell uomo. Alcuni problemi iniziano a sparire nel silenzio, ma non sempre il silenzio e il segno di una coscienza tranquilla.",
image: "sgherro_assunto.jpg",
effetti: { popolo: -2, esercito: 2, oro: 2, fede: -1 }
}

},

{
id: "cap1_intrighi_004",
capitolo: 1,
categoria: "intrighi",
titoloInterno: "Assassino a corte",

testo: "Il Generale entra con passo duro, seguito da una guardia che trascina un uomo incappucciato. \"Maesta, lo abbiamo fermato nei corridoi del palazzo. Aveva un pugnale avvelenato e una scusa pessima. Dice di essere solo un mercenario, ma nessun mercenario entra qui da solo.\"",
image: "assassino_corte.jpg",

sinistra: {
etichetta: "Interrogalo",
testoConseguenza: "L uomo viene portato nelle segrete e interrogato a lungo. Dalle sue parole emergono nomi, mezze verita e ombre che non rassicurano affatto.",
image: "assassino_interrogato.jpg",
effetti: { popolo: 0, esercito: 3, oro: -2, fede: 0 }
},

destra: {
etichetta: "Giustizialo",
testoConseguenza: "Ordini l esecuzione immediata. La corte comprende il messaggio senza bisogno di altre spiegazioni: chi alza la mano contro il trono non avra una seconda occasione.",
image: "assassino_giustizia.jpg",
effetti: { popolo: 1, esercito: 2, oro: 0, fede: 0 }
}

},

{
id: "cap1_mistero_004",
capitolo: 1,
categoria: "religione",
titoloInterno: "La reliquia ritrovata",

testo: "Il Monaco entra portando con entrambe le mani un piccolo scrigno chiuso. \"Maesta, alcuni pellegrini hanno trovato questo oggetto tra le rovine di un santuario dimenticato. Gia si parla di reliquia, di segni, di grazia. Ma la fede del popolo corre piu veloce della certezza.\"",
image: "reliquia_antica.jpg",

sinistra: {
etichetta: "Conservala",
testoConseguenza: "La reliquia viene custodita nel tempio della capitale. I fedeli iniziano presto a raccontare guarigioni, sogni e piccoli miracoli.",
image: "reliquia_tempio.jpg",
effetti: { popolo: 2, esercito: 0, oro: 0, fede: 5 }
},

destra: {
etichetta: "Vendila",
testoConseguenza: "Decidi di cedere l oggetto a un ricco collezionista straniero. Le casse si riempiono rapidamente, ma il clero parla della scelta come di una ferita volontaria.",
image: "reliquia_venduta.jpg",
effetti: { popolo: -2, esercito: 0, oro: 5, fede: -5 }
}

},

{
id: "cap1_popolo_003",
capitolo: 1,
categoria: "popolo",
titoloInterno: "Voci di rivolta",

testo: "Sebastian entra con il fiato corto e lo sguardo inquieto. \"Maesta, in alcuni villaggi non si mormora piu soltanto. Si parla apertamente contro la corona. Non e ancora una rivolta, ma la rabbia ha smesso di nascondersi.\"",
image: "villaggi_rivolta.jpg",

sinistra: {
etichetta: "Calmali",
testoConseguenza: "Invii emissari, parole misurate e qualche provvista. I villaggi si placano, almeno per ora, ma il tesoro sente il peso della pace comprata in fretta.",
image: "villaggi_calmi.jpg",
effetti: { popolo: 6, esercito: 0, oro: -4, fede: 0 }
},

destra: {
etichetta: "Invia soldati",
testoConseguenza: "Le guardie ristabiliscono l ordine con disciplina e minaccia. La protesta si spegne rapidamente, ma sotto la cenere resta qualcosa che non dimentica.",
image: "soldati_villaggi.jpg",
effetti: { popolo: -4, esercito: 3, oro: -1, fede: 0 }
}

},

{
id: "cap1_economia_003",
capitolo: 1,
categoria: "economia",
titoloInterno: "Il grande mercante",

testo: "Il Ladruncolo sorride indicando un uomo coperto di sete e anelli. \"Maesta, quest uomo muove carovane come altri muovono pedine. Dice di poter far scorrere ricchezza nel regno, ma vuole privilegi commerciali. E gli uomini che chiedono privilegi, di solito, non si accontentano mai di uno soltanto.\"",
image: "mercante_ricco.jpg",

sinistra: {
etichetta: "Rifiuta",
testoConseguenza: "Il mercante lascia il regno con un inchino elegante e uno sguardo gelido. Il mercato resta sotto controllo della corona, ma l occasione di un guadagno rapido svanisce con lui.",
image: "mercante_offeso.jpg",
effetti: { popolo: 1, esercito: 0, oro: -2, fede: 0 }
},

destra: {
etichetta: "Accetta",
testoConseguenza: "Le sue carovane iniziano a percorrere le tue strade e l oro circola con maggiore velocita. Ma insieme alla ricchezza cresce anche il peso di un uomo che sa di essere diventato utile.",
image: "carovane_commercio.jpg",
effetti: { popolo: -1, esercito: 0, oro: 6, fede: 0 }
}

},

{
id: "cap1_economia_004",
capitolo: 1,
categoria: "economia",
titoloInterno: "Il grande mercante",

testo: "Il Ladruncolo torna alla carica con lo stesso uomo ben vestito al suo fianco. \"Maesta, certi mercanti non bussano due volte senza un motivo. Questo vuole sapere se il regno preferisce restare prudente... o diventare ricco abbastanza da farsi notare anche oltre il mare.\"",
image: "mercante_ricco.jpg",

sinistra: {
etichetta: "Rifiuta",
testoConseguenza: "Respingi la proposta e il mercante capisce di non avere spazio per imporre le proprie condizioni. La corona mantiene il controllo, ma rinuncia ancora una volta a un afflusso importante di denaro.",
image: "mercante_offeso.jpg",
effetti: { popolo: 1, esercito: 0, oro: -2, fede: 0 }
},

destra: {
etichetta: "Accetta",
testoConseguenza: "Le strade del regno si aprono al suo commercio e le entrate crescono in fretta. In cambio, il mercante ottiene un peso che in futuro potrebbe pretendere di trasformare in potere.",
image: "carovane_commercio.jpg",
effetti: { popolo: -1, esercito: 0, oro: 6, fede: 0 }
}

},

{
id: "cap1_mistero_005",
capitolo: 1,
categoria: "carestia",
titoloInterno: "La bestia nei campi",

testo: "Sebastian arriva trafelato e senza fiato. \"Maesta, nei villaggi del sud i campi sono stati devastati nella notte. Solchi profondi, recinti spezzati, bestiame disperso. I contadini parlano di una bestia uscita dalla foresta. E quando la paura trova impronte abbastanza grandi, nessuno ride piu.\"",
image: "bestia_campi.jpg",

sinistra: {
etichetta: "Ignora",
testoConseguenza: "Decidi di trattare il racconto come esagerazione contadina. Ma i campi restano distrutti e nei villaggi cresce l idea che il pericolo interessi solo a chi lo subisce.",
image: "campi_distrutti.jpg",
effetti: { popolo: -5, esercito: 0, oro: -1, fede: -1 }
},

destra: {
etichetta: "Caccia la bestia",
testoConseguenza: "Una spedizione parte verso la foresta e torna solo dopo giorni con la prova della caccia compiuta. Nei villaggi si festeggia meno la vittoria che la fine dell attesa.",
image: "bestia_cacciata.jpg",
effetti: { popolo: 4, esercito: -2, oro: -2, fede: 0 }
}

},

{
id: "cap1_religione_003",
capitolo: 1,
categoria: "religione",
titoloInterno: "Presagio oscuro",

testo: "Il Monaco entra con il volto pallido e le mani strette nelle maniche. \"Maesta, questa notte, durante la preghiera, tutte le candele del tempio si sono spente da sole. I sacerdoti parlano di un segno oscuro. Io parlo solo di paura... ma la paura del clero, se cresce, finisce sempre per raggiungere anche il popolo.\"",
image: "presagio_tempio.jpg",

sinistra: {
etichetta: "Ignora",
testoConseguenza: "Decidi di non dare peso al presagio. Il regno continua la sua vita, ma tra i fedeli resta l inquietudine di un silenzio non spiegato.",
image: "tempio_silenzioso.jpg",
effetti: { popolo: -2, esercito: 0, oro: 0, fede: -4 }
},

destra: {
etichetta: "Organizza rituali",
testoConseguenza: "Il clero avvia giorni di preghiera, digiuno e rituali pubblici. I fedeli si rassicurano, anche se il costo delle cerimonie si fa sentire nelle casse.",
image: "rituale_tempio.jpg",
effetti: { popolo: 1, esercito: 0, oro: -2, fede: 5 }
}

},

{
id: "cap1_guerra_004",
capitolo: 1,
categoria: "guerra",
titoloInterno: "Pattuglia scomparsa",

testo: "Il Generale parla senza giri di parole. \"Maesta, una pattuglia inviata al confine nord non e rientrata. Nessun messaggero, nessun segnale. Potrebbero essere briganti. Potrebbe essere qualcosa di peggio. In casi come questo, il silenzio e gia una notizia.\"",
image: "pattuglia_scomparsa.jpg",

sinistra: {
etichetta: "Invia ricerca",
testoConseguenza: "Una seconda pattuglia viene mandata lungo lo stesso percorso. Dopo giorni di ricerche vengono trovate tracce di lotta e segni che qualcosa, lassu, si sta muovendo davvero.",
image: "ricerca_pattuglia.jpg",
effetti: { popolo: 0, esercito: 3, oro: -2, fede: 0 }
},

destra: {
etichetta: "Rafforza confine",
testoConseguenza: "Decidi di non inseguire l ignoto e di blindare subito il confine. Le difese vengono rinforzate e i soldati si preparano al peggio.",
image: "confine_rafforzato.jpg",
effetti: { popolo: 0, esercito: 4, oro: -3, fede: 0 }
}

},

{
id: "cap1_intrighi_005",
capitolo: 1,
categoria: "intrighi",
titoloInterno: "Briganti nelle strade",

testo: "Il Generale entra con espressione dura. \"Maesta, alcune carovane sono state assalite lungo la strada reale. Non si tratta di disperati di passaggio. Una banda si e stabilita nelle colline e sta capendo fin dove puo spingersi senza risposta.\"",
image: "briganti_strada.jpg",

sinistra: {
etichetta: "Invia soldati",
testoConseguenza: "Una spedizione militare viene inviata nelle colline. Dopo scontri duri ma rapidi, la banda viene dispersa e la strada torna percorribile.",
image: "soldati_briganti.jpg",
effetti: { popolo: 3, esercito: -2, oro: -2, fede: 0 }
},

destra: {
etichetta: "Ignora",
testoConseguenza: "Decidi di non intervenire subito. I briganti capiscono il segnale e alcune carovane iniziano a evitare il regno, portandosi via denaro e fiducia.",
image: "carovana_paura.jpg",
effetti: { popolo: -3, esercito: 0, oro: -3, fede: 0 }
}

},

{
id: "cap1_mistero_006",
capitolo: 1,
categoria: "religione",
titoloInterno: "Lo studioso straniero",

testo: "Il Monaco presenta uno straniero dai modi misurati e dagli abiti insoliti. \"Maesta, quest uomo viaggia tra i regni raccogliendo testi antichi e conoscenze dimenticate. Chiede accesso alle biblioteche e agli archivi del tempio. Dice di cercare sapere. Io vi dico soltanto che il sapere, a volte, entra in punta di piedi e poi cambia tutto.\"",
image: "studioso_straniero.jpg",

sinistra: {
etichetta: "Rifiuta",
testoConseguenza: "Decidi di non concedergli accesso. Lo studioso si congeda con educazione e lascia il regno portando via con se qualunque scoperta fosse venuto a cercare.",
image: "studioso_partenza.jpg",
effetti: { popolo: 0, esercito: 0, oro: 0, fede: 1 }
},

destra: {
etichetta: "Accetta",
testoConseguenza: "Lo studioso trascorre mesi tra pergamene, polvere e testi dimenticati. In poco tempo iniziano a circolare voci su cio che potrebbe aver scoperto tra le pagine piu antiche.",
image: "studioso_biblioteca.jpg",
effetti: { popolo: 1, esercito: 0, oro: -1, fede: 2 }
}

}

];
