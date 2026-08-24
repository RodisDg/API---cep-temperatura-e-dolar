async function getWeather(){
    //Criar a variavel para pegar a cidade
    let cidade = document.getElementById('cidade').value

    let resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`)

    let tempCelsius = resposta.data.main.temp
    console.log(tempCelsius)

    //FRONT-END
    document.getElementById('temperatura').innerHTML = `A temperatura atual de ${cidade} é: ${tempCelsius.toFixed(0)} °C`
}