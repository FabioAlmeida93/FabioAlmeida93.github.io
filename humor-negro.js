let btn = document.getElementById('btn')
let btnBox = document.querySelector('.button-box')
let title = document.querySelector('.title')
let question = document.querySelector('.question')


// function leftClick() {
// 	btn.style.left = '0';
//     document.body.style.transition = ".5s"; 
// }

// function rightClick() {
// 	btn.style.left = '111px';
//     document.body.style.transition = ".5s"; 
// }

// ===================================================================



const piadas = [
    "Liguei para uma linha direta de suicídio no Iraque. Ficaram todos animados e perguntaram-me se eu podia dirigir um camião!",
    "Qual foi a ultima coisa a passar pela mente da Princesa Diana? O volante.",
    "Porque é que as crianças etíopes não fazem sesta? Porque a sesta é depois do almoço",
    "Vai um preto e um cigano num carro. Quem é que vai a conduzir? A polícia.",
    "Qual a diferença entre um padre e um tenista? As bolas com que o tenista brinca têm pelinhos",
    "Qual é a parte mais dura de um vegetal? A cadeira de rodas.",
    `Um preto vai a um café e pede um chá.
    O dono do café pergunta: "chá verde ó preto?".
    Ao que o preto responde: "pode ser".`,
    `Como se chama um cão sem patas? Não se chama, vai-se buscar.`,


  ];
  

  
  function calcularProximaPiada() {
    const dataHoje = new Date();
    const diaDaSemana = dataHoje.getDay(); // 0 para domingo, 1 para segunda, etc.
    const diasFaltando = 7 - diaDaSemana; // Dias até o próximo domingo
  
    const dataProximaPiada = new Date(dataHoje.getTime() + diasFaltando * 24 * 60 * 60 * 1000);
    const indicePiada = Math.floor(dataProximaPiada / (7 * 24 * 60 * 60 * 1000)) % piadas.length;
  
    return piadas[indicePiada];
  }
  
  // Função para exibir a piada atual
  function exibirPiadaAtual() {
    const piada = calcularProximaPiada();
    document.querySelector('.question').textContent = piada;
  }
  
  // Chamar a função para exibir a piada atual quando a página é carregada
  exibirPiadaAtual();
  
  // Agendar a exibição da próxima piada semanalmente (a cada 7 dias)
  setInterval(exibirPiadaAtual, 7 * 24 * 60 * 60 * 1000);
