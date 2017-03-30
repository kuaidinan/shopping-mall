<template>
  <div>
      <h1>购物车demo</h1>
      <hr>
      <h2>商品</h2>
      <product-list></product-list>
      <hr>
      <cart></cart>
  </div>
</template>
<script>
  import ProductList from './ProductList.vue';
  import cart from './cart.vue';
  export default {
    components:{
      ProductList,
      cart
    }
  }
</script>
