#!/usr/bin/node
function add (a, b) {
  return a + b;
}

console.log(add(Number(process.argv[4]), Number(process.argv[5])));
