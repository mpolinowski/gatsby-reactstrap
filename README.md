# Gatsby.js & Bootstrap 4

Let's try to use the static site generator for React - [Gatsby](https://www.gatsbyjs.org) together with the Bootstrap 4 React components from [reactstrap](https://reactstrap.github.io). To get started, I want to reproduce one of the official examples from [getbootstrap.com](http://getbootstrap.com/docs/4.0/examples/album/).


## Install Gatsby's command line tool

```
npm install --global gatsby-cli
```


## Using the Gatsby CLI

1. Create a new site. __gatsby new gatsby-reactstrap__
2. __cd gatsby-reactstrap__
3. __gatsby develop__ — Gatsby will start a hot-reloading development environment accessible at localhost:8000


## Install reactstrap

```
npm install bootstrap@4.0.0-beta.2 --save

npm install --save reactstrap@next
```

### Optional Dependencies

These libraries are not included in the main distribution file reactstrap.min.js and need to be manually included when using components that require transitions or popover effects (e.g. Tooltip, Modal, etc).

* [react-transition-group](https://www.npmjs.com/package/react-transition-group)
* [react-popper](https://www.npmjs.com/package/react-popper)


## Import the Components

Import Bootstrap CSS in the ./src/pages/index.jsx file:

```js
import 'bootstrap/dist/css/bootstrap.css';
```

Import required reactstrap components within your custom component files e.g. ./src/components/ReactNavbar.jsx:

```js
import { Button } from 'reactstrap';
```