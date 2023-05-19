const BOARD = [
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, "c"],
    [null, null, null, null, null, null, null, null, null, null, null, "c"],
    [null, null, "p", "p", null, "p", null, null, null, null, null, "c"],
    ["p", null, null, null, null, null, null, null, null, null, null, "c"],
];

let scores = {
    c: 1,
    tie: 0,
    p: -1,
};

const checkWinner = (board) => {
    // Horizontal
    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board.length - 3; x++) {
            // Might have to subtract 3 from x if it has undefined?
            if (
                board[y][x] !== null &&
                board[y][x] === board[y][x + 1] &&
                board[y][x] === board[y][x + 2] &&
                board[y][x] === board[y][x + 3]
            ) {
                return board[y][x];
            }
        }
    }
    // Vertical
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board.length - 3; y++) {
            if (
                board[y][x] !== null &&
                board[y][x] === board[y + 1][x] &&
                board[y][x] === board[y + 2][x] &&
                board[y][x] === board[y + 3][x]
            ) {
                return board[y][x];
            }
        }
    }
    // Diaganolly (backslash)
    for (let y = 0; y < board.length - 3; y++) {
        for (let x = 0; x < board.length - 3; x++) {
            if (
                board[y][x] !== null &&
                board[y][x] === board[y + 1][x + 1] &&
                board[y][x] === board[y + 2][x + 2] &&
                board[y][x] === board[y + 3][x + 3]
            ) {
                return board[y][x];
            }
        }
    }
    // Diaganolly (forwardslash)
    for (let y = board.length - 1; y >= 3; y--) {
        for (let x = 0; x < board[y].length - 3; x++) {
            if (
                board[y][x] !== null &&
                board[y][x] === board[y - 1][x + 1] &&
                board[y][x] === board[y - 2][x + 2] &&
                board[y][x] === board[y - 3][x + 3]
            ) {
                return board[y][x];
            }
        }
    }
    // Check for tie if no winners were found
    let isTie = true;
    for (let i = 0; i < board.length; i++) {
        if (board[i].includes(null)) {
            isTie = false;
            break;
        }
    }

    if (isTie) return "tie";

    return null; // Game is not over
};

const minimax = (board, isPlayer) => {
    const winner = checkWinner(board);

    if (winner) return scores[winner];

    if (isPlayer) {
        let bestScore = Infinity;

        for (let x = 0; x < board.length; x++) {
            for (let y = board.length; y > 0; y--) {
                if (board[y][x] === null) {
                    board[y][x] = "p";
                    let score = minimax(board, false);
                    board[y][x] = "";
                    if (score < bestScore) {
                        bestScore = score;
                    }
                    // Continue and add to X, because you can't have a move over an empty spot
                    continue;
                }
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;

        for (let x = 0; x < board.length; x++) {
            for (let y = board.length; y > 0; y--) {
                if (board[y][x] === null) {
                    board[y][x] = "c";
                    let score = minimax(board, true);
                    board[y][x] = "";
                    if (score > bestScore) {
                        bestScore = score;
                    }
                    continue;
                }
            }
        }
        return bestScore;
    }
};

const computerTurn = () => {
    // LOOP THROUGH X BACKWARDS
    let bestScore = -Infinity;
    let bestMove = null;
    const copyBoard = [...BOARD];
    for (let x = 0; x < copyBoard.length; x++) {
        for (let y = copyBoard.length; y > 0; y--) {
            if (copyBoard[y][x] === null) {
                copyBoard[y][x] = "computer";
                let score = minimax(copyBoard, true);
                copyBoard[y][x] = "";
                if (score > bestScore) {
                    bestScore = score;
                    bestMove = { y: y, x: x };
                }
                // Continue and add to X, because you can't have a move over an empty spot
                continue;
            }
        }
    }
};

module.exports = { checkWinner };
