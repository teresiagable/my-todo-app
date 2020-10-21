import axios from "axios";

class todoService {
  async getAll() {
    var config = {
      method: "get",
      url: "https://nameless-sea-91978.herokuapp.com/api/todoItem",
      headers: {},
    };

    let res = null;
    await axios(config)
      .then((response) => {
        res = response.data;
        console.log("in getAll", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return res;
  }
}

export default new todoService();
