<template>
<div v-on:click="change_color" class="mvvm23" v-bind:class="{red:isRed,bule:!isRed}">

</div>
</template>

<script>
export default {
    data(){
        return{
            isRed: true,
        }
    },
    methods: {
        change_color(){
            this.isRed = !this.isRed;
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mvvm23{
    cursor: pointer;
    width: 100px;
    height: 100px;
    border: 1px solid #ddd;
    margin: auto;
}
.red{
    background-color: red;
}
.bule{
    background-color: blue;
}
</style>
