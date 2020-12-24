import React from 'react';
import Layout from '../components/layout';
import DetailsBody from '../components/detailsBody';
import Related from '../components/related';
import Spinner from '../components/spinner';
import api from '../services';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      type: '',
    };
  }

  componentDidMount() {
    const paths = window.location.pathname.split('/');
    api.getDetails({ itemType: paths[2], itemId: paths[3] })
      .then((data) => {
        document.title = data.title || data.name;
        this.setState({
          items: data,
          type: paths[2],
          isLoaded: true,
        });
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  render() {
    const { isLoaded, items, type } = this.state;
    if (!isLoaded) {
      return (
        <Layout>
          <Spinner />
        </Layout>
      );
    }
    return (
      <Layout>
        <DetailsBody details={items} type={type} />
        <Related details={items} type={type} />
      </Layout>
    );
  }
}

export default Details;
