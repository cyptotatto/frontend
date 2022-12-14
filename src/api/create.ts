import api from "./api";
const url = "/nft/create";

const CreateAPI = {
  createNft: async (data: any) => {
    await api
      .post(`${url}`, data, {
        withCredentials: true,
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

export default CreateAPI;
