window.addEventListener('load', function() {
    let sword1 = document.querySelector('.sword-1');   
    let sword2 = document.querySelector('.sword-2');   
    let sword3 = document.querySelector('.sword-3');
    
    function start_animation(){
        if(sword1.hasAttribute('id')){
            sword1.removeAttribute('id')
        } else{
            sword1.setAttribute('id', 'sword-1_animate');
        }

        if(sword2.hasAttribute('id')){
            sword2.removeAttribute('id')
        } else{
            sword2.setAttribute('id', 'sword-2_animate');
        }

        if(sword3.hasAttribute('id')){
            sword3.removeAttribute('id')
        } else{
            sword3.setAttribute('id', 'sword-3_animate');
        }
    }

    sword1.addEventListener('click', start_animation);
    sword2.addEventListener('click', start_animation);
    sword3.addEventListener('click', start_animation);

    sword3.addEventListener('mouseover', function(){
        sword2.classList.add('box2')
    })

    sword3.addEventListener('mouseout', function(){
        sword2.classList.remove('box2')
    })
})