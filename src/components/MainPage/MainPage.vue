<template>
  <div class="page">
    <div class="header">
      <li><div class="logo">Genius IceCream Shop</div></li>

      <li><button class="bag"><router-link to="/your-bag"><img src="../assets/bagPng.png" class="bag-img"></router-link></button></li>
    </div>

    <div class="goods-body"><ul>
      <li><div class="modal-good"></div></li>
      <li><div class="modal-good"></div></li>
      <li><div class="modal-good"></div></li>
    </ul>
      <li><div class="modal-good"></div></li>
      <li><div class="modal-good"></div></li>
      <li><div class="modal-good"></div></li>
    <ul>
      <li><div class="modal-good"></div></li>
      <li><div class="modal-good"></div></li>
      <li><div class="modal-good"></div></li>
    </ul></div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
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
.bag {
  padding-top: 50px;
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
  height: 250px;
  width: 250px;
  background-color: rgb(229, 231, 210);
  border-radius: 20px;
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
  src: '../assets/Genshin_Impact.ttf';
}
</style>
