function getSolutions(a,b,c) {
    let D = b ** 2 - 4 * a * c;
    let solution = {
        D,
        roots: []
    };
    let x1;
    let x2;
    if (D === 0) {
        x1 = (-b) / 2 * a;
        solution.roots.push(x1);
    } else if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / 2 * a;
        x2 = (-b - Math.sqrt(D)) / 2 * a;
        solution.roots.push(x1, x2);
    }

    return solution;
}

function showSolutionsMessage(a,b,c) {
    let result = getSolutions(a,b,c);
    let message = `Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}\nЗначение дискриминанта: ${result.D}\n`;
    if (result.roots.length === 1) {
        message += `Уравнение имеет один корень X₁ = ${result.roots[0]}`;
    } else if (result.roots.length === 2) {
        message += `Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`;
    } else {
        message += `Уравнение не имеет вещественных корней`;
    }
    return message;
}

function getAverageScore(data) {
    let averageScore = {};
    averageScore.average = [];
    if (data === 0) {
        averageScore.average.push(0);
        return averageScore;
    }
    averageScore.algebra = getAverageMark(data.algebra);
    averageScore.average.push(getAverageMark(data.algebra));
    averageScore.geometry = getAverageMark(data.geometry);
    averageScore.average.push(getAverageMark(data.geometry));
    averageScore.russian = getAverageMark(data.russian);
    averageScore.average.push(getAverageMark(data.russian));
    averageScore.physics = getAverageMark(data.physics);
    averageScore.average.push(getAverageMark(data.physics));
    averageScore.music = getAverageMark(data.music);
    averageScore.average.push(getAverageMark(data.music));
    averageScore.english = getAverageMark(data.english);
    averageScore.average.push(getAverageMark(data.english));
    averageScore.poetry = getAverageMark(data.poetry);
    averageScore.average.push(getAverageMark(data.poetry));
    averageScore.chemistry = getAverageMark(data.chemistry);
    averageScore.average.push(getAverageMark(data.chemistry));
    averageScore.french = getAverageMark(data.french);
    averageScore.average.push(getAverageMark(data.french));
    averageScore.average = getAverageMark(averageScore.average);

    return averageScore;
}

function getAverageMark(marks) {
    let averageMark = 0;
    if (marks.length === 0) {
        return averageMark;
    }
    for (let i = 0; i < marks.length; i++) {
        averageMark += marks[i];
    }
    if (averageMark === 0) {
        return averageMark;
    }

    averageMark = averageMark / marks.length;

    return averageMark;
}

console.log(getAverageScore({
    algebra: [2,4,5,2,3,4],
    geometry: [2,4,5],
    russian: [3,3,4,5],
    physics: [5,5],
    music: [2,2,6],
    english: [4,4,3],
    poetry: [5,3,4],
    chemistry: [2],
    french: [4,4]
    /*algebra: [],
    geometry: [],
    russian: [],
    physics: [],
    music: [],
    english: [],
    poetry: [],
    chemistry: [],
    french: []*/
}));

function getPersonData(secretData) {
    let personData = {};
    personData.firstName = getDecodedValue(secretData.aaa);
    personData.lastName = getDecodedValue(secretData.bbb);
    
    return personData;
}

function getDecodedValue(secret) {
    let value = secret ? 'Эмильо' : 'Родриго';

    return value;
}

console.log(getPersonData({
    aaa: 0,
    bbb: 1
}));