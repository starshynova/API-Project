export function createErrorView(errorMessage) {
   const errorContainer = document.createElement('div');
   errorContainer.classList.add('error-container');
   const errorTxt = document.createElement('h3');
   errorTxt.textContent = getErrorText(errorMessage);
   errorContainer.appendChild(errorTxt);
   return errorContainer;
};

function getErrorText(errorMessage) {
   if (errorMessage === "API error") {
      return "Failed to connect to the API."
   } else if (errorMessage === "Invalid data structure from API") {
      return "The data received from the API is invalid."
   } else {
      return "Oops... An unexpected error"
   }
}