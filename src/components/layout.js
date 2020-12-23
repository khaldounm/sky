/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Header from './header';
import Footer from './footer';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
