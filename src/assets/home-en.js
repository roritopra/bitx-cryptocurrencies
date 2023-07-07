document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.querySelector('.menu-icon');
    var menu = document.querySelector('.menu');
  
    menuIcon.addEventListener('click', function() {
      menu.classList.toggle('show');
    });
  });
  

window.sr = ScrollReveal();

    sr.reveal('.Hero', {
        duration: 2000,
        origin: 'bottom',
        distance: '-100px'
    });

    sr.reveal('.card1', {
        duration: 1500,
        origin: 'bottom',
        distance: '-100px'
    });

    sr.reveal('.card2', {
        duration: 2500,
        origin: 'bottom',
        distance: '-100px'
    });

    sr.reveal('.card3', {
        duration: 3500,
        origin: 'bottom',
        distance: '-100px'
    });

    sr.reveal('.Mobile-container', {
        duration: 4000,
        origin: 'right',
        distance: '-100px'
    });

    sr.reveal('.Auto-type-container', {
        duration: 4000,
        origin: 'bottom',
        distance: '-100px'
    });

    sr.reveal('.Contact', {
        duration: 4000,
        origin: 'top',
        distance: '-100px'
    });

    sr.reveal('.footer-scroll', {
        duration: 4000
    });

