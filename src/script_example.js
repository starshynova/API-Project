// const url = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';

// async function getObjectIDs() {
//   const response = await fetch(url);
//   const data = await response.json();
//   return data.objectIDs.slice(0, 10); // Возвращаем первые 1000 ID
// }

// async function getObjectData(objectID) {
//     const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`;
//     const response = await fetch(url);
//     return response.json();
//   }

//   async function getFirst1000ObjectsData() {
//     const objectIDs = await getObjectIDs();
//     const objectData = [];
    
//     for (let id of objectIDs) {
//       const data = await getObjectData(id);
//       objectData.push(data);
//     }
//     return objectData;
//   }

//   getFirst1000ObjectsData().then(data => console.log(data));

// fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/207219')
//    .then((data) => {
//        return data.json();})
//    .then((data) => {
//            console.log(data)
//    });

//    https://collectionapi.metmuseum.org/public/collection/v1/departments

//    fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=12&q=cat')
   
//    .then((data) => {
//        return data.json();})
//    .then((data) => {
//            console.log(data)
//    });
async function getDepartments() {
    const departmentsList = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/departments');
    const data = await departmentsList.json();
    return data.departments;
}
// async function getObjectIDs() {
//       const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=12&q=cat');
//       const data = await response.json();
//       const newArray = data.objectIDs.slice(0, 10); 
//       return newArray;
//     // console.log(newArray);
    // }
    
    
// getObjectIDs().then(newArray => console.log(newArray));

const randomNumber = 5;

async function getDepartmentById(id) {
    try {
        const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/departments');
        const data = await response.json();
        
        const department = data.departments.find(department => department.departmentId === id);
        
        if (department) {
            console.log(department.displayName); 
            return department.displayName;
        } else {
            console.log('Department not found');
            return null;
        }
    } catch (error) {
        console.error('Error fetching departments:', error);
    }
}



async function getObjectIDs() {
          const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${randomNumber}&q=cat`);
          const data = await response.json();
          const newArray = data.objectIDs.slice(0, 10); 
          return newArray;
        }

// getDepartmentById(randomNumber);

// getObjectIDs().then(newArray => console.log(newArray));

async function main() {
    await getDepartments()
    .then((data) => {console.log(data);});
    await getDepartmentById(randomNumber);
    const objectIDs = await getObjectIDs();
    console.log('Object IDs:', objectIDs); 
    objectIDs.forEach(element => {
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${element}`)
   .then((data) => {
       return data.json();})
   .then((data) => {
    if (data.primaryImage)
           {console.log(data.primaryImage)
            console.log(data.department);
           }
    else {console.log('Image not found')}
   });
    });
}

main();

