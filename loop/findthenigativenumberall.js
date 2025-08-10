function findNegativeNum(arr){
    let val = [];
    let index = 0;
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            val[index]= arr[i]
            index++;
        }
    }
    return val;
    
}

let arr =  [2,4,-5,-3,-6,8];
let res =  findNegativeNum(arr);
console.log(res);