function IsAnagram(str1 , str2){

    let sortedStr1= str1.toLowerCase(0).split("").sort().join("")
    let sortedStr2= str2.toLowerCase(0).split("").sort().join("")

if (sortedStr1 == sortedStr2){
    return true
} else {
    return false
}

}


let ans= IsAnagram("evil" , "vile")
console.log(ans)