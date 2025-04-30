// converts temperature from Celsius to Fahrenheit.
function celsiusToFahrenheit(temp){
    return (temp * 9/5) + 32;
}

let celsiusTemp = 0;
let fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
console.log(`${celsiusTemp} in Celsius is equals to ${fahrenheitTemp} in Fahrenheit`);