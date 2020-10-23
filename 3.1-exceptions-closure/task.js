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
        try {
            if ((this.a + this.b < this.c) || (this.b + this.c < this.a) || (this.c + this.a < this.b)) {
            throw new Error('Треугольник с такими сторонами не существует');
            }
        } catch(e) {
            return e;
        }
    }
    getPerimeter() {
        const P = this.a + this.b + this.c;
        return P;
    }
    getArea() {
        const p = this.getPerimeter() / 2;
        const S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return parseFloat(S.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    const tri = new Triangle(a, b, c);
    try {
        return tri;
    } catch {
        tri = {
            getPerimeter: () => 'Ошибка! Треугольник не существует',
            getArea: () => 'Ошибка! Треугольник не существует'
        }
        return tri;
    }
}