function calculateTotalMortgage(percent, contribution, amount, date) {
    "use strict";
    let parsedPercent = parseInt(percent); 
    let parsedContribution = parseInt(contribution);
    let parsedAmount = parseInt(amount);
    if (isNaN(parsedPercent)) {
        return `Параметр процентная ставка содержит неправильное значение ${percent}`;
    } else if (isNaN(parsedContribution)) {
        return `Параметр сумма первоначального взноса содержит неправильное значение ${contribution}`;
    } else if (isNaN(parsedAmount)) {
        return `Параметр сумма кредита содержит неправильное значение ${amount}`;
    }
    let remainingAmount = parsedAmount - parsedContribution;
    const currentDate = new Date();
    let months = date.getMonth() - currentDate.getMonth() + (12 * (date.getFullYear() - currentDate.getFullYear()));
    let finalPercent = (parsedPercent / 100) / 12;
    let monthlyPayment = remainingAmount * (finalPercent + finalPercent / (((1 + finalPercent)**months) - 1));
    let totalAmount = monthlyPayment * months;
    totalAmount = new Number(totalAmount.toFixed(2));

    console.log(totalAmount);
    return totalAmount;
}

function getGreeting(name) {
    let greeting = `Привет, мир! Меня зовут ${!name || name === 'null' || name === '' || name === 'undefined' ? 'Аноним' : name}`;
    
    return greeting;
}