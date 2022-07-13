let axie= "Origin";
const obj={a:3};

const colors=require("colors");

const estudio={};


function ejemploGit(){
    console.log(`${axie} es el mejor`.red)
}

ejemploGit();
ejemploGit()
let x= "mama";
function padreFavorito(){
    console.log(`${x} es el padre favorito de hijo`.blue)
}

padreFavorito()

let nuevo = a => a+10;


function cuadrado(x){
return x *x
}

console.log (cuadrado(nuevo(2)));
let firstnumber=100;
let secondnumber=80;
let biggestnumber=firstnumber>secondnumber? firstnumber : secondnumber;

console.log(biggestnumber);

let materias=["Matematica", "literatura", "Castellano", "I", "Biologia"];

for (let i=0; i<materias.length; i++){
    
    console.log(materias[i]);
}

let i=0;
while (i<4){
    console.log(materias[i]);
    i++;
}

console.log(materias[2]);

console.log(materias[1]);

for (let i=10; i>0; i--){
    console.log(i);
    
}

materias.forEach(element => console.log(element));
let numbers=[2, 4, 6, 8];
let nwp = numbers.map( x=>x*2);
console.log(nwp);

// Exports Functions

estudio.cuadrado= cuadrado;

module.exports= estudio;












 



