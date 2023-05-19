const BOARD = [ // TODO: Make 12x12 NOT 10x10
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, "player", null, null, null, null],
];

let scores = {
    computer: 1,
    tie: 0,
    player: -1,
};

const checkWinner = (board) => {
    // TODO: Return scores key from whoever won
    // IDEAS: i < BOARD.length i += 4 for checking vertically and horizontally. Loop through X, if X (1,2,3,4) === same thing and not null.
    // Loop through Y, same thing if Y (1,2,3,4)
    // Diagonally, loop forward slash first, if ([0][i] = [1[i + 1]) or something?
    return 1;
};

const minimax = (board, isPlayer) => {
    const winner = checkWinner(board);

    if (winner) return winner;

    if (isPlayer) {
        for (let x = 0; x < board.length; x++) {
            for (let y = board.length; y > 0; y--) {
                if (board[y][x] === null) {
                    board[y][x] = "player";
                    let score = minimax(board, false);
                    board[y][x] = "";
                    if (score > bestScore) {
                        bestScore = score;
                        bestMove = { y: y, x: x };
                    }
                    // Continue and add to X, because you can't have a move over an empty spot
                    continue;
                }
            }
        }
    } else {
        for (let x = 0; x < board.length; x++) {
            for (let y = board.length; y > 0; y--) {
                if (board[y][x] === null) {
                    board[y][x] = "computer";
                    let score = minimax(board, true);
                    board[y][x] = "";
                    if (score > bestScore) {
                        bestScore = score;
                        bestMove = { y: y, x: x };
                    }
                    continue;
                }
            }
        }
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