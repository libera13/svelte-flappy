<script lang="ts">
    import {GameController} from "../game";
    import Pipe from "./Pipe.svelte";
    import Bird from './Bird.svelte';

    const game = new GameController();
    let frame = game.newGame()

    setInterval(() => {
        frame = game.nextFrame();
    }, 1000 / 90);
</script>

<style>
    main {
        position: relative;
        border: 1px solid black;
        overflow: hidden;
        background-color: lightblue;
    }
    #ground {
        background-color: brown;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
    }
</style>

<main style="width: {frame.width}px; height: {frame.height}px;"
      class="game">
    <Bird bird={frame.bird} />
    <Pipe pipe="{frame.firstPipe}"/>
    <Pipe pipe="{frame.secondPipe}"/>
    <section style="height: {frame.ground.height}px;" id="ground" ></section>

</main>
