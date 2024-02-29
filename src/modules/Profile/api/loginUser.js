import { jwtDecode } from "jwt-decode";

export async function loginUser(data) {
  const URL = "http://localhost:6868/api/user/login";
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(data)
  }).then((response) => response.json());

  //Если токен отсутствует - выводим сообщение, иначе записываем токен в localStorage и декодируем его
  if (!response.token) {
    alert(response.message);
  } else {
    localStorage.setItem("token", response.token);
    return jwtDecode(response.token);
  }
}
