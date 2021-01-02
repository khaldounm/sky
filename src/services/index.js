import axios from 'axios';

class Api {
  constructor() {
    this.url = 'https://api.themoviedb.org/3';
    this.apiKey = 'api_key=3864108066bba69836b852739cf37dc0';
  }

  getDetails({ itemType, itemId }) {
    if (!itemType || !itemId) {
      throw new Error('"id" is a required property');
    }
    const amendment = itemType === 'person' ? 'combined_credits' : 'credits';
    return axios
      .get(`${this.url}/${itemType}/${itemId}?${this.apiKey}&language=en-US&append_to_response=${amendment}`)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error);
      });
  }

  getPosters({ itemType, itemId }) {
    if (!itemType || !itemId) {
      throw new Error('"id" is a required property');
    }
    const itemTypeAmendment = {
      person: '',
      tv: '&language=en-US',
      movie: '&language=en-US&include_image_language=en',
    };
    return axios
      .get(`${this.url}/${itemType}/${itemId}/images?${this.apiKey}${itemTypeAmendment[itemType]}`)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error);
      });
  }

  search(searchType, searchQuery) {
    const encodedSearchQuery = encodeURI(searchQuery);
    return axios
      .get(`${this.url}/search/${searchType}?${this.apiKey}&language=en-US&query=${encodedSearchQuery}&page=1&include_adult=false`)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error);
      });
  }

  // eslint-disable-next-line class-methods-use-this
  getImage(imgPath, width = 300) {
    return imgPath.startsWith('http') ? imgPath : `//image.tmdb.org/t/p/w${width}${imgPath}`;
  }
}

const api = new Api();
export default api;
