
// function findTheIndex(arr,num){
    
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] ==num ){
//             return i;
//         }
//     }

//     return -1;
    
// }
// let arr = [2,4,6,7,8,9];
// let res = findTheIndex(arr,9);

// console.log("the index of given value is",res);

// // write a function to return nigative number from an array

// function findTheNigativeNum(arrs){
//     let count =0;
//     for(let i =0;i<arrs.length;i++){
//         if(arrs[i] <0){
//             count = count+1;
//             console.log("nigative num", arr[i]);
//         }
//     }
//     return count;
// }

// let arrs = [2,-4,-6,7,8,-9];
// let num = findTheNigativeNum(arrs);
// console.log(num);

// write a function to find the largest number in an array

// function findTheLargeNum(ar){
//     let large = ar[0];
//     for(let i =0;i<ar.length;i++){
//         // console.log("large",ar[i]);
//         if(ar[i] > large){
//              large = ar[i];
//         }
//     }
//     return large;
    
// }

// let ar = [10,2,333,4,51,41,30];
// let rs = findTheLargeNum(ar);
// console.log("large nubmer",rs);

// write a program to find smalest number of in an array

// function findTheSmallestNumber(arr){
//     let small = arr[0];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]< small){
//             small= arr[i];
//         }
//     }
//     return small;
// }

// let arr = [3,4,5,6,7,1,9];
// let res = findTheSmallestNumber(arr);
// console.log(res);

// write a program to find 2nd largest number in an array

function findSecoundLarg(arr){
    let large = arr[0];
    let seclarg = arr[1];
    for(let i=0;i<arr.length;i++){
        if(arr[i] > large){
            seclarg =  large;
            large=arr[i];
        }else if(arr[i]> seclarg && arr[i]< large){
            seclarg= arr[i];

        }
    }

    return seclarg;
}

let arr = [3,4,5,6,7,1,9,11,14];
let res = findSecoundLarg(arr);
console.log(res);
