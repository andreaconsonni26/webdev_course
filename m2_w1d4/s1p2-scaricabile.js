/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
console.log("I principali datatype in Javascript sono: stringhe, numeri, boolean, array, oggetto, null, undefined.")
console.log("- Stringa: è un testo racchiuso tra virgolette, come 'Ciao'");
console.log("- Numero: è un numero, come 5 o 3.14");
console.log("- Boolean: è un valore vero o falso (true o false)");
console.log("- Undefined: è una variabile che non ha ancora un valore");
console.log("- Null: è un valore 'vuoto' che si mette apposta per dire che non c'è nulla");
console.log("- Oggetto: è un contenitore di dati, come una scatola con etichette e valori dentro");
console.log("- Array: è una lista ordinata di valori, come una fila di oggetti");

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/
console.log("Un oggetto in Javascript è un tipo di dato, che si dichiara utilizzando le parentsi graffe, al cui interno vengono salvate coppie di chiave-valore. La chiave è una stringa, il valore invece può essere qualsiasi altro tipo di dato. Ogni coppia chiave-valore è scritta su una riga diversa e separata da ;")

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
console.log(12+20);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;
console.log(x);

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let name = "Andrea";
console.log(name);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
x=12;
console.log(4-x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/
let name1 = "john";
let name2 = 'John';
console.log(name1===name2);
console.log(name1===name2.toLowerCase());

