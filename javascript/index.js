// variable tied to a specific id element in my html file
let saveEl = document.getElementById('save-el')
// a second variable tied to a specific id element in my html file
let countEl = document.getElementById('count-el')
// global variable set to 0 to allow me to count something
let count = 0

// a function that adds 1 to the 'count' variable
function increment() {
    // nice way of shortening 'count = count + 1'
    count += 1
    countEl.textContent = count
}

// a function that first creates a variable which ties together the current 'count'...
// variable and a str for prsentation reasons
// it then uses a method on a variable i created earlier to add the first variable
// written inside the function to a visible html element
// it then resets my html kill counter element to 0 by accessing it through a variable
// tied to my hmtl file
// it then resets global count variable to 0, as the previous entry has now been saved visually
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
