import { MUSEUMS } from "../constants.js";
import { museumApi } from "./mainPage.js";
import { getDepartmentData } from "./departmentData.js";
import { createDepartmentItemView } from "../views/departmentItemView.js";


// MUSEUMS.forEach(museum => {

// })
// const apiUrl = getMuseumApi();
export let departmentId;
export async function getDepartments(museumApi) {

    const departmentsList = await fetch(museumApi);
    const data = await departmentsList.json();
    // console.log(data);
    const dataDepartments = data.departments;

    const mainInterface = document.querySelector('#mainInterface');
    mainInterface.innerHTML = '';
    const departmentsContainer = document.createElement('div');
    // // return dataDepartments; //Array
// 0
// : 
// {departmentId: 1, displayName: 'American Decorative Arts'}
// 1
// : 
// {departmentId: 3, displayName: 'Ancient Near Eastern Art'}

    dataDepartments.forEach(department => {
        const departmentName = department.displayName;
        const departmentItem = createDepartmentItemView(departmentName);
        // const departmentItem = document.createElement('button');
        // departmentItem.classList.add('department-btn');
        
        // departmentItem.textContent = departmentName;
        departmentsContainer.appendChild(departmentItem);
        departmentItem.addEventListener('click', () => {
            departmentId = department.departmentId;
            getDepartmentData(departmentName);
        }
            )
    });
mainInterface.appendChild(departmentsContainer);
}

// getDepartments(museumApi);