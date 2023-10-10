const gameContainer = document.getElementById("game-container");
const pieces = [...Array(16).keys()];
const winningOrder = [...Array(16).keys()];
const resultDiv = document.getElementById("result");
win = 0;

// Set the seed for the random number generator
const seed = "owowowo";
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
    img.src = `images/${piece + 1}.png`;
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
    const emptyIndex = pieces.indexOf(15);
    const rowDiff = Math.abs(Math.floor(pieceIndex / 4) - Math.floor(emptyIndex / 4));
    const colDiff = Math.abs(pieceIndex % 4 - emptyIndex % 4);
    return (rowDiff === 0 && colDiff === 1) || (rowDiff === 1 && colDiff === 0);
}

function updateUI() {
    const pieceElements = document.querySelectorAll(".piece");
    pieceElements.forEach((pieceElement, index) => {
        const img = pieceElement.querySelector("img");
        img.src = `images/${pieces[index] + 1}.png`;
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
    window.location.href = "page02-B3.html";
  }
  else {
    resultDiv.textContent = "好像不太正確耶...";
  }
});
