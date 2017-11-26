<template>
  <Card title="Buscar Usuários">
    <article 
      v-if="messageRequest" 
      class="message"
      :class="messageRequest.code !== 200 ? 'is-danger' : 'is-info'"
      >
      <div class="message-body">
        {{messageRequest.message}}
      </div>
    </article>
    <div class="columns">
      <div class="column is-6">
        <div class="field has-addons ">
          <div class="control is-expanded">
            <input 
              name="search"
              v-validate="'required|min:1'"
              v-model="userId" 
              class="input is-fullwidth" 
              type="text" 
              placeholder="Digite o ID buscado">
          </div>
          <div class="control">
            <button
              name="search"
              :disabled="validId"
              class="button is-info" 
              @click="getUserById">
                Buscar
            </button>
          </div>
        </div>
      </div>
      <div class="column is-6">
        <SingleUser
          v-if="searchContact"
          :name="searchContact.name"
          :background="searchContact.background"
          :phones="searchContact.phones"
          class="single-user"
        />
        <p v-else-if="!loading">
          Busque um usuário pelo id :)
        </p>
        <p v-else>
          Buscando usuário....
        </p>
      </div>
    </div>
  </Card>
</template>

<script>
import { mapState } from 'vuex';
import Card from './layout/card/Card';
import SingleUser from './SingleUser';

export default {
  name: 'SearchUser',
  components: {
    Card,
    SingleUser,
  },
  methods: {
    getUserById() {
      this.$store.dispatch('searchContact', this.userId);
    },
  },
  computed: {
    ...mapState(['searchContact', 'loading', 'messageRequest']),
    validId() {
      return (this.userId) && /[a-z]/i.test(this.userId);
    },
  },
  data() {
    return {
      userId: '',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .field-label {
    text-align: left;
  }
  .input-list {
    margin-top: 10px;
  }
  @media (max-width: 750px){
    .input-block {
      margin-top: 30px;
    }
  }
  
</style>
