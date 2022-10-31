// ENTREGABLE 01 

var Menu = ` `;

function Voltaje (corriente, resistencia)
    {
        return corriente*resistencia;
    }

function Corriente (voltaje, resistencia)
    {

        return voltaje/resistencia;
    }

function Resistencia (voltaje, corriente)
    {

        return voltaje/corriente;
    }


while (Menu != `S` && Menu != `s`)
{
    var Menu = prompt("Bienvenido a la calculadora de OHM\n ¿Que desea calcular? \n Voltaje ---> Ingrese V \n Corriente ---> Ingrese I \n Resistencia ---> Ingrese R \n Salir ---> Ingrese S o s");
    
    if (Menu != `S` && Menu != `s`)
    {
        switch (Menu)
        {
            case "V":

                let corriente1 = parseFloat(prompt("Ingrese el valor de la Corriente (A): "));
                let resistencia1 = parseFloat(prompt("Ingrese el valor de la Resistencia (OHM): "));
                resultado = Voltaje (corriente1,resistencia1);
                alert (`El valor del Voltaje es: ${resultado} (V)`);
                break;
            
            case "I":

                let voltaje1 = parseFloat(prompt("Ingrese el valor del Voltaje (V): "));
                let resistencia = parseFloat(prompt("Ingrese el valor de la Resistencia (OHM): "));
                resultado = Corriente (voltaje1,resistencia);
                alert (`El valor de la corriente es: ${resultado} (A)`);
                break;

            case "R":

                let voltaje = parseFloat(prompt("Ingrese el valor del Voltaje (V): "));
                let corriente = parseFloat(prompt("Ingrese el valor de la corriente (I): "));
                resultado = Resistencia (voltaje,corriente)
                alert (`El valor de la Resistencia es: ${resultado} (A)`);
                break;

            default:
                alert ("El valor Ingresado no está entre las opciones");
                break;
        }
    }  
}

alert ("ADIOS");
