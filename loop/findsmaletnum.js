function findSamllNum(arr){
    let small = arr[0];

    for(let i=0; i<arr.length;i++){
        if(arr[i] < small){
            small = arr[i];
        }
    }

    return small;
}

let arr = [7,6,5,4,3,1];
let res = findSamllNum(arr);
console.log(res);

