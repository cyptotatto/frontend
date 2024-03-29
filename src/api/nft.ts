import api from "./api";
const url = "/nft";

const nftAPI = {
  getRankingNfts: async () => {
    return api.get(`${url}/ranking`).catch((err) => {
      console.log(err);
    });
  },
  getAllNfts: async () => {
    return api.get(`${url}/search`).catch((err) => {
      console.log(err);
    });
  },
  getNft: async (id: string) => {
    return api.get(`${url}/${id}`).catch((err) => {
      console.log(err);
    });
  },
  getLikedNfts: async () => {
    return api.get(`${url}/liked`).catch((err) => {
      console.log(err);
    });
  },
  getOwnNfts: async (userId: string) => {
    return api.get(`${url}/${userId}/own`).catch((err) => {
      console.log(err);
    });
  },
};

export default nftAPI;
