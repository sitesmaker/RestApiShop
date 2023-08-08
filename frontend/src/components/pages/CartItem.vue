<template>
    <div class="cart__item">
        <div class="cart__item-image">
            <img :src="imagePath">
        </div>
        <div class="cart__content">
            <div class="cart__item-title">{{ item.title }}</div>
            <div class="cart__item-description">{{ item.description }}</div>
            <div class="cart__item-count"><b>Колличество:</b> {{ item.count }}</div>
            <div class="cart__item-price"><b>Цена:</b> {{ item.price }} &#8381;</div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        item: {
            type: Object,
        }
    },
    computed: {
        imagePath() {
            try {
                return require(`@/assets/${this.item.image}`);
            } catch (e) {
                return this.plug;
            }
        }
    },
}
</script>

<style lang="scss">

.cart__item {
    display: flex;
    background-color: $white;
    padding: 20px;
    border-bottom: 1px solid $black_3;
}

.cart__item-image {
    max-width: 200px;
    width: 100%;
}

.cart__item-title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
}

.cart__item-description {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 10px;
}

.cart__item-price,
.cart__item-count {
    font-weight: 700;

    b {
        font-weight: 500;
        padding-right: 5px;
    }
}

</style>