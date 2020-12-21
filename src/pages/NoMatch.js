import React from 'react';
import NoMatchComponent from '../components/noMatch';
import Layout from '../components/layout';

class NoMatch extends React.Component {
  render() {
    return (
      <Layout>
        <NoMatchComponent />
      </Layout>
    );
  }
}

export default NoMatch;
