const TestCourseList = {};

const axios = require("axios");

export async function GetCourseList() {
  try {
    const response = await axios.get(
      "https://com-one-tester.herokuapp.com/courses/"
    );
    console.log("response  ", response);
    return response.data;
  } catch (error) {
    return [];
  }
}
