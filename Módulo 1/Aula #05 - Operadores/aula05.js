let nomeDoFulano = "Márcio";
let nomeDoBeltrano = "Mariana";
let mesmoNome = (nomeDoFulano == nomeDoBeltrano);
console.log(mesmoNome);

let idade = 27;
let maiorDeIdade = (idade >= 18);
console.log(maiorDeIdade);

let valorDoBoleto = 125;
let valorComJuros = (valorDoBoleto + ((valorDoBoleto/100)*10));
console.log(valorComJuros);

let item1 = 5;
let item2 = 7;
let item3 = 3;
let item4 = 4.8;
let item5 = 9.6;
let mediaItens = ((item1+item2+item3+item4+item5)/5);
console.log(mediaItens);

let receitaLiquidaDeVendas = 100000;
let custoProdutosVendidos = 30000;
let lucroBrutoDeEmpresa = (receitaLiquidaDeVendas - custoProdutosVendidos);
let margemBrutaDeEmpresa = ((lucroBrutoDeEmpresa / receitaLiquidaDeVendas)*100);
console.log(margemBrutaDeEmpresa+"%");

let saldo = 1000;
saldo = saldo - 99.9;
saldo = saldo + 2500;
saldo = saldo - 0.10;
saldo = saldo - saldo/4;
saldo = saldo /2;
console.log(saldo);