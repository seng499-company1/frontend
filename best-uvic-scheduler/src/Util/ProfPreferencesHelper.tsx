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
        preferredDay: false,
      },
      tues: {
        times: ["(“12:00” “13:20”) (“14:00” “15:20”)"],
        preferredDay: true,
      },
      wed: {
        times: ["(“12:00” “13:20”) (“14:00” “15:20”)"],
        preferredDay: false,
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
        preferredDay: false,
      },
      tues: {
        times: ["(“12:00” “13:20”) (“14:00” “15:20”)"],
        preferredDay: true,
      },
      wed: {
        times: ["(“12:00” “13:20”) (“14:00” “15:20”)"],
        preferredDay: false,
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
        preferredDay: false,
      },
      wed: {
        times: ["(“12:00” “13:20”) (“14:00” “15:20”)"],
        preferredDay: true,
      },
      thurs: {
        times: ["(“12:00” “13:20”) (“14:00” “15:20”)"],
        preferredDay: false,
      },
      fri: {
        times: ["(“12:00” “13:20”) (“14:00” “15:20”)"],
        preferredDay: true,
      },
    },
  },
  course_preferences: [
    {
      course_id: "015b0963-ff0a-11ec-896a-0242ac120002",
      will_to_teach: "VERY_WILLING",
      able_to_teach: "ABLE",
      time_stamp: "2022-06-21 09:30:26",
    },
  ],
};

export interface SummaryProps {
  maxCourses: any;
  absenceReason: any;
}
export interface DayProps {
  times: Array<string>;
  preferedDay: boolean;
}
export interface SemesterProps {
  mon: DayProps;
  tues: DayProps;
  wed: DayProps;
  thurs: DayProps;
  fri: DayProps;
}

export interface PreferedTimesProps {
  fall: SemesterProps;
  spring: SemesterProps;
  summer: SemesterProps;
}

export interface CoursePreferences {
  course_id: string;
  will_to_teach: string;
  able_to_teach: string;
}
export interface SubmitInfoProps {
  year: number;
  semester_off: number;
  num_relief: number;
  num_summer_courses: number;
  num_fall_courses: number;
  num_spring_courses: number;
  why_relief: string;
  preferred_times: PreferedTimesProps;
  course_preferences: Array<CoursePreferences>;
}

export type PostCourseProps = {
  json: SubmitInfoProps;
  id: String;
};

export function GetPreferences() {
  return TestPreferenceList;
}

const axios = require("axios");

//note : the id is hard coded for now!!!!
export async function postPreferences(props: SubmitInfoProps) {
  console.log(props);
  try {
    const response = await axios.post(
      `http://uvic.immortalmind.ca:5000/professors/450c2918-0c8d-11ed-b058-0242ac130002/preferences/`,
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
// //note : this function will b here until front end fixes
// export async function GetPreferences() {
//   try {
//     const response = await axios.get(
//       "http://uvic.immortalmind.ca:5000/professors/61587323-6632-4dcf-bae8-2a51ed8585a0/preferences/2022"
//     );
//     //return response.data;
//     return TestPreferenceList;
//   } catch (error) {
//     return [];
//   }
// }
