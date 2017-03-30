<template>
  <div class="cart">
    <h2>你的购物车</h2>
    <p v-show="!products.length"><i>请添加商品</i></p>
    <ul>
      <li v-for="p in products">
        {{p.title}} - {{p.price | currency}} x {{p.quantity}}
      </li>
    </ul>
    <p>Total:{{total | currency}}</p>
    <p><button :disabled="!products.length" @click="checkout(products)">checkout</button></p>
    <p v-show="checkoutStatus">checkout {{ checkoutStatus }}</p>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  export default {
    computed: {
      ...mapGetters({
        products:'cartProducts',
        checkoutStatus: 'checkoutStatus'
      }),
      total(){
        return this.products.reduce((total,p) => {
          return total + p.price* p.quantity
        },0)
      }
    },
    methods:{
      checkout(products){
        this.$store.dispatch('checkout',products)
      }
    }
  }
</script>
