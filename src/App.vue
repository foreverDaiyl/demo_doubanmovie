<template>
  <div id="app">
    <znav></znav>
    <zwrapper></zwrapper>
  </div>
</template>

<script>
import znav from './components/nav.vue';
import zwrapper from './components/wrapper.vue';
export default {
  name: 'app',
  components: {
    znav,
    zwrapper
  }
}
</script>

<style>

</style>
