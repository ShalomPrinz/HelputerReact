import axios from "axios";
import { remoteUrl } from "../constants";

const sendPaint = (params) => axios.get(remoteUrl, { params });

const paint = ({ name, type, regex = name }) => {
  if (typeof regex !== "string" || typeof type !== "string")
    console.log("Unfortunately, some error occurred.");
  else sendPaint({ name: encodeRegex(regex, regex !== name), type });
};

const encodeRegex = (string, regexed) => {
  const regex = regexed ? string : `^${string}$`;
  console.log("regex", regex);
  return encodeURIComponent(regex);
};

export default {
  get: axios.get,
  paint,
};
