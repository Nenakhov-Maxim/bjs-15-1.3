"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    let totalAmount = null;
    let percentInt = parseFloat(percent);
    let contributionInt = parseFloat(contribution);
    let amountInt = parseFloat(amount);
    let dateMonth = new Date(date).getMonth();
    let dateYears = new Date(date).getFullYear();
    let dateMonthNow = new Date().getMonth();
    let dateYearsNow = new Date().getFullYear();
    let monthAmount = (12-(dateMonthNow+1)) + ((dateYears - (dateYearsNow+1)) * 12) + (dateMonth + 1);   
    console.log(percentInt);
    if (isNaN(percentInt)) {
        alert(`Параметр "Процентная ставка" содержит неправильное значение: ${percent}`);
    } else if (isNaN(contributionInt)) {
        alert(`Параметр "Первоначальный взнос" содержит неправильное значение: ${contribution}`);
    } else if (isNaN(amountInt)) {
        alert(`Параметр "Сумма кредита" содержит неправильное значение: ${amount}`);
    } else if (monthAmount < 0) {
        alert("Срок кредита должен быть больше 1 месяца");
    } else {
        let loadBody = amountInt - contributionInt;
        let p = percentInt/100 * (1/12);
        let pay = loadBody * (p + p / (((1 + p)**monthAmount) - 1));
        let amountSumm =  pay * monthAmount;
        console.log(amountSumm.toFixed(2)); 
        totalAmount = amountSumm.toFixed(2); 
    } 
    
     return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
}