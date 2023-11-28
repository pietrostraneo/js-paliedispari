// UTENTE SCEGLIE PARI O DISPARI

let userChoice = prompt(`Digita "pari" o "dispari"`);

// UTENTE SCEGLIE UN NUMERO DA 1 a 5

let userNum = parseInt(prompt(`Digita un numero da 1 a 5`))

// CONTROLLO CHE IL NUMERO INSERITO DALL'UTENTE SIA NEL RANGE 1-5

if(userNum < 1 || userNum > 5){
    alert(`Il numero deve essere compreso tra 1 e 5, inserisci un nuovo valore`)
}

// DEFINISCO UNA FUNZIONE CHE GENERA UN NUMERO RANDOM COMPRESO TRA 1 E 5 PER IL COMPUTER

function comNum(){
    let comNum = Math.floor(Math.random() * 5 + 1)
    return comNum
}

comNum();
console.log(comNum())

let sum = userNum + comNum()
console.log(sum)