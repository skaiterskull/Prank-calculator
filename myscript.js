let textdisplay = ""
const buttons = document.querySelectorAll('button')


buttons.forEach(btn => {
    btn.addEventListener('click', e => {
        if (btn.innerText === "AC") {
            return reset()
        }
        if (btn.innerText === 'C') {
            return clear()
        }
        if (btn.innerText === '=') {
            
         calculation()
         return textdisplay=""
        }
        textdisplay = textdisplay + btn.innerText
        display(textdisplay)
    })
})



const display = (toDisplay) => {
    const elm = document.getElementById("result")
    elm.innerText =  toDisplay || 0
}

const reset = () => {
    display("0.00")
    textdisplay=""
}

const resetAll = () => {
    textdisplay = ""
}

const clear = () => {  
    textdisplay = textdisplay.slice(0, -1)
    display(textdisplay)
}

const calculation = () => {
    const total = eval(textdisplay) + random()
    display(total)
}

const random = () => {
    const randomNumber = Math.floor(Math.random() * 10)
    return randomNumber < 3 ? randomNumber : 0;
}