# Hemllin - Company Website

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents



Configuration
Development Workflow
Deployment
Folder Structure
Components
Styling
Data Management
Routing
Testing
Troubleshooting
Contributing
License
- [Installation](#overview)
    - [Getting started](#getting-started)
    - [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
    - [Folder Structure](#folder-structure)
    - [Dependencies](#dependencies)
    - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Installation
1. Clone this repository and navigate into its root directory on a terminal or command line interface.
### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Project Structure

### Folder Structure
```bash
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── assets
│   │   ├── images
│   │   │   ├── illustration-editor-desktop.svg
│   │   │   ├── illustration-editor-mobile.svg
│   │   │   ├── illustration-laptop-desktop.svg
│   │   │   ├── illustration-laptop-mobile.svg
│   │   │   ├── illustration-phones.svg
│   │   │   ├── illustration-stay-productive.png
│   │   │   ├── logo.svg
│   │   │   ├── pattern-background-desktop.svg
│   │   │   ├── pattern-background-mobile.svg
│   │   │   ├── photo1.png
│   │   │   ├── photo2.png
│   │   │   └── ...
│   ├── components/
│   │   ├── aboutnav/
│   │   │   ├── AboutNav.jsx
│   │   │   └──  aboutnav.css
│   │   ├── articles/
│   │   │   ├── Articles.jsx
│   │   │   ├── articles.css
│   │   │   └── ...
│   │   ├── features/
│   │   │   ├── Features.jsx
│   │   │   ├── features.css
│   │   │   └── ...
│   │   ├── footer/
│   │   │   ├── Footer.jsx
│   │   │   └── footer.css
│   │   ├── header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── industriesnav/
│   │   │   ├── IndustriesNav.jsx
│   │   │   └── industriesnav.css
│   │   ├── navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── navbar.css
│   │   ├── splashscreen/
│   │   │   ├── Splashscreen.jsx
│   │   │   └── splashscreen.css
│   │   ├── form_input/
│   │   │   ├── FormInput.jsx
│   │   │   └── form_input.css
│   │   └── index.js
│   ├── container/
│   │   ├── animate/
│   │   │   └── AnimateOnscroll.js
│   │   ├── article
│   │   │   ├── Article.jsx
│   │   │   └── article.css
│   │   ├── blog/
│   │   │   ├── Blog.jsx
│   │   │   └── blog.css
│   │   ├── dropdowns/
│   │   │   ├── AboutMenu.jsx
│   │   │   ├── AboutUs.jsx
│   │   │   ├── IndustriesMenu.jsx
│   │   │   ├── InsightsMenu.jsx
│   │   │   ├── ServicesMenu.jsx
│   │   │   └── dropdownmenu.css
│   │   ├── highlight/
│   │   │   ├── Highlight.jsx
│   │   │   └── highlight.css
│   │   ├── mobile_dropdowns/
│   │   │   ├── MobileAboutMenu.jsx
│   │   │   ├── MobileIndustriesMenu.jsx
│   │   │   ├── MobileInsightsMenu.jsx
│   │   │   ├── MobileServicesMenu.jsx
│   │   │   └── mobiledropdownmenu.css
│   │   └── index.js
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.js
│   │   │   ├── Home.css
│   │   │   └── ...
│   │   ├── About/
│   │   │   ├── About.js
│   │   │   ├── About.css
│   │   │   └── ...
│   │   └── ...
│   ├── services/
│   │   ├── api.js
│   │   └── ...
│   ├── utils/
│   │   ├── helpers.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```

#### Explanation:

 - The public directory contains the HTML template (index.html) and other static files like favicon.
 - The src directory is the main directory for the project's source code.
 - The assets directory holds static assets such as images, fonts, or videos.
 - The components directory contains reusable UI components organized into separate folders (e.g., Header, Footer) with their respective JavaScript files, CSS files, and other related files.
 - The pages directory contains components that represent different pages of the website. Each page has its folder (e.g., Home, About) with its JavaScript file, CSS file, and other related files.
 - The services directory houses modules responsible for making API requests or handling data-related tasks.
 - The utils directory contains utility/helper functions or modules used throughout the project.
 - The App.js file is the main component that serves as the entry point for the application.
 - The index.js file is responsible for rendering the root component (App) and mounting it into the DOM.
 - The .gitignore file specifies which files and directories should be ignored by version control.
 - The package.json file includes project metadata and lists dependencies and scripts.
 - The README.md file provides an overview and documentation for the project.
 - This folder structure provides a modular and organized approach to managing your React website project, separating components, pages, assets, and other resources into their respective directories. Feel free to adjust and customize it based on your specific project requirements and preferences.


### Links

- Solution URL: [https://github.com/joykara/qrcode_challenge.git]
- Live URL: [https://joykara.github.io/qrcode_challenge/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- [Styled Components](https://styled-components.com/) - For styles


### Continued development

The areas I want to continue focusing on in future projects include:
- Dealing with the styling of my margins and padding
- Refining my code lines too.


### Useful resources

- [Example resource 1](https://stackoverflow.com/questions/26665324/center-div-with-padding-instead-of-margin) - This is an amazing article which helped me finally understand how to center my margins and padding. I'd recommend it to anyone still learning this concept.


## Author

- Website - [Joy Mwende Karani](https://github.com/joykara/qrcode_challenge.git)
- Frontend Mentor - [@joykara](https://www.frontendmentor.io/profile/joykara)















<!-- ### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
