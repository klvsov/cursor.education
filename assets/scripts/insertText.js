let countWorks = document.querySelectorAll(".works-item");
let textInChart = document.querySelector(".donut");

textInChart.textContent = countWorks.length+"/22 ("+Math.round((countWorks.length / 22) * 100)+'%)';