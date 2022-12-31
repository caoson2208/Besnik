$(document).ready(function () {
  $("#gototop").hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#gototop").fadeIn(300);
    } else {
      $("#gototop").fadeOut(300);
    }
  });

  $("#gototop").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});
