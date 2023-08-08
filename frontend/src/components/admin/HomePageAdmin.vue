<template>
    <div class="admin">
        <div class="admin__menu">
            <router-link to="/admin/products">
                <span>Товары</span>
            </router-link>
        </div>
        <div class="row">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePageAdmin',
}
</script>

<style lang="scss">

    .admin {
        display: flex;
        align-items: flex-start;
    }

    .admin__menu {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 20px;
        max-width: 200px;
        width: 100%;

        > * {
            margin-bottom: 10px;
        }
    }
</style>