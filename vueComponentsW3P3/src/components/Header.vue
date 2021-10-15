<template>
  <header>
      <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
    }
  },
  methods: {
    changeTitle: function() {
      this.$emit('changeTitle', 'Capitals');
    }
  }
}
</script>

<style scoped>
header {
    background: rgba(108, 99, 82, 0.646);
    padding: 10px;
}
h1 {
    font-weight: bold;
    color: chocolate;
    text-shadow: 1px 3px black;
    text-align: center;
}
</style>