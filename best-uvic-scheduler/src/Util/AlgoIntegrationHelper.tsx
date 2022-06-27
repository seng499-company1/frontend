export async function getAlgo1(route: string) {
  const resp = await fetch(`${route}`, { method: "GET" });

  const data = await resp.text();
  console.log(data);
  return data;
}
