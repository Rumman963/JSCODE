let ctr=1;
function Callback(){
    console.clear();
    console.log(ctr);
    ctr++;
}

setInterval(Callback , 1000)