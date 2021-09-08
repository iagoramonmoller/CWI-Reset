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
- Possuem um espaço fixo de dados;
	- Booleans (true/false) // ```boolean verdadeiro = true;```
	- Números:
		- Numéros inteiros:
			- byte: números pequenos; (-128 a 127)
			- short: maiores que um byte; (-32.768 a 32.767)
			- int: maiores que o short; (-2.147.483.648 a 2.147.483.647)
			- long: maiores que o int; (-9.223.372.036.854.775.808 a 9.223.372.036.854.775.807)
			- char (caracteres)
		- Pontos flutuantes: números com casas decimais.
			- float (ocupa 32 bits no espaço de memória) [Declara-se 100,30 como 100.30f, por exemplo]
			- double (ocupa 64 bits no espaço de memória) [Declara-se 100,30 só como 100.30]
- Usa-se mais ```int```, ```long``` e ```double```.
- [Tabela ASCII](http://www.asciitable.com/);
- Java é uma linguagem multilíngua e aceita códigos Unicode;
	- Exemplo de aplicação unicode: ```char interrogacao = 0x00E1;```
- Se eu printar um caracter com valor ```97```, por exemplo, ele vai printar o valor ```a```
- Literais: (buscar explicação);
- Double e float aceitam notação científica;
- Sistemas Hexadecimais, Octais e Binários: (pesquisar);
	- ```int decVal = 26;```
	- ```int hexVal = 0x1a;```
	- ```int octVal = 032;```
	- ```int binVal = 0b11010; // a partir do JDK 7```
- Em literais, pode separar números com underscore;
- Você não pode colocar underscore perto de pontos, sufixos e prefixos, antes de números (pois vira identificador), não pode colocar no final de um literal, não pode colocar no começo ou no final de números;
- Escape - char

Sequência de Escape | Descrição 
------------------- | ----------------------
\t                  | tab
\b                  | backspace
\n                  | nova linha
\r                  | retorno de carro
\f                  | avanço de página
\'                  | aspas simples
\"                  | aspas duplas
\\                  | barra invertida
\ddd                | constante octal
\uxxxx              | constante hexadecimal

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
