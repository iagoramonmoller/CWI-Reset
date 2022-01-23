# Aula #08 - Condicionais
## Teoria
### If/Else
- Comandos dentro de um bloco IF somente são executados se a condição for verdadeira;
- Comandos dentro de um bloco ELSE somente serão executados se a condição do IF for falsa;
- É possível ter vários if/else alinhados (utilizando if, else if e else);
```java
public class IfQuadrinho {

  public static void main(String[] args) {
  
    boolean temBatata = true;
    int ovos = 6;
    
    if (temBatata){
      ovos = 9;
      
      }
      
      System.out.println("Compre " + ovos + " ovos.");
  
  }

}
```
```java
 if (idade >= 18){
  System.out.println("É maior de idade");
 }
 else {
  System.out.println("Não é maior de idade");
}
```
### Switch/Case
- Alternativa a vários if/else alinhados;
- Até Java 7, a condição podia ser byte, short, int, char ou Enum;
- Com Java 7, o switch também aceita string;
```java
public static void main(String[] args) {
  
  Scanner scan = new Scanner(System.in);
  
  System.out.println("Entre com um dia da semana (1-7):");
  
  int diaSemana = scan.nextInt();
  
  Switch(diaSemana){
  case 1: System.out.println("Domingo"); break;
  case 2: System.out.println("Segunda"); break;
  case 3: System.out.println("Terça"); break;
  case 4: System.out.println("Quarta"); break;
  case 5: System.out.println("Quinta"); break;
  case 6: System.out.println("Sexta"); break;
  case 7: System.out.println("Sábado"); break;
  default: System.out.println("Não é um dia da semana válido");
  }
  
}
```
## Exercício proposto
- Faça um programa que tenha como entradas 4 notas e calcule a média. Ao final o programa deve apresentar:
- A mensagem ```Aluno aprovado```, se a média alcançada for igual ou superior a sete;
- A mensagem ```Aluno reprovado```, se a média for inferior a sete;
- A mensagem ```Aluno aprovado``` com louvores, se a média for igual a dez.
- Faça um Programa que leia um número e exiba o dia correspondente da semana. (1=Domingo, 2=Segunda, etc.), caso seja informado um valor que não corresponda à um dia da semana, então deve imprimir a mensagem ```Valor inválido!```.
