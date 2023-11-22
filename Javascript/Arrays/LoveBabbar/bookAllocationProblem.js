class BookAllocationProblem {
  usingBS(books, students) {
    if (students > books.length) return -1;
    let sum = 0;
    for (let i = 0; i < books.length; i++) {
      sum += books[i];
    }

    // The searchspace is between 0 --> sum
    let start = 0;
    let end = sum;
    let ans = -1;

    while (start <= end) {
      let mid = Math.floor(start + (end - start) / 2);
      // Now mid will become the max number of pages can be allocated to each student
      if (this.isPossibleSolution(books, students, mid)) {
        end = mid - 1; // As more solutions can exist at the left
        ans = mid;
      } else {
        start = mid + 1;
      }
    }

    return ans;
  }

  isPossibleSolution(books, students, atMax) {
    let currentStudent = 1;
    let pagesTillNow = 0;

    for (let i = 0; i < books.length; i++) {
      if (books[i] > atMax) {
        // Wrong : As cannot even assign this book to anyone because it will go beyond the atMax
        return false;
      }

      // If code reaches here check the pageSum
      pagesTillNow += books[i];
      if (pagesTillNow > atMax) {
        // Move to the next student
        currentStudent++;
        // For the next student currentBook : books[i] will be his first book
        pagesTillNow = books[i];
        if (currentStudent > students) {
          // Since code reaches here that means some pages crossed atMax
          // And when we took the book and tried to find the next student
          // We found that there was no next student
          return false;
        }
      }
    }

    return true;
  }
}

class PainterPartitionProblem {
  // GFG
}

const booksByPages = [12, 34, 67, 90];
let students = 2;
const solution = new BookAllocationProblem();
const testCase1 = solution.usingBS(booksByPages, students);
console.log({
  testCase1,
});
