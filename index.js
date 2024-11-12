const container = document.querySelector(".container")

function animateFunction() {
    setTimeout(() => {
        container.classList.remove("active")
    }, 500);
}
window.onload = animateFunction()
