<template>
  <div id="app">
    <vhead></vhead>
    <router-view/>
  </div>
</template>

<script>
import vhead from "@/components/vhead"

export default {
  name: 'App',
  components: {
    vhead,
  },
  methods: {
    addd(){
            alert("xx");
            let mvvm22_new = new Object();
            let new_tr = document.getElementById("new");
            new_tr.name = new_tr.getElementsByTagName("td")[0].getElementsByTagName("input")[0].value;
            alert(new_tr.name);
        },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*{
  margin: 0;
  padding: 0;
}

</style>
