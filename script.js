document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Event filtering
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

  // Contact form validation
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Form submitted! (This is a prototype; no actual submission occurs.)');
    });
  }

  // Book button placeholder
  const bookButtons = document.querySelectorAll('.book-btn');
  bookButtons.forEach(button => {
    button.addEventListener('click', () => {
      alert('Booking feature is not implemented in this prototype.');
    });
  });
});