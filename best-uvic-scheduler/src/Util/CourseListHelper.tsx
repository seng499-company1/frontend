export async function GetCourseList() {
  const tenant = "localhost:5000";
  const resp = await fetch(`http://${tenant}/professors`, {
    method: "GET",
  });

  const data = await resp.text();
  console.log(data);
  return resp.json;
}
