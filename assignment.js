
// function to convert Kilometer to Meter

function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        var errorMessage = " Input is not valid. Put a positive Value. ";
        return errorMessage;
    }
    else {
        var meter = kilometer * 1000;
        return meter;
    }

}

var result = kilometerToMeter(-199);
console.log(result);


//  Fucntion to calculate hotel cost

function hotelCost(){
    
}