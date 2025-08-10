function voteEligiblityCheck(age){
    if(age < 0){
      console.log("Invalid Input");
    }else if(age <17){
      console.log("not eligible for vote");
    }
    else{
      console.log("eligible for vote");
    }
  }
  
  voteEligiblityCheck(22);