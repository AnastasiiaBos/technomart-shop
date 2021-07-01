const link=document.querySelector(".connection-button");
const popup=document.querySelector(".modal-connection");
const close=popup.querySelector(".modal-close");
const form=popup.querySelector(".connection");
const login=popup.querySelector(".user-name");
const email=popup.querySelector(".user-email");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.key==="Esc"||evt.key==="Escape") {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
    }
  }
});
