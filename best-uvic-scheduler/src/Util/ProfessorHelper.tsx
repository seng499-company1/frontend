const axios = require("axios");

export async function GetProfessor(props) {
  try {
    const response = await axios.get(
      `http://localhost:5000/professors/${props.id}`
    );
    console.log("response  ", response);
    return response.data;
  } catch (error) {
    return [];
  }
}

export default GetProfessor;
