<template>
    <li>
        <div class="modal-good">
            <div class="text">{{ product_data.name }}</div>
            <img :src="require('../assets/icecream-pics' + product_data.image)" @click="showPopupInfo">
            <div class="text">${{ product_data.cost }}</div>
            <button class="add-to-cart" @click="addItemToCart()">Add to cart</button>
        </div>

        <PopupModal v-if="isInfoPopupVisible" @close="close">
            <div class="text">{{ product_data.name }}</div>
            <img :src="require('../assets/icecream-pics' + product_data.image)">
            <div class="text">{{ product_data.description }}</div>
        </PopupModal>
    </li>

</template>

<script>
import PopupModal from '../popup/Popup.vue'

export default {
    name: 'modal-good',
    components: { PopupModal },
    props: {
        product_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            isInfoPopupVisible: false,
        }
    },
    methods: {
        addItemToCart() {
            this.$emit('addItemToCart', this.product_data);
            if (!localStorage.getItem(`${this.product_data.name}`)) {
                localStorage.setItem(`${this.product_data.name}`, JSON.stringify(this.product_data));
            }  
        },
        showPopupInfo() {
            this.isInfoPopupVisible = true;
        },
        close() {
            this.isInfoPopupVisible = false;
        }
    },

}
</script>

<style>
.modal-good {
    height: 260px;
    width: 260px;
    background-color: rgb(229, 231, 210);
    border-radius: 20px;
    border: none;
}

img {
    padding-top: 13px;
    max-height: 130px;
    border-radius: 6px;
    cursor: pointer;
}

.text {
    font-family: SomeCoolFont;
    color: #490a43;
    font-weight: 300;
    padding-top: 7px;
    font-size: 18px;
}

.add-to-cart {
    border-radius: 5px;
    border: none;
    background-color: #d6d8c8;
    margin-top: 8px;
    justify-items: center;
    max-height: 37px;
    cursor: pointer;
    font-size: 23px;
    color: #490a11;
    font-family: SomeCoolFont2;
}

.add-to-cart:active {
    background-color: rgba(219, 88, 23, 0.329)
}

li {
    display: inline-block;
    margin: 15px 40px;
}
</style>