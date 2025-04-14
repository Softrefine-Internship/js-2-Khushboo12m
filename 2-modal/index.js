const popup = document.getElementById("popup");
const openBtn = document.querySelector(".open-button");
const closeBtn = document.getElementById("closeBtn");
const cancelBtn = document.getElementById("btn1");
const deactivateBtn = document.getElementById("btn2");
const main=  document.querySelector('.main');

openBtn.addEventListener("click", () => {
  popup.style.display = "block";
  main.style.backgroundColor = "#878787";
});

function closePopup() {
  popup.style.display = "none";
  main.style.backgroundColor = "white";
}

closeBtn.addEventListener("click", closePopup);
cancelBtn.addEventListener("click", closePopup);
deactivateBtn.addEventListener("click", closePopup);


document.addEventListener('click', function (e) {
  const container = document.querySelector('.container');
  
  if (popup.style.display === 'block' && !container.contains(e.target) && !openBtn.contains(e.target)) {
    closePopup();
  }
});