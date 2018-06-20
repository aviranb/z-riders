<template>
    <div class="container">
        <div> Welcome to z-riders  </div>
        <div> Please enter your personal data </div>
        
        <form @submit.prevent="validateBeforeSubmit">
            <div class="column">
            <label class="label">First name</label>
            <p class="">
                <input name="first-name" v-model="firstName" v-validate="'required'" :class="{'input': true, 'danger': errors.has('first-name') }" type="text" placeholder="first name">
                <span v-show="errors.has('first-name')" class="">{{ errors.first('first-name') }}</span>
            </p>
            </div>
            <div class="column">
            <label class="label">Last name</label>
            <p class="">
                <input name="last-name" v-model="lastName" v-validate="'required'" :class="{'input': true, 'danger': errors.has('last-name') }" type="text" placeholder="last name">
                <span v-show="errors.has('last-name')" class="">{{ errors.first('last-name') }}</span>
            </p>
            </div>
            <div class="column">
            <label class="label">Id</label>
            <p class="">
                <input name="id" v-model="id" v-validate="'required|numeric|min:9|max:10'" :class="{'input': true, 'danger': errors.has('id') }" type="text" placeholder="id">
                <span v-show="errors.has('id')" class="">{{ errors.first('id') }}</span>
            </p>
            </div>


            <div class="column">
                 <p class="control">
                <button class="button is-primary" type="submit">Submit</button>
                </p>
            </div>
        </form>
        
        
       
        <div>
                <button type="button" v-on:click="signUp()">Count me in!</button>
        </div>
    </div>
</template>
<script>
//import users from '@/components/HelloWorld.vue'
let db = require("./../config/firebase-config");
let x = db.db
  .ref("/users-test/" + 300826500)
  .once("value")
  .then(snapshot => {
    console.log(snapshot.val());
  });
console.log(x);
export default {
  data() {
    return {
      firstName: "",
      lastName:"",
      id:""
    };
  },
  methods: {
    signUp: function() {
      console.log("ff", vm);
    },
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          alert("Form Submitted!");
          return;
        }

        alert("Correct them errors!");
      });
    }
  }
};
</script>
<style scoped>
.container {
  flex: 1;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

input {
  height: 30px;
  margin: 10px;
  min-width: 200px;
}
</style>
