import axios from "axios";
// "http://192.168.10.35:8000/api"
 const baseURL = axios.create({
  baseURL: "http://103.145.138.78:8282/v1",
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
})

export default baseURL