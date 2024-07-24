let gameSeq = [];
let userSeq = [];
let score = [];

let btns = ["red","green","yellow","blue"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let h3= document.querySelector("h3");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");
    started = true;

    levelUp();
  }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
        }, 250);
}

function levelUp() {
    userSeq=[];
  level++;
  h2.innerHTML = `Level ${level}`;

  let radIdx = Math.floor(Math.random()*3);
  let radColor = btns[radIdx];
  let radBtn = document.querySelector(`.${radColor}`);
  gameSeq.push(radColor);
  console.log(gameSeq);
  btnFlash(radBtn);
}
function ckeckAns(idx) {
    if (gameSeq[idx] === userSeq[idx]) {
        if (gameSeq.length==userSeq.length) {
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br>Press any key to start.`
        score.push(gameSeq.length-1);
        let highSc=Math.max(...score);
        h3.innerText =`Highest Score : ${highSc}`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor="cornsilk";
        },200)
        reset();
    }
}
function btnPress() {
    let btn = this;
    btnFlash(btn)
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    ckeckAns(userSeq.length-1);
};
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset() {
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
