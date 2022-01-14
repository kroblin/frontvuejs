<template>
  <div>
    <form v-on:submit.prevent="submitForm">
      <label for="title">Titre</label>
      <input type="text" id="title" name="title" v-model="form.title" required>
      <br>
      <label for="message">Message</label>
      <input type="text" id="message" name="message" v-model="form.message" required>
      <br>
      <label for="categorie">Catégorie</label>
      <select id="categorie" v-model="form.category" required>
        <option v-for="categorie in categories" :key="categorie.id" :value="'/lpdev/annebicque/apivuejs/public/index.php/api/categories/'+categorie.id">{{ categorie.name }}</option>
      </select>
      <br>
      <input type="submit" value="valider">
    </form>


  </div>
</template>

<script>
import axios from "axios";
import router from "../../../router";
import {getCategories} from "../../../api/categories";

export default {
  name: "AddMeesage",

  data() {
    return {
      url: this.$route.params.id,
      form: {
        title: '',
        message: '',
        category: ''
      },
      categories : null,
    }
  },

  methods: {
    submitForm() {
      axios.put('http://localhost/lpdev/annebicque/apivuejs/public/index.php/api/messages', this.form)
          .then(router.push('../'))
    }
  },

  async mounted () {
    this.categories = await getCategories().then((response) => {
      return response.data["hydra:member"]
    })
  },



}
</script>

<style scoped>

</style>