const iceCreamFlavors = [
  "Chocolate",
  "Strawberry",
  "Vanilla",
  "Pistachio",
  "Rocky Road",
];

console.log("forEach");
iceCreamFlavors.forEach((v) => {
  console.log(v);
});

console.log("\nfor-of");
for (let v of iceCreamFlavors) {
  console.log(v);
}

console.log("\nmap");
iceCreamFlavors.map((v) => {
  console.log(v);
  return v;
});
