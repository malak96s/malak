
let colori = ["red","black","white","green","yellow","pink"];

let arrayImmagini = ["cammello.jpeg","giraffa.jpeg","gufo.jpeg","falco.jpeg","cammello.jpeg","giraffa.jpeg","gufo.jpeg","falco.jpeg"];

let contenitore = document.getElementById("contenitore");
let vociMenu = ["Home","About","Contatti","Shop"]

let barraNavigazione = document.createElement("nav");
barraNavigazione.id = "nav";
barraNavigazione.style.backgroundColor = "aqua";
barraNavigazione.style.padding = "2%";
contenitore.appendChild(barraNavigazione);

for (let index = 0; index < vociMenu.length; index++) {
    const nuovaVoce = document.createElement("a");
    nuovaVoce.textContent = vociMenu[index];
    nuovaVoce.style.margin = "2%";
    nuovaVoce.style.backgroundColor = "grey";
    nuovaVoce.style.padding = "1%";
    

    barraNavigazione.appendChild(nuovaVoce);

}



for (let index = 0; index < colori.length; index++) {
    const elemento = colori[index];
    const coloreTesto = colori[colori.length-1 - index]
    console.log(elemento);

    const nuovoParagrafo = document.createElement("p");
    nuovoParagrafo.textContent = elemento;
    nuovoParagrafo.style.backgroundColor = elemento;
    nuovoParagrafo.style.color = coloreTesto;
    nuovoParagrafo.style.textAlign = "center";
    nuovoParagrafo.style.marginRight = index * 5 + "%";
    nuovoParagrafo.style.marginLeft = index * 5 + "%";
    nuovoParagrafo.style.fontSize = (index+1)*10  + "px";
    nuovoParagrafo.style.padding = index + "%";


    contenitore.appendChild(nuovoParagrafo);
}



for (let index = 0; index < arrayImmagini.length; index++) {
    const nuovaImmagine = document.createElement("img");
    nuovaImmagine.src = arrayImmagini[index];
    nuovaImmagine.alt = arrayImmagini[index];
    nuovaImmagine.style.height = "200px";
    nuovaImmagine.style.width = "300px";
    nuovaImmagine.style.margin = "1%";
    contenitore.appendChild(nuovaImmagine);
}


bouihySaluta();
bouihySaluta();
bouihySaluta();