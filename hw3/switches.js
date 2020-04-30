window.onload = function(){
    let mainBox = document.querySelector('#box-Name');
    let boxes = document.querySelectorAll('.box-file');
    


    mainBox.addEventListener('click', function(){
        this.classList.toggle('box__active');
        if(!this.classList.contains('box__active')){
            for(let i = 0; i < boxes.length; i++){
                boxes[i].classList.remove('box__active');
            }
        }
        if(this.classList.contains('box__active')){
            for(let i = 0; i < boxes.length; i++){
                boxes[i].classList.add('box__active');
            }
        }
        
    })

    function classOfCurrentElement(el){
        return !el.classList.contains('box__active')
    }


    for(let i = 0; i < boxes.length; i++){
        boxes[i].addEventListener('click', function(){
            this.classList.toggle('box__active');
            if(boxes[i].classList.contains('box__active')){
                mainBox.classList.add('box__active');
            }

            boxesItems = Array.from(boxes)
            if(boxesItems.every(classOfCurrentElement)){
                mainBox.classList.remove('box__active');
            }
        })
    }
}