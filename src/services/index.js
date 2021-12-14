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
  },
};

export const listservice = {
  listService: async () => {
    const token = localStorage.getItem("token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const result = await api.get("/service");
    return result.data;
  },
};

export const sendPhoto = {
  sendPhoto: async (data) => {
    const token = localStorage.getItem("token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const result = await api.post("/photo-profile/", data, {
      headers: { "Content-type": "multipart/form-data" },
    });
    // console.log(result.data)
    return result.data;
  },
};

export const sendPhotoClient = {
  sendPhotoClient: async (data) => {
    const token = localStorage.getItem("token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const result = await api.post("/photo-profile-client/", data, {
      headers: { "Content-type": "multipart/form-data" },
    });
    // console.log(result.data)
    return result.data;
  },
};

export const findPhoto = {
  findPhoto: async () => {
    const token = localStorage.getItem("token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const result = await api.get("/informations");
    // console.log(result.data)
    return result.data;
  },
};

export const sendTypeOfService = {
  typeService: async (service) => {
    const token = localStorage.getItem("token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const result = await api.post("/sendService", service);
    return result.data;
  },
};
export const checkingPhotoModal = {
  checking: async (data) => {
    const token = localStorage.getItem("token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const result = await api.get("/chekingInformations", data);
    return result.data;
  },
};
export const showingServices = {
  findServices: async (data) => {
    const token = localStorage.getItem("token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const result = await api.get("/servicesTypes", data);
    return result.data;
  },
};

export const getPhotoClient = {
  getPhotoClientProfile: async (data) => {
    const token = localStorage.getItem("token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const result = await api.get("/photo-client", data);
    return result.data;
  },
};

export const fastService = {
  sendFS: async (data) => {
    const token = localStorage.getItem("token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const result = await api.post("/send-fast-service/", data);
    return result.data;
  },
};

export const listFastServices = {
  fastService: async (data) => {
    const token = localStorage.getItem("token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const result = await api.get("/fastService");
    return result;
  },
};

export const findProviderForClient = {
  findProvider: async (data) => {
    const result = await api.get(`/findProfile/${data}`);
    console.log(result);
    return result;
  },
};

export const findRoom = {
  room: async (data) => {
    const result = await api.get(`/findroom/${data}`);
    return result.data;
  },
};

export const acceptAndEnvitFastService = {
  acceptService: async (data) => {
    const result = await api.post("/acceptServices", data);
    return result.data;
  },
};

export const listpendingFastServices = {
  list: async (data) => {
    const result = await api.get(`/listPendingServices/${data}`);
    return result.data;
  },
};

export const confirmService = {
  confirm: async (data) => {
    const result = await api.post("/completeService", data);
    return result.data;
  },
};

export const listServicesInProgress = {
  list: async (data) => {
    const result = await api.get(`/progress/${data}`);
    return result.data;
  },
};

export const confirmFinishFastService = {
  confirmFinished: async (data) => {
    const result = await api.post("/confirm", data);
    return result.data;
  },
};

export const portifolio = {
  provider: async (data) => {
    const result = await api.post("/portifolio", data);
    return result.data;
  },
};

export const listPhotos = {
  photosPortifolio: async (data) => {
    const result = await api.get(`/listportifolio/${data}`);
    return result.data;
  },
};

export const sendComments = {
  comments: async (data) => {
    const result = await api.post("/coments", data);
    return result.data;
  },
};

export const lisComments = {
  listCommentsProvider: async (data) => {
    const result = await api.get(`/list-comments/${data}`);
    return result.data;
  },
};


export const lisQuantityServices = {
  quantityServices: async (data) => {
    const result = await api.get(`/quantityservices/${data}`);
    return result.data;
  },
};

export const deleteFastService={
  deleteService:async(data)=>{
    const result = await api.post('/cancel', data);
    return result.data;
  }
}