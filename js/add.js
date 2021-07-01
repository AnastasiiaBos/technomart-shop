const purchaseButtons=document.querySelectorAll(".buy");
const purchasePopup=document.querySelector(".modal-add");
const purchaseClose=document.querySelector(".modal-close");

purchaseButtons.forEach(purchaseButton => {
  purchaseButton.addEventListener('click', event => {
    event.preventDefault();
    purchasePopup.classList.add("modal-show");
  })
});

purchaseClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  purchasePopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.key==="Esc"||evt.key==="Escape") {
    if (purchasePopup.classList.contains("modal-show")) {
      evt.preventDefault();
      purchasePopup.classList.remove("modal-show");
    }
  }
});
