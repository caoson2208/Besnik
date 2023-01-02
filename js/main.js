/*-----------------------------------
              RUN DATA
-----------------------------------*/
var homeSaleTimer = null;
var homeSoldTimer = null;
var priceReducedTimer = null;
$(document).ready(function () {
  var homeSale = $("#sale");
  var homeSold = $("#sold");
  var priceReduced = $("#reduced");

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 2600) {
      if (homeSaleTimer === null)
        homeSaleTimer = startData(homeSale, 20, 2500, "sale");
      if (homeSoldTimer === null)
        homeSoldTimer = startData(homeSold, 40, 5000, "sold");
      if (priceReducedTimer === null)
        priceReducedTimer = startData(priceReduced, 2, 170, "reduced");
    }
  });
});

function startData(element, steps, max, type) {
  var value = parseInt(element.text());
  if (value < max)
    return setInterval(function () {
      if (value < max) {
        value += steps;
        element.text(value);
      } else {
        if (type === "sale") clearInterval(homeSaleTimer);
        else if (type === "sold") clearInterval(homeSoldTimer);
        else if (type === "reduced") clearInterval(priceReducedTimer);
        // console.log(Math.random());
      }
    }, 10);
}
/*-----------------------------------
        FOR
-----------------------------------*/ 
const from = document.querySelector(".js-form");
const modal = document.querySelector(".js-modal");
const modalContainer = document.querySelector(".js-modal-container");

// Hàm hiến thị modal (thêm class open vào modal)
function showFrom() {
  modal.classList.add("open");
}

// Hàm ấn modal (gỡ bỏ class open của modal)
function hideFrom() {
  modal.classList.remove("open");
}

//Nghe hành vi click
from.addEventListener("click", showFrom);

modal.addEventListener("click", hideFrom);

modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});
