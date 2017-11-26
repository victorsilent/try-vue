<template>
  <div class="columns">
    <Card title="Listar Usuários" class="column is-6">
      <div class="columns is-multiline">
        <p v-if="loading">
          Carregando lista de contatos...
        </p>
        <div v-else class="contacts-list">
          <SingleUser v-for="(user, index) in users" 
            :key="index"
            :name="user.name"
            :background="user.background"
            :phones="user.phones"
            @click.native="getCurrentUser(index)"
            class="single-user"
          />
        </div>
      </div>
    </Card>
    <Card title="Informações completas do usuário" class="column is-6 is-fixed-top">
      <div class="columns">
        <SingleUser
          v-if="currentUser"
          :name="currentUser.name"
          :background="currentUser.background"
          :phones="currentUser.phones"
          :emails="currentUser.emails"
          id="selected-user"
        />
        <h1 v-else id="contactNotSelected">Nenhum usuário selecionado</h1>
      </div>
    </Card>
  </div>
    
</template>

<script>
import { mapState } from 'vuex';
import Card from './layout/card/Card';
import SingleUser from './SingleUser';

export default {
  name: 'ListUsers',
  components: {
    Card,
    SingleUser,
  },
  data() {
    return {
      currentUser: false,
    };
  },
  methods: {
    getCurrentUser(index) {
      this.currentUser = this.users[index];
      return this.currentUser;
    },
  },
  computed: {
    ...mapState(['loading']),
    users() {
      return this.$store.getters.usersList;
    },
  },
  created() {
    this.$store.dispatch('getContacts');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .single-user{
    margin-top: 10px;
  }
  .is-fixed-top{
    position: fixed;
    right: 0;
  }
</style>
