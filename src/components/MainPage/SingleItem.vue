<template>
    <li>
        <div class="modal-good">
            <div class="text">{{ product_data.name }}</div>
            <img :src="require('../assets/icecream-pics' + product_data.image)">
            <div class="text">${{ product_data.cost }}</div>
            <button class="add-to-cart" @click="addItemToCart()">Add to cart</button>
        </div>
    </li>
</template>

<script>
export default {
    name: 'modal-good',
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

        }
    },
    methods: {
        addItemToCart() {
            this.$emit('addItemToCart', this.product_data);
            sessionStorage.setItem(`${this.product_data.name}`, JSON.stringify(this.product_data));
        },

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
}

.text {
    font-family: SomeCoolFont;
    color: #490a43;
    font-weight: 500;
    padding-top: 7px;
    font-size: 23px;
}

.add-to-cart {
    border-radius: 5px;
    border: none;
    background-color: #d6d8c8;
    margin-top: 8px;
    justify-items: center;
    max-height: 37px;
    cursor: pointer;
    font-size: 18px;
    color: #490a11;
    font-family: SomeCoolFont2;
}

li {
    display: inline-block;
    margin: 15px 40px;
}
</style>