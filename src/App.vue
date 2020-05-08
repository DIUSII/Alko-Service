<template>
  <div id="app">
    <main-form></main-form>
  </div>
</template>

<script>
   import mainForm from "./components/mainForm"
    export default {
      name: 'App',
      components: {
        'main-form': mainForm,
      }
    }
</script>
<style lang="scss">
  body{
    margin: 0;
  }
</style>