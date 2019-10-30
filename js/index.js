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

//click
const buttonEvent = document.querySelector(".destination, btn")
    buttonEvent.addEventListener("click", () =>{
       buttonEvent.style.color= "purple";
    })

// select
const selectEvent = document.querySelector(".intro input")
    selectEvent.addEventListener("select", () =>{
       selectEvent.style.color= "green";
    })

//Focus
    selectEvent.addEventListener('focus', (event) => {
        event.target.style.background = 'darkgrey';    
      }, true);  

// wheel
const wheelEvent = document.querySelector(".intro img")
    wheelEvent.addEventListener("wheel", () =>{
       wheelEvent.style.transform="scale(1.4)";
    })

    wheelEvent.addEventListener("dblclick", () =>{
        wheelEvent.style.transform="scale(1)";
     })

// load
window.addEventListener("load", (event) => {
    alert('Welcome to the fUn BuS!');
  });


//Event Propagation

const bgColorP = document.querySelector(".intro p")
bgColorP.addEventListener('click', (event) => {
    bgColorP.style.backgroundColor="tomato";
   event.stopPropagation();
});

const bgcolorIntro= document.querySelector(".intro")
bgcolorIntro.addEventListener('click', (event) => {
    bgcolorIntro.style.backgroundColor="deepskyblue";
    event.stopPropagation();
});


//Prevent Default
const stopLink = document.querySelector(".nav-link");

stopLink.addEventListener("click", (event) => {
  console.log("stopped the link from refreshing");
  event.preventDefault();
})
