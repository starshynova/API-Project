
export const MUSEUMS = 
[
    {
    name: "Metropolitan museum",
    api: "https://collectionapi.metmuseum.org/public/collection/v1/departments",
    getDepartmentIdApi: (departmentId) => 
        `https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${departmentId}&q=cat`,
    getObjectIdApi: (objectId) => 
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`,
    logo: "https://i.postimg.cc/Jh2mQ8M9/the-Met-bw.jpg",
    logo_red: "https://i.postimg.cc/3rPNTXMP/the-Met-red.jpg"
    },
    {
    name: "Rijksmuseum",
    api: "https://www.rijksmuseum.nl/api/nl/collection?key={api-key}&involvedMaker=Rembrandt+van+Rijn",
    logo: "https://i.postimg.cc/PrwHz9R7/Rijksmuseum-bw.jpg",
    logo_red: "https://i.postimg.cc/VsM1X2TV/Rijksmuseum-red-1.jpg"
    },
    {
    name: "The British Museum",
    api: "",
    logo: "https://i.postimg.cc/WpKjZTXr/Br-mus-bw.png",
    logo_red: "https://i.postimg.cc/W4Xc1vdd/Br-mus-red.jpg"
    }
]