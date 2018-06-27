<template>
    <div class="container">
        <div> Welcome to z-riders  </div>
        <div> Please enter your personal data </div>
        
        <form v-on:submit.prevent="validateBeforeSubmit">
            <div class="form-field">
                <label class="form-label">First name</label>
                <div class="input-wrapper">
                    <input name="first-name" 
                            v-model="form.firstName" 
                            v-validate="'required'" 
                            v-bind:class="{'input': true, 'danger': errors.has('first-name') }" 
                            type="text" 
                            placeholder="first name">
                    <span v-show="errors.has('first-name')" class="error-message">{{ errors.first('first-name') }}</span>
                </div>
            </div>
            <div class="form-field">
                <label class="form-label">Last name</label>
                <div class="input-wrapper">
                    <input name="last-name" 
                    v-model="form.lastName" 
                    v-validate="'required'" 
                    v-bind:class="{'input': true, 'danger': errors.has('last-name') }" 
                    type="text"
                     placeholder="last name">
                    <span v-show="errors.has('last-name')" class="error-message">{{ errors.first('last-name') }}</span>
                </div>
            </div>
            <div class="form-field">
                <label class="form-label">Id</label>
                <div class="input-wrapper">
                    <input name="id" 
                    v-model="form.id" 
                    v-validate="'required|numeric|min:9|max:10'" 
                    v-bind:class="{'input': true, 'danger': errors.has('id') }" 
                    type="text" placeholder="id">
                    <span v-show="errors.has('id')" class="error-message">{{ errors.first('id') }}</span>
                </div>
            </div>
            <div class="form-field">
                 <p class="control">
                <button class="button is-primary" type="submit" >Submit</button>
                </p>
            </div>
        </form>
    </div>
</template>
<script>
//import users from '@/components/HelloWorld.vue'
import Firebase from "firebase";
let config = require("./../config/firebase-config");

export default {
  data() {
    return {
      form: {}
    };
  },
  methods: {
    signUp: function() {
      config.db
        .ref("/users/")
        .child(this.form.id)
        .once("value", snapshot => {
          let exists = snapshot.val() !== null;
          exists
            ? this.userExistsCallback(this.form.id)
            : this.newUserCallback(this.form.id);
        })
        .then(() => {
          this.$router.push("register");
        });
    },

    userExistsCallback(userId) {
      alert(userId + " exists");
    },

    newUserCallback(userId) {
      config.db.ref("/users/" + userId).set({
        firstName: this.form.firstName,
        lastName: this.form.lastName
      });
    },

    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.signUp();
          return;
        }
      });
    }
  }
};
</script>


<style >

</style>
