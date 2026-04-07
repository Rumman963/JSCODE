const fs = require('fs');

function main(filename){
   const as = fs.readFile(filename, "utf-8", function(err, data){
    let space = 0 ;
    for (let i = 0 ; i < data.length ; i++){
        if (data[i] == ' ') {
            space++;
        }

    }
    console.log(space + 1);
   })
} 

main("file.txt");