<template>
  <div>
    <form v-on:submit.prevent="submitForm">
      <input type="text" id="name" name="name" v-model="form.name">
      <label for="name">Nom</label>
      <br>
      <input type="text" id="color" name="color" v-model="form.color">
      <label for="color">Couleur</label>
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
      .then(router.push('admin_categorie'))
    }
  }

}
</script>

<style scoped>

</style>