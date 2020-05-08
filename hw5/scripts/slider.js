window.onload = function(){
    let images = document.querySelectorAll('.save_img img');
    let mainImg = document.querySelector('.save_img-3 img');
    let prevImg = document.querySelector('.save_img-1 img');
    let nextImg = document.querySelector('.save_img-2 img');

    prevImg.addEventListener('click', function(){
        let tempM = mainImg.src;
        let tempL = prevImg.src;
        let tempR = nextImg.src
        mainImg.src = tempR;
        prevImg.src = tempM;
        nextImg.src = tempL;
    })

    nextImg.addEventListener('click', function(){
        let tempM = mainImg.src;
        let tempL = prevImg.src;
        let tempR = nextImg.src
        mainImg.src = tempL;
        prevImg.src = tempR;
        nextImg.src = tempM;
    })
    
}
