# Workplace Web Component Library

> Made with create-react-library (https://www.npmjs.com/package/create-react-library)

- [Rollup](https://github.com/rollup/rollup)
- [TypeScript](https://www.typescriptlang.org/)

It also features:

- [Storybook](https://storybook.js.org/) to help you create and show off your components
- [Jest](https://jestjs.io/) and [React Testing Library](https://github.com/testing-library/react-testing-library) enabling testing of the components


## Install

### Installing Component Library Locally


```bash
npm install 
```

### Testing

```bash
npm run test
```

### Building

```bash
npm run build
```


### Component Code Splitting

*Code splitting of your components is not supported by default.*

```
import MyComponent from '@connectlabs/workplace-web-component-library/lib/src/MyComponent';
```

There are some changes we have to make to rollup.config.js

```
input: [..., "src/MyComponent/index.ts"],
```


## Development

Create a component

```jsx
import React from 'react'

export const MyComponent = (props) => (
  <div>{props.title}</div>
)
```

Add export to `src/index.ts` (used as the entry point for Rollup). 
*We use a pattern called Barrel Exports to expose our components in the entry point. We do this by importing, then exporting all our components. Components exported here are bundled by Rollup*

```jsx
import { MyComponent } from './MyComponent';

export {
  ...,
  MyComponent
}

```

### Supporting Image Imports

Rollup plugin which imports JPG, PNG, GIF, SVG, and WebP files 
- [@rollup/plugin-image](https://github.com/rollup/plugins/tree/master/packages/image):

Import and render images in your components like:

```tsx
import logo from "./logo.png";

export const ImageComponent = () => (
  <div>
    <img src={logo} />
  </div>
);
```
OR

You can then import and render images in your components like:

```tsx
import logo from "./logo.png";

export const ImageComponent = () => <div>{logo}</div>;
```

### Story

Create a stories for `MyComponent`. Open `src/MyComponent/MyComponent.stories.tsx` and place

```jsx
import React from "react";
import MyComponent from './MyComponent';

export default {
  title: 'Components/MyComponent',
  component: MyComponent
} as Meta;

const Template: Story = (args) => <MyComponent {...args} />;

export const Primary = Template.bind({});

Primary.args = {  
  title: 'Hello World'
};
```

### Storybook

To run a live-reload `Storybook` server on your local machine:

```
npm run storybook
```

Storybook will run and load up components at `http://localhost:6006`


To export your Storybook as static files:

https://storybook.js.org/docs/react/workflows/publish-storybook

```
npm run storybook:export
```

## Usage

### Setup

`npm config set @connectlabs:registry "http://packages.connectlabs.local/npm/NPM"`

this tells npm to import @connectlabs scoped packages from our registry rather than the standard public one. Other packages would still come from the standard one.

### Install 

```bash
npm install @connectlabs/workplace-web-component-library --save 
```

which will install the local component library as a dependency in application. It'll then appear as a dependency in `package.json` like:

```
"devDependencies": {
  "@connectlabs/workplace-web-component-library": "^1.0.0",
}
```

Your components can then be imported and used in the project.

```
import { MyComponent } from '@connectlabs/workplace-web-component-library'
```

OR

```
import MyComponent from '@connectlabs/workplace-web-component-library/lib/src/
```

### Component Usage

```jsx
import React, { Component } from 'react'

import { MyComponent } from '@connectlabs/workplace-web-component-library'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

### Development

To work with different versions and branches, you can install the library from the Bitbucket, but DON'T COMMIT IT

```bash
git install https://[your-login]/connectib/workplace-web-component-library.git#[branchName] --save

```

### Theme Provider
