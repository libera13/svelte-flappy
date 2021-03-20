export interface Frame {
    firstPipe: PipePair;
    secondPipe: PipePair;
    gameOver: boolean;
    bird: Bird;
    gameStarted: boolean;
    width: number;
    height: number;
    score: number;
    ground: Ground;
}
export interface Bird {
    top: number;
    left:number;
    size: number;
}

export interface Ground {
    height: number;
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
        public readonly maxTopForTopPipe = 350,
        public readonly generateNewPipePercent = 0.7,
        public readonly speed = 1,
        public readonly groundHeight = 20,
        public readonly birdX = 40,
        public readonly birdSize = 20,
        public readonly gravity = 1.5,
        public readonly jumpVelocity = 10,
        public readonly slowVelocityBy = 0.23
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
            gameStarted: false,
            ground: {
                height: this.groundHeight
            },
            bird: {
                left: this.birdX,
                top: this.height / 2 - this.birdSize / 2,
                size: this.birdSize,
            },
        }
        return this.frame;
    }

    private randomYForTopPipe(): number {
        return (
            this.minTopForTopPipe + (this.maxTopForTopPipe - this.minTopForTopPipe) * Math.random()
        )
    }

    public nextFrame() {

        this.frame.firstPipe = this.movePipe(
            this.frame.firstPipe,
            this.frame.secondPipe
        );
        this.frame.secondPipe = this.movePipe(
            this.frame.secondPipe,
            this.frame.firstPipe
        );

        return this.frame;
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

    private movePipe(pipe: PipePair, otherPipe: PipePair) {
        if (pipe.show && pipe.left <= this.pipeWidth * -1) {
            pipe.show = false;
            return pipe;
        }

        if (pipe.show) {
            pipe.left -= this.speed;
        }

        if (
            otherPipe.left < this.width * (1 - this.generateNewPipePercent) &&
            otherPipe.show &&
            !pipe.show
        ) {
            return this.createPipe(true);
        }

        return pipe;
    }

}
