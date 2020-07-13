window.addEventListener('DOMContentLoaded', () => {
    const article1 = 15.678,
          article2 = 123.965,
          article3 = 90.2345,
          allTd = document.querySelectorAll('table tbody td'),
          res = document.querySelector('.lead'),
          maxValue = Math.max(article1, article2, article3),
          minValue = Math.min(article1, article2, article3)
          sumArticles = article1 + article2 + article3,
          sumArticlesRounded = Math.trunc(article1) + Math.trunc(article2) + Math.trunc(article3),
          sumArticlesRounded100 = Math.round(sumArticles / 100) * 100,
          sumIsEven = sumArticlesRounded % 2 === 0 ? 'Так' : 'Ні';
          remainder = (500 - sumArticles).toFixed(2),
          averageValue = (sumArticles / 3).toFixed(2),
          randomDiscount = (Math.random() * 100).toFixed(0),
          sumWithDiscount = (sumArticles - sumArticles * randomDiscount / 100).toFixed(2),
          profit = Math.trunc((sumArticles / 2) - (sumArticles * randomDiscount / 100));


    document.querySelector('.article-1').textContent = `Ціна першого товару - ${article1}`;
    document.querySelector('.article-2').textContent = `Ціна другого товару - ${article2}`;
    document.querySelector('.article-3').textContent = `Ціна третього товару - ${article3}`;
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

    const advanced = `<p>Максимальна ціна: ${maxValue}</p>
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