// write a program to find 2nd largest value in the array
function findSecoundLargeNum(arr){
    let large = arr[0];//4
    let secoundlarge = arr[1];//6
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] > large){
            secoundlarge = large;
            large = arr[i];
        }else if(arr[i] > secoundlarge){
            secoundlarge = arr[i];
        }
    }
    return secoundlarge;
}

let arr = [4,6,1,2,9,3,11,8];
let res =  findSecoundLargeNum(arr);
console.log(res);
