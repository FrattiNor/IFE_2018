<template>
<div class="mvvm2-1">
    <input class="sr" type="text" placeholder="姓名" v-model="name">
    <input class="sr" type="number" placeholder="年龄" v-model="age">
    <input class="sr" type="text" placeholder="简介" v-model="des">
    <br>
    <span>信息：</span>
    <button v-on:click="del">移除信息</button>
    <br>
    <span>姓名：</span><span>{{name}}</span><br>
    <span>年龄：</span><span>{{age}}</span><br>
    <span>简介：</span><span>{{des}}</span><br>
</div>
</template>

<script>
export default {
    data(){
        return{
            name: "",
            age: "",
            des: "",
        }
    },
    methods:{
        del(){
            this.name = "";
            this.age = "";
            this.des = "";
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"]{
  -moz-appearance: textfield;
}

.mvvm2-1 input{
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ddd;
  outline: none;
}
.mvvm2-1 input:hover{
  border: 1px solid #36f;
}
.mvvm2-1 input:focus{
  border: 1px solid #36f;
}
.mvvm2-1 span{
  display: inline-block;
  margin-top: 5px;
  padding: 5px;
}
.mvvm2-1 button{
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
}
.mvvm2-1 button:active{
  border: 1px solid #36f;
}
</style>
