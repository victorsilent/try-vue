<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="container">
      <router-view/>
    </div>
    
  </div>
</template>

<script>
import AddUser from './components/AddUser';
import Navbar from './components/layout/Navbar';

export default {
  name: 'app',
  components: {
    AddUser,
    Navbar,
  },

};
</script>

<style scoped>
  .container{
    padding-top: 50px !important;
  }
</style>