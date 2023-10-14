let btn = document.getElementById('btn')
let btnBox = document.querySelector('.button-box')
let title = document.querySelector('.title')
let question = document.querySelector('.question')


// function leftClick() {
// 	btn.style.left = '0'
//     document.body.style.backgroundColor = "#fff";
//     title.classList.remove('title-color')
    
// }

// function rightClick() {
// 	btn.style.left = '111px';
//     btn.classList.add('white-shadow');
//     btnBox.classList.add('white-shadow');
//     title.classList.add('title-color')
//     document.body.style.backgroundColor = "#333";
//     document.body.style.transition = ".5s"; 
// }

// ===================================================================



const piadas = [
    "Porque é que as loiras lavam o cabelo com o chuveiro fechado? Porque no shampoo diz para cabelos secos!",
    "Era uma vez uma senhora que tinha os dentes tão amarelos, tão amarelos que um dia ia a atravessar a rua, sorriu e os carros abrandaram todos.",
    "Um alentejano muito surdo sai do ginecologista da mulher muito preocupado, e diz: - Não sei se ouvi se ela está fodida dos ovários ou se fode com vários.",
    "O que 17 alentejanos fazem do cinema? Esperam por mais um porque o filme é para maiores de 18!",
    "Recebi outra carta deste advogado hoje. Dizia: Aviso final! É bom que ele não me incomode mais.",
    "O meu chefe disse-me para ter um bom dia. Então, fui para casa!",
    "O que é que Deus disse depois de criar o homem? Acho que posso melhorar!",
    "Uma mãe pergunta ao filho: - Manuel, você acha que eu sou uma má mãe? Filho: - O meu nome é Tiago!",


    // console.log(Math.floor(Math.random() * 42) + 1)
  ];
  
  // function gerarPiadaAleatoria() {
  //   const indice = Math.floor(Math.random() * piadas.length);
  //   return piadas[indice];
  // }
  
  // function gerarPiadaSemanal() {
  //   const piada = gerarPiadaAleatoria();
  //   question.innerHTML = piada;
  // }
  
  // // Define o intervalo para uma semana (em milissegundos)
  // const umaSemanaEmMilissegundos = 7 * 24 * 60 * 60 * 1000;
  
  // // Inicia a geração de piadas semanalmente
  // gerarPiadaSemanal(); // Gera a primeira piada imediatamente
  // setInterval(gerarPiadaSemanal, umaSemanaEmMilissegundos);
  


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
    question.textContent = piada;
  }
  
  // Chamar a função para exibir a piada atual quando a página é carregada
  exibirPiadaAtual();
  
  // Agendar a exibição da próxima piada semanalmente (a cada 7 dias)
  setInterval(exibirPiadaAtual, 7 * 24 * 60 * 60 * 1000);