# Aula #04 - Variáveis
## Exercício proposto
- Repare na variável ```apresentacao``` mostrada a seguir. Ela é uma ```string``` que representa um texto que pode mudar conforme o valor de outras variáveis;
- Identifique e crie todas as variáveis necessárias para que o texto de ```apresentacao``` seja exibido sem erros. Depois, crie a variável ```apresentacao``` exatamente como mostrado a seguir e a imprima da seguinte forma: ```console.log(apresentacao)```;
```javascript
apresentacao = "Meu nome é " + nomeCompleto + " (sou conhecido[a] como " + apelido + ") e tenho " + idade + " anos. Nasci no dia " + dataNascimento + ", na cidade de " + localNascimento + ". Tenho " + altura + "m de altura e atualmente estou " + (trabalhando ? "empregado" : "desempregado") + "."
```
- Dica: você deve criar as demais variáveis ```antes``` de criar a variável ```apresentacao```.
## Minha solução
```javascript
var nomeCompleto = "Iago Ramon Möller";
var apelido = "Bellz";
var idade = 24;
var dataNascimento = "24 de fevereiro de 1994";
var localNascimento = "Taquara";
var altura = 1.91;
var trabalhando = true;

var apresentacao = "Meu nome é " + nomeCompleto + " (sou conhecido[a] como " + apelido + ") e tenho " + idade + " anos. Nasci no dia " + dataNascimento + ", na cidade de " + localNascimento + ". Tenho " + altura + "m de altura e atualmente estou " + (trabalhando ? "empregado" : "desempregado") + "."

document.write(apresentacao);
```
## Descobertas no processo
- Para imprimir uma variável do meu código em javascript diretamente na exibição do meu arquivo HTML no navegador (não no console), troquei o comando ```console.log``` por ```document.write``` e chamei o arquivo .js utilizando ```<script src="nomedoarquivo.js></script>``` dentro do body;
## Dúvidas
- Qual a diferença entre separar strings e valores com o ```+``` e com a ```,```? Nos meus testes, a ```,``` adicionava um espaço entre elas, o que o ```+``` não fazia;
- É possível criar um algorítimo ou utilizar um comando para copiar o conteúdo do arquivo .js na pasta diretamente dentro do meu arquivo .md, exibindo-o dentro de uma caixa de código javascript? Isso automatizaria o processo de copiar os códigos do meu arquivo .js para o arquivo .md ao fim de cada exercício;

@@include [aula04.js]