// updated to jquery to shorten code
let dateDisplay = $("#currentDay");
let date =dayjs().format('MMM DD, YYYY');
let timeBlockEl = $(".time-block");
// console.log(timeBlockEl);
let militaryTime = new Date().getHours();
// console.log(militaryTime)
let textArea = $(".description");
let saveBtnEl = $(".saveBtn")
dateDisplay.append(date);

// turned into function you can call to comment out if necessary and make more dynamic
timeCheck();
function timeCheck(){
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
}
// separated event listener from local storage set and get methods (more dynamic)
function clickHandler(event){
  event.target
  // console.log(event.target)
  localStorage.setItem(this.getAttribute('data-time'), $(this).siblings('.description').val());

  location.reload(); 
}
saveBtnEl.on("click", clickHandler);

// textArea[i]: use this syntax to reduce length of code. instead of textArea[0], textArea[1, etc]
function renderStorage(){
  for (let i = 0; i < textArea.length; i++) {
    console.log(textArea[i].dataset.time)
    let storedText = localStorage.getItem(textArea[i].dataset.time);
 
    if (storedText === null){
      textArea[i].value = ''
      }
      else {
      textArea[i].value = storedText
    }
  }
};

// added clear local storage btn
let clearSearch = $("#clearBtn");
function clearBtn(event){
  event.target
  console.log(event.target)
  localStorage.clear();
  location.reload();
}

clearSearch.on('click', clearBtn)

renderStorage()
