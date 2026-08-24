async function getCep() {
    //Criar a variavel para pegar o cep
    let cep = document.getElementById('cep').value

    let resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

    let logradouro = resposta.data.logradouro
    let bairro = resposta.data.bairro
    let cidade = resposta.data.localidade
    let uf = resposta.data.uf

    //FRONT-END
    document.getElementById('resultado').innerHTML = `
        Logradouro: ${logradouro} <br>
        Bairro: ${bairro} <br>
        Cidade: ${cidade} - ${uf}
    `
}