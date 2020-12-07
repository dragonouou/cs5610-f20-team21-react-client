const url = "http://localhost:8080.com/api"

export const findAllRecipes = () =>
    fetch(`${url}/recipes`)
        .then(response => response.json())

export const findRecipeById = (recipeId) =>
    fetch(`${url}/recipes/${recipeId}`)
        .then(response => response.json())

export const createRecipe = (newRecipe) =>
    fetch(`${url}/recipes`,{
        method: 'POST',
        body: JSON.stringify(newRecipe),
        headers:{
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const updateRecipe = (recipeId, newRecipe) =>
    fetch(`${url}/${recipeId}`,{
        method:"PUT",
        body:JSON.stringify(newRecipe),
        headers:{
            'content-type': "application/json"
        }
    })
        .then(response => response.json())

export default {
    findRecipeById,findAllRecipes,createRecipe,updateRecipe
}


