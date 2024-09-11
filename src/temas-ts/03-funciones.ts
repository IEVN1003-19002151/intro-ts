function sumar(){
    let suma = 0; 

    for (let i = 0; 1< 10; i++){
        suma +=i;
    }
    console.log(suma)
}
sumar(); 

function resta(a:number, b:number): number{
    return a -b; 
}

console.log(resta(10,5))

interface Mascotas{
    nombre: String, 
    edad: number, 
    raza: string
    mostrarEdad:()=>void; 
}

let perro: Mascotas ={
    nombre: 'Fido', 
    edad: 3, 
    raza: 'Pator Aleman', 
    mostrarEdad(){
        console.log('la edad es ${this.edad}')
        console.log(perro.edad); 
    }
}



function calcular(mascota: Mascotas, x: number): void{
    mascota.edad+=x; 
    console.log(mascota); 
}

calcular(perro,4);