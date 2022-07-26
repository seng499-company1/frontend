const axios = require("axios");

const TestProfessorList = [
  {
    pref_id: "8659fb03-0bd1-11ed-aba0-0242ac120002",
    prof_id: "4a3569e0-0bd1-11ed-a735-0242ac120002",
    first_name: "Celina",
    last_name: "Berg",
    time_stamp: "new",
  },
  {
    pref_id: "8659fb03-0bd1-11ed-aba0-0242ac120002",
    prof_id: "4a3569e0-0bd1-11ed-a735-0242ac120002",
    first_name: "Bill",
    last_name: "Bird",
    time_stamp: "new",
  },
  {
    pref_id: "8659fb03-0bd1-11ed-aba0-0242ac120002",
    prof_id: "4a3569e0-0bd1-11ed-a735-0242ac120002",
    first_name: "Anthony",
    last_name: "Etsy",
    time_stamp: "later",
  },
];

// export function GetProfessorInputList() {
//   return TestProfessorList;
// }

export async function GetProfessorInputList() {
  try {
    const response = await axios.get(
      "http://uvic.immortalmind.ca:5000/professors/preferences/times/2022"
    );
    return response.data;
  } catch (error) {
    return [];
  }
}

export async function RemindProfessor(props) {
  console.log(props);
  try {
    const response = await axios.post(
      `http://uvic.immortalmind.ca:5000/professors/${props}/remind/`,
      {
        "Content-Type": "application/json",
      }
    );
    console.log("response  ", response);
  } catch (error) {
    console.log("POST Reminder FAILED! " + error);
  }
}
