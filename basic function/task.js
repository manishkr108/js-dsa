// create a function which accept the age and tells whether a person eligibale to vote or not

function eligibaleToVote(age){
    if(age <1){
        console.log("invalid input");
    }
    else if(age >=18)
    {
        console.log("this person is eligibale for vote");
    }
    else
    {
        console.log("not eligible for vote");
    }
}

eligibaleToVote(18);
eligibaleToVote(1);
eligibaleToVote(-18);

// check odd even number 

function checkNumber(num){
    let res = num % 2;
    if(res ==0){
        console.log("number is even");
    }else{
        console.log("nubmer is odd");
    }
}

checkNumber(9);
checkNumber(2);

