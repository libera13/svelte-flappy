<script lang="ts">
    import {GameController} from "../game";
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
</main>
