const ratingNumbers = document.querySelectorAll(".card-rating-numbers > ul > li");
const submitButton = document.querySelector(".submit");

let ratingValue =  ratingNumbers.innerHTML;
let pressed = false;



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
    
  });
});

submitButton.addEventListener("click", () => {

  if(pressed){
    location.href = "thankyou.html";
  }

});
