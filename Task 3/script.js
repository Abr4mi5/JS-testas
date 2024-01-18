/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn');
    const outputContainer = document.getElementById('output');
    const message = document.getElementById('message');
  
    btn.addEventListener('click', () => {
      fetch(ENDPOINT)
        .then(response => response.json())
        .then(users => {
          message.style.display = 'none';

          users.forEach(user => {
            const card = document.createElement('div');
            card.classList.add('user-card');
  
            const username = document.createElement('p');
            username.textContent = `Username: ${user.login}`;
  
            const avatar = document.createElement('img');
            avatar.src = user.avatar_url;
            avatar.alt = `${user.login}'s avatar`;
  
            card.appendChild(username);
            card.appendChild(avatar);
  
            outputContainer.appendChild(card);
          });
        })
        .catch(error => console.error('Error fetching data:', error));
    });
  });
  
  
