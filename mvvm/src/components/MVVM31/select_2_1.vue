<template>
    <div class="select_2">
        <div class="select_2_1">
            <ul>
                <router-link v-for="item in items" tag="li" v-bind:to="{name:'select_3' , query: {id_1: id_1,id_2: item.id}}">
                    {{item.name}}<span>&gt</span>
                </router-link>
            </ul>
            <!-- <button v-on:click="show">show</button> -->
        </div>
        <div class="select_2_1">
            <router-view />
        </div>
    </div>
</template>
<script>
import {data} from "./mm31_data.js"

export default{
    data(){
        return{
            items: [],
            id_1: "",
        }
    },
    mounted(){
        this.id_1 = this.$route.query.id_1;
        this.items = data()[this.id_1-1].children;
    },
    watch: {
        $route(){
            this.id_1 = this.$route.query.id_1;
            this.items = data()[this.id_1-1].children;
        }
    },
    methods: {
        show(){
            console.log(this.items[this.id_1].children);
        }
    }
}

</script>
<style>
.select_2{
    width: 100%;
    height: 100%;
    background-color: #eee;
}
.select_2_1{
    width: 50%;
    height: 100%;
    float: left;
}
.select_2 ul{
    list-style-type: none;
}
.select_2 li{
    padding: 10px;
    color: #aaa;
    cursor: pointer;
}
.select_2 span{
    float: right;
    margin-right: 10px;
}
</style>
