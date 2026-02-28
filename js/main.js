console.log("JavaScript File is linked");

// QueryselectorALL for multiple things, and select everything with the class "label"
const labels = document.querySelectorAll(".label");
const targetZones = document.querySelectorAll('.target-zone');
let currentDraggedElement = null;
//Add variable for reset button
//add variable for label box div
const resetBttn = document.querySelector(".reset-btn");
const labelBox = document.querySelector("#label-box");



//Functions
function dragStart() {
    console.log("Started Dragging");
    //when the user starts to drag something, it saves in currentDraggedElement
    currentDraggedElement = this;
}

function dragOver(e) {
    e.preventDefault();
    console.log("drag over called");
}

function dropped(e) {
    e.preventDefault();
    console.log("dropped");

    //prevent double drops here
    //if this dropzone has a child, dont let.another child drop
    //use a return statement!
    //if this has children element, and it is greater than or equal to one then return current child trying to be placed
    if(this.children.length>=1) {
        return;
    }


    //drop the piece in
    this.append(currentDraggedElement);

    //reset the reference
    currentDraggedElement = null;
}


//reset funciton

// function resetPuzzle() {
// targetZones.forEach(zone => {
//     const labelCon = document.getElementsByClassName("labelboxes");
//     let child = zone.firstElementChild;
// if (child) {
//     labelCon[0].appendChild(child);
// }
// });
// }

function resetPuzzle() {
    targetZones.forEach(zone => {
   
    if(zone.firstElementChild) {

        labelBox.appendChild(zone.firstElementChild);
    }
    });
}




//Event Listeners 
//For everything in the labels container, it will create a temporary variable called label and then we add an event listener when we start dragging, when that happens we call the function dragStart
labels.forEach(label => {
    label.addEventListener("dragstart", dragStart);
});

targetZones.forEach(zone => {
    zone.addEventListener("dragover", dragOver);
    zone.addEventListener("drop", dropped);
});


//add event listener for the reset button
//listen for the click event, call a reset function
resetBttn.addEventListener("click", resetPuzzle);
