let button = document.querySelectorAll(".button")
let winner = document.querySelector(".winner")
let turn = false

const checkPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


button.forEach((item) => {
    item.addEventListener("click", () => {
        if (turn) {
            item.innerHTML = "X"
            turn = false
        }else{
            item.innerHTML = "O"
            turn = true
        }
        item.disabled = true
        hanleCheck()
    })
})

const hanleCheck = () => {
    for (let check of checkPatterns) {
        let check1 = button[check[0]].innerHTML
        let check2 = button[check[1]].innerHTML
        let check3 = button[check[2]].innerHTML
        if (check1 != '' && check2 != '' && check3 != '') {
            if (check1 === check2 && check2 === check3) {
                winner.innerHTML = `The Winner is ${check1}`
                
            }
        }
    }
}

const handleReset = () => {
    location.reload()
}