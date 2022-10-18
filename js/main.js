$(document).ready(function() {
  $('.reviews__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: true
          }
        },
    ]
  });

  $('.media__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: true
          }
        },
    ]
  });

  const contactModal = $('.contact__modal');

  $('.js-modal-btn').on("click", function() {
    contactModal.fadeIn('fast');
    contactModal.css('display', 'flex');
    $('html').css('overflow', 'hidden');
  });

  $('.contact__modal, .contact__close').on("click", function (e) {
    if (e.target == this) {
      contactModal.fadeOut(300);
      $('html').css('overflow', 'auto');
    };
  });

  $('.education__title').click(function(){
      $(this).toggleClass('active').next().slideToggle(300);
  });

  const cardsAnimated = document.querySelectorAll('.step__card');
  if (cardsAnimated.length > 0) {
    window.addEventListener('scroll', cardsOnScroll);
    function cardsOnScroll () {
      for (let i = 0; i < cardsAnimated.length; i++) {
        const card = cardsAnimated[i];
        const cardHeight = card.offsetHeight;
        const cardOffset = offset(card).top;
        const start = 4;

        let cardPoint = window.innerHeight - cardHeight / start;
        if ((pageYOffset > (cardOffset - cardPoint)) && (pageYOffset < (cardOffset + cardHeight))) {
          card.classList.add('_active')
        } else {
          card.classList.remove('_active')
        }
      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
  }

});
