<template>
  <div class="page">
    <div class="header">
      <div class="logo">Genius IceCream Cart</div>
    </div>
    <div class="cart">
      <CartItem
      :cart_data="CART"
      v-for="(item, index) in CART"
      :key="item.name"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"/>
      
    </div>
    
  </div>
</template>

<script>
import CartItem from './CartItem.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CartPage',
  components: { CartItem },
  computed: {
    ...mapGetters([ 
      'CART'
    ])
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART'
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
  background-color: #d4d5cf;
}

.logo {
  padding-top: 30px;
  float: left;
  text-align: center;
  margin-right: 400px;
  font-family: SomeCoolFont;
  font-weight: 800;
  font-size: 65px;
  color: #74166a;
}

.cart{
  margin-top: 60px;
}
</style>