// const url = "http://localhost:8080/api"
// // const url = "https://homekitchenserver.herokuapp.com/api"

import {server} from "./serverUrl";
const url = server
export const findAllOrders = () =>
    fetch(`${url}/orders`)
        .then(response => response.json())

export const createOrder = (newOrder) =>
    fetch(`${url}/orders`,{
        method:"POST",
        body:JSON.stringify(newOrder),
        headers:{
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())


export const deleteOrder = (orderId) =>
    fetch(`${url}/orders/${orderId}`,{
        method:'DELETE'
    })
        .then(response => response.json())


export default {
    findAllOrders, createOrder
}

