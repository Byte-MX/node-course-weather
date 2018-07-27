// Require del argv configurado con yargs
const argv = require('./config/yargs').argv;

// Require de axios
const axios = require('axios');

//console.log(argv.direccion);

let encodedUrl = encodeURI(argv.direccion);
axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyCwPOoxsPmnRSCEFcRWecQg2B7QX2-8bcg`)
    .then(resp => {
        //console.log(resp);
        //console.log(resp.data);
        //console.log(resp.status);
        //console.log(JSON.stringify(resp.data, undefined, 2)); //Stringify: objetoAStringificar, un "replacer", y el espaciado.

        let location = resp.data.results[0];
        let formattedAddress = location.formatted_address;
        let lat = location.geometry.location.lat;
        let lng = location.geometry.location.lng;

        //console.log(location);
        console.log('\nDirección: \t' + formattedAddress);
        console.log('Latitud: \t' + lat);
        console.log('Longitud: \t' + lng);

    })
    .catch(e => console.log('ERROR: ', e));