//GUESS THE NUMBER 
const num = Math.floor(Math.random() * 100) + 1;

let chances=0
let guess
do{
   
     guess= parseInt(prompt("Enter a Number : "));
  
  
 if(guess<num){
   console.log("your number is smaller than the original number, Please TRY AGAIN")
    chances++
 }
  else if(guess>num){
    console.log("your number is larger than the original number, Please TRY AGAIN ")
     chances++
  }
  else{
    console.log("Congartulations !! you guessed the correct Number!! "+"Number is : "+num)
  }
 
  
}while(guess!=num)

const score=100-chances
console.log("Your score is :",score)








