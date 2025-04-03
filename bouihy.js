function bouihySaluta(){
    alert("Ciao da Bouihy")
}
function bouihymusica(){
    console.log("Ciao sono buoihy, i miei artisti preferiti sono: Glocky, NIky savage, Tony boy e tutti quelli della trap italiana")
}

function bouihyGetClasse(){
    console.log("La mia classe è la 1c")
}
function bouihyCasuale(){
    let numeroCasuale = Math.random();
    console.log(numeroCasuale)
}



function bouihyAggiungiTitolo(a){
for (let index = 0; index < a; index++) {
    const contenitore2 = document.getElementById("contenitore");
    const nuovoTitolo = document.createElement ("h1");}
nuovoTitolo.textContent = "Ciao" + index 
contenitore2.appendChild(nuovoTitolo);
}