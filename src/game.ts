export interface Frame {
    gameOver: boolean;
    gameStarted: boolean;
    width: number;
    height: number;
    score: number;
}

export class GameController {
    private frame: Frame;

    private velocity = 0;

    constructor(public readonly height = 800, public readonly width = 400) {
    }


    public newGame() {

        this.frame = {
            score: 0,
            width: this.width,
            height: this.height,
            gameOver: false,
            gameStarted: false
        }
        return this.frame;
    }


}
