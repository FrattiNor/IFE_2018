<template>
<div class="mvvm24_1">
    <span>我是更高层父组件:</span><input v-model="far" class="one" type="text" />
    <div class="mvvm24_2">
        <span>我是父组件:</span><input v-model="far" class="one" type="text" />
        <input v-model="val" class="three" type="text" />
        <button v-on:click="submit">提交给父组件</button>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            val:"",
            far:"",
        }
    },
    methods: {
        submit(){
            this.far = this.val;
            console.log(this.val);
            if(this.val == ""){
                this.far = "静静等待用户输入";
            }
        },
    },
    watch: {
        far(){
            this.val = this.far;
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mvvm24_1{
    width: 400px;
    height: 400px;
    border: 1px solid #ddd;
    margin: auto;
    padding: 5px;
}
.mvvm24_2{
    width: 300px;
    height: 200px;
    border: 1px solid #ddd;
    margin: auto;
    padding: 5px;
}
.one{
    width: auto;
    font-size: 16px;
    outline: none;
    /*border: 1px solid #000;*/
    border: 0;
}
.three{
    margin: 5px;
    padding: 2px;
    text-align: center;
    outline: none;
    border: 1px solid #ddd;
}
.mvvm24_1 button{
    margin: 5px;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
    outline: none;
}
.mvvm24_1 button:active{
    border: 1px solid #36f;
}
span{
    /*border: 1px solid #000;*/
}
</style>
