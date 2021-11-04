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
  sendPhoto : async (data) =>{
    const token = localStorage.getItem('token');
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const result = await api.post("/photo-profile/", data,{ headers: { 'Content-type': 'multipart/form-data' }})
    // console.log(result.data)
    return result.data;
  }
}

export const findPhoto = {
  findPhoto : async()=>{
    const token = localStorage.getItem('token');
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const result = await api.get("/informations")
    // console.log(result.data)
    return result.data
  }
}

export const sendTypeOfService = {
  typeService : async(service)=>{
    const token = localStorage.getItem('token');
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const result = await api.post("/sendService",service)
    return result.data
  }
}
export const checkingPhotoModal = {
  checking:async(data)=>{
    const token = localStorage.getItem('token');
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const result = await api.get("/chekingInformations", data)
    return result.data
  }

 
}
export const showingServices =  {
    findServices:async(data)=>{
      const token = localStorage.getItem('token');
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const result = await api.get("/servicesTypes", data)
      return result.data
    }
}