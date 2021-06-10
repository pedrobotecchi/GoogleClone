
export const getSearchResults = async (searchString) => {
  let returnData = null;
  
  await fetch("http://localhost:9000/searchResults/"+searchString, {
    method: "POST",
    body: JSON.stringify({ search : searchString}),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(res => res.json())
    .then(data => data);
  
  await fetch("http://localhost:9000/searchResults/"+searchString)
    .then(res => res.json())
    .then(data => returnData = data);
  return returnData;
};