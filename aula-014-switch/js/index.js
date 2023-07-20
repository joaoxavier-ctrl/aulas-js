/*Switch

É usado para realizar diferentes ações com base em diferentes condições no mesmo bloco de verificação.
Caso a condição não seja compatível não será executada e o valor padrão será acionado
*/

/*function verificaCor(){
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase();

switch(cor){
    case "azul":
        //oq acontece
        document.body.style.backgroundColor = "blue";
        break;
    case "vermelho":
        //oq acontece
        document.body.style.backgroundColor = "red";
        break;
    case "amarelo":
        //oq acontece
        document.body.style.backgroundColor = "yellow";
        break;
    default:
        //oq acontece
        document.getElementById("teste").innerHTML = "Nenhuma cor disponivel para: "+cor;
}

}*/

function diaDaSemana(){
    var dia = new Date().getDay();
    console.log(dia);

    switch(dia){
        case 0:
            //oq acontece
            document.getElementById("teste").innerHTML = "Hoje é domingo";
            break;
        case 1:
            //oq acontece
            document.getElementById("teste").innerHTML = "Hoje é segunda";
            break;
        case 2:
            //oq acontece
            document.getElementById("teste").innerHTML = "Hoje é terça";
            break;
        case 3:
            //oq acontece
            document.getElementById("teste").innerHTML = "Hoje é quarta";
            break;
        case 4:
            //oq acontece
            document.getElementById("teste").innerHTML = "Hoje é quinta";
            break;
        case 5:
            //oq acontece
            document.getElementById("teste").innerHTML = "Hoje é sexta";
            break;
        case 6:
            //oq acontece
            document.getElementById("teste").innerHTML = "Hoje é sabado";
            break;
        default:
            //oq acontece
            document.getElementById("teste").innerHTML = "Não sei que dia é... ";
        }

}