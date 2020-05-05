window.onload = function(){

    menu_btn = document.querySelector('.menu-bar');
    menu = document.querySelector('header nav ul');

    menu_btn.addEventListener('click', function(){
        if(menu.hasAttribute('style')){
            menu.removeAttribute('style')
        } else{
            menu.setAttribute('style', 'display: block');
        }
    })


}