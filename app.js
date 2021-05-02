// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// declaramos una funcion con el nombre "fromYenToPound"
const fromYenToPound = function(valueInYenes){
    // convertimos el valor de Yen a Pound
    let valueInPound = valueInYenes * 0.0066;
    // retornamos el valor
    return valueInPound;
}

// declaramos una funcion con el nombre "fromDollarToYen"
const fromDollarToYen = function(valueInDollar){
    // convertimos el valor de dolares a Yenes
    let valueInYen = valueInDollar * 106.6;
    // retornamos el valor
    return valueInYen;
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum,fromEuroToDollar,fromDollarToYen,fromYenToPound };

