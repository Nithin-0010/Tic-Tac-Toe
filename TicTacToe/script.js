let btn = document.querySelectorAll(".btn");
let userO = true;
let msgContainer = document.querySelector(".msg-container");
let para = document.querySelector("#msg");
let resetBtn = document.getElementById("resetGame");
let newGameBtn = document.getElementById("newGame");
let count = 0;

const winnerPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [6, 4, 2]
];

const resetGame = () => {
    userO = true;
    msgContainer.classList.add("hide");
    enableButtons();
};


for(let butn of btn) {
    butn.addEventListener("click", () => {
        count++;

        if(userO) {
            butn.innerText = "O";
            butn.classList.add("color");
            userO = false;
        }else {
            butn.innerText = "X";
            butn.classList.remove("color");
            userO = true; 
        }
        
        butn.disabled = true;

        if(checkWinner()) {
            return
        }

        tiedMatch(count);
    });
}


const  checkWinner =() => {

    for(let pattern of winnerPattern) {
        
        let pattern1Value = btn[pattern[0]].innerText;
        let pattern2Value = btn[pattern[1]].innerText;
        let pattern3Value = btn[pattern[2]].innerText;

        if(pattern1Value != "" && pattern2Value != "" && pattern3Value != "") {

            if(pattern1Value === pattern2Value && pattern2Value === pattern3Value) {
                showWinner(pattern1Value);
                return true;
            }
        }
    }

    return false;
};

const showWinner = (pattern1Value) => {

    disbleButtons();

    if(userO) {
        para.innerText = `Winner is ${pattern1Value}`;
        para.style.color = "#344e41";
        msgContainer.classList.remove("hide");
    }else{
        para.innerText = `Winner is ${pattern1Value}`;
        para.style.color = "#b44418";
        msgContainer.classList.remove("hide");
    }
};

const tiedMatch = (count) => {

    if(count === 9) {
        disbleButtons();
        para.innerText = `Game Tied`;
        msgContainer.classList.remove("hide");
    }
}

const disbleButtons = () => {
    count = 0;

    for(let button of btn) {
        button.disabled = true;
    }
};

const enableButtons = () => {
    for(let button of btn) {
        button.disabled = false;
        button.innerText = "";
    }
};

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);