import axios from 'axios'

const DatabaseService = {

  getLogs: async function ()  {
        const data = axios.get('http://localhost:3001/logs').then(response => {
            return response.data; 
        })
        return data; 
      },
  postLog: async function (log: {}) {
      axios.post('http://localhost:3001/logs', log).then(response => {
          console.log(response.data); 
      })
  },
  getValues: async function() {
      const data = axios.get('http://localhost:3001/values').then(response => {
          var values = response.data;
          return values
      })
      return data; 
  },
  postValue: async function(value: {}) {
      const status = axios.post('http://localhost:3001/values', value).then(response => {
          console.log(response.data); 
      })
  },
  deleteValue: async function(value: {}) {
      const status = axios.delete('http://localhost:3001/values', value).then(response => {
          console.log(response.data); 
      })
  },
  getUsers: async function(value: {}){
      const data = axios.get('http://localhost:3001/users').then(response => {
          return response.data;
      })
      return data;
  },
  addUser: async function(value: {}) {
      const data = axios.post('http://localhost:3001/users').then(response => {
          console.log(response.data)
      })
  }
// ,  deleteUser:async function(value: {}){
//       const 
      
//   }


  /**

router.post(baseUrl, userController.add_user);

router.get(baseUrl+'/:id', userController.get_user);
router.delete(baseUrl+'/:id', userController.delete_user);
 */

  
}; 

export default DatabaseService; 
