
const bottoneAggiungi = document.getElementById('bottone-aggiungi');
const lista = document.getElementById('Lista')
const bottoneTogli = document.getElementById('bottone-togli');


console.log(lista.children.length)


//al click del mouse attiva la funzione anonima
bottoneAggiungi.addEventListener ('click', function(){
   
//creo un nuovo elemento
const nuovoElemento = document.createElement('li');
const userInput = prompt ("Inserisci imput")
const iconaCestino = document.createElement('span')


nuovoElemento.textContent = 'il mio nuovo Elemento ' + (lista.children.length + 1);
lista.appendChild(nuovoElemento)
nuovoElemento.textContent = userInput
iconaCestino.textContent = " 🗑️"
iconaCestino.style.cursor = " pointer"

nuovoElemento.appendChild(iconaCestino)
lista.appendChild(nuovoElemento)


 iconaCestino.addEventListener('click',function () {
nuovoElemento.remove();
 
})



}


)


bottoneTogli.addEventListener('click', function(){
    lista.lastElementChild.remove()
})

