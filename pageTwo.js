const answer = document.querySelector(".answer");


let result = JSON.parse(localStorage.getItem('rating'));
answer.innerHTML = +result;