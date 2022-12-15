import api from "./api";
const url = "/create/illustration";

const CreateAPI = {
  createNft: async (data: any) => {
    await api.post(`${url}`, data).catch((err) => {
      console.log(err);
    });
  },
};

export default CreateAPI;
