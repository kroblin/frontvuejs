<template>
  <div id="flex-content">
    <div class="sidebar">
      <div class="title">
        <h2>Gestion</h2>
      </div>
      <ul class="sidebar-nav">
        <router-link :to="{name: 'add_categorie'}">Ajouter une catégorie</router-link>
        <hr>
        <li v-for="categorie in orderedCategories" :key="categorie.id">
          <router-link :to="{name:'admin_categorie', params: {id: categorie.id}}">{{categorie.name}}
          </router-link>
          /
          <router-link :to="{name: 'update_categorie', params: {id: categorie.id}}" class="update">
            Modifier
          </router-link>
          /
          <a @click="deleteCategorie(categorie.id)" class="delete">Supprimer</a>
        </li>
      </ul>
    </div>
    <div class="content-display">
      <router-view/>
    </div>
  </div>
</template>


<script>
import {deleteCategorie, getCategories} from "../../api/categories";
import lodash from "lodash";


export default {
  name: "AdminHome",
  computed: {
    orderedCategories: function () {
      return lodash.orderBy(this.categories, 'name');
    }
  },
  data () {
    return {
      categories : null
    }
  },

  methods: {
    deleteCategorie(id) {
      const found = this.categories.findIndex(c => c.id === id);
      if (found >= 0) {
        if (this.categories[found].messages.length === 0) {
          deleteCategorie(id).then(() => {
            this.categories.splice(found, 1);
          })
        } else {
          alert('! Vérifiez que la catégorie ne contient pas de message !')
        }
      }
    }
  },

  async mounted () {
    this.categories = await getCategories().then((response) => {
      return response.data["hydra:member"]
    })
  }
}
</script>

<style scoped>

</style>