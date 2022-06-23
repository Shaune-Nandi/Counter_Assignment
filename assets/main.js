const button5 = document.querySelector("#plusFive");
const button10 = document.getElementById("plusTen");
const button15 = document.getElementById("plusFifteen");
const button20 = document.getElementById("plusTwenty");

const indicator = document.querySelector("#number-indicator")
const disp = document.querySelector("#display-heading")

// Arrow fn
button5.addEventListener('click', () => {
  disp.textContent = "added 5"
  indicator.textContent = (parseInt(indicator.textContent) + 5).toString()
})

button10.addEventListener('click', () => {
  disp.textContent = "added 10"
  indicator.textContent = (parseInt(indicator.textContent) + 10).toString()
})


// Normal fn
button15.addEventListener('click', function add_15(){
  disp.textContent = "added 15"
  indicator.textContent = (parseInt(indicator.textContent) + 15).toString()
})

button20.addEventListener('click', function add_20(){
  disp.textContent = "added 20"
  indicator.textContent = (parseInt(indicator.textContent) + 20).toString()
})