# Aula #09 - Loops
## Teoria
### While
- Avalia uma expressão e, caso verdadeira, executa o bloco dentro do comando while:
- Primeiro verifica, depois executa;
```java
public class LoopWhile {

    public static void main (String[] args) {

        int i = 1;
        int max = 10;

        System.out.println("Contando até " + max);

        while (i <= max) {
            System.out.println("Valor de i: " + i)
            i++;
        }

    }

}
```
### Do-While
- Enquanto a expressão for verdadeira, executa o bloco de código (faça enquanto);
- Ele deixará de ser executado após a expressão ficar falsa;
- Primeiro executa, depois verifica;
```java
public class LoopWhile {

    public static void main (String[] args) {

        int i = 1;
        int max = 10;

        System.out.println("Contando até " + max);

        while (i <= max) {
            System.out.println("Valor de i: " + i)
            i++;
        }

        do {
            i++;
            System.out.println("Valor de i: " + i);
        } while (i < 15);

    }

}
```
### For
- Executa um bloco de código enquanto uma expressão for verdadeira;
- Solicita uma inicialização, uma condição e uma atualização;
- FOR "normal":
```java
for (int i = 0; i < 5; i++) {
    System.out.println("i tem valor: " + i);
}
```
- As variáveis declaradas dentro do for só tem escopo dentro do bloco em que foi criada;
- FOR com mais de uma variável:
```java
for (int i = 0, j = 10, i < j; i++, j--) {
    System.out.println("i tem valor: " + i " e j tem valor: " + j);
}
```
- FOR com partes ausentes:
```java
int i = 0;
for (; i < 5; ) {
    System.out.println("i tem valor: " + i);
    i++;
}
```
- Loop sem corpo:
```java
int soma = 0;
for (i = 1; i < 5; soma += i++);
System.out.println("O valor da soma é: " + soma);
```
### Break
- Usado para saída de loops;
- Pode ser usado juntamento com um rótulo (label);
- Sair de um loop:
```java
int num = 100;

for (int i=0; i<num; i++){
    if (i*i >= num){
        break;
    }
    System.out.println("Valor de i: " + i);
}
```
- Break com rótulos - goto (goto não costuma ser uma boa prática de programação):
```java
for (int i=0; i<4; i++){
    rótulo1: {
        rótulo2: {
            rótulo 3: {
                if (i == 1) break rótulo1;
                if (i == 2) break rótulo2;
                if (i == 3) break rótulo3;
                System.out.println("rótulo3");
            }
            System.out.println("rótulo2");
        }
        System.out.println("rótulo1");
    }
    System.out.println("valor de i: " + i);
}
System.out.println("Saiu do loop");
```
### Continue
- Complementa o break;
- Continua o loop na próxima interação;
```java
while(true){

  if(true)
    continue;//o ciclo em execução será finalizado, mas não o laço de repetição 'while'

}
```
## Exercício proposto
1) Faça um programa que peça uma nota, entre zero e dez. Caso o valor informado seja inválido, ou seja, não esteja entre zero e dez, mostre uma mensagem informando o problema, mas mantenha o programa em execução pedindo novamente a nota até que o usuário informe um valor válido. Quando o usuário informar uma nota válida, imprima o valor da nota.
2) Faça um programa que leia dois números e imprima todos os valores presentes no intervalo entre eles, um abaixo do outro. Caso o segundo número seja menor ou igual ao primeiro, solicite um novo número até que o segundo número seja maior que o primeiro.
3) Faça um programa que leia 5 números e informe o maior número.
4) Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual número ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo:
```
 Tabuada do 5: 

 5 x 1 = 5 
 5 x 2 = 10
 .
 .
 .
 5 x 10 = 50
```