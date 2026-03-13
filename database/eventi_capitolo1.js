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

}

];
