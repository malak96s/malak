let colori = ["red","yellow","green","blue","violet","pink"];
console.log(colori.length);

let contenitore = document.getElementById("contenitore")



for (let index = 0; index < colori.length; index++) {
    const elemento = colori[index];
    const coloreTesto = colori[colori.lenght-1 - index]
    console.log(elemento);

    const nuovoParagrafo = document.createElement("p");
    nuovoParagrafo.textContent = elemento;
    nuovoParagrafo.style.backgroundColor = elemento;



    
    contenitore.appendChild(nuovoParagrafo);
}