const ScheduleList = [
  {
    id: "61587323-6632-4dcf-bae8-2a51ed8585a0",
    year: 2022,
    schedule: {
      fall: [
        {
          course: {
            code: "CSC226",
            title: "Algorithms and Data Structures II",
            pengRequired: {
              fall: true,
              spring: true,
              summer: false,
            },
          },
          sections: [
            {
              professor: {
                id: null,
                name: "Rich",
                isPeng: null,
                facultyType: null,
                coursePreferences: null,
                teachingObligations: null,
                preferredTimes: {},
                preferredCoursesPerSemester: {},
                preferredNonTeachingSemester: null,
                preferredCourseDaySpreads: [],
              },
              capacity: 80,
              timeSlots: [
                {
                  MONDAY: {
                    "12:00": null,
                    "13:20": null,
                  },
                },
                {
                  THURSDAY: {
                    "12:00": null,
                    "13:20": null,
                  },
                },
              ],
            },
          ],
        },
      ],
      spring: [
        {
          course: {
            code: "CSC225",
            title: "Algorithms and Data Structures I",
            pengRequired: {
              fall: true,
              spring: true,
              summer: false,
            },
          },
          sections: [
            {
              professor: {
                id: null,
                name: "Nashant",
                isPeng: null,
                facultyType: null,
                coursePreferences: null,
                teachingObligations: null,
                preferredTimes: {},
                preferredCoursesPerSemester: {},
                preferredNonTeachingSemester: null,
                preferredCourseDaySpreads: [],
              },
              capacity: 80,
              timeSlots: [],
            },
          ],
        },
      ],
      summer: [
        {
          course: {
            code: "CSC 370",
            title: "Databases",
            pengRequired: {
              fall: true,
              spring: true,
              summer: true,
            },
          },
          sections: [
            {
              professor: {
                id: null,
                name: "Daniel",
                isPeng: null,
                facultyType: null,
                coursePreferences: null,
                teachingObligations: null,
                preferredTimes: {},
                preferredCoursesPerSemester: {},
                preferredNonTeachingSemester: null,
                preferredCourseDaySpreads: [],
              },
              capacity: 80,
              timeSlots: [],
            },
          ],
        },
      ],
    },
  },
];

const axios = require("axios");

export async function GetSchedule() {
  try {
    const response = await axios.get(
      "http://uvic.immortalmind.ca:5000/schedules/"
    );
    console.log("response  ", response);
    //return response.data;
    return ScheduleList;
  } catch (error) {
    return [];
  }
}
