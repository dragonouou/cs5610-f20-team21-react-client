const url = "http://localhost:8080/api"
// const url = "https://homekitchenserver.herokuapp.com/api"

export const findRecipeById = (rid) =>
    fetch(`${url}/recipes/${rid}`)
        .then(response => response.json())
