<template>
    <div class="products__item">
        <div class="products__item-image">
            <img :src="imagePath">
        </div>
        <div class="products__item-title">{{ item.title }}</div>
        <div class="products__item-description">{{ item.description }}</div>
        <div class="products__item-price">{{ item.price }} &#8381;</div>
        <div class="products__item-parametrs">
          <CounterElem :count="updateCountFromCart" @addItem="countPlus" @deleteItem="countMinus" />
          <button class="btn btn_add-cart" @click="add_to_cart()">В корзину</button>
        </div>
        <button @click="$emit('deleteCart', { id: item.id, image: item.image })" v-if="isAdmin" class="btn btn_delete">Удалить</button>
    </div>
</template>
  
<script>
  import { mapGetters, mapMutations } from "vuex";
  import CounterElem from "@/components/common/CounterElem.vue";

  export default {
    name: 'ProductItem',
    props: {
      item: {
        type: Object,
      }
    },
    components: {
      CounterElem,
    },
    data() {
      return {
        urlRequest: "http://localhost:3000/api/goods",
        plug: require("@/assets/images/plug.jpg"),
      }
    },
    methods: {
      ...mapMutations("Cart", ["ADD_TO_CART", "DELETE_TO_CART"]),
      add_to_cart() {
        let count = this.item.count + 1;
        this.$set(this.item, "count", count);
        this.ADD_TO_CART(this.item);
      },
      countPlus(count) {
        this.$set(this.item, "count", count);
        this.ADD_TO_CART(this.item);
      },
      countMinus(count){
        console.log(count)
        this.$set(this.item, "count", count);
        this.ADD_TO_CART(this.item);

        if(count === 0) {
          this.DELETE_TO_CART(this.item.id);
        }
      },
    },
    computed: {
      ...mapGetters("Auth", ["token", "isAdmin"]),
      imagePath() {
        try {
          return require(`@/assets/${this.item.image}`);
        } catch (e) {
          return this.plug;
        }
      },
      updateCountFromCart() {
        if (localStorage.getItem("Cart")) {
          JSON.parse(localStorage.getItem("Cart")).forEach(elem => {
            if (elem.id === this.item.id) {
              this.$set(this.item, "count", elem.count);
            }
          })
        }
        
        return this.item.count;
      }
    },
    created() {
      this.$set(this.item, "count", 0);
    }
  }
</script>

<style lang="scss">

.products__item {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: calc((100% / 3) - 20px);
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  background-color: $white;
}

.products__item-image {
    height: 220px;
    width: 100%;
    background-color: #fff;
    margin-bottom: 20px;
    padding: 20px 10px 10px;
}

.products__item-title,
.products__item-description,
.products__item-price {
  padding-left: 20px;
  padding-right: 20px;
}

.products__item-title {
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  margin-bottom: 10px;
}

.products__item-description {
  font-size: 16px;
  line-height: 20px;
  text-align: justify;
  letter-spacing: -1px;
  margin-bottom: 25px;
  font-weight: 500;
}

.products__item-price {
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
  text-align: right;
  margin-top: auto;
  margin-bottom: 10px;
}

.products__item-parametrs {
  display: flex;
  align-items: center;
}

.products__item-counter {
  display: flex;
  align-items: center;

  input {
    margin-bottom: 0;
    max-width: 50px;
  }
}

.products__item-count {
  width: 50px;
}
</style>
  