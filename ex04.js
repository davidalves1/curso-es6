for (var i = 0; i < 10; i++) {}
// Var não possui escopo de bloco
console.log('var i = ', i);

for (let i = 11; i < 20; i++) {}
// Let possui escopo de bloco
console.log('let i = ', i);