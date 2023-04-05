import Vue from 'vue'
import Router from 'vue-router'
import VueMask from 'v-mask'
import Vuex from 'vuex';
import Home from '@/views/Home'
import Login from '@/views/Login'
import Users from '@/views/Users'
import KurBilgileri from '@/views/KurBilgileri'
import ChangePassword from '@/views/ChangePassword'
import Malzeme from '@/views/Malzeme/Malzeme'
import CARIKART from '@/views/CARIKART/CARIKART';
import Carikisiler from '@/views/CARIKART/Carikisiler';
import CARISUBELER from '@/views/CARIKART/CARISUBELER';
import ADAYCARIKART from '@/views/CARIKART/ADAYCARIKART';
import AdayCarikisiler from '@/views/CARIKART/ADAYCARIKISILER';
import ADAYCARISUBELER from '@/views/CARIKART/ADAYCARISUBELER';
import CRM from '@/views/Gorusmeler/CRM.vue';
import 'vuejs-dialog/dist/vuejs-dialog.min.css';
import 'vue-select/src/css/vue-select.css';
import VuejsDialog from 'vuejs-dialog';
import SatisTeklifi from '@/views/SiparisYonetimi/SatisTeklifi'
import SatisSiparisi from '@/views/SiparisYonetimi/SatisSiparisi'
import CariBakiye from '@/views/CariRaporlar/CariBakiye'
import CARIHAREKETREPORT from '@/views/CariRaporlar/CARIHAREKETREPORT'
import CARIEKSTRE from '@/views/CariRaporlar/CARIEKSTRE'
Vue.use(require('vue-moment'));
Vue.use(VuejsDialog);
Vue.use(VueMask)
// import p1 from '../../plugins/jquery/jquery.min.js';
// Vue.use(p1);
window.$ = window.jQuery = require('../../plugins/jquery/jquery.min.js');
require('../../plugins/jquery-ui/jquery-ui.min.js');
require('../../plugins/chartjs/Chart.min.js');
require('../../plugins/bootstrap/js/bootstrap.bundle.min.js');
require('../../dist/js/adminlte.min.js');
Vue.use(Vuex);

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/CRM',
      name: 'CRM',
      component: CRM
    },
    {
      path: '/changepassword',
      name: 'ChangePassword',
      component: ChangePassword
    },
    {
      path: '/CariBakiye',
      name: 'CariBakiye',
      component: CariBakiye
    }, {
      path: '/CARIHAREKETREPORT',
      name: 'CARIHAREKETREPORT',
      component: CARIHAREKETREPORT
    }, {
      path: '/CARIEKSTRE',
      name: 'CARIEKSTRE',
      component: CARIEKSTRE
    },

    {
      path: '/KurBilgileri',
      name: 'KurBilgileri',
      component: KurBilgileri
    },

    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },



    {
      path: '/carikart',
      name: 'CARIKART',
      component: CARIKART
    },
    {
      path: '/adaycarikart',
      name: 'ADAYCARIKART',
      component: ADAYCARIKART
    },
{
      path: '/carisubeler',
      name: 'CARISUBELER',
      component: CARISUBELER
    },
    {
      path: '/adaycarisubeler',
      name: 'ADAYCARISUBELER',
      component: ADAYCARISUBELER
    },

    {
      path: '/carikisiler',
      name: 'Carikisiler',
      component: Carikisiler
    },
    {
      path: '/adaycarikisiler',
      name: 'AdayCarikisiler',
      component: AdayCarikisiler
    }
    ,
    {
      path: '/malzeme',
      name: 'Malzeme',
      component: Malzeme
    },

   {
      path: '/satisteklifi',
      name: 'SatisTeklifi',
      component: SatisTeklifi
    },

    {
      path: '/satissiparisi',
      name: 'SatisSiparisi',
      component: SatisSiparisi
    },

    {
      path: '/Login',
      name: 'Login',
      component: Login
    },

  ]
})
