const toggle = document.getElementById("toggle");
const body = document.querySelector("body");
toggle.onclick = function () {
  toggle.classList.toggle("active");
  body.classList.toggle("active");
};

//splide width
var splide = new Splide(".splide", ".splide2", {
  type: "loop",
  height: "10rem",
  focus: "center",
  autoWidth: true,
});

splide.mount();

// splide height
var splide = new Splide(".splide", ".splide2", {
  type: "loop",
  direction: "ttb",
  height: "20rem",
  focus: "center",
  autoHeight: true,
});

splide.mount();

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
