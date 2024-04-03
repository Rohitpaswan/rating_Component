
const rating = document.querySelector(".wrapper");
const welcome = document.querySelector(".welcome");
const output = document.querySelector(".output");
let ratingValue = 0;


//on selecting a rating
const btnList = document.querySelectorAll(".btn");
btnList.forEach((btn) =>{
  btn.addEventListener("click", () => {
    btnList.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");
    ratingValue = btn.textContent;
    console.log(ratingValue);
   
  })
})

//on submit click
document.querySelector('.submit').addEventListener('click', () => {

rating.classList.add("hide");
welcome.classList.remove("hide");
output.textContent = `You selected ${ratingValue} out of 5`;
});
