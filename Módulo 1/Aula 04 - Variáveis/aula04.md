# Aula #04 - Variáveis
## Parte teórica
Adicionar aqui posteriormente
## Minha solução
<br><br>
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
- Para imprimir uma variável do meu código em javascript diretamente na exibição do meu arquivo HTML no navegador (não no console), troquei o comando "console.log" por "document.write" e chamei o arquivo externo em .js utilizando o comando "<script src="nomedoarquivo.js></script>";
## Dúvidas
- Qual a diferença entre separar strings e valores com o "+" e com a ","? Nos meus testes, a "," adicionava um espaço entre elas, o que o "+" não fazia;