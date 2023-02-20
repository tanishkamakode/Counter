const dec = document.querySelector(".dec-btn");
const reset = document.querySelector(".reset");
const inc = document.querySelector(".inc-btn");
const count = document.querySelector(".count");

dec.addEventListener("click", function () {
  count.textContent = Number(count.textContent) - 1;
  if (count.textContent < 0) {
    count.style.color = "#FF6962";
  }
});

reset.addEventListener("click", function () {
  count.textContent = 0;
  count.style.color = "#3B7097";
});

inc.addEventListener("click", function () {
  count.textContent = Number(count.textContent) + 1;
  if (count.textContent > 0) {
    count.style.color = "#48d148";
  }
});
