import { MUSEUMS } from "../constants.js";
import { museumApi } from "./mainPage.js";


// MUSEUMS.forEach(museum => {

// })
// const apiUrl = getMuseumApi();
export async function getDepartments(museumApi) {

    const departmentsList = await fetch(museumApi);
    const data = await departmentsList.json();
    console.log(data);
    // return data.departments;
}

getDepartments(museumApi);