import { jwtDecode } from "jwt-decode";

//Функция проверки токена при перезагрузки страницы
export async function check() {
  const URL = "http://localhost:6868/api/user/auth";

  const response = await fetch(URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  }).then((res) => res.json());

  //Сохранение токена в localStorage
  if (response.token) {
    localStorage.setItem("token", response.token);
    return jwtDecode(response.token);
  }
}
