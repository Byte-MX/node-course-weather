// Require de axios
const axios = require('axios');

const getDireccionLatLng = async(direccion) => {
    let encodedUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyCwPOoxsPmnRSCEFcRWecQg2B7QX2-8bcg`);

    if (resp.data.status === "ZERO_RESULTS") {
        throw new Error(`No hay resultados para la dirección solicitada (${direccion}).`);
    }


    let location = resp.data.results[0];
    let formattedAddress = location.formatted_address;
    let lat = location.geometry.location.lat;
    let lng = location.geometry.location.lng;

    //console.log(location);
    //console.log('\nDirección: \t' + formattedAddress);
    //console.log('Latitud: \t' + lat);
    //console.log('Longitud: \t' + lng);

    return {
        direccion: formattedAddress,
        lat,
        lng
    }
};

module.exports = {
    getDireccionLatLng
};