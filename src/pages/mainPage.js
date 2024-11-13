import { MUSEUMS } from "../constants.js";
import { createMainView } from "../views/mainView.js";
import { getDepartments } from "./departmentsPage.js";
import { errorPage } from "./errorPage.js";

export const museumApi = '';
// export const getMuseumApi = () => museumApi;
export const mainPage = () => {
    const mainInterface = document.querySelector('#mainInterface');
    mainInterface.innerHTML = '';

    const mainElement = createMainView();
    mainInterface.appendChild(mainElement);

    document.querySelectorAll('button').forEach((button, index) => {
        button.addEventListener('click', () => someFunction(MUSEUMS[index].api));
    });
}

async function someFunction(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("API is wrong"); 
        }
        const data = await response.json();
    //     if (data && typeof data !== 'string') {
    //         museumApi = data;
    //         getDepartments(museumApi);
    //     }
    //     else {
    //         errorPage();
    //     }
    // }
    // catch (error) {
    //     errorPage();
    // }



    if (data && data.departments) {
        museumApi = apiUrl; 
        window.location.href = "./departmentsPage.js";
        // getDepartments(museumApi);
    // if (data.departments) {
    //     // Display the departments to confirm the data flow is correct
    //     console.log("Departments:", data.departments);
    } else {
        throw new Error("Invalid data structure from API");
    }
} catch (error) {
    console.error("API Error:", error);
    errorPage();
}
}

document.addEventListener('DOMContentLoaded', mainPage);
// mainPage();