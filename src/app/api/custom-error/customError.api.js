import axios from "axios";

export const CustomErrorAPI = {
  async 404() {
    try {
      const response = await axios(
        "http://localhost:3001/notfound",
        {
          // harus ada return validate status agar response object bisa di console
          validateStatus: (status) => status
        }
      );
      if (response.status >= 400) throw new Error(response.status);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async 500() {
    try {
      const response = await axios(
        "http://localhost:3001/servererror",
        {
          // harus ada return validate status agar response object bisa di console
          validateStatus: (status) => status
        }
      );
      if (response.status === 500) throw new Error(response.status);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
