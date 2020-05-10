import axios from "axios";

export default axios.create({
  baseURL: "https://api.dev.flyak.org/",
  headers: { Authorization: `Bearer ${window.localStorage.getItem("token")}` },
});
