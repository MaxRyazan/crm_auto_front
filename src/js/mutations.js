import store from "@/store/store";

export default {
     clearTable (){
        store.state.allDetails = []
    },
    showActiveOrders(){
        console.log('1111')
    },
    showDeadLineOrders(){
        console.log('111')
    },
    showMarketOrders(){
        console.log('1111')
    },

    addToOrder(state, id){
            const detailToOrder = state.allDetails.find(d => d.id === id)

            if(state.orderDetails.filter(d => d.id === detailToOrder.id).length === 0){
                state.orderDetails.push(detailToOrder)
            }
        },

    deleteThisFromOrder(state, id) {
            state.orderDetails =  state.orderDetails.filter(d => d.id !== id)
        },


}