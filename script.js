let openModal = () => {
    document.querySelector(".buy-modal").style.opacity = 1
    document.querySelector(".buy-modal").style.zIndex = 1
}

let closeModal = () => {
    document.querySelector(".buy-modal").style.opacity = 0
    document.querySelector(".buy-modal").style.zIndex = -1
}

document.querySelector(".buy-button").addEventListener("click", openModal)
document.querySelector(".close-button").addEventListener("click", closeModal)