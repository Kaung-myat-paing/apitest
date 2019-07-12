<template>
  <v-form>
    <v-container>
      <v-layout row wrap>
        
        <form @submit="formSubmit">
          <strong>id:</strong>
          <input type="text" class="form-control" v-model="id">
          <strong>Name:</strong>
          <input type="text" class="form-control" v-model="name">
          <strong>Created Date:</strong>
          <input type="text" class="form-control" v-model="crD">
          <strong>Modified Date:</strong>
          <input type="text" class="form-control" v-model="moD">

          <button class="btn btn-success">Submit</button>
        </form>
      </v-layout>
      <v-layout row wrap>
        {{ userlist }}
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import { sampleApi } from "../services/sample-api-service";
export default {
  data() {
    return {
      userlist: [],
      id: "",
      name: "",
      crD: "",
      moD: "",
      output: ""
    };
  },
  mounted() {
    this.getSample();
  },
  methods: {
    getSample: function() {
      sampleApi.getSampledata().then(res => {
        this.userlist = res.data;
      });
    },
    formSubmit(e) {
      e.preventDefault();
      var tempObj = {};
      tempObj = {
        id: this.id,
        name: this.name,
        created_date: this.crD,
        modified_date: this.moD
      };
      sampleApi
        .post(tempObj)
        .then(res => {
          console.log("added");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
