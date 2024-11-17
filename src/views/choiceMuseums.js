import { MUSEUMS } from "../constants.js";

export function choiceMuseums() {
    const museumsContainer = document.createElement('div');
    museumsContainer.classList.add('museum-container');
    MUSEUMS.forEach(museum => {
        const museumBtn = document.createElement('button');
        museumBtn.classList.add('museum-btn');
        const museumLogoBackground = document.createElement('div');
        museumLogoBackground.classList.add('museum-logo-background');
        const museumLogo = document.createElement('img');
        museumLogo.classList.add('museum-logo');
        museumLogo.src = museum.logo;
        const museumNameBackground = document.createElement('div');
        museumNameBackground.classList.add('museum-name-background');
        const museumName = document.createElement('h3');
        museumName.textContent = museum.name;
        museumNameBackground.appendChild(museumName);
        museumLogoBackground.appendChild(museumLogo);
        museumBtn.appendChild(museumNameBackground);
        museumBtn.appendChild(museumLogoBackground);

        museumBtn.addEventListener('mouseover', () => {
            museumLogo.src = museum.logo_red; 
        });
    
        
        museumBtn.addEventListener('mouseout', () => {
            museumLogo.src = museum.logo; 
        });

        museumsContainer.appendChild(museumBtn);
    });
    return museumsContainer;
}