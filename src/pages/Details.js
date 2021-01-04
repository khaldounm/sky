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
      videos: [],
      isLoaded: false,
      type: '',
    };
  }

  componentDidMount() {
    const paths = window.location.pathname.split('/');
    const details = api.getDetails({ itemType: paths[2], itemId: paths[3] });
    const images = api.getPosters({ itemType: paths[2], itemId: paths[3] });
    const videos = api.getVideos({ itemType: paths[2], itemId: paths[3] });
    Promise.all([details, images, videos]).then((values) => {
      document.title = values[0].title || values[0].name;
      this.setState({
        items: values[0],
        images: values[1],
        videos: values[2].results,
        type: paths[2],
        isLoaded: true,
      });
    }).catch((err) => {
      throw new Error(err);
    });
  }

  render() {
    const {
      isLoaded, items, images, videos, type,
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
        <DetailsBody details={items} type={type} posters={images} trailers={videos} />
        <Related details={items} type={type} />
      </Layout>
    );
  }
}

export default Details;
