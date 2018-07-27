// Require a axios...
const axios = require('axios');

const getClima = async(lat, lng) => {

    // Llamada a axios...
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=7be3486a1a4f0b85944595d838c726f2`);

    if (resp.data.cod === '400') {
        throw new Error(`\n No es posible determinar el clima para las coordenadas (${lat},${lng}).\n`);
    }

    //console.log(resp);
    let data = resp.data.main;
    //console.log(data);

    //Regresa el main.temp
    return data;
};

module.exports = {
    getClima
};