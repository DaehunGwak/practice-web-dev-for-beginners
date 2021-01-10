function f1(p1, p2 = "p2") {
  return `${p1} ${p2}`;
}

function f2(p1, p2 = "pp2") {
  console.log(p1, p2);
}

console.log(f1(1)); // 1 p2
console.log(f2(2)); // undefined
