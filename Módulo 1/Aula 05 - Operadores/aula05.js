var nomeDoFulano = "Márcio";
var nomeDoBeltrano = "Mariana";
var mesmoNome = (nomeDoFulano == nomeDoBeltrano);
document.write(mesmoNome+"<br>");

var idade = 27;
var maiorDeIdade = (idade >= 18);
document.write(maiorDeIdade+"<br>");

var valorDoBoleto = 125;
var valorComJuros = (valorDoBoleto + ((valorDoBoleto/100)*10));
document.write(valorComJuros+"<br>");

var item1 = 5;
var item2 = 7;
var item3 = 3;
var item4 = 4.8;
var item5 = 9.6;
var mediaItens = ((item1+item2+item3+item4+item5)/5);
document.write(mediaItens+"<br>");

var receitaLiquidaDeVendas = 100000;
var custoProdutosVendidos = 30000;
var lucroBrutoDeEmpresa = (receitaLiquidaDeVendas - custoProdutosVendidos);
var margemBrutaDeEmpresa = ((lucroBrutoDeEmpresa / receitaLiquidaDeVendas)*100);
document.write(margemBrutaDeEmpresa+"%<br>");

var saldo = 1000;
saldo = saldo - 99.9;
saldo = saldo + 2500;
saldo = saldo - 0.10;
saldo = saldo - saldo/4;
saldo = saldo /2;
document.write(saldo+"<br>");