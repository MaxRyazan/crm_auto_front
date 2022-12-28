import { createStore } from 'vuex'
import {ref} from "vue";

export default createStore({
    state:{
        allDetails: ref([{}]),
        searchedDetails: []
    }
})


