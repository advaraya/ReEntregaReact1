// Endpoint: /apiv1/anuncios/< ID de MongoDB >
// Este endpoint está securizado, es decir, si la cookie no está seteada el endpoint denegará el acceso

const axios = require("axios").default;

async function getDetalleAnuncio(IdAnuncio) {
  try {
    const response = await axios.get(
      "http://34.89.93.186:8080/apiv1/anuncios/" + IdAnuncio,
      { withCredentials: true }
    );
    console.log(response);
    return response;
  } catch (error) {
    return { success: false, error: error };
  }
}

export default getDetalleAnuncio;
