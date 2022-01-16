<template>
 <div class="liste">
   <h1>Liste des messages de la catégorie : {{ categorie.name }}</h1>
   <article class="article" v-for="message in categorie.messages" :key="message.id">
     <h3 class="message-titre">{{ message.title }}</h3>
     <p class="message">{{message.message}}</p>
     <p>Publié le {{ moment(message.datePublication).format('LLLL') }}</p>
     <hr>
   </article>
 </div>
</template>

<script>
import {getCategorie} from '../api/categories'
import moment from "moment";

export default {
  name: 'CategoriesMessages',
  data () {
    return {
      categorie: {}
    }
  },
  watch: {
    $route () {
      this.actualiseCategorie()
    }
  },
  async mounted () {
    this.actualiseCategorie()
  },
  methods: {
    moment(date) {
      moment.locale();
      return moment(date);
    },
    async actualiseCategorie () {
      this.categorie = await getCategorie(this.$route.params.id).then((response) => {
        return response.data
      })
    }
  }
}
</script>

<style>
.article {
  max-width: 70%;
  margin: 0 auto;
}
</style>