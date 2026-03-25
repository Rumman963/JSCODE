//ugly way to write async code 

//callback Hell

setTimeout(function(){
    console.log("hi");  //step 1 after 1 sec

   setTimeout(function(){
        console.log("hello");  // step 2 (3 sec) after step 1
        setTimeout(function(){
            console.log("hello World"); //step 3  (5 sec) after step 2

        } , 5000)
    } , 3000)
} , 1000)