export async function LoginHelper(props) {
  console.log("username: " + props.username + " password: " + props.password);

  if (props.username == "admin") {
    return "admin";
  } else {
    return "prof";
  }
}
