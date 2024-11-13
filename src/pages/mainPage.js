import { createMainView } from "../views/mainView";

export const mainPage = () => {
    const mainInterface = document.querySelector('mainInterface');
    mainInterface.innerHTML = '';

    const mainElement = createMainView();
    mainInterface.appendChild(mainElement);

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', departmentsPage())
    })
}