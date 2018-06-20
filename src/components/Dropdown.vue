<template>
    <div class="dropdown">
    <button  v-on:click.prevent="showDropDown=!showDropDown">
      <div>{{selectedLink.name}}</div>
    </button>
    <div class="ul" v-if="showDropDown">
        <div class="li" v-on:click="selectLink(link)"  v-for="link in links" v-bind:key="link.name">{{link.name}}</div>
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
<style scoped>
.dropdown{
width: 100%;
display: flex;
flex-direction: column;
}
.ul{
    border: 1px solid #f1f1f1;
    margin-top: 5px
}
.li{
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}


</style>

