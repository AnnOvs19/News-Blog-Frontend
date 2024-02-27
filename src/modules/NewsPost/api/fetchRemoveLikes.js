export async function fetchRemoveLikes(data) {
  const URL = "http://localhost:6868/api/post/rm-like";
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(data)
  }).then((response) => response.json());

  return response;
}
