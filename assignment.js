// https://github.com/mohammad-zakaria/ph-assignment3


// function to convert Kilometer to Meter

function kilometerToMeter(kilometer) {
    if (kilometer < 0 || typeof (kilometer) != "number") {
        var errorMessage = " Input is not valid. Put a positive Value. ";
        return errorMessage;
    }
    else {
        var meter = kilometer * 1000;
        return meter;
    }

}

// var result = kilometerToMeter(.44);
// console.log(result);


//  Fucntion to calculate hotel cost

function hotelCost(days) {
    var totalFare = 0;
    if (days < 0 || typeof (days) != "number") {
        var error = " You didn't stayed in hotel for a single day! Or Function parameter is not a number!";
        return error;
    }
    else if (days <= 10) {
        totalFare = 100 * days;
    } else if (days <= 20) {
        var firstFare = 100 * 10;
        var remaining = days - 10;
        var secondFare = remaining * 80;
        totalFare = firstFare + secondFare;
    } else {
        var firstFare = 100 * 10;
        var secondFare = 80 * 10;
        var remaining = days - 20;
        var thirdFare = remaining * 50;
        totalFare = firstFare + secondFare + thirdFare;
    }
    return totalFare;
}
// var result2 = hotelCost(12);
// console.log(result2);




//Function to calculate budget


function budgetCalculator(watch, mobile, laptop) {
    if (watch < 0 || mobile < 0 || laptop < 0 || typeof (watch) != "number" || typeof (mobile) != "number" || typeof (laptop) != "number") {
        var errorText = "Input should be numbers and a positive numbers. Put positive numbers of how many watch, mobile or laptop you want to buy?";
        return errorText;
    } else {
        var total = watch * 50 + mobile * 100 + laptop * 500;
        return total;

    }

}
// var result = budgetCalculator(4, 5, 7);
// console.log(result);


// function to return the largest name of my friends

// var friends = ["Tahmid", " Shishir", " Asad", " Emran", " Abu Jandal"]; have to show largest name from function parameter.


function megaFriend(friends = ["Tahmid", " Shishir", " Asad", " Emran", " Abu Jandal"]) {

    let mega = friends[0];
    for (i = 0; i < friends.length; i++) {
        if (typeof (friends[i]) != "string") {
            var showError = friends[i] + " is not a valid name";
            return showError;
        }
        else if (friends[i].length > mega.length) {
            mega = friends[i];
        }
    }
    return mega;
}

// var result = megaFriend(friends = ["Zakariyya", "Muhammad Ibn Abdillah", " Mohammad Zakariyya Ibn Ahmed"]);
// console.log(result);


//The Following code shows same results. Kindly let me know if it be also correct. Thanks

// function megaFriend() {
//     let mega = arguments[0];
//     for (i = 0; i < arguments.length; i++) {
//         if(typeof(arguments[i]) != "string"){
//             var showError = arguments[i] + " is not a valid name";
//             return showError;
//         }
//         else if (arguments[i].length > mega.length) {
//             mega = arguments[i];
//         }
//     }
//     return mega;
// }
// var result = megaFriend("Zakariyya", "Muhammad Ibn Abdillah", " Mohammad Zakariyya Ibn Ahmed", a);
// console.log(result);