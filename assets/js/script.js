// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let dateDisplay = document.querySelector("#currentDay");
let date =dayjs().format('MMM DD, YYYY');
dateDisplay.append(date);
let currentHour = "hour-" + dayjs().format('hh');

let timeBlockEl = document.getElementsByClassName("time-block");
console.log(timeBlockEl);

let militaryTime = new Date().getHours();
console.log(militaryTime)


for (let i = 0; i < timeBlockEl.length; i++) {
  let timeBlock = timeBlockEl[i];
  console.log(timeBlock);
  
  let time = timeBlock.getAttribute("data-time");
  console.log(time)
  
  if (time < militaryTime){
    timeBlock.classList.add("past");
  }else if (time == militaryTime){
    timeBlock.classList.add("present")
  }else{
    timeBlock.classList.add("future");
  }
};


let saveBtnEl = document.getElementsByClassName("saveBtn");
console.log(saveBtnEl);

let textAreas = document.getElementsByClassName("description");
console.log(textAreas)

for (let i = 0; i < saveBtnEl.length; i++) {
  saveBtnEl[i].addEventListener("click", function (event) {
    console.log(saveBtn[i]);
    let target = event.target;
    let timeEl = target.getAttribute("data-time");
    let textArea = document.querySelector("textArea");

  });
}








  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.;
