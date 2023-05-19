const { checkWinner } = require("./computerTurn");

const yBoard = [
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, "p"],
    [null, null, null, null, null, null, null, null, null, null, null, "p"],
    [null, null, null, null, null, null, null, null, null, null, null, "p"],
    [null, null, null, null, null, null, null, null, null, null, null, "p"],
    ["p", null, null, null, null, null, null, null, null, null, null, null],
];

const xBoard = [
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, "c"],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, "p", "p", "p", "p", null, null, null, null, null, "c"],
    ["p", null, null, null, null, null, null, null, null, null, null, "c"],
];

const nullBoard = [
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, "c"],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, "p", "p", null, "p", null, null, null, null, null, "c"],
    ["p", null, null, null, null, null, null, null, null, null, null, "c"],
];

const xBoardLastLine = [
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, "c"],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, "p", "p", null, "p", null, null, null, null, null, "c"],
    ["p", null, null, null, null, null, null, null, "p", "p", "p", "p"],
];

const yBoardLastLine = [
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

const backslashDiaganol = [
    [null, null, "c", null, null, null, null, null, null, null, null, null],
    [null, null, null, "c", null, null, null, null, null, null, null, null],
    [null, null, null, null, "c", null, null, null, null, null, null, null],
    [null, null, null, null, null, "c", null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
];

const forwardslashDiaganol = [
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, "c", null, null, null, null, null, null, null, null],
    [null, null, "c", null, null, null, null, null, null, null, null, null],
    [null, "c", null, null, null, null, null, null, null, null, null, null],
    ["c", null, null, null, null, null, null, null, null, null, null, null],
];

const forwardslashDiaganol2 = [
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, "c"],
    [null, null, null, null, null, null, null, null, null, null, "c", null],
    [null, null, null, null, null, null, null, null, null, "c", null, null],
    [null, null, null, null, null, null, null, null, "c", null, null, null],
];

const tie = [
    ["c", "p", "c", "p", "c", "p", "c", "p", "c", "p", "c", "p"],
    ["c", "p", "c", "p", "c", "p", "c", "p", "c", "p", "c", "p"],
    ["c", "p", "c", "p", "c", "p", "c", "p", "c", "p", "c", "p"],
    ["p", "c", "p", "c", "p", "c", "p", "c", "p", "c", "p", "c"],
    ["p", "c", "p", "c", "p", "c", "p", "c", "p", "c", "p", "c"],
    ["p", "c", "p", "c", "p", "c", "p", "c", "p", "c", "p", "c"],
    ["c", "p", "c", "p", "c", "p", "c", "p", "c", "p", "c", "p"],
    ["c", "p", "c", "p", "c", "p", "c", "p", "c", "p", "c", "p"],
    ["c", "p", "c", "p", "c", "p", "c", "p", "c", "p", "c", "p"],
    ["p", "c", "p", "c", "p", "c", "p", "c", "p", "c", "p", "c"],
    ["p", "c", "p", "c", "p", "c", "p", "c", "p", "c", "p", "c"],
    ["p", "c", "p", "c", "p", "c", "p", "c", "p", "c", "p", "c"],
];

describe("checkWinner", () => {
    it("Correctly finds a winner on the Y axis", () => {
        // Group all Y tests in here
        expect(checkWinner(yBoard)).toBe("p");
        expect(checkWinner(yBoardLastLine)).toBe("c");
    });

    it("Correctly finds a winner on the X axis", () => {
        expect(checkWinner(xBoardLastLine)).toBe("p");
        expect(checkWinner(xBoard)).toBe("p");
    });

    it("Correctly returns null if a winner is not found", () => {
        expect(checkWinner(nullBoard)).toBe(null);
    });

    it("Correctly finds a winner diaganolly", () => {
        expect(checkWinner(backslashDiaganol)).toBe("c");
        expect(checkWinner(forwardslashDiaganol)).toBe("c");
        expect(checkWinner(forwardslashDiaganol2)).toBe("c");
    });

    it("Correctly returns tie if there is no more null spots, and no winner is found", () => {
        expect(checkWinner(tie)).toBe("tie");
    })
});
