const TestPreferenceList = {
  id: "61587323-6632-4dcf-bae8-2a51ed8585a0",
  year: 2022,
  num_relief: 2,
  num_summer_courses: 1,
  num_fall_courses: 2,
  num_spring_courses: 1,
  why_relief: "program advisor & TA manager",
  preferred_times: {
    fall: {
      mon: {
        times: ["(“12:00” “13:20”) (“14:00” “15:20”)"],
        preferredDay: true,
      },
      tues: {
        times: ["(“12:00” “13:20”) (“14:00” “15:20”)"],
        preferredDay: true,
      },
      wed: {
        times: ["(“12:00” “13:20”) (“14:00” “15:20”)"],
        preferredDay: true,
      },
      thurs: {
        times: ["(“12:00” “13:20”) (“14:00” “15:20”)"],
        preferredDay: true,
      },
      fri: {
        times: ["(“12:00” “13:20”) (“14:00” “15:20”)"],
        preferredDay: true,
      },
    },
    spring: {
      mon: {
        times: ["(“12:00” “13:20”) (“14:00” “15:20”)"],
        preferredDay: true,
      },
      tues: {
        times: ["(“12:00” “13:20”) (“14:00” “15:20”)"],
        preferredDay: true,
      },
      wed: {
        times: ["(“12:00” “13:20”) (“14:00” “15:20”)"],
        preferredDay: true,
      },
      thurs: {
        times: ["(“12:00” “13:20”) (“14:00” “15:20”)"],
        preferredDay: true,
      },
      fri: {
        times: ["(“12:00” “13:20”) (“14:00” “15:20”)"],
        preferredDay: true,
      },
    },
    summer: {
      mon: {
        times: ["(“12:00” “13:20”) (“14:00” “15:20”)"],
        preferredDay: true,
      },
      tues: {
        times: ["(“12:00” “13:20”) (“14:00” “15:20”)"],
        preferredDay: true,
      },
      wed: {
        times: ["(“12:00” “13:20”) (“14:00” “15:20”)"],
        preferredDay: true,
      },
      thurs: {
        times: ["(“12:00” “13:20”) (“14:00” “15:20”)"],
        preferredDay: true,
      },
      fri: {
        times: ["(“12:00” “13:20”) (“14:00” “15:20”)"],
        preferredDay: true,
      },
    },
  },
  course_preferences: [
    {
      course_id: "61587323-6632-4dcf-bae8-2a51ed8585a0",
      will_to_teach: "VERY_WILLING",
      able_to_teach: "ABLE",
      time_stamp: "2022-06-21 09:30:26",
    },
  ],
};

export function GetPreferences() {
  return TestPreferenceList;
}

export type Json = {
  year: Number;
  semester_off: Number;
  num_relief: Number;
  num_summer_courses: Number;
  num_fall_courses: Number;
  num_spring_courses: Number;
  why_relief: String;
  preferred_times: Boolean;
  fall_peng_req: Boolean;
  course_desc: String;
  prof_prereq: String;
  year_req: {};
  course_preferences: {};
};

export interface PostPrefProps {
  id: number;
  json: Json;
}

export async function PostPreferences(props: PostPrefProps) {
  console.log("PROPS  ", props.json, props.id);

  const axios = require("axios");

  try {
    const response = await axios.put(
      "http://localhost:5000.com/professors/${id}/preferences",
      props.json
    );
    console.log("response  ", response);
  } catch (error) {
    console.log("POST PROFESSOR PREFERENCES FAILED! " + error);
  }
}
