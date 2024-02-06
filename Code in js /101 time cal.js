var time1 = new Date();

for (let i = 0; i < 50; i++) {
        console.log(i); // Print the value of i
    }

    var time2 = new Date();
    
   var timetap1 = time1.getTime();
   var timetap2 = time2.getTime();

   var milisec = timetap2-timetap1;
   var sec = milisec /1000;
   var min =  sec / 60;

   console.log(sec)
   console.log(min)
   