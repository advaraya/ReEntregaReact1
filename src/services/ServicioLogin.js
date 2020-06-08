// Endpoint: /apiv1/login
const axios = require("axios").default;

async function login(username, password) {
  try {
    var body = { username, password };
    console.log(body);

    axios.defaults.withCredentials = true;

    var response = await axios.post(
      "http://34.89.93.186:8080/apiv1/login",
      body
      // { withCredentials: true }
    );
    console.log(response);
    return response;
  } catch (error) {
    return { data: { success: false }, error: error };
  }
}

export default login;
