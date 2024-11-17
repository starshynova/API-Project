import { createErrorView } from "../views/errorView.js";

export function errorPage (errorMessage) {
    const mainInterface = document.querySelector('#mainInterface');
    mainInterface.innerHTML = '';

    const errorElement = createErrorView(errorMessage);
    mainInterface.appendChild(errorElement);
}