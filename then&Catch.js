const fs = require("fs")
function readfileAsync(ms){
    return new Promise (function(resolve , reject){
        fs.readFile("a.txt" , "utf-8" , function(err , data){
            if(err){
                reject("File not found")

            }
            else{
                resolve(data)
            }
        })
        
    })

    
}

readfileAsync()

.then(function(x){
    console.log("File Found Successfully" + x)
})

.catch(function(e){
    console.log(e)
})