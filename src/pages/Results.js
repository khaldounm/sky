import React from 'react';
import Layout from '../components/layout';
import ResultsBody from '../components/resultsBody';
import Spinner from '../components/spinner';
import api from '../services';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    const { search } = window.location;
    const query = new URLSearchParams(search);
    const searchQuery = query.get('search');
    const searchQueryEncoded = decodeURI(searchQuery);
    const searchType = query.get('type');
    document.title = `Search results for ${searchQueryEncoded}`;
    api.search(searchType, searchQuery)
      .then((data) => {
        this.setState({
          items: data.results,
          type: searchType,
          search: searchQueryEncoded,
          isLoaded: true,
        });
      });
  }

  render() {
    const {
      isLoaded, items, type, search,
    } = this.state;
    if (!isLoaded) {
      return (
        <Layout>
          <Spinner />
        </Layout>
      );
    }
    return (
      <Layout>
        <ResultsBody data={{ items }} type={type} search={search} />
      </Layout>
    );
  }
}

export default Results;
