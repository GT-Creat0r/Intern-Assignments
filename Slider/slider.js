const container = document.querySelector(".slider");
const slides = document.querySelector(".slides");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

let isPressed = false;
let startX;
let scrollLeft;

slides.style.left = "0px"; // initialize

// ---- DRAGGING ----
container.addEventListener("mousedown", (e) => {
  isPressed = true;
  startX = e.clientX;
  scrollLeft = parseInt(slides.style.left) || 0;
  container.style.cursor = "grabbing";
  stopAutoSlide(); // pause while dragging
});

container.addEventListener("mouseup", () => {
  isPressed = false;
  container.style.cursor = "grab";
  startAutoSlide(); // resume after drag
});

container.addEventListener("mouseleave", () => {
  isPressed = false;
  container.style.cursor = "default";
  startAutoSlide(); // resume when leaving
});

container.addEventListener("mousemove", (e) => {
  if (!isPressed) return;
  e.preventDefault();
  const dx = e.clientX - startX;
  slides.style.left = `${scrollLeft + dx}px`;
  getBounding();
});

// ---- BOUND CHECK ----
function getBounding() {
  const container_x = container.getBoundingClientRect();
  const slides_x = slides.getBoundingClientRect();
  if (parseInt(slides.style.left) > 0) {
    slides.style.left = "0px";
  } else if (slides_x.right < container_x.right) {
    slides.style.left = `-${slides_x.width - container_x.width}px`;
  }
}

// ---- BUTTONS ----
right.addEventListener("click", () => {
  isPressed = false;
  currentIndex++;
  if (currentIndex >= slideCount) {
    currentIndex = 0; // loop to first slide
  }
  slides.style.left = `-${slideWidth * currentIndex}px`;
  slides.style.transition = "0.3s ease";
  stopAutoSlide(); // optional: pause autoplay briefly
  startAutoSlide();
});

left.addEventListener("click", () => {
  isPressed = false;
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slideCount-1; // loop to last slide
  }
  slides.style.left = `-${slideWidth * currentIndex}px`;
  slides.style.transition = "0.3s ease";
  stopAutoSlide(); // optional: pause autoplay briefly
  startAutoSlide();
});


// ---- AUTOSLIDE ----
let autoSlide;
let currentIndex = 0;
const slideWidth = slides.children[0].getBoundingClientRect().width;
const slideCount = slides.children.length;

function startAutoSlide() {
  stopAutoSlide(); // clear if already running
  autoSlide = setInterval(() => {
    currentIndex++;
    if (currentIndex >= slideCount) {
      currentIndex = 0;
    }
    slides.style.left = `-${slideWidth * currentIndex}px`;
    slides.style.transition = "0.5s ease";
  }, 3000); // every 3s
}

function stopAutoSlide() {
  clearInterval(autoSlide);
}

// Pause autoslide on hover
container.addEventListener("mouseenter", () => stopAutoSlide());
container.addEventListener("mouseleave", () => startAutoSlide());

// Start when page loads
startAutoSlide();
