let age = 32;
let number = 31;
let userName = " max";
let hobbies = ["sports", "Cooking", "Reading"];
alert(hobbies[0]);


// 3가지 같은배열 다른 표현방식.
let jobTitle = 'Develper';
let jobPlace = 'New York';
let jobSalary = 50000;

let job1 = { title: 'Developer', place: 'New York', Salary: 50000 };

let job2 = {
    title: 'developer',
    place: 'New York',
    Salary: 50000,
};

alert(job1.title);

let totalAdultYears;

function calculateAdultYears(userAge) {
    let result;
    result = userAge - 18
    return result
}

totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);

age =45
totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);

//Method

let person = {
    name : 'Max', //Property
    greet() { //Method
        console.log('Hello!');
    }
};

person.greet();




