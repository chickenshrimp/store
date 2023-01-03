<template>
    <li><div class="modal-good">
        <div class="text">{{ cart_item_data.name }}</div>
        <img :src="require('../assets/icecream-pics' + cart_item_data.image)">
        <div class="text">${{ cart_item_data.cost }}</div>
        <div class="quantity">Quantity: {{ cart_item_data.number }}</div>
        <button class="delete" @click="deleteFromCart">Delete</button>
    </div></li>
</template>

<script>
export default {
    name: 'CartItem',
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        deleteFromCart() {
            this.$emit('deleteFromCart')
        }
    },
    mounted() {
        
    }
}
</script>

<style>
.modal-good {
    height: 300px;
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

.text, .quantity {
    font-family: SomeCoolFont;
    color: #490a43;
    font-weight: 500;
    padding-top: 7px;
    font-size: 18px;
}

.total {
    font-family: SomeCoolFont;
    font-size: 19px;
}

.delete {
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