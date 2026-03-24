function IsLargest(number){
    let Largest = number[0]
     
    for (let i=1 ; i<number.length ; i++){
        if (number[i]> Largest){
            Largest = number[i]
        }
    }
    return Largest
}

console.log(IsLargest([1 , 23 , 12, 3 , 5]))