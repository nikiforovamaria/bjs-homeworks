//Задача 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        const state = this.state * 1.5;
    }
    set State(state) {
        if (state < 0) {
            this.state = 0;
        } else if (state > 100) {
            this.state = 100;
        } else this.state = state
    }
    get State() {
        return this.state;
    }
}
const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

console.log(sherlock.releaseDate); 
console.log(sherlock.state); 
sherlock.fix();
console.log(sherlock.state);

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state);
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
    constructor(name, books){
        this.name = name;
        this.books = books;
        books = [];
    }
    addBook(book) {
        if (state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        if (this.books.indexOf(type, value) = -1) {
            return null
        } else {
            return book;
        } 
    }
    giveBookByName(bookName) {
       if (this.books.indexOf(bookName) = -1) {
            return null
        } else {
            this.book.splice(indexOf(bookName), 1);
        } 
    }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец"));
console.log(library.findBookBy("releaseDate", 1924).name);

console.log("Количество книг до выдачи: " + library.books.length);
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length);

//Задача 3

class StudentLog {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    addGrade(grade, subject) {
        this.subject = subject;
        this.grade = grade;
        this.subject = [this.grade];
        if (this.grade > 0 && this.grade < 6) {
            this.subject.push(this.grade);
            return this.subject.length; 
        } else {
            return `Вы пытались поставить оценку "${this.grade}" по предмету "${this.subject}". Допускаются только числа от 1 до 5 \n ${this.subject.length}`;
        }
    }
    getAverageBySubject(subject) {
        this.subject = subject;
        let average = 0
        if (this.subject.length === 0) {
            return average;
        }
        for(let i = 0; i < this.subject.length; i++) {
            average += this.subject[i];
        }
        return average / this.subject.length;
    }
    getTotalAverage() {
        let totalAverage = 0;
        //for (let i = 0; i < )
    }
}