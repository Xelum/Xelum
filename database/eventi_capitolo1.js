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

}
];
