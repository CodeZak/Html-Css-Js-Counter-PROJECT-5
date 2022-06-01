let incButton = document.querySelector(".increase");
let decButton = document.querySelector(".decrease");
let resButton = document.querySelector(".reset");
let num = document.querySelector(".num");

function setColor() {
  if (parseInt(num.innerHTML) > 0) {
    num.style.color = "green";
  } else if (parseInt(num.innerHTML) < 0) {
    num.style.color = "red";
  } else {
    num.style.color = "black";
  }
}

incButton.onclick = function () {
  num.innerHTML = parseInt(num.innerHTML) + 1;
  setColor();
};
decButton.onclick = function () {
  num.innerHTML = parseInt(num.innerHTML) - 1;
  setColor();
};
resButton.onclick = function () {
  num.innerHTML = 0;
  setColor();
};
