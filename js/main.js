
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
