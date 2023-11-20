// 2391. Minimum Amount of Time to Collect Garbage
// Runtime: 103 ms
// Memory: 56.94 MB

var garbageCollection = function (garbage, travel) {
  let pickTimeGlass = 0;
  let pickTimePaper = 0;
  let pickTimeMetal = 0;

  let travelTimeGlass = 0;
  let travelTimePaper = 0;
  let travelTimeMetal = 0;

  let glassTruckTravelled = 0;
  let paperTruckTravelled = 0;
  let metalTruckTravelled = 0;

  for (let i = 0; i < garbage.length; i++) {
    let currentGarbage = garbage[i];
    for (let j = 0; j < currentGarbage.length; j++) {
      if (currentGarbage[j] == "G") {
        pickTimeGlass++;
        glassTruckTravelled = i;
      } else if (currentGarbage[j] == "P") {
        pickTimePaper++;
        paperTruckTravelled = i;
      } else if (currentGarbage[j] == "M") {
        pickTimeMetal++;
        metalTruckTravelled = i;
      }
    }
  }

  // Paper truck travel time
  for (let i = 0; i < paperTruckTravelled; i++) {
    travelTimePaper += travel[i];
  }

  // Glass truck travel time
  for (let i = 0; i < glassTruckTravelled; i++) {
    travelTimeGlass += travel[i];
  }

  // Metal truck travel time
  for (let i = 0; i < metalTruckTravelled; i++) {
    travelTimeMetal += travel[i];
  }

  let totalTimeSpent =
    pickTimeGlass +
    pickTimePaper +
    pickTimeMetal +
    travelTimeGlass +
    travelTimePaper +
    travelTimeMetal;

  return totalTimeSpent;
};

const result = garbageCollection(["G", "P", "GP", "GG"], [2, 4, 3]);

console.log("result", result);
