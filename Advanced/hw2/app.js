window.addEventListener('DOMContentLoaded', () => {
    const form = document.forms[0];
    const firstNumber = form.elements.first;
    const lastNumber = form.elements.last;
    const skip = form.elements.isSkip;
    const answer = document.querySelector('.answer');
    const error = document.querySelector('.error');
    const startCalc = document.getElementById('startCalc');

    
    startCalc.addEventListener('click', () => {
        const start = parseInt(firstNumber.value);
        const end = parseInt(lastNumber.value);
        isSkipEven = skip.checked;
        let sum = 0;

        answer.classList.add('d-none');
        error.classList.add('d-none');

        if(start >= end) {
            error.classList.remove('d-none');
            error.textContent = ('Second number must be greater!');
        }
        
        if(!isNaN(start) && !isNaN(end) && start < end) {
            for(let i = start; i <= end; i++) {
                if(isSkipEven && i % 2 === 0) {
                    continue;
                }
                sum += i;
            }
            answer.textContent = `Answer: ${sum}`;
            answer.classList.remove('d-none');
            firstNumber.value = 0;
            lastNumber.value = 0;
            
        }
    })
    
})