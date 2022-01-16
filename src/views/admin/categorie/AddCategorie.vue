<template>
  <div>
    <form v-on:submit.prevent="submitForm">
      <label for="name">Nom</label>
      <input type="text" id="name" class="form-input" name="name" v-model="form.name">
      <br>
      <br>
      <label for="color">Couleur</label>
      <input type="text" id="color" class="form-input" name="color" v-model="form.color">
      <br>
      <br>
      <input type="submit" value="valider">
    </form>

  </div>
</template>

<script>
import axios from "axios";
import router from "../../../router";

export default {
  name: "AddCategorie",

  data() {
    return {
      form: {
        name: '',
        color: ''
      }
    }
  },

  methods: {
    submitForm() {
      axios.post('http://localhost/lpdev/annebicque/apivuejs/public/index.php/api/categories', this.form)
      .then(router.push('/admin'))
    }
  }

}
</script>

<style scoped>

</style>