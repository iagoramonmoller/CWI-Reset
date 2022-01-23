# Aula #06 - Lendo dados do teclado usando a classe Scanner
## Teoria
### Classe Scanner
- ```Scanner scan = new Scanner(System.in);```
- Antes da declaração da classe, é preciso colocar o import:
```java
import_java.util.Scanner;

public class LeituraDadosTeclado {

}
```
- Opção 1: Lendo uma linha inteira:
```String name = scan.nextLine();```
- Opção 2: Lendo um tipo específico:
```java
String primeiroNome = scan.next();
int idade = scan.nextInt();
double altura = scan.next.Double();
```
- Código de exemplo:
```java
package com.loiane.cursojava.aula12;

import java.util.Scanner;

public class LeituraDadosTeclado {

    public static void main(String[] args){

        Scanner scan = new Scanner(System.in);

        System.out.println("Digite seu nome completo:");
        String nomeCompleto = scan.nextLine();
        System.out.println("Seu nome completo é: "+ nomeCompleto);
        
        System.out.println("Digite seu primeiro nome:");
        String primeiroNome = scan.next();
        System.out.println("Seu primeiro nome é: "+ primeiroNome);

        System.out.println("Digite a sua idade:");
        int idade = scan.nextInt();
        System.out.println("Sua idade é: " + idade);

        System.out.println("Digite a sua altura:");
        double altura = scan.nextDouble();
        System.out.println("Sua idade é: " + altura);

    }

}
```
## Exercício proposto
- Vamos refazer o exercício da aula 3 usando a classe Scanner:
    - Crie um arquivo chamado AlunoResetLeituraTeclado.java;
    - Implemente um programa que solicite para o usuário digitar o próprio nome. Ao final imprima na tela o texto “Sou aluno do Level 1 do CWI Reset! Me chamo {SEU NOME}”
    - Compile e execute o programa manualmente ou utilize a IDE para facilitar;