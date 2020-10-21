function parseCount(value) {
    let count = Number.parseInt(value);
    if (Number.isNaN(count)) {
        throw new Error('Невалидное значение'); 
    }
    return count;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (e) {
        return e;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    checkTriangle() {
        if ((this.a + this.b < this.c) || (this.b + this.c < this.a) || (this.c + this.a < this.b)) {
            throw new Error('Треугольник с такими сторонами не существует');
        } else {
            return new Triangle(this.a, this.b, this.c);
        }
    }
    getPerimeter() {
        if (this.checkTriangle() == new Error) {
            throw new Error('Ошибка! Треугольник не существует');
        } else {
        const P = this.a + this.b + this.c;
        return P;
        }
    }
    getArea() {
        const p = this.getPerimeter() / 2;
        const S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return S.toFixed(3);
    }
}

function getTriangle(a, b, c) {
    const tri = new Triangle(a, b, c);
    try {
        tri.checkTriangle();
    } catch(e) {
        return e;
    } finally {
        tri.getArea();
        tri.getPerimeter();
    }
}