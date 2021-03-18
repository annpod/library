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
npm install --save git+https://github.com/annpod/library.git // change the path after publishing to npm
```

which will install the local component library as a dependency in application. It'll then appear as a dependency in `package.json` like:

```
"devDependencies": {
  "workplace-web-component-library": "git+https://github.com/annpod/library.git" // change the path after publishing to npm
  ...
}
```

Your components can then be imported and used in the project.

```
import { MyComponent } from 'workplace-web-component-library'
```

### Component Code Splitting


*Code splitting of your components is not supported by default.*

```
import MyComponent from 'workplace-web-component-library/build/src/MyComponent';
```

There are some changes we have to make to rollup.config.js

```
input: [..., "src/MyComponent/index.ts"],
```


## Usage

```jsx
import React, { Component } from 'react'

import { MyComponent } from 'workplace-web-component-library'

class Example extends Component {
  render() {
    return <MyComponent />
  }
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

### Testing

```
npm run test
```

### Building

```
npm run build
```

### Storybook

To run a live-reload `Storybook` server on your local machine:

```
npm run storybook
```

Storybook will run and load up components at `http://localhost:6006`


To export your Storybook as static files:

```
npm run storybook:export
```
