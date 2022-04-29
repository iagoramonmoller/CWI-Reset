//Aula:

//Cria a função atravessar:

function atravessar(){
    console.log("Olhar para a direita");
    console.log("Olhar para a esquerda");
    console.log("Atravessar");
    console.log();
  }

//Executa a função atravessar:
  
  atravessar();

//Cria a função print:
  
  function print(i){
    console.log(i);
    console.log();
  }

//Executa a função print, dando valores diferentes para i:
  
print(5);
print(7);

//Cria a função multiplicar e retorna o resultado da multiplicação:
  
  function multiplicar(a,b){
    return(a*b);
    console.log();
  }
  
// Cria a variável que imprime o resultado da função multiplicar:

  var resultado = multiplicar (3,5);
  
//Imprime a variável resultado:

print(resultado);
  
//Exercício:
 //1.Crie uma função chamada imprimir que recebe um argumento e simplesmente imprime ele na tela;
  
  function imprimir(i){
      console.log(i)
      console.log()
  }

  imprimir("Argumento");
  
//2.Lembra dos exercícios que propusemos na Aula 05 - Variáveis? Com base neles, faça o seguinte:
//Crie uma função para cada algoritmo proposto lá, exceto o número 6;

//Comparação de nomes:

  function mesmoNome(a,b){
   return(a==b);
  }

  cwi = "CWI"
  reset = "Reset"

imprimir(mesmoNome(cwi, cwi))   // true
imprimir(mesmoNome(cwi, reset)) // false

//Verificação de idade:

  function maiorDeIdade(a){
      return(a>=18)
  }

imprimir(maiorDeIdade(30)) // true
imprimir(maiorDeIdade(18)) // true
imprimir(maiorDeIdade(5))  // false

//Valor com juros:

function valorComJuros(valorDoBoleto,juros){
    return(valorDoBoleto+(valorDoBoleto/100)*juros)
}

imprimir(valorComJuros(100,10))   // 110
imprimir(valorComJuros(984.5,10)) // 1082.95

//Média aritmética:

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

//Cálculo margem bruta:

function margemBruta(receitaLiquidaDeVendas,custoProdutosVendidos){
    var lucroBrutoDeEmpresa = (receitaLiquidaDeVendas - custoProdutosVendidos);
    var margemBrutaDeEmpresa = ((lucroBrutoDeEmpresa / receitaLiquidaDeVendas)*100);
    return(margemBrutaDeEmpresa+"%")
}

imprimir(margemBruta(1000000, 500000))      // 50
imprimir(margemBruta(528459.11, 632501.87)) // -19.68[...]