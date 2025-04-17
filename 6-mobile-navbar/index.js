const toggle = document.getElementById('menu-toggle');
const cross = document.getElementById('menu-cross');
const navLinks = document.getElementById('nav-links');
const logo = document.getElementById('logo');

let isMenuOpen = false;
toggle.addEventListener('click', () => {
  navLinks.classList.add('show');
  toggle.style.display = 'none';   
  cross.style.display = 'block'; 
  logo.style.display = 'none';
  isMenuOpen = true; 
});

cross.addEventListener('click', () => {
  navLinks.classList.remove('show');
  cross.style.display = 'none';     
  toggle.style.display = 'block';
  logo.style.display = 'block';
  isMenuOpen = false; 
});

function handleResize() {
  if (window.innerWidth > 768) {
    logo.style.display = 'block';  
    navLinks.classList.remove('show'); 
    toggle.style.display = 'none';  
    cross.style.display = 'none';  
    if (isMenuOpen) {
      isMenuOpen = false;
    }
  } else {
    toggle.style.display = 'block';  
    cross.style.display = 'none';  
    if (isMenuOpen) {
      toggle.style.display = 'none';
      cross.style.display = 'block';
    }
  }
}

handleResize();
window.addEventListener('resize', handleResize);
