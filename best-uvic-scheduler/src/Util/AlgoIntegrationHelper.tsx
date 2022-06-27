export async function getAlgo1(route: string) {
  const resp = await fetch(`${route}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      historicalData: {
        fall: [
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
                  id: "61587323-6632-4dcf-bae8-2a51ed8585a0",
                  name: "Celina Berg",
                  isPeng: false,
                  facultyType: "TEACHING",
                  coursePreferences: [
                    {
                      courseCode: "CSC111",
                      enthusiasmScore: 40,
                    },
                    {
                      courseCode: "CSC115",
                      enthusiasmScore: 120,
                    },
                    {
                      courseCode: "CSC230",
                      enthusiasmScore: 180,
                    },
                  ],
                  teachingObligations: 3,
                  preferredTimes: {
                    fall: {},
                    spring: {},
                    summer: {},
                  },
                  preferredCoursesPerSemester: {
                    fall: 1,
                    spring: 2,
                    summer: 0,
                  },
                  preferredNonTeachingSemester: "FALL",
                  preferredCourseDaySpreads: ["TWF", "W"],
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
                  id: "61587323-6632-4dcf-bae8-2a51ed8585a0",
                  name: "Celina Berg",
                  isPeng: false,
                  facultyType: "TEACHING",
                  coursePreferences: [
                    {
                      courseCode: "CSC111",
                      enthusiasmScore: 40,
                    },
                    {
                      courseCode: "CSC115",
                      enthusiasmScore: 120,
                    },
                    {
                      courseCode: "CSC230",
                      enthusiasmScore: 180,
                    },
                  ],
                  teachingObligations: 3,
                  preferredTimes: {
                    fall: {},
                    spring: {},
                    summer: {},
                  },
                  preferredCoursesPerSemester: {
                    fall: 1,
                    spring: 2,
                    summer: 0,
                  },
                  preferredNonTeachingSemester: "FALL",
                  preferredCourseDaySpreads: ["TWF", "W"],
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
        summer: [
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
                  id: "61587323-6632-4dcf-bae8-2a51ed8585a0",
                  name: "Celina Berg",
                  isPeng: false,
                  facultyType: "TEACHING",
                  coursePreferences: [
                    {
                      courseCode: "CSC111",
                      enthusiasmScore: 40,
                    },
                    {
                      courseCode: "CSC115",
                      enthusiasmScore: 120,
                    },
                    {
                      courseCode: "CSC230",
                      enthusiasmScore: 180,
                    },
                  ],
                  teachingObligations: 3,
                  preferredTimes: {
                    fall: {},
                    spring: {},
                    summer: {},
                  },
                  preferredCoursesPerSemester: {
                    fall: 1,
                    spring: 2,
                    summer: 0,
                  },
                  preferredNonTeachingSemester: "FALL",
                  preferredCourseDaySpreads: ["TWF", "W"],
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
      },
      professors: [
        {
          id: "61587323-6632-4dcf-bae8-2a51ed8585a0",
          name: "Celina Berg",
          isPeng: false,
          facultyType: "TEACHING",
          coursePreferences: [
            {
              courseCode: "CSC111",
              enthusiasmScore: 40,
            },
            {
              courseCode: "CSC115",
              enthusiasmScore: 120,
            },
            {
              courseCode: "CSC230",
              enthusiasmScore: 180,
            },
          ],
          teachingObligations: 3,
          preferredTimes: {
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
          preferredCoursesPerSemester: {
            fall: 1,
            spring: 2,
            summer: 0,
          },
          preferredNonTeachingSemester: "FALL",
          preferredCourseDaySpreads: ["TWF", "W"],
        },
      ],
      schedule: {
        fall: [
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
                  id: "61587323-6632-4dcf-bae8-2a51ed8585a0",
                  name: "Celina Berg",
                  isPeng: false,
                  facultyType: "TEACHING",
                  coursePreferences: [
                    {
                      courseCode: "CSC111",
                      enthusiasmScore: 40,
                    },
                    {
                      courseCode: "CSC115",
                      enthusiasmScore: 120,
                    },
                    {
                      courseCode: "CSC230",
                      enthusiasmScore: 180,
                    },
                  ],
                  teachingObligations: 3,
                  preferredTimes: {
                    fall: {},
                    spring: {},
                    summer: {},
                  },
                  preferredCoursesPerSemester: {
                    fall: 1,
                    spring: 2,
                    summer: 0,
                  },
                  preferredNonTeachingSemester: "FALL",
                  preferredCourseDaySpreads: ["TWF", "W"],
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
                  id: "61587323-6632-4dcf-bae8-2a51ed8585a0",
                  name: "Celina Berg",
                  isPeng: false,
                  facultyType: "TEACHING",
                  coursePreferences: [
                    {
                      courseCode: "CSC111",
                      enthusiasmScore: 40,
                    },
                    {
                      courseCode: "CSC115",
                      enthusiasmScore: 120,
                    },
                    {
                      courseCode: "CSC230",
                      enthusiasmScore: 180,
                    },
                  ],
                  teachingObligations: 3,
                  preferredTimes: {
                    fall: {},
                    spring: {},
                    summer: {},
                  },
                  preferredCoursesPerSemester: {
                    fall: 1,
                    spring: 2,
                    summer: 0,
                  },
                  preferredNonTeachingSemester: "FALL",
                  preferredCourseDaySpreads: ["TWF", "W"],
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
        summer: [
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
                  id: "61587323-6632-4dcf-bae8-2a51ed8585a0",
                  name: "Celina Berg",
                  isPeng: false,
                  facultyType: "TEACHING",
                  coursePreferences: [
                    {
                      courseCode: "CSC111",
                      enthusiasmScore: 40,
                    },
                    {
                      courseCode: "CSC115",
                      enthusiasmScore: 120,
                    },
                    {
                      courseCode: "CSC230",
                      enthusiasmScore: 180,
                    },
                  ],
                  teachingObligations: 3,
                  preferredTimes: {
                    fall: {},
                    spring: {},
                    summer: {},
                  },
                  preferredCoursesPerSemester: {
                    fall: 1,
                    spring: 2,
                    summer: 0,
                  },
                  preferredNonTeachingSemester: "FALL",
                  preferredCourseDaySpreads: ["TWF", "W"],
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
      },
    }),
  });

  const data = await resp.json();
  console.log(data);
  return data;
}
