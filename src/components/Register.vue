<template>
<div class="register-wrapper">
    <div>Please select your desired pickup station</div>
    <dropdown v-bind:links="stations"></dropdown>
</div>
</template>
<script>
import Dropdown from './Dropdown.vue'
export default{
    name: 'register-component',
    data () {
      return {
          name:'Aviran',
          stations:[]
      }
    },
    methods:{
        go:function(){
            alert();
        }
    },
    mounted(){
        // localStorage.setItem('stations', JSON.stringify( [{name:'station 1'},{name:'station 2'}]))
        this.stations = JSON.parse(localStorage.getItem('stations'))
        // fetch('http://rest.learncode.academy/api/baviran/stations')
        // .then((response)=> response.json())
        // .then((data)=>{
        //     this.stations = data;
        // })
    },
    components:{
        dropdown:Dropdown
    }
}
</script>
<style>
.register-wrapper{
    display: flex;
    flex-direction: column
}
</style>
