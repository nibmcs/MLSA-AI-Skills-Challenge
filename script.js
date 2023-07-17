// Set the countdown date and time
var countDownDate = new Date("August 24, 2023 15:00:00").getTime();

// Update the countdown every second
var countdown = setInterval(function () {
  // Get current date and time
  var now = new Date().getTime();

  // Calculate the remaining time
  var distance = countDownDate - now;

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("countdown").innerHTML =
    days +
    " DAYS " +
    hours +
    " HOURS " +
    minutes +
    " MINUTES " +
    seconds +
    " SECONDS";

  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Event has started!";
  }
}, 1000);
