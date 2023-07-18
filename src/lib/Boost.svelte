<script>
    export let percent = 80;

    $: console.log(percent);
</script>

<div class="boost bg">
    <div class="boost" style="width: {percent}%"></div>
</div>

<style>
    .boost {
        position: relative;
        height: 50px;
        background-color: pink;
        transition: width 0.5s ease;
    }
    .bg {
        width: 300px;
        background-color: #000;
    }
</style>