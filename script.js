document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  const modalButtons = document.querySelectorAll('[data-modal-target]');
  const closeButtons = document.querySelectorAll('.close-btn');


  modalButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = button.getAttribute('data-modal-target');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('active');
      }
    });
  });


  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      if (modal) modal.classList.remove('active');
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
        alert(`Sign Up successful for ${email}! (This is a prototype)`);
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
        alert(`Sign In successful for ${email}! (This is a prototype)`);
        signinForm.closest('.modal').classList.remove('active');
        signinForm.reset();
      } else {
        alert('Please fill in all fields.');
      }
    });
  }
});

