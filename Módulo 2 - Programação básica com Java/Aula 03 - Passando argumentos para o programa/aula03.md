# Aula #03 - Passando argumentos para o programa
## Teoria
### Passando argumentos para o programa
- Os argumentos podem ser inseridos pelo terminal;
- Java é uma linguagem compilada e interpretada (pesquisar diferença de interpretação e compilação);
```java
class Argumentos {

    public static void main (String[] args){

        System.out.println("Você digitou " + args[0]);
    }
    
}
```
- Na linha de terminal:
```
cd C:\Users\Iago\Documents\GitHub\Meu-percurso-no-CWI-Reset\Módulo 2 - Programação básica com Java\Aula 03 - Passando argumentos para o programa
javac Argumentos.java
java Argumentos CursoJava
```
- (Isso vai retornar ```Você digitou CursoJava``` no terminal)
### Entendendo os erros
- Tipos de erros
    - Erros de Sintaxe: Quando há erros na escrita do código (elementos faltantes);
    - Erros de Semântica: (pesquisar, pois explicação da aula não foi satisfatória);
    - Erros de Tempo de Execução: (pesquisar, pois explicação da aula não foi satisfatória);
## Exercício proposto
- Crie um arquivo chamado AlunoResetComParametro.java
- Implemente um programa que imprima na tela o texto “Sou aluno do Level 1 do CWI Reset! Me chamo {SEU NOME}”
- Compile e execute o programa
## Solução
```java
class AlunoResetComParametro {
        public static void main (String[] args){
    
            System.out.println("Sou aluno do Level 1 do CWI Reset! Me chamo " + args[0]);
        }
        
    }
```
