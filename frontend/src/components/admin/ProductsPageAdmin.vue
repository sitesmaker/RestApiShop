<template>
    <div class="admin-main">
        <button class="btn" @click="MODAL_OPEN()">Добавить товар</button>
        <EditPageAdmin/>
        <ProductPage />
    </div>
</template>

<script>
import ProductPage from '@/components/pages/ProductPage.vue';
import EditPageAdmin from '@/components/admin/EditPageAdmin.vue';
import { mapMutations } from 'vuex';

export default {
    name: 'ProductsPageAdmin',
    components: {
        ProductPage,
        EditPageAdmin
    },
    methods: {
        ...mapMutations('Modal', ["MODAL_OPEN"]),
    }
}
</script>

<style lang="scss">
.form_add-cart {
    display: flex;
    flex-direction: column;
    max-width: 380px;
    margin-top: 60px;

    input,
    textarea {
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 10px;
    }


    .btn {
        max-width: 220px;
        cursor: pointer;
    }
}
</style>