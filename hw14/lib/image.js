window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 1000);
  }



$(document).ready(function(){
    $('.review-slider').slick({
        infinite: true,
        arrows: true,
        prevArrow: "<span class='arrow-left'><img src='img/arrow-left.png' alt='prev'></span>",
        nextArrow: "<span class='arrow-right'><img src='img/arrow-right.png' alt='next'></span>",
    });
})
