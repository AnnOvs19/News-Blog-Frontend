export async function fethGetPostsUser(id) {
    const URL = `http://localhost:6868/api/post/user?id=${id}`;
    const response = await fetch(URL,{
        method:"GET",
    }).then((response) => response.json());

    return response
}