/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const button = document.getElementById("btn");
const result = document.getElementById("output");
const message = document.getElementById("message");

button.addEventListener("click", showUsers);

function showUsers() {
  const response = fetch(ENDPOINT);
  response
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
        const login = user.login;
        const avatarUrl = user.avatar_url;

        const userInfo = document.createElement("div");
        userInfo.setAttribute("id", "user-card");

        const userLogin = document.createElement("h2");
        const userAvatar = document.createElement("img");

        userLogin.textContent = login;
        userAvatar.src = avatarUrl;

        userInfo.appendChild(userLogin);
        userInfo.appendChild(userAvatar);
        result.appendChild(userInfo);

        message.remove();
      });
    });
}

