export async function fetchGetPosts() {
  const URL = "http://localhost:6868/api/post";
  const response = await fetch(URL, {
    method: "GET"
  })
    .then((res) => res.json())
    .catch((res) => {
      throw res;
    });

  return response;
}
