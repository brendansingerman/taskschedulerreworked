
var hours = [
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
];
const saveBtns = document.getElementsByClassName("saveBtn");

var containerElement = document.getElementsByClassName("container");
[]
function populateTable() {
    if(localStorage.getItem("tasks")){
        var storage = JSON.parse(localStorage.getItem("tasks"))
        for (let i = 0; i < hours.length; i++) {
          containerElement[0].innerHTML += `<div class="row">
                  <h3 class="col-2 time-block hour">
                    ${hours[i]}:00
                  </h3>
                  <textarea class="col-8 ${checkClass(hours[i])}" id="${i}">
                 ${storage[i]}
                  </textarea>
                  <button class="col-2 saveBtn"> Save Task</button>
                </div>`;
        }    
    } else{
        var storage = []
        for (let i = 0; i < hours.length; i++) {
            containerElement[0].innerHTML += `<div class="row">
                    <h3 class="col-2 time-block hour">
                      ${hours[i]}:00
                    </h3>
                    <textarea class="col-8 ${checkClass(hours[i])}" id="${i}">
                   ${storage.push("")}
                    </textarea>
                    <button class="col-2 saveBtn"> Save Task</button>
                  </div>`;
          }   
          localStorage.setItem("tasks",JSON.stringify(storage))
    }
    
}

function checkClass(time) {
  var now = moment().hours();
  // for(let i=0;i<hours.length;i++){
  //     console.log(hours[i])
  // }
  if (time < now) {
    return "past";
  }
  // if(time >now)
  if (time == now) {
    return "present";
  }

  return "future";
}
window.onload = populateTable();
for (let i = 0; i < saveBtns.length; i++) {
  saveBtns[i].addEventListener("click", function (e){
    console.log(e.target)
    let textArea = document.getElementById(String(i))
    storage = JSON.parse(localStorage.getItem("tasks"))
    storage[i]= textArea.value
    localStorage.setItem("tasks", JSON.stringify(storage))
  });
  // saveBtn.addEventListener('click', function onClick() {
  //     console.log('clicked')
  // })
  // write function for sending to local storage when save is pressed, write function to pull from local storage if it exists
}

// function getStorageValue(i){

//     return ""
// }

// {
//     0: "",
//     1: "dishes"
// }

// ["", "dishes", "meeting", "","",""]