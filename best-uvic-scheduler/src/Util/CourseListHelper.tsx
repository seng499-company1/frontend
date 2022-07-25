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

export interface CourseProps {
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

export async function editCourse(props: CourseProps) {
  const json = props.json;
  console.log("JSON !! +  ", json);
  try {
    const response = await axios.put(
      `http://uvic.immortalmind.ca:5000/courses/${props.id}`,

      json,
      {
        "Content-Type": "application/json",
      }
    );
    console.log("response  ", response);
    return response;
  } catch (error) {
    console.log("PUT COURSE FAILED! " + error);
  }
}

export async function deleteCourse(props) {
  try {
    const response = await axios.delete(
      `http://uvic.immortalmind.ca:5000/courses/${props}`,
      props,
      {
        "Content-Type": "application/json",
      }
    );
    console.log("response  ", response);
  } catch (error) {
    console.log("DELETE COURSE FAILED! " + error);
  }
}

export async function addCourse(props: CourseProps) {
  const json = props.json;
  try {
    const response = await axios.post(
      `http://uvic.immortalmind.ca:5000/courses/${props.id}`,
      json,
      {
        "Content-Type": "application/json",
      }
    );
    console.log("response  ", response);
  } catch (error) {
    console.log("POST COURSE FAILED! " + error);
  }
}
