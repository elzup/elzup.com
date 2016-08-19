var Vue = require('vue');

var app = new Vue({
  el : '#app',
  components: {
    'my-hoge': {
      template: require('./template-hoge.html')
    },
    'my-foo': {
      template: require('./template-foo.html')
    },
    'menu-item': {
      props: ['name', 'href'],
      template: require('./template-menuitem.html')
    },
    'contact': {
      props: {
        'name': String,
        'href': String,
        'type': String,
        'is_not_skip': { type: Boolean, default: true }
      },
      template: require('./template-contact.html')
    }
  }
});
