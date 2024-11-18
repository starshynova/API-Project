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
        button.addEventListener('click', () => {
            museumApi = MUSEUMS[index].api;
            getMuseumApi(museumApi)});
    });
}

async function getMuseumApi(museumApi) {
    try {
        const response = await fetch(museumApi);
        if (!response.ok) {
            throw new Error("API error"); 
        }
        const data = await response.json();



    if (data && data.departments) {
        getDepartments(museumApi);
    } else {
        throw new Error("Invalid data structure from API");
    }
} catch (error) {
    errorPage(error.message); 
}
}
