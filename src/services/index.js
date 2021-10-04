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
