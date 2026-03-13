const eventiCapitolo1 = [

{
id: "cap1_economia_001",
capitolo: 1,
categoria: "economia",
titoloInterno: "Mercanti stranieri",

testo: "Il Ladruncolo compare ai piedi del trono con un sorriso furbo. \"Maesta, una carovana straniera attende fuori dalle mura. Portano stoffe, spezie e monete. Se li lasciate entrare, la citta respirera ricchezza. Se li respingete, l oro restera nelle casse... ma non nei mercati.\"",
image: "mercanti_carovana.jpg",

sinistra: {
etichetta: "Rifiuta",
testoConseguenza: "Ordini di tenere chiuse le porte. I mercanti ripartono all alba e la citta resta silenziosa. Il tesoro evita rischi immediati, ma nelle botteghe serpeggia la delusione.",
image: "mercanti_respinti.jpg",
effetti: { popolo: -6, esercito: 0, oro: 4, fede: 0 }
},

destra: {
etichetta: "Accetta",
testoConseguenza: "Le porte si aprono e il mercato si riempie di voci, colori e scambi. Il popolo accoglie con entusiasmo i nuovi traffici, ma il controllo della corona sulle entrate si fa piu debole.",
image: "mercanti_mercato.jpg",
effetti: { popolo: 6, esercito: 0, oro: -4, fede: 0 }
}

},


  
{
id: "cap1_popolo_001",
capitolo: 1,
categoria: "popolo",
titoloInterno: "Festa del raccolto",

testo: "Sebastian si avvicina con passo stanco ma fermo. \"Maesta, i villaggi chiedono di celebrare il raccolto con una festa comune. Non e solo vino e musica: e il primo momento in cui il popolo potrebbe sentire il regno come qualcosa di suo.\"",
image: "festa_raccolto.jpg",

sinistra: {
etichetta: "Nega",
testoConseguenza: "La festa viene annullata. I granai restano chiusi e il denaro non viene speso, ma nei villaggi la delusione si trasforma in distanza dalla corona.",
image: "contadini_delusi.jpg",
effetti: { popolo: -7, esercito: 0, oro: 3, fede: 0 }
},

destra: {
etichetta: "Finanzia",
testoConseguenza: "La festa illumina le piazze dei villaggi tra fuochi, canti e tavole condivise. Per la prima volta il popolo pronuncia il nome del tuo regno con calore.",
image: "festa_popolare.jpg",
effetti: { popolo: 7, esercito: 0, oro: -5, fede: 1 }
}

},


  
{
id: "cap1_religione_001",
capitolo: 1,
categoria: "religione",
titoloInterno: "Restauro del tempio",

testo: "Il Monaco entra nella sala del trono con passo lento. \"Maesta, il tempio antico nel cuore della citta e caduto in rovina. Senza un luogo sacro forte, il popolo teme che gli dei abbiano voltato lo sguardo altrove. Restaurarlo significherebbe dare al regno una benedizione visibile.\"",
image: "vescovo_tempio.jpg",

sinistra: {
etichetta: "Rifiuta",
testoConseguenza: "Decidi di non finanziare il restauro. Il tempio rimane in silenzio e molti sacerdoti iniziano a mormorare che il regno sia nato senza il favore degli dei.",
image: "tempio_rovinato.jpg",
effetti: { popolo: -1, esercito: 0, oro: 4, fede: -7 }
},

destra: {
etichetta: "Finanzia",
testoConseguenza: "Le pietre del tempio vengono rialzate e le campane tornano a suonare. Il clero proclama che gli dei proteggono il tuo regno nascente.",
image: "tempio_restaurato.jpg",
effetti: { popolo: 2, esercito: 0, oro: -5, fede: 7 }
}

},


  
{
id: "cap1_guerra_001",
capitolo: 1,
categoria: "guerra",
titoloInterno: "Addestramento delle truppe",

testo: "Il Generale si presenta davanti al trono con l armatura segnata dalle battaglie. \"Maesta, i vostri soldati sono coraggiosi ma inesperti. Senza addestramento serio, il primo vero conflitto potrebbe spezzare il regno prima ancora che cresca.\"",
image: "soldati_addestramento.jpg",

sinistra: {
etichetta: "Troppo costoso",
testoConseguenza: "Decidi di rimandare l addestramento. Il tesoro respira, ma tra i soldati cresce il dubbio che il regno non sia pronto a difendersi.",
image: "soldati_scontenti.jpg",
effetti: { popolo: 0, esercito: -7, oro: 3, fede: 0 }
},

destra: {
etichetta: "Approva",
testoConseguenza: "I campi fuori dalle mura si riempiono di esercitazioni e clangore di armi. Le truppe diventano piu disciplinate e il regno appare meno vulnerabile.",
image: "esercito_addestrato.jpg",
effetti: { popolo: 0, esercito: 7, oro: -4, fede: 0 }
}

},


  
{
id: "cap1_carestia_001",
capitolo: 1,
categoria: "carestia",
titoloInterno: "Granai del regno",

testo: "Sebastian entra nella sala del trono con il volto teso. \"Maesta, i raccolti sono stati scarsi e nei villaggi il grano sta finendo. I contadini chiedono che i granai reali vengano aperti. Se restano chiusi troppo a lungo, la fame potrebbe trasformarsi in rabbia.\"",
image: "granai_regno.jpg",

sinistra: {
etichetta: "Conserva",
testoConseguenza: "Ordini di mantenere chiusi i granai. Le riserve del regno restano intatte, ma nei villaggi iniziano a diffondersi fame e malcontento.",
image: "villaggio_affamato.jpg",
effetti: { popolo: -8, esercito: 0, oro: 4, fede: -1 }
},

destra: {
etichetta: "Aprili",
testoConseguenza: "I granai vengono aperti e carri di farina partono verso i villaggi. Il popolo respira di nuovo, anche se le riserve del regno diminuiscono.",
image: "grano_distribuito.jpg",
effetti: { popolo: 8, esercito: 0, oro: -5, fede: 1 }
}

},


  
{
id: "cap1_intrighi_001",
capitolo: 1,
categoria: "intrighi",
titoloInterno: "Nobile sospetto",

testo: "Il Ladruncolo appare nell ombra vicino al trono. \"Maesta, nelle sale della corte si parla molto... e non sempre bene. Un nobile influente starebbe radunando sostenitori. Forse e solo ambizione... o forse qualcosa di piu pericoloso.\"",
image: "corte_intrigo.jpg",

sinistra: {
etichetta: "Ignora",
testoConseguenza: "Decidi di non agire senza prove. Il nobile continua a muoversi liberamente e nella corte qualcuno inizia a pensare che il trono sia troppo indulgente.",
image: "nobile_sorriso.jpg",
effetti: { popolo: -1, esercito: -2, oro: 0, fede: 0 }
},

destra: {
etichetta: "Indaga",
testoConseguenza: "Ordini alle guardie di indagare discretamente. Alcuni nobili si agitano, ma il regno capisce che il trono non chiude gli occhi davanti ai sospetti.",
image: "guardie_indagine.jpg",
effetti: { popolo: 0, esercito: 3, oro: -2, fede: 0 }
}

},


  
{
id: "cap1_diplomazia_001",
capitolo: 1,
categoria: "diplomazia",
titoloInterno: "Patto con il regno vicino",

testo: "Il Generale osserva l'ambasciatore straniero davanti al trono. \"Maesta, il regno oltre le colline propone un patto: commercio aperto e aiuto militare in caso di guerra. Un alleato puo rendere i nostri confini piu sicuri... ma ogni alleanza ha sempre un prezzo.\"",
image: "ambasciatore_regno.jpg",

sinistra: {
etichetta: "Rifiuta",
testoConseguenza: "L'ambasciatore lascia la corte con un inchino freddo. Il regno resta indipendente, ma le voci di isolamento iniziano a circolare tra i nobili.",
image: "ambasciatore_offeso.jpg",
effetti: { popolo: -1, esercito: -3, oro: 0, fede: 0 }
},

destra: {
etichetta: "Accetta",
testoConseguenza: "Il trattato viene firmato sotto gli stendardi delle due corone. I commerci aumentano e il regno appare meno vulnerabile agli occhi dei vicini.",
image: "trattato_firmato.jpg",
effetti: { popolo: 1, esercito: 3, oro: 2, fede: 0 }
}

},


  
{
id: "cap1_economia_002",
capitolo: 1,
categoria: "economia",
titoloInterno: "Tassa sulle botteghe",

testo: "Il Ladruncolo si avvicina con aria complice. \"Maesta, le botteghe della citta lavorano bene... forse troppo bene. Una piccola tassa sulle vendite riempirebbe rapidamente le casse del regno. Certo, i mercanti non la prenderanno bene.\"",
image: "botteghe_citta.jpg",

sinistra: {
etichetta: "Respingi",
testoConseguenza: "Decidi di non imporre nuove tasse. I mercanti festeggiano la decisione e le botteghe restano fedeli alla corona.",
image: "mercanti_sollevati.jpg",
effetti: { popolo: 4, esercito: 0, oro: -2, fede: 0 }
},

destra: {
etichetta: "Imponila",
testoConseguenza: "Le guardie reali iniziano a raccogliere la nuova tassa. Le casse del regno si riempiono, ma tra i mercanti cresce il malumore.",
image: "tassa_botteghe.jpg",
effetti: { popolo: -6, esercito: 0, oro: 6, fede: 0 }
}

},


  
{
id: "cap1_religione_002",
capitolo: 1,
categoria: "religione",
titoloInterno: "Processione solenne",

testo: "Il Monaco solleva lo sguardo verso il trono. \"Maesta, il popolo ha bisogno di vedere che gli dei camminano ancora accanto a questo regno. Una grande processione per le vie della citta potrebbe unire fedeli, campi e mura sotto un solo segno di protezione.\"",
image: "processione_solenne.jpg",

sinistra: {
etichetta: "Annulla",
testoConseguenza: "Ordini di annullare la processione. Il clero obbedisce, ma nelle strade piu devote il silenzio viene letto come un presagio sfavorevole.",
image: "chiesa_silenziosa.jpg",
effetti: { popolo: -3, esercito: 0, oro: 2, fede: -6 }
},

destra: {
etichetta: "Concedi",
testoConseguenza: "La processione attraversa la citta tra canti, incenso e fiaccole. Il popolo guarda con rispetto e la fede del regno si rinsalda sotto gli occhi di tutti.",
image: "processione_citta.jpg",
effetti: { popolo: 3, esercito: 0, oro: -3, fede: 6 }
}

},


  
{
id: "cap1_popolo_002",
capitolo: 1,
categoria: "popolo",
titoloInterno: "Petizione dei villaggi",

testo: "Sebastian depone una pergamena ai piedi del trono. \"Maesta, i capi dei villaggi parlano con una sola voce. Le strade sono dissestate, i pozzi crollano e la gente inizia a chiedersi se il nuovo regno si ricordi davvero di loro.\"",
image: "villaggi_petizione.jpg",

sinistra: {
etichetta: "Rimanda",
testoConseguenza: "Rimandi gli interventi a tempi migliori. Le casse evitano una spesa pesante, ma nei villaggi si diffonde l idea che la corona guardi solo alla citta.",
image: "villaggio_trascurato.jpg",
effetti: { popolo: -6, esercito: 0, oro: 4, fede: 0 }
},

destra: {
etichetta: "Intervieni",
testoConseguenza: "Muratori e operai vengono inviati nei villaggi. Pozzi e strade tornano utili alla gente, e la voce del regno comincia finalmente a sembrare vicina anche nelle terre piu lontane.",
image: "villaggio_riparato.jpg",
effetti: { popolo: 7, esercito: 0, oro: -5, fede: 0 }
}

},


  
{
id: "cap1_guerra_002",
capitolo: 1,
categoria: "guerra",
titoloInterno: "Torre di guardia al confine",

testo: "Il Generale indica una mappa stesa davanti al trono. \"Maesta, lungo il confine orientale i nostri esploratori hanno visto movimenti sospetti. Una torre di guardia darebbe occhi e sentinelle al regno... ma costruirla richiedera uomini e oro.\"",
image: "confine_torre_guardia.jpg",

sinistra: {
etichetta: "Rinuncia",
testoConseguenza: "Decidi di rimandare la costruzione. Il tesoro evita la spesa, ma i soldati sanno che quel tratto di confine resta esposto.",
image: "confine_scoperto.jpg",
effetti: { popolo: 0, esercito: -7, oro: 3, fede: 0 }
},

destra: {
etichetta: "Costruiscila",
testoConseguenza: "La torre viene eretta sopra le colline del confine. Le sentinelle vigilano giorno e notte e il regno appare piu protetto.",
image: "torre_costruita.jpg",
effetti: { popolo: 0, esercito: 7, oro: -5, fede: 0 }
}

},


  
{
id: "cap1_carestia_002",
capitolo: 1,
categoria: "carestia",
titoloInterno: "Semi per la prossima stagione",

testo: "Sebastian posa un sacchetto di semi davanti al trono. \"Maesta, molti contadini hanno perso quasi tutto con l ultimo raccolto. Senza nuovi semi e attrezzi, i campi resteranno vuoti anche il prossimo anno.\"",
image: "contadini_semi.jpg",

sinistra: {
etichetta: "Nega aiuto",
testoConseguenza: "Decidi di conservare le risorse del regno. I campi verranno seminati come possono, ma la prossima stagione potrebbe essere ancora piu dura.",
image: "campi_spenti.jpg",
effetti: { popolo: -7, esercito: 0, oro: 3, fede: -1 }
},

destra: {
etichetta: "Sostienili",
testoConseguenza: "Il tesoro reale fornisce semi e attrezzi ai villaggi. I contadini tornano nei campi con rinnovata speranza.",
image: "campi_rinascita.jpg",
effetti: { popolo: 7, esercito: 0, oro: -5, fede: 1 }
}

},


  
  {
id: "cap1_intrighi_002",
capitolo: 1,
categoria: "intrighi",
titoloInterno: "Lettera intercettata",

testo: "Il Ladruncolo si avvicina al trono con una pergamena piegata. \"Maesta, una delle mie... conoscenze ha intercettato questa lettera. Parla di accuse contro un vostro consigliere molto vicino al trono. Potrebbe essere una menzogna... oppure l inizio di qualcosa di piu pericoloso.\"",
image: "lettera_intercettata.jpg",

sinistra: {
etichetta: "Bruciala",
testoConseguenza: "Decidi di distruggere la lettera per evitare scandali. La corte resta apparentemente calma, ma il sospetto continua a serpeggiare tra i corridoi del palazzo.",
image: "lettera_bruciata.jpg",
effetti: { popolo: 0, esercito: -2, oro: 0, fede: 0 }
},

destra: {
etichetta: "Mostrala",
testoConseguenza: "La lettera viene letta davanti alla corte. Alcuni nobili si irrigidiscono e il trono dimostra di non temere la verita.",
image: "corte_sconvolta.jpg",
effetti: { popolo: 0, esercito: 3, oro: -2, fede: 0 }
}

},

  
  {
id: "cap1_diplomazia_002",
capitolo: 1,
categoria: "diplomazia",
titoloInterno: "Dono all'ambasciata",

testo: "Il Generale osserva l emissario straniero nella sala del trono. \"Maesta, un dono alla loro ambasciata sarebbe visto come segno di rispetto. Potrebbe rafforzare i rapporti tra i nostri regni... ma non tutti apprezzano una corona troppo generosa.\"",
image: "emissario_dono.jpg",

sinistra: {
etichetta: "Nessun dono",
testoConseguenza: "L emissario riceve solo parole formali e lascia la corte con freddezza. Il regno risparmia oro, ma l occasione diplomatica si raffredda.",
image: "emissario_freddo.jpg",
effetti: { popolo: -1, esercito: -2, oro: 3, fede: 0 }
},

destra: {
etichetta: "Invia dono",
testoConseguenza: "Il dono viene accolto con favore. L ambasciata straniera parla con rispetto del tuo regno e nuove intese iniziano a prendere forma.",
image: "dono_ambasciata.jpg",
effetti: { popolo: 1, esercito: 2, oro: -4, fede: 0 }
}

},


  {
id: "cap1_mistero_001",
capitolo: 1,
categoria: "popolo",
titoloInterno: "Creatura nei boschi",

testo: "Sebastian arriva agitato davanti al trono. \"Maesta, dai villaggi vicino alla foresta arrivano voci strane. I contadini parlano di una piccola creatura alata che ruba galline e spaventa il bestiame. Alcuni giurano che sia un piccolo drago.\"",

image: "creatura_bosco.jpg",

sinistra: {
etichetta: "Ignora",
testoConseguenza: "Decidi di ignorare le voci dei villaggi. Forse si tratta solo di superstizione... ma la paura continua a diffondersi tra la gente.",
image: "villaggio_paura.jpg",
effetti: { popolo: -4, esercito: 0, oro: 0, fede: -1 }
},

destra: {
etichetta: "Invia soldati",
testoConseguenza: "Una pattuglia viene inviata nella foresta. Dopo giorni di ricerche tornano con la carcassa di una strana creatura. I villaggi tornano a dormire tranquilli.",
image: "creatura_cacciata.jpg",
effetti: { popolo: 4, esercito: -2, oro: -2, fede: 0 }
}

},


  {
id: "cap1_mistero_002",
capitolo: 1,
categoria: "intrighi",
titoloInterno: "Lo stregone errante",

testo: "Il Monaco parla a bassa voce. \"Maesta, un uomo misterioso e arrivato nei villaggi del nord. Alcuni lo chiamano stregone. Dice di poter predire il destino del regno... ma il clero teme che le sue arti siano oscure.\"",

image: "stregone_oscuro.jpg",

sinistra: {
etichetta: "Scaccialo",
testoConseguenza: "Ordini che lo stregone venga allontanato dal regno. Il clero approva la decisione, ma alcuni contadini erano affascinati dalle sue parole.",
image: "stregone_cacciato.jpg",
effetti: { popolo: -2, esercito: 0, oro: 0, fede: 4 }
},

destra: {
etichetta: "Lascialo parlare",
testoConseguenza: "Permetti allo stregone di restare. Le sue profezie attirano curiosi da molti villaggi, ma il clero guarda la cosa con crescente sospetto.",
image: "stregone_profezia.jpg",
effetti: { popolo: 2, esercito: 0, oro: 2, fede: -4 }
}

},


  
{
id: "cap1_mistero_003",
capitolo: 1,
categoria: "mistero",
titoloInterno: "Il draghetto",

testo: "Il Generale entra nella sala del trono accompagnato da due soldati. Tra loro si agita una piccola creatura alata legata con corde. \"Maesta, i soldati l hanno catturata nei boschi. Alcuni giurano sia un giovane drago.\"",

image: "draghetto_catturato.jpg",

sinistra: {
etichetta: "Liberalo",
testoConseguenza: "Ordini di liberare la creatura nei boschi. Il popolo racconta la tua misericordia, ma alcuni soldati pensano che avresti potuto sfruttare la scoperta.",
image: "draghetto_libero.jpg",
effetti: { popolo: 4, esercito: -1, oro: 0, fede: 1 }
},

destra: {
etichetta: "Studialo",
testoConseguenza: "La creatura viene tenuta nel castello per essere studiata. Studiosi e curiosi arrivano da tutto il regno.",
image: "draghetto_studiato.jpg",
effetti: { popolo: -1, esercito: 1, oro: 3, fede: -1 }
}

},


{
id: "cap1_intrighi_003",
capitolo: 1,
categoria: "intrighi",
titoloInterno: "Lo sgherro errante",

testo: "Il Ladruncolo entra con un uomo incappucciato alle spalle. \"Maesta, questo tipo dice di essere uno sgherro. Lavori sporchi, missioni discrete... cose che una corona a volte non puo fare apertamente.\"",

image: "sgherro_corte.jpg",

sinistra: {
etichetta: "Caccialo",
testoConseguenza: "Ordini allo sgherro di lasciare il castello. Il regno mantiene la sua reputazione pulita, ma perdi un possibile strumento nell ombra.",
image: "sgherro_cacciato.jpg",
effetti: { popolo: 2, esercito: 0, oro: 0, fede: 2 }
},

destra: {
etichetta: "Assumilo",
testoConseguenza: "Accetti i servizi dello sgherro. Alcuni problemi della corte iniziano a risolversi... anche se non sempre in modo pulito.",
image: "sgherro_assunto.jpg",
effetti: { popolo: -2, esercito: 2, oro: 2, fede: -1 }
}

},


  {
id: "cap1_intrighi_004",
capitolo: 1,
categoria: "intrighi",
titoloInterno: "Assassino a corte",

testo: "Il Generale entra nella sala del trono con una guardia che trascina un uomo incappucciato. \"Maesta, lo abbiamo catturato mentre si aggirava nei corridoi del palazzo con un pugnale avvelenato. Dice di essere solo un mercenario... ma qualcuno potrebbe averlo mandato.\"",

image: "assassino_corte.jpg",

sinistra: {
etichetta: "Interrogalo",
testoConseguenza: "L'uomo viene interrogato nelle segrete del castello. Le sue parole fanno emergere voci inquietanti su possibili nemici della corona.",
image: "assassino_interrogato.jpg",
effetti: { popolo: 0, esercito: 3, oro: -2, fede: 0 }
},

destra: {
etichetta: "Giustizialo",
testoConseguenza: "Ordini l'esecuzione immediata dell'assassino. Il messaggio e chiaro: chi minaccia il trono paghera con la vita.",
image: "assassino_giustizia.jpg",
effetti: { popolo: 1, esercito: 2, oro: 0, fede: 0 }
}

},


  {
id: "cap1_mistero_004",
capitolo: 1,
categoria: "religione",
titoloInterno: "La reliquia ritrovata",

testo: "Il Monaco entra nel palazzo portando un piccolo scrigno. \"Maesta, alcuni pellegrini hanno trovato questo oggetto tra le rovine di un antico santuario. Dicono sia una reliquia sacra... ma nessuno puo essere certo della sua origine.\"",

image: "reliquia_antica.jpg",

sinistra: {
etichetta: "Conservala",
testoConseguenza: "La reliquia viene custodita nel tempio della capitale. I fedeli iniziano a parlare di miracoli e il prestigio religioso del regno cresce.",
image: "reliquia_tempio.jpg",
effetti: { popolo: 2, esercito: 0, oro: 0, fede: 5 }
},

destra: {
etichetta: "Vendila",
testoConseguenza: "Decidi di vendere la reliquia a un ricco collezionista straniero. Il tesoro si riempie, ma molti sacerdoti parlano di sacrilegio.",
image: "reliquia_venduta.jpg",
effetti: { popolo: -2, esercito: 0, oro: 5, fede: -5 }
}

},


  {
id: "cap1_popolo_003",
capitolo: 1,
categoria: "popolo",
titoloInterno: "Voci di rivolta",

testo: "Sebastian entra con aria preoccupata. \"Maesta, in alcuni villaggi si parla apertamente contro la corona. Non e ancora una rivolta... ma la rabbia cresce tra i contadini.\"",

image: "villaggi_rivolta.jpg",

sinistra: {
etichetta: "Calmali",
testoConseguenza: "Invii emissari e provviste per placare gli animi. I villaggi si calmano, ma il tesoro reale ne risente.",
image: "villaggi_calmi.jpg",
effetti: { popolo: 6, esercito: 0, oro: -4, fede: 0 }
},

destra: {
etichetta: "Invia soldati",
testoConseguenza: "Le guardie ristabiliscono l ordine con la forza. La rivolta si spegne rapidamente, ma molti contadini non dimenticheranno.",
image: "soldati_villaggi.jpg",
effetti: { popolo: -4, esercito: 3, oro: -1, fede: 0 }
}

},


  
  {
id: "cap1_economia_003",
capitolo: 1,
categoria: "economia",
titoloInterno: "Il grande mercante",

testo: "Il Ladruncolo sorride mentre indica un uomo vestito di sete. \"Maesta, questo mercante controlla carovane in mezzo continente. Dice che potrebbe arricchire il regno... ma in cambio vuole privilegi commerciali.\"",

image: "mercante_ricco.jpg",

sinistra: {
etichetta: "Rifiuta",
testoConseguenza: "Il mercante lascia il regno con un inchino freddo. Le casse restano modeste, ma il mercato rimane sotto il controllo della corona.",
image: "mercante_offeso.jpg",
effetti: { popolo: 1, esercito: 0, oro: -2, fede: 0 }
},

destra: {
etichetta: "Accetta",
testoConseguenza: "Le carovane del mercante iniziano ad attraversare le tue strade. L oro scorre piu veloce nel regno, ma il suo potere cresce rapidamente.",
image: "carovane_commercio.jpg",
effetti: { popolo: -1, esercito: 0, oro: 6, fede: 0 }
}

},


  {
id: "cap1_economia_003",
capitolo: 1,
categoria: "economia",
titoloInterno: "Il grande mercante",

testo: "Il Ladruncolo sorride mentre indica un uomo vestito di sete. \"Maesta, questo mercante controlla carovane in mezzo continente. Dice che potrebbe arricchire il regno... ma in cambio vuole privilegi commerciali.\"",

image: "mercante_ricco.jpg",

sinistra: {
etichetta: "Rifiuta",
testoConseguenza: "Il mercante lascia il regno con un inchino freddo. Le casse restano modeste, ma il mercato rimane sotto il controllo della corona.",
image: "mercante_offeso.jpg",
effetti: { popolo: 1, esercito: 0, oro: -2, fede: 0 }
},

destra: {
etichetta: "Accetta",
testoConseguenza: "Le carovane del mercante iniziano ad attraversare le tue strade. L oro scorre piu veloce nel regno, ma il suo potere cresce rapidamente.",
image: "carovane_commercio.jpg",
effetti: { popolo: -1, esercito: 0, oro: 6, fede: 0 }
}

},


  {
id: "cap1_mistero_005",
capitolo: 1,
categoria: "carestia",
titoloInterno: "La bestia nei campi",

testo: "Sebastian arriva trafelato. \"Maesta, nei villaggi del sud i campi sono stati devastati durante la notte. I contadini parlano di una grande bestia uscita dalla foresta.\"",

image: "bestia_campi.jpg",

sinistra: {
etichetta: "Ignora",
testoConseguenza: "Decidi di ignorare le voci dei contadini. Forse si tratta solo di paura e superstizione... ma nei villaggi la tensione cresce.",
image: "campi_distrutti.jpg",
effetti: { popolo: -5, esercito: 0, oro: -1, fede: -1 }
},

destra: {
etichetta: "Caccia la bestia",
testoConseguenza: "Una spedizione parte verso la foresta e dopo giorni di ricerca la bestia viene uccisa. I villaggi celebrano la sicurezza ritrovata.",
image: "bestia_cacciata.jpg",
effetti: { popolo: 4, esercito: -2, oro: -2, fede: 0 }
}

},


  {
id: "cap1_religione_003",
capitolo: 1,
categoria: "religione",
titoloInterno: "Presagio oscuro",

testo: "Il Monaco entra nella sala del trono con il volto pallido. \"Maesta, durante la preghiera questa notte le candele del tempio si sono spente da sole. Alcuni sacerdoti parlano di un segno oscuro sul destino del regno.\"",

image: "presagio_tempio.jpg",

sinistra: {
etichetta: "Ignora",
testoConseguenza: "Decidi di ignorare le superstizioni del clero. Alcuni fedeli restano turbati, ma la vita del regno continua.",
image: "tempio_silenzioso.jpg",
effetti: { popolo: -2, esercito: 0, oro: 0, fede: -4 }
},

destra: {
etichetta: "Organizza rituali",
testoConseguenza: "Il clero organizza giorni di preghiera e rituali. I fedeli si rassicurano, ma le cerimonie costano tempo e denaro.",
image: "rituale_tempio.jpg",
effetti: { popolo: 1, esercito: 0, oro: -2, fede: 5 }
}

},

  

  {
id: "cap1_guerra_004",
capitolo: 1,
categoria: "guerra",
titoloInterno: "Pattuglia scomparsa",

testo: "Il Generale parla con tono grave. \"Maesta, una pattuglia inviata lungo il confine nord non e tornata. Non sappiamo se siano stati briganti... o qualcosa di peggio.\"",

image: "pattuglia_scomparsa.jpg",

sinistra: {
etichetta: "Invia ricerca",
testoConseguenza: "Una seconda pattuglia viene inviata nella zona. Dopo giorni di ricerche trovano tracce di uno scontro.",
image: "ricerca_pattuglia.jpg",
effetti: { popolo: 0, esercito: 3, oro: -2, fede: 0 }
},

destra: {
etichetta: "Rafforza confine",
testoConseguenza: "Decidi di rafforzare immediatamente le difese del confine. I soldati si preparano a possibili minacce.",
image: "confine_rafforzato.jpg",
effetti: { popolo: 0, esercito: 4, oro: -3, fede: 0 }
}

},


  {
id: "cap1_intrighi_005",
capitolo: 1,
categoria: "intrighi",
titoloInterno: "Briganti nelle strade",

testo: "Il Generale entra nella sala del trono con espressione cupa. \"Maesta, alcune carovane sono state assalite lungo la strada reale. Una banda di briganti sembra essersi stabilita nelle colline.\"",

image: "briganti_strada.jpg",

sinistra: {
etichetta: "Invia soldati",
testoConseguenza: "Una spedizione militare viene inviata nelle colline. Dopo alcuni scontri la banda viene dispersa.",
image: "soldati_briganti.jpg",
effetti: { popolo: 3, esercito: -2, oro: -2, fede: 0 }
},

destra: {
etichetta: "Ignora",
testoConseguenza: "Decidi di non intervenire subito. Alcune carovane evitano le tue strade e i mercanti iniziano a lamentarsi.",
image: "carovana_paura.jpg",
effetti: { popolo: -3, esercito: 0, oro: -3, fede: 0 }
}

},


  {
id: "cap1_mistero_006",
capitolo: 1,
categoria: "religione",
titoloInterno: "Lo studioso straniero",

testo: "Il Monaco presenta uno straniero vestito con abiti insoliti. \"Maesta, questo studioso dice di viaggiare tra i regni alla ricerca di antiche conoscenze. Chiede accesso alle biblioteche e agli archivi del tempio.\"",

image: "studioso_straniero.jpg",

sinistra: {
etichetta: "Rifiuta",
testoConseguenza: "Decidi di non fidarti dello straniero. Lo studioso lascia il regno con un inchino silenzioso.",
image: "studioso_partenza.jpg",
effetti: { popolo: 0, esercito: 0, oro: 0, fede: 1 }
},

destra: {
etichetta: "Accetta",
testoConseguenza: "Lo studioso passa mesi tra pergamene e libri antichi. Alcuni dicono che abbia scoperto cose molto interessanti.",
image: "studioso_biblioteca.jpg",
effetti: { popolo: 1, esercito: 0, oro: -1, fede: 2 }
}

}
];
