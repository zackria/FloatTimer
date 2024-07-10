$(function () {
  // $(".textStyle").hover(
  //   function () {
  //     $(".textStyle").css("background-color", "white");
  //   },
  //   function () {
  //     $(".textStyle").css("background-color", "transparent");
  //   }
  // );

  let timer;
  let isPaused = false;
  let remainingTime = 0;

  $("#closeBtn").click(function () {
    //console.log("close button JQuery is clicked");
    api.close();
  });

  function updateTimerDisplay(minutes, seconds) {
    console.log("#updateTimerDisplay Function Clicked");
    $("#timer-display").text(
      `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
    );
  }

  function startTimer(duration) {
    console.log("#startTimer Function Clicked");
    let time = duration;
    timer = setInterval(function () {
      if (!isPaused) {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        updateTimerDisplay(minutes, seconds);

        if (--time < 0) {
          clearInterval(timer);
          updateTimerDisplay(0, 0);
          alert("Time's up!");
        }
      }
    }, 1000);
  }

  $("#start").click(function () {
    console.log("#start Function Clicked");
    const minutes = parseInt($("#minutes").val());
    const seconds = parseInt($("#seconds").val());
    remainingTime = minutes * 60 + seconds;

    if (
      isNaN(minutes) ||
      isNaN(seconds) ||
      minutes < 0 ||
      seconds < 0 ||
      seconds >= 60
    ) {
      alert("Please enter valid minutes and seconds.");
      return;
    }

    clearInterval(timer);
    isPaused = false;
    startTimer(remainingTime);
  });

  $("#stop").click(function () {
    console.log("#stop Function Clicked");
    clearInterval(timer);
    updateTimerDisplay(0, 0);
  });

  $("#pause").click(function () {
    console.log("#pause Function Clicked");
    isPaused = !isPaused;
  });

  $("#reset").click(function () {
    console.log("#reset Function Clicked");
    clearInterval(timer);
    $("#minutes").val("");
    $("#seconds").val("");
    updateTimerDisplay(0, 0);
  });
});

const CLOSE_BTN = document.getElementById("closeBtn");

CLOSE_BTN.addEventListener("click", () => {
  //console.log("close button is clicked");
  api.close();
});
