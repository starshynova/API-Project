import { MUSEUMS } from "../constants";

export function choiceMuseums () {
    const museumsContainer = document.createElement('div');
    MUSEUMS.forEach(museum => {
        const museumBtn = document.createElement('button');
        museumBtn.classList.add('museum-btn');
        museumBtn.textContent = museum.name;
        museumsContainer.appendChild(museumBtn);
    });
    return museumsContainer;
}