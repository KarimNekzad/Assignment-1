// Navbar animations

const navbar = document.getElementById('navbar');
let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.remove('top');
    if (!scrolled) {
      navbar.style.transform = 'translateY(-70px)';
    }
    setTimeout(function () {
      navbar.style.transform = 'translateY(0)';
      scrolled = true;
    }, 200);
  } else {
    navbar.classList.add('top');
    scrolled = false;
  }
};

// Smooth Scrolling
$('#navbar a, .btn').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});

// Modal functionality

const modal = document.querySelector('.modal');
const modalCloser = document.querySelector('.close-modal');

const openModal = function () {
  window.scrollTo(0, 0);
  modal.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
};

window.addEventListener('load', function () {
  modalCloser.addEventListener('click', closeModal);
  console.log('loaded');
});
