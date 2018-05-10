<template>
    <div class="select_3">
        <ul>
            <li v-for="item in items">
                {{item.name}}<span>&gt</span>
            </li>
        </ul>
    </div>
</template>
<script>
import {data} from "./mm31_data.js"

export default{
    data(){
        return{
            items: [],
            id_1: "",
            id_2: "",
        }
    },
    mounted(){
        this.id_1 = this.$route.query.id_1;
        this.id_2 = this.$route.query.id_2;
        this.items = data()[this.id_1-1].children[this.id_2-1].children;
    },
    watch: {
        $route(){
            this.id_1 = this.$route.query.id_1;
            this.id_2 = this.$route.query.id_2;
            this.items = data()[this.id_1-1].children[this.id_2-1].children;
        }
    }
}
</script>
<style>
.select_3{
    width: 100%;
    height: 100%;
    background-color: #fff;
}
.select_3 ul{
    list-style-type: none;
}
.select_3 li{
    padding: 10px;
    color: #aaa;
    cursor: pointer;
}
.select_3 span{
    float: right;
    margin-right: 10px;
}
</style>
