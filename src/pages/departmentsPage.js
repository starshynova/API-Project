import { MUSEUMS } from "../constants.js";
import { mainPage, museumApi } from "./mainPage.js";
import { getDepartmentData } from "./departmentData.js";
import { createDepartmentItemView } from "../views/departmentItemView.js";
import { hideLoader, showLoader } from "../views/loader.js";
import { back } from "../views/back.js";

export let departmentId;
export async function getDepartments(museumApi) {
try {
    showLoader();
    const departmentsList = await fetch(museumApi);
    const data = await departmentsList.json();
    const dataDepartments = data.departments;

    const mainInterface = document.querySelector('#mainInterface');
    mainInterface.innerHTML = '';
    const backButton = back();
    backButton.addEventListener('click', () => {
        mainPage(); 
    });
    mainInterface.appendChild(backButton);
   

    const departmentsContainer = document.createElement('div');
    departmentsContainer.classList.add('departments-container')

    dataDepartments.forEach(department => {
        const departmentName = department.displayName;
        const departmentItem = createDepartmentItemView(departmentName);
        departmentsContainer.appendChild(departmentItem);
        departmentItem.addEventListener('click', () => {
            departmentId = department.departmentId;
            getDepartmentData(departmentName);
        }
            )
    });
mainInterface.appendChild(departmentsContainer);
}

catch (error) {
    console.error("Error data loading", error);
} finally {
    hideLoader();
}
}