import { get } from "superagent";

const API_KEY = "AIzaSyDPwHu1RgMIUDWGddxJhaosu_30FbT1Dkc";

const BASE_URL = "https://www.googleapis.com";

export function apiGet(url) {
  return get(`${BASE_URL}${url}`)
    .query({ key: API_KEY })
    .type("json")
    .accept("json");
}
