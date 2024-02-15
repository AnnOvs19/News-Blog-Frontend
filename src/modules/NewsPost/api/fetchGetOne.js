export async function fetchGetOne(id) {
    const URL = `http://localhost:6868/api/post/${id}`;
    const response = await fetch(URL,{
        method:"GET",
    })
    .then((res)=>res.json())
    .catch((res)=>{
        throw res
    })

    return response;
}