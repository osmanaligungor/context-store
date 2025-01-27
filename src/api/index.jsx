// axios'un temel ayarlarının yapıldığı bir örnek oluştur.
// proje içerisinde bu örnekle api isteği atıldığında her seferinde temel url'i ve default headerları yazmak zorunda kalmayacağız.

import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export default api;
