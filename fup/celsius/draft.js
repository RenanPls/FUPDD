let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

function celsiusParaFahrenheit(celsius) {
  return (1.8 * celsius) + 32;
}

let tempCelsius = +(input().trim());

let tempFahrenheit = celsiusParaFahrenheit(tempCelsius);

write(tempFahrenheit.toFixed(6));