
// Problem 1:
// Put the start of your program in a main function.
// Ask the user to enter a number from 1 through 4.
// Print the corresponding Month that matches each number.
// (Hint: 1 is January).

// let month_number = prompt("Enter month number 1 - 4");

// switch (month_number)
// {
//     case "1":
//         alert("Jan");
//         break;
//     case "2":
//         alert("Feb");
//         break;
//     case "3":
//         alert("Mar");
//         break;
//     case "4":
//         alert("Apl");
//         break;
//     default:
//         alert("No Match!");
// }

// Problem 2:
// Put the start of your program in a main function.
// Ask the user to enter a day of the week.
// Print the corresponding Spanish word.
//If they do not input a day of the week say
//"That is not a day of the week in English."

// lunes. Monday.
// martes. Tuesday.
// miércoles. Wednesday.
// jueves. Thursday.
// viernes. Friday.
// sábado. Saturday.
// domingo. Sunday.

// let day_of_week = prompt("Enter a Day of the Week");
// while (day_of_week !== "x")
// {
//     switch (day_of_week)
//     {
//         case "monday":
//             alert("lunes");
//             break;
//         case "tuesday":
//             alert("martes");
//             break;
//         case "wednesday":
//             alert("miercoles");
//             break;
//         case "thursday":
//             alert("jueves");
//             break;
//         case "friday":
//             alert("viernes");
//             break;
//         case "saturday":
//             alert("sabado");
//             break;
//         case "sunday":
//             alert("domingo");
//             break;

        // default:
        //     alert("That is not a day of the week");
    // }
// }

// Challenge:
// write a class called Person with a first name and last name properties
// prompt the user over and over to select 1) add person 2) print persons
// and 3) Exits program (use switch case. Alert to invalid entry.


class Person
{
    constructor(fname, lname)
    {
        this.fname = fname;
        this.lname = lname;
    }
}

let userInput = prompt("Press 1 to add person. Press 2 to print person Press 3 to quit");
let persons = [];
function addPerson(){
    let fname = prompt("Enter first name:");
    let lname = prompt("Enter last name");
    let newPerson = new Person(fname,lname);
}
while (user_input !== 3)
{
    console.log("Enter an option below:\n" +
        "1. Add Person\n"+
        "2. Print Persons\n"+
        "3. Ouit program\n"+
        "Pick an option from menu:");

userInput = prompt("Pick an option from menu");
switch (userInput)
{
    case"3":
        console.log("Goodbye!");
        break;
}
}



