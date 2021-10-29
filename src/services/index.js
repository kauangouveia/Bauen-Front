import apiCep from "./api/via-cep";
import api from "./api/index";

export const address = {
  findAddressByZipCode: async (zipCode) => {
    const result = await apiCep.get(`${zipCode}/json`);
    return result.data;
  },
};

export const login = {
  authenticateServiceProvide: async (params) => {
    const result = await api.post("/login/service-provider", params);
    return result.data;
  },
};

export const serviceProvider = {
  listServiceProvider: async () => {
    const result = await api.get("/service-provider");
    return result.data;
  }
};

export const listservice ={
  listService : async()=>{
    const result = await api.get("/service");
    return result.data
  }
}

export const sendPhoto ={
  sendPhoto : async () =>{
    const result = await api.post("/photo-profile/",{ headers: { 'Content-type': 'multipart/form-data' }})
    console.log(result.data)
    return result.data;
  }
}
