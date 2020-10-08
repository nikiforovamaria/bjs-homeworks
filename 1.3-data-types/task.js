function calculateTotalMortgage(percent, contribution, amount, date) {
    "use strict";
    let parsedPercent = parseInt(percent); 
    let parsedContribution = parseInt(contribution);
    let parsedAmount = parseInt(amount);
    if (isNaN(parsedPercent)) {
        console.log(percent);
        return `Параметр процентная ставка содержит неправильное значение ${percent}`;
    } else if (isNaN(parsedContribution)) {
        return `Параметр сумма первоначального взноса содержит неправильное значение ${contribution}`;
    } else if (isNaN(parsedAmount)) {
        return `Параметр сумма кредита содержит неправильное значение ${amount}`;
    }
    let remainingAmount = parsedAmount - parsedContribution
    let months = date.getMonth() - new Date().getMonth() + (12 * (date.getFullYear() - new Date().getFullYear()));
    let finalPercent = (parsedPercent / 100) / 12;
    let monthlyPayment = remainingAmount * (finalPercent + finalPercent / (((1 + finalPercent)**months) - 1));
    let totalAmount = monthlyPayment * months;

    console.log(totalAmount.toFixed(2));
    return totalAmount.toFixed(2);
}

function getGreeting(name) {
    if (!name) {
        return 'Привет, мир! Меня зовут Аноним.';
    } else {
        return `Привет, мир! Меня зовут ${name}`;
    }
}