const axios = require("axios");

export async function PostLoginInfo(props) {
  try {
    const response = await axios.post(
      `http://uvic.immortalmind.ca:5000/login/`,
      {
        username: props.username,
        password: props.password,
      },
      {
        "Content-Type": "application/json",
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log("Error!! " + error);
    return [];
  }
}
export default PostLoginInfo;
