var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var student_exports = {};
__export(student_exports, {
  find_if: () => find_if,
  find_min_if: () => find_min_if,
  index_of: () => index_of,
  inside: () => inside,
  min_element: () => min_element
});
module.exports = __toCommonJS(student_exports);
function inside(vet, value) {
  for (let elem of vet) {
    if (elem == value) {
      return true;
    }
  }
  return false;
}
function index_of(vet, value) {
  for (let i = 0; i < vet.length; i++) {
    if (vet[i] == value) {
      return i;
    }
  }
  return -1;
}
function find_if(vet) {
  for (let i = 0; i < vet.length; i++) {
    if (vet[i] >= 0) {
      return i;
    }
  }
  return -1;
}
function min_element(vet) {
  let menor = 0;
  if (vet.length === 0) {
    return -1;
  }
  for (let i = 1; i < vet.length; i++) {
    if (vet[i] < vet[menor]) {
      menor = i;
    }
  }
  return menor;
}
function find_min_if(vet) {
  let pos_ref = -1;
  for (let i = 0; i - vet.length; i++) {
    if (vet[i] > 0) {
      if (pos_ref == -1 || vet[i] < vet[pos_ref]) {
        pos_ref = i;
      }
    }
  }
  return pos_ref;
}
if (require.main === module) {
  console.log("Rodando o arquivo do estudante");
}
