// DEFINISCO UNA FUNZIONE CHE GENERA UN NUMERO RANDOM COMPRESO TRA 1 E 5 PER IL COMPUTER

function comNum(){
    let comNum = Math.floor(Math.random() * 5 + 1)
    return comNum
}

// DEFINISCO UNA FUNZIONE CHE STABILISCE SE LA SOMMA E' PARI O DISPARI

function evenOdd(result){
    if(result%2 == 0){
        return true
    }
    else{
        return false
    }
}

// UTENTE SCEGLIE PARI O DISPARI

let userChoice = prompt(`Digita "pari" o "dispari"`);

// CONTROLLO CHE L'UTENTE ABBIA INSERITO PARI O DISPARI 

while(userChoice != "pari" && userChoice != "dispari"){
    alert(`Devi inserire soltanto "pari" o "dispari", prova di nuovo`)
    userChoice = prompt(`Digita "pari" o "dispari"`);
}


// UTENTE SCEGLIE UN NUMERO DA 1 a 5

let userNum = parseInt(prompt(`Digita un numero da 1 a 5`))
console.log(userNum)

// CONTROLLO CHE IL NUMERO INSERITO DALL'UTENTE SIA NEL RANGE 1-5

if(userNum < 1 || userNum > 5){
    alert(`Il numero deve essere compreso tra 1 e 5, inserisci un nuovo valore`)
}


let com = comNum();
console.log(com)

let sum = userNum + com;
console.log(sum)

let result = evenOdd(sum);


if(result && userChoice == "pari"){
    alert(`Hai vinto! il tuo numero è ${userNum}, il numero del computer è ${com}. La somma è ${sum} e la tua scelta è stata ${userChoice}`)
}
else if(result && userChoice == "dispari"){
    alert(`Hai perso! il tuo numero è ${userNum}, il numero del computer è ${com}. La somma è ${sum} e la tua scelta è stata ${userChoice} `)
}
else if(result == false && userChoice == "dispari"){
    alert(`Hai vinto! il tuo numero è ${userNum}, il numero del computer è ${com}. La somma è ${sum} e la tua scelta è stata ${userChoice}`)
}
else if(result == false && userChoice == "pari"){
    alert(`Hai perso! il tuo numero è ${userNum}, il numero del computer è ${com}. La somma è ${sum} e la tua scelta è stata ${userChoice} `)
}