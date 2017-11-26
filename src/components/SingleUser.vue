<template>
  <Card :title="name" 
        class="column is-12 single-user" 
        @click="loadUser">
    <p>
      {{background}}
    </p>
    <label class="has-text-weight-semibold">Telefones:</label>
    <a  v-for="(phone, index) in phones" 
        :key="index" 
        href="#">
      {{`(${phone.code}) ${phone.number}`}}
    </a>
    <br>
    <div v-if="emails">
      <label class="has-text-weight-semibold">Emails:</label>
      <a  v-for="(email, index) in emails" 
          :key="index" 
          href="#">
        {{email.address}}
      </a>
    </div>
  </Card>
</template>

<script>
import Card from './layout/card/Card';

export default {
  name: 'SingleUser',
  props: ['name', 'background', 'phones', 'emails'],
  components: {
    Card,
  },
  methods: {
    loadUser() {
    },
  },
};
</script>

<style scoped>
  a{
    padding-left: 10px;
  }
</style>
