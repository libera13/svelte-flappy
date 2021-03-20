<script lang="ts">
    import {GameController} from "../game";
    import Pipe from "./Pipe.svelte";

    const game = new GameController();
    let frame = game.newGame()
</script>

<style>
    main {
        position: relative;
        border: 1px solid black;
        overflow: hidden;
        background-color: lightblue;
    }
</style>

<main style="width: {frame.width}px; height: {frame.height}px;"
      class="game">
    <Pipe pipe="{frame.firstPipe}"/>
    <Pipe pipe="{frame.secondPipe}"/>
</main>
