import api from "./api";
const url = "/nft/create";

const CreateAPI = {
  createNft: async (data: any) => {
    try {
      const response = await api.post(`${url}`, data, {
        withCredentials: true,
      });
      return response;
    } catch (err) {
      console.log("ERROR", err);
    }
  },
};

export default CreateAPI;
