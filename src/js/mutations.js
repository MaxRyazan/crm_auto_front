import store from "@/store/store";

export default {
     clearTable (){
        store.state.allDetails = []
    },
    showTodayOrders(){
        console.log('1111')
    },
    showAllActiveOrders(){
        console.log('111')
    },
    showOrdersHistory(){
        console.log('1111')
    }
}