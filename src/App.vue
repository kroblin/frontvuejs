<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <span>|</span>
      <router-link to="/categories">Catégories</router-link>
      <span>|</span>
      <router-link to="/messages">Messages</router-link>
      <span>|</span>
      <router-link to="/a-propos">A Propos</router-link>
      <span>|</span>
      <router-link to="/admin">Admin</router-link>
    </div>
    <div id="content">
      <router-view/>
    </div>
    </div>
</template>

<script>
export default {
  name: 'App',
  data: () => {
    return {
    }
  },
  computed: {
  }
}
</script>


<style>
#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}

#nav {
  background-color: dodgerblue;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#nav a, #nav span {
  color: white;
  font-size: 1.6em;
  text-decoration: none;
  text-transform: uppercase;
  margin: 0 5px;
}

#flex-content {
  display: flex;
}

.sidebar {
  width: 15vw;
  height: 90vh;
  box-shadow: 2px 0 2px rgba(0, 0, 0, 0.4);
}

.sidebar .title h2 {
  margin: 10px;
}

.sidebar-nav {
  text-align: left;
  list-style: none;
}

.liste {
  max-width: 80vw;
}

.delete {
  color: red;
  cursor: pointer;
  text-decoration: none;
}

.delete:hover {
  color: red;
  text-decoration: underline;
}


</style>
