const TestCourseList = {};

const axios = require("axios");

export async function GetCourseList() {
  try {
    const response = await axios.get(
      "http://uvic.immortalmind.ca:5000/courses/"
    );
    console.log("response  ", response);
    return response.data;
  } catch (error) {
    return [];
  }
}
