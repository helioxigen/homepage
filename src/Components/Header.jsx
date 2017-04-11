import React from 'react';
import Canvas from './Canvas';
import Title from './Title';

class Header extends React.PureComponent {
  render() {
    return (
      <div>
        <Canvas />
        <Title />
      </div>
    );
  }
}

export default Header;
