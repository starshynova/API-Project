

export function modalWindow(objectData) {
    const mainInterface = document.querySelector('#mainInterface');
    const modalBackground = document.createElement('div');
    modalBackground.classList.add('modal-background');
    const modalActive = document.createElement('div');
    modalActive.classList.add('modal-active');
    const modalWIndow = document.createElement('div');
    modalWIndow.classList.add('modal-window');
    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close-btn');
    closeBtn.textContent = 'Close';
    closeBtn.addEventListener('click', () => {
        modalBackground.remove(); 
    });
    
    
    const department = document.createElement('h3');
    department.classList.add('blue');
    department.textContent = `Department: ${objectData.department}`;

    const artistName = document.createElement('h3');
    artistName.classList.add('blue');
    artistName.textContent = `Artist name: ${objectData.artistDisplayName}`;
    
    const title = document.createElement('h3');
    title.classList.add('blue');
    title.textContent = `Name: ${objectData.objectName}`;

    modalWIndow.appendChild(department);
    modalWIndow.appendChild(artistName);
    modalWIndow.appendChild(title);
    modalActive.appendChild(modalWIndow);
    modalActive.appendChild(closeBtn);
    modalBackground.appendChild(modalActive);
    
    mainInterface.appendChild(modalBackground);
    return mainInterface;
}