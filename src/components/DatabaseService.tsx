import axios from 'axios'
import {_user} from '../components/Login'

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
  getUsers: async function(){
      const data = axios.get('http://localhost:3001/users').then(response => {
          return response.data;
      })
      return data;
  },
  addUser: async function(user: _user) {
      const status = axios.post('http://localhost:3001/users', user).then(response => {
          console.log(response.data)
      })
      return user; 
  },
  deleteUser:async function(id: Number){
      const status = axios.delete('http://localhost:3001/users/' + id).then(response => {
          console.log(response.data)
      })
      return status;
  },
  getUser: async function(id: Number){
      const data = axios.get('http://localhost:3001/users/' + id).then(response => {
          console.log(response.data)
      })
      return data;
  },
  getValueLength: async function() {
      const data = this.getValues; 
      return data.length; 
  }
};

export default DatabaseService; 
