window.onload = function(){
    let mainBox = document.querySelector('#box-Name');
    let boxes = document.querySelectorAll('.box-file');
    let name = document.querySelector('.name');
    let fileName = document.querySelectorAll('.file-name');

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

    name.addEventListener('click', function(){
        mainBox.classList.toggle('box__active');
        if(!mainBox.classList.contains('box__active')){
            for(let i = 0; i < boxes.length; i++){
                boxes[i].classList.remove('box__active');
            }
        }
        if(mainBox.classList.contains('box__active')){
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


    for(let i = 0; i < fileName.length; i++){
        fileName[i].addEventListener('click', function(){
            boxes[i].classList.toggle('box__active');
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