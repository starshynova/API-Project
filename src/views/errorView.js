export function createErrorView(error) {
   // const emptyScreen = document.querySelector('interface');
   // emptyScreen.innerHTML = '';
   const errorContainer = document.createElement('div');
   errorContainer.classList.add('error_container');
   const errorTxt = document.createElement('h3');
   errorTxt.textContent = "Something went wrong";
   errorContainer.appendChild(errorTxt);
   // emptyScreen.appendChild(errorContainer);
   // return emptyScreen;
   return errorContainer;
}