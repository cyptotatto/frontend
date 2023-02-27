import api from "./api";
const url = "/user";
const UserAPI = {
  createUser: async (data: any) => {
    await api
      .post(`${url}`, data, {
        withCredentials: true,
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getTop100Users: async (data: any) => {
    await api
      .get(`${url}/top100`, {
        withCredentials: true,
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getAllUsers: async (data: any) => {
    await api

      .get(`${url}/all`, {
        withCredentials: true,
      })
      .catch((err) => {
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
