window.onload = function () {
  window.scrollTo(0, 0)
}
// forcing the page to go up when it reloads bch tabda ahsen
const overlayContainer = document.getElementsByClassName("overlayContainer")[0]
console.log(overlayContainer)

const sandwichButtonMenu = document.getElementById("sandwichButtonDom")
console.log(sandwichButtonMenu)

sandwichButtonMenu.addEventListener("click", function () {
  overlayContainer.classList.toggle("hidden")
})
