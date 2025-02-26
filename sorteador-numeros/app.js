function sortear() {
    let minQuantidade = 1;
    let numeroSorteados = [];

    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "";

    if (de > ate) {
        alert(`Erro: O número inicial (${de}) deve ser menor que o número final (${ate}).`);
    } else {

        while (minQuantidade <= quantidade) {

            let numeroSorteado = Math.floor(Math.random() * (ate - de + 1) + de);
            numeroSorteados.push(numeroSorteado);
            minQuantidade++;

            document.getElementById('btn-reiniciar').removeAttribute('disabled');
        }

        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numeroSorteados}</label>`;
    }


}

function reiniciar() {
    quantidade.value = '';
    de.value = '';
    ate.value = '';
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`
    document.getElementById('btn-reiniciar').setAttribute('disabled', true)
}