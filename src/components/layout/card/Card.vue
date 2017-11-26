<template>
  <div class="card">
    <div 
      v-if="title" 
      class="card-header"
    >
      <p class="card-header-title">
        {{title}}
      </p>
    </div>
    <div class="card-content">
      <div class="content">
        <slot>
          Card Content
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
  name: 'Card',
  data() {
    return {
    };
  },

};
</script>

<style scoped>
</style>
