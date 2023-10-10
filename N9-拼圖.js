const gameContainer = document.getElementById("game-container");
const pieces = [...Array(16).keys()];
const winningOrder = [...Array(16).keys()];
const resultDiv = document.getElementById("result");
win = 0;

// Set the seed for the random number generator
const seed = "gogogogo";
const random = new Math.seedrandom(seed);

// Shuffle the pieces using the seeded random number generator
pieces.sort(() => random() - 0.5);

pieces.forEach((piece, index) => {
    const pieceElement = document.createElement("div");
    pieceElement.classList.add("piece");
    pieceElement.addEventListener("click", () => {
        movePiece(index);
    });

    const img = document.createElement("img");
    img.src = `imagesN9/${piece + 1}.png`;
    pieceElement.appendChild(img);

    gameContainer.appendChild(pieceElement);
});

function movePiece(pieceIndex) {
    if (isMoveValid(pieceIndex)) {
        const emptyIndex = pieces.indexOf(15);
        [pieces[pieceIndex], pieces[emptyIndex]] = [pieces[emptyIndex], pieces[pieceIndex]];
        updateUI();
        checkWin();
    }
}

function isMoveValid(pieceIndex) {
    return true; // 允許任何拼圖移動到任何空位
}

function updateUI() {
    const pieceElements = document.querySelectorAll(".piece");
    pieceElements.forEach((pieceElement, index) => {
        const img = pieceElement.querySelector("img");
        img.src = `imagesN9/${pieces[index] + 1}.png`;
    });
}

function checkWin() {
    if (JSON.stringify(pieces) === JSON.stringify(winningOrder)) {
        win = 1;
    }
}

const confirmButton1 = document.getElementById('confirmButton1');
confirmButton1.addEventListener('click', () => {
  if (win === 1) {
    window.location.href = "page05-N9.html"
  }
  else {
    resultDiv.textContent = "好像不太正確耶...";
  }
});
