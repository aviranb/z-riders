<template>
    <div class="dropdown">
    <button  v-on:click.prevent="showDropDown=!showDropDown">
      <div>{{selectedLink.name}}</div>
    </button>
    <div v-if="showDropDown">
      <ul >
        <li v-on:click="selectLink(link)"  v-for="link in links" v-bind:key="link.name">{{link.name}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
    name:'dropdown',
    data(){
        return{
            showDropDown: true,
            selectedLink:{name:'start'}
        }
    },
    mounted(){
        //this.selectedLink=this.links[0]
    },
    methods:{
            selectLink:function(link){
                this.selectedLink=link
            },
    },
    props: ['links'],
}
</script>
<style>
ul, li{
    width: 80%;
}
li{
    background-color: #bcbccb
}
</style>

