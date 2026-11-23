// Assignment 5: build my skills list from an array.
const mySkills = ["Video editing", "Competitive gaming", "Photography", "Art"];

const list = document.querySelector("#list");
const count = document.getElementById("count");

// Only build the list on pages that have it
if (list) {
  mySkills.forEach(function (skill) {
    const li = document.createElement("li");
    li.textContent = skill;
    list.appendChild(li);
  });
  count.textContent = "That's " + mySkills.length + " things I'm good at.";
}

// Dark mode button: toggle the "dark" class on body
const themeBtn = document.querySelector("#theme-btn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "Light mode";
  } else {
    themeBtn.textContent = "Dark mode";
  }
});

// Contact form
const form = document.querySelector("#contact-form");

if (form) {
  const nameBox = document.querySelector("#name");
  const emailBox = document.querySelector("#email");
  const messageBox = document.querySelector("#message");
  const messageError = document.querySelector("#message-error");
  const thanks = document.querySelector("#thanks");

  form.addEventListener("submit", function (event) {
    // Stop the page from reloading, since there is no server
    event.preventDefault();
    messageError.textContent = "";
    thanks.textContent = "";

    // Let the HTML required and type="email" checks run first
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // My own rule: the message needs at least 20 characters
    if (messageBox.value.trim().length < 20) {
      messageError.textContent = "Please write at least 20 characters.";
      messageError.className = "form-msg error";
      return;
    }

    thanks.textContent = "Thanks, " + nameBox.value + "! I'll reply to " + emailBox.value + " soon.";
    thanks.className = "form-msg success mt-3";
    form.reset();
  });
}

// My Garage page: add a car to the array and the list
const cars = [];
const carInput = document.querySelector("#car-input");
const addCar = document.querySelector("#add-car");
const carList = document.querySelector("#car-list");
const carCount = document.querySelector("#car-count");

if (addCar) {
  carCount.textContent = "No cars shared yet. Be the first!";

  addCar.addEventListener("click", function () {
    const car = carInput.value.trim();
    if (car === "") {
      return;
    }
    cars.push(car);
    const li = document.createElement("li");
    li.textContent = car;
    carList.appendChild(li);
    carCount.textContent = "Welcome to the community! People who have added their car: " + cars.length;
    carInput.value = "";
  });
}

// Credit Score page: show which range a score is in
const scoreInput = document.querySelector("#score-input");
const checkScore = document.querySelector("#check-score");
const scoreResult = document.querySelector("#score-result");

if (checkScore) {
  checkScore.addEventListener("click", function () {
    const score = Number(scoreInput.value);
    let rating = "";
    if (score < 300 || score > 850) {
      rating = "Please enter a score from 300 to 850.";
    } else if (score >= 800) {
      rating = score + " is Excellent.";
    } else if (score >= 740) {
      rating = score + " is Very good.";
    } else if (score >= 670) {
      rating = score + " is Good.";
    } else if (score >= 580) {
      rating = score + " is Fair.";
    } else {
      rating = score + " is Poor.";
    }
    scoreResult.textContent = rating;
  });
}
