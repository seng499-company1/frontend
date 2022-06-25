export function PostLoginInfo(props) {
  if (props.username === "Rich") {
    return admin;
  } else {
    return professor;
  }
}
export default PostLoginInfo;

const professor = {
  first_name: "Bill",
  last_name: "Bird",
  uuid: "8b8829ec-4615-4708-a0cd-5103f080ae56",
  department: "CSC",
  is_teaching: true,
  email: "email@uvic.ca",
};

const admin = {
  first_name: "Rich",
  last_name: "Little",
  uuid: "6e46c60b-6709-4af5-ab4e-7a1c89c8ae0b",
  department: "CSC",
  is_teaching: true,
  email: "email@uvic.ca",
};
