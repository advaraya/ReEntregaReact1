const axios = require("axios").default;

async function listadoTags() {
  try {
    var urlAPI = "http://34.89.93.186:8080/apiv1/tags";

    var response = await axios.get(urlAPI, {
      withCredentials: true,
    });

    console.log(response);
    return response;
  } catch (error) {
    return { success: false, error: error };
  }
}

export default listadoTags;
