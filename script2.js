 let nam = "Kakha";

 let lastname = "Beruashvili"
 let fullName = nam + lastname;

 console.log(fullName)

///


 function reverseWordOrder(value) {
   
    let words = value.split(" ");
    
    let reversedWords = words.reverse();
    
    let reversedString = reversedWords.join(" ");
    
    return reversedString;

 }
 let hai = "Hello Guys!";
  console.log(reverseWordOrder(hai));

//

  let evenName = "Kakha"
  let dt = new Date();
  function logEvent (){
    console.log(" Event: " + evenName + " log in ocurred on"+ dt);
    
  }
  logEvent();



//
 let food = "pizza";
 let year = 87;

 if (food === "pizza" && year === 87){
    console.log("you are right")
 }
 if (food === "pizza" && year === 88){
    console.log("you are right")
 }else{
    console.log("you wrong")
 }

 if (food === "pizza" && year !== 198){
    console.log("you are right!")
 }