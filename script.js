const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que você sai da escola, encontra um novo gadget que consegue realizar várias tarefas automaticamente, como enviar e-mails, fazer cálculos complexos e até organizar seu calendário. Qual o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é preocupante!",
                afirmacao: "Inicialmente, você ficou preocupado com a dependência que poderia ter desse novo dispositivo."
            },
            {
                texto: "Isso é incrível!",
                afirmacao: "Você ficou animado para explorar todas as funcionalidades e como isso pode ajudar no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Com a chegada dessa nova tecnologia, o professor de informática decidiu realizar uma série de aulas sobre como usar dispositivos inteligentes. No final de uma aula, ele pede que você escreva um relatório sobre as vantagens e desvantagens desses dispositivos. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Usa uma ferramenta de pesquisa online para encontrar informações relevantes e explicá-las de forma acessível.",
                afirmacao: "Você conseguiu utilizar a tecnologia para coletar e apresentar informações úteis de forma clara."
            },
            {
                texto: "Escreve o relatório com base nas discussões com colegas, algumas pesquisas online e seu próprio conhecimento sobre o tema.",
                afirmacao: "Você se sentiu mais confortável utilizando seus próprios recursos para elaborar o relatório."
            }
        ]
    },
    {
        enunciado: "Após entregar o relatório, a turma participa de um debate sobre como as novas tecnologias podem transformar o mercado de trabalho. Como você se posiciona?",
        alternativas: [
            {
                texto: "Argumenta que as novas tecnologias podem criar novas oportunidades de carreira e melhorar a eficiência das tarefas.",
                afirmacao: "Você acredita que a inovação tecnológica pode abrir novas possibilidades de emprego e melhorar a produtividade."
            },
            {
                texto: "Expressa preocupação com a possibilidade de que a automação possa levar à perda de empregos e a necessidade de políticas para proteger os trabalhadores.",
                afirmacao: "Sua preocupação com a empregabilidade levou você a sugerir discussões sobre como a tecnologia pode ser usada de maneira justa."
            }
        ]
    },
    {
        enunciado: "No final da discussão, você precisa criar uma apresentação visual para representar suas ideias sobre a tecnologia. Qual método você escolhe?",
        alternativas: [
            {
                texto: "Criar uma apresentação usando um software de design gráfico como o PowerPoint.",
                afirmacao: "Você percebeu que muitas pessoas ainda não dominam ferramentas de design e decidiu ensinar a usar essas ferramentas para iniciantes."
            },
            {
                texto: "Usar uma ferramenta automática para gerar gráficos e imagens com base nas suas ideias.",
                afirmacao: "Você acelerou o processo de criação de apresentações e agora pode ajudar outras pessoas que têm dificuldades com ferramentas de design."
            }
        ]
    },
    {
        enunciado: "Você tem um projeto em grupo para entregar na próxima semana e o progresso está um pouco atrasado. Um membro do grupo usou uma ferramenta automatizada para completar o projeto, mas o resultado parece idêntico ao gerado pela ferramenta. O que você faz?",
        alternativas: [
            {
                texto: "Considera que usar a ferramenta automatizada é uma contribuição válida para o projeto e não se preocupa com o fato de o trabalho parecer igual.",
                afirmacao: "Você acabou se tornando dependente de ferramentas automatizadas e agora sente que precisa delas para concluir suas tarefas."
            },
            {
                texto: "Reconhece que, embora a ferramenta seja útil, é importante revisar e personalizar o trabalho para refletir suas próprias ideias e garantir a qualidade.",
                afirmacao: "Você percebeu que as ferramentas automatizadas devem ser usadas como apoio, e não como substituto completo para o trabalho pessoal e original."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();