function makeRandomNumber(max , min){
    return Math.floor(Math.random() * (max - min) + min)
}
let randomNumber = makeRandomNumber(1,20)
let HP = document.getElementById("HP")
let guessButton = document.getElementById("btn")
let yard = document.getElementById("yard")
let gameMode = document.getElementById("mode")
let hpCount = 10

HP.innerHTML = hpCount

function handleMode(){
    hpCount = gameMode.value
    console.log(gameMode)
    HP.innerHTML = hpCount
}

guessButton.addEventListener("click",()=>{
    gameMode.disabled = true
    let inputArea = Number(document.getElementById("enterNumber").value)
    let message = document.getElementById("message")
    if(inputArea && inputArea >= 1 && inputArea <= 20){
        if(inputArea > randomNumber){
            if(hpCount <= 1){
                hpCount--
                HP.innerHTML = hpCount
                message.innerHTML = "You lost! You disappointed patrick"
                message.style.color = "red"
                yard.style.backgroundImage = "url('./Lost.jpeg')"
            }else{
                hpCount--
                console.log(hpCount)
                message.innerHTML = "to big try again"
                HP.innerHTML = hpCount
            }
        }else if(inputArea < randomNumber){
            if(hpCount <= 1){
                hpCount--
                HP.innerHTML = hpCount
                message.innerHTML = "You lost! You disappointed patrick"
                message.style.color = "red"
                yard.style.backgroundImage = "url('./Lost.jpeg')"
            }else{
                hpCount--
                console.log(hpCount)
                message.innerHTML = "to short try again!"
                HP.innerHTML = hpCount
            }
        }else{
            message.style.color = "gold"
            message.innerHTML = "You Won! Now Patrick is Happy"
            yard.style.backgroundImage = "url('./Win.jpeg')"
        }
    }
})

