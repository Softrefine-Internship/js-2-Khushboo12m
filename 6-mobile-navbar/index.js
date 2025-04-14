const toggle = document.getElementById('menu-toggle');
const cross = document.getElementById('menu-cross');
const navLinks = document.getElementById('nav-links');
const logo = document.getElementById('logo');

toggle.addEventListener('click', () => {
  navLinks.classList.add('show');
  toggle.style.display = 'none';   
  cross.style.display = 'block'; 
  logo.style.display = 'none';    
});

cross.addEventListener('click', () => {
  navLinks.classList.remove('show');
  cross.style.display = 'none';     
  toggle.style.display = 'block';
  logo.style.display = 'block';    
    
});


function handleResize() {
  if (window.innerWidth > 768) {
    navLinks.classList.remove('show');
    toggle.style.display = 'none';
    cross.style.display = 'none';
  } else {
    toggle.style.display = 'block';
    cross.style.display = 'none';
  }
}

window.addEventListener('resize', handleResize);


