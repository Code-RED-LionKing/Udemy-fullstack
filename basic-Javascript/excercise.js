//1) Creat 3 new variables

let courseName = "Web Development - The Complete Guide";
let cousrsePrice = 10000;
let courseGoals = [
  "Learn Web Development",
  "Become a web Develpoper",
  "Have fun!",
];

// 2 ) Output ("alert") the 3 variable values

alert(courseName);
alert(cousrsePrice);
alert(courseGoals);

//3) Try "Grouping" the three variables together

let onlineCourse = {
  name: courseName,
  pirce: 10000,
  goals: ["Learn Web Development", "Become a web Develpoper", "Have fun!"],
};

alert(onlineCourse.name);
alert(onlineCourse.pirce);
alert(onlineCourse.goals);


//4) Also output the second element in youyr "main goals" variable

alert(onlineCourse.goals[1]);


//5) Add a custom command that does the following

function getListItem(array, arryIndex) {
    let arrayElement = array[arrayIndex];
    return arrayElement;
}

//6) Excute your custom command from (5) and output("alert") the result

let firstGoal = getListItem(onlineCourse.goals, 0);
alert(firstGoal);

