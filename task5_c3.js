// decir el tipo de dato iterando con FOR

const log = console.log;

const a = [100, 'hola', true, ['a', 'b'], function(){return 'saludo'}];
  
for(let idx = 0 ; idx < a.length ; idx++) {
console.log(typeof a[idx]);
}