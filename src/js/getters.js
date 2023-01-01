
export default {
    calculateSum(state){
       return state.orderDetails.reduce(function (sum, currentValue){
           return sum + currentValue.price
       }, 0)
    },
    showDateTimeNow(){
        const newDate = new Date()
        return  newDate.getDay() + 1 + '-' + newDate.getMonth() + 1 + '-' + newDate.getFullYear() + ' Time: ' + newDate.getHours() + ':' + newDate.getMinutes()
    }
}