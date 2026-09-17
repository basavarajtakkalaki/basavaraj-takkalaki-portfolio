document.addEventListener('DOMContentLoaded', () => {
  const titles = [
    'Backend Developer',
    'Python Developer',
    'Systems Enthusiast',
    'Computer Science Undergraduate'
  ];

  const textElement = document.getElementById('rotating-text');
  const cursorElement = document.getElementById('rotating-cursor');

  if (textElement && cursorElement) {
    let titleIndex = 0;
    let characterIndex = 0;
    let isDeleting = false;

    function typeTitle() {
      const currentTitle = titles[titleIndex];

      if (!isDeleting) {
        textElement.textContent = currentTitle.substring(0, characterIndex + 1);
        characterIndex++;

        if (characterIndex === currentTitle.length) {
          isDeleting = true;
          setTimeout(typeTitle, 1800);
          return;
        }

        setTimeout(typeTitle, 80);
      } else {
        textElement.textContent = currentTitle.substring(0, characterIndex - 1);
        characterIndex--;

        if (characterIndex === 0) {
          isDeleting = false;
          titleIndex = (titleIndex + 1) % titles.length;
          setTimeout(typeTitle, 500);
          return;
        }

        setTimeout(typeTitle, 40);
      }
    }

    cursorElement.style.display = 'inline-block';
    typeTitle();
  }

  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => loader.classList.remove('show'), 800);
  }

  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    const toggle = () => {
      if (window.scrollY > 300) {
        backToTop.style.display = 'block';
      } else {
        backToTop.style.display = 'none';
      }
    };

    window.addEventListener('scroll', toggle);
    toggle();
  }

  if (window.jQuery) {
    $('.navbar-nav a.nav-link').on('click', function () {
      $('.navbar-nav a.nav-link').removeClass('active');
      $(this).addClass('active');
    });

    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 45) {
        $('.navbar').addClass('nav-sticky');
      } else {
        $('.navbar').removeClass('nav-sticky');
      }
    });
  }
});
