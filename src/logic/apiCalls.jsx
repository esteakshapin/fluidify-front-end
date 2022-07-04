import axios from "axios";

// export async function getCall(url, token, {header})

export async function postCall({ url, header, token, data }) {
  // header config taken from postman
  const config = {
    headers: {
      Authorization: "Token " + token,
    },
  };

  let res = null;

  try {
    res = await axios.post(url, data, config);
  } catch (e) {
    console.log("error");
    console.log(e);
    res = null;
  }

  return res;
}
