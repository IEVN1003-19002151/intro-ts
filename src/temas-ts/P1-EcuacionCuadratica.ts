class EcuacionCuadratica {
    private a: number;
    private b: number;
    private c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    private calcular(): number {
        return (this.b ** 2) - (4 * this.a * this.c);
    }

    public imprimir(): void {
        const valor = this.calcular();
        if (valor > 0) {
            const x1 = (-this.b + Math.sqrt(valor)) / (2 * this.a);
            const x2 = (-this.b - Math.sqrt(valor)) / (2 * this.a);
            console.log(`Las soluciones son x1 = ${x1} y x2 = ${x2}`);
        } else if (valor === 0) {
            const x = -this.b / (2 * this.a);
            console.log(`La solución única es x = ${x}`);
        } else {
            console.log(`La ecuación no tiene soluciones reales.`);
        }
    }
}

const ecuacion = new EcuacionCuadratica(1, -3, 2);
ecuacion.imprimir();



