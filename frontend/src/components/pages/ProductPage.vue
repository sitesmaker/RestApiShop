<template>
    <div class="products">
        <ProductItem v-for="item in productsList"
            :key="item.id"
            :item=item
            @deleteCart="deleteProduct"
        />
    </div>
</template>
  
<script>
import ProductItem from '@/components/pages/ProductItem.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "ProductPage",
    components: { ProductItem },
    data() {
        return {
            urlRequest: "http://localhost:3000/api/goods",
        };
    },
    methods: {
        ...mapActions("Products", ["getProducts", "deleteCart"]),
        deleteProduct(data) {
            this.deleteCart(data);
        }
    },
    computed: {
        ...mapGetters("Products", ["productsList"]),
    },
    mounted() {
        this.getProducts();
    },
}
</script>

<style lang="scss">
    .products {
        display: flex;
        flex-wrap: wrap;
        padding: 50px 0;
        margin-left: -10px;
        margin-right: -10px;
    }
</style>
  