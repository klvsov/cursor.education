window.addEventListener('DOMContentLoaded', () => {
    const fn1 = document.querySelector('.fn-1');
    const startFn_1 = document.querySelector('.start-fn-1');
    const upSize = document.querySelector('.sizeUp');
    const downSize = document.querySelector('.sizeDown');
    const text = document.querySelector('.fn-2');

    function* createIdGenerator() {
        let i = 1;
        while(true) {
            yield i++;
        }
    }

    let up;
    let startFontSize = 14;

    function* newFontGenerator() {
        while(true) {
            up ? yield startFontSize += 2 : yield startFontSize -= 2;
        }
    }

    const idGenerator = createIdGenerator();

    const fontGenerator = newFontGenerator();

    startFn_1.addEventListener('click', () => {
        fn1.textContent = `New identifier - ${idGenerator.next().value}`;
        fn1.classList.remove('d-none')
    });

    upSize.addEventListener('click', () => {
        up = true;
        if(text.style.fontSize !== '50px') {
            text.style.fontSize = `${fontGenerator.next().value}px`;
        } else {
            alert('Stop!!!')
        }
    });

    downSize.addEventListener('click', () => {
        up = false;
        if(text.style.fontSize !== '4px') {
            text.style.fontSize = `${fontGenerator.next().value}px`;
        } else {
            alert('Stop!!!')
        }
    });
});