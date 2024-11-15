import { hideLoader, showLoader } from "../views/loader.js";
import { departmentId } from "./departmentsPage.js";

export async function getDepartmentData(departmentName) {

    // console.log(departmentName)
    const mainInterface = document.querySelector('#mainInterface');
    mainInterface.innerHTML = '';
    const departmentData = document.createElement('div');
    departmentData.classList.add('department-data');

    try {
        showLoader();
    //     const loadingIndicator = document.createElement('div');
    // loadingIndicator.classList.add('loading');
    // loadingIndicator.textContent = 'Loading...'; 
    // mainInterface.appendChild(loadingIndicator);


        const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${departmentId}&q=cat`);
        const data = await response.json();
//         const dataObjects = data.objectIDs.slice(0, 10); //Array
//         console.log(dataObjects);
//         dataObjects.forEach(element => {
//             fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${element}`)
//    .then((data) => {
//        return data.json();})
//    .then((data) => {
//     const objectImage = document.createElement('img');
//     objectImage.classList.add('object-img');
//     objectImage.src = data.primaryImage;
//     if (data.primaryImage)
//            {
//             objectImage.src = data.primaryImage;
//             departmentData.appendChild(objectImage);
//            }
//     else {console.log('Image not found')}
//    });
//         });
    

let imagesFetched = 0;

    for (let i = 0; i < data.objectIDs.length && imagesFetched < 10 && i < 30; i++) {
        const objectId = data.objectIDs[i];

            const objectResponse = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`);
            const objectData = await objectResponse.json();

            if (objectData.primaryImage) {
                const objectImage = document.createElement('img');
                objectImage.classList.add('object-img');
                objectImage.src = objectData.primaryImage;
                departmentData.appendChild(objectImage);

                imagesFetched++;
            }
            if (imagesFetched === 10) {
                loadingIndicator.remove();
            }
        }

        if (imagesFetched === 0) {
            departmentData.textContent = "No images found in this department.";
        }
    } catch (error) {
        console.error("Error fetching department data:", error);
        // departmentData.textContent = "Error loading department data.";
    } finally {
        hideLoader();
    }

    mainInterface.appendChild(departmentData);
}