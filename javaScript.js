let nomeList = []
let sobreNomeList = []
let edadeList = []

let datos={nomeList,sobreNomeList,edadeList}

function usuario (){
//solo una vez
while (true) {
    let nome = prompt("Ingresa seu nome");
    let sobreNome = prompt("Ingresa seu sobrenome");
    let edade = Number(prompt("Ingresa sua edade"));
    let repetir = prompt("Quieres ingresar otro nombre sim / não:");

    nomeList.push(nome)
    sobreNomeList.push(sobreNome)
    edadeList.push(edade)

if ('não' == repetir){
    break;

    for (var i = 0; i<= nomeList.length; i++){

    }
}
}

document.write ('Ben-vindo / os'+ ' ' + nomeList + ' ' +sobreNomeList + ' ' + edadeList + ' ' );
console.log("Nomes",nomeList,"sobrenomes",sobreNomeList, "edades",edadeList)

}

