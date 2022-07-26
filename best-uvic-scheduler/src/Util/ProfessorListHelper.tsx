const axios = require("axios");

const TestProfessorList = {
  Professors: [
    {
      first_name: "Celina",
      last_name: "Berg",
      uuid: "0e90ab30-c380-4034-acdb-238856a88df3",
      department: "CSC",
      is_teaching: true,
      email: "email@uvic.ca",
    },
    {
      first_name: "Bill",
      last_name: "Bird",
      uuid: "8b8829ec-4615-4708-a0cd-5103f080ae56",
      department: "CSC",
      is_teaching: true,
      email: "email@uvic.ca",
    },
    {
      first_name: "Anthony",
      last_name: "Estey",
      uuid: "6e46c60b-6709-4af5-ab4e-7a1c89c8ae0b",
      department: "CSC",
      is_teaching: true,
      email: "email@uvic.ca",
    },
  ],
};

export async function GetProfessorList() {
  try {
    const response = await axios.get(
      `http://uvic.immortalmind.ca:5000/professors/`
    );
    return response.data;
  } catch (error) {
    console.log(error)
    return [];
  }
}

export async function deleteProfessorBackend(props) {
  console.log("Test")
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

export async function addProfessor(props) {
  console.log(props);
  try {
    const response = await axios.post(
      `http://uvic.immortalmind.ca:5000/professors/`,
      props,
      {
        "Content-Type": "application/json",
      }
    );
    console.log("response  ", response);
  } catch (error) {
    console.log("POST COURSE FAILED! " + error);
  }
}
