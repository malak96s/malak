
for(let y = 0; y < 100; y++){
    console.log("Ora il valore di y é: " + y);
}


for(let contatore = 0; contatore < 5;contatore++){
    console.log("Ha detto ciao per " + contatore + " volte!");
}


for (let index = 0; index < 20; index++) {
    let numeroCasualeDec = Math.random() * 100;
    let numeroCasualeArr = Math.floor(numeroCasualeDec);
    console.log(numeroCasualeArr);
    
}

let contenitore2 = document.getElementById("contenitore");


// for (let index = 0; index < 15; index++) {
//     const nuovoElemento = document.createElement("button");
//     nuovoElemento.textContent = index;
//     nuovoElemento.style.textAlign = "center";
//     nuovoElemento.style.backgroundColor = "red";
//     nuovoElemento.style.padding = "1%";
//     nuovoElemento.style.margin = "1%";
//     contenitore2.appendChild(nuovoElemento);
// }





let arrayValori = [34,76,90,2,78,89];
let somma = 0;

for(let i = 0; i <  arrayValori.length; i++ ){
    if(arrayValori[i] == 90){
        console.log("la paura");
    }
  
    somma = somma + arrayValori[i];
    console.log(somma);
}