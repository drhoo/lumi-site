// Array of story pages (square PNGs)
const pages = [
    "images/1.png",
    "images/2.png",
    "images/3.png",
    "images/4.png",
    "images/5.png"
];

let currentPage = 0;

const img = document.getElementById("storyImage");
const next = document.getElementById("nextBtn");
const prev = document.getElementById("prevBtn");

function updateImage() {
    img.src = pages[currentPage];
}

// Next page
next.addEventListener("click", () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        updateImage();
    }
});

// Previous page
prev.addEventListener("click", () => {
    if (currentPage > 0) {
        currentPage--;
        updateImage();
    }
});
