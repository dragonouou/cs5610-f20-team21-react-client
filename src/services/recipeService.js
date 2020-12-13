const searchUrl = "https://api.spoonacular.com/recipes/complexSearch"
const url ="https://api.spoonacular.com/recipes"
const apiKey = "apiKey=c8b6eac40e34427886d68e4409e9ae56"
const maxNum = "number=4"

const serverUrl = "http://localhost:8080/api"

export const findRecipesByTitle = (title) =>
    fetch(`${searchUrl}?${apiKey}&query=${title}&${maxNum}`)
        .then(response => response.json())

// export const findSummaryById = (recipeId) =>
//     fetch(`${url}/${recipeId}/summary?${apiKey}`)
//         .then(response => response.json())

export const findRecipeById = (recipeId) =>
    fetch(`${url}/${recipeId}/information?${apiKey}`)
        .then(response => response.json())

export const findRecipeForUser = (userId) =>
    fetch(`${serverUrl}/users/${userId}/recipes`)
        .then(response => response.json())
