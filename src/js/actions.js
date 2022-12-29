
export default {
    async getAllDetails(){
        const response = await fetch('http://localhost:8080/details/api/v1/all_details')
        return await response.json()
    }
}