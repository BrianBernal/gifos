const API_KEY = "yb1xtDJxe0bCew97iXPlWvLBMxkM8UKb";
const BASE_URL = "https://api.giphy.com/v1";

const getUrl = (endpoint, params) => {
  let url = `${BASE_URL}/gifs/${endpoint}?api_key=${API_KEY}`;
  if (!params) return url;
  url += "&";
  for (const key in params) {
    url += `${key}=${params[key]}&`;
  }
  return url;
};

export const searchService = (params) => {
  return getUrl("search", params);
};
