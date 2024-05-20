let valorProduto = Number(prompt("Insira o valor do produto: "));

if (valorProduto >= 20){
    document.getElementById("result").innerHTML = "Produto aprovado!";

}else {
    document.getElementById("result").innerHTML = `Desculpe :( <br> Produtos abaixo de $20 não são permitidos.`;

}