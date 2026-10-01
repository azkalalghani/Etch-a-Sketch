const container = document.querySelector('#container');

const resetBtn = document.querySelector("#reset-btn");

function createGrid(size) {
    container.innerHTML = "";

    const totalSquares = size * size;
    const squarePercentage = 100 / size;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        
        square.style.width = `${squarePercentage}%`;
        square.style.height = `${squarePercentage}%`;

        square.addEventListener("mouseenter", () => {
            // square.classList.add("colored");

            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);

            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });

        container.appendChild(square);
    }
}

resetBtn.addEventListener("click", () => {
    let userInput = prompt("Enter squares per side (1 - 100: ");

    if (userInput === null) return;

    let size = parseInt(userInput);

    if (isNaN(size) || size < 1 || size > 100) {
        alert("Please enter a valid number between 1 and 100!");
    } else {
        createGrid(size);
    }
});

createGrid(16)
