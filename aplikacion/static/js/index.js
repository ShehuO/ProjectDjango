console.log("Hello");

// Show hide - paragraph
// Per nje
// let paragraph = document.getElementsByClassName("newPara")[0];
// let buttonShowHide = document.getElementsByClassName("showHide")[0];
// buttonShowHide.addEventListener("click", function () {
//   if (paragraph.style.display == "none") {
//     paragraph.style.display = "block";
//   } else {
//     paragraph.style.display = "none";
//   }
// });

// Per disa
let paragraph = document.getElementsByClassName("newPara");
let buttonShowHide = document.getElementsByClassName("showHide");
for (let i in buttonShowHide) {
  buttonShowHide[i].addEventListener("click", function () {
    if (paragraph[i].style.display == "block") {
      paragraph[i].style.display = "none";
    } else {
      paragraph[i].style.display = "block";
    }
  });
}
//
//year
document.getElementById("year").textContent = NewDate().getFullYear