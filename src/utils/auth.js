export function setToken(token) {
  window.localStorage.setItem("token", token);
  console.log("setToken");
}

export function getToken() {
  console.log("getToken");
  return window.localStorage.getItem("token");
}
