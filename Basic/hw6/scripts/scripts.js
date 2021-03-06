window.addEventListener('load', function(){
    let slides = document.querySelectorAll('.testimonials .testimonial_item');
    let prevBtn = document.querySelector('.controls_btn .prev');
    let nextBtn = document.querySelector('.controls_btn .next');
    let dots = document.querySelectorAll('.dots span');
    let i = 0
    nextBtn.addEventListener('click', function(){
        slides[i].style.opacity = '0';
        slides[i].style.transform = 'translateX(50%)';
        dots[i].classList.remove('active');
        i++;
        if(i >= slides.length){
            i = 0
        }
        slides[i].style.opacity = '1';
        slides[i].style.transform = 'translateX(0)';
        dots[i].classList.add('active');
    })

    prevBtn.addEventListener('click', function(){
        slides[i].style.opacity = '0';
        slides[i].style.transform = 'translateX(-50%)';
        dots[i].classList.remove('active');
        i--;
        if(i < 0){
            i = slides.length - 1
        }
        slides[i].style.opacity = '1';
        slides[i].style.transform = 'translateX(0)';
        dots[i].classList.add('active');
    })

    for(let j = 0; j < dots.length; j++){
        dots[j].addEventListener('click', function(){
            slides[i].style.opacity = '0';
            slides[i].style.transform = 'translateX(50%)';
            dots[i].classList.remove('active');
            i = j;
            slides[j].style.opacity = '1';
            slides[j].style.transform = 'translateX(0)';
            dots[j].classList.add('active');
        })
    }

    let anchors = document.querySelectorAll('a.scroll');
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()
            let blockID = anchor.getAttribute('href')
            targetEl = document.querySelector(blockID).getBoundingClientRect().top;
            targetEl-=20;
            window.scrollBy(0, targetEl);

        })
        
    }
})