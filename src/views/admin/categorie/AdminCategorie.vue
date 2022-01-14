<template>
  <div class="liste">
    <h2>Gérer les messages</h2>
    <table class="admin-table" id="dataTable">
      <thead>
        <td>Title</td>
        <td>Message</td>
        <td>Date</td>
        <td></td>
        <td><router-link :to="{name: 'add_message'}">Ajouter un message</router-link></td>
      </thead>
      <tbody>
        <tr v-for="message in categorie.messages" :key="message.id">
          <td>{{ message.title }}</td>
          <td>{{ message.message }}</td>
          <td>{{ message.date }}</td>
          <td><router-link to="">Modifier</router-link></td>
          <td><a class="delete" @click="deleteMessage(message.id)">Supprimer</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';
import moment from "moment";
import {getCategorie} from "../../../api/categories";
import {deleteMessage} from "../../../api/messages";

export default {
  name: "AdminCategorie",

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
    this.actualiseCategorie().then($('#dataTable').DataTable());

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
      await deleteMessage(id).then(this.$router.push('../'))
    }
  }
}
</script>

<style scoped>

</style>