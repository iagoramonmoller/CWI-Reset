# Aula #09 - Funções, procedimentos e comentários
## Exercício proposto
1) Crie uma função chamada ```imprimir``` que recebe um argumento e simplesmente imprime ele na tela;
2) Lembra dos exercícios que propusemos na Aula 05 - Variáveis? Com base neles, faça o seguinte:
- Crie uma função para cada algoritmo proposto lá, exceto o número ```6```;
- Todas as funções devem retornar o valor final;
- Procure dar nomes que façam sentido às funções. Ex.: a função para o item ```4``` poderia se chamar ```mediaAritmetica``` ou ```calcularMediaAritmetica```;
- Procure utilizar comentários para documentar cada método;
- Na função da média aritmética, evite colocar todos os itens como argumentos do método, pois isso limitaria sua utilização a um número fixo de elementos. Tente implementar uma lógica para receber um array e calcular a média em cima dele, tornando a função mais reaproveitável em diferentes situações.
3) Com as funções criadas, execute todo código abaixo e verifique se os resultados são os esperados (o resultado esperado de cada função está no comentário ao lado da chamada):
```javascript
cwi = "CWI"
reset = "Reset"
imprimir(mesmoNome(cwi, cwi))   // true
imprimir(mesmoNome(cwi, reset)) // false

imprimir("---")

imprimir(maiorDeIdade(30)) // true
imprimir(maiorDeIdade(18)) // true
imprimir(maiorDeIdade(5))  // false

imprimir("---")

imprimir(valorComJuros(100))   // 110
imprimir(valorComJuros(984.5)) // 1082.95

imprimir("---")

imprimir(mediaAritmetica([1]))             // 1
imprimir(mediaAritmetica([1, 4, 10]))      // 5
imprimir(mediaAritmetica([1, 2, 3, 4, 5])) // 3

imprimir("---")

imprimir(margemBruta(1000000, 500000))      // 50
imprimir(margemBruta(528459.11, 632501.87)) // -19.68[...]
```
## Solução
1) Função de impressão:
```javascript
  function imprimir(i){
      console.log(i)
      console.log()
  }

  imprimir("Argumento");
```
2) Funções a partir do exercício de variáveis:

Função 1:
```javascript
  function mesmoNome(a,b){
   return(a==b);
  }

  cwi = "CWI"
  reset = "Reset"

imprimir(mesmoNome(cwi, cwi))   // true
imprimir(mesmoNome(cwi, reset)) // false
```
Função 2:
```javascript
  function maiorDeIdade(a){
      return(a>=18)
  }

imprimir(maiorDeIdade(30)) // true
imprimir(maiorDeIdade(18)) // true
imprimir(maiorDeIdade(5))  // false
```
Função 3:
```javascript
function valorComJuros(valorDoBoleto,juros){
    return(valorDoBoleto+(valorDoBoleto/100)*juros)
}

imprimir(valorComJuros(100,10))   // 110
imprimir(valorComJuros(984.5,10)) // 1082.95
```
Função 4:
```javascript

function mediaAritmetica(a){
    var media=0;
    var arrayNumeros=a;
    for(indice=0; indice<arrayNumeros.length;indice++){
        var numeroSelecionado=indice;
        media += (arrayNumeros[numeroSelecionado]/arrayNumeros.length);
    }
    return(media)
        }

imprimir(mediaAritmetica([1]))             // 1
imprimir(mediaAritmetica([1, 4, 10]))      // 5
imprimir(mediaAritmetica([1, 2, 3, 4, 5])) // 3
```
Função 5:
```javascript
function margemBruta(receitaLiquidaDeVendas,custoProdutosVendidos){
    var lucroBrutoDeEmpresa = (receitaLiquidaDeVendas - custoProdutosVendidos);
    var margemBrutaDeEmpresa = ((lucroBrutoDeEmpresa / receitaLiquidaDeVendas)*100);
    return(margemBrutaDeEmpresa+"%")
}

imprimir(margemBruta(1000000, 500000))      // 50
imprimir(margemBruta(528459.11, 632501.87)) // -19.68[...]
```