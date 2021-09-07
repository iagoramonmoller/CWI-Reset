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