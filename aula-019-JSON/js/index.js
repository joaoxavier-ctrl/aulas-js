/* JSON

JSON significa JavaScript Object Notation que traduzido pro português fica algo como notação de objeto JavaScript

Explicando de um modo simples JSON é basicamente uma forma de converter um objeto em texto e o contrário também, um texto em um objeto.

Ele é usado principalmente para transmitir dados entre sistemas de forma simples, já que o formato de texto é lido por praticamente toda linguagem de programação.

Para trabalhar com JSON no JavaScript usamos dois métodos:

JSON.parse() -> Converte texto no padrão JSON em objetos
JSON.stringify() -> Converte objetos em texto padrão JSON
*/

/*
//objeto carro
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2001
}

let texto = JSON.stringify(carro);

document.getElementById('area').innerHTML = texto;

let obj = JSON.parse(texto);

console.log(obj.modelo);
*/

/*const ajax = new XMLHttpRequest();

ajax.open('GET', 'https://viacep.com.br/ws/13253700/json/');
ajax.send();

ajax.onload = function(){
    document.getElementById('area').innerHTML = this.responseText;
    let obj = JSON.parse(this.responseText);
    alert(obj.cep);
}*/

function buscarCEP(){
    let input = document.getElementById('cep').value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
    ajax.send();

    ajax.onload = function(){
        //document.getElementById('texto').innerHTML = this.responseText;

        let obj = JSON.parse(this.responseText);

        let cep = obj.cep;
        let logradouro = obj.logradouro;
        let cidade = obj.localidade;
        let estado = obj.uf;

        document.getElementById('texto').innerHTML = "CEP: " +cep+ "<br>Logradouro: " +logradouro+ "<br>Cidade: " +cidade+ "<br>Estado: " +estado;
    }
}