const axios = require("axios");

export async function GetProfessor(props) {
  try {
    const response = await axios.get(
      `http://uvic.immortalmind.ca:5000/professors/${props}`
    );
    console.log("response  ", response);
    return response.data;
  } catch (error) {
    return [];
  }
}

export default GetProfessor;

export async function deleteProfessor(props) {
  try {
    const response = await axios.delete(
      `http://uvic.immortalmind.ca:5000/professors/${props}`,
      {
        "Content-Type": "application/json",
      }
    );
    console.log("response  ", response);
  } catch (error) {
    console.log("DELETE COURSE FAILED! " + error);
  }
}
