import React from 'react';
import Layout from './components/layout';
import CircularIndeterminate from './components/spinner';
import Search from './components/search';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: true,
    };
  }

  render() {
    const { isLoaded } = this.state;
    if (!isLoaded) {
      return (
        <Layout>
          <CircularIndeterminate />
        </Layout>
      );
    }
    return (
      <Layout>
        <Search />
      </Layout>
    );
  }
}

export default App;
