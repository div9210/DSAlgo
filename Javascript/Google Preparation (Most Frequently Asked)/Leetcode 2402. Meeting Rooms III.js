/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function (n, meetings) {
    // Sort all the meeting on the basis of start time
    meetings.sort((a, b) => a[0] - b[0]);

    let availableRooms = new PriorityQueueI((a, b) => a - b);
    // Initially every room is available
    for (let room = 0; room < n; room++) availableRooms.insert(room);

    let occupied = new PriorityQueueI((a, b) => {
        if (a.end != b.end) {
            return a.end - b.end;
        } else {
            return a.room - b.room;
        }
    });

    let meetingsScheduled = new Array(n).fill(0);

    for (let i = 0; i < meetings.length; i++) {
        let meeting = meetings[i];
        let [start, end] = meeting;

        // try to make as many rooms available as you can 
        // for this meeting
        while (occupied.size() > 0 && occupied.peek().end <= start) {
            let meeting = occupied.delete();
            // Mark the room of this meeting as available
            availableRooms.insert(meeting.room);
        }

        // Check if any room is available for the meeting
        if (availableRooms.size() > 0) {
            // Use the room and schedule the meeting
            let room = availableRooms.delete();
            occupied.insert({ room: room, start: start, end: end });
            meetingsScheduled[room]++;
        } else {
            // Since no rooms are available, delay the meeting
            let meetingDuration = end - start;
            let peek = occupied.delete();
            start = peek.end;
            end = start + meetingDuration;
            occupied.insert({ room: peek.room, start: start, end: end });
            meetingsScheduled[peek.room]++;
        }
    }

    let maxMeetings = -1;
    let resultRoom = -1;
    for (let room = 0; room < n; room++) {
        if (meetingsScheduled[room] > maxMeetings) {
            maxMeetings = meetingsScheduled[room];
            resultRoom = room;
        }
    }

    return resultRoom;
};

class PriorityQueueI {
    constructor(cfn) {
        this.elements = [];
        this.cfn = cfn;
    }

    swap(i, j) {
        let temp = this.elements[i];
        this.elements[i] = this.elements[j];
        this.elements[j] = temp;
    }

    heapifyUp(index) {
        let currentIndex = index;
        while (currentIndex > 0) {
            let parentIndex = Math.floor((currentIndex - 1) / 2);
            if (this.cfn(this.elements[currentIndex], this.elements[parentIndex]) < 0) {
                // Swap
                this.swap(currentIndex, parentIndex);
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    insert(val) {
        this.elements.push(val);
        let insertIndex = this.elements.length - 1;
        this.heapifyUp(insertIndex);
    }

    heapifyDown(index) {
        let n = this.elements.length;
        let currentIndex = index;
        while (currentIndex < n) {
            let correctIndex = currentIndex;
            let leftChildIndex = 2 * currentIndex + 1;
            let rightChildIndex = 2 * currentIndex + 2;

            if (leftChildIndex < n && this.cfn(this.elements[leftChildIndex], this.elements[correctIndex]) < 0) {
                correctIndex = leftChildIndex;
            }

            if (rightChildIndex < n && this.cfn(this.elements[rightChildIndex], this.elements[correctIndex]) < 0) {
                correctIndex = rightChildIndex;
            }

            if (correctIndex != currentIndex) {
                this.swap(correctIndex, currentIndex);
                currentIndex = correctIndex;
            } else {
                break;
            }
        }
    }

    delete() {
        let root = this.elements[0];

        let safestNode = this.elements[this.elements.length - 1];
        this.elements[0] = safestNode;
        this.elements.pop();

        this.heapifyDown(0);
        return root;
    }

    peek() {
        return this.elements[0];
    }

    isEmpty() {
        return this.elements.length == 0;
    }

    size() {
        return this.elements.length;
    }
}