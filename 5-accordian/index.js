const headers = document.querySelectorAll('.accordion-header');


headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const icon = header.querySelector('i');

    document.querySelectorAll('.accordion-content').forEach(otherContent => {
      if (otherContent !== content) {
        otherContent.style.display = 'none';
      }
    });

    document.querySelectorAll('.accordion-header i').forEach(otherIcon => {
      if (otherIcon !== icon) {
        otherIcon.classList.remove('fa-angle-up');
        otherIcon.classList.add('fa-angle-down');
      }
    });

    if (content.style.display === 'block') {
      content.style.display = 'none';
      icon.classList.remove('fa-angle-up');
      icon.classList.add('fa-angle-down');
    } else {
      content.style.display = 'block';
      icon.classList.remove('fa-angle-down');
      icon.classList.add('fa-angle-up');
    }

    const dynamicSpan = content.querySelector('.dynamic-text');
    if (dynamicSpan) {
      dynamicSpan.textContent = `This is the ${["first", "second", "third"][index]} item`;
    }
  });
});
