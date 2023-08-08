<template>
    <div class="counter">
        <button class="btn" @click="$emit('deleteItem', --counter)" :disabled="counter <= 0">-</button>
        <div class="counter__num">{{ counter }}</div>
        <button class="btn" @click="$emit('addItem', ++counter)">+</button>
    </div>
</template>

<script>
export default {
    name: "CounterElem",
    data() {
        return {
            counter: this.count,
        }
    },
    props: {
        count: {
            type: Number,
        }
    }
}
</script>

<style lang="scss">
.counter {
    display: flex;
    align-items: center;

    &__num {
        width: 50px;
    }
}
</style>