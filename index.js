// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
let hqLocation = 42;
let NumberOfBlocksFromHq = Math.abs(pickupLocation - hqLocation);
return NumberOfBlocksFromHq
}
distanceFromHqInBlocks(34);


function distanceFromHqInFeet(blockNumber){

let distanceInFeet =  distanceFromHqInBlocks(blockNumber) * 264;
return distanceInFeet
}
distanceFromHqInFeet(43);

function distanceTravelledInFeet(startBlock, endBlock){
let distance = Math.abs(startBlock - endBlock);
return (distance * 264)
}
distanceTravelledInFeet(34,28);

function calculatesFarePrice(start, destination){
    let farePrice;
let totalFeet = distanceTravelledInFeet(start, destination);
if (totalFeet <= 400){farePrice = 0}

    else if (totalFeet > 400 && totalFeet <=2000){farePrice = 0.02 * (totalFeet - 400)}

    else if (totalFeet > 2000 && totalFeet <= 2500){farePrice = 25}

    else farePrice = "cannot travel that far";
    return farePrice
}
calculatesFarePrice(50,58);