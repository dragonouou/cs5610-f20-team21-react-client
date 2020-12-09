const url = "http://localhost:8080/api/users"

export const findUserById = (uid) =>
    fetch(`${url}/${uid}`)
        .then(response => response.json())

export const createUser = (newUser) =>
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const updateUser = (uid, newUser) =>
    fetch(`${url}/${uid}`, {
        method: 'PUT',
        body: JSON.stringify(newUser),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

//createUser
export const register = (user) =>
    fetch(url,{
        method:'POST',
        body:JSON.stringify(user),
        headers:{
            'content-type':'application/json'
        },
        credentials:"include"
    }).then(response => response.json())
