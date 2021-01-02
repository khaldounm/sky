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
      images: [],
      isLoaded: false,
      type: '',
    };
  }

  componentDidMount() {
    const paths = window.location.pathname.split('/');
    const details = api.getDetails({ itemType: paths[2], itemId: paths[3] });
    const images = api.getPosters({ itemType: paths[2], itemId: paths[3] });
    Promise.all([details, images]).then((values) => {
      document.title = values[0].title || values[0].name;
      this.setState({
        items: values[0],
        images: values[1],
        type: paths[2],
        isLoaded: true,
      });
    }).catch((err) => {
      throw new Error(err);
    });
  }

  render() {
    const {
      isLoaded, items, images, type,
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
        <DetailsBody details={items} type={type} posters={images} />
        <Related details={items} type={type} />
      </Layout>
    );
  }
}

export default Details;
