const TestCourseList = {
  "Courses": [
    {
      'uuid': '1e90ab30-c380-4034-acdb-238856a88df3',
      'course_code': 'CSC111',
      'course_name': 'Fundamentals of C Programming',
      'course_desceiption': '',
      'course_qualifications': '',
      'peng_req': true,
    },
    {
      'uuid': '3e90ab30-c380-4034-acdb-238856a88df3',
      'course_code': 'CSC230',
      'course_name': 'Assembly ARM programming',
      'course_desceiption': '',
      'course_qualifications': '',
      'peng_req': false,
    },
    {
      'uuid': '2e90ab30-c380-4034-acdb-238856a88df3',
      'course_code': 'SENG275',
      'course_name': 'Software Testing',
      'course_desceiption': '',
      'course_qualifications': '',
      'peng_req': true,
    }
  ]
}

export function GetCourseList() {
  return TestCourseList;
}
