// function addNumbers(a,b){
// return a+b;
// } // FUNCION
var addNumbers = function (a,b){
  return a+b;
} //EXPRESION DE FUNCION

var result = addNumbers (2, 8);

console.log ( result );

//
// function nacimiento(){
//     edad = Number (prompt ('Cual es tu edad?', '31'));
//     anio = 2020 - edad;
//     return anio;
// }
//
//     console.log(nacimiento());
//     document.write (' Por si no sabias, naciste el año ' + anio);

function numeroMayor (valor1, valor2){
    if (valor1>>valor2){
    return valor1;
    if (valor1=valor2)
    return 'X';
    else
    return valor2;
    }
}


valor1 = prompt ('ingresa un valor', "0");
valor2 = prompt ('ingresa otro valor', "0");

document.write(" Tu numero chido es el " + numeroMayor(valor1, valor2));
console.log(" Tu numero chido es el " + numeroMayor(valor1, valor2));
