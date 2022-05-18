// SHOWED EL
let phoneEl = document.querySelector(".phone-el")
let selectedRating = document.querySelector(".selected-rating")
let thankEl = document.querySelector(".thank-el")
let thankPEl = document.querySelector("#thankP-el")

// HIDDEN EL
let starEl = document.querySelector(".star")
let questionEl = document.querySelector(".question-el")
let pleaseEl = document.querySelector(".please-el")
let ratingEl = document.querySelector(".rating")
let submitEl = document.querySelector("#submit--btn")

// BUTTTON EL
let btn1 = document.querySelector(".rating--btn1")
let btn2 = document.querySelector(".rating--btn2")
let btn3 = document.querySelector(".rating--btn3")
let btn4 = document.querySelector(".rating--btn4")
let btn5 = document.querySelector(".rating--btn5")


btn1.addEventListener("click", function () {
    btn1 = (btn1.value)
    
    selectedRating.innerHTML = `<p id="selected">You selected ${btn1} out of 5</p>`
    console.log(selectedRating)
})

btn2.addEventListener("click", function () {
    btn2 = (btn2.value) 
    
    selectedRating.innerHTML = `<p id="selected">You selected ${btn2} out of 5</p>`
    console.log(selectedRating)
})

btn3.addEventListener("click", function () {
    btn3 = (btn3.value) 
    
    selectedRating.innerHTML = `<p id="selected">You selected ${btn3} out of 5</p>`
    console.log(selectedRating)
})

btn4.addEventListener("click", function () {
    btn4 = (btn4.value) 
    
    selectedRating.innerHTML = `<p id="selected">You selected ${btn4} out of 5</p>`
    console.log(selectedRating)
})

btn5.addEventListener("click", function () {
    btn5 = (btn5.value) 

    selectedRating.innerHTML = `<p id="selected">You selected ${btn5} out of 5</p>`
    console.log(selectedRating)
})

submitEl.addEventListener("click", function () {
    selectedRating

    phoneEl.style.display = 'block';          // Show
    selectedRating.style.display = 'block';          // Show
    thankEl.style.display = 'block';          // Show
    thankPEl.style.display = 'block';          // Show
    
    starEl.style.display = 'none';           // Hide
    questionEl.style.display = 'none';           // Hide
    pleaseEl.style.display = 'none';           // Hide
    ratingEl.style.display = 'none';           // Hide
    submitEl.style.display = 'none';           // Hide
})


phoneEl.style.display = 'none';           // Hide
selectedRating.style.display = 'none';           // Hide
thankEl.style.display = 'none';         // Hide
thankPEl.style.display = 'none';         // Hide


