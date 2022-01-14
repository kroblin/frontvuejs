<template>
  <div id="flex-content">
    <div class="sidebar">
      <div class="title">
        <h2>Liste des catégories</h2>
      </div>
      <ul class="sidebar-nav">
        <li v-for="categorie in orderedCategories" :key="categorie.id">
          <router-link :to="{name:'categorie_messages', params: {id: categorie.id}}">
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
import {getCategories} from "../api/categories";
import lodash from "lodash";


export default {
  name: "Categories",
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

<style>

.content-display {
  margin: 0 auto;
}

</style>

<style scoped>



</style>