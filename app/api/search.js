
async function getSearchResults(searchString) {
  let returnData = null;
  await fetch("http://localhost:9000/search/"+searchString)
    .then(res => res.json())
    .then(data => returnData = data);
  return returnData;
};

export default getSearchResults;