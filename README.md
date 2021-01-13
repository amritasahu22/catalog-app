# Catalog App

It is a simple catalog app for women products with searching, filtering and pagination functionality using react 16.14.0, bootstrap 4.5.3 and axios 0.21.1.

# Component Tree

App
--ToastContainer
--Navbar
--Products
---- Product
---- ListGroup
---- SearchBox
---- SelectMenu
---- Pagination
---- Footer

# HTTP Service-

Library used - axios

- productService - This service is used to get all products based filtering params (pageNumber, sortOrder, brand, pageSize, gender.)
- httpService - generic error handling logic.
- brandService - This service is used to get all brands.
- logService - purpose is logging and can be intergrated with logging service in future.

# React Routing Navigation

Library used - react-router-dom
This is used to add navigation.

# Improvements to be done:

- Test cases and coverage to be improved.
- Need to compose SelectMenu component inside SideMenu component, which uses
  bootstrap Accordian so SideMenu can have multiple refine and filtering options.
- Convert Products component from class component to functional component using hooks - useState & useEffect.
- SASS can be added for styles maintenance and resusability.
- Integrating web accessibility.
- Look and feel needs to be improved.

# Run on local

- Clone the code on local using git clone.
- Ensure node version is 12.19.0 or greater.
- Run catalog-app using "npm start".
- Runs the app in the development mode.
- Open [http://localhost:3000] to view it in the browser.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
