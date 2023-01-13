<template>
  <div class="page">
    <div class="header">
      <li>
        <div class="logo">Genius IceCream Shop</div>
      </li>
      <li><button class="bag"><router-link to="/your-cart"><img src="../assets/bagPng.png"
              class="bag-img"></router-link>
        </button>
        <button class="bag"><router-link to="/your-profile"><img src="../assets/Sample_User_Icon.png"
              class="bag-img"></router-link>
        </button>
      </li>
    </div>

    <div class="goods-body">
      <li><CatalogItem v-for="product in PRODUCTS" :key="product.name"
      :product_data="product"
      @addItemToCart="addItemToCart"
      /></li>
    </div>
  </div>
</template>

<script>

import CatalogItem from '../MainPage/SingleItem.vue'
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'MainPage',
  components: { CatalogItem},
  data: () => {
    return {
      cart: [],
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART'
    ])
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART',
      'ADD_TO_CART_FROM_LOCAL'
    ]),
    addItemToCart(data) {
      this.ADD_TO_CART(data)
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API(),
    this.ADD_TO_CART_FROM_LOCAL()
  },
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
  background-color: #d4d5cf;
}

img {
  padding-top: 13px;
  max-height: 130px;
  border-radius: 6px;
}

.text {
  font-family: SomeCoolFont2;
  color: #490a43;
  font-weight: 500;
  padding-top: 7px;
  font-size: 23px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: rgba(13, 10, 1, 0.07);
}

.modal {
  position: fixed;
  z-index: 100;
  padding: 60px 0;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 300px;
  width: 610px;
  top: 50%;
  background-color: #fff;
  border-radius: 5px;
}

.logo {
  padding-top: 30px;
  float: left;
  text-align: center;
  margin-right: 400px;
  font-family: SomeCoolFont;
  font-weight: 800;
  font-size: 55px;
  color: #74166a;
}

.bag {
  padding-top: 35px;
  float: right;
  height: 65px;
  width: 65px;
  cursor: pointer;
  border: none;
  background-color: #d4d5cf;
}

.goods-body {
  margin-top: 30px;
}

.modal-good {
  height: 260px;
  width: 260px;
  background-color: rgb(229, 231, 210);
  border-radius: 20px;
  border: none;
}

.bag-img {
  height: 40px;
  width: 40px;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 15px 40px;
}

a {
  color: #42b983;
}

@font-face {
  font-family: SomeCoolFont;
  src: url('../assets/Genshin_Impact.ttf');
}

@font-face {
  font-family: SomeCoolFont2;
  src: url('../assets/beer-money12.ttf');
}
</style>
