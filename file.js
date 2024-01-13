const file = require('fs');
file.writeFile('./productos.json',(error)=>{if(error)return console.log('error')
file.readFile('./