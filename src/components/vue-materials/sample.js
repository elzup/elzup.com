var Vue = require('vue');

var app = new Vue({
  el : '#app',
  components: {
    'my-hoge': {
      template: require('./template-hoge.html')
    },
    'my-foo': {
      template: require('./template-foo.html')
    }
  }
});
