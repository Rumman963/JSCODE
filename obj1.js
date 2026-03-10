function Solve(arr) {
    let arr1=[]
    for (let i= 0 ; i < arr.length ; i++){
        if (arr[i].age > 18 && arr[i].Gender === "male"){

            arr1.push(arr[i])
        }

    }
return arr1 ;
}

const users = [
    {
        name:"Rumman",
        age:22,
        Gender:"male"
    },
    {
        name:"Habib",
        age:18,
        Gender:"male"

    },

    {
        name:"Sadia",
        age:17,
        Gender:"Female"

    }
]

const ans = Solve(users)
console.log(ans)