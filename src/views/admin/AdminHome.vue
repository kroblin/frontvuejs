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
          <router-link :to="{name:'admin_categorie', params: {id: categorie.id}}">
            {{categorie.name}}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="content-display">
      <router-view/>
    </div>
  </div>
</template>


<script>
import {getCategories} from "../../api/categories";
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
  async mounted () {
    this.categories = await getCategories().then((response) => {
      return response.data["hydra:member"]
    })
  }
}
</script>

<style scoped>

</style>