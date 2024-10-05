const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_readAccessToken}`,
  },
};
const makeRequest = async (url) => {
  const respJson = await fetch(url, options);
  const resp = await respJson.json();
  return resp;
};
export { makeRequest };
