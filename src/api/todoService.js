import axios from "axios";

class todoService {

  async getAll() {
   return await axios
      .get("https://nameless-sea-91978.herokuapp.com/api/todoItem")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async updateDone(){
    var config = {
      method: 'put',
      url: 'https://nameless-sea-91978.herokuapp.com/api/todoItem/Example-TodoItem-1',
     data :{"id":"Example-TodoItem-1",
          "title":"Finish Assignment!!!!!!!!!!!!!",
          "description":"The assignment is to create TodoItems.",
          "deadline":"2020-01-01T17:00:00",
          "done":true,
        "assignee":"Example-User-3"}
    };
    
    return await axios(config)
    .then(function (response) {
      return (response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  
}

export default new todoService();
