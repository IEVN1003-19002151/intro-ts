interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    year: number;
}

const reproductor: Reproductor = {
    volumen: 50,
    segundo: 10,
    cancion: "UnderSide821",
    detalles: {
        autor: "La estrella",
        year: 2017
    }
};

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor, year } = detalles;

console.log(`El volumen Actual es: ${volumen}`);
console.log(`Los segundos son: ${segundo}`);
console.log(`La canción es: ${cancion}`);
console.log(`El cantante es: ${autor}`);
console.log(`El año es: ${year}`);

const dbz: string[] = ['Goku', 'Majin Buu', 'Babidi', 'Freezer'];
console.log(`personaje 0: ${dbz[0]}`);
console.log(`personaje 1: ${dbz[1]}`);
console.log(`personaje 2: ${dbz[2]}`);
console.log(`personaje 3: ${dbz[3]}`);

const [a, , b] = dbz;
console.log(`Personaje 1: ${a}`);
console.log(`Personaje 2: ${b}`);
