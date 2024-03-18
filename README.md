# Stock App

Stock App shows a list of stocks fetched from a nodejs server with following properties: 
* symbol 
* name
* last_price
* market_cap
* tag

Users can filter the stocks based on its `tag` property. The list of unique tags is obtained from the latest persisting mock data `tag` field, plus an option **All** as the first option to list all. Once a `tag` is selected, only entries with the matching tags are shown in the grid.

First column of grid represents `symbol` and is a link. Upon a single click, a detail panel is shown below the grid with details of that selected stock.

In the actions column of grid, an 'X' icon is shown upon hover, and upon a single click, deletes that stock entry from the grid and persistence.

## Prerequisites 

* [Node.js](https://nodejs.org/en/): `^20.9.0`

## Stack

* Backend: [Node.js](http://nodejs.org/)
* Frontend: [Angular](https://angular.io/)
* CSS based on [Clarity](https://clarity.design/)

## Getting Started

### Get the Code

To get a copy of the project locally, run the following commands:

```bash
git clone git@github.com:piyush043/stock-app.git
```

### App Server

Application server is a NodeJS application that relies on some npm packages.

* Install local dependencies (from the project root folder) and start backend server:

    ```bash
    cd stock-app/server
    npm install
    npm start
    ```

  (This will install the dependencies declared in the server/package.json file and start nodejs server)

### Client App

Client application is Angular based. Open new terminal session and go to `stock-app` dir

* Install local dependencies (from the project root folder) and start client side server:

    ```bash
    cd stock-app/frontend
    npm install
    npm start
    ```


## Help

Please reach out to [piyush043@gmail.com](mailto:piyush043@gmail.com) for any questions.