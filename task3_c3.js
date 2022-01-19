// c
// a
// b
// d

const log = console.log;

const a = [108, 208, ['a', 'b'], 380, ['c', 'd'], 400, 508];
x = a[2].slice();
y = a[4].slice();

console.log(`${y[0]}
${x[0]}
${y[1]}
${x[1]}`);

//Method 2

z = [...a[2], ...a[4]];
console.log(`${z[2]}
${z[0]}
${z[3]}
${z[1]}`);

// tambien => FOR con row y col para recorrer, pero los ejecuta en orden a, b, c, d.