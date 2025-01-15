class Solution {
  // Function to find the maximum number of meetings that can
  // be performed in a meeting room.

  maxMeetings(start, end, n) {
    let meetingPairs = start
      .map((s, i) => {
        return [s, end[i]];
      })
      .sort((a, b) => a[1] - b[1]);

    let meetings = [];
    let i = 0;
    while (i < n) {
      let currentMeeting = meetingPairs[i];
      // If you can push it just push it
      if (meetings.length > 0) {
        // Check if you can push it
        let lastMeeting = meetings[meetings.length - 1];
        // If start time of currentMeeting is more than lastMeeting end time
        if (currentMeeting[0] > lastMeeting[1]) {
          // Push it
          meetings.push(currentMeeting);
        }
      } else {
        // directly push it
        meetings.push(currentMeeting);
      }
      i++;
    }

    return meetings.length;
  }
}

let start = [1, 3, 0, 5, 8, 5],
  end = [2, 4, 6, 7, 9, 9];

let n = 6;

let sol = new Solution();
console.log(sol.maxMeetings(start, end, n));
