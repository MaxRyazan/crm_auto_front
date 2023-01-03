import store from "@/store/store";

export default {

    async findBy (_, param){
        store.state.allDetails = await store.dispatch('findByParam', param)
    },

    async findByParam(_, param) {
        switch (param) {
            case 'Article' : {
                const response = await fetch('http://localhost:8080/details/api/v1/ARTICLE/' + store.state.article)
                return await response.json()
            }
            case 'Manufacturer' : {
                const response = await fetch('http://localhost:8080/details/api/v1/MANUFACTURER/' + store.state.manufacturer)
                return await response.json()
            }
            case 'Name' : {
                const response = await fetch('http://localhost:8080/details/api/v1/NAME/' + store.state.name)
                return await response.json()
            }
            case 'CarMark' : {
                const response = await fetch('http://localhost:8080/details/api/v1/MARK/' + store.state.carMark)
                return await response.json()
            }
            case 'Vin' : {
                const response = await fetch('http://localhost:8080/details/api/v1/VIN/' + store.state.vin)
                return await response.json()
            }
        }
    },

    async findActiveOrders(){
        const orders = await fetch('http://localhost:8080/details/api/v1/order-active')
        store.state.activeOrders =  await orders.json()
    },

    async findDeadLineOrders(){
        const orders = await fetch('http://localhost:8080/details/api/v1/order-deadline')
        store.state.deadLineOrders =  await orders.json()
    },
    async findAllOrders(){
        const orders = await fetch('http://localhost:8080/details/api/v1/order-all')
        store.state.allOrders =  await orders.json()
    },

    async closeOrder(_, order) {
        order.status = 'CLOSED'
        store.state.deadLineOrders = store.state.deadLineOrders.filter(o => o.id !== order.id)
        store.state.activeOrders = store.state.activeOrders.filter(o => o.id !== order.id)
        await fetch('http://localhost:8080/details/api/v1/order-new', {
            method: 'POST',
            body: JSON.stringify(order)
        })
    }
}