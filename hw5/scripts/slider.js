window.onload = function(){
    let images = document.querySelectorAll('.save_img img');
    let mainImg = document.querySelector('.save_img-3 img');
    let nextImg = document.querySelector('.save_img-1 img');
    let prevImg = document.querySelector('.save_img-2 img');

   

    nextImg.addEventListener('click', function(){
        let temp = mainImg.src;
        mainImg.src = this.src;
        this.src = temp;
    })

    prevImg.addEventListener('click', function(){
        let temp = mainImg.src;
        mainImg.src = this.src;
        this.src = temp;
    })
    
}
