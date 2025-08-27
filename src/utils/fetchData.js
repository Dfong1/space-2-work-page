import axios from "axios";

const fetchData = axios.create({
  baseURL: "/api/",
  // Axios configuration options here
}); // Remove following 2 lines if you don't want to use MockAdapter

export default fetchData;
