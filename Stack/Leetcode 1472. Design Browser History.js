const { Stack } = require("./Stack");

class BrowserHistory {
  constructor(homepage) {
    this.history = new Stack();
    this.history.push(homepage);
    this.fwd = new Stack();
  }
  visit(url) {
    this.history.push(url);
    this.fwd.clear();
  }

  back(count) {
    while (count) {
      if (this.history.size() > 1) {
        let lostPage = this.history.peek();
        this.history.pop();
        // Save the lost page in fwd stack
        this.fwd.push(lostPage);
      }
      count--;
    }

    return this.history.peek();
  }

  forward(count) {
    while (count) {
      if (!this.fwd.isEmpty()) {
        let fwdPage = this.fwd.peek();
        this.fwd.pop();
        this.history.push(fwdPage);
      }
      count--;
    }
    return this.history.peek();
  }
}

let browserHistory = new BrowserHistory("leetcode.com");
browserHistory.visit("google.com"); // You are in "leetcode.com". Visit "google.com"
browserHistory.visit("facebook.com"); // You are in "google.com". Visit "facebook.com"
browserHistory.visit("youtube.com"); // You are in "facebook.com". Visit "youtube.com"
browserHistory.back(1); // You are in "youtube.com", move back to "facebook.com" return "facebook.com"
browserHistory.back(1); // You are in "facebook.com", move back to "google.com" return "google.com"
browserHistory.forward(1); // You are in "google.com", move forward to "facebook.com" return "facebook.com"
browserHistory.visit("linkedin.com"); // You are in "facebook.com". Visit "linkedin.com"
browserHistory.forward(2); // You are in "linkedin.com", you cannot move forward any steps.
browserHistory.back(2); // You are in "linkedin.com", move back two steps to "facebook.com" then to "google.com". return "google.com"
browserHistory.back(7); // You are in "google.com", you can move back only one step to "leetcode.com". return "leetcode.com"
