import api from "./api";
const url = "/market";

const MarketAPI = {
  buyNft: async (data: any) => {
    await api
      .post(`${url}/buy`, data, {
        withCredentials: true,
      })
      .catch((err) => {
        console.log(err);
      });
  },
  sellNft: async (data: any) => {
    await api
      .post(`${url}/sell`, data, {
        withCredentials: true,
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
export default MarketAPI;
