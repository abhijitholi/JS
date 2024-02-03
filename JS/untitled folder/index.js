function check () {
    if (number > 0){
        return "Positive";
    }
     else if  (number < 0 ){
     return "Negative";
     }
     else {

         return "Zero";
        }
     
    }
    
    var a = 20;
    var b = -30; 
    var c = 0; 
    
    console.log(a + "is "+ check(a));