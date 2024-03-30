/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  let index = 0;
  let validity = 0;
  let lastDayOfTravel = days[days.length - 1];
  let dp = Array(days.length + 1)
    .fill()
    .map(() => Array(lastDayOfTravel + 1).fill(null));

  let minCost = solve(days, costs, index, validity);
  return minCost;

  function solve(days, costs, index, validity) {
    // Base Case
    if (index >= days.length) return 0;

    // If your validity is more than the days[index] i.e currentDay
    if (validity >= days[index]) {
      // Current pass is still active
      return solve(days, costs, index + 1, validity);
    }

    // Check if dp already have the ans
    if (dp[index][validity] != null) {
      return dp[index][validity];
    }

    // Solving 1 case (processing)
    let Days1PassValidity = days[index];
    let costOnSelecting1DayPass =
      costs[0] + solve(days, costs, index + 1, Days1PassValidity);

    let Days7PassValidity = days[index] + (7 - 1);
    let costOnSelecting7DayPass =
      costs[1] + solve(days, costs, index + 1, Days7PassValidity);

    let Days30PassValidity = days[index] + (30 - 1);
    let costOnSelecting30DayPass =
      costs[2] + solve(days, costs, index + 1, Days30PassValidity);

    // Returning output
    dp[index][validity] = Math.min(
      costOnSelecting1DayPass,
      costOnSelecting7DayPass,
      costOnSelecting30DayPass
    );
    return dp[index][validity];
  }
};

// This also works on 1D dp implementation
/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */

var mincostTickets = function (days, costs) {
  let index = 0;
  let validity = 0;
  // let lastDayOfTravel = days[days.length - 1];
  let dp = Array(days.length + 1).fill(null);

  let minCost = solve(days, costs, index, validity);
  return minCost;

  function solve(days, costs, index, validity) {
    // Base Case
    if (index >= days.length) return 0;

    // If your validity is more than the days[index] i.e currentDay
    if (validity >= days[index]) {
      // Current pass is still active
      return solve(days, costs, index + 1, validity);
    }

    // Check if dp already have the ans
    if (dp[index] != null) {
      return dp[index];
    }

    // Solving 1 case (processing)
    let Days1PassValidity = days[index];
    let costOnSelecting1DayPass =
      costs[0] + solve(days, costs, index + 1, Days1PassValidity);

    let Days7PassValidity = days[index] + (7 - 1);
    let costOnSelecting7DayPass =
      costs[1] + solve(days, costs, index + 1, Days7PassValidity);

    let Days30PassValidity = days[index] + (30 - 1);
    let costOnSelecting30DayPass =
      costs[2] + solve(days, costs, index + 1, Days30PassValidity);

    // Returning output
    dp[index] = Math.min(
      costOnSelecting1DayPass,
      costOnSelecting7DayPass,
      costOnSelecting30DayPass
    );
    return dp[index];
  }
};

// Tabular
var mincostTickets = function (days, costs) {
  let index = 0;
  let validity = 0;
  // let lastDayOfTravel = days[days.length - 1];
  let dp = Array(days.length + 1).fill(null);

  dp[days.length] = 0;

  for (let index = days.length - 1; index >= 0; index--) {
    // Solving 1 case (processing)
    // let Days1PassValidity = days[index];
    let costOnSelecting1DayPass = costs[0] + dp[index + 1]; // solve(days, costs, index + 1, Days1PassValidity);

    // let Days7PassValidity = days[index] + (7 - 1);
    let costOnSelecting7DayPass = costs[1] + dp[index + 1]; // solve(days, costs, index + 1, Days7PassValidity);

    // let Days30PassValidity = days[index] + (30 - 1);
    let costOnSelecting30DayPass = costs[2] + dp[index + 1]; // solve(days, costs, index + 1, Days30PassValidity);

    // Returning output
    dp[index] = Math.min(
      costOnSelecting1DayPass,
      costOnSelecting7DayPass,
      costOnSelecting30DayPass
    );
  }

  function solve(days, costs, index, validity) {
    // Base Case
    if (index >= days.length) return 0;

    // If your validity is more than the days[index] i.e currentDay
    if (validity >= days[index]) {
      // Current pass is still active
      return solve(days, costs, index + 1, validity);
    }

    // Check if dp already have the ans
    if (dp[index] != null) {
      return dp[index];
    }

    // Solving 1 case (processing)
    let Days1PassValidity = days[index];
    let costOnSelecting1DayPass =
      costs[0] + solve(days, costs, index + 1, Days1PassValidity);

    let Days7PassValidity = days[index] + (7 - 1);
    let costOnSelecting7DayPass =
      costs[1] + solve(days, costs, index + 1, Days7PassValidity);

    let Days30PassValidity = days[index] + (30 - 1);
    let costOnSelecting30DayPass =
      costs[2] + solve(days, costs, index + 1, Days30PassValidity);

    // Returning output
    dp[index] = Math.min(
      costOnSelecting1DayPass,
      costOnSelecting7DayPass,
      costOnSelecting30DayPass
    );
    return dp[index];
  }
};
