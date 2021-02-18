/**
 * @class MyComponent
 */

import * as React from 'react';


export interface MyComponentProps {
   /**
    * Simple text prop
    **/
   text: string;
}

/** My First component */
export class MyComponent extends React.Component<MyComponentProps> {
   render() {
      const { text } = this.props;

      return (
         <div className="test">
            Example Component: {text}
            <p>Coool!</p>
         </div>
      );
   }
}

export default MyComponent;
