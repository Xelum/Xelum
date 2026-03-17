const IMG_PATH = "img_capitoli/capitolo_1/";

const eventiCapitolo1 = [

{
id: "cap1_economia_001",
capitolo: 1,
categoria: "economia",
titoloInterno: "Mercanti stranieri",

testo: "Il Ladruncolo si avvicina al trono con un sorriso furbo. \"Maestà, fuori dalle mura c'è una carovana straniera. Portano stoffe, spezie e monete. Se li fate entrare, il mercato si riempirà di vita. Se li respingete, il regno correrà meno rischi... ma molti mercanti non saranno contenti.\"",
image: IMG_PATH + "carovana_evento.png",

sinistra: {
etichetta: "Rifiuta",
testoConseguenza: "Ordini di tenere chiuse le porte. La carovana riparte all'alba e la città resta tranquilla, ma molti commercianti speravano in nuovi affari.",
image: IMG_PATH + "carovana_rifiuta.png",
effetti: { popolo: -6, esercito: 0, oro: 4, fede: 0 }
},

destra: {
etichetta: "Accetta",
testoConseguenza: "Le porte si aprono e il mercato si riempie di persone, voci e colori. La città è felice, ma una parte dei guadagni sfugge al controllo della corona.",
image: IMG_PATH + "carovana_accetta.png",
effetti: { popolo: 6, esercito: 0, oro: -4, fede: 0 }
}

},

{
id: "cap1_popolo_001",
capitolo: 1,
categoria: "popolo",
titoloInterno: "Festa del raccolto",

testo: "Sebastian arriva davanti al trono con aria seria. \"Maestà, nei villaggi chiedono di organizzare una festa per il raccolto. Non vogliono solo mangiare e cantare: vogliono sentirsi parte del regno.\"",
image: IMG_PATH + "festa_raccolto_evento.png",

sinistra: {
etichetta: "Nega",
testoConseguenza: "Decidi di non organizzare la festa. Il denaro resta nelle casse, ma nei villaggi cresce la delusione.",
image: IMG_PATH + "festa_raccolto_rifiuta.png",
effetti: { popolo: -7, esercito: 0, oro: 3, fede: 0 }
},

destra: {
etichetta: "Finanzia",
testoConseguenza: "La festa riempie i villaggi di musica, fuochi e tavole piene. Il popolo si sente più vicino alla corona.",
image: IMG_PATH + "festa_raccolto_accetta.png",
effetti: { popolo: 7, esercito: 0, oro: -5, fede: 1 }
}

},

{
id: "cap1_religione_001",
capitolo: 1,
categoria: "religione",
titoloInterno: "Restauro del tempio",

testo: "Il Monaco entra nella sala del trono con passo lento. \"Maestà, il tempio antico nel cuore della città è ormai in rovina. Se resterà così, molti penseranno che gli dèi abbiano abbandonato il regno.\"",
image: IMG_PATH + "vescovo_tempio.jpg",

sinistra: {
etichetta: "Rifiuta",
testoConseguenza: "Decidi di non finanziare il restauro. Il tempio resta in silenzio e i sacerdoti iniziano a parlare con preoccupazione del futuro del regno.",
image: IMG_PATH + "tempio_rovinato.jpg",
effetti: { popolo: -1, esercito: 0, oro: 4, fede: -7 }
},

destra: {
etichetta: "Finanzia",
testoConseguenza: "Il tempio viene sistemato e le campane tornano a suonare. Il clero dice che gli dèi proteggono ancora il tuo regno.",
image: IMG_PATH + "tempio_restaurato.jpg",
effetti: { popolo: 2, esercito: 0, oro: -5, fede: 7 }
}

},

{
id: "cap1_guerra_001",
capitolo: 1,
categoria: "guerra",
titoloInterno: "Addestramento delle truppe",

testo: "Il Generale si presenta davanti al trono con tono fermo. \"Maestà, i soldati sono coraggiosi, ma hanno bisogno di più addestramento. Se arriverà una guerra, così come sono adesso rischiano di non essere pronti.\"",
image: IMG_PATH + "soldati_addestramento.jpg",

sinistra: {
etichetta: "Troppo costoso",
testoConseguenza: "Decidi di rimandare l'addestramento. Il tesoro risparmia denaro, ma i soldati perdono fiducia.",
image: IMG_PATH + "soldati_scontenti.jpg",
effetti: { popolo: 0, esercito: -7, oro: 3, fede: 0 }
},

destra: {
etichetta: "Approva",
testoConseguenza: "I campi fuori dalle mura si riempiono di esercitazioni. L'esercito diventa più forte e il regno appare meglio protetto.",
image: IMG_PATH + "esercito_addestrato.jpg",
effetti: { popolo: 0, esercito: 7, oro: -4, fede: 0 }
}

},

{
id: "cap1_carestia_001",
capitolo: 1,
categoria: "carestia",
titoloInterno: "Granai del regno",

testo: "Sebastian entra con il volto teso. \"Maestà, nei villaggi il grano sta finendo. I raccolti sono stati scarsi e la gente chiede di aprire i granai reali. Se aspettiamo troppo, la fame diventerà rabbia.\"",
image: IMG_PATH + "granai_regno.jpg",

sinistra: {
etichetta: "Conserva",
testoConseguenza: "Ordini di tenere chiusi i granai. Le scorte del regno restano al sicuro, ma nei villaggi iniziano a diffondersi fame e malcontento.",
image: IMG_PATH + "villaggio_affamato.jpg",
effetti: { popolo: -8, esercito: 0, oro: 4, fede: -1 }
},

destra: {
etichetta: "Aprili",
testoConseguenza: "I granai vengono aperti e il grano viene distribuito ai villaggi. Il popolo torna a respirare, anche se le riserve del regno si riducono.",
image: IMG_PATH + "grano_distribuito.jpg",
effetti: { popolo: 8, esercito: 0, oro: -5, fede: 1 }
}

},

{
id: "cap1_intrighi_001",
capitolo: 1,
categoria: "intrighi",
titoloInterno: "Nobile sospetto",

testo: "Il Ladruncolo compare vicino al trono e abbassa la voce. \"Maestà, a corte si mormora molto. Un nobile influente sta raccogliendo sostenitori. Forse è solo ambizioso... oppure sta preparando qualcosa contro di voi.\"",
image: IMG_PATH + "corte_intrigo.jpg",

sinistra: {
etichetta: "Ignora",
testoConseguenza: "Decidi di non agire senza prove. Il nobile continua a muoversi liberamente e qualcuno inizia a pensare che il trono sia troppo debole.",
image: IMG_PATH + "nobile_sorriso.jpg",
effetti: { popolo: -1, esercito: -2, oro: 0, fede: 0 }
},

destra: {
etichetta: "Indaga",
testoConseguenza: "Ordini alle guardie di indagare in segreto. A corte cresce la tensione, ma tutti capiscono che il trono non chiude gli occhi davanti ai sospetti.",
image: IMG_PATH + "guardie_indagine.jpg",
effetti: { popolo: 0, esercito: 3, oro: -2, fede: 0 }
}

},

{
id: "cap1_diplomazia_001",
capitolo: 1,
categoria: "diplomazia",
titoloInterno: "Patto con il regno vicino",

testo: "Davanti al trono c'è un ambasciatore straniero. Il Generale parla con tono serio. \"Maestà, il regno oltre le colline propone un patto: commercio aperto e aiuto militare in caso di guerra. Un alleato può essere utile, ma ogni accordo ha sempre un prezzo.\"",
image: IMG_PATH + "ambasciatore_regno.jpg",

sinistra: {
etichetta: "Rifiuta",
testoConseguenza: "L'ambasciatore lascia la corte con freddezza. Il regno resta indipendente, ma alcuni iniziano a temere l'isolamento.",
image: IMG_PATH + "ambasciatore_offeso.jpg",
effetti: { popolo: -1, esercito: -3, oro: 0, fede: 0 }
},

destra: {
etichetta: "Accetta",
testoConseguenza: "Il trattato viene firmato. I commerci aumentano e il regno sembra meno fragile agli occhi dei vicini.",
image: IMG_PATH + "trattato_firmato.jpg",
effetti: { popolo: 1, esercito: 3, oro: 2, fede: 0 }
}

},

{
id: "cap1_economia_002",
capitolo: 1,
categoria: "economia",
titoloInterno: "Tassa sulle botteghe",

testo: "Il Ladruncolo si avvicina con aria complice. \"Maestà, le botteghe della città stanno guadagnando bene. Una piccola tassa sulle vendite riempirebbe in fretta le casse del regno. Certo... i mercanti non saranno felici.\"",
image: IMG_PATH + "botteghe_citta.jpg",

sinistra: {
etichetta: "Respingi",
testoConseguenza: "Decidi di non imporre nuove tasse. I mercanti tirano un sospiro di sollievo e continuano a lavorare con serenità.",
image: IMG_PATH + "mercanti_sollevati.jpg",
effetti: { popolo: 4, esercito: 0, oro: -2, fede: 0 }
},

destra: {
etichetta: "Imponila",
testoConseguenza: "La nuova tassa entra in vigore e le casse del regno si riempiono. Nei mercati, però, cresce il malumore.",
image: IMG_PATH + "tassa_botteghe.jpg",
effetti: { popolo: -6, esercito: 0, oro: 6, fede: 0 }
}

},

{
id: "cap1_religione_002",
capitolo: 1,
categoria: "religione",
titoloInterno: "Processione solenne",

testo: "Il Monaco alza lo sguardo verso il trono. \"Maestà, il popolo ha bisogno di vedere che gli dèi camminano ancora accanto al regno. Una grande processione nelle strade potrebbe unire città e villaggi sotto un solo segno di fede.\"",
image: IMG_PATH + "processione_solenne.jpg",

sinistra: {
etichetta: "Annulla",
testoConseguenza: "Ordini di annullare la processione. Il clero obbedisce, ma molti fedeli vivono la decisione come un brutto segno.",
image: IMG_PATH + "chiesa_silenziosa.jpg",
effetti: { popolo: -3, esercito: 0, oro: 2, fede: -6 }
},

destra: {
etichetta: "Concedi",
testoConseguenza: "La processione attraversa la città tra canti, fiaccole e incenso. La fede del popolo si rafforza sotto gli occhi di tutti.",
image: IMG_PATH + "processione_citta.jpg",
effetti: { popolo: 3, esercito: 0, oro: -3, fede: 6 }
}

},

{
id: "cap1_popolo_002",
capitolo: 1,
categoria: "popolo",
titoloInterno: "Petizione dei villaggi",

testo: "Sebastian posa una pergamena ai piedi del trono. \"Maestà, i capi dei villaggi chiedono aiuto. Le strade sono rotte, i pozzi crollano e la gente inizia a chiedersi se il regno si ricordi davvero di loro.\"",
image: IMG_PATH + "villaggi_petizione.jpg",

sinistra: {
etichetta: "Rimanda",
testoConseguenza: "Rimandi i lavori a tempi migliori. Il tesoro evita una grossa spesa, ma nei villaggi cresce l'idea di essere stati dimenticati.",
image: IMG_PATH + "villaggio_trascurato.jpg",
effetti: { popolo: -6, esercito: 0, oro: 4, fede: 0 }
},

destra: {
etichetta: "Intervieni",
testoConseguenza: "Operai e muratori vengono inviati nei villaggi. Pozzi e strade tornano utili alla gente, e la corona viene vista con maggiore rispetto.",
image: IMG_PATH + "villaggio_riparato.jpg",
effetti: { popolo: 7, esercito: 0, oro: -5, fede: 0 }
}

},

{
id: "cap1_guerra_002",
capitolo: 1,
categoria: "guerra",
titoloInterno: "Torre di guardia al confine",

testo: "Il Generale stende una mappa davanti al trono. \"Maestà, al confine orientale sono stati notati movimenti sospetti. Una torre di guardia darebbe occhi al regno, ma costruirla richiederà uomini e oro.\"",
image: IMG_PATH + "confine_torre_guardia.jpg",

sinistra: {
etichetta: "Rinuncia",
testoConseguenza: "Decidi di rimandare la costruzione. Il regno risparmia denaro, ma quel tratto di confine resta scoperto.",
image: IMG_PATH + "confine_scoperto.jpg",
effetti: { popolo: 0, esercito: -7, oro: 3, fede: 0 }
},

destra: {
etichetta: "Costruiscila",
testoConseguenza: "La torre viene costruita sulle colline del confine. Le sentinelle controllano giorno e notte e il regno appare più sicuro.",
image: IMG_PATH + "torre_costruita.jpg",
effetti: { popolo: 0, esercito: 7, oro: -5, fede: 0 }
}

},

{
id: "cap1_carestia_002",
capitolo: 1,
categoria: "carestia",
titoloInterno: "Semi per la prossima stagione",

testo: "Sebastian posa un sacchetto di semi davanti al trono. \"Maestà, molti contadini hanno perso quasi tutto. Senza nuovi semi e attrezzi, anche il prossimo raccolto rischia di andare male.\"",
image: IMG_PATH + "contadini_semi.jpg",

sinistra: {
etichetta: "Nega aiuto",
testoConseguenza: "Decidi di conservare le risorse del regno. I contadini proveranno a cavarsela da soli, ma il futuro dei campi resta incerto.",
image: IMG_PATH + "campi_spenti.jpg",
effetti: { popolo: -7, esercito: 0, oro: 3, fede: -1 }
},

destra: {
etichetta: "Sostienili",
testoConseguenza: "Il regno fornisce semi e attrezzi ai villaggi. I contadini tornano nei campi con nuova speranza.",
image: IMG_PATH + "campi_rinascita.jpg",
effetti: { popolo: 7, esercito: 0, oro: -5, fede: 1 }
}

},

{
id: "cap1_intrighi_002",
capitolo: 1,
categoria: "intrighi",
titoloInterno: "Lettera intercettata",

testo: "Il Ladruncolo si avvicina al trono con una pergamena piegata. \"Maestà, una delle mie conoscenze ha intercettato questa lettera. Contiene accuse contro un vostro consigliere. Potrebbe essere una bugia... oppure l'inizio di un problema più grande.\"",
image: IMG_PATH + "lettera_intercettata.jpg",

sinistra: {
etichetta: "Bruciala",
testoConseguenza: "Decidi di distruggere la lettera per evitare scandali. La corte resta calma in apparenza, ma i sospetti continuano a circolare.",
image: IMG_PATH + "lettera_bruciata.jpg",
effetti: { popolo: 0, esercito: -2, oro: 0, fede: 0 }
},

destra: {
etichetta: "Mostrala",
testoConseguenza: "La lettera viene letta davanti alla corte. Alcuni nobili si agitano e tutti capiscono che il trono non teme la verità.",
image: IMG_PATH + "corte_sconvolta.jpg",
effetti: { popolo: 0, esercito: 3, oro: -2, fede: 0 }
}

},

{
id: "cap1_diplomazia_002",
capitolo: 1,
categoria: "diplomazia",
titoloInterno: "Dono all'ambasciata",

testo: "Il Generale osserva l'emissario straniero. \"Maestà, un dono alla loro ambasciata sarebbe visto come un gesto di rispetto. Potrebbe rafforzare i rapporti tra i nostri regni, ma non tutti ameranno una corona troppo generosa.\"",
image: IMG_PATH + "emissario_dono.jpg",

sinistra: {
etichetta: "Nessun dono",
testoConseguenza: "L'emissario riceve solo parole formali e lascia la corte con freddezza. Il regno risparmia denaro, ma perde una buona occasione diplomatica.",
image: IMG_PATH + "emissario_freddo.jpg",
effetti: { popolo: -1, esercito: -2, oro: 3, fede: 0 }
},

destra: {
etichetta: "Invia dono",
testoConseguenza: "Il dono viene accolto con favore. L'ambasciata straniera guarda ora il tuo regno con maggiore rispetto.",
image: IMG_PATH + "dono_ambasciata.jpg",
effetti: { popolo: 1, esercito: 2, oro: -4, fede: 0 }
}

},

{
id: "cap1_mistero_001",
capitolo: 1,
categoria: "popolo",
titoloInterno: "Creatura nei boschi",

testo: "Sebastian arriva agitato. \"Maestà, nei villaggi vicino alla foresta girano strane voci. I contadini parlano di una piccola creatura alata che ruba galline e spaventa il bestiame. Alcuni dicono che sia un piccolo drago.\"",
image: IMG_PATH + "creatura_bosco.jpg",

sinistra: {
etichetta: "Ignora",
testoConseguenza: "Decidi di ignorare le voci. Forse è solo paura... ma nei villaggi l'ansia continua a crescere.",
image: IMG_PATH + "villaggio_paura.jpg",
effetti: { popolo: -4, esercito: 0, oro: 0, fede: -1 }
},

destra: {
etichetta: "Invia soldati",
testoConseguenza: "Una pattuglia viene mandata nella foresta. Dopo alcuni giorni torna con la carcassa di una strana creatura. I villaggi tornano a sentirsi al sicuro.",
image: IMG_PATH + "creatura_cacciata.jpg",
effetti: { popolo: 4, esercito: -2, oro: -2, fede: 0 }
}

},

{
id: "cap1_mistero_002",
capitolo: 1,
categoria: "intrighi",
titoloInterno: "Lo stregone errante",

testo: "Il Monaco parla a bassa voce. \"Maestà, nei villaggi del nord è arrivato un uomo misterioso. Alcuni lo chiamano stregone. Dice di poter prevedere il destino del regno, ma il clero teme che le sue arti siano oscure.\"",
image: IMG_PATH + "stregone_oscuro.jpg",

sinistra: {
etichetta: "Scaccialo",
testoConseguenza: "Ordini che lo stregone venga cacciato. Il clero approva, ma alcuni contadini erano affascinati dalle sue parole.",
image: IMG_PATH + "stregone_cacciato.jpg",
effetti: { popolo: -2, esercito: 0, oro: 0, fede: 4 }
},

destra: {
etichetta: "Lascialo parlare",
testoConseguenza: "Permetti allo stregone di restare. Le sue profezie attirano curiosi, ma il clero osserva tutto con crescente sospetto.",
image: IMG_PATH + "stregone_profezia.jpg",
effetti: { popolo: 2, esercito: 0, oro: 2, fede: -4 }
}

},

{
id: "cap1_mistero_003",
capitolo: 1,
categoria: "mistero",
titoloInterno: "Il draghetto",

testo: "Il Generale entra nella sala del trono accompagnato da due soldati. Tra loro si agita una piccola creatura alata legata con delle corde. \"Maestà, i soldati l'hanno catturata nei boschi. Alcuni giurano che sia un giovane drago.\"",
image: IMG_PATH + "draghetto_catturato.jpg",

sinistra: {
etichetta: "Liberalo",
testoConseguenza: "Ordini di liberare la creatura nei boschi. Il popolo racconta la tua bontà, ma alcuni soldati pensano che avresti potuto sfruttare la scoperta.",
image: IMG_PATH + "draghetto_libero.jpg",
effetti: { popolo: 4, esercito: -1, oro: 0, fede: 1 }
},

destra: {
etichetta: "Studialo",
testoConseguenza: "La creatura viene tenuta nel castello per essere studiata. Studiosi e curiosi arrivano da tutto il regno.",
image: IMG_PATH + "draghetto_studiato.jpg",
effetti: { popolo: -1, esercito: 1, oro: 3, fede: -1 }
}

},

{
id: "cap1_intrighi_003",
capitolo: 1,
categoria: "intrighi",
titoloInterno: "Lo sgherro errante",

testo: "Il Ladruncolo entra con un uomo incappucciato alle spalle. \"Maestà, questo dice di essere uno sgherro. Può svolgere lavori sporchi e missioni segrete. Non è il tipo di uomo che si mostra alla luce... ma a volte può essere utile.\"",
image: IMG_PATH + "sgherro_corte.jpg",

sinistra: {
etichetta: "Caccialo",
testoConseguenza: "Ordini allo sgherro di lasciare il castello. Il regno mantiene la sua immagine pulita, ma perdi uno strumento utile nell'ombra.",
image: IMG_PATH + "sgherro_cacciato.jpg",
effetti: { popolo: 2, esercito: 0, oro: 0, fede: 2 }
},

destra: {
etichetta: "Assumilo",
testoConseguenza: "Accetti i suoi servizi. Alcuni problemi iniziano a sparire... anche se non sempre in modo onesto.",
image: IMG_PATH + "sgherro_assunto.jpg",
effetti: { popolo: -2, esercito: 2, oro: 2, fede: -1 }
}

},

{
id: "cap1_intrighi_004",
capitolo: 1,
categoria: "intrighi",
titoloInterno: "Assassino a corte",

testo: "Il Generale entra con una guardia che trascina un uomo incappucciato. \"Maestà, lo abbiamo catturato nei corridoi del palazzo con un pugnale avvelenato. Dice di essere solo un mercenario... ma qualcuno potrebbe averlo mandato.\"",
image: IMG_PATH + "assassino_corte.jpg",

sinistra: {
etichetta: "Interrogalo",
testoConseguenza: "L'uomo viene interrogato nelle segrete. Le sue parole fanno nascere nuovi sospetti su possibili nemici della corona.",
image: IMG_PATH + "assassino_interrogato.jpg",
effetti: { popolo: 0, esercito: 3, oro: -2, fede: 0 }
},

destra: {
etichetta: "Giustizialo",
testoConseguenza: "Ordini l'esecuzione immediata dell'assassino. Il messaggio è chiaro: chi minaccia il trono pagherà con la vita.",
image: IMG_PATH + "assassino_giustizia.jpg",
effetti: { popolo: 1, esercito: 2, oro: 0, fede: 0 }
}

},

{
id: "cap1_mistero_004",
capitolo: 1,
categoria: "religione",
titoloInterno: "La reliquia ritrovata",

testo: "Il Monaco entra nel palazzo portando un piccolo scrigno. \"Maestà, alcuni pellegrini hanno trovato questo oggetto tra le rovine di un antico santuario. Dicono che sia una reliquia sacra... ma nessuno può esserne certo.\"",
image: IMG_PATH + "reliquia_antica.jpg",

sinistra: {
etichetta: "Conservala",
testoConseguenza: "La reliquia viene custodita nel tempio della capitale. I fedeli iniziano a parlare di miracoli e il prestigio religioso del regno cresce.",
image: IMG_PATH + "reliquia_tempio.jpg",
effetti: { popolo: 2, esercito: 0, oro: 0, fede: 5 }
},

destra: {
etichetta: "Vendila",
testoConseguenza: "Decidi di vendere la reliquia a un ricco collezionista straniero. Il tesoro si riempie, ma molti sacerdoti parlano di sacrilegio.",
image: IMG_PATH + "reliquia_venduta.jpg",
effetti: { popolo: -2, esercito: 0, oro: 5, fede: -5 }
}

},

{
id: "cap1_popolo_003",
capitolo: 1,
categoria: "popolo",
titoloInterno: "Voci di rivolta",

testo: "Sebastian entra con aria preoccupata. \"Maestà, in alcuni villaggi si parla apertamente contro la corona. Non è ancora una rivolta... ma la rabbia sta crescendo.\"",
image: IMG_PATH + "villaggi_rivolta.jpg",

sinistra: {
etichetta: "Calmali",
testoConseguenza: "Invii emissari e provviste per calmare gli animi. I villaggi si tranquillizzano, ma il tesoro reale ne risente.",
image: IMG_PATH + "villaggi_calmi.jpg",
effetti: { popolo: 6, esercito: 0, oro: -4, fede: 0 }
},

destra: {
etichetta: "Invia soldati",
testoConseguenza: "Le guardie ristabiliscono l'ordine con la forza. La rivolta si spegne in fretta, ma molti contadini non dimenticheranno.",
image: IMG_PATH + "soldati_villaggi.jpg",
effetti: { popolo: -4, esercito: 3, oro: -1, fede: 0 }
}

},

{
id: "cap1_economia_003",
capitolo: 1,
categoria: "economia",
titoloInterno: "Il grande mercante",

testo: "Il Ladruncolo sorride indicando un uomo vestito con abiti ricchi. \"Maestà, questo mercante controlla molte carovane. Dice di poter portare grande ricchezza nel regno... ma in cambio vuole privilegi speciali.\"",
image: IMG_PATH + "mercante_ricco.jpg",

sinistra: {
etichetta: "Rifiuta",
testoConseguenza: "Il mercante lascia il regno con freddezza. Il mercato resta sotto il controllo della corona, ma perdi una possibile occasione di guadagno.",
image: IMG_PATH + "mercante_offeso.jpg",
effetti: { popolo: 1, esercito: 0, oro: -2, fede: 0 }
},

destra: {
etichetta: "Accetta",
testoConseguenza: "Le carovane del mercante iniziano ad attraversare le tue strade. L'oro entra più velocemente nel regno, ma cresce anche il potere di quell'uomo.",
image: IMG_PATH + "carovane_commercio.jpg",
effetti: { popolo: -1, esercito: 0, oro: 6, fede: 0 }
}

},

{
id: "cap1_economia_004",
capitolo: 1,
categoria: "economia",
titoloInterno: "Il grande mercante",

testo: "Il Ladruncolo torna a parlare dello stesso ricco mercante. \"Maestà, lui insiste. Dice che con il suo aiuto il regno potrebbe diventare molto più ricco. Ma uomini così non fanno mai nulla per gentilezza.\"",
image: IMG_PATH + "mercante_ricco.jpg",

sinistra: {
etichetta: "Rifiuta",
testoConseguenza: "Respingi di nuovo la proposta. Il regno mantiene il controllo dei commerci, ma rinuncia a un grosso guadagno.",
image: IMG_PATH + "mercante_offeso.jpg",
effetti: { popolo: 1, esercito: 0, oro: -2, fede: 0 }
},

destra: {
etichetta: "Accetta",
testoConseguenza: "Le rotte commerciali del mercante si aprono al regno. Le casse si riempiono, ma quell'uomo diventa sempre più influente.",
image: IMG_PATH + "carovane_commercio.jpg",
effetti: { popolo: -1, esercito: 0, oro: 6, fede: 0 }
}

},

{
id: "cap1_mistero_005",
capitolo: 1,
categoria: "carestia",
titoloInterno: "La bestia nei campi",

testo: "Sebastian arriva trafelato. \"Maestà, nei villaggi del sud i campi sono stati distrutti durante la notte. I contadini parlano di una grossa bestia uscita dalla foresta.\"",
image: IMG_PATH + "bestia_campi.jpg",

sinistra: {
etichetta: "Ignora",
testoConseguenza: "Decidi di ignorare le voci dei contadini. Forse è solo paura... ma nei villaggi cresce la tensione.",
image: IMG_PATH + "campi_distrutti.jpg",
effetti: { popolo: -5, esercito: 0, oro: -1, fede: -1 }
},

destra: {
etichetta: "Caccia la bestia",
testoConseguenza: "Una spedizione parte verso la foresta e, dopo giorni di ricerca, la bestia viene uccisa. I villaggi festeggiano la sicurezza ritrovata.",
image: IMG_PATH + "bestia_cacciata.jpg",
effetti: { popolo: 4, esercito: -2, oro: -2, fede: 0 }
}

},

{
id: "cap1_religione_003",
capitolo: 1,
categoria: "religione",
titoloInterno: "Presagio oscuro",

testo: "Il Monaco entra nella sala del trono con il volto pallido. \"Maestà, durante la preghiera di stanotte le candele del tempio si sono spente da sole. Alcuni sacerdoti parlano di un segno oscuro sul destino del regno.\"",
image: IMG_PATH + "presagio_tempio.jpg",

sinistra: {
etichetta: "Ignora",
testoConseguenza: "Decidi di ignorare il presagio. Alcuni fedeli restano turbati, ma la vita del regno continua.",
image: IMG_PATH + "tempio_silenzioso.jpg",
effetti: { popolo: -2, esercito: 0, oro: 0, fede: -4 }
},

destra: {
etichetta: "Organizza rituali",
testoConseguenza: "Il clero organizza giorni di preghiera e rituali. I fedeli si rassicurano, anche se tutto questo costa tempo e denaro.",
image: IMG_PATH + "rituale_tempio.jpg",
effetti: { popolo: 1, esercito: 0, oro: -2, fede: 5 }
}

},

{
id: "cap1_guerra_004",
capitolo: 1,
categoria: "guerra",
titoloInterno: "Pattuglia scomparsa",

testo: "Il Generale parla con tono grave. \"Maestà, una pattuglia inviata lungo il confine nord non è tornata. Non sappiamo se siano stati briganti... o qualcosa di peggio.\"",
image: IMG_PATH + "pattuglia_scomparsa.jpg",

sinistra: {
etichetta: "Invia ricerca",
testoConseguenza: "Una seconda pattuglia viene mandata nella zona. Dopo giorni di ricerche trovano tracce di uno scontro.",
image: IMG_PATH + "ricerca_pattuglia.jpg",
effetti: { popolo: 0, esercito: 3, oro: -2, fede: 0 }
},

destra: {
etichetta: "Rafforza confine",
testoConseguenza: "Decidi di rafforzare subito le difese del confine. I soldati si preparano a possibili minacce.",
image: IMG_PATH + "confine_rafforzato.jpg",
effetti: { popolo: 0, esercito: 4, oro: -3, fede: 0 }
}

},

{
id: "cap1_intrighi_005",
capitolo: 1,
categoria: "intrighi",
titoloInterno: "Briganti nelle strade",

testo: "Il Generale entra con espressione cupa. \"Maestà, alcune carovane sono state assalite lungo la strada reale. Una banda di briganti sembra essersi stabilita nelle colline.\"",
image: IMG_PATH + "briganti_strada.jpg",

sinistra: {
etichetta: "Invia soldati",
testoConseguenza: "Una spedizione militare viene inviata nelle colline. Dopo alcuni scontri, la banda viene dispersa.",
image: IMG_PATH + "soldati_briganti.jpg",
effetti: { popolo: 3, esercito: -2, oro: -2, fede: 0 }
},

destra: {
etichetta: "Ignora",
testoConseguenza: "Decidi di non intervenire subito. Alcune carovane evitano le tue strade e i mercanti iniziano a lamentarsi.",
image: IMG_PATH + "carovana_paura.jpg",
effetti: { popolo: -3, esercito: 0, oro: -3, fede: 0 }
}

},

{
id: "cap1_mistero_006",
capitolo: 1,
categoria: "religione",
titoloInterno: "Lo studioso straniero",

testo: "Il Monaco presenta uno straniero con abiti insoliti. \"Maestà, questo studioso dice di viaggiare tra i regni alla ricerca di antiche conoscenze. Chiede accesso alle biblioteche e agli archivi del tempio.\"",
image: IMG_PATH + "studioso_straniero.jpg",

sinistra: {
etichetta: "Rifiuta",
testoConseguenza: "Decidi di non fidarti dello straniero. Lo studioso lascia il regno in silenzio.",
image: IMG_PATH + "studioso_partenza.jpg",
effetti: { popolo: 0, esercito: 0, oro: 0, fede: 1 }
},

destra: {
etichetta: "Accetta",
testoConseguenza: "Lo studioso passa mesi tra libri antichi e pergamene. Alcuni dicono che abbia scoperto cose molto importanti.",
image: IMG_PATH + "studioso_biblioteca.jpg",
effetti: { popolo: 1, esercito: 0, oro: -1, fede: 2 }
}

}

];

