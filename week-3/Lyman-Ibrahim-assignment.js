/*
;=============================================================
; Title:  Exercise 3.1
; Author: Alsaddig Ibrahim
; Date:   9 June 2019
; Modified By: Ashleigh Lyman
; Description: Displays a formatted FirstName LastName
===============================================================
*/

/*
;in this is program i use if statement ant switch to check if today day equals sunday or saturday is weekend days but if not equals show message Looking forward to the Weekend
;in this is project there are two Error
*/

//Start Program

if(new Date().getDay()=="Sunday"){
  switch (new Date().getDay()) {

      case 0:
        day = "Sunday";
        console.log('Today is :  '+day+' weekend');

      case 1:
        day = "Monday";
        console.log('Today is:  '+day);
        break;

      case 2:
         day = "Tuesday";
         console.log('Today is:  '+day);
        break;

      case 3:
        day = "Wednesday";
        console.log('Today is:  '+day);
        break;

      case 4:
        day = "Thursday";
        console.log('Today is:  '+day);
        break;

      case 5:
        day = "Friday";
        console.log('Today is:  '+day);
        break;

      case 7:
        day = "Saturday";
        console.log('Today is:  '+day+' weekend');
    }
  }
    // Removed =Saturday
    else if(new Date().getDay()){
      switch (new Date().getDay()) {

          case 0:
            day = "Sunday";
            console.log('Today is:  '+day+' weekend');

          case 1:
            day = "Monday";
            console.log('Today is:  '+day);
            break;

          // Missing text "case"
          case 2:
             day = "Tuesday";
             console.log('Today is:  '+day);
            break;

          case 3:
            day = "Wednesday";
            console.log('Today is:  '+day);
            break;

          case 4:
            day = "Thursday";
            console.log('Today is:  '+day);
            break;

          case 5:
            day = "Friday";
            console.log('Today is:  '+day);
            break;

          case 7:
            day = "Saturday";
            console.log('Today is:  '+day+' weekend');
        }

    }

    //display output message
    else{
      console.log("Looking forward to the Weekend");

    }

    //end program
