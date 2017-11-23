<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title" :style="{color: colorHeader, background: backgroundHeader}">
        <slot>
          Campo da seção
        </slot>
      </p>
    </div>
    <div class="card-content">
      <div class="content">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['background-header', 'color-header'],
  name: 'Card',
  data() {
    return {
    };
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
