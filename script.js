/*const Add = document.querySelector(".Add");
const resetCount = document.querySelector(".Reset");
const subtract = document.querySelector(".subtract");*/
const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

/*Add.addEventListener("click", () => {
  count.innerHTML++;
});
subtract.addEventListener("click", () => {
  count.innerHTML--;
});
resetCount.addEventListener("click", () => {
  count.innerHTML = 0;
});
)*/

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("Add")) {
    count.innerHTML++;
    setColor();
  }
  if (e.target.classList.contains("subtract")) {
    count.innerHTML--;
    setColor();
  }
  if (e.target.classList.contains("Reset")) {
    count.innerHTML = 0;
    setColor();
  }
});

function setColor() {
  if (count.innerHTML > 0) {
    count.style.color = "yellow";
  } else if (count.innerHTML < 0) {
    count.style.color = "green";
  } else {
    count.style.color = "white";
  }
}
