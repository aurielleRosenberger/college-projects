<template>
<footer>
    <p>All rights reserved 2021 | {{ title }}</p>
</footer>
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
  }
}
</script>

<style scoped>
footer {
    background: rgba(108, 99, 82, 0.646);
    padding: 6px;
}
p {
    font-weight: bold;
    color: chocolate;
    text-shadow: 1px 2px black;
    text-align: center;
}
</style>