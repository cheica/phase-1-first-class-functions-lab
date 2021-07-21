// Code your solution in this file!
let newArray = [];

const returnFirstTwoDrivers = function(drivers){
    return newArray= [drivers[0],drivers[1]];
}

const returnLastTwoDrivers = function(drivers){
return newArray= drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(num1) {
    return function fareCalc(rate){
        return num1*rate
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
   return returnFirstTwoDrivers(drivers);
}