import { MUSEUMS } from "../constants.js";
import { createMainView } from "../views/mainView.js";
import { getDepartments } from "./departmentsPage.js";
import { errorPage } from "./errorPage.js";

export let museumApi;
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
        // museumApi = apiUrl; 
        getDepartments(apiUrl);
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