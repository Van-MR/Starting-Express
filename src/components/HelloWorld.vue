<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Ecosystem</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
 .hello{
   h1, h2 {
     font-weight: 20px;
     color: blue;
   }
 }
</style>
