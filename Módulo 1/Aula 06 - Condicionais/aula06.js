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