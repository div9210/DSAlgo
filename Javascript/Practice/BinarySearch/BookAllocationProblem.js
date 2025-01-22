class Solution {
  //Function to find minimum number of pages.
  findPages(a, n, m) {
    if (m > n) return -1;
    // First let's find the sum of all the pages
    let totalPages = 0;
    for (let i = 0; i < n; i++) {
      totalPages += a[i];
    }

    // Now that we have the totalPages,
    // The search space is defined to be
    // 0 ----> totalPages
    // Since the search space denotes a number line (i.e sorted)
    // And using a predicate function we have to find something in this search space
    // We will use Binary Search
    let start = 0;
    let end = totalPages;
    let answer = -1;
    while (start <= end) {
      let mid = Math.floor(start + (end - start) / 2);
      // Here mid denotes a possible answer, thus validating that using a predicate function
      if (this.possibleMinSolution(a, n, m, mid)) {
        // Either this is the answer, or there could be a less pages answer i.e left
        answer = mid;
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    return answer;
  }

  possibleMinSolution(books, n, students, solution) {
    // Let's start the allcation now
    let currentStudent = 1;
    let pagesAllocatedTillNow = 0;

    // We will iterate over the books and start the allocation
    // Note that since our possible solution means the max number of pages between the two students
    // No one can have more than the solution pages
    for (let i = 0; i < n; i++) {
      // If any book contains more pages the solution
      // Then this solution is wrong
      // Because as soon as we assign the book with more pages to any student.
      // He/She will have more pages than the possible solution
      if (books[i] > solution) {
        return false;
      }

      // If the code reaches here that means this book can be allocated for this solution
      // Then allocating the book to currentStudent
      pagesAllocatedTillNow += books[i];

      // If after allocation, the number of pages cross the solution
      // That means we cannot allocate this book to the currentStudent
      // Thus we will leave the previous allocations to this student (if any) AS IT IS
      // And will start the allocation of current book to the next student
      if (pagesAllocatedTillNow > solution) {
        // Allocating to the next student
        currentStudent++;
        // Check if moving to the next student makes the student non existent
        if (currentStudent > students) {
          // We have reached a non existent student, and since the for loop is not finished yet
          // That means we still have books to allocate, but there are no more students
          return false;
        }

        // If code reaches here that means the student exists
        pagesAllocatedTillNow = 0 + books[i]; // I wrote it like this just for better understanding (it denotes a fresh allocation)
      }
    }

    // If the loop ended without student becoming non existent

    // ALWAYS REMEMBER WHY THIS CONDITION IS NOT REQUIRED
    // **********************************************************
    // We also need to check the currentStudent reaches the last student
    if (currentStudent != students) {
      // If this that means not everyone got a book
      // So even in this case answer exists at left only
      // But if we return false;
      // It will make the BS look at the right subarray
      // So even if this solution is not correct since the correct one is at left
      // And in order to move left you have to return true
      return true;
    }
    // ***************************************************************

    return true;
  }
}

const solution = new Solution();
const result = solution.findPages([15, 10, 19, 10, 5, 18, 7], 7, 5);

console.log({
  result,
});
