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
      console.log('dfjdfj')
    };
  });


  $('.education__title').click(function(){
      $(this).toggleClass('active').next().slideToggle(300);
  });
});
