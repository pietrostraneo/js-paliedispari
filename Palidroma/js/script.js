// DEFINIZIONE DI UNA FUNZIONE CHE VERIFICA SE LA PAROLA INSERITA DALL'UTENTE E' PALINDROMA

function palindroma(word){
    let pal = word.split(``).reverse().join(``)
    if(pal == word){
        return true
    }
    else{
        return false
    }
}

// PERMETTO ALL'UTENTE DI INSERIRE LA SUA PAROLA PER EFFETTUARE IL CONTROLLO
let userText = prompt(`Inserisci una parola`)

// RICHIAMO LA FUNZIONE DEFINITA IN PRECEDENZA
palindroma(userText);


// RESTITUISCO IL RISULTATO DEL CONTROLLO ALL'UTENTE
if(palindroma(userText)){
    alert(`La parola da te inserita (${userText}) è palindroma`)
}
else{
    alert(`La parola da te inserita (${userText}) non è palindroma`)
}