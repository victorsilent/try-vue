<template>
  <Card :title="name" 
        class="column is-12" 
        @click="loadUser">
    <p>
      {{background}}
    </p>
    <a  v-for="phone in phones" 
        :key="phone" 
        href="#">
      {{phone.number}}
    </a>
  </Card>
</template>

<script>
import Card from './layout/card/Card';

export default {
  name: 'SingleUser',
  props: ['name', 'background', 'phones'],
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
