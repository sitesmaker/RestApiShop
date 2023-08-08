<template>
    <div class="container">
        <div class="row">
            <h1 v-if="!cartData.length">Корзина пуста</h1>
            <div class="cart" v-if="!!cartData.length">
                <CartItem
                    v-for="(elem, index) in cartData"
                    :key="index"
                    :item="elem"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import CartItem from "@/components/pages/CartItem.vue";

export default{
    components: {
        CartItem,
    },
    computed: {
        ...mapState("Cart", ["cartData"]),
    }
}
</script>

<style lang="scss">

</style>