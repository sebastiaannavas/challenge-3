// enviar el nombre del planeta y verificar si existe

const log = console.log;

function planeta(name) {
    switch(name){
      case 'mercurio':
        console.log('1. MERCURIO es el 1er. planeta del Sistema Solar');
        break;
      case 'venus':
        console.log('2. VENUS es el 2do. planeta del Sistema Solar');
        break;
      case 'tierra':
        console.log('3. MARTE es el 3er. planeta del Sistema Solar');
        break;
      case 'marte':
        console.log('4. MARTE es el 4to. planeta del Sistema Solar');
        break;
      case 'jupiter':
        console.log('5. JUPITER es el 5to. planeta del Sistema Solar');
        break;
      case 'saturno':
        console.log('6. SATURNO es el 6to. planeta del Sistema Solar');
        break;
      case 'neptuno':
        console.log('7. NEPTUNO es el 7to. planeta del Sistema Solar');
        break;
      case 'urano':
        console.log('8. URANO es el 8to. planeta del Sistema Solar');
        break;
      default:
        console.log(' * OOPS: el planeta ingresado no existe * ');
    }
}
planeta('jupiter');

// Method 2
// if conditions have this format: Saturno

// planeta = planeta.charAt(0).toUpperCase() + planeta.slice(1);