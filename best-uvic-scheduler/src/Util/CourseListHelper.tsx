import React, { useEffect } from "react";

const TestCourseList = {};

export async function test() {
  const tenant = "localhost:5000";
  const resp = await fetch(`http://${tenant}/courses/`, {
    method: "GET",
  });

  const data = await resp.text();
  console.log(data);
  return resp.json;
}

// const TestCourseList = {
//   Courses: [
//     {
//       uuid: "61587323-6632-4dcf-bae8-2a51ed8585a0",
//       course_code: "CSC 111",
//       course_name: "Fundamentals of C Programming",
//       course_desceiption:
//         "A class to teach the fundamentals of programming for new students",
//       course_qualifications: "Strong fundamentals",
//       peng_req: true,
//       spring_req: false,
//       summer_req: true,
//       fall_req: true,
//     },
//     {
//       uuid: "3e90ab30-c380-4034-acdb-238856a88df3",
//       course_code: "CSC 230",
//       course_name: "Assembly ARM programming",
//       course_desceiption:
//         "Starting to program with a physical system and learning about assemby",
//       course_qualifications: "3 years of industry experience",
//       peng_req: false,
//       spring_req: true,
//       summer_req: true,
//       fall_req: true,
//     },
//     {
//       uuid: "2e90ab30-c380-4034-acdb-238856a88df3",
//       course_code: "SENG 275",
//       course_name: "Software Testing",
//       course_desceiption:
//         "learning the fundamentals of testing and different frameworks to use",
//       course_qualifications:
//         "worked on projects with team sizes of over 5 people",
//       peng_req: true,
//       spring_req: false,
//       summer_req: false,
//       fall_req: true,
//     },
//   ],
// };
const axios = require("axios");

export async function GetCourseList() {
  try {
    const response = await axios.get(
      "http://com-one-tester.herokuapp.com/courses/"
    );
    console.log("response  ", response);
    return response.data;
  } catch (error) {
    return [];
  }
  // React.useEffect(() => {
  //   fetch("http://com-one-tester.herokuapp.com/professors/");
  // }, []);

  // const tenant = "com-one-tester.herokuapp.com";
  // const resp = await fetch(`http://${tenant}/professors/`, {
  //   method: "GET",
  // });

  // TestCourseList["Courses"] = resp.json();
  // console.log(TestCourseList);

  return TestCourseList;
}
