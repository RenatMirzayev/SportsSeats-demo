document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  const sportFilter = document.querySelector('#sport-filter');
  const dateFilter = document.querySelector('#date-filter');
  const eventCards = document.querySelectorAll('.event-card');

  function filterEvents() {
    const sport = sportFilter ? sportFilter.value : 'all';
    const date = dateFilter ? dateFilter.value : 'all';

    eventCards.forEach(card => {
      const cardSport = card.getAttribute('data-sport');
      const cardDate = card.getAttribute('data-date');

      const sportMatch = sport === 'all' || sport === cardSport;
      const dateMatch = date === 'all' || date === cardDate;

      card.style.display = sportMatch && dateMatch ? 'block' : 'none';
    });
  }

  if (sportFilter && dateFilter) {
    sportFilter.addEventListener('change', filterEvents);
    dateFilter.addEventListener('change', filterEvents);
  }

  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Form submitted! (This is a prototype; no actual submission occurs.)');
    });
  }

  const bookButtons = document.querySelectorAll('.book-btn');
  bookButtons.forEach(button => {
    button.addEventListener('click', () => {
      alert('Booking feature is not implemented in this prototype.');
    });
  });

  const modalButtons = document.querySelectorAll('[data-modal-target]');
  const closeButtons = document.querySelectorAll('.close-btn');

  modalButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = button.getAttribute('data-modal-target');
      const modal = document.getElementById(modalId);
      modal.classList.add('active');
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      modal.classList.remove('active');
    });
  });

  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });

  const signupForm = document.querySelector('#signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.querySelector('#signup-email').value;
      const password = document.querySelector('#signup-password').value;
      if (email && password) {
        alert(`Sign Up successful for ${email}! (This is a prototype; no actual account created.)`);
        signupForm.closest('.modal').classList.remove('active');
        signupForm.reset();
      } else {
        alert('Please fill in all fields.');
      }
    });
  }

  const signinForm = document.querySelector('#signin-form');
  if (signinForm) {
    signinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.querySelector('#signin-email').value;
      const password = document.querySelector('#signin-password').value;
      if (email && password) {
        alert(`Sign In successful for ${email}! (This is a prototype; no actual login occurs.)`);
        signinForm.closest('.modal').classList.remove('active');
        signinForm.reset();
      } else {
        alert('Please fill in all fields.');
      }
    });
  }
});
