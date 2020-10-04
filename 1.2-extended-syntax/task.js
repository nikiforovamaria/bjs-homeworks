function getResult(a,b,c){
    "use strict";
    let D = b ** 2 - 4 * a * c;
    let x = [];

    if (D === 0) {
        x.push((-b) / 2 * a);
    } else if (D > 0) {
        x.push((-b + Math.sqrt(D)) / 2 * a, (-b - Math.sqrt(D)) / 2 * a);
    }

    return x;
}

function getAverageMark(marks){
    let averageMark = 0;

    if (marks.length === 0) {
        return averageMark;
    } else if (marks.length > 5) {
        marks = marks.slice(0, 5);
    } 
    
    for (let i = 0; i < marks.length; i++) {
        averageMark = averageMark + marks[i];
    }

    return averageMark / marks.length;
}

function askDrink(name,dateOfBirthday){
    let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
    if (age > 18) {
        return `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
}