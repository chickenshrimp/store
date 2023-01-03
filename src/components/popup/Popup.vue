<template>
    <div class="overlay" @click="close">
        <div class="popup">
            <div class="popup-header">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PopupModal',
    props: {},
    computed: {},
    methods: {
        close() {
            this.$emit('close');
        },
    },
}
</script>

<style>
.overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup {
    height: 400px;
    width: 550px;
    background-color: rgb(223, 216, 207);
    border-radius: 13px;
    
}

.popup-header {
    padding-top: 20px;
    max-width: 500px;
    justify-content: center;
    justify-items: center;
    margin: auto;
}
</style>