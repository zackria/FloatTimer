$(function () {
  $(".textStyle").hover(
    function () {
      $(".textStyle").css("background-color", "white");
    },
    function () {
      $(".textStyle").css("background-color", "transparent");
    }
  );

  $(".closeBtn").click(function () {
    console.log("close button JQuery is clicked");
    api.close();
  });
});

const CLOSE_BTN = document.getElementById("closeBtn");

CLOSE_BTN.addEventListener("click", () => {
  console.log("close button is clicked");
  api.close();
});
