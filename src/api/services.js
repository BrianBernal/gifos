const API_KEY = "yb1xtDJxe0bCew97iXPlWvLBMxkM8UKb";
const BASE_URL = "https://api.giphy.com/v1";

function getUrl(endpoint, params) {
  let url = `${BASE_URL}/gifs/${endpoint}?api_key=${API_KEY}`;
  if (!params) return url;
  url += "&";
  for (const key in params) {
    url += `${key}=${params[key]}&`;
  }
  return url;
};

export function searchService(params) {
  return getUrl("search", params);
};

export function autocompleteService(params) {
  const defaultParams = { limit: 5 }
  return getUrl("search/tags", { ...defaultParams, ...params })
}
