export const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const getRandNumber = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
export const getMySalary = function(country) {
    const salary = getRandNumber(1500, 2000);
    const taxes = country.tax * salary;
    const profit = salary - taxes;
    return `salary: ${salary}, taxes: ${taxes.toFixed(2)}, profit: ${profit.toFixed(2)}`;
};