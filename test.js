// import the function sum from the app.js file
const { sum } = require('./app.js'); 

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});
 
test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const dollars = fromEuroToDollar(3.5)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(dollars);
})

test("One dollar should be 106.6 yenes", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const yenes = fromDollarToYen(1)

    // is 1 dollar son 106.6 yenes, entonces 1 dolar deberian ser = (1 * 106.6)
    const expected = 1 * 106.6; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(yenes);
})

test("One yen should be 0.0066 pound", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const pounds = fromYenToPound(1)

    // is 1 yen son 0.0066 pounds, entonces 1 yen deberian ser = (1 * 0.0066)
    const expected = 1 * 0.0066; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(pounds);
})