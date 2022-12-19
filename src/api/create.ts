import api from "./api";
const url = "/create/illustration";

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
