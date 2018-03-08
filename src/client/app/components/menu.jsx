import React from 'react';
import {render} from 'react-dom';

class Menu extends React.Component {
  render() {
    console.log('we have a menu');
    return <div>
      we have a sub component
    </div>;
  }
}

export default Menu;