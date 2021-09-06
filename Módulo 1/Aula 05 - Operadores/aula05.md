# Aula #05 - Operadores
## Exercício proposto
1) Crie uma variável ```mesmoNome``` que verifica se ```nomeDoFulano``` é igual a ```nomeDoBeltrano```;
2) Crie uma variável ```maiorDeIdade``` que verifica se ```idade``` é de um adulto;
3) Crie uma variável ```valorComJuros``` que calcula o valor de um boleto acrescido de ```10%``` de juros por atraso;
4) Faça a representação da fórmula de média aritmética, considerando um conjunto de elementos com ```5``` elementos nomeados como ```item1```, ```item2```, ```item3```, ```item4``` e ```item5```;
5) O lucro bruto de uma empresa é representado pela receita líquida de vendas menos o custo dos produtos vendidos. A margem bruta de uma empresa é calculada pela divisão do lucro bruto pela receita líquida de vendas. Faça a representação da fórmula da margem bruta, multiplicando o resultado final por 100 para obter o valor percentual;
6) Usando qualquer ferramenta de codificação, crie um algoritmo seguindo os passos abaixo para encontrar o valor do saldo ao final do processo (atente-se para utilizar . como separador decimal):
- O saldo da sua conta é ```R$ 1000,00```
- Você decide comprar uma calça por ```R$ 99,90```
- Você recebe o seu salário de ```R$ 2500,00```
- Você está caminhando na rua e decide dar ```R$ 0,10``` para um morador de rua
- Você compra um ar condicionado cujo valor é ```25%``` do seu saldo atual
- Você decide antecipar o pagamento de uma dívida usando metade do seu saldo
- Qual o valor do seu saldo? 🤔
## Solução
```javascript
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
```
## Descobertas
- O comando ```document.write``` não adiciona espaços entre as impressões (o que ocorre com ```console.log```). Quando impresso em HTML, faz-se necessário adicionar ```<br>``` às strings, que serão interpretadas como espaços em uma página HTML;
## Dúvidas/Problemas
- A utilização de ```<br>``` no ```document.write``` dentro do arquivo .js me parece problemático na construção de uma página, especialmente quando há muito código. Que maneira facilita e melhora esse processo de imprimir variáveis .js em uma página HTML?