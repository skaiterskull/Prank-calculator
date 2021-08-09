const buttons = document.querySelectorAll('button')

let textToDisplay = ""
buttons.forEach(btn => {
    btn.addEventListener("click", (e)=>{

        if(btn.innerText === "=") {
            return onTotal()
        }
        if(btn.innerText === "AC") {
            return resetDisplay()
        }
        if(btn.innerText === "C") {
            textToDisplay = textToDisplay.slice(0,-1)
            return display(textToDisplay)
        }
       
        textToDisplay += btn.innerText
        display(textToDisplay)
    })
})

// display in the screen
const display = toDisplay => {
    const elm = document.getElementById("result")
    elm.innerText =  toDisplay || 0
}



// do total

const onTotal = () => {
    const total = eval(textToDisplay) + randomVal()
    textToDisplay = null;
    display(total)
}

//reset display 

const resetDisplay = () => {
    display("0.00")
    textToDisplay=""
}

// generate random number

const randomVal = () => {
    const random = Math.floor(Math.random() * 10)
    return random < 3 ? random : 0;
}