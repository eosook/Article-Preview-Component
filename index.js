const shareButton = document.getElementById("share-button");
const shareBar = document.getElementById("share-bar");
const shareBarTriangle = document.getElementById("bar-triangle")


shareButton.addEventListener("click", () => {
    shareBar.classList.remove("hidden");
    shareBarTriangle.classList.remove("hidden");
})

shareButton.addEventListener("blur", () => {
    shareBar.classList.add("hidden");
    shareBarTriangle.classList.add("hidden");
})
