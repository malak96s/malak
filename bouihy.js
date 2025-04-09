
function bouihySaluta(){
    alert("Ciao da Bouihy");
}

function bouihyGetMusica(){
    console.log("Ciao sono Bouihy, i miei autori preferiti sono:.....");
}

function bouihyGetClasse(){
    console.log("La mia classe è la 1c");
}


function bouihyCasuale(x,y){
    let numeroCasuale = Math.floor(Math.random() * x) + y;   ;
    console.log("numero casuale: " + numeroCasuale);
}



function bouihyAggiungiTitolo(a){
    for (let index = 0; index < a; index++) {
        const contenitore2 = document.getElementById("contenitore");
        const nuovoTitolo = document.createElement("h1");
        nuovoTitolo.textContent = "Ciao" + index;
        contenitore2.appendChild(nuovoTitolo);
    }
}


function bouihyAmazzonia(){
    const contenitore = document.getElementById("contenitore")
    contenitore.className = "my-class";
}  



function bouihyGrigi (){
    document.body.className = "grigio";
   
}



  




  
