<template>
  <div>
    <form v-on:submit.prevent="submitForm">
      <label for="name">Nom</label>
      <input type="text" id="name" class="form-input" name="name" v-model="form.name" required>
      <br>
      <br>
      <label for="color">Couleur</label>
      <input type="text" id="color" class="form-input" name="color" v-model="form.color" required>
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
  name: "AddMessage",

  data() {
    return {
      url: this.$route.params.id,
      form: {
        id: null,
        name: '',
        color: '',
        messages: ''
      },
    }
  },

  methods: {

    submitForm() {
      if (this.form.messages.length === 0) {
        axios.put('http://localhost/lpdev/annebicque/apivuejs/public/index.php/api/categories/'+this.url, this.form)
            .then(router.push('/admin'))
      } else {
        alert('! Vérifiez que la catégorie ne contient pas de message !')
      }

    }
  },

  async mounted () {
    this.form = {}
    this.form = await axios.get('http://localhost/lpdev/annebicque/apivuejs/public/index.php/api/categories/'+this.url)
        .then((response) => {
          return response.data
        })
    console.log(this.form)
  },



}
</script>

<style scoped>

</style>