function getResult(a,b,c){
    "use strict";
    let D = b ** 2 - 4 * a * c;
    let x = [];

    if (D < 0) {
        x = [];
    } else if (D === 0) {
        x.push((-b) / 2 * a);
    } else {
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
    averageMark = averageMark / marks.length;

    return averageMark;
}

function askDrink(name,dateOfBirthday){
    let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
    let result;
    if (age > 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
    return result;
}