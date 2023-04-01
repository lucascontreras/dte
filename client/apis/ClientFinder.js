import axios from "axios";

export default axios.create({
  baseURL: 'http://localhost:3210/api/v1/clients'
})