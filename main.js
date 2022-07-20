const boxes = Array.from(document.querySelectorAll(".box"));

boxes.forEach((box) => {
    box.addEventListener("click", boxHendler);
});

function boxHendler(e) {
    e.preventDefault();
    let currentBox = e.target.closest(".title");
    let currentContent = e.target.nextElementSibling;
    currentBox.classList.toggle("active");
    if (currentBox.classList.contains("active")) {
        currentContent.style.maxHeight = currentContent.scrollHeight + "px";
    } else {
        currentContent.style.maxHeight = 0;
    }
}