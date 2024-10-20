const prompt = require("prompt-sync")({ sigint: true });

const calcularNuevoSueldo = function(){
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let sueldo =  parseInt(prompt("Ingrese su sueldo"));
    let sueldoActual = sueldo;
    if(sueldo >= 36000){
        aumento = "15%"
        sueldo = sueldo + (sueldo * 0.15)
    }else{
        aumento = "20%"
        sueldo = sueldo + (sueldo * 0.20)
    }
    console.log(`Nombre: ${nombre}`)
    console.log(`Apellido: ${apellido}`)
    console.log(`Sueldo Actual: ${sueldoActual}`)
    console.log(`Aumento otorgado: ${aumento}`)
    console.log(`Su nuevo sueldo es: ${sueldo}`)
}

calcularNuevoSueldo();