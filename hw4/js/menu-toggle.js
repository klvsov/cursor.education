window.onload = function(){
    let btn = document.querySelector('.menu');
    let menu = document.querySelector('header nav ul');
    btn.addEventListener('click', function(){
        if(menu.hasAttribute("style")){
            menu.removeAttribute("style")
        } else{
            menu.setAttribute("style", "display: block");
        }
        
    })
}