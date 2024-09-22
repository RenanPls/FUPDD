var import_student = require("./student");
function input() {
  let X = input;
  X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/);
  return X.L.shift();
}
function write(text, endl = "\n") {
  process.stdout.write("" + text + endl);
}
function main() {
  while (true) {
    write("$", "");
    let line = input();
    write(line);
    let args = line.split(" ");
    if (args[0] === "end") {
      break;
    } else if (args[0] === "in") {
      let result = (0, import_student.inside)(to_vet(args[1]), +args[2]);
      write(result ? "true" : "false");
    } else if (args[0] === "index_of") {
      let result = (0, import_student.index_of)(to_vet(args[1]), +args[2]);
      write(result);
    } else if (args[0] === "find_if") {
      let result = (0, import_student.find_if)(to_vet(args[1]));
      write(result);
    } else if (args[0] === "min_element") {
      let result = (0, import_student.min_element)(to_vet(args[1]));
      write(result);
    } else if (args[0] === "find_min_if") {
      let result = (0, import_student.find_min_if)(to_vet(args[1]));
      write(result);
    } else {
      write("fail: Comando inv\xE1lido");
    }
  }
}
main();
function to_vet(token) {
  let size = token.length;
  let inside2 = token.substring(1, size - 1);
  return inside2 === "" ? [] : inside2.split(",").map((x) => +x);
}
