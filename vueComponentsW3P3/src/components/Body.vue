<template>
<div id="index">
<ul>
    <li v-for="(card, index) in index" :key="index" v-on:click="card.show = !card.show">
        <h2>{{ card.country }} </h2>
        <h3 v-show="card.show">{{ card.capital }}</h3>
    </li>
</ul>
 <button v-on:click="deleteIndex">Remove</button>
</div>
</template>

<script>
export default {
        props: {
            index: {
                type: Array,
                required: true
                }
                },
    data(){
        return{
        }
    },
    methods: {
      deleteIndex: function(){
        this.index.pop();
    }
  }
}
</script>

<style scoped>
#index {
    width: 100%;
    max-width: 1200px;
    margin: 15px auto;
    padding: 20px;
    box-sizing: border-box;
    background: rgba(214, 198, 169, 0.721);
}

ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}

li {
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid black;
    margin: 10px;
}

button {
    font-family: 'Courier New', Courier, monospace;
}
</style>