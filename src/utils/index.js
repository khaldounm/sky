import axios from 'axios';

class Api {
  constructor() {
    this.url = 'https://api.themoviedb.org/3';
    this.apiKey = 'api_key=3864108066bba69836b852739cf37dc0';
  }

  getDetails({ itemType, itemId }) {
    if (!itemType || !itemId) {
      console.error('"id" is a required property');
      return;
    }
    const amendment = itemType === 'person' ? 'combined_credits' : 'credits';
    return axios
      .get(`${this.url}/${itemType}/${itemId}?${this.apiKey}&language=en-US&append_to_response=${amendment}`)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  search(searchType, searchQuery) {
    searchQuery = encodeURI(searchQuery);
    return axios
      .get(`${this.url}/search/${searchType}?${this.apiKey}&language=en-US&query=${searchQuery}&page=1&include_adult=false`)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  getImage(imgPath, width = 300) {
    return imgPath.startsWith('http') ? imgPath : `//image.tmdb.org/t/p/w${width}${imgPath}`;
  }
}

const api = new Api();
export default api;