/*tipos de datos */
/*
string = letras, texto 
number = numeros
booleanos = true, false
*/


/* variables */
let nombre = "Carlos";
nombre = "albert";
nombre = "janet";

const apellido = "celis";

//console.log(apellido)


/*---------funciones tradicionales---------- */

function nombreFuncion(parametros){
    return "la acción que quieres realizar"
}
//console.log(nombreFuncion(argumentos))


/*suma de dos números */
function suma(x, y){
    return x + y;
}
//console.log(suma(5, 6))

/*------------ejercicio 01----------- */

function suma(x, y){
    return x + y;
}
//console.log(suma(5, 6))

/*------------ejercicio 02----------- */

function promedio(ex1, ex2, ex3, ex4){
    return (ex1 + ex2 + ex3 + ex4)/4
}

//console.log(promedio(16, 18, 13, 19))

/*------------ejercicio 03----------- */

function arearectangulo(b, a){
    return b * a
}

//console.log(arearectangulo(20, 10))

/*------------ejercicio 04----------- */
function areatriangulo(b, h){
    return b * h /2
}

//console.log(areatriangulo(15, 10))

/*------------ejercicio 05----------- */

function areacirculo(r){
    return ( r * Math.PI) * r
    
}
//console.log(areacirculo(6, 3.14))

/*------------ejercicio 06----------- */
function sueldosemanal(horast, pagoh){
    return horast * pagoh * 7
       
}
//console.log(sueldosemanal(43, 100))

/*------------ejercicio 07----------- */

function numeroPulgadas(numeroMetros){
    return numeroMetros / 0.0254
}

//console.log(numeroPulgadas(200))

// 13a alumnos
/*------------ejercicio 08----------- */

function dolares(s, d) {
    return  s * d
}
//console.log(dolares(100, 3.7))

/*------------ejercicio 09----------- */
/*function edad(año){
    return año - 2023
}
//console.log(edad(1998))

/*------------ejercicio 10----------- */


function edad (){

    let edad1 = 13;
    let edad2 = 25;
    let edad3 =35;

    if (edad1 < edad2 && edad1 < edad3){
        return edad1 + " Es el menor"
    }
    else if(edad2 < edad1 && edad2 < edad3 ){
        return edad2 + " Es el menor"
    }
     else {
        return edad3 + " Es el menor"
     }
    
}
//console.log(edad())

/*------------ejercicio 11----------- */

function bono(años){
   
    let bono = 0;

    if (años == 1){
        bono= 100;
    }

    else if(años == 2){
       bono = 200;  
    }

    else if (años == 3){
        bono = 300;
    }
    else if(años == 4){
        bono = 400;
    }

    else{
        bono = 1000;
        
    }
    return bono 
}
   // console.log(bono(2))

/*------------ejercicio 12----------- */

    function salario(){

        let salarioInicial = 1500;
        let salarioActual = salarioInicial;

        if(salarioActual){
            salarioActual = salarioActual + 0.1 * salarioActual
            console.log("Primer año: " + salarioActual)
        }
        if(salarioActual){
            salarioActual = salarioActual + 0.1 * salarioActual
            console.log("Segundo año: " + salarioActual)

        }
        if(salarioActual){
            salarioActual = salarioActual + 0.1 * salarioActual
            console.log("Tercer año: " + salarioActual)
        }
        if(salarioActual){
            salarioActual = salarioActual + 0.1 * salarioActual
            console.log("Cuarto año: " + salarioActual)
        }
        if(salarioActual){
            salarioActual = salarioActual + 0.1 * salarioActual
            console.log("Quinto año: " + salarioActual)
        }
        if(salarioActual){
            salarioActual = salarioActual + 0.1 * salarioActual
            console.log("Sexto año: " + salarioActual)
        }
    }

    //salario()

/*------------ejercicio 13----------- */

function calificaciones(nota1, nota2, nota3, nota4, nota5){
  let aprobados = 0;
  let desaprobados = 0;

  if(nota1 > 10){
    aprobados = aprobados + 1 //aprobados++
  }
  else{
    desaprobados = desaprobados + 1
  }
  if (nota2 > 10){
    aprobados = aprobados + 1
  }
  else{
    desaprobados = desaprobados + 1
  }
  if (nota3 > 10){
    aprobados = aprobados + 1
  }
  else{
    desaprobados = desaprobados + 1
  }
  if (nota4 > 10){
    aprobados = aprobados + 1
  }
  else{
    desaprobados = desaprobados + 1
  }
   if (nota5 > 10){
    aprobados = aprobados + 1
  }
  else{
    desaprobados = desaprobados + 1
  }

  return "Numero de aprovados: " + aprobados + ", " + "numero de desaprobados: " + desaprobados

}
//console.log(calificaciones(10, 15, 19 , 11, 16))



/*------------ejercicio 15----------- */

function votar(edad){

    if(edad >= 18){
        console.log("La persona puedo votar" )
    }
    else{
        console.log("La persona no puedo votar")
    }
}
votar(19)












