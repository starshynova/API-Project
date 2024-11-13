import { MUSEUMS } from "../constants";

async function getDepartments() {
    
    const departmentsList = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/departments');
    const data = await departmentsList.json();
    return data.departments;
}