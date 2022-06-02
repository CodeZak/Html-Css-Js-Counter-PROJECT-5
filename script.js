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

/******    Better Code  
// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});








*/
