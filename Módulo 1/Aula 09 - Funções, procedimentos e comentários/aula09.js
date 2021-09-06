//Aula:

function atravessar(){
    console.log("Olhar para a direita");
    console.log("Olhar para a esquerda");
    console.log("Atravessar");
    console.log();
  }
  
  atravessar();
  
  function print(i){
    console.log(i);
    console.log();
  }
  
  print(5);
  print(7);
  
  function multiplicar(a,b){
    return(a*b);
    console.log();
  }
  
  var resultado = multiplicar (3,5);
  
  print(resultado);
  
  //Exercício:
  
  //1.Crie uma função chamada imprimir que recebe um argumento e simplesmente imprime ele na tela;
  
  var imprimir = "Variável Imprimir";
  console.log(imprimir);
  
  //2.Lembra dos exercícios que propusemos na Aula 05 - Variáveis? Com base neles, faça o seguinte:
  //Crie uma função para cada algoritmo proposto lá, exceto o número 6;
  //Todas as funções devem retornar o valor final;
  //Procure dar nomes que façam sentido às funções. Ex.: a função para o item 4 poderia se chamar mediaAritmetica ou calcularMediaAritmetica;
  //Procure utilizar comentários para documentar cada método;
  //Na função da média aritmética, evite colocar todos os itens como argumentos do método, pois isso limitaria sua utilização a um número fixo de elementos. Tente implementar uma lógica para receber um array e calcular a média em cima dele, tornando a função mais reaproveitável em diferentes situações.
  
  
  
  //3.Com as funções criadas, execute todo código abaixo e verifique se os resultados são os esperados (o resultado esperado de cada função está no comentário ao lado da chamada)
  
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