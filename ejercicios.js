const cadena=prompt('Intriduce la cadena de caracteres');



/*

const cadena=prompt('Introduce cadena de texto');
const largo=cadena.length;
let mayuscula=0;

for (i=0; i<cadena.length; i++){
    if (cadena.charAt(i)===cadena.charAt(i).toUpperCase()){
     mayuscula=mayuscula+1;  
    }
     document.write(cadena.charAt(i)); 
    
}
/*
if (mayuscula===0){
    document.write('El texto solo posee letras minúsculas');
} else if (mayuscula===cadena.length){
    document.write('El texto solo posee letras mayúsculas')
    } else{
        document.write('El texto posee letras mayusculas y letras minusculas');
    }




/* FACTORIAL DE UN NUMERO
const numero= Number(prompt('Introduzca numero de documento'));
let factorial_numero=1;
for (i=numero; i>1; i--){
factorial_numero=factorial_numero*(i-1)
}
const factorial=factorial_numero*numero;

document.write(factorial);

*/

/* NUMEROS PRIMOS

const number=Number(prompt('Intruduce el numero'));
let lista=[];
for (i=1 ; i<=number; i++){
    if (number%i===0){
     lista.push(i);   
    } 
}

if (lista[0]===1 && lista[1]===number && lista.length===2){
document.write(`El numero ${number} es primo`);
} else
document.write(`El numero ${number} no es primo`);
*/

/* COMPARAR DOS LISTAS Y ESCOGER ELEMENTOS IGUALES Y DIFERENTES

const number=Number(prompt('Introduce el primer numero'));
const number_2=Number(prompt('Introduce el segundo numero'));
let lista=[];
let lista_2=[];

for (i=1; i<=number; i++){
    if(number%i===0){
        lista.push(i);
    }
}

for (i=1; i<=number_2; i++){
    if (number_2%i===0){
        lista_2.push(i);
    }
}

let lista_iguales= lista.filter(x=>lista_2.includes(x));
document.write(` Los elementos primos comunes son ${lista_iguales}`);

let lista_diferentes=lista.filter(x=>!lista_2.includes(x));
document.write(`Los numeros que no son comunes son ${lista_diferentes}`);

*/

/*Indica cuales vocales aparecen en una frase

const frase=prompt('Indique la frase');
const merca=frase.match(/[aeiou]/g);
document.write(merca);*/

 /*Cuenta las veces que aparece un caracter (a) en una frase.

const frase=prompt('Indique la frase');
document.write((frase.match(/a/g)).length);*/

/* Indica si un numero es divisible por 2

const valor=Number(prompt('Indique el numero'));
const number=valor%2;
if (number===0){
    document.write(`El numero ${valor} es divisible entre 2`);
} else{
    document.write(`El numero ${valor} no es divisible entre 2`);
}


/*Pide 3 numeros e indica el mayor de ellos

const valor=Number(prompt('Indique primer numero'));
const valor2=Number(prompt('Indique segundo numero'));
const valor3=Number(prompt('Indique el tercer numero'));
let lista=[valor, valor2, valor3];
document.write(Math.max(valor, valor2, valor3));*/

/*Pide un caracter e indica si es un numero o no

function pruebas(){
    const valor=prompt('Introduce valor');
    return document.write(!isNaN(valor));
}

pruebas();*/

/*Pide numeros y los suma hasta que el usuario no quiera seguir mas

let resultado=0;
do {
    let valor=prompt('Indique valor');
    if (!isNaN(valor)){
        resultado=resultado+Number(valor);
    } else {
        alert('Por favor introduce un numero');
    }
} while (confirm('Seguir?'));

alert(resultado); */



