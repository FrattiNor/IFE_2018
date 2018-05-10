<template>
<ul class="ull">
      <router-link tag="li" v-bind:to="{name: 'MVVM2_1'}">MVVM-2.1</router-link>
      <router-link tag="li" v-bind:to="{name: 'MVVM2_2'}">MVVM-2.2</router-link>
      <router-link tag="li" v-bind:to="{name: 'MVVM2_3'}">MVVM-2.3</router-link>
      <router-link tag="li" v-bind:to="{name: 'MVVM2_4'}">MVVM-2.4</router-link>
</ul>
</template>

<script>
export default {
    data(){
        return{

        }
    },
}
</script>

<style scoped>
.ull{
  list-style-type: none;
  overflow: hidden;
  margin: 10px;
  margin-bottom: 30px;
}
.ull li{
  float: left;
  padding: 5px;
  cursor: pointer;
  border: 1px solid #000;
  border-radius: 4px;
  margin: 5px;
}
</style>
