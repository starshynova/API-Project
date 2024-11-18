import { hideLoader, showLoader } from "../views/loader.js";
import { departmentId, getDepartments } from "./departmentsPage.js";
import { back } from "../views/back.js";
import { museumApi } from "./mainPage.js";
import { modalWindow } from "../views/modalView.js";
import { MUSEUMS } from "../constants.js";


export let objectId;
export let objectData;
export async function getDepartmentData(departmentName) {

    const mainInterface = document.querySelector('#mainInterface');
    mainInterface.innerHTML = '';
    const backButton = back();
    backButton.addEventListener('click', () => {
        getDepartments(museumApi); 
    });
    mainInterface.appendChild(backButton);
    const departmentTitle = document.createElement('h2');
    departmentTitle.textContent = departmentName;
    mainInterface.appendChild(departmentTitle);
    const departmentData = document.createElement('div');
    departmentData.classList.add('department-data');

    try {
        showLoader();

        const departmentApiUrl = MUSEUMS.find((museum) => museum.api === museumApi)
            .getDepartmentIdApi(departmentId);

        const response = await fetch(departmentApiUrl);
        const data = await response.json();


let imagesFetched = 0;

    for (let i = 0; i < data.objectIDs.length && imagesFetched < 10 && i < 30; i++) {
        objectId = data.objectIDs[i];

        const objectApiUrl = MUSEUMS.find((museum) => museum.api === museumApi)
        .getObjectIdApi(objectId);

        const objectResponse = await fetch(objectApiUrl);
        const objectData = await objectResponse.json();
            
        if (objectData.primaryImage) {
                const objectImage = document.createElement('img');
                objectImage.classList.add('object-img');
                objectImage.src = objectData.primaryImage;

                objectImage.addEventListener('click', (() => {
                    const currentObjectData = objectData; 
                    return () => {
                        modalWindow(currentObjectData); 
                    };
                })());

                departmentData.appendChild(objectImage);

                imagesFetched++;
            }
        }

        if (imagesFetched === 0) {
            const departmentDataError = document.createElement('h3');
            departmentDataError.textContent = "No images found in this department.";
            departmentDataError.classList.add('blue');
            departmentData.appendChild(departmentDataError); 
        }
    } catch (error) {
        console.error("Error fetching department data:", error);
        errorPage(error.message);
    } finally {
        hideLoader();
    }

    mainInterface.appendChild(departmentData);
}