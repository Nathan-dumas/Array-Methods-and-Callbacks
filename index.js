import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
// console.log(fifaData);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */


/* RETURNS ONLY DATA WHERE STAGE = FINALS */

const getFinals = function (data) {
    const finalsArr = data.filter(function (item) {
        return item["Stage"] === "Final";
    });
    return finalsArr;
}
getFinals(fifaData);
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

const getYears = function (getFinalsCb){
    let finalsArr = [];
    getFinalsCb.forEach(function(item){
        finalsArr.push(item["Year"])
    });
    return finalsArr;
};

console.log(getYears(getFinals(fifaData)));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

const getWinners = function (getFinalsCb) {
    const winners = getFinalsCb.map(function (item) {
        if (item["Home Team Goals"] > item["Away Team Goals"]) {
            return item["Home Team Name"]
        } else if (item["Away Team Goals"] > item["Home Team Goals"]) {
            return item["Away Team Name"];
        }
    });
    return winners;
}
getWinners(getFinals(fifaData));
console.log(getWinners(getFinals(fifaData)));
/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

const getWinnersByYear = function (getWinnersCb, getYearsCb) {
    let winnersArr = [];
    for (let i = 0; i < getWinnersCb.length; i++) {
        winnersArr.push('In ' + getYearsCb[i] + ', ' + getWinnersCb[i] + ' won the world cup!');
    }
    return winnersArr;
}

console.log(getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData))));
/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const averageGoals = data.reduce(function(acc, item){
        return acc + item["Home Team Goals"] + item["Away Team Goals"];
    },0);
    return averageGoals;
};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, initials) {
    
};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
