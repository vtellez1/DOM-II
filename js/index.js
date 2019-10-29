// mouseover
const mapImg = document.querySelector(".img-content");

mapImg.addEventListener("mouseover", () => {
mapImg.style.transform="scale(1.2)";
mapImg.style.transition = "all 0.3s"
})

mapImg.addEventListener("mouseout", () => {
    mapImg.style.transform="scale(1)";
    mapImg.style.transition = "all 0.3s"
})

// keydown
const newTextAdd = document.querySelector(".text-content, p");

document.addEventListener('keydown', logKey);
function logKey(e) {
  newTextAdd.textContent += ` ${e.code}`;
}

// resize
const newText = document.querySelector(".text-content, h2");
window.addEventListener("resize", () => {
    newText.textContent="This title has disappeared. Soorrrryyy :("
})

// dblclick
const logoWords = document.querySelector(".logo-heading");
logoWords.addEventListener("dblclick", () => {
    logoWords.style.color = "red";
});

// scroll
window.addEventListener("scroll", () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    
    if (Math.ceil(scrolled) === scrollable) {
        alert('You are at the end of the page!');
    }
});


// focus
const navFocus = document.querySelectorAll(".nav a");

// wheel


// drag / drop


// load


// select


