/*Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri
che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono
stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

BONUS 1:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo
in qualche modo.

BONUS 2:
Generiamo gli input da JS, invece di scriverli nel codice
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
* Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono
in comune tra i due array"*/

// controllo che veda il mio script.js
console.log('Js ok');
// ho fatto un file a parte per le mie funzioni faccio il controllo
window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
  });

  /** SCALETTA PROVVISORIA
   * 1.mi servirà una funzione per generare 5 numeri casuali
   * 2.mi servirà una variabile per salvare i numeri casuali estratti, probabilmente un
   * array che andrò a riempire
   * 3.mi servirà una funzione per il timer di 30 secondi, che dovrò gestire
   * 4.quando stampo in pagina i 5 numeri casuali parte un timer
   * 5.scaduto il tempo i miei 5 numeri scompaiono
   * 6-allo scadere del tempo compaiono 5 input
   * 7- devo chiedere all'utente di inserire i numeri che ha bisto prima se si li ricorda
   * 8-inserisco in un array i numeri dati dall'utente
   * 9-confornto il mio array di numeri generati con quelli inseriti da utente
   * 10-stampo il risultato dei numeri indovinati e quali sono
   * 
   */
//   prendo gli elementi dal DOM
const numbersPlayed = document.getElementById('numbers');
//   preparo la lista dei numeri casuali
  let randomNumbers= [];
//   quanti numeri devo pescare
  const howManyNumbers = 5;
//   range max di numeri da cui pescare
  const maxNumbers = 100;
//   invoco la funzione per generare 5 numeri casuali da 1 a 100
  randomNumbers = getRandomNumber(100,5);
//   stampo in console per vedere i miei numeri pescati
  console.log(randomNumbers);
//   stampo in pagina i numeri pescati
  numbersPlayed.innerText = randomNumbers;