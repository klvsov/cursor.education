$(document).ready(function(){
    $('.carousel').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow:4,
        arrows: true,
        dots: true,
        prevArrow: "<span class='prev'><img src='images/prev_arrow.svg' alt='prev'></span>",
        nextArrow: "<span class='next'><img src='images/next_arrow.svg' alt='next'></span>",
        responsive: [
            {
                breakpoint: 1430,
                settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '10px',
                  slidesToShow: 4
                }
            },

            {
                breakpoint: 1290,
                settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '10px',
                  slidesToShow: 3
                }
            },

            {
                breakpoint: 995,
                settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '10px',
                  slidesToShow: 2
                }
            },
            {
                breakpoint: 690,
                settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '100px',
                slidesToShow: 1
                }
            },
            {
                breakpoint: 540,
                settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 1
                }
            }
        ]
      });
  });