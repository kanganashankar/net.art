let lightSwitch = document.querySelector("#switch");

lightSwitch.addEventListener("click", function () {
  document.body.classList.toggle("night");

  if (document.body.classList.contains("night")) {
    lightSwitch.textContent = "Turn on the lights";
  } else {
    lightSwitch.textContent = "Turn off the lights";
  }
});