const jokePara = document.querySelector("#joke");
const btn = document.querySelector(".button-52");

let data;

const getJokes = () => {
  displayJoke();
};

async function displayJoke() {
  const api = "https://icanhazdadjoke.com/";
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    let tempData = await fetch(api, config);
    data = await tempData.json();
    jokePara.textContent = data.joke;
  } catch (err) {}
}

getJokes();

/////////////////////////////////////

const bg = document.querySelector(".section");
const toggleBtn = document.querySelector("#toggle-btn");
const slider = document.querySelector("#circle");

function handleClick() {
  // bg-color-change
  if (bg.classList.contains("light-to-dark")) {
    bg.classList.remove("light-to-dark");
    bg.classList.add("dark-to-light");
  } else {
    bg.classList.remove("dark-to-light");
    bg.classList.add("light-to-dark");
  }

  // button-color-change
  if (bg.classList.contains("light-to-dark")) {
    btn.style.backgroundColor = "#222222";
  } else {
    btn.style.backgroundColor = "black";
  }

  // circle-slide
  if (slider.classList.contains("slide-right")) {
    slider.classList.remove("slide-right");
    slider.classList.add("slide-left");
  } else {
    slider.classList.remove("slide-left");
    slider.classList.add("slide-right");
  }
}
