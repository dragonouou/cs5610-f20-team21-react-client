const orderUrl = "http://localhost:8080/api/orders"

const findAllOrder = () =>
    fetch(orderUrl)
        .then(response => response.json())

const createOrder = (userid,order) =>
    fetch(`${orderUrl}/${userid}/orders`,{
        method: "POST",
        body: JSON.stringify(order),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())


