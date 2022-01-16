<template>
  <div class="content">
    <div class="liste">
      <h2>Gérer les messages</h2>
      <table class="admin-table" id="dataTable">
        <thead>
        <tr>
          <th>Title</th>
          <th>Message</th>
          <th>Date</th>
          <th></th>
          <th><router-link :to="{name: 'add_message'}">Ajouter un message</router-link></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="message in categorie.messages" :key="message.id">
          <td>{{ message.title }}</td>
          <td>{{ message.message.substring(0, 30) }}...</td>
          <td>{{ message.date }}</td>
          <td><router-link :to="{name: 'update_message', params: {id: message.id}}">Modifier</router-link></td>
          <td><a class="delete" @click="deleteMessage(message.id)">Supprimer</a></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script>
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';
import moment from "moment";
import {getCategorie, getCategories} from "../../../api/categories";
import {deleteMessage} from "../../../api/messages";

export default {
  name: "AdminCategorie",

  data () {
    return {
      categorie: {},
    }
  },
  watch: {
    $route () {
      this.actualiseCategorie()
    }
  },
  async mounted () {


    this.actualiseCategorie().then($('#dataTable').DataTable());
    this.categories = await getCategories().then((response) => {
      return response.data["hydra:member"]
    })


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

    },
    async deleteMessage(id) {
      await deleteMessage(id).then(() => {
        const found = this.categorie.messages.findIndex(c => c.id === id);
        if (found >= 0) {
          this.categorie.messages.splice(found, 1);
        }
      })
    },
  }
}
</script>

<style scoped>

</style>