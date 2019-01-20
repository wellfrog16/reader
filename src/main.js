import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router/router';
import store from '@/store/store';
import Hammer from 'hammer';
// import $ from 'jquery';

Vue.config.productionTip = false;

function vueTouch(el, type, binding) {
    const hammertime = new Hammer(el);
    hammertime.on(type, binding.value);
}

Vue.directive('tap', {
    bind: function(el, binding) {
        vueTouch(el, 'tap', binding);
    }
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
