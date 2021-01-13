# Catalog App

It is a sample catalog app for women products using react 16.14.0, bootstrap 4.5.3 and axios 0.21.1.

# Component Tree

App
|->ToastContainer
|-> Navbar
|-> Products
|->|-> Product
|->|-> ListGroup
|->|-> SearchBox
|->|-> SelectMenu
|->|-> Pagination
|-> Footer

# HTTP Service-

Library used - axios

- productService - This service is used to get all products based filtering params (pageNumber, sortOrder, brand, pageSize, gender.)
- httpService - generic error handling logic.
- brandService - This service is used to get all brands.
- logService - purpose is logging and can be intergrated with logging service in future.

# Improvements to be done:

1 Test cases and coverage to be improved.
2 Need to compose SelectMenu component inside SideMenu component, which uses
bootstrap Accordian so SideMenu can have multiple refine and filtering options.
3 Add React-Routing for navigation
4 SASS can be added for styles maintenance and resusability.
5 Look and feel needs to be improved.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
