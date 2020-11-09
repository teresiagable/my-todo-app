import axios from "axios";

class todoService {
  async getAll() {
    return await axios
      .get('https://nameless-sea-91978.herokuapp.com/api/todoItem')
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        throw new Error(error);
      });
  }

  async getTodoItem(id) {
    return await axios
      .get('https://nameless-sea-91978.herokuapp.com/api/todoItem?type=id&value=' +id)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        throw new Error(error);
      });
  }

  async getAllUsers() {
    return await axios
      .get('https://nameless-sea-91978.herokuapp.com/api/appUser')
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        throw new Error(error);
      });
  }

  async updateDone(value) {
    console.log('value', value);
    var config = {
      method: 'put',
      url: 'https://nameless-sea-91978.herokuapp.com/api/todoItem/' + value.id,
      data: {
        id: value.id,
        title: value.title,
        description: value.description,
        deadline: value.deadline,
        done: value.done,
        assignee: value.assignee, //detta är assignee.id
      },
    };
    console.log('config', config);

    return await axios(config)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
        throw new Error(error);
      });
  }
}

export default new todoService();
