window.addEventListener('DOMContentLoaded', () => {
    const article1 = 15.678;
    const article2 = 123.965;
    const article3 = 90.2345;
    const allTd = document.querySelectorAll('table tbody td');
    const res = document.querySelector('.lead');
    const articleFirst = document.querySelector('.article-1');
    const articleSecond = document.querySelector('.article-2');
    const articleThird = document.querySelector('.article-3');

    const maxValue = Math.max(article1, article2, article3);
    const minValue = Math.min(article1, article2, article3);
    const sumArticles = article1 + article2 + article3;
    const sumArticlesRounded = Math.trunc(article1 + article2 + article3);
    const sumArticlesRounded100 = Math.round(sumArticles / 100) * 100;
    const sumIsEven = sumArticlesRounded % 2 === 0 ? 'Так' : 'Ні';
    const remainder = (500 - sumArticles).toFixed(2);
    const averageValue = (sumArticles / 3).toFixed(2);
    const randomDiscount = (Math.random() * 100).toFixed(0);
    const sumWithDiscount = (sumArticles - sumArticles * randomDiscount / 100).toFixed(2);
    const profit = Math.trunc((sumArticles / 2) - (sumArticles * randomDiscount / 100));
    const advanced = '';


    articleFirst.textContent = `Ціна першого товару - ${article1}`;
    articleSecond.textContent = `Ціна другого товару - ${article2}`;
    articleThird.textContent = `Ціна третього товару - ${article3}`;
    allTd[0].textContent = maxValue;
    allTd[1].textContent = minValue;
    allTd[2].textContent = sumArticles;
    allTd[3].textContent = sumArticlesRounded;
    allTd[4].textContent = sumArticlesRounded100;
    allTd[5].textContent = sumIsEven;
    allTd[6].textContent = remainder;
    allTd[7].textContent = averageValue;
    allTd[8].textContent = randomDiscount + '%';
    allTd[9].textContent = sumWithDiscount;
    allTd[10].textContent = profit;

    advanced = `<p>Максимальна ціна: ${maxValue}</p>
                      <p>Мінімальна ціна: ${minValue}</p>
                      <p>Вартість товарів: ${sumArticles}</p>
                      <p>Вартість товарів округлена: ${sumArticlesRounded}</p>
                      <p>Вартість, округлена до сотень: ${sumArticlesRounded100}</p>
                      <p>Округлена вартість парна?: ${sumIsEven}</p>
                      <p>Решта при оплаті 500 грн: ${remainder}</p>
                      <p>Середня вартість округлена: ${averageValue}</p>
                      <p>Випадкова знижка: ${randomDiscount}%</p>
                      <p>До сплати: ${sumWithDiscount}</p>
                      <p>Чистий прибуток: ${profit}</p>`;

    res.innerHTML = advanced;
});