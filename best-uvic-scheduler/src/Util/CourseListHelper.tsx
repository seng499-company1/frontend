const TestCourseList = {
  "Courses": [
    {
      'uuid': '1e90ab30-c380-4034-acdb-238856a88df3',
      'course_code': 'CSC 111',
      'course_name': 'Fundamentals of C Programming',
      'course_desceiption': 'A class to teach the fundamentals of programming for new students',
      'course_qualifications': 'Strong fundamentals',
      'peng_req': true,
    },
    {
      'uuid': '3e90ab30-c380-4034-acdb-238856a88df3',
      'course_code': 'CSC 230',
      'course_name': 'Assembly ARM programming',
      'course_desceiption': 'Starting to program with a physical system and learning about assemby',
      'course_qualifications': '3 years of industry experience',
      'peng_req': false,
    },
    {
      'uuid': '2e90ab30-c380-4034-acdb-238856a88df3',
      'course_code': 'SENG 275',
      'course_name': 'Software Testing',
      'course_desceiption': 'learning the fundamentals of testing and different frameworks to use',
      'course_qualifications': 'worked on projects with team sizes of over 5 people',
      'peng_req': true,
    }
  ]
}

export function GetCourseList() {
  return TestCourseList;
}