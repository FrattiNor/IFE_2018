<template>
<div class="mvvm22">
  <button v-on:click="add_1" class="mvvm22_button">添加</button>
  <table class="mvvm22_table">
    <thead>
        <tr>
            <td>姓名</td>
            <td>审核状态</td>
            <td>操作</td>
        </tr>
    </thead>
    <tbody>
      <tr v-for="item in mvvm22">
        <td>{{item.name}}</td>
        <td>{{item.status}}</td>
        <td><button  v-bind:id="item.index" v-on:click="shordel" class="mvvm22_button">{{item.operating}}</button></td>
      </tr>
      <tr id="new_tr"  v-if="show">
        <td><input type="text" /></td>
        <td>
            <div v-on:click="more" class="mvvm22_select">
                <span class="mvvm22_span right">&lt</span>
                <ul class="mvvm22_ul">
                    <li id="selected"></li>
                    <li v-on:click="mm22_select" v-for="option in select">{{option}}</li>
                </ul>
            </div>
        </td>
        <td><button v-on:click="add_2" class="mvvm22_button">添加</button></td>
      </tr>
    </tbody>
  </table>
</div>


</template>

<script>
export default {
    data(){
        return{
            index: "6",
            show: false,
            mvvm22:[
                {
                    name: "张三",
                    status: "合格",
                    operating: "删除",
                    index: "1",
                },
                {
                    name: "李四",
                    status: "不合格",
                    operating: "删除",
                    index: "2",
                },
                {
                    name: "王五",
                    status: "待审核",
                    operating: "审核",
                    index: "3",
                },
                {
                    name: "赵六",
                    status: "待审核",
                    operating: "审核",
                    index: "4",
                },
                {
                    name: "孙七",
                    status: "待审核",
                    operating: "审核",
                    index: "5",
                },
            ],
            select:[
                "合格",
                "不合格",
                "待审核",
            ],
        }
    },
    methods:{
        add_1(){
            this.show = true;
        },
        add_2(){
            let mvvm22_new = new Object();
            let new_tr = document.getElementById("new_tr");
            let new_name = new_tr.getElementsByTagName("td")[0].getElementsByTagName("input")[0].value;
            let new_status = document.getElementById("selected");
            mvvm22_new.name = new_name;
            mvvm22_new.status = new_status.innerHTML;
            if(mvvm22_new.status == "合格" || mvvm22_new.status == "不合格"){
                mvvm22_new.operating = "删除";
            }
            else{
                mvvm22_new.operating = "审核";
            }
            if(mvvm22_new.name == ""|| mvvm22_new.status == ""){
                alert("姓名为空或审核状态没有选择");
                return;
            }
            mvvm22_new.index = this.index;
            this.mvvm22.push(mvvm22_new);
            this.index++;
            this.show = false;
        },
        more(){
            let span = document.getElementsByClassName("mvvm22_span")[0];
            if(span.getAttribute("class") == "mvvm22_span right"){
                span.setAttribute("class","mvvm22_span down");
            }
            else{
                span.setAttribute("class","mvvm22_span right");
            }
            let ull = document.getElementsByClassName("mvvm22_ul")[0];
            if(ull.style.height != "112px"){
                ull.style.height = "112px";
            }
            else{
                ull.style.height = "26px";
            }
        },
        mm22_select(event){
            let _this = event.target;
            let select = document.getElementById("selected");
            select.innerHTML = _this.innerHTML;
        },
        shordel(event){
            let _this = event.target;
            if(_this.innerHTML == "删除"){
                let new_index;
                for(let i = 0;i < this.mvvm22.length;i++){
                    if(this.mvvm22[i].index == _this.id){
                        this.mvvm22.splice(i,1);
                    }
                }
            }
            else{
                let new_index;
                for(let i = 0;i < this.mvvm22.length;i++){
                    if(this.mvvm22[i].index == _this.id){
                        this.mvvm22[i].status = "合格";
                        this.mvvm22[i].operating = "删除";
                    }
                }
            }
        },
    },
    watch:{

    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mvvm22{
    margin: auto;
    width: 600px;
    border: 1px;
    text-align: left;
    padding: 10px;
    height: 600px;
}
.mvvm22_button{
    padding: 5px 15px;
    margin: 5px;
    border: 1px solid #ddd;
    outline: none;
    border-radius: 4px;
}
.mvvm22_button:active{
    border: 1px solid #36f;
}
.mvvm22_table{
    margin: 5px;
}
.mvvm22_table,.mvvm22_table td{
    border: 1px solid #ddd;
    border-collapse: collapse;
}
.mvvm22_table thead td{
    width: 200px;
    text-align: center;
    padding: 5px;
}
.mvvm22_table tbody td{
    width: 200px;
    text-align: center;
    padding: 10px;
}
.mvvm22 input[type="text"]{
    font-size: 16px;
    width: 120px;
    border: 0;
    text-align: center;
    outline: none;
}
.mvvm22_select{
    cursor: pointer;
    font-size: 16px;
    border: 1px solid #ddd;
    width: 100px;
    height: 16px;
    margin: auto;
    padding: 5px;
    text-align: right;
    /*overflow: hidden;*/
    position: relative;
}
.mvvm22_span{
    display: block;
    width: 10px;
    float: right;
    user-select: none;
}
.right{
    transform: rotate(0deg);
}
.down{
    transform: rotate(-90deg);
}
.mvvm22_ul{
    list-style-type: none;
    position: absolute;
    top: 0;
    left: 0;
    height: 26px;
    overflow: hidden;
    background-color: #fff;
}
.mvvm22_ul li{
    display: block;
    width: 80px;
    height: 16px;
    padding: 5px;
    border: 1px solid #ddd;
    border-top: 0;
    text-align: center;
}
</style>
