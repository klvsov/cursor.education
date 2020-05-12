window.onload = function(){

    menu_btn = document.querySelector('.menu-bar');
    menu = document.querySelector('header nav ul');

    menu_btn.addEventListener('click', function(){
        if(menu.hasAttribute('style')){
            menu.removeAttribute('style')
        } else{
            menu.setAttribute('style', 'opacity: 1');
        }
    })


    let img = document.querySelector('.flag');
    let selected_lang = document.querySelector('#lang');
    let translate = document.querySelectorAll('.translate');

    selected_lang.addEventListener('click', function(){
        if(selected_lang.value == 'en'){
            img.setAttribute('src', './images/flag-usa.png', 'alt', 'flag of usa');
            img.setAttribute('alt', 'flag of usa');
        } else {
            if(selected_lang.value == 'ru'){
                img.setAttribute('src', './images/flag-russia.png', 'alt', 'flag of russia');
                img.setAttribute('alt', 'flag of russia');
            } else{
                img.setAttribute('src', './images/flag-ukraina.png', 'alt', 'flag of ukraina');
                img.setAttribute('alt', 'flag of ukraina');
            }
        }
    })

    let btn_close = document.querySelector('.close i');
    let btn_login = document.querySelector('.login');
    let overlay = document.querySelector('.overlay');
    let form = document.querySelector('form');
    let form_name = document.forms[1].name;
    let form_pass = document.forms[1].pass;
    let form_enter = document.forms[1].enter;
    let er_login = document.querySelector('.error');

    btn_close.addEventListener('click', function(){
        overlay.style.display = 'none';
        document.querySelector('body').removeAttribute('style');
        form.style.display = 'none';
    })

    btn_login.addEventListener('click', function(){
        er_login.textContent = "";
        form_name.classList.remove('input_error'); 
        form_pass.classList.remove('input_error');
        form_name.value = '';
        form_pass.value = '';
        overlay.style.display = 'block';
        document.querySelector('body').style.overflow = 'hidden';
        form.style.display = 'block';
    })

    

    form_enter.addEventListener('click', function(event){
        event.preventDefault();
        er_login.textContent = "Ви не зареєстровані в системі!";
        form_name.classList.add('input_error'); 
        form_pass.classList.add('input_error'); 
    })

    form_name.addEventListener('input', function(){
        this.classList.remove('input_error')
    })
    form_pass.addEventListener('input', function(){
        this.classList.remove('input_error')
    })

    let images = document.querySelectorAll('.download_img img');
    let mainImg = document.querySelector('.download_img-3 img');
    let prevImg = document.querySelector('.download_img-1 img');
    let nextImg = document.querySelector('.download_img-2 img');


    

    prevImg.addEventListener('click', function(){
        let tempM = mainImg.src;
        let tempL = prevImg.src;
        let tempR = nextImg.src
        mainImg.animate([
            { opacity: '0.5' }, 
            { opacity: '1' }
          ], {
            duration: 500,
          })

        mainImg.src = tempR;
        prevImg.src = tempM;
        nextImg.src = tempL;
    })

    nextImg.addEventListener('click', function(){
        let tempM = mainImg.src;
        let tempL = prevImg.src;
        let tempR = nextImg.src;
        mainImg.animate([
            { opacity: '0.5' }, 
            { opacity: '1' }
          ], {
            duration: 500,
          })
        mainImg.src = tempL;
        prevImg.src = tempR;
        nextImg.src = tempM;
    })

}