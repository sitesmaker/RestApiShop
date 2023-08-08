<template>
    <div class="modal-overlay" ref="overlay" v-show="modalOpen" @click="closeModal" @keyup.esc="MODAL_CLOSE()">
        <div class="modal" data-js="modal">
            <button class="modal__close" @click="MODAL_CLOSE()"></button>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';

    export default {
        methods: {
            ...mapMutations("Modal", ["MODAL_CLOSE"]),
            closeModal(event) {
                let target = event.target,
                    modal = target.querySelector('[data-js="modal"]');

                if(modal) {
                    this.MODAL_CLOSE();
                }

            }
        },
        computed: {
            ...mapState("Modal", ["modalOpen"]),
            ...mapState("Auth", ["error"]),
        }
    }
</script>

<style lang="scss">
    .modal-overlay {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0, .5);
        top: 0;
        left: 0;
    }

    .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 360px;
        width: 100%;
        background-color: #fafafa;
        border-radius: 10px;
        text-align: center;
        padding: 40px 40px;
    }

    .modal__close {
        cursor: pointer;
        width: 30px;
        height: 30px;
        font-size: 14px;
        font-weight: 700;
        position: absolute;
        top:0;
        right: 0;
        background-color: transparent;
        background-image: url(../../assets/images/icons/close.svg);
        background-repeat: no-repeat;
        background-size: contain;
        outline: none;
        border: none;
        opacity: .6;
        transition: all ease-in-out 0.6s;

        &:hover {
            opacity: 1;
            transform: rotate(360deg);
            transition: all ease-in-out 0.6s;
        }
    }
</style>

