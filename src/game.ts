export interface Frame {
    firstPipe: PipePair;
    secondPipe: PipePair;
    gameOver: boolean;
    gameStarted: boolean;
    width: number;
    height: number;
    score: number;
}

export interface PipePair {
    topPipe: Pipe;
    bottomPipe: Pipe;
    show: boolean;
    left: number;
    width: number;
}

export interface Pipe {
    top: number;
    height: number;
}

export class GameController {
    private frame: Frame;

    private velocity = 0;

    constructor(
        public readonly height = 800,
        public readonly width = 400,
        public readonly pipeWidth = 50,
        public readonly pipeGap = 150,
        public readonly minTopForTopPipe = 70,
        public readonly maxTopForTopPipe = 350
    ) {
    }


    public newGame() {
        let firstPipe = this.createPipe(true);
        let secondPipe = this.createPipe(false);
        this.frame = {
            firstPipe,
            secondPipe,
            score: 0,
            width: this.width,
            height: this.height,
            gameOver: false,
            gameStarted: false
        }
        return this.frame;
    }

    private randomYForTopPipe(): number {
        return (
            this.minTopForTopPipe + (this.maxTopForTopPipe - this.minTopForTopPipe) * Math.random()
        )
    }

    private createPipe(show: boolean): PipePair {
        const height = this.randomYForTopPipe();

        return {
            topPipe: {
                top: 0,
                height,
            },
            bottomPipe: {
                top: height + this.pipeGap,
                height: this.height,
            },
            left: this.width - this.pipeWidth,
            width: this.pipeWidth,
            show,
        };
    }


}
