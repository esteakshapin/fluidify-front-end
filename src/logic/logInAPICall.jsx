import axios from "axios";
import { AUTH } from "../urls";

export async function logInAPICall(username, password) {
  const data = new FormData();
  data.append("username", username);
  data.append("password", password);

  // header config taken from postman
  const config = {
    headers: {
      "content-type":
        "multipart/form-data; boundary=--------------------------126784418747194873561449",
    },
  };
  let res = null;

  try {
    res = await axios.post(AUTH, data, config);
  } catch (err) {
    console.log("Log in error");
    console.log(err);
    res = null;
  }

  return res;
}

export function logOut(setToken) {
  setToken(null);
}
