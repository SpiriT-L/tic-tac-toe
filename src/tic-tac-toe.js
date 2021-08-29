  
class TicTacToe {
    constructor() {
        this.matrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.currentPlayerSymbol = 'x';
        this.steps = 0;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {

        if (!this.matrix[rowIndex][columnIndex]) {
            this.matrix[rowIndex][columnIndex] = this.currentPlayerSymbol;

            this.currentPlayerSymbol = this.currentPlayerSymbol === "x" ? "o" : "x";
            this.steps+=1;

        }
    }

    isFinished() {
        return this.noMoreTurns() || this.getWinner() ? true : false;
    }

    getWinner() {
        if (
            (this.matrix[0][0] === 'x' && this.matrix[0][1] === 'x' && this.matrix[0][2] === 'x') ||
            (this.matrix[1][0] === 'x' && this.matrix[1][1] === 'x' && this.matrix[1][2] === 'x') ||
            (this.matrix[2][0] === 'x' && this.matrix[2][1] === 'x' && this.matrix[2][2] === 'x') ||
            (this.matrix[0][0] === 'x' && this.matrix[1][0] === 'x' && this.matrix[2][0] === 'x') ||
            (this.matrix[0][1] === 'x' && this.matrix[1][1] === 'x' && this.matrix[2][1] === 'x') ||
            (this.matrix[0][2] === 'x' && this.matrix[1][2] === 'x' && this.matrix[2][2] === 'x') ||
            (this.matrix[0][0] === 'x' && this.matrix[1][1] === 'x' && this.matrix[2][2] === 'x') ||
            (this.matrix[0][2] === 'x' && this.matrix[1][1] === 'x' && this.matrix[2][0] === 'x')
        ) {
            return 'x';
        } else if (
            (this.matrix[0][0] === 'o' && this.matrix[0][1] === 'o' && this.matrix[0][2] === 'o') ||
            (this.matrix[1][0] === 'o' && this.matrix[1][1] === 'o' && this.matrix[1][2] === 'o') ||
            (this.matrix[2][0] === 'o' && this.matrix[2][1] === 'o' && this.matrix[2][2] === 'o') ||
            (this.matrix[0][0] === 'o' && this.matrix[1][0] === 'o' && this.matrix[2][0] === 'o') ||
            (this.matrix[0][1] === 'o' && this.matrix[1][1] === 'o' && this.matrix[2][1] === 'o') ||
            (this.matrix[0][2] === 'o' && this.matrix[1][2] === 'o' && this.matrix[2][2] === 'o') ||
            (this.matrix[0][0] === 'o' && this.matrix[1][1] === 'o' && this.matrix[2][2] === 'o') ||
            (this.matrix[0][2] === 'o' && this.matrix[1][1] === 'o' && this.matrix[2][0] === 'o')
        ) {
            return 'o';
        }
        return null;
    }

    noMoreTurns() {
        return this.steps === 9 ? true : false;
    }

    isDraw() {
        return !this.getWinner() && this.noMoreTurns() ? true : false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;