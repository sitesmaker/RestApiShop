<template>
  <div id="app">
    <AppLayout />
  </div>
</template>

<script>
import AppLayout from "@/layouts/AppLayout.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    AppLayout,
  },
  methods: {
    ...mapMutations("Auth", ["REMOVE_TOKEN"])
  },
  computed: {
    ...mapState("Auth", ["token"]),
  },
};
</script>

<style lang="scss">
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  #app {
    height: 100%;
    position: relative;

    & > div {
      display: flex;
      flex-flow: column;
      min-height: 100%;
    }
  }

  .row {
    display: flex;
    max-width: 1290px;
    width: 100%;
    padding-left: 50px;
    padding-right: 50px;
    margin-left: auto;
    margin-right: auto;
  }

  a {
    color: #333;
    text-decoration: none;
    cursor: pointer;
    display: inline;
    
    span {
      position: relative;

      &::before {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        transition: all ease-in-out .4s;
        background-color: $main-color;
      }
    }

    &:hover {

      span {

        &::before {
          width: 100%;
          transition: all ease-in-out .4s;
        }
      }
    }
  }

  .link {
    color: $main-color;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;
    width: 100%;
    margin: auto;
  }

    input,
    textarea {
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 10px;
    }
</style>
