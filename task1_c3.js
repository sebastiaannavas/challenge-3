// 1
// 5
// 9
// 3
// 7

const log = console.log;

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
for(let row = 0 ; row < matrix.length ; row++) {
  for(let col = 0 ; col < 3 ; col++) {
    if(row == col) {
      console.log(`${matrix[row][col]}`);
    }
  }
}
console.log(`${matrix[0][2]} 
${matrix[2][0]}`);
  
// tambien => recorrido inverso para verificar 3 ([0][0]) y 7 ([2][2]) 