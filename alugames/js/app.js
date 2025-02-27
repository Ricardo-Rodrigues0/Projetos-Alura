let jogosAlugados = 1;

function alterarStatus(id) {
    let jogo = document.getElementById(`game-${id}`);
    let imagem = jogo.querySelector('.dashboard__item__img');
    let botao = jogo.querySelector('.dashboard__item__button');
    let nomeJogo = jogo.querySelector('.dashboard__item__name').innerHTML;

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        let respostaDevolver = confirm(`Deseja devolver o jogo ${nomeJogo}?`);

        if (respostaDevolver) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.innerHTML = 'Alugar';
            jogosAlugados--;
        }

    } else {
        let respostaAlugar = confirm(`Você quer alugar o jogo ${nomeJogo}?`);

        if (respostaAlugar) {
            imagem.classList.add('dashboard__item__img--rented')
            botao.classList.add('dashboard__item__button--return');
            botao.innerHTML = 'Devolver';
            jogosAlugados++;
        }
    }

    let palavrasJogos = jogosAlugados > 1 ? 'Jogos alugados' : 'Jogo alugado';
    
    if (jogosAlugados <= 0) {
        console.log('Não temos nenhum jogo alugado.');
    }
    else {
        console.log(`Possuí ${jogosAlugados} ${palavrasJogos}.`)
    }

}