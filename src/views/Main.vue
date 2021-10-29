<script setup lang="ts">
    import Header from '../components/Header.vue';
    import Tablero from '../components/Tablero.vue';
</script>
<template>
    <div>
        <Header class="my-header"/>
    </div>
    <div class="my-board">
        <Tablero />
    </div>
</template>

<style lang="scss" scoped>
.my-header{
    height: 150px;
}
.my-board{
    display: grid;
    place-content: center;
    height: calc(100% - 150px);
}
</style>