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
            </div>
        </div>
    </div>
  </template>
  
<script>
  // import store from '@/store';
import axios from 'axios';
  
  export default {
    name: 'HomePage',
    data() {
      return {
        urlRequest: "http://localhost:3000/api/goods",
        response: [],
      }
    },
    mounted() {
      axios.get(this.urlRequest).then((res) => {
          this.response = res;
      })
    }
  }
</script>

<style>

</style>
  