import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import Vue from 'vue'
import App from './App.vue'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPlus);
library.add(faMinus);
library.add(faTrash);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
