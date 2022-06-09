import axios from "axios";
import { AUTH } from "../urls";

export async function logInAPICall(username, password) {
  const formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);

  const config = {
    headers: { "content-type": "multipart/form-data" },
  };

  let res = null;

  try {
    res = await axios.post(AUTH, formData, config);
  } catch (err) {
    console.log("error");
  }

  return res;
}
