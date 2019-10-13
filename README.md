# oat-test-taker

This is a simple application that allows you list users from a specific service or import them.
This app will list all users imported and give, for each on of those, a profile page.

## Directories

* `assets`: images and dummy files are stored here;
* `components`: All components used to create this app;
* `config`: Any file that can be used to configure the app;
* `core`: Router, Store, and Mount functions. The app starts here;
* `entities`: All app entities related to our app state;
* `layouts`: Wrapper components able to change the basic structure of a screen;
* `resources`: All our HTTP client resources;
* `screens`: App screens;
* `types`: Typescript types being shared accorss app;
* `utils`: Any useful code that doesn't belong to a specific set;

Having the app using the above structure, it is easy to maintain the code and also add
new features.

## Installing and Running
```bash
# cloning
$ git clone https://github.com/pablohpsilva/oat-test-taker.git

# installing
$ cd oat-test-taker && npm i -g mhy@latest && npm i && npm run config

# running on development mode
$ npm start

# run production build
$ npm run build
```

Please don't forget to have `mhy` installed globally. It is almost the same as `create-react-app` (just kidding, `mhy` does a lot more).
Please have the Prettier plugin installed in your favorite IDE.

## Storybook

All components have a Storybook created just for it. To run it, execute the following command on the
project directory:

```bash
$ npm start
```

Each storybook has its own documentation attached. It can be seen clicking on the `Notes` tab.

## Tests

All the components have a small test created to see if the component can render. It is a basic
test.
Other codes are also tested, like `utils` code. These were tested more carefully, given its
usage throughout the app.

```bash
$ npm test
```

## Technologies and tools used
* [mhy](https://mhy.js.org) - A zero-config, out-of-the-box, multi-purpose toolbox and development environment;
* [React](https://reactjs.org/) - A JavaScript library for building user interfaces;
* [Redux](https://react-redux.js.org/) - A predictable state container for JavaScript applications;
* [React Router](https://reacttraining.com/react-router/web/guides/quick-start) - Navigational components;
* [Jest](https://jestjs.io/) - JavaScript Testing Framework;
* [Storybook](https://storybook.js.org/) - Is an open source tool for developing UI components;
* [Standard-Version](https://github.com/conventional-changelog/standard-version) - utomate versioning and CHANGELOG generation.