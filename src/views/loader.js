

export function showLoader () {
    const mask = document.createElement('div');
    mask.classList.add('mask');
    const loader = document.createElement('div');
    loader.classList.add('loader');
    mask.appendChild(loader);
    document.body.appendChild(mask);  
};

export function hideLoader () {
    const mask = document.querySelector('.mask');
    if (mask) {
        mask.remove(); 
    }
};