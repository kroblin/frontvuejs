<template>
  <div>
    <form v-on:submit.prevent="submitForm">
      <label for="title">Titre</label>
      <input type="text" id="title" class="form-input" name="title" v-model="form.title" required>
      <br>
      <br>
      <label>Message</label>
      <textarea type="text" id="message" class="form-input" v-model="form.message"></textarea>
      <br>
      <br>
      <label>Catégorie</label>
      <select id="categorie" class="form-input" v-model="form.category">
        <option v-for="categorie in categories" :key="categorie.id" :value="'/lpdev/annebicque/apivuejs/public/index.php/api/categories/'+categorie.id">{{ categorie.name }}</option>
      </select>
      <br>
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
  name: "AddMessage",

  data() {
    return {
      url: this.$route.params.id,
      form: {
        title: '',
        message: '',
        category: ''
      },
      categories : null,
      message: {}
    }
  },

  methods: {
    submitForm() {
      axios.put('http://localhost/lpdev/annebicque/apivuejs/public/index.php/api/messages/'+this.url, this.form)
          .then(router.push('/admin/'+this.form.category.substring()))
    }
  },

  async mounted () {
    this.categories = await getCategories().then((response) => {
      return response.data["hydra:member"]
    })

     //this.message = await getMessage(this.url).then((response) => {
     //  return response.data["hydra:member"]
     //})
    this.message = await axios.get('http://localhost/lpdev/annebicque/apivuejs/public/index.php/api/messages/'+this.url)
        .then((response) => {
          return response.data
        })
    this.form = this.message

  },



}
</script>

<style scoped>

</style>