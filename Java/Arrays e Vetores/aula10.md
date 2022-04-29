# Aula #10 - Arrays e Vetores
## Teoria
### Arrays
- Estrutura de dados mais simples existente na maioria das linguagens de programação;
- Lista ordenada de dados;
```java
double[] temperaturas = new double[365];
temperaturas[0] = 31.3;
temperaturas[1] = 32;
temperaturas[2] = 33.7;
temperaturas[3] = 34;
temperaturas[4] = 33.1;

System.out.println("O valor da temperatura do dia 3 é: " + temperaturas[2]);

System.out.println("O tamanho do array é: " + temperaturas.length);

System.out.println("Valores do array: ");

for (int i=0; i<temperaturas.length; i++){
    System.out.println("O valor da temperatura do dia "+ (i+1) +" é: " + temperaturas[i]);
}
```
### Loop For each
```java
    for (double temp : temperaturas){
        System.out.println(tempo);
    }
```
## Exercício proposto
1) Crie um programa que receba 5 valores e armazene em um vetor. Crie um segundo vetor de mesmo tipo e tamanho, contendo os valores do primeiro vetor multiplicados por 2. Ou seja: segundoVetor[i] = primeiroVetor[i] * 2. No final, imprima o conteúdo dos dois vetores.
2) Crie um programa que leia 10 valores inteiros correspondentes as idades de um grupo de pessoas e armazene em um vetor. Escreva uma lógica para determinar a quantidade de pessoas que possuem idade igual ou superior a 18 anos. Ao final, imprima o vetor de idades e a quantidade de pessoas maiores de idade.