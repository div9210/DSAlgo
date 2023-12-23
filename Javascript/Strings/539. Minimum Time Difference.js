function minutesConversion(time) {
  let timeSplit = time.split(":");
  let hours = Number(timeSplit[0]);
  let minutes = Number(timeSplit[1]);

  return hours * 60 + minutes;
}

var findMinDifference = function (timePoints) {
  // Loop over the timePoints and store the minutes in array
  let minutes = timePoints.map((timeString) => minutesConversion(timeString));

  // Sort the minutes and store the minTimeDiff
  minutes.sort((a, b) => a - b);

  let i = 0;
  let j = i + 1;
  let minTimeDiff = 24 * 60 + 1;
  while (j < minutes.length) {
    let timeDiff = minutes[j] - minutes[i];
    if (timeDiff < minTimeDiff) {
      minTimeDiff = timeDiff;
    }
    i++;
    j++;
  }
  // Now since the minutes array is sorted
  // minutes[0] is closest to "00:00" and minutes[n-1] is farthest
  // But if we look anti clock wise they can be near
  // So considering that too
  minTimeDiff = Math.min(
    1440 + minutes[0] - minutes[minutes.length - 1], // This is anticlock wise diff where 1440 is 24h
    minTimeDiff // Previous minutes diff
  );
  return minTimeDiff;
};

let timePoints = ["23:59", "00:00"];
console.log(findMinDifference(timePoints));
