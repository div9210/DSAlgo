var numberOfBeams = function (bank) {
  let totalBeams = 0;
  for (let i = 0; i < bank.length - 1; i++) {
    let upcomingRow = i + 1;
    // check number of security devices present in the upcoming row
    let numDevicesInUpcomingRow = 0;
    while (numDevicesInUpcomingRow === 0) {
      numDevicesInUpcomingRow = calculateDevices(bank[upcomingRow]);
      upcomingRow++;
    }

    let devicesInCurrentRow = calculateDevices(bank[i]);
    totalBeams += devicesInCurrentRow * numDevicesInUpcomingRow;
  }
  return totalBeams;
};

function calculateDevices(str) {
  // Calculate the number of times '1' has appeared in the str
  let devices = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "1") {
      devices++;
    }
  }
  return devices;
}

var numberOfBeamsPart2 = function (bank) {
  let devicesArray = [];
  for (let i = 0; i < bank.length; i++) {
    devicesArray.push(calculateDevices(bank[i]));
  }
  let totalBeams = 0;
  for (let i = 0; i < devicesArray.length - 1; i++) {
    let upcoming = i + 1;
    while (devicesArray[upcoming] === 0 && upcoming < devicesArray.length) {
      upcoming++;
    }

    if (upcoming !== devicesArray.length) {
      totalBeams += devicesArray[i] * devicesArray[upcoming];
    }
  }

  return totalBeams;
};
let bank = ["010", "111", "000"];
const result = numberOfBeamsPart2(bank);
console.log({
  result,
});
