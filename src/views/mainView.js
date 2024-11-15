import { choiceMuseums } from "./choiceMuseums.js";

export const createMainView = () => {
    const element = document.createElement('div');
    element.innerHTML = String.raw`
    <div id="main-txt">
        <h1>What is new in the old history?</h1>
        <h2>On this week we are looking at first ten images for every department only in three museums, that present below.</h2>
    </div>
    `;
    element.appendChild(choiceMuseums());
    return element;
};

