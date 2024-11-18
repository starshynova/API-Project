import { hideLoader, showLoader } from "../views/loader.js";
import { departmentId, getDepartments } from "./departmentsPage.js";
import { back } from "../views/back.js";
import { museumApi } from "./mainPage.js";
import { modalWindow } from "../views/modalView.js";

export let objectId;
export let objectData;
export async function getDepartmentData() {

    const mainInterface = document.querySelector('#mainInterface');
    mainInterface.innerHTML = '';
    const backButton = back();
    backButton.addEventListener('click', () => {
        getDepartments(museumApi); 
    });
    mainInterface.appendChild(backButton);
    const departmentData = document.createElement('div');
    departmentData.classList.add('department-data');

    try {
        showLoader();

        const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${departmentId}&q=cat`);
        const data = await response.json();


let imagesFetched = 0;

    for (let i = 0; i < data.objectIDs.length && imagesFetched < 10 && i < 30; i++) {
        objectId = data.objectIDs[i];

            const objectResponse = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`);
            objectData = await objectResponse.json();
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
            departmentData.textContent = "No images found in this department.";
        }
    } catch (error) {
        console.error("Error fetching department data:", error);
    } finally {
        hideLoader();
    }

    mainInterface.appendChild(departmentData);
}