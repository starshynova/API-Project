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

fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/207219')
   .then((data) => {
       return data.json();})
   .then((data) => {
           console.log(data)
   });

//    fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=12&q=cat')
//    .then((data) => {
//        return data.json();})
//    .then((data) => {
//            console.log(data)
//    });


   