const eventiCapitolo1 = [

{
id: "cap1_economia_001",
capitolo: 1,
categoria: "economia",
titoloInterno: "Mercanti stranieri",

testo: "Una carovana di mercanti stranieri chiede il permesso di aprire un grande mercato alle porte della città.",
image: "mercanti_carovana.jpg",

sinistra: {
etichetta: "Rifiuta",
testoConseguenza: "I mercanti vengono respinti e il mercato non verrà costruito. Il tesoro resta stabile, ma molti cittadini speravano in nuovi commerci.",
image: "mercanti_respinti.jpg",
effetti: { popolo: -4, esercito: 0, oro: 3, fede: 0 }
},

destra: {
etichetta: "Accetta",
testoConseguenza: "Il mercato prende vita e la città si riempie di merci e viaggiatori.",
image: "mercanti_mercato.jpg",
effetti: { popolo: 5, esercito: 0, oro: -3, fede: 0 }
}

},

{
id: "cap1_popolo_001",
capitolo: 1,
categoria: "popolo",
titoloInterno: "Festa del raccolto",

testo: "I contadini chiedono di organizzare una grande festa per celebrare il raccolto. Vogliono il sostegno della corona.",
image: "festa_raccolto.jpg",

sinistra: {
etichetta: "Nega",
testoConseguenza: "La festa viene cancellata. Il tesoro è salvo, ma molti contadini si sentono ignorati.",
image: "contadini_delusi.jpg",
effetti: { popolo: -6, esercito: 0, oro: 2, fede: 0 }
},

destra: {
etichetta: "Finanzia",
testoConseguenza: "La festa riempie il villaggio di musica e vino. Il popolo acclama il tuo nome.",
image: "festa_popolare.jpg",
effetti: { popolo: 6, esercito: 0, oro: -4, fede: 1 }
}

}, 

{
id: "cap1_religione_001",
capitolo: 1,
categoria: "religione",
titoloInterno: "Restauro del tempio",

testo: "Un vescovo chiede fondi per restaurare un antico tempio nel cuore della città.",
image: "vescovo_tempio.jpg",

sinistra: {
etichetta: "Rifiuta",
testoConseguenza: "Il tempio resta in rovina. Il clero non dimenticherà facilmente questo rifiuto.",
image: "tempio_rovinato.jpg",
effetti: { popolo: 0, esercito: 0, oro: 4, fede: -6 }
},

destra: {
etichetta: "Finanzia",
testoConseguenza: "Il tempio viene restaurato e il clero benedice il tuo regno.",
image: "tempio_restaurato.jpg",
effetti: { popolo: 1, esercito: 0, oro: -5, fede: 6 }
}

},  

{
id: "cap1_guerra_001",
capitolo: 1,
categoria: "guerra",
titoloInterno: "Addestramento delle truppe",

testo: "Il comandante dell'esercito propone un nuovo programma di addestramento per rafforzare le truppe.",
image: "soldati_addestramento.jpg",

sinistra: {
etichetta: "Troppo costoso",
testoConseguenza: "L'addestramento viene cancellato. Alcuni ufficiali iniziano a dubitare della tua lungimiranza.",
image: "soldati_scontenti.jpg",
effetti: { popolo: 0, esercito: -5, oro: 3, fede: 0 }
},

destra: {
etichetta: "Approva",
testoConseguenza: "Le truppe si addestrano duramente e l'esercito diventa più disciplinato.",
image: "esercito_addestrato.jpg",
effetti: { popolo: 0, esercito: 6, oro: -4, fede: 0 }
}

},

{
id: "cap1_carestia_001",
capitolo: 1,
categoria: "carestia",
titoloInterno: "Granai del regno",

testo: "I raccolti sono stati scarsi e i contadini chiedono di aprire i granai reali per sfamare i villaggi.",
image: "granai_regno.jpg",

sinistra: {
etichetta: "Conserva",
testoConseguenza: "I granai restano chiusi. Le riserve del regno sono al sicuro, ma nei villaggi cresce la fame.",
image: "villaggio_affamato.jpg",
effetti: { popolo: -7, esercito: 0, oro: 3, fede: 0 }
},

destra: {
etichetta: "Aprili",
testoConseguenza: "I granai vengono aperti e i villaggi ricevono farina e grano. Il popolo tira un sospiro di sollievo.",
image: "grano_distribuito.jpg",
effetti: { popolo: 7, esercito: 0, oro: -4, fede: 0 }
}

},

{
id: "cap1_intrighi_001",
capitolo: 1,
categoria: "intrighi",
titoloInterno: "Nobile sospetto",

testo: "Una dama di corte insinua che un nobile influente stia tramando nell'ombra contro la corona.",
image: "corte_intrigo.jpg",

sinistra: {
etichetta: "Ignora",
testoConseguenza: "Decidi di non agire senza prove. Il nobile resta al suo posto, ma la corte mormora sulla tua debolezza.",
image: "nobile_sorriso.jpg",
effetti: { popolo: 0, esercito: -1, oro: 0, fede: 0 }
},

destra: {
etichetta: "Indaga",
testoConseguenza: "Ordini un'indagine discreta. La corte si agita, ma il trono mostra di saper vigilare.",
image: "guardie_indagine.jpg",
effetti: { popolo: 0, esercito: 2, oro: -2, fede: 0 }
}

},

  {
id: "cap1_diplomazia_001",
capitolo: 1,
categoria: "diplomazia",
titoloInterno: "Patto con il regno vicino",

testo: "Un ambasciatore del regno vicino propone un accordo commerciale e militare per rafforzare i rapporti tra le due corone.",
image: "ambasciatore_regno.jpg",

sinistra: {
etichetta: "Rifiuta",
testoConseguenza: "L'ambasciatore lascia la corte con freddezza. Il regno conserva la propria autonomia, ma perde un'occasione di alleanza.",
image: "ambasciatore_offeso.jpg",
effetti: { popolo: 0, esercito: -2, oro: 0, fede: 0 }
},

destra: {
etichetta: "Accetta",
testoConseguenza: "L'accordo viene firmato tra applausi e inchini. I commerci si aprono e i confini appaiono più sicuri.",
image: "trattato_firmato.jpg",
effetti: { popolo: 1, esercito: 2, oro: 2, fede: 0 }
}

},

  {
id: "cap1_economia_002",
capitolo: 1,
categoria: "economia",
titoloInterno: "Tassa sulle botteghe",

testo: "I consiglieri del tesoro propongono una nuova tassa sulle botteghe cittadine per riempire più rapidamente le casse del regno.",
image: "botteghe_citta.jpg",

sinistra: {
etichetta: "Respingi",
testoConseguenza: "Le botteghe tirano un sospiro di sollievo. I commercianti restano fedeli alla corona, ma il tesoro non cresce.",
image: "mercanti_sollevati.jpg",
effetti: { popolo: 3, esercito: 0, oro: -1, fede: 0 }
},

destra: {
etichetta: "Imponila",
testoConseguenza: "La nuova tassa entra in vigore. Le casse si riempiono, ma nelle strade iniziano le lamentele.",
image: "tassa_botteghe.jpg",
effetti: { popolo: -5, esercito: 0, oro: 5, fede: 0 }
}

}, 

{
id: "cap1_religione_002",
capitolo: 1,
categoria: "religione",
titoloInterno: "Processione solenne",

testo: "Il clero propone una grande processione pubblica per chiedere protezione divina sul raccolto e sulla città.",
image: "processione_solenne.jpg",

sinistra: {
etichetta: "Annulla",
testoConseguenza: "La processione viene annullata. Alcuni sacerdoti parlano di segno sfavorevole e il popolo più devoto resta turbato.",
image: "chiesa_silenziosa.jpg",
effetti: { popolo: -2, esercito: 0, oro: 2, fede: -5 }
},

destra: {
etichetta: "Concedi",
testoConseguenza: "La processione attraversa le strade tra canti e incenso. La fede del regno si rafforza.",
image: "processione_citta.jpg",
effetti: { popolo: 2, esercito: 0, oro: -2, fede: 5 }
}

},

{
id: "cap1_popolo_002",
capitolo: 1,
categoria: "popolo",
titoloInterno: "Petizione dei villaggi",

testo: "I capi di alcuni villaggi presentano una petizione: chiedono riparazioni per strade e pozzi ormai in rovina.",
image: "villaggi_petizione.jpg",

sinistra: {
etichetta: "Rimanda",
testoConseguenza: "Le richieste vengono rimandate. Il tesoro evita spese immediate, ma nei villaggi cresce il malcontento.",
image: "villaggio_trascurato.jpg",
effetti: { popolo: -5, esercito: 0, oro: 3, fede: 0 }
},

destra: {
etichetta: "Intervieni",
testoConseguenza: "Le strade vengono riparate e i pozzi tornano a dare acqua pulita. I villaggi lodano la corona.",
image: "villaggio_riparato.jpg",
effetti: { popolo: 6, esercito: 0, oro: -4, fede: 0 }
}

},
  {
id: "cap1_guerra_002",
capitolo: 1,
categoria: "guerra",
titoloInterno: "Torre di guardia al confine",

testo: "Le sentinelle chiedono di costruire una nuova torre di guardia lungo il confine orientale, dove sono stati avvistati movimenti sospetti.",
image: "confine_torre_guardia.jpg",

sinistra: {
etichetta: "Rinuncia",
testoConseguenza: "La torre non verra costruita. Il tesoro evita la spesa, ma i soldati si sentono esposti.",
image: "confine_scoperto.jpg",
effetti: { popolo: 0, esercito: -6, oro: 3, fede: 0 }
},

destra: {
etichetta: "Costruiscila",
testoConseguenza: "La torre svetta sul confine e le pattuglie si sentono piu sicure. I lavori, pero, costano cari.",
image: "torre_costruita.jpg",
effetti: { popolo: 0, esercito: 5, oro: -4, fede: 0 }
}

},
  {
id: "cap1_carestia_002",
capitolo: 1,
categoria: "carestia",
titoloInterno: "Semi per la prossima stagione",

testo: "Dopo un raccolto debole, i contadini chiedono semi e attrezzi dal tesoro reale per salvare la prossima stagione.",
image: "contadini_semi.jpg",

sinistra: {
etichetta: "Nega aiuto",
testoConseguenza: "Il regno conserva le sue risorse, ma i campi rischiano di restare poveri anche il prossimo anno.",
image: "campi_spenti.jpg",
effetti: { popolo: -6, esercito: 0, oro: 2, fede: 0 }
},

destra: {
etichetta: "Sostienili",
testoConseguenza: "I contadini ricevono semi e attrezzi. La speranza torna nei campi, ma le casse reali si alleggeriscono.",
image: "campi_rinascita.jpg",
effetti: { popolo: 5, esercito: 0, oro: -4, fede: 1 }
}

},
  {
id: "cap1_intrighi_002",
capitolo: 1,
categoria: "intrighi",
titoloInterno: "Lettera intercettata",

testo: "Una guardia di palazzo consegna una lettera intercettata: sembra contenere accuse contro un consigliere molto vicino al trono.",
image: "lettera_intercettata.jpg",

sinistra: {
etichetta: "Bruciala",
testoConseguenza: "Decidi di distruggere la lettera per evitare scandali. La corte resta calma, ma il sospetto continua a serpeggiare.",
image: "lettera_bruciata.jpg",
effetti: { popolo: 0, esercito: -1, oro: 0, fede: 0 }
},

destra: {
etichetta: "Mostrala",
testoConseguenza: "La lettera viene esaminata davanti alla corte. Alcuni nobili si irrigidiscono, ma il trono dimostra fermezza.",
image: "corte_sconvolta.jpg",
effetti: { popolo: 0, esercito: 1, oro: -1, fede: 0 }
}

},
  {
id: "cap1_diplomazia_002",
capitolo: 1,
categoria: "diplomazia",
titoloInterno: "Dono all'ambasciata",

testo: "Un emissario straniero attende un gesto di cortesia: un dono prezioso potrebbe aprire nuove intese tra i due regni.",
image: "emissario_dono.jpg",

sinistra: {
etichetta: "Nessun dono",
testoConseguenza: "L'emissario riceve solo parole formali. I rapporti restano freddi e l'occasione diplomatica si affievolisce.",
image: "emissario_freddo.jpg",
effetti: { popolo: 0, esercito: -1, oro: 2, fede: 0 }
},

destra: {
etichetta: "Invia dono",
testoConseguenza: "Il dono viene accolto con favore. L'ambasciata si apre a nuovi dialoghi e il prestigio del regno cresce.",
image: "dono_ambasciata.jpg",
effetti: { popolo: 1, esercito: 1, oro: -3, fede: 0 }
}

}
];
