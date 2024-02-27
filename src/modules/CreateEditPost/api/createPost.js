export async function createPost(formData) {
  const URL = "http://localhost:6868/api/post";

  const response = await fetch(URL, {
    method: "POST",
    body: formData
  })
    .then((response) => response.json())
    .catch((res) => {});

  return response;
}
