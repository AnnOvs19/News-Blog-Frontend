export async function fetchGetTypes() {
    const URL = "http://localhost:6868/api/type";
    const response = await fetch(URL, {
        method: "GET"
    })
    .then((res)=>res.json())
    .catch((res)=>{
        throw res;
    });

    return response;
}