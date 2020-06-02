import axios from "axios";
import { remoteUrl } from "../constants";

const sendPaint = (params) => axios.get(remoteUrl, { params });

const paint = ({ name, type, regex = name }) => {
  if (typeof regex !== "string" || typeof type !== "string")
    console.log("Unfortunately, some error occurred.");
  else sendPaint({ name: encodeURIComponent(regex), type });
};

export default {
  get: axios.get,
  paint,
};
