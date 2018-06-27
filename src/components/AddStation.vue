<template>
    <div class="container">
      
        <div> Please enter the new station details </div>
        
        <form v-on:submit.prevent="validateBeforeSubmit">
            <div class="form-field">
                <label class="form-label">Station name</label>
                <div class="input-wrapper">
                    <input name="station-name" 
                            v-model="form.stationName" 
                            v-validate="'required'" 
                            v-bind:class="{'input': true, 'danger': errors.has('station-name') }" 
                            type="text" 
                            placeholder="station name">
                    <span v-show="errors.has('station-name')" class="error-message">{{ errors.first('station-name') }}</span>
                </div>
            </div>
            <div class="form-field">
                <label class="form-label">Address</label>
                <div class="input-wrapper">
                    <input name="address" 
                    v-model="form.address" 
                    v-validate="'required'" 
                    v-bind:class="{'input': true, 'danger': errors.has('address') }" 
                    type="text"
                     placeholder="address">
                    <span v-show="errors.has('address')" class="error-message">{{ errors.first('address') }}</span>
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
import Firebase from "firebase";
let config = require("./../config/firebase-config");

export default {
  data() {
    return {
      form: {}
    };
  },
  methods: {
    createStation: function() {
      
      config.db.ref(`/stations/${this.form.stationName}`).set({
        address: this.form.address,
      }).then(() => {
          this.$router.push("register");
        });;
      
      // config.db
      //   .ref("/stations/")
      //   .child(this.form.id)
      //   .once("value", snapshot => {
      //     let exists = snapshot.val() !== null;
      //     exists
      //       ? this.userExistsCallback(this.form.id)
      //       : this.newUserCallback(this.form.id);
      //   })
      //   .then(() => {
      //     this.$router.push("register");
      //   });
    },

    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.createStation();
          return;
        }
      });
    }
  }
};
</script>


<style >
</style>
