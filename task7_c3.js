// usando FOR, mostrar
// tablet
// laptop
// smartphone

const log = console.log;

const listaDeProductos = ['tv', 'tablet', 'laptop', 'smartphone', 'keyboard'];

for(let idx = 1 ; idx <= 3 ; idx++) {
    console.log(listaDeProductos[idx]);
}

// Method 2

let productosLen = listaDeProductos.length - 1;

for(let idx = 1 ; idx < productosLen ; idx++) {
    console.log(listaDeProductos[idx]);
}