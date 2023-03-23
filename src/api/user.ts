import api from "./api";
const url = "/user";
const UserAPI = {
  createUser: async (data: any) => {
    try {
      const response = await api.post(`${url}/register`, data, {});
      return response;
    } catch (err) {
      console.log(err);
    }
  },
  getRankingUsers: async () => {
    return api.get(`${url}/ranking`).catch((err) => {
      console.log(err);
    });
  },

  getAllUsers: async () => {
    return api.get(`${url}/artist/search`).catch((err) => {
      console.log(err);
    });
  },

  getUser: async (data: any) => {
    await api
      .get(`${url}`, {
        withCredentials: true,
      })
      .catch((err) => {
        console.log(err);
      });
  },
  updateUser: async (data: any) => {
    await api
      .put(`${url}`, data, {
        withCredentials: true,
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getLikedUser: async (data: any) => {
    await api
      .get(`${url}/liked`, {
        withCredentials: true,
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

export default UserAPI;
