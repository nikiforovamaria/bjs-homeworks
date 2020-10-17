String.prototype.isPalindrome = function() {
    let str = this.toLowerCase();
    str = str.split(' ').join('');
    return str === str.split("").reverse().join("");
}

function getAverageMark(marks) {
    let average = 0;
    if (marks.length === 0) {
        return average;
    }
    for (let i = 0; i < marks.length; i++) {
        average += marks[i]; 
    }
    const roundedAverage = Math.round(average / marks.length);

    return roundedAverage;
}

function checkBirthday(birthday) {
    const now = +Date.now();
    let bDay = +new Date(birthday);
    let diff = now - bDay;
    let age = Math.floor(diff / 1000 / 60 / 60 / 24 / 365.25);

    return age;
}