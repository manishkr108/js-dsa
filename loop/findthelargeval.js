function findlargeNum(arr){
    let large= arr[0];

    for(let i=0; i<arr.length;i++){
        if(arr[i]> large){
            large = arr[i];
        }
    }

    return large;
}

let arr = [7,3,5,8,2,11,1,19];
let res =  findlargeNum(arr);
console.log(res);

