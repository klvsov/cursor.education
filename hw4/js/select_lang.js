window.onload = function(){

    let img = document.querySelector('.flag');
    let selected_lang = document.querySelector('#lang');

    selected_lang.addEventListener('click', function(){
        if(selected_lang.value == 'en'){
            img.setAttribute('src', './images/flag-usa.png')
        } else {
            if(selected_lang.value == 'ru'){
                img.setAttribute('src', './images/flag-russia.png')
            } else{
                img.setAttribute('src', './images/flag-ukraina.png')
            }
        }
    })

}