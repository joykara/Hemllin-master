# Hemllin - Website 
![Hemllin](https://github.com/joykara/Hemllin-master/assets/99082005/6fdf50fe-29ba-4015-b810-d8a173caf879)

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
    - [Dependencies Used](#dependencies)
    - [Links](#links)
- [My process](#my-process)
  - [Technologies Used](#technologies-used)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Installation
- Clone this repository and navigate into its root directory on a terminal or command line interface.
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
│   │   ├── ind images
│   │   │   ├── Agriculture Patterns_2.jpg
│   │   │   ├── Agriculture Patterns.jpg
│   │   │   ├── Automotive Patterns_2.jpg
│   │   │   ├── Automotive Patterns.jpg
│   │   │   ├── Education Patterns_2_.jpg
│   │   │   ├── Education Patterns.png
│   │   │   ├── ...
│   │   │   └── ...
│   │   ├── riruta_central_pics
│   │   │   ├── 514A0911.jpg
│   │   │   └── ...
│   │   ├── team
│   │   │   ├── Arthur1.jpg
│   │   │   ├── Collins0.jpg
│   │   │   └── ...
│   │   ├── ...
│   │   └── ...
│   ├── components/
│   │   ├── aboutnav/
│   │   │   ├── AboutNav.jsx
│   │   │   └──  aboutnav.css
│   │   ├── articles/
│   │   │   ├── Articles.jsx
│   │   │   ├── articles.css
│   │   │   └── ...
│   │   ├── cookieConsent/
│   │   │   └── cookieConsent.js
│   │   ├── features/
│   │   │   ├── Features.jsx
│   │   │   └── features.css
│   │   ├── footer/
│   │   │   ├── Footer.jsx
│   │   │   └── footer.css
│   │   ├── form_input/
│   │   │   ├── FormInput.jsx
│   │   │   └── formInput.css
│   │   ├── header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── industriesnav/
│   │   │   ├── IndustriesNavbar.jsx
│   │   │   └── industriesnav.css
│   │   ├── navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── navbar.css
│   │   ├── searchbar/
│   │   │   ├── SearchBar.jsx
│   │   │   └── searchbar.css
│   │   ├── splashscreen/
│   │   │   ├── Splashscreen.jsx
│   │   │   └── splashscreen.css
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
│   ├── data/
│   │   ├── List.css
│   │   ├── List.js
│   │   └── MOCK_DATA.json
│   ├── pages/
│   │   ├── about_pages/
│   │   │   ├── about-pages.css
│   │   │   ├── About.js
│   │   │   ├── HowWeWork.js
│   │   │   ├── Media.js
│   │   │   ├── OurGovernance.js
│   │   │   ├── OurHistory.js
│   │   │   ├── OurMission.js
│   │   │   ├── OurTeam.js
│   │   │   └── ...
│   │   ├── industry_pages/
│   │   │   ├── AgricultureIndustry.js
│   │   │   ├── AutomotiveIndustry.js
│   │   │   ├── EducationIndustry.js
│   │   │   ├── EngineeringIndustry.js
│   │   │   ├── FinancialIndustry.js
│   │   │   ├── HealthcareIndustry.js
│   │   │   ├── LifeSciencesIndustry.js
│   │   │   ├── PublicAndSocialIndustry.js
│   │   │   ├── RealEstateIndustry.js
│   │   │   ├── RetailIndustry.js
│   │   │   ├── TechnologyIndustry.js
│   │   │   ├── TelecommunicationsIndustry.js
│   │   │   ├── TravelLogisticsIndustry.js
│   │   │   └── industry-pages.css
│   │   └── ...
│   ├── server/
│   │   ├── server.js
│   │   ├── models/
│   │   │   ├── contactFormModel.js
│   │   │   └── subscriptionModel.js
│   │   ├── node_modules
│   │   ├── package-lock.json
│   │   └── package.json
│   ├── App.js
│   ├── App.css
│   ├── index.css
│   ├── index.js
│   └── ...
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── ...
```

#### Explanation:

 - The `public` directory contains static files that are publicly accessible, such as the favicon.ico, index.html, manifest.json, and robots.txt.
 - The `src` directory is the main directory for the project's source code.
 - The `assets` directory holds static assets such as images, fonts, or videos used.
 - The `components` directory contains reusable UI components organized into separate folders (e.g., Header, Footer). Each component has its own directory with a `.jsx` file for the component's logic and a corresponding CSS file for styling.
 - The `container` directory includes container components that manage the presentation and state logic for specific sections or features of your application.
 - The `pages` directory contains components that represent different pages of the website. Each page has its own directory(e.g., industry_pages, about_pages) with a .js file for the page's logic and a corresponding CSS file for styling.
 - The `services` directory houses modules responsible for making API requests or handling data-related tasks.
 - The `models` directory contains utility/helper functions or modules used throughout the project.
 - The `App.js`  file is the main entry point for the React application, where you define the overall structure and routing.
 - The `index.js` file is the entry point for the ReactDOM rendering, where the React application is rendered into the HTML document.
 - The root directory contains configuration files such as `.gitignore`, `package-lock.json`, `package.json`, and `README.md.`
 - The `.gitignore` file specifies which files and directories should be ignored by version control.
 - The `package.json` file includes project metadata and lists dependencies and scripts.
 - The `README.md` file provides an overview and documentation for the project.
 - This folder structure provides a modular and organized approach to managing your React website project, separating components, pages, assets, and other resources into their respective directories. Feel free to adjust and customize it based on your specific project requirements and preferences.


### Dependencies Used


### Links

- Website Link: [https://github.com/joykara/qrcode_challenge.git]

## My process

### Technologies Used

#### Front-end: 
- The website is built using modern web technologies such as React.js, HTML5, CSS3, and JavaScript. We follow best practices to ensure a clean and maintainable codebase.
#### Back-end: 
- Our website utilizes Node.js, Express and MongoDB for the database set-up.
#### Database: 
- We leverage a database system ... to store and retrieve relevant information.
#### Deployment: 
- The website is deployed on ....


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
