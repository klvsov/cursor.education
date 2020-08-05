window.addEventListener('DOMContentLoaded', () => {

    const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
    const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
    const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

    const getRandNumber = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

    const res1 = document.querySelector('.res-1');
    const value_1 = document.querySelector('.fn-1');
    const start_1_ukr = document.querySelector('.ukr-1');
    const start_1_lat = document.querySelector('.lat-1');
    const start_1_lit = document.querySelector('.lit-1');
    const res2 = document.querySelector('.res-2');
    const start_2_ukr = document.querySelector('.ukr-2');
    const start_2_lat = document.querySelector('.lat-2');
    const start_2_lit = document.querySelector('.lit-2');
    const res3 = document.querySelector('.res-3');
    const start_3_ukr = document.querySelector('.ukr-3');
    const start_3_lat = document.querySelector('.lat-3');
    const start_3_lit = document.querySelector('.lit-3');
    const start_4_ukr = document.querySelector('.ukr-4');
    const start_4_lat = document.querySelector('.lat-4');
    const start_4_lit = document.querySelector('.lit-4');
    const stopInterval = document.querySelector('.stop');

    const getMyTaxes = function(salary) {
        return salary * this.tax;
    }

    const getMiddleTaxes = function() {
        return this.middleSalary * this.tax;
    }

    const getTotalTaxes = function() {
        return this.tax * this.middleSalary * this.vacancies;
    };

    const getMySalary = function(country) {
        const salary = getRandNumber(1500, 2000);
        const taxes = country.tax * salary;
        const profit = salary - taxes;
        return `salary: ${salary}, taxes: ${taxes.toFixed(2)}, profit: ${profit.toFixed(2)}`;
    };

    // const timerIdUkr = setInterval(() => console.log(getMySalary(ukraine)), 10000);

    start_1_ukr.addEventListener('click', () => {
        if(value_1.value !== ''){
            res1.textContent = `${getMyTaxes.call(ukraine, parseFloat(value_1.value))} USD`;
            res1.classList.remove('d-none');
        }
    });

    start_1_lat.addEventListener('click', () => {
        if(value_1.value !== ''){
            res1.textContent = `${getMyTaxes.call(latvia, parseFloat(value_1.value))} USD`;
            res1.classList.remove('d-none');
        }
    });

    start_1_lit.addEventListener('click', () => {
        if(value_1.value !== ''){
            res1.textContent = `${getMyTaxes.call(litva, parseFloat(value_1.value))} USD`;
            res1.classList.remove('d-none');
        }
    });

    start_2_ukr.addEventListener('click', () => {
        res2.textContent = `${getMiddleTaxes.call(ukraine).toFixed(2)} USD`;
        res2.classList.remove('d-none');
    });

    start_2_lat.addEventListener('click', () => {
        res2.textContent = `${getMiddleTaxes.call(latvia).toFixed(2)} USD`;
        res2.classList.remove('d-none');
    });

    start_2_lit.addEventListener('click', () => {
        res2.textContent = `${getMiddleTaxes.call(litva).toFixed(2)} USD`;
        res2.classList.remove('d-none');
    });

    start_3_ukr.addEventListener('click', () => {
        res3.textContent = `${getTotalTaxes.call(ukraine).toFixed(2)} USD`;
        res3.classList.remove('d-none');
    });

    start_3_lat.addEventListener('click', () => {
        res3.textContent = `${getTotalTaxes.call(latvia).toFixed(2)} USD`;
        res3.classList.remove('d-none');
    });

    start_3_lit.addEventListener('click', () => {
        res3.textContent = `${getTotalTaxes.call(litva).toFixed(2)} USD`;
        res3.classList.remove('d-none');
    });

    start_4_ukr.addEventListener('click', () => {
        console.log(getMySalary(ukraine));
        const timerIdUkr = setInterval(() => console.log(getMySalary(ukraine)), 10000);
    });

    start_4_lat.addEventListener('click', () => {
        console.log(getMySalary(latvia));
        const timerIdLat = setInterval(() => console.log(getMySalary(latvia)), 10000);
    });

    start_4_lit.addEventListener('click', () => {
        console.log(getMySalary(litva));
        const timerIdLit = setInterval(() => console.log(getMySalary(litva)), 10000);
    });
});