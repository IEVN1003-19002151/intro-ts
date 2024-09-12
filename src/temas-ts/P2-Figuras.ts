
class Figura {
}

class PrismaRectangular extends Figura {
    private largo: number;
    private ancho: number;
    private altura: number;

    constructor(largo: number, ancho: number, altura: number) {
        super();
        this.largo = largo;
        this.ancho = ancho;
        this.altura = altura;
    }

    calcularArea(): number {
        return 2 * (this.largo * this.ancho + this.largo * this.altura + this.ancho * this.altura);
    }

    calcularVolumen(): number {
        return this.largo * this.ancho * this.altura;
    }
}

class Pentagono extends Figura {
    private lado: number;
    private apotema: number;
    private altura: number;

    constructor(lado: number, apotema: number, altura: number) {
        super();
        this.lado = lado;
        this.apotema = apotema;
        this.altura = altura;
    }

    calcularArea(): number {
        const perimetro = this.lado * 5;
        return (perimetro * this.apotema) / 2;
    }

    calcularVolumen(): number {
        return this.calcularArea() * this.altura;
    }
}

class Circulo extends Figura {
    private radio: number;
    private altura: number;

    constructor(radio: number, altura: number) {
        super();
        this.radio = radio;
        this.altura = altura;
    }

    calcularArea(): number {
        return Math.PI * this.radio ** 2;
    }

    calcularVolumen(): number {
        return this.calcularArea() * this.altura;
    }
}


const prisma = new PrismaRectangular(5, 6, 7);
console.log(`Área del prisma rectangular: ${prisma.calcularArea()}`);
console.log(`Volumen del prisma rectangular: ${prisma.calcularVolumen()}`);

const pentagono = new Pentagono(3, 4, 5);
console.log(`Área del pentágono: ${pentagono.calcularArea()}`);
console.log(`Volumen del pentágono: ${pentagono.calcularVolumen()}`);

const circulo = new Circulo(5, 9);
console.log(`Área del círculo: ${circulo.calcularArea()}`);
console.log(`Volumen del círculo: ${circulo.calcularVolumen()}`);