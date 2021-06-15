
export const checkUserInDB = async (user) => {
  let returnData = null;
  await fetch("http://localhost:9000/login/"+user.email)
    .then(res => res.json())
    .then(data => returnData = data);
  return returnData;
};

export const insertUserInDB = async (user) => {
  await fetch("http://localhost:9000/login/", {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  
    //make sure to serialize your JSON body
    body: JSON.stringify({
      login: user.login,
      password: user.password
    })
  })
    .then(res => res.json())
    .then(data => data);
}