  var link = document.querySelector(".contacts-btn");
  var popup = document.querySelector(".modal");
  var overlay = document.querySelector(".modal-overlay");
  var close = popup.querySelector(".modal-close");

  link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    overlay.classList.add("modal-overlay-show");
  });

  close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    overlay.classList.remove("modal-overlay-show");
  });
