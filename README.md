# movie_catalogue

## Process
# Figma design
![image](https://github.com/ankei/movie_catalogue/assets/56230106/f563b0f4-aad6-4607-919e-a9d3123423ad)
Grid style menu which scrolls vertically
![image](https://github.com/ankei/movie_catalogue/assets/56230106/719ae1ff-98bc-4fc8-bd6d-1626a58b977a)
Once a poster is selected, the focused view shows the movie poster alongside information and a back button (top left square) to return to the menu

# Implemented
- Basic title and movie poster layout

# Improvements
- Use the Grid UI component ( coloumns with scroll)
- Connect to a movie database API (e.g https://www.omdbapi.com/)
- Tests 


## com.domain.app.moviecatalogue

### Getting started

> Before you follow the steps below, make sure you have the
[Lightning-CLI](https://rdkcentral.github.io/Lightning-CLI/#/) installed _globally_ only your system

```
npm install -g @lightningjs/cli
```

#### Running the App

1. Install the NPM dependencies by running `npm install`

2. Build the App using the _Lightning-CLI_ by running `lng build` inside the root of your project

3. Fire up a local webserver and open the App in a browser by running `lng serve` inside the root of your project

#### Developing the App

During development you can use the **watcher** functionality of the _Lightning-CLI_.

- use `lng watch` to automatically _rebuild_ your App whenever you make a change in the `src` or  `static` folder
- use `lng dev` to start the watcher and run a local webserver / open the App in a browser _at the same time_

#### Documentation

Use `lng docs` to open up the Lightning-SDK documentation.


