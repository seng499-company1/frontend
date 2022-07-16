const axios = require("axios");

// export async function PostLoginInfo(props) {
//   try {
//     await axios
//       .post("http://localhost:5000/login/", {
//         username: props.username,
//         password: props.password,
//       })
//       .then((response) => {
//         return response.data;
//       });
//     console.log("response  ", response);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// }
// export default PostLoginInfo;

export async function PostLoginInfo(props) {
  try {
    const response = await axios
      .post(
        `http://localhost:5000/login/`,
        {
          username: props.username,
          password: props.password,
        },
        {
          "Content-Type": "application/json",
        }
      )
      .then((response) => {
        console.log("GOT RESPONSE");
        console.log(response);
        return response.json;
      });
    console.log("RESPONSE!!");
  } catch (error) {
    console.log("Error!! " + error);
    return [];
  }
}
export default PostLoginInfo;

const professor = {
  first_name: "Bill",
  last_name: "Bird",
  uuid: "8b8829ec-4615-4708-a0cd-5103f080ae56",
  department: "CSC",
  is_teaching: true,
  email: "email@uvic.ca",
};

const admin = {
  first_name: "Rich",
  last_name: "Little",
  uuid: "6e46c60b-6709-4af5-ab4e-7a1c89c8ae0b",
  department: "CSC",
  is_teaching: true,
  email: "email@uvic.ca",
};
