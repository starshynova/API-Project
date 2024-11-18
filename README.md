# Museum App

## Overview

In this application, the user can explore the works of art that are displayed in the museum.

## Usage

1. The user can select one of three museums. The API of each museum are assigned differently, so the user can see different behaviour of the system.
2. After selecting a museum with correct API, the user can see all departments of this museum.
3. After the user selects the needed department, he can see 10 photos of artworks that present in this department. Also by clicking on the image the user can see the data about this object.
4. By clicking on an image, the user can see data about that object.

## Technologies

1. HTML
2. CSS
3. JavaScript
4. API integration

## Getting started

You can try this app by visiting [Museum App](https://starshynova.github.io/API-Project/)

## Structure of the project

```
├── README.md
├── index.html
├── public
│   └── style.css
└── src
    ├── pages
    │   ├── departmentData.js
    │   ├── departmentPage.js
    │   ├── errorPage.js
    │   └──mainPage.js
    ├── views
    │   ├──back.js
    │   ├──choiceMuseums.js
    │   ├──departmentItemView.js
    │   ├──errorView.js
    │   ├──loader.js
    │   ├──mainView.js
    │   └──modalView.js
    ├──constants.js
    └──script.js
```

