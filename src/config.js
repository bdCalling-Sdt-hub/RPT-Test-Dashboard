import axios from "axios";
// "http://192.168.10.35:8000/api"
 const baseURL = axios.create({
  baseURL: "",
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
})

export default baseURL