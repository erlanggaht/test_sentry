import axios from "axios";

export const getUsers = {
  async getAll() {
    try {
      const response = await axios(
        "https://jsonplaceholder.typicode.com/users",
        {
          // harus ada return validate status agar response object bisa di console
          validateStatus: (status) => status,
        }
      );
      if (response.status >= 400 && response.status <= 500)
        throw new Error(response.status);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async jsonExample() {
    try {
      const response = await fetch("http://127.0.0.1:5000/posts", {
        // AXIOS: harus ada return validate status agar response object bisa di console
        // validateStatus: (status) => status,
        cache: "no-cache", 
      });
      if (response.status >= 400 && response.status <= 500)
        throw new Error(response.status);
      return response.json();
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async jsonExampleAdd(data) {
    try {
      const response = await axios("http://127.0.0.1:5000/posts", {
        method: "POST",
        // AXIOS: harus ada return validate status agar response object bisa di console
        validateStatus: (status) => status,
        data: data,
      });
      if (response.status >= 400 && response.status <= 500)
        throw new Error(response.status);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async jsonExampleDelete(id) {
    try {
      const response = await axios(`http://127.0.0.1:5000/posts/${id}`, {
        method: "DELETE",
        
        // AXIOS: harus ada return validate status agar response object bisa di console
        validateStatus: (status) => status,
      });
      if (response.status >= 400 && response.status <= 500)
        throw new Error(response.status);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
