import React from 'react';
// import Header from './header';
// import Footer from './footer';

class Layout extends React.Component {
  render() {
    return (
      <div>
        {/* <Header />
        {this.props.children}
        <Footer /> */}
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
