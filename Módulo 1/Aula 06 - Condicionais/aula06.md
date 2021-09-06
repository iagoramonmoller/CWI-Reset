# Aula #06 - Condicionais
## Exercício proposto
- O IMC significa ```Índice de Massa Corpórea``` e é um indicador utilizado pela OMS (Organização Mundial da Saúde) como referência para saber a saúde de uma pessoa com base no seu peso e altura.
- O cálculo do IMC é feito pela divisão do ```peso``` de alguém pela sua ```altura``` ao quadrado. Os valores de referência do índice são:

IMC                    | Classificação   | Grau de Obesidade
---------------------- | --------------- | -----------------
Menor do que 18,50     | Magreza         | 0
Entre 18,50 e 24,99    | Normal          | 0
Entre 25,00 e 29,99    | Sobrepeso       | 1
Entre 30,00 e 39,99    | Obesidade       | 2
Maior ou igual a 40,00 | Obesidade grave | 3

- Faça um algoritmo que efetue o cálculo do IMC, com base nas variáveis ```peso``` e ```altura```;
- Exiba o valor do IMC e a classificação obtida. Se houver algum grau de obesidade, exiba também a mensagem: ```Cuidado! Você está acima do peso recomendado pela OMS.```
- Se o grau de obesidade for ```3```, adicione também a seguinte mensagem: ```É importante procurar um médico para avaliar sua saúde.```
## Processo
- Enquanto eu não encontrar e entender uma alternativa para o uso de ```document.write```, vou deixar de lado os arquivos em HTML e rodar os códigos em javascript no console diretamente do Visual Studio Code utilizando a extensão Code Runner;
- Encontrei a dica do Code Runner no blog [.Ninja](https://raccoon.ninja/pt/dev-pt/executando-codigos-javascript-no-visual-studio-code/);
## Solução
```javascript
//Define variáveis para o cálculo de IMC:

let peso = 75;
let altura = (1.91**2);

//Define cálculo de IMC:

let indiceMassaCorporal = peso/altura;
let classificacao = "Indefinida";

//Define IMC:

if (indiceMassaCorporal < 18.50) 
{
  classificacao = "Magreza";
}

else if (indiceMassaCorporal < 25) 
{
  classificacao = "Normal";
}

else if (indiceMassaCorporal < 30.00) 
{
  classificacao = "Sobrepeso";
}

else if (indiceMassaCorporal < 40.00) 
{
  classificacao = "Obesidade";
  console.log("Cuidado! Você está acima do peso recomendado pela OMS.")
}

else if (indiceMassaCorporal >= 40.00) 
{
  classificacao = "Obesidade Grave";

}

//Impressão:

switch (classificacao)

{

 case "Magreza":
  console.log("Seu IMC é "+indiceMassaCorporal+", classificado como "+classificacao+"!")
 break;

  case "Normal":
  console.log("Seu IMC é "+indiceMassaCorporal+", classificado como "+classificacao+"!")
 break;

   case "Sobrepeso":
  console.log("Seu IMC é "+indiceMassaCorporal+", classificado como "+classificacao+"!")
  console.log("Cuidado! Você está acima do peso recomendado pela OMS.")
 break;

   case "Obesidade":
  console.log("Seu IMC é "+indiceMassaCorporal+", classificado como "+classificacao+"!")
  console.log("Cuidado! Você está acima do peso recomendado pela OMS.")
 break;

   case "Obesidade Grave":
  console.log("Seu IMC é "+indiceMassaCorporal+", classificado como "+classificacao+"!")
  console.log("Cuidado! Você está acima do peso recomendado pela OMS.")
  console.log("É importante procurar um médico para avaliar sua saúde.")
 break;

}
```