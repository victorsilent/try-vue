<template>
<nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
  <div class="container">
    <div class="navbar-brand">
      <div class="navbar-item">
        <img src="https://dev.meuprospere.com.br/static/images/prospere.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
      </div>
      <button class="button navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item has-dropdown is-hoverable is-right">
          <a class="navbar-link">
            Contatos
          </a>
          <div class="navbar-dropdown">
            <router-link class="navbar-item" to="/add">
              Adicionar Contato
            </router-link>
            <router-link class="navbar-item" to="/">
              Listar Contatos
            </router-link>
            <router-link class="navbar-item" to="/search">
              Buscar Contato
            </router-link>
          </div>
        </a>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.navbar{
  background: #bdc3c7;
}
</style>
