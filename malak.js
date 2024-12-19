// visibilità globale cioè in tutte le parti del codice
{
var miaVariabile = 80;
}

// visibilità di blocco
{
let miaVariabile = 67;
console.log( "dichiarata con let: "+ miaVariabile)
}


console.log ( "Dichiarata con il var:" + miaVariabile) // stamperà con il valore 80 perchè let non è visibile

//--------------------------------------------------
// una variabile dichiarata con let può essere riassegnata
let esempio1= 30
console.log("esempio1= " + esempio1) ;

esempio1= "castagne";

console.log("esempio1= " + esempio1 )


// con cost non può esssere riassegnata (tranne per alcuni casi specifici)
const esempio2 = 7;

console.log ( "essempio2= " + esempio2)//ok

//esempio2 = "Ananas"
console.log ( "essempio2= " + esempio2)//errore

let variabile1 = 45