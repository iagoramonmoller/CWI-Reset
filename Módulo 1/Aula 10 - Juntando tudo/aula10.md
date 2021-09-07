# Aula #10 - Juntando tudo
## Código da aula
```javascript
let niveis=["Muito abaixo do peso","Abaixo do peso","Peso normal","Acima do peso","Obesidade Grau I","Obesidade Grau II","Obesidade Grau III"]

let pessoas=["Igor","Marcia","José"];
let massas=[100,68,79];
let alturas=[1.81,1.75,1.68]

function calcularIMC(massa,altura){
    let imc = massa/(altura**2)
    return imc
}

function verificaNivel(imc){
    let nivel=0

    if(imc<17){
        nivel=0
    }
    else if (imc<18.5){
        nivel=1
    }
    else if (imc<25){
        nivel=2
    }
    else if (imc<30){
        nivel=3
    }
    else if (imc<35){
        nivel=4
    }
    else if (imc<40){
        nivel=5
    }
    else {
        nivel=6
    }

    return nivel
}

for (let indice=0; indice<pessoas.length;indice++){

let pessoa=pessoas[indice];
let massa=massas[indice];
let altura=alturas[indice]

let imc = calcularIMC(massa,altura);
let nivel = verificaNivel(calcularIMC(massa,altura));

console.log("Nome: "+pessoa)
console.log("Peso: "+massa)
console.log("Altura: "+altura)
console.log("IMC: "+imc.toFixed(2))
console.log("Nível: "+niveis[nivel]);
console.log();
}
```
## Exercício proposto
1) Uma empresa quer verificar se um colaborador está qualificado para a aposentadoria. Para estar em condições de se aposentar, ele deve atender a pelo menos um dos seguintes critérios:
- Ter pelo menos 65 anos de idade;
- Ter trabalhado no mínimo 30 anos;
- Ter pelo menos 60 anos de idade e 25 anos de trabalho.
2) Você deve criar uma função chamada ```verificarAposentadoria```, que recebe um ```nome``` como argumento e verifica se aquele colaborador pode se aposentar.
3) A função deve imprimir uma mensagem dizendo ```Parabéns, já pode sair de férias eternas :)``` ou ```Infelizmente para você, ainda falta um tempo :(```. Caso seja informado o nome de um colaborador que não existe, deve ser apresentada a mensagem ```Colaborador inválido :|```.
4) Use os arrays abaixo para considerar as informações de colaboradores, idade e tempo de trabalho:
```javascript
colaboradores    = ['Rhoger', 'Cléverson', 'Gleysberto', 'Nádio', 'Rosiméri', 'Regislane', 'Agripino', 'Wellison']
idades           = [      69,          66,           58,      61,         60,          64,         59,         55]
temposDeTrabalho = [      31,          29,           30,      26,         25,          24,         26,         29]
```
5) Com a função criada, execute todo código abaixo e verifique se os resultados são os esperados (o resultado esperado de cada execução está no comentário ao lado da chamada):
```javascript
verificarAposentadoria('Rosiméri')    // true (regra 3)
verificarAposentadoria('Agripino')    // false (falta 1 ano de idade para regra 3)
verificarAposentadoria('Rhoger')      // true (todas)
verificarAposentadoria('Hudnélson')   // false (colaborador inexistente)
verificarAposentadoria('Gleysberto')  // true (regra 2)
verificarAposentadoria('Regislane')   // false (falta 1 ano de idade para regra 1 e 1 de trabalho para regra 3)
verificarAposentadoria('Cléverson')   // true (regras 1 e 3)
verificarAposentadoria('Nádio')       // true (regra 3)
verificarAposentadoria('Wellison')    // false (falta 1 ano de trabalho para regra 2)
verificarAposentadoria('Florisberto') // false (colaborador inexistente)
```
## Solução
```javascript
//ARRAYS

var colaboradores    = ['Rhoger', 'Cléverson', 'Gleysberto', 'Nádio', 'Rosiméri', 'Regislane', 'Agripino', 'Wellison']
var idades           = [      69,          66,           58,      61,         60,          64,         59,         55]
var temposDeTrabalho = [      31,          29,           30,      26,         25,          24,         26,         29]

//VARIÁVEIS QUE SERÃO MODIFICADAS PELA FUNÇÃO verificarAposentadoria

var idadeSelecionada=0;
var tempoSelecionado=0;
var colaboradorSelecionado="Nome";
var nomeValido=false;
var condicaoAposentadoria=false;

//FUNÇÃO QUE VERIFICA APOSENTADORIA UTILIZANDO AS VARIÁVEIS E FUNÇÕES ANTERIORES

function verificarAposentadoria(a){

    for(let posicaoColaboradores=0;posicaoColaboradores<colaboradores.length;posicaoColaboradores++){

        if(colaboradores[posicaoColaboradores]==a){
            nomeValido=true;
            colaboradorSelecionado=colaboradores[posicaoColaboradores];
            idadeSelecionada=idades[posicaoColaboradores];
            tempoSelecionado=temposDeTrabalho[posicaoColaboradores];
            break

        }

        else{
           nomeValido=false;
        }

    }

        if(nomeValido){ //SE O NOME FOR VÁLIDO, FARÁ AS VERIFICAÇÕES
        
        if(idadeSelecionada>=65){
            condicaoAposentadoria=true;
        }

        else if(tempoSelecionado>=30){
            condicaoAposentadoria=true;
        }

        else if(idadeSelecionada>=60){
            if(tempoSelecionado>=25){
                condicaoAposentadoria=true;
            }
            else{
                condicaoAposentadoria=false;
            }
        }

        else{
            condicaoAposentadoria=false;
        }

        console.log(colaboradorSelecionado);
        if(condicaoAposentadoria){
            console.log("Parabéns, já pode sair de férias eternas :)");
        }
        else{
            console.log("Infelizmente para você, ainda falta um tempo :(")
        }
        console.log();

        }

    else{
        console.log("Colaborador inválido :|");
        console.log();
    }
    
}

//TESTES

verificarAposentadoria('Rosiméri')    // true (regra 3)
verificarAposentadoria('Rhoger')      // true (todas)
verificarAposentadoria('Agripino')    // false (falta 1 ano de idade para regra 3)
verificarAposentadoria('Hudnélson')   // false (colaborador inexistente)
verificarAposentadoria('Gleysberto')  // true (regra 2)
verificarAposentadoria('Regislane')   // false (falta 1 ano de idade para regra 1 e 1 de trabalho para regra 3)
verificarAposentadoria('Cléverson')   // true (regras 1 e 3)
verificarAposentadoria('Nádio')       // true (regra 3)
verificarAposentadoria('Wellison')    // false (falta 1 ano de trabalho para regra 2)
verificarAposentadoria('Florisberto') // false (colaborador inexistente)
```
## Descobertas
- O código feito pelos professores do curso fornecem uma série de ideias e recursos interessantes que teriam facilitado a criação desse código, como a inserção de múltiplos parâmetros dentro de um mesmo if(), utilizando o ```||```, e o uso de ```&&``` para verificar a regra 3. Além disso, tenho a impressão de que os professores utilizaram um número menor de variáveis. O que me consola é que meu código funcionou :);
## Dúvidas/Problemas
- Tentei fazer algumas coisas com funções que não funcionaram. Preciso estudar mais as funções;