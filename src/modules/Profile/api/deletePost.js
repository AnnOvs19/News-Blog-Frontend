export async function deletePost(id) {
    const URL = `http://localhost:6868/api/post/${id}`;
    const response = await fetch(URL, {
        method:"DELETE",
    }).then((response)=>response.json());

    return response
}