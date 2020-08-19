"use strict";
const getItemsString = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
const result = getItemsString.length - 1;
for (let i = 0; i <= getItemsString.length - 1; i += 1) {
    getItemsString[i] = ${ };
  getItemsString[i] += `'${result}-\n`;
}
console.log(getItemsString);
