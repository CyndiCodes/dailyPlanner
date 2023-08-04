// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let dateDisplay = document.querySelector("#currentDay");
let date =dayjs().format('MMM DD, YYYY');
dateDisplay.append(date);
let currentHour = "hour-" + dayjs().format('hh');

let timeBlockEl = document.getElementsByClassName("time-block");
// console.log(timeBlockEl);

let militaryTime = new Date().getHours();
// console.log(militaryTime)


for (let i = 0; i < timeBlockEl.length; i++) {
  let timeBlock = timeBlockEl[i];
  // console.log(timeBlock);
  
  let time = timeBlock.getAttribute("data-time");
  // console.log(time)
  
  if (time < militaryTime){
    timeBlock.classList.add("past");
  }else if (time == militaryTime){
    timeBlock.classList.add("present")
  }else{
    timeBlock.classList.add("future");
  }
};
saveInput();
function saveInput(){
  let savedList = JSON.parse(localStorage.getItem("hourlyAgenda"));
  
  let saveBtnEl = document.getElementsByClassName("saveBtn") || 0;
  
  for (let i = 0; i < saveBtnEl.length; i++) {
    saveBtnEl[i].addEventListener("click", function (event) {
      event.preventDefault();
      console.log(saveBtnEl[i]);
      let textAreas = document.querySelectorAll("#description");
      
      let hourlyAgenda = {
        hour9: textAreas[0].value.trim(),
        hour10: textAreas[1].value.trim(),
        hour11: textAreas[2].value.trim(),
        hour12: textAreas[3].value.trim(),
        hour13: textAreas[4].value.trim(),
        hour14: textAreas[5].value.trim(),
        hour15: textAreas[6].value.trim(),
        hour16: textAreas[7].value.trim(),
        hour17: textAreas[8].value.trim(),
      }
      
      textAreas.textContent = description;
      localStorage.setItem("hourlyAgenda", JSON.stringify(hourlyAgenda));
      
    });
    
    if(savedList !== null){
    let textAreas = document.querySelectorAll("#description");
    // asked chatGPT to type this out for me instead of typing one by one. 
    textAreas[0].value = savedList.hour9;
    textAreas[1].value = savedList.hour10;
    textAreas[2].value = savedList.hour11;
    textAreas[3].value = savedList.hour12;
    textAreas[4].value = savedList.hour13;
    textAreas[5].value = savedList.hour14;
    textAreas[6].value = savedList.hour15;
    textAreas[7].value = savedList.hour16;
    textAreas[8].value = savedList.hour17;
    }

  }

}


// let renderList = JSON.parse(localStorage.getItem("textArea"));




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
