//Задача 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        this.state = this.state * 1.5;
    }
    set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else {
            this._state = value;
        }
    }
    get state() {
        return this._state;
    }
}
const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

console.log(sherlock.releaseDate); 
console.log(sherlock.state); 
sherlock.fix();
console.log(sherlock.state);

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = 'detective';
    }
}

const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

console.log(picknick.author);
picknick.state = 10;
console.log(picknick.state);
picknick.fix();
console.log(picknick.state);

//Задача 2

class Library {
    constructor(name){
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        for (let key of this.books) {
            if (key[type] === value) {
                return key;
            }
        }
        return null;
    }
    giveBookByName(bookName) {
        const bookByName = this.findBookBy('name', bookName);
        if (bookByName !== null) {
            this.books.splice(this.books.indexOf(bookByName), 1);
            return bookByName;
        }
        return null;
    }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));
library.addBook(new NovelBook("Супер автор", "Супер книга", 1919, 500))

console.log(library.findBookBy("name", "Властелин колец"));
console.log(library.findBookBy("releaseDate", 1924).name);
console.log(library.findBookBy("releaseDate", 1919).name);

console.log("Количество книг до выдачи: " + library.books.length);
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length);

const superBook = library.giveBookByName("Супер книга");
superBook.state = 25;
library.addBook(superBook);
console.log("Количество книг до починки: " + library.books.length);
superBook.fix();
library.addBook(superBook);
console.log("Количество книг после починки: " + library.books.length);

//Задача 3

class StudentLog {
    constructor(name) {
        this.name = name;
        this.subjects = {};
    }
    getName() {
        return this.name;
    }
    addGrade(grade, subject) {
        if (grade > 0 && grade < 6) {
            if (this.subjects[subject]) {
                this.subjects[subject].push(grade);
            } else {
                this.subjects[subject] = [];
                this.subjects[subject].push(grade);
            }
            return this.subjects[subject].length; 
        } else {
            return `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5 \n ${this.subjects[subject] ? this.subjects[subject].length : 0}`;
        }
    }
    getAverageBySubject(subject) {
        let average = 0;
        if (this.subjects[subject]) {
            for (let i of this.subjects[subject]) {
                average += i;
            }
            return average / this.subjects[subject].length;
        } else {
            return average;
        }
    }
    getTotalAverage() {
        let totalAverage = 0;
        if (Object.keys(this.subjects).length === 0) {
            return totalAverage;
        }
        for (let subject in this.subjects) {
            totalAverage += this.getAverageBySubject(subject);
        }
        return totalAverage / Object.keys(this.subjects).length;
    }
}

const log = new StudentLog('Олег Никифоров');
console.log(log.getName())
console.log(log.addGrade(3, 'algebra'));
console.log(log.addGrade('отлично!', 'math'));
console.log(log.addGrade(4, 'algebra'));
console.log(log.addGrade(5, 'geometry'));
console.log(log.addGrade(25, 'geometry'));

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getAverageBySubject('geometry'));
console.log(log.getAverageBySubject('algebra'));
console.log(log.getAverageBySubject('math'));

console.log(log.getTotalAverage());