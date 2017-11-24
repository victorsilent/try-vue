<template>
  <div class="columns">
    <Card title="Listar Usuários" class="column is-6">
      <div class="columns is-multiline">
        <SingleUser v-for="(user, index) in users" 
          :key="index"
          :name="user.name"
          :background="user.background"
          :phones="user.phones"
          class="single-user"
        />
      </div>
    </Card>
    <Card title="Informações completas do usuário" class="column is-6">
      <div class="columns is-multiline">
        <SingleUser
          v-if="getCurrentUser"
          :name="currentUser.name"
          :background="currentUser.background"
          :phones="currentUser.phones"
          class="single-user"
        />
        <h1 v-else>Nenhum usuário selecionado</h1>
      </div>
    </Card>
  </div>
    
</template>

<script>
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
      users: [
        {
          name: 'Marcelo',
          background: 'Some History...',
          phones: [
            {
              code: 17,
              number: '3245-2304',
            },
            {
              code: 17,
              number: '3245-2304',
            },
            {
              code: 17,
              number: '3245-2304',
            },
          ],
        },
        {
          name: 'Fernando',
          background: 'Some History...',
          phones: [
            {
              code: 17,
              number: '3245-2304',
            },
          ],
        },
        {
          name: 'Marcelo',
          background: 'Some History...',
          phones: [
            {
              code: 17,
              number: '3245-2304',
            },
          ],
        },
      ],
      currentUser: {},
    };
  },
  methods: {
  },
  computed: {
    getCurrentUser() {
      this.currentUser = this.users[0];
      return this.currentUser;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .single-user{
    margin-top: 10px;
  }
</style>
