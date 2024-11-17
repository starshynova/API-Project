export function back () {
    const backBtn = document.createElement('button');
    backBtn.classList.add('back-btn');
    backBtn.textContent = 'Back';
    return backBtn;
};