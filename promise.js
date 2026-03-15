function asyncOp(resolve){
    setTimeout(function(){
    console.log("Async Operation Done");
     resolve();
    }, 2000)
}


function SetTimeoutPromise(){
    return new Promise(asyncOp)
}

const p= SetTimeoutPromise();

function callback() {
  
    console.log("Promise Resolved");
} 
p.then(callback)
