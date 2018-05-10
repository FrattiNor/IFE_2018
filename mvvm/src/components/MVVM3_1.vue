<template>
<div class="mm31">
    <div v-on:click="changeArrow" class="selecter">
        <span>请选择</span>
        <span class="arrow">&lt</span>
    </div>
    <div class="theSelect">
        <div class="theRouter">
            <router-view />
        </div>
        <div class="select_1">
            <ul>
                <router-link v-for="item in items" tag="li" v-bind:to="{name:'select_2_1' , query: {id_1: item.id}}">
                    {{item.name}}<span>&gt</span>
                </router-link>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import {data} from "./MVVM31/mm31_data.js"

export default{
    data() {
        return{
            items: [],
        }
    },
    methods: {
        changeArrow(){
            let x = document.getElementsByClassName("arrow")[0];
            let y = document.getElementsByClassName("theSelect")[0];
            let z = document.getElementsByClassName("theRouter")[0];
            let u = document.getElementsByClassName("select_1")[0];
            if(x.style.transform != ""){
                x.style.transform = "";
                y.style.height = "0";
                z.style.height = "0";
                u.style.height = "0";
                y.style.boxShadow = "0 0 0 0 #fff";
            }
            else{
                x.style.transform = "rotate(-90deg)"
                y.style.height = "300px";
                z.style.height = "100%";
                u.style.height = "100%";
                y.style.boxShadow = "0 0 5px 10px #ddd";
            }
        },
    },
    mounted(){
        this.items = data();
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mm31{
    width: 800px;
    height: 400px;
    border: 1px solid #000;
    text-align: left;
    margin: auto;
}
.selecter{
    margin: 10px;
    width: 300px;
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
    border: 1px solid #ddd;
    user-select: none;
    cursor: pointer;
    border-radius: 4px;
}
.arrow{
    width: 30px;
    height: 30px;
    text-align: center;
    float: right;
    transition: 0.5s;
}
.theSelect{
    width: 600px;
    height: 0;
    margin: 20px;
    box-shadow: 0 0 0 0 #fff;
    position: relative;
    transition: 0.5s;
}
.theRouter{
    width: 400px;
    height: 0;
    float: right;
    overflow: hidden;
}
.select_1{
    width: 200px;
    height: 0;
    overflow: hidden;
    float: left;
    background-color: #ddd;
    /*border: 1px solid #ddd;*/
}
.select_1 ul{
    list-style-type: none;
}
.select_1 li{
    padding: 10px;
    color: #aaa;
    cursor: pointer;
}
.select_1 span{
    float: right;
    margin-right: 10px;
}
</style>
