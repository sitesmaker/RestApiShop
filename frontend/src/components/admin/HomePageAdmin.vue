<template>
    <div class="row">
        <div class="cart">
            <div class="cart__item" v-for="item in response.data" :key="item.id">
                <div class="cart__image">
                    <img :src="item.image || plug">
                </div>
                <div class="cart__title">{{ item.title }}</div>
                <div class="cart__description">{{ item.description }}</div>
                <div class="cart_price">{{ item.price }}</div>
                <button @click="deleteCart(item.id)">Удалить</button>
            </div>
        </div>

        <form method="POST" enctype="multipart/form-data" class="form form_add-cart" @submit.prevent="onSubmit">
            <input type="text" name="title" v-model="cart['title']">
            <input type="file" name="image" ref="file" @change="addFile()">
            <textarea name="description" cols="30" rows="10" v-model="cart['description']"></textarea>
            <input type="number" name="price" v-model="cart['price']">
            <input type="submit" value="Создать" class="btn">
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'HomePageAdmin',
    data() {
      return {
        urlRequest: "http://localhost:3000/api/goods",
        response: [],
        cart: {
            title: '',
            description: '',
            price: '',
            image: '',
        },
        plug: "images/plug.jpg",
      }
    },
    methods: {
        onSubmit() {
            axios({
                method: 'post',
                headers: { 'Content-Type': 'multipart/form-data' },
                url: this.urlRequest,
                data: {
                    title: this.cart['title'],
                    description: this.cart['description'],
                    price: this.cart['price'],
                    image: this.cart['image'],
                }
            }).then((res) => {
                if(res.status === 200) this.getProducts();
            })
        },
        addFile() {
           this.cart['image'] = this.$refs.file.files[0];
        },
        getProducts() {
            axios.get(this.urlRequest).then((res) => {
                this.response = res;
            })
        },
        deleteCart(id) {
            axios({
                method: 'delete',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                url: `${this.urlRequest}/${id}`,
                data: {
                    id: id,
                }
            }).then((res) => {
                if(res.status === 200) this.getProducts();
            })
        }
    },
    mounted() {
      this.getProducts();
    },
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

    .cart__image {
        max-width: 200px;

        img {
            width: 100%;
            height: auto;
        }
    }

    .cart__description {
        max-width: 400px;
    }
</style>