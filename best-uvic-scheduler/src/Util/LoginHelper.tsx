export function PostLoginInfo(props) {
  if (props.username === "admin") {
    return "admin";
  } else {
    return "prof";
  }
}
export default PostLoginInfo;
