class Api {
  #client;

  constructor(client) {
    this.#client = client;
  }

  async post(endpoint, bodyData) {
    try {
      const response = await this.#client(endpoint, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(bodyData), // body data type must match "Content-Type" header
      });
      const jsonData = await response.json();

      return { success: true, data: jsonData };
    } catch (error) {
      return { success: false, errorMessage: `Something went wrong: ${error}` };
    }
  }

  async put(endpoint, bodyData) {
    try {
      const response = await this.#client(endpoint, {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(bodyData), // body data type must match "Content-Type" header
      });
      const jsonData = await response.json();

      return { success: true, data: jsonData };
    } catch (error) {
      return { success: false, errorMessage: `Something went wrong: ${error}` };
    }
  }
}

export default new Api(window.fetch.bind(window));
