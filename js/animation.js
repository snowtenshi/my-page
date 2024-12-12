document.getElementById('snow-logo').addEventListener('click', () => {
  const logo = document.getElementById('snow-logo');
  logo.classList.add('spin');

  setTimeout(function() {
    logo.classList.remove('spin');
  }, 2500)
}) 
