# Aula #05 - Variáveis
## Teoria
### Introdução a variáveis
- Variável é uma área de memória associada a um nome, que pode armazenar valores de um determinado tipo;
- Em java, é declarada da seguinte forma: ```<tipo><nome da variável>;``` ou, quando desejarmos inicializar ela, ```<tipo><nome da variável> = <valor>;```;
- Convenção de nomenclatura para variáveis:
    - Não utilizar as [palavras reservadas](http://www.linhadecodigo.com.br/artigo/83/as-52-palavras-reservadas-do-java.aspx) (são 52 palavras):
    - Variável pode começar com letras de a-z, ```_``` e ```&```;
    - A segunda letra pode conter, também, números;
    - Boas práticas: evitar o ```&```;
    - camelCase: começar variável com letra minúscula, ainda que o Java aceite começar com maiúscula;
- Convenção de nomenclatura para pacotes: tudo em letra minúscula;
    - Os ```.``` separam os diretórios;
### Tipos primitivos
- Java não é cem por cento orientado a objetos;
- int: números inteiros;
- float: 
- char: caracteres;
### Demonstração
```java
package com.iagoramonmoller.cursojava.aula05;

public class Variaveis {

	public static void main(String[] args) {
		
		int idade = 20;
		String nome = "Iago";
		
		idade = 25;
				
		System.out.println("Idade = " + idade);
		System.out.println("Nome = " + nome);

	}

}
```
## Processo
- Preferi trabalhar com o Eclipse neste módulo de Java para acompanhar os tutoriais da professora;