export async function updateUser(data) {
    const URL = "http://localhost:6868/api/user/";

    const response = await fetch(URL, {
        method: "PUT",
        body: data,
    }).then((response) => response.json());

    return response
}