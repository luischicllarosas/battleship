<script setup lang="ts">
    const rows = ['A','B','C','D','E','F','G','H','I','J']
    const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
</script>

<template>
    <div class="board">
        <!-- <div class="my-board"> -->
            <!-- <div class="box has-background-info" v-for="row in 25" :key="row"></div> -->
            <div v-for="col in cols" :key="col">
                <div class="box has-background-info" v-for="row in rows" :key="row">
                    {{ row }} - {{ col }}
                </div>

            </div>
        <!-- </div> -->
        <!-- <div class="my-board">
            <div class="box has-background-info" v-for="row in 25" :key="row"></div>
        </div> -->
        <!-- <div class="enemy-board">
            <div class="box has-background-danger" v-for="row in 25" :key="row"></div>
        </div> -->
    </div>
</template>
<style lang="scss" scoped>
.board{
    // width: 100vw;
    display: grid;
    // grid-template-columns: 1fr 1fr;
    // .my-board{
        // .my-board, .enemy-board{
        margin: 0 auto;
        display:grid;
        grid-template-columns: repeat(10, 50px);
        grid-template-rows: repeat(10, 50px);
    // }
    .box{
        display:grid;
        place-content: center;
        // text-align: center;
        
    }
}
</style>