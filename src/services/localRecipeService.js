const url = "http://localhost:8080/api"

export const findRecipeById = (rid) =>
    fetch(`${url}/recipes/${rid}`)
        .then(response => response.json())
