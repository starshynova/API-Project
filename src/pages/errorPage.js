import { createErrorView } from "../views/errorView.js";
export function errorPage () {
    const mainInterface = document.querySelector('#mainInterface');
    mainInterface.innerHTML = '';

    const mainElement = createErrorView();
    mainInterface.appendChild(mainElement);
}