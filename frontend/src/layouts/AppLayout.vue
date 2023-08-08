<template>
  <component :is="layout" />
</template>

<script>
  const defaultLayout = "AppLayoutDefault";
  import AppLayoutHeader from "@/layouts/AppLayoutHeader.vue";
  export default {
    name: "AppLayout",
    components: {
      AppLayoutHeader,
    },
    computed: {
      layout() {
        const layout = this.$route.meta.layout || defaultLayout;
        return () => import(`@/layouts/${layout}.vue`);
      },
    },
  };
</script>