export async function editPost(formData, id) {
  const URL = `http://localhost:6868/api/post/${id}`;

  const response = await fetch(URL, {
    method: "PUT",
    body: formData
  })
    .then((response) => response.json())
    .catch((res) => {});

  return response;
}
