//Array de 5 posições;

var pokemons = ["Pikachu", "Charmander", "Squirtle", "Buterfree", "Meowth"]

for (num = 0; num < pokemons.length; num++){
  var pokemonSelecionado = num;
  var nomeDoPokemon = pokemons[pokemonSelecionado];
console.log (nomeDoPokemon);
}

  // A variável pokemons estabelece o array
  // O for cria um loop de repetição
  // O num determina a posição na matriz
  // O nomeDoPokemon diz que a variável pokemonSelecionado determina a posição do objeto na matriz

  // Funcionou, mas me embananei um pouco

  console.log();

//Algoritimo de média com números do array;

//The addition assignment operator (+=) adds the value of the right operand to a variable and assigns the result to the variable

//+= não funciona quando defino var, só quando modifico o valor dela
//Criação do array

var numeros=[5, 5, 5, 5, 5, 6];

//Definição da variável media com valor vazio (se tivesse algum valor, interferiria no resultado final);

var media=0;

//Criação do loop
//Toda vez que o loop é executado, o index é atualizado e passa para a próxima posição do array(index++), adicionando (+=) ao resultado da média, o que só para de ocorrer quando chegamos à última posição do array, graças ao index<numeros.length

for (index=0; index<numeros.length; index++){
  var numeroSelecionado=index;
  media += (numeros[numeroSelecionado]/numeros.length);
}

//Impressão do loop

console.log(media);
console.log();

//Exercício dos nomes comuns

var nomesComuns = ["Miguel", "Laura", "Lucas", "Beatriz", "Guilherme", "Maria", "Gabriel", "Ana", "Arthur", "Júlia", "Enzo", "Alice", "Rafael", "Mariana", "João", "Larissa", "Gustavo", "Maria Eduarda", "Pedro", "Sofia", "Bernardo", "Isabela", "Matheus", "Helena", "Davi", "Camila", "Heitor", "Lara", "Henrique", "Valentina", "Bruno", "Letícia", "Samuel", "Luana", "Felipe", "Amanda", "Lorenzo", "Yasmin", "Benjamin", "Sophia", "Vinícius", "Rebeca", "Rodrigo", "Juliana", "Eduardo", "Bruna", "Diego", "Cecília", "Antônio", "Fernanda", "Leonardo", "Isadora", "Noah", "Lorena", "Nícolas", "Lívia", "Daniel", "Manuela", "Thiago", "Vitória"]

var meuNome = "Daniel";
var nomeComum = false;

for (posicao=0; posicao<nomesComuns.length; posicao++){

  if(meuNome==nomesComuns[posicao]){
    nomeComum = true;
    //muda a condição de nomeComum
    break
    //break para parar de repetir loop
  }

} 

if (nomeComum){
console.log("É, nome comum :P")
}
else {
  console.log("Diferentão, hein? XD");
}

//Não entendi porque só colocar nomeComum depois do if funciona. Estudar relação true/false