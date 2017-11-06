// Transfers the actual variable / function, does not just make a copy of the same thing. 
// i.e. if score gets updated in myFile.js, it wil get updated in script.js as well
// import { score } from './myFile.js'
// OR
// import {score} from  './myFile.js'
// import {cardFees} from  './myFile.js'
// 
// import * as myValues from './myFile.js'
// console.log(myValues.score);
// myValues.cardFees();

import name, { scardFees} from './myFile.js'

console.log(score);
cardFees();
console.log(name);