const ratingNumbers = document.querySelectorAll(".card-rating-numbers > ul > li");
const submitButton = document.querySelector(".submit");
const answer = document.querySelector(".answer");

let ratingValue =  ratingNumbers.innerHTML;
let pressed = false;

if(window.location.href === "index.html") {



ratingNumbers.forEach((item) => {
  item.addEventListener('click', (e) => {

    e.target.classList.toggle("pressed");
    
    if(e.target.classList.contains("pressed")){
      pressed = true;
      ratingValue = e.target.innerHTML;
      localStorage.setItem("rating", JSON.stringify(ratingValue));
    }else {
      pressed = false;
    }

    //e.target.classList.remove("pressed");
    
  });
});

submitButton.addEventListener("click", () => {

  if(pressed){
    location.href = "thankyou.html";
  }

});

}

if (window.location.href === "thankyou.html"){

  let result = JSON.parse(localStorage.getItem('rating'));
  answer.innerHTML = +result;
}

