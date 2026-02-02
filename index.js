
//EJERCICIOS VARIABLES
//1.Crear variable tipo let de nombre variableSinValor declarada sin valor
let variableSinValor;

//2.Crear 2 variables tipo let de nombres booleano1 y booleano2 con valores booleanos
let booleano1 = true;
let booleano2 = false;

//3.Crear variable tipo const de nombre PI declarada con valor 3.14
const PI = 3.14;

//4.Crear variable tipo const de nombre TAU declarada con valor 2 veces PI
const TAU = 2 * PI;

//EJERCICIOS BOOLEANOS
//5.Crear variable booleanoAnd cuyo valor sea la comparación booleana booleano1 and booleano2
let booleanoAnd = booleano1 && booleano2;

//6.Crear variable booleanoNot cuyo valor sea la compracación booleana no booleano1
let booleanoNot = !booleano1;

//7.Crear variable booleanoMix0 cuyo valor sea la compración booleana (booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2)
let booleanoMix0 = (booleano1 ||booleano2) && (booleano1 || (!booleano1 && !booleano2));

//EJERCICIOS OPERADORES
// POST incremento aumenta en 1 con ++ despues de la variable
//8.Crear variable incrementarDesp con valor 2 y asigna su valor con postincremento a resultadoDesp
let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++; 

//9.Crear variable incrementarAntes con valor 2 y asigna su valor con preincremento a resultadoAntes
let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;

//EJERCICIOS BUCLES
/*10.Crear variable contarHasta10_2 con valor 0 
e incrementar su valor con un bucle for hasta que se verifique que contarHasta10_2 === 10*/
let contarHasta10_2 = 0;
for(let i=0; i<10; i++){
    contarHasta10_2++;
    console.log(contarHasta10_2);
}
/*11.Crear las variables postI y postJ con valor 0 a continuación 
cree un bucle que itere 11 veces. En cada iteración se deberá sumar al valor de postI 
el valor de postJ++*/
let postI =0;
let postJ = 0;

for(let i=0; i<11; i++){
    postI += postJ;
    postJ++;
    console.log(postI);
}


/*12.Crear la variable sumaPares con valor 0 a continuación crea un bucle que itere 10 veces 
(i < 10) si la iteración es par se deberá sumar a sumaPares el número de la iteración actual */

let sumaPares = 0;
for(let i=0; i<10; i++){
    if(i %2==0){
        sumaPares +=i;
    }
}
console.log("La suma de los pares es: "+sumaPares);

//INTERECIONES 
//VARIABLES

//13.- Crear variable tipo let de nombre variableValorNumerico declarada 
// con un valor numérico cualquiera
let variableValorNumerico = 100;

//14.- Crear variable tipo const de nombre MiNombre declarada con valor tu nombre
const MiNombre = "Karina";

//15.- Crear variable tipo const de nombre MiNumeroFav declarada con valor numérico
const MiNumeroFav = 2;

//BOOLEANOS
//16.Crear variable booleanoOr cuyo valor sea la comparación booleana booleano1 or booleano2
let booleanoOr = booleano1 || booleano2;

//17.Crear variable booleanoMix1 cuyo valor sea la comparación booleana 
// (booleano1 and (TAU/2 sea igual a PI)) or (variableValorNumerico mayor o igual que MiNumeroFav)
let booleanoMix1 = (booleano1 && (TAU/2 === PI)) || variableValorNumerico >= MiNumeroFav;

//18.Crear variable seisNoEsNueve cuyo valor sea la comparación booleana 
// 6 no es estrictamente igual que 9
let seisNoEsNueve = 6 != 9;

//19.Crear variable booleanoMix2 cuyo valor sea la comparación booleana 
// variableValorNumerico positivo (0 no incluido) o menor que -(MiNumeroFav * TAU)
let booleanoMix2 = variableValorNumerico > 0 || variableValorNumerico < -(MiNumeroFav* TAU);

//OPERADORES
//20.Crear variable valorSuma cuyo valor sea la suma de MiNumeroFav y variableValorNumerico
let valorSuma = MiNumeroFav + variableValorNumerico;

//21.Crear variable valorResta cuyo valor sea la resta de MiNumeroFav y variableValorNumerico
let valorResta = MiNumeroFav - variableValorNumerico;

/*22.Crear variable valorMultiplicación cuyo valor sea la multiplicación de 
MiNumeroFav por variableValorNumerico*/
let valorMultiplicacion = MiNumeroFav * variableValorNumerico;

//23.Crear variable valorDivisión cuyo valor sea la división de MiNumeroFav entre 3
let valorDivision = MiNumeroFav / 3;

//BUCLES
/*24.Crear variable contarHasta10 con valor 0 e incrementar su valor 
con un bucle while hasta que se verifique que contarHasta10 === 10 */
let contarHasta10 = 0;
//BUCLE FOR
console.log("Resultado bucle for");
for(let i=1; i<=10; i++){
    console.log(i);
}
//BUCLE WHILE
console.log("Resultado bucle while");
while(contarHasta10 <10){
    contarHasta10++;
    console.log(contarHasta10);
}
/*25.Crear las variables preI y preJ con valor 0 a continuación cree un bucle 
que itere 11 veces. En cada iteración se deberá sumar al valor de preI el valor de ++preJ */
let preI = 0, preJ = 0;
let cont = 0;

//BUCLE WHILE
while(cont < 11){
    preI += ++preJ;
    cont++;
    console.log("Bucle while: "+preI);
}

//BUCLE FOR
let preIF = 0, preJF = 0;
for(let i=1; i<=11; i++){
    preIF += ++preJF;
    console.log("Bucle for: "+preIF);
}
/*26.Crear la variable sumaImpares con valor 0 a continuación crea 
un bucle que itere 10 veces (i < 10) si la iteración es impar se deberá 
sumar a sumaImpares el número de la iteración actual (i) */
let sumaImpares = 0;

//BUCLE FOR
console.log("Bucle for");
for(let i = 1; i<=10; i++){
    if(i %2!=0){
        sumaImpares +=i;
        console.log(sumaImpares);
    }
}

//BUCLE WHILE
console.log("Bucle while");
let sumaImparesW = 0;
let contW = 0;
while(contW < 10){
    if(contW %2!=0){
        sumaImparesW += contW;
        console.log(sumaImparesW);
    }
    contW++;
}