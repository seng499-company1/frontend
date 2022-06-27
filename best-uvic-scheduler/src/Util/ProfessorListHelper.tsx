const TestProfessorList = {
  Professors: [
    {
      first_name: "Celina",
      last_name: "Berg",
      uuid: "0e90ab30-c380-4034-acdb-238856a88df3",
      department: "CSC",
      is_teaching: true,
      email: "email@uvic.ca",
    },
    {
      first_name: "Bill",
      last_name: "Bird",
      uuid: "8b8829ec-4615-4708-a0cd-5103f080ae56",
      department: "CSC",
      is_teaching: true,
      email: "email@uvic.ca",
    },
    {
      first_name: "Anthony",
      last_name: "Estey",
      uuid: "6e46c60b-6709-4af5-ab4e-7a1c89c8ae0b",
      department: "CSC",
      is_teaching: true,
      email: "email@uvic.ca",
    },
  ],
};

export function GetProfessorList() {
  return TestProfessorList;
}
