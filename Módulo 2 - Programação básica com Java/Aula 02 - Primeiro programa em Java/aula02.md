# Aula #01 - Instalação do Java (JDK) e Instruções e dicas
## Teoria
- Java é case sensitive;
- Código de exemplo:
```java
class HelloWorld {

    public static void main (String[] args){

        System.out.println("Hello World");
    }
    
}
```
- Class: Declaração da classe (seguido pelo nome da classe);
- public static...: É um método, ou seja, funções/ações que uma classe pode exercer;
    - public static: Modificador de acesso do método;
    - void: Tipo de retorno do método (como não retorna nada, nesse caso, é void);
    - main: Nome do método;
    - String[] args: Parâmetros/argumentos do método;
    - System.out.println(): Comando;
- Acessar a pasta com cd + endereço da pasta no cmd;
- Compilar: javac + nomedoarquivo.java;
- Executar: java + nomedoarquivo (sem extensão)
## Exercício proposto
- Crie um arquivo chamado AlunoReset.java
- Implemente um programa que imprima na tela o texto “Sou aluno do Level 1 do CWI Reset!”
- Compile e execute o programa
## Solução
```java
class AlunoReset {

    public static void main (String[] args){

        System.out.println("Sou aluno do Level 1 do CWI Reset!");
    }
    
}
```
## Dúvidas/Problemas
- O Visual Studio Code aponta erros neste código de solução e no código proposto pela professora na aula. Por quê?