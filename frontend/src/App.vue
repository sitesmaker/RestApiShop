<template>
  <div id="app">
    <AppLayout />
  </div>
</template>

<script>
import AppLayout from "@/layouts/AppLayout.vue";
export default {
  name: "App",
  components: {
    AppLayout,
  },
};
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }

  .row {
    max-width: 1290px;
    padding-left: 50px;
    padding-right: 50px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
