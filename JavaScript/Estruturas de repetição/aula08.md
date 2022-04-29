# Aula #08 - Estruturas de repetição
## Exercício proposto
- Crie um array de ```5``` posições com quaisquer valores. Utilize qualquer estrutura de repetição apresentada no vídeo para exibir todos os valores do array;
- Crie um algoritmo capaz de calcular a média aritmética de um array com qualquer quantidade de elementos numéricos. Para fins de exemplo, o resultado do algoritmo com um array de valores ```1, 2, 3, 5, 8, 13, 21, 23, 34, 55``` deve ser ```16.5```. Procure usar uma estrutura de repetição diferente da que você usou para fazer o exercício anterior;

Considerando a lista dos 60 nomes mais comuns no Brasil nos últimos 10 anos, crie um algoritmo para verificar se seu nome está lá. Se sim, exiba a mensagem: ```É, nome comum :P```. Se não, exiba a mensagem: ```Diferentão, hein? XD```.

```javascript
nomesComuns = ["Miguel", "Laura", "Lucas", "Beatriz", "Guilherme", "Maria", "Gabriel", "Ana", "Arthur", "Júlia", 
"Enzo", "Alice", "Rafael", "Mariana", "João", "Larissa", "Gustavo", "Maria Eduarda", "Pedro", "Sofia", 
"Bernardo", "Isabela", "Matheus", "Helena", "Davi", "Camila", "Heitor", "Lara", "Henrique", "Valentina", 
"Bruno", "Letícia", "Samuel", "Luana", "Felipe", "Amanda", "Lorenzo", "Yasmin", "Benjamin", "Sophia", 
"Vinícius", "Rebeca", "Rodrigo", "Juliana", "Eduardo", "Bruna", "Diego", "Cecília", "Antônio", "Fernanda", 
"Leonardo", "Isadora", "Noah", "Lorena", "Nícolas", "Lívia", "Daniel", "Manuela", "Thiago", "Vitória"]
```
## Solução
Exercício 1:
```javascript
var pokemons = ["Pikachu", "Charmander", "Squirtle", "Buterfree", "Meowth"]

for (num = 0; num < pokemons.length; num++){
  var pokemonSelecionado = num;
  var nomeDoPokemon = pokemons[pokemonSelecionado];
console.log (nomeDoPokemon);
}
```
Exercício 2:
```javascript
var numeros=[5, 5, 5, 5, 5, 6];
var media=0;

for (index=0; index<numeros.length; index++){
  var numeroSelecionado=index;
  media += (numeros[numeroSelecionado]/numeros.length);
}

console.log(media);
console.log();
```
Exercício 3:
```javascript
var nomesComuns = ["Miguel", "Laura", "Lucas", "Beatriz", "Guilherme", "Maria", "Gabriel", "Ana", "Arthur", "Júlia", "Enzo", "Alice", "Rafael", "Mariana", "João", "Larissa", "Gustavo", "Maria Eduarda", "Pedro", "Sofia", "Bernardo", "Isabela", "Matheus", "Helena", "Davi", "Camila", "Heitor", "Lara", "Henrique", "Valentina", "Bruno", "Letícia", "Samuel", "Luana", "Felipe", "Amanda", "Lorenzo", "Yasmin", "Benjamin", "Sophia", "Vinícius", "Rebeca", "Rodrigo", "Juliana", "Eduardo", "Bruna", "Diego", "Cecília", "Antônio", "Fernanda", "Leonardo", "Isadora", "Noah", "Lorena", "Nícolas", "Lívia", "Daniel", "Manuela", "Thiago", "Vitória"]

var meuNome = "Daniel";
var nomeComum = false;

for (posicao=0; posicao<nomesComuns.length; posicao++){

  if(meuNome==nomesComuns[posicao]){
    nomeComum = true;
    break
  }

} 

if (nomeComum){
console.log("É, nome comum :P")
}
else {
  console.log("Diferentão, hein? XD");
}
```
## Descobertas
- Quando trabalho com a relação true/false, não é preciso dizer ```if (nomeComum=true)```, apenas ```if (nomeComum)```. Ainda não entendi bem o porquê, preciso estudar melhor esse assunto;
- O operador ```+=``` atua somando a variável com o valor e atribuindo o resultado à variável, o que no loop resolve o problema da média aritmética;
## Dúvidas/Problemas
- O operador ```+=``` não funcionou quando tentei definir var, só quando modifiquei o valor dela dentro do loop. Não entendi bem o porquê;
- Faz-se necessário estudar melhor o uso de ```break```;
- Seria útil, daqui para frente, anotar os conteúdos das aulas no arquivo markdown. Em momento oportuno, adicionar a teoria às aulas anteriores e gerar arquivos markdown com o conteúdo das aulas sem exercícios;
- Preciso ir além do que pede os exercícios e criar impressões no console que descrevam melhor o que está ocorrendo. Também preciso manter o hábito de gerar comentários durante o código;