import { choiceMuseums } from "./choiceMuseums.js";

export const createMainView = () => {
    const element = document.createElement('div');
    element.innerHTML = String.raw`
    <div id="main-txt">
        <h1>Name of my site</h1>
        <h2>Project Description</h2>
    </div>
    `;
    element.appendChild(choiceMuseums());
    return element;
};


{/* <div id="choice-museums">
        <button class="museum">Museum1</button>
        <button class="museum">Museum2</button>
        <button class="museum">Museum3</button>
    </div> */}