let cards=[], sum=0
let isAlive=false, hasBlackjack=false
let player={
    name:"Anurag", chips:145
}
document.getElementById("player-details").textContent=player.name+": $"+player.chips
let displayOutcome =document.getElementById("outcome")
displayOutcome.textContent="Do you want to play a round?"
let message=""
function startGame(){
    let firstCard=setRandom()
    let secondCard=setRandom()
    sum=firstCard+secondCard
    isAlive=true
    cards=[firstCard, secondCard]
    renderGame()
}
function renderGame(){
    document.getElementById("cards").textContent="Cards: "
    for(let i=0;i<cards.length;i++){
        document.getElementById("cards").textContent+=cards[i]+" "
    }
    document.getElementById("sum").textContent="Sum: "+sum
    if (sum<=20){
        message="Do you want to draw a new card?"
    }else if (sum===21){
        message="You've got Blackjack!"
        hasBlackjack=true
    }else{
        message="You're out of the game!"
        isAlive=false
    }
    displayOutcome.textContent= message
}
function newCard(){
    if(isAlive===true && hasBlackjack===false){
        let card=setRandom()
        sum+=card
        cards.push(card)
        renderGame()
    }
}
function setRandom(){
    let randomCardDraw=Math.floor(Math.random()*13)+1 
    if(randomCardDraw===1){
        randomCardDraw=11
    }else if(randomCardDraw>10){
        randomCardDraw=10
    }
    return randomCardDraw
}