<template>
  <div class="detail">
    상세보기
    <ul v-if="items && items.length">
      <li v-for="(res, idx) of items" :key="idx">
        {{res.content}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'detail',
    props: ['bid'],
    data () {
      return {
        items: []
      }
    },
    created () {
      this.dataBinding()
    },
    watch: {
      '$route': 'dataBinding'
    },
    methods: {
      dataBinding () {
        this.$axios.get('http://localhost:8081/api/bible/niv/' + this.bid)
          .then((response) => {
            this.items = response.data
          })
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
