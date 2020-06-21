<template>
  <div class="bible">
    <select name="bibleTitle" v-model="bibleTitle" @change="onChange()">
      <option v-for="(bibleItem, idx) of bibleItems" :key="idx">{{bibleItem.bibleTitle}}</option>
    </select>
    <ul v-if="toDoItems && toDoItems.length">
      <li v-for="(toDoItem, idx) of toDoItems" :key="idx">
        <div v-on:click="goAction(toDoItem.bid)">{{(idx+1)}}. {{toDoItem.content}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'bible',
    props: ['type', 'bid'],
    created: function () {
      this.dataBinding()
    },
    watch: {
      '$route': 'dataBinding'
    },
    data () {
      return {
        toDoItems: [],
        bibleItems: [],
        bibleTitle: ''
      }
    },
    methods: {
      dataBinding () {
        if (this.$route.params.type === null) {
          this.$axios.get('http://localhost:8081/api/bible/rev/0101001').then((response) => {
            this.toDoItems = response.data
          })
        } else {
          this.$axios.get('http://localhost:8081/api/bible/' + this.$route.params.type).then((response) => {
            this.bibleItems = response.data
          })
          this.$axios.get('http://localhost:8081/api/bible/' + this.$route.params.type + '/' + this.$route.params.bid).then((response) => {
            this.toDoItems = response.data
          })
        }
      },
      onChange () {
        console.log('The new value is: ', this.bibleTitle)
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
