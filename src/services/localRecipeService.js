// const url = "http://localhost:8080/api"
// // const url = "https://homekitchenserver.herokuapp.com/api"

import {server} from "./serverUrl";
const url = server
export const findRecipeById = (rid) =>
    fetch(`${url}/recipes/${rid}`)
        .then(response => response.json())
