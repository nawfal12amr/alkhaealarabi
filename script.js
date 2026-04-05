document.addEventListener('DOMContentLoaded', () => {
  const langSelect = document.getElementById('langSelect');
  const bookSearch = document.getElementById('bookSearch');
  const bookCards = Array.from(document.querySelectorAll('#booksGrid .book-card'));
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.querySelector('.main-nav');
  const orderForm = document.getElementById('orderForm');
  const orderMessage = document.getElementById('orderMessage');

  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });

  // Close the mobile menu after clicking on a nav link
  const navLinks = Array.from(document.querySelectorAll('.main-nav a'));
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (mainNav.classList.contains('open')) {
        mainNav.classList.remove('open');
      }
    });
  });

  langSelect.addEventListener('change', (e) => {
    const lang = e.target.value;
    const body = document.body;

    if (lang === 'en') {
      body.lang = 'en';
      body.dir = 'ltr';
      document.querySelector('h1').textContent = 'Welcome to Al-Khatt Al-Arabi Library';
      document.querySelector('.hero p').textContent = 'Your destination for premium Arabic books and culture.';
      document.querySelector('.btn-primary').textContent = 'Browse Books';
      document.querySelector('.btn-secondary').textContent = 'Contact Us';
      // Add more missing translations in a real project.
    } else if (lang === 'fr') {
      body.lang = 'fr';
      body.dir = 'ltr';
      document.querySelector('h1').textContent = 'Bienvenue à la bibliothèque Al-Khatt Al-Arabi';
      document.querySelector('.hero p').textContent = 'Votre destination pour des livres arabes et la culture.';
      document.querySelector('.btn-primary').textContent = 'Parcourir les livres';
      document.querySelector('.btn-secondary').textContent = 'Contactez-nous';
    } else {
      body.lang = 'ar';
      body.dir = 'rtl';
      document.querySelector('h1').innerHTML = 'مرحبا بكم في مكتبة <span>الخط العربي</span>';
      document.querySelector('.hero p').textContent = 'وجهتك لكل ما هو راقٍ من الكتب العربية والإسلامية والتاريخية والتنمية البشرية.';
      document.querySelector('.btn-primary').textContent = 'تصفح الكتب';
      document.querySelector('.btn-secondary').textContent = 'تواصل معنا';
    }
  });

  bookSearch.addEventListener('input', (e) => {
    const value = e.target.value.trim().toLowerCase();
    bookCards.forEach((card) => {
      const title = card.getAttribute('data-title').toLowerCase();
      card.style.display = title.includes(value) ? 'grid' : 'none';
    });
  });

  orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = orderForm.elements['name'].value.trim();

    if (!name) {
      orderMessage.textContent = 'يرجى إدخال الاسم.';
      orderMessage.style.color = '#bb2d3b';
      return;
    }

    orderMessage.textContent = `شكرا لك، ${name}. تم استلام طلبك وسنتواصل معك خلال 24 ساعة.`;
    orderMessage.style.color = '#1f5f4f';
    orderForm.reset();
  });
});
