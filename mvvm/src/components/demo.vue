<template>
<div class="mm25">
    <div class="mm25_1">
        <div class="mm25_head">
            <span>输入框</span>
            <p class="mm25_head_1">input</p>
            <p class="mm25_head_2">待补充</p>
            <p class="mm25_head_3">控件</p>
        </div>
        <div class="mm25_body">
            <p class="mm25_body_1">基础状态</p>
            <span class="point"></span>
            <div class="mm25_body_2">
                <div v-for="item in input" class="box">
                    <span>{{item.str1}}</span>
                    <input type="text" />
                    <p class="wai">{{item.str2}}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="mm25_2"></div>
</div>
</template>

<script>
export default {
    data(){
        return{
            input:[
                {
                    str1: "请输入文字",
                    str2: "常态",
                },
                {
                    str1: "请输入文字",
                    str2: "错误提示文案",
                },
                {
                    str1: "正在输入",
                    str2: "点击输入",
                },
                {
                    str1: "失焦状态",
                    str2: "失焦状态",
                },
                {
                    str1: "请输入文字",
                    str2: "不可用",
                },
            ]
        }
    },
    methods: {

    },
    watch: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mm25{
    width: 90%;
    height: 800px;
    /*border: 1px solid #000;*/
    margin: auto;
}
.mm25_1{
    height: 50%;
    border: 1px solid #ddd;
}
.mm25_2{
    height: 50%;
    border: 1px solid #ddd;
}
.mm25_head{
    position: relative;
    height: 120px;
    background-color: #666;
}
.mm25_head span{
    color: #fff;
    font-size: 30px;
    position: absolute;
    top: 30px;
    left: 30px;
    height: 30px;
    line-height: 30px;
    /*border: #fff 1px solid;*/
}
.mm25_head_1{
    color: #aaa;
    font-size: 12px;
    position: absolute;
    top: 48px;
    left: 125px;
    height: 12px;
    line-height: 12px;
    /*border: #fff 1px solid;*/
}
.mm25_head_2{
    color: #aaa;
    font-size: 12px;
    position: absolute;
    top: 70px;
    left: 30px;
    height: 12px;
    line-height: 12px;
    /*border: #fff 1px solid;*/
}
.mm25_head_3{
    color: #666;
    font-size: 10px;
    position: absolute;
    top: 32px;
    left: 125px;
    height: 12px;
    line-height: 12px;
    background-color: #aaa
    /*border: #fff 1px solid;*/
}
.mm25_body{
    color: #444;
    width: 80%;
    height: 280px;
    margin: auto;
    position: relative;
    /*border: 1px solid #000;*/
}
.point{
    display: block;
    width: 3px;
    height: 16px;
    border: 1px solid #444;
    background-color: #444;
    position: absolute;
    top: 5px;
    left: 0;
}
.mm25_body_1{
    float: left;
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    top: 0;
    left: 15px;
}
.mm25_body_2{
    width: 100%;
    /*border: 1px solid #000;*/
    position: absolute;
    top: 30px;
    left: 0;
}
.box{
    position: relative;
    font-size: 13px;
    width: 250px;
    padding: 5px;
    border: 1px solid #ddd;
    text-align: left;
    margin-top: 10px;
    margin-right: 100px;
    float: left;
}
.box input{
    position: absolute;
    left: 80px;
    border: 0;
    outline: none;
}
.wai{
    width: 100px;
    top: 5px;
    position: absolute;
    left: 280px;
}
</style>
