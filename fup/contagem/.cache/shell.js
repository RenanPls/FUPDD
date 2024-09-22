var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var shell_exports = {};
module.exports = __toCommonJS(shell_exports);
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
    } else if (args[0] === "count") {
      write((0, import_student.count)(to_vet(args[1]), +args[2]));
    } else if (args[0] === "sum") {
      write((0, import_student.sum)(to_vet(args[1])));
    } else if (args[0] === "average") {
      write((0, import_student.average)(to_vet(args[1]))?.toFixed(2));
    } else if (args[0] === "more_men") {
      write((0, import_student.more_men)(to_vet(args[1])));
    } else if (args[0] === "half_compare") {
      write((0, import_student.half_compare)(to_vet(args[1])));
    } else if (args[0] === "sex_battle") {
      write((0, import_student.sex_battle)(to_vet(args[1])));
    } else {
      write("fail: comando invalido");
    }
  }
}
function to_vet(token) {
  let size = token.length;
  let inside = token.substring(1, size - 1);
  return inside === "" ? [] : inside.split(",").map((x) => +x);
}
main();
