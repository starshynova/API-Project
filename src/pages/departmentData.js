import { departmentId } from "./departmentsPage.js";

export async function getDepartmentData(departmentName) {
    // console.log(departmentName)
    const mainInterface = document.querySelector('#mainInterface');
    mainInterface.innerHTML = '';
    const departmentData = document.createElement('div');
    departmentData.classList.add('department-data');

    
        const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${departmentId}&q=cat`);
        const data = await response.json();
        const dataObjects = data.objectIDs.slice(0, 10); //Array
        console.log(dataObjects);
        dataObjects.forEach(element => {
            fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${element}`)
   .then((data) => {
       return data.json();})
   .then((data) => {
    const objectImage = document.createElement('img');
    objectImage.classList.add('object-img');
    objectImage.src = data.primaryImage;
    if (data.primaryImage)
           {
            objectImage.src = data.primaryImage;
            departmentData.appendChild(objectImage);
           }
    else {console.log('Image not found')}
   });
        });
    

    mainInterface.appendChild(departmentData);
}