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
  average: () => average,
  count: () => count,
  half_compare: () => half_compare,
  more_men: () => more_men,
  sex_battle: () => sex_battle,
  sum: () => sum
});
module.exports = __toCommonJS(student_exports);
function count(vet, value) {
  let cont = 0;
  for (let elem of vet) {
    if (elem === value) {
      cont++;
    }
  }
  return cont;
}
let convert_Stress = (value) => value > 0 ? value : -value;
function sum(vet) {
  let soma = 0;
  for (let elem of vet) {
    soma += convert_Stress(elem);
  }
  return soma;
}
function average(vet) {
  return sum(vet) / vet.length;
}
function more_men(vet) {
  let contM = 0;
  let contW = 0;
  for (let elem of vet) {
    if (elem > 0) {
      contM++;
    } else {
      contW++;
    }
  }
  if (contM > contW) {
    return "men";
  } else if (contW > contM) {
    return "women";
  } else {
    return "draw";
  }
}
function half_compare(vet) {
  let cont1 = 0;
  let cont2 = 0;
  for (let i = 0; i < vet.length; i++) {
    if (i < vet.length / 2) {
      cont1 += convert_Stress(vet[i]);
    } else {
      cont2 += convert_Stress(vet[i]);
    }
  }
  if (cont1 > cont2) {
    return "first";
  } else if (cont2 > cont1) {
    return "second";
  } else {
    return "draw";
  }
}
function sex_battle(vet) {
  let contM = 0;
  let accM = 0;
  let contW = 0;
  let accW = 0;
  for (let elem of vet) {
    if (elem > 0) {
      contM++;
      accM += convert_Stress(elem);
    } else {
      contW++;
      accW += convert_Stress(elem);
    }
  }
  let mediaM = accM / contM;
  let mediaW = accW / contW;
  if (mediaM > mediaW) {
    return "men";
  } else if (mediaW > mediaM) {
    return "women";
  } else {
    return "draw";
  }
  return "";
}
if (require.main === module) {
}
