
export const getSearchResults = async (searchString) => {
  let returnData = null;
  await fetch("http://localhost:9000/search/"+searchString)
    .then(res => res.json())
    .then(data => returnData = data);
  return returnData;
};

export const setSearch = async (search) => {
  return search;
}