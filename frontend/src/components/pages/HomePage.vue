<template>
  <div class="container">
      <div class="row">
      <ProductPage />
    </div>
  </div>
</template>
  
<script>
import ProductPage from '@/components/pages/ProductPage.vue';
  
  export default {
    name: 'HomePage',
    components: {
      ProductPage,
    }
  }
</script>

<style lang="scss">

</style>
  