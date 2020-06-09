let img = document.querySelector('#video img.alt_bg');
let videoYt = document.querySelector('#video iframe');

if(window.innerWidth <= 768){
    img.classList.add('dBlock')
    videoYt.remove();
}