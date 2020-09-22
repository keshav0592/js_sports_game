
let Reset = document.querySelector("#reset-button");
let team1 = document.querySelector("#teamone-shoot-button");
let team2 = document.querySelector("#teamtwo-shoot-button");
let resetNum = document.querySelector("#num-resets")
let numsofreset = document.querySelector("#num-resets");
let team1noshots = document.querySelector("#teamone-numshots");
let team2noshots = document.querySelector("#teamtwo-numshots");


var audio = new Audio("./assets/audio/Crowd Boo 1-SoundBible.com-437793776.mp3")
var audio1 = new Audio("./assets/audio/Soccer Goal in Spanish (1).mp3")
let team1ShotTaken = 0;
let goal1 = 0;
let team1Goal = document.querySelector("#teamone-numgoals")
team1.addEventListener("click", function() {
    team1ShotTaken += 1;
    team1noshots.innerHTML = team1ShotTaken;
    audio.play();
    if (Math.random()>.7){
        goal1 +=1;
        team1Goal.innerHTML = goal1;
        audio1.play()
    }
})
let team2ShotTaken = 0;
let team2Goal = document.querySelector("#teamtwo-numgoals")
let goal2 = 0;
team2.addEventListener("click", function() {
    team2ShotTaken += 1;
    team2noshots.innerHTML = team2ShotTaken;
    audio.play();
    if (Math.random()>.7){
        goal2 +=1;
        team2Goal.innerHTML = goal2;
        audio1.play()
    }
})


let resetCount = 0;
Reset.addEventListener("click", function() {
    // console.log("Reset clicked");
    // let Reset = Number(numsofreset.innerHTML) +1;
    // numsofreset.innerHTML = Reset;
    if( team2ShotTaken=== 0 || team1ShotTaken===0){
        alert("Game haven't started yet!")
    }
    else{       
        if(goal1 > goal2){
            alert("Congrats! Team1 Won!");
        }
        else if(goal2 > goal1){
            alert("Congrats! Team2 Won!");
        }
        else{
            alert("Draw");
        }
        resetCount += 1
        resetNum.innerHTML = resetCount;
        team1noshots.innerHTML = 0;
        team2noshots.innerHTML=0;
        team2Goal.innerHTML=0;
        team1Goal.innerHTML=0;
    
        team2ShotTaken=0;
        team1ShotTaken=0;
        goal2=0;
        goal1 = 0;
    }
})