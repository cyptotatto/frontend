import api from "./api";
const url = "/nft";

const nftAPI = {
  getRankingNfts: async () => {
    await api.get(`${url}/ranking`).catch((err) => {
      console.log(err);
    });
  },
  getNft: async (id: string) => {
    await api.get(`${url}/${id}`).catch((err) => {
      console.log(err);
    });
  },
  getLikedNfts: async () => {
    await api.get(`${url}/liked`).catch((err) => {
      console.log(err);
    });
  },
  getOwnNfts: async (userId: string) => {
    await api.get(`${url}/${userId}/own`).catch((err) => {
      console.log(err);
    });
  },
};

export default nftAPI;
