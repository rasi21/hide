

const today= new Date();


switch(today.getDate()){
    case 0:
        console.log("Sunday");
        break;
        case 1 :
            console.log("Monday")
            break;
            case 2:
                console.log("Tuesday");
                break;
}

const MyData = new Date ("1995-01-21")
MyData.getUTCFullYear();
MyData.getMinutes();
MyData.getDate();
MyData.getHours();
MyData.getMinutes();
MyData.getSeconds();
MyData.getMilliseconds();
MyData.getUTCFullYear();
MyData.getTime();
MyData.getDate();

// Home work //

function multiply(num1, num2, num3) {
    return num1 * num2 * num3;
  }
  
  
  console.log(multiply(2, 3, 87)); 


  function reverseWordOrder(value) {
   
    let words = value.split(" ");
    
    let reversedWords = words.reverse();
    
    let reversedString = reversedWords.join(" ");
    
    return reversedString;
  }
  

  



function logUserData(personName, age) {
    console.log("User: " + personName + " is " + age + " years old");
  }
  

  logUserData("John Doe", 50);

