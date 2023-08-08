<template>
    <BaseModal v-if="modalMessage">{{ modalMessage }}</BaseModal>
    <BaseModal v-else>
        <form method="POST" enctype="multipart/form-data" class="form form_add-cart" @submit.prevent="onSubmit">
            <input type="text" name="title" v-model="cart['title']">
            <input type="file" name="file" ref="file" @change="addFile()">
            <textarea name="description" cols="30" rows="10" v-model="cart['description']"></textarea>
            <input type="number" name="price" v-model="cart['price']">
            <input type="submit" value="Создать" class="btn">
        </form>
    </BaseModal>
</template>

<script>
import BaseModal from '@/components/pages/BaseModal.vue';
import { mapState, mapActions } from 'vuex';

export default {
    name: 'EditPageAdmin',
    components: {
        BaseModal
    },
    data() {
        return {
            cart: {
                title: '',
                description: '',
                price: '',
                image: '',
            }
        }
    },
    methods: {
        ...mapActions("Products", ["addCart"]),
        onSubmit() {
            this.addCart(this.cart);
        },
        addFile() {
            // возможно нужно поправить
            this.cart['file'] = this.$refs.file.files[0];
        },
    },
    computed: {
        ...mapState("Modal", ["modalMessage"])
    }
}

</script>

<style lang="scss">
.form_add-cart {

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