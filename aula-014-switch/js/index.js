/*Switch

É usado para realizar diferentes ações com base em diferentes condições no mesmo bloco de verificação.
Caso a condição não seja compatível não será executada e o valor padrão será acionado
*/

function verificaCor(){
    let cor = document.getElementById("cor").value;

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

}