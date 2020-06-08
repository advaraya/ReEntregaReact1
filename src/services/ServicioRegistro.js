// Endpoint: /apiv1/register

const axios = require("axios").default;

async function registro(username, password) {
  try {
    var body = { username, password };
    var response = await axios.post(
      "http://34.89.93.186:8080/apiv1/register",
      body
    );
    console.log(response);
    return response;
  } catch (error) {
    return { data: { success: false }, error: error };
  }
}
export default registro;
