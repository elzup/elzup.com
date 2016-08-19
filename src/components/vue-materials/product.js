var Vue = require('vue');

var app = new Vue({
  el : '#app-product',
  data: {
    products: [
      { name: '投票メーカー' },
      { name: '言えるかな' },
    ]
  },
  components: {
    'product': {
      props: ['name'],
      template: require('./template-product.html')
    }
  }
});
