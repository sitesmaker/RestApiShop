<template>
    <div>
      <AppLayoutHeader />
      <router-view />
    </div>
  </template>
  
<script>
  import AppLayoutHeader from "@/layouts/AppLayoutHeader.vue";
  export default {
    name: "AppLayoutDefault",
    components: {
      AppLayoutHeader,
    },
  };
</script>