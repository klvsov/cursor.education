window.addEventListener('load', function(){
    let search = document.querySelector('.nav-search');
    search.classList.remove('bgNone');
    search.addEventListener('change', function(){
        if(search.value !== ''){
            search.classList.add('bgNone');
        }
        if(search.value == ''){
            search.classList.remove('bgNone');
        }
    })  
})
