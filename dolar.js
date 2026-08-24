async function getDolar() {
    let resposta = await axios.get('https://economia.awesomeapi.com.br/last/USD-BRL')

    let cotacao = parseFloat(resposta.data.USDBRL.bid)
    let maior = parseFloat(resposta.data.USDBRL.high)
    let menor = parseFloat(resposta.data.USDBRL.low)

    //FRONT-END
    document.getElementById('resultado').innerHTML = `
        Cotação Atual: R$ ${cotacao.toFixed(2)} <br>
        Maior valor do dia: R$ ${maior.toFixed(2)} <br>
        Menor valor do dia: R$ ${menor.toFixed(2)}
    `
}