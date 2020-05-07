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
            translate[0].textContent = 'overview';
            translate[1].textContent = 'features';
            translate[2].textContent = 'technology';
            translate[3].textContent = 'contact';
            translate[4].textContent = 'sign up';
            translate[5].textContent = 'login';
            translate[6].textContent = 'Cloud budget management for everyone. Only €69.95 a Month After a 7 Day Trial of Up to €4.99';
            translate[7].textContent = 'sign up';
        } else {
            if(selected_lang.value == 'ru'){
                img.setAttribute('src', './images/flag-russia.png', 'alt', 'flag of russia');
                img.setAttribute('alt', 'flag of russia');
                translate[0].textContent = 'обзор';
                translate[1].textContent = 'особенности';
                translate[2].textContent = 'технологии';
                translate[3].textContent = 'контакты';
                translate[4].textContent = 'зарегистрироваться';
                translate[5].textContent = 'войти';
                translate[6].textContent = 'Управление облачным хранилищем для каждого. Всего 69.99 евро на месяц, после 7-дневной бесплатной пробной версии, стоимостью до 4.99 евро';
            translate[7].textContent = 'зарегистрироваться';
            } else{
                img.setAttribute('src', './images/flag-ukraina.png', 'alt', 'flag of ukraina');
                img.setAttribute('alt', 'flag of ukraina');
                translate[0].textContent = 'огляд';
                translate[1].textContent = 'особливості';
                translate[2].textContent = 'технології';
                translate[3].textContent = 'контакти';
                translate[4].textContent = 'зареєструватись';
                translate[5].textContent = 'увійти';
                translate[6].textContent = 'Управління хмарним сховищем для кожного. Лише 69.99 євро на місяць, після 7-денної безкоштовної пробної версії, вартістю до 4.99 євро';
            translate[7].textContent = 'зареєструватись';
            }
        }
    })

    let btn_close = document.querySelector('.close i');
    let btn_login = document.querySelector('.login');
    let overlay = document.querySelector('.overlay');
    let form = document.querySelector('form');
    let form_name = document.forms[0].name;
    let form_pass = document.forms[0].pass;
    let form_enter = document.forms[0].enter;
    let er_login = document.querySelector('.error');

    btn_close.addEventListener('click', function(){
        overlay.style.display = 'none';
        form.style.display = 'none';
    })

    btn_login.addEventListener('click', function(){
        er_login.textContent = "";
        form_name.classList.remove('input_error'); 
        form_pass.classList.remove('input_error');
        form_name.value = '';
        form_pass.value = '';
        overlay.style.display = 'block';
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
}