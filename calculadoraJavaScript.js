const suma = function(){
    const numeroSuma1 = parseFloat (prompt("Ingrese el primer número:"));
    const numeroSuma2 = parseFloat (prompt("Ingrese el segundo número:"));
    if ((numeroSuma1 == parseFloat(numeroSuma1)) && (numeroSuma2 == parseFloat(numeroSuma2))) {
        let resultadoSuma = numeroSuma1 + numeroSuma2;
        console.log("El resultado de la suma es: " + resultadoSuma);
        }else{
        console.log("¡Maldita sea, ingrese sólo números válidos!");
}}




const resta = function(){
    const numeroResta1 = parseFloat (prompt("Ingrese el primer número:"));
    const numeroResta2 = parseFloat (prompt("Ingrese el segundo número:"));
    if ((numeroResta1 == parseFloat(numeroResta1)) && (numeroResta2 == parseFloat(numeroResta2))) {
        let resultadoResta = numeroResta1 - numeroResta2;
        console.log("El resultado de la resta es: " + resultadoResta);
        }else{
        console.log("¡Maldita sea, ingrese sólo números válidos!");
}}




const multiplicacion = function(){
    const numeroMult1 = parseFloat (prompt("Ingrese el primer número:"));
    const numeroMult2 = parseFloat (prompt("Ingrese el segundo número:"));
    if ((numeroMult1 == parseFloat(numeroMult1)) && (numeroMult2 == parseFloat(numeroMult2))) {
        let resultadoMult = numeroMult1 * numeroMult2;
        console.log("El resultado de la multiplicación es: " + resultadoMult);
        }else{
        console.log("¡Maldita sea, ingrese sólo números válidos!");
}}




const division = function(){
    const numeroDiv1 = parseFloat (prompt("Ingrese el primer número:"));
    const numeroDiv2 = parseFloat (prompt("Ingrese el segundo número:"));
    if (numeroDiv2 === 0) {
    console.log("No se puede dividir entre cero.");
    }
    if ((numeroDiv1 == parseFloat(numeroDiv1)) && (numeroDiv2 == parseFloat(numeroDiv2))) {
        let resultadoDiv = numeroDiv1 / numeroDiv2;
        console.log("El resultado de la división es: " + resultadoDiv);
        }else{
        console.log("¡Maldita sea, ingrese sólo números válidos!");
}}



const elegirOperacion = function(){
    const operacion = prompt("Elige el número que corresponde a la operación que quieres realizar: 1 para suma, 2 para resta, 3 para multiplicación, 4 para división):");
    switch(operacion){
        case "1":
            suma();
            break;
        case "2":
            resta();
            break;
        case "3":
            multiplicacion();
            break;
        case "4":
            division();
            break;
        default:
            console.log("¡Pónle bien ahíombreeeee!");
    }
}

elegirOperacion();