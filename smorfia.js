const smorfia = [
    "L'Italia", "'A piccerella", "'A jatta", "'O puorco", "'A mano", "'O ceppone", "'O vaso", "'A Maronna", "'A figliata", "'E scartellate",
    "'E fasule", "'O suricillo", "Sant'Antonio", "'O mbriaco", "'O guaglione", "'O culo", "'A disgrazia", "'O sanghe", "'A resata", "'A festa",
    "'A femmena annura", "'O pazzo", "'O scemo", "'E denare", "Natale", "'O ferru vecchio", "Nannina", "'E zizze", "'O pate d''e creature", "'E palle d' 'o tenente",
    "'O patrone 'e casa", "'O capitone", "Ll'anne 'e Cristo", "'A capa", "L'auciello", "'E castagnelle", "'O monaco", "'E mmazzate", "'O cappiello", "'A paposcia",
    "'O mare", "'O curtiello", "'O caffè", "'E scarpune", "'O vino", "'O muorto che parla", "'O muorto", "Ll'omme", "'O piezz'e carne", "'O pane",
    "'O cerino", "'A mamma", "'O viecchio", "'O sciocco", "'A musica", "'A caruta", "'A meraviglia", "'O scartellato", "'O guaglione", "'O lupo",
    "'A paura", "'O muorto ammazzato", "'O chianto", "'O teatro", "'A sposa", "'O chiavicone", "'A festa 'e Mamma", "'O morto secco", "'O cacciatore", "'A vecchia",
    "'O palazzo", "'A zuppa cotta", "'A tavola apparecchiata", "'O diavolo", "L'omm e merd", "'O spitale", "'O maletiempo", "'A rovina", "'O peccerillo", "'A Madonna",
    "'O mbrellone", "'A paura 'e murì", "'O morto ca parla", "'A vecchia ca cammina", "'O marito 'e Lucia", "'E figlie so' piezze 'e core", "'A guerra", "'A Madonna 'e sotto 'e bombe", "'A Maronna d' 'o Carmine", "'O panaro",
    "'A vergine", "'O vascio", "'A sposa", "'O niente", "'A paura", "'O pateterno", "'E casecavalle", "'O sciammeria", "'A bella figliola", "'O novantanove",
    "'A paura"
];

let numeriDisponibili = Array.from({ length: 90 }, (_, i) => i + 1);

function estraiNumero() {
    if (numeriDisponibili.length === 0) {
        document.getElementById("numero").innerText = "Tutti i numeri sono stati estratti!";
        document.getElementById("significato").innerText = "";
        return;
    }

    let indice = Math.floor(Math.random() * numeriDisponibili.length);
    let numeroEstratto = numeriDisponibili.splice(indice, 1)[0];
    document.getElementById("numero").innerText = "Numero Estratto: " + numeroEstratto;
    document.getElementById("significato").innerText = "Significato: " + smorfia[numeroEstratto - 1];
}