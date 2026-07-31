// src/lib/axios.ts 

import axios from "axios";
import {API_URL} from "@/src/lib/api"

export default axios.create({
  baseURL: API_URL,
});

