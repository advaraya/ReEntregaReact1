// Endpoint: /apiv1/anuncios

const axios = require("axios").default;

async function listadoAnuncios(filters) {
  try {
    var urlAPI = "http://34.89.93.186:8080/apiv1/anuncios";
    var parametros = [];
    if (filters.name !== "") {
      parametros.push(`name=${filters.name}`);
    }
    if (filters.tag !== "") {
      parametros.push(`tag=${filters.tag}`);
    }
    if (filters.venta !== "") {
      parametros.push(`venta=${filters.venta}`);
    }

    if (filters.min !== "" && filters.max == "") {
      parametros.push(`price=${filters.min}-`);
    }

    if (filters.min == "" && filters.max !== "") {
      parametros.push(`price=-${filters.max}`);
    }

    if (filters.min !== "" && filters.max !== "")
      parametros.push(`price=${filters.min}-${filters.max}`);
    if (parametros.length !== 0) {
      parametros = parametros.join("&");
      urlAPI += `?${parametros}`;
    }
    var response = await axios.get(urlAPI, {
      withCredentials: true,
    });

    console.log(response);
    return response;
  } catch (error) {
    return { success: false, error: error };
  }
}

export default listadoAnuncios;
