import axios from 'axios';

export const fetchAPI = async (search, page) => {
  const URL = 'https://pixabay.com/api/';
  const options = {
    params: {
      key: '25212904-bc289a80479625a5a070d2ccf',
      q: search,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 12,
    },
  };

  const response = await axios.get(URL, options);
  const mappedImages = response.data.hits.map(
    ({ id, largeImageURL, webformatURL }) => ({
      id,
      largeImageURL,
      webformatURL,
    })
  );

  if (response.data.total === 0) {
    return Promise.reject(new Error('Something get wrong!'));
  }
  return mappedImages;
};
