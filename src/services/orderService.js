const url = "http://localhost:8080.com/api"

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

export default {
    findAllOrders, createOrder
}
<<<<<<< HEAD
=======

>>>>>>> 43678878bd6b221086ec933905be554ece7e4ec2
