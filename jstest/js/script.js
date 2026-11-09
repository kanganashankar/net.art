let button = document.getElementById("modeButton");
let link = document.querySelector("a");
let isNight = false;


function toggleMode() {
    isNight = !isNight;

    if (isNight) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        link.style.color = "lightblue";
        button.textContent = "Day Mode";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        link.style.color = "";
        button.textContent = "Night Mode";
    }

    console.log("Night mode is on: " + isNight);
}

button.addEventListener("click", toggleMode);