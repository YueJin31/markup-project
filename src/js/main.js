(function ($) {
  $(document).ready(function () {
    initSlider();
    getPosts();
    loadMorePosts();
  });

  const headerMenu = $('.navigation');
  const burgerBtn = $('.header__burger');

  burgerBtn.on('click', function () {
    burgerBtn.toggleClass('open');
    headerMenu.toggleClass('show-mobile');
  });

  function initSlider() {
    $('.post-slider').slick({
      adaptiveHeight: true,
      nextArrow:
        '<button type="button" class="next-slide"><i class="fas fa-chevron-down" aria-hidden="true"></i></button>',
      prevArrow:
        '<button type="button" class="prev-slide"><i class="fas fa-chevron-up" aria-hidden="true"></i></button>',
    });
  }

  function getPosts() {
    $.getJSON('./js/json-handler.json', function (data) {
      let post = '';
      $.each(data, function (i, item) {
        post += `<a href="./post-full-sidebar.html" class="post d-none">`;
        post += `<div class="img-wrapper">`;
        post += `<img src="${item.image}" alt="">`;
        post += `</div>`;
        post += `<p class="post__tag">${item.tag}</p>`;
        post += `<h2 class="post__title">${item.title}</h2>`;
        post += `<p class="post__text">${item.text}</p>`;
        post += `</a>`;
      });

      $('.posts-wrapper.extend').append(post);
    });
  }

  function loadMorePosts() {
    $('.post.d-none').slice(0, 2).show();

    if ($('.post.d-none:hidden').length != 0) {
      $('.load-more').show();
    }

    $('.load-more').on('click', function (e) {
      e.preventDefault();
      $('.post.d-none:hidden').slice(0, 2).slideDown();
      if ($('.post.d-none:hidden').length == 0) {
        $('.load-more').css('display', 'none');
      }
    });
  }
})(jQuery);
