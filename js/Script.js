const input = document.querySelector('.input');
const recherche= document.querySelector('.search');
const fermer = document.querySelector('Button');


// Action a mené

recherche.addEventListener('click', () => {
    input.style.display = 'block';
  });
  
  fermer.addEventListener('click', () => {
    input.style.display = 'none';
  });

