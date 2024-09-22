let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let B = +input()
let T = +input()

let alt = 70
let com = 160

let areaT = alt * com

let areaF = ((B + T) * alt) / 2;

if (areaF > areaT / 2){
    write(1)
} else if (areaF < areaT / 2) {
    write(2)
} else {
    write(0)
}
