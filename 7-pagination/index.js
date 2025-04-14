const links = document.querySelectorAll(".link");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentPage = 1;
const totalPages = links.length;

function updatePagination() {
  links.forEach(link => link.classList.remove("active"));
  links[currentPage - 1].classList.add("active");

  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

links.forEach((link, index) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    currentPage = index + 1;
    updatePagination();
  });
});

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    updatePagination();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    updatePagination();
  }
});
