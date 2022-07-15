const TestCourseList = {};

const axios = require("axios");

export type Json = {
  course_code: String;
  course_name: String;
  min_offering: Number;
  spring_req: Boolean;
  summer_req: Boolean;
  fall_req: Boolean;
  spring_peng_req: Boolean;
  summer_peng_req: Boolean;
  fall_peng_req: Boolean;
  course_desc: String;
  prof_prereq: String;
  year_req: Number;
};

export interface EditCourseProps {
  id: number;
  json: Json;
}

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

export async function editCourse(props: EditCourseProps) {
  console.log("PROPS  ", props.json, props.id);
  try {
    const response = await axios.put(
      `http://localhost:5000/courses/${props.id}`,
      props.json,
      { mode: "same-origin" },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("response  ", response);
  } catch (error) {
    console.log("PUT COURSE FAILED! " + error);
  }
}
