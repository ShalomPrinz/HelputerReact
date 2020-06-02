import axios from "axios";
import { remoteUrl } from "../constants";

const paint = (params) => axios.get(remoteUrl, { params });

export default {
  get: axios.get,
  paint,
};
