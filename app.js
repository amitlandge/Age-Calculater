let ageEle = document.querySelector(".age");
let calculate = document.querySelector(".calculate");
let container = document.querySelector(".container");

function getAge() {
  let dob = document.getElementById("dob").value;

  let split = dob.split("-");

  let getYear = split[0];

  let getMonth = split[1];
  let getDate = split[2];
  let ageDate = {
    year: Number(getYear),
    month: Number(getMonth),
    date: Number(getDate),
  };
  let currentDate = new Date();

  calcAge(currentDate, ageDate);
}

function calcAge(currDate, ageDate) {
  let age = currDate.getFullYear() - ageDate.year;

  let month = currDate.getMonth() - ageDate.month;

  let date = currDate.getDate() - ageDate.date;

  displayAge(age, month, date);
}

function displayAge(age, month, date) {
  
  if (age < 0) {
    alert("Please Enter Valid Date");
    return;
  } else if (age > 0) {
    document.getElementById("years").innerHTML = age;
    document.getElementById("months").innerHTML = Math.abs(month);
    document.getElementById("days").innerHTML = Math.abs(date);
    
  }
}
calculate.addEventListener("click", getAgeHandler);
function getAgeHandler() {
  getAge();
  displayAge();
}
