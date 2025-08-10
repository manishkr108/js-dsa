for(let i =5;i>0;i--){

        for(let j=5;j>0;j--){
            console.log("*");
            console.log("\n");
        }

        
    
}

for(let i=0;i<5;i++){
    let row = "";
    for(let j=0;j<5-(i+1);j++){
      row = row+"";
    }
    for(let k=0;k<i+1;k++){
      row = row+"*";
      
    }
    console.log(row);
  }