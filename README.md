# Query Client to Firebase

This Node.js application serves as a client-side query tool for exporting data from a Firebase database. It provides a straightforward HTTP endpoint that allows users to request Firebase data in JSON format based on specified criteria. With this tool, you can easily access and download specific data from your Firebase database by passing a date parameter in the query.

## Features

- Export data from a Firebase database in JSON format.
- Secure authentication with email and password.
- Configurable to extract data based on a specified date.
- Built with Node.js, Firebase, and Express.

## Getting Started

To use this tool, you'll need to configure your Firebase credentials and other environment variables. Once configured, you can run the application and make HTTP requests to the designated endpoint to extract the desired data.


## Dependencies

This project relies on the following dependencies:

- `dotenv` for loading environment variables.
- `express` for creating a web server.
- `firebase` for interacting with the Firebase database.

## How to run the project

- Make sure you have Node.js installed on your machine
- Install the project's dependencies. Run the following command in the project's root:

``bash
npm install
``

- Now, you can run the application with the following command:

``bash
npm run dev
``

The server will be running at http://localhost:3000

##Usage

To export data from the Firebase database, you can make an HTTP request to the /download-json endpoint. You should provide a date parameter in the query to specify the date of the data you want to export. For example:

``
http://localhost:3000/download-json?date=2023-10-31
``
This will return the data from the collection corresponding to the provided date in JSON format.

## Note

This application is intended as a demonstration of how to export data from a Firebase database. Ensure that you properly secure your credentials, follow Firebase security best practices, and protect sensitive information in the `.env` file.

Feel free to use and modify this tool as needed to suit your project's requirements.
