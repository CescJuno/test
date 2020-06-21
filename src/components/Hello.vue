<template>
  <div class="hello">
    오늘 해야 할 일
    <ul v-if="toDoItems && toDoItems.length">
      <li v-for="(toDoItem, idx) of toDoItems" :key="idx">
        <a href="javascript:;" v-on:click="goAction(toDoItem.bid)">{{toDoItem.content}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    created: function () {
      this.dataBinding()
    },
    data () {
      return {
        toDoItems: []
      }
    },
    methods: {
      dataBinding () {
        this.$axios.get('http://localhost:8081/api/bible/niv/0101001')
          .then((response) => {
            this.toDoItems = response.data
          })
      },
      goAction (bid, idx) {
        /* this.toDoItems.find(child => child.bid === bid).bid */
        this.$router.push({name: 'Detail', params: { bid: bid }})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
