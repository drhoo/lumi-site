const images = [
    "images/1.png",
    "images/2.png",
    "images/3.png",
    "images/4.png",
    "images/5.png"
];

let index = 0;

const imgEl = document.getElementById("storyImage");
const dots = document.querySelectorAll(".dot");

function updateViewer() {
    imgEl.style.opacity = 0;
    setTimeout(() => {
        imgEl.src = images[index];
        imgEl.style.opacity = 1;
    }, 150);

    dots.forEach(d => d.classList.remove("active"));
    dots[index].classList.add("active");
}

dots.forEach(dot => {
    dot.addEventListener("click", () => {
        index = Number(dot.dataset.index);
        updateViewer();
    });
});


// Swipe support
let startY;

document.addEventListener("touchstart", e => {
    startY = e.touches[0].clientY;
});

document.addEventListener("touchend", e => {
    let endY = e.changedTouches[0].clientY;
    let diff = endY - startY;

    if (Math.abs(diff) > 50) {
        if (diff < 0 && index < images.length - 1) index++;
        else if (diff > 0 && index > 0) index--;
        updateViewer();
    }
});

updateViewer();
