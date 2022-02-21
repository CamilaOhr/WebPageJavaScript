const left = document.querySelector(".left")
const right = document.querySelector(".right")
const container = document.querySelector(".container")

const hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", function(){
      this.classList.toggle("is-active");
    })

left.addEventListener("mouseenter", () => container.classList.add("hover-left"));
left.addEventListener("mouseleave", () => container.classList.remove("hover-left"));

right.addEventListener("mouseenter", () => container.classList.add("hover-right"));
right.addEventListener("mouseleave", () => container.classList.remove("hover-right"));