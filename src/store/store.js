import { createStore } from 'vuex'
import {ref} from "vue";
import actions from "@/js/actions";
import getters from "@/js/getters";

export default createStore({
    state:{
        allDetails: [],
        orderDetails: ref([]),
        searchedDetails: []
    },
    actions: actions,
    getters: getters,
})


