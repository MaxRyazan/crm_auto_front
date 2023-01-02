import { createStore } from 'vuex'
import {reactive, ref} from "vue";
import actions from "@/js/actions";
import getters from "@/js/getters";
import mutations from "@/js/mutations";

export default createStore({
    state:{
        allDetails: reactive([]),
        orderDetails: reactive([]),
        searchedDetails: [],
        activeOrders: reactive([]),
        deadLineOrders: reactive([]),

         article: ref(''),
         manufacturer: ref(''),
         name: ref(''),
         vin: ref(''),
         carMark: ref('')
    },
    actions: actions,
    getters: getters,
    mutations: mutations
})


